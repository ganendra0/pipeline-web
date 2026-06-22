"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { bandData } from "@/data/band";
import { fadeInUp, fadeIn } from "@/lib/animations";
import { useInView } from "@/lib/useInView";

export default function MusicVideoSection() {
  const { ref, isInView } = useInView();

  return (
    <section id="video" className="py-24 px-6" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-4 text-center"
        >
          <span className="text-xs font-medium tracking-[0.2em] uppercase text-violet-400/70">
            Music Video
          </span>
        </motion.div>

        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="font-playfair text-3xl sm:text-4xl font-bold text-white text-center mb-3"
        >
          {bandData.musicVideo.title}
        </motion.h2>

        <motion.p
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-slate-500 text-center text-sm mb-10"
        >
          {bandData.musicVideo.description}
        </motion.p>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative rounded-2xl overflow-hidden border border-white/8 shadow-2xl bg-[#0D0D15]"
          style={{ aspectRatio: "16/9" }}
        >
          {/* Glow */}
          <div className="absolute -inset-2 bg-violet-600/10 blur-3xl pointer-events-none" />
          <iframe
            src={`https://www.youtube.com/embed/${bandData.musicVideo.youtubeId}?rel=0&modestbranding=1&color=white`}
            title={bandData.musicVideo.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full rounded-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
