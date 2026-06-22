"use client";

import { motion } from "framer-motion";
import { Play, ExternalLink, Calendar, Music } from "lucide-react";
import Image from "next/image";
import { bandData } from "@/data/band";
import { fadeInUp, fadeIn, staggerContainer, slideInLeft } from "@/lib/animations";
import { useInView } from "@/lib/useInView";

export default function LatestReleaseSection() {
  const { ref, isInView } = useInView();

  return (
    <section id="latest-release" className="py-24 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        {/* Section label */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-14 text-center"
        >
          <span className="text-xs font-medium tracking-[0.2em] uppercase text-violet-400/70">
            Latest Release
          </span>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center"
        >
          {/* Cover Art */}
          <motion.div variants={slideInLeft} className="flex justify-center md:justify-start">
            <div className="relative group">
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-violet-600/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <Image
                  src={bandData.latestRelease.coverImage}
                  alt={bandData.latestRelease.coverAlt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 320px, 320px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                {/* Play overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={bandData.latestRelease.spotifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-16 h-16 rounded-full bg-violet-600/90 flex items-center justify-center backdrop-blur-sm hover:bg-violet-500 transition-colors shadow-xl"
                    aria-label="Play on Spotify"
                  >
                    <Play size={22} fill="white" className="translate-x-[2px]" />
                  </a>
                </div>
              </div>
              {/* Type badge */}
              <div className="absolute -bottom-3 -right-3 px-3 py-1.5 rounded-xl bg-violet-600 text-white text-xs font-semibold tracking-wide shadow-lg">
                {bandData.latestRelease.type}
              </div>
            </div>
          </motion.div>

          {/* Info */}
          <div className="text-center md:text-left">
            <motion.div variants={fadeInUp} className="flex items-center gap-2 mb-3 justify-center md:justify-start">
              <Calendar size={13} className="text-violet-400" />
              <span className="text-violet-400/80 text-xs font-medium tracking-wider uppercase">
                {bandData.latestRelease.releaseDate}
              </span>
            </motion.div>

            <motion.h2
              variants={fadeInUp}
              className="font-playfair text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight"
            >
              {bandData.latestRelease.title}
            </motion.h2>

            <motion.p variants={fadeInUp} className="text-slate-400 leading-relaxed text-sm sm:text-base mb-8">
              {bandData.latestRelease.description}
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <a
                href={bandData.latestRelease.spotifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-semibold text-sm transition-all duration-300 hover:shadow-[0_0_25px_rgba(124,58,237,0.4)] justify-center"
              >
                <Play size={15} fill="white" />
                Listen on Spotify
              </a>
              <a
                href={bandData.latestRelease.appleMusicUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/8 text-white/80 text-sm font-medium transition-all duration-300 justify-center"
              >
                <Music size={15} />
                Apple Music
                <ExternalLink size={12} className="opacity-50" />
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
