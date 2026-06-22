"use client";
import React from "react";

import { motion } from "framer-motion";
import { bandData } from "@/data/band";
import { fadeIn } from "@/lib/animations";
import { useInView } from "@/lib/useInView";

const SmallSocialIcon = ({ id }: { id: string }) => {
  const icons: Record<string, React.ReactElement> = {
    instagram: (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
    tiktok: (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.81a8.19 8.19 0 004.79 1.53V6.89a4.85 4.85 0 01-1.02-.2z" />
      </svg>
    ),
    youtube: (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
        <path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" />
      </svg>
    ),
    facebook: (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
    twitter: (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  };
  return icons[id] || null;
};

export default function Footer() {
  const { ref, isInView } = useInView();
  const year = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 border-t border-white/5" ref={ref}>
      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-5xl mx-auto"
      >
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="text-center sm:text-left">
            <p className="font-playfair text-xl font-bold text-white">{bandData.name}</p>
            <p className="text-slate-600 text-xs mt-1">© {year} {bandData.name}. All rights reserved.</p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-3">
            {bandData.socialMedia.map((social) => (
              <a
                key={social.id}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-white/10 flex items-center justify-center text-slate-500 hover:text-white transition-all duration-300 border border-white/5 hover:border-white/10"
                aria-label={social.name}
              >
                <SmallSocialIcon id={social.id} />
              </a>
            ))}
          </div>
        </div>

        {/* Nav links */}
        <div className="mt-8 pt-6 border-t border-white/5 flex flex-wrap justify-center gap-x-8 gap-y-2">
          {["Latest Release", "Streaming", "Videos", "Discography", "Contact"].map((item) => (
            <button
              key={item}
              onClick={() => {
                const id = item.toLowerCase().replace(" ", "-");
                document.getElementById(id === "videos" ? "video" : id)?.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-slate-600 hover:text-white text-xs font-medium tracking-wide transition-colors"
            >
              {item}
            </button>
          ))}
        </div>
      </motion.div>
    </footer>
  );
}
