"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { bandData } from "@/data/band";

const navLinks = [
  { label: "Music", href: "latest-release" },
  { label: "Stream", href: "streaming" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-[#0A0A0F]/90 backdrop-blur-xl border-b border-white/5 shadow-2xl" : ""
        }`}
      >
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="font-playfair text-lg font-bold text-white hover:text-violet-300 transition-colors"
          >
            {bandData.name}
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="px-4 py-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 text-sm font-medium transition-all duration-200"
              >
                {link.label}
              </button>
            ))}
            <a
              href={bandData.latestRelease.spotifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 px-5 py-2 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-sm font-semibold transition-all duration-300 hover:shadow-[0_0_20px_rgba(124,58,237,0.4)]"
            >
              Listen
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl text-slate-400 hover:text-white hover:bg-white/8 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed top-16 left-0 right-0 z-40 bg-[#0A0A0F]/95 backdrop-blur-xl border-b border-white/8 shadow-2xl md:hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="w-full text-left px-4 py-3.5 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 text-sm font-medium transition-all duration-200"
                >
                  {link.label}
                </button>
              ))}
              <a
                href={bandData.latestRelease.spotifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 w-full py-3.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-sm font-semibold text-center transition-all duration-300"
              >
                Listen Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
