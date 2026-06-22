"use client";
import React from "react";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { bandData } from "@/data/band";
import { fadeInUp, staggerContainer, fadeIn } from "@/lib/animations";
import { useInView } from "@/lib/useInView";

const PlatformIcon = ({ id }: { id: string }) => {
  const icons: Record<string, React.ReactElement> = {
    spotify: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
      </svg>
    ),
    "apple-music": (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M23.994 6.124a9.23 9.23 0 00-.24-2.19c-.317-1.31-1.062-2.31-2.18-3.043a5.022 5.022 0 00-1.877-.726 10.496 10.496 0 00-1.564-.15c-.04-.003-.083-.01-.124-.013H5.986c-.152.01-.303.017-.455.026C4.786.07 4.043.15 3.34.428 2.004.958 1.04 1.88.475 3.208a8.708 8.708 0 00-.39 1.81 15.931 15.931 0 00-.08 1.18c-.003.04-.006.085-.008.127v8.95c.01.152.018.304.028.456.06 1.04.196 2.11.635 3.05.75 1.62 2.052 2.65 3.828 3.077 1.264.308 2.582.32 3.872.323h7.68c1.108-.01 2.21-.065 3.296-.4 1.617-.49 2.85-1.48 3.617-2.98.43-.83.617-1.728.67-2.65.04-.677.05-1.357.06-2.036V8.08a15.46 15.46 0 00-.008-.124 9.51 9.51 0 00-.005-.087zm-6.35 11.478v-7.5c0-.625-.498-1.125-1.125-1.125s-1.125.5-1.125 1.125v7.5c0 .625.498 1.125 1.125 1.125s1.125-.5 1.125-1.125zM12 9.375c-1.5 0-2.625 1.125-2.625 2.625S10.5 14.625 12 14.625s2.625-1.125 2.625-2.625S13.5 9.375 12 9.375z" />
      </svg>
    ),
    bandcamp: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M0 18.75l7.437-13.5H24l-7.438 13.5z" />
      </svg>
    ),
    soundcloud: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M11.56 8.87V17h8.76.04c1.42 0 1.64-1.17 1.64-1.8 0-.97-.88-1.77-2.02-1.77-.28 0-.54.05-.78.14-.05-2.38-2.05-4.3-4.52-4.3-1.17 0-2.24.43-3.12 1.13V8.87zm-1.06 7.85c.01-.24.01-.48.01-.72v-4.82c-.43-.3-.95-.47-1.5-.47-1.47 0-2.66 1.19-2.66 2.66 0 1.47 1.19 2.66 2.66 2.66.55 0 1.07-.17 1.49-.46v.15c0 .55-.49 1-1.1 1H.25C.11 16.72 0 16.5 0 16.26c0-.46.42-.83.93-.83h.06c-.26-1.61.91-3.1 2.55-3.1 1.5 0 2.72 1.18 2.72 2.64 0 .24-.03.47-.09.69h4.33v.06z" />
      </svg>
    ),
    "youtube-music": (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M12 0C5.376 0 0 5.376 0 12s5.376 12 12 12 12-5.376 12-12S18.624 0 12 0zm0 19.104c-3.924 0-7.104-3.18-7.104-7.104S8.076 4.896 12 4.896s7.104 3.18 7.104 7.104-3.18 7.104-7.104 7.104zm0-13.332c-3.432 0-6.228 2.796-6.228 6.228S8.568 18.228 12 18.228s6.228-2.796 6.228-6.228S15.432 5.772 12 5.772zM9.684 15.54V8.46L15.816 12l-6.132 3.54z" />
      </svg>
    ),
  };
  return icons[id] || <ExternalLink className="w-8 h-8" />;
};

export default function StreamingSection() {
  const { ref, isInView } = useInView();

  return (
    <section id="streaming" className="py-24 px-6 bg-[#0D0D15]" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-4 text-center"
        >
          <span className="text-xs font-medium tracking-[0.2em] uppercase text-violet-400/70">
            Stream Everywhere
          </span>
        </motion.div>

        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="font-playfair text-3xl sm:text-4xl font-bold text-white text-center mb-14"
        >
          Listen on your favorite platform
        </motion.h2>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-col gap-3"
        >
          {bandData.streamingPlatforms.map((platform) => (
            <motion.a
              key={platform.id}
              variants={fadeInUp}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-5 rounded-2xl border transition-all duration-300 min-h-[72px]"
              style={{
                backgroundColor: platform.bgColor,
                borderColor: platform.borderColor,
              }}
              whileHover={{ x: 4, scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                  style={{ color: platform.color, backgroundColor: `${platform.color}18` }}
                >
                  <PlatformIcon id={platform.id} />
                </div>
                <div>
                  <p className="text-white font-semibold text-base">{platform.name}</p>
                  <p className="text-slate-500 text-xs mt-0.5">Open in {platform.name}</p>
                </div>
              </div>

              <div
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 group-hover:shadow-lg shrink-0"
                style={{
                  color: platform.color,
                  backgroundColor: `${platform.color}20`,
                }}
              >
                Open
                <ExternalLink size={14} />
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
