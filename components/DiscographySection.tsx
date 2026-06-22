"use client";

import { motion } from "framer-motion";
import { Play, ExternalLink } from "lucide-react";
import Image from "next/image";
import { bandData } from "@/data/band";
import { fadeInUp, staggerContainer, fadeIn, scaleIn } from "@/lib/animations";
import { useInView } from "@/lib/useInView";

export default function DiscographySection() {
  const { ref, isInView } = useInView();

  return (
    <section id="discography" className="py-24 px-6 bg-[#0D0D15]" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-4 text-center"
        >
          <span className="text-xs font-medium tracking-[0.2em] uppercase text-violet-400/70">
            Catalog
          </span>
        </motion.div>

        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="font-playfair text-3xl sm:text-4xl font-bold text-white text-center mb-14"
        >
          Discography
        </motion.h2>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {bandData.discography.map((release) => (
            <motion.div
              key={release.id}
              variants={scaleIn}
              className="group relative rounded-2xl overflow-hidden border border-white/8 bg-[#13131A] hover:border-violet-500/30 transition-all duration-500 hover:shadow-[0_0_30px_rgba(124,58,237,0.1)]"
            >
              {/* Cover */}
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={release.coverImage}
                  alt={release.title}
                  fill
                  className="object-cover group-hover:scale-108 transition-transform duration-700"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#13131A] via-transparent to-transparent" />
                {/* Hover play button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="w-14 h-14 rounded-full bg-violet-600/90 flex items-center justify-center backdrop-blur-sm shadow-xl scale-90 group-hover:scale-100 transition-transform duration-300">
                    <Play size={18} fill="white" className="translate-x-[2px]" />
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="p-4">
                <div className="flex items-start justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-white font-semibold text-sm leading-snug mb-1 group-hover:text-violet-300 transition-colors">
                      {release.title}
                    </h3>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-violet-400/70 font-medium">{release.type}</span>
                      <span className="w-1 h-1 rounded-full bg-slate-600" />
                      <span className="text-xs text-slate-500">{release.year}</span>
                    </div>
                  </div>
                </div>
                <a
                  href={release.listenUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-white/5 hover:bg-violet-600/20 border border-white/8 hover:border-violet-500/30 text-white/70 hover:text-violet-300 text-xs font-medium transition-all duration-300"
                >
                  <Play size={12} fill="currentColor" />
                  Listen
                  <ExternalLink size={10} className="opacity-60" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
