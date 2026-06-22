"use client";

import { motion } from "framer-motion";
import { Play, ChevronDown } from "lucide-react";
import Image from "next/image";
import { bandData } from "@/data/band";
import { fadeInUp, fadeIn, staggerContainer } from "@/lib/animations";

export default function HeroSection() {
  const scrollToRelease = () => {
    document.getElementById("latest-release")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={bandData.heroImage}
          alt={bandData.heroImageAlt}
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0F]/60 via-[#0A0A0F]/50 to-[#0A0A0F]" />
        {/* Violet light leak — signature element */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-violet-600/20 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-1/4 right-0 w-[300px] h-[300px] bg-purple-800/15 blur-[100px] rounded-full pointer-events-none" />
        {/* Grain texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
            backgroundSize: "128px 128px",
          }}
        />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-6 max-w-3xl mx-auto"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {/* Eyebrow */}
        <motion.div variants={fadeIn} className="mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-xs font-medium tracking-[0.15em] uppercase backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
            Surabaya, Indonesia
          </span>
        </motion.div>

        {/* Band name */}
        <motion.h1
          variants={fadeInUp}
          className="font-playfair text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-white leading-[0.9] tracking-tight mb-4"
        >
          {bandData.name}
        </motion.h1>

        {/* Tagline */}
        <motion.p
          variants={fadeInUp}
          className="font-playfair italic text-lg sm:text-xl text-violet-300/80 mb-6 tracking-wide"
        >
          {bandData.tagline}
        </motion.p>

        {/* Description */}
        <motion.p
          variants={fadeInUp}
          className="text-slate-300/70 text-sm sm:text-base leading-relaxed mb-10 max-w-xl mx-auto"
        >
          {bandData.description}
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          variants={fadeInUp}
          className="flex flex-col sm:flex-row gap-3 justify-center items-center"
        >
          <a
            href={bandData.latestRelease.spotifyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-8 py-4 rounded-2xl bg-violet-600 hover:bg-violet-500 text-white font-semibold text-sm tracking-wide transition-all duration-300 hover:shadow-[0_0_30px_rgba(124,58,237,0.5)] min-w-[180px] justify-center"
          >
            <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Play size={14} fill="white" className="translate-x-[1px]" />
            </span>
            Listen Now
          </a>
          <button
            onClick={scrollToRelease}
            className="flex items-center gap-2 px-8 py-4 rounded-2xl border border-white/10 hover:border-white/25 bg-white/5 hover:bg-white/10 text-white/80 text-sm font-medium tracking-wide transition-all duration-300 backdrop-blur-sm min-w-[180px] justify-center"
          >
            Latest Release
          </button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToRelease}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { delay: 1.5, duration: 0.5 }, y: { repeat: Infinity, duration: 2, ease: "easeInOut" } }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/30 hover:text-white/60 transition-colors"
        aria-label="Scroll down"
      >
        <ChevronDown size={28} />
      </motion.button>
    </section>
  );
}
