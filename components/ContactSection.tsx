"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MessageCircle, User } from "lucide-react";
import { bandData } from "@/data/band";
import { fadeInUp, staggerContainer, fadeIn } from "@/lib/animations";
import { useInView } from "@/lib/useInView";

export default function ContactSection() {
  const { ref, isInView } = useInView();
  const { contact } = bandData;

  const whatsappUrl = `https://wa.me/${contact.whatsapp.number}?text=${encodeURIComponent(contact.whatsapp.message)}`;

  return (
    <section id="contact" className="py-24 px-6 bg-[#0D0D15]" ref={ref}>
      <div className="max-w-3xl mx-auto">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-4 text-center"
        >
          <span className="text-xs font-medium tracking-[0.2em] uppercase text-violet-400/70">
            Get In Touch
          </span>
        </motion.div>

        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="font-playfair text-3xl sm:text-4xl font-bold text-white text-center mb-4"
        >
          Book us for your event
        </motion.h2>

        <motion.p
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-slate-500 text-center text-sm mb-14 max-w-md mx-auto"
        >
          Available for festivals, private shows, corporate events, and collaborations across Indonesia and internationally.
        </motion.p>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid sm:grid-cols-2 gap-4 mb-4"
        >
          {/* Booking */}
          <motion.a
            variants={fadeInUp}
            href={`mailto:${contact.booking.email}`}
            className="group flex items-center gap-4 p-5 rounded-2xl border border-white/8 bg-[#13131A] hover:border-violet-500/30 hover:bg-[#1A1A27] transition-all duration-300"
            whileHover={{ x: 2 }}
          >
            <div className="w-12 h-12 rounded-xl bg-violet-600/15 flex items-center justify-center shrink-0 group-hover:bg-violet-600/25 transition-colors">
              <Mail size={20} className="text-violet-400" />
            </div>
            <div>
              <p className="text-white/50 text-xs mb-1">{contact.booking.label}</p>
              <p className="text-white font-medium text-sm">{contact.booking.email}</p>
            </div>
          </motion.a>

          {/* Management */}
          <motion.a
            variants={fadeInUp}
            href={`mailto:${contact.management.email}`}
            className="group flex items-center gap-4 p-5 rounded-2xl border border-white/8 bg-[#13131A] hover:border-violet-500/30 hover:bg-[#1A1A27] transition-all duration-300"
            whileHover={{ x: 2 }}
          >
            <div className="w-12 h-12 rounded-xl bg-violet-600/15 flex items-center justify-center shrink-0 group-hover:bg-violet-600/25 transition-colors">
              <User size={20} className="text-violet-400" />
            </div>
            <div>
              <p className="text-white/50 text-xs mb-1">{contact.management.label}</p>
              <p className="text-white font-medium text-sm">{contact.management.name}</p>
              <p className="text-slate-500 text-xs">{contact.management.email}</p>
            </div>
          </motion.a>

          {/* Press */}
          <motion.a
            variants={fadeInUp}
            href={`mailto:${contact.press.email}`}
            className="group flex items-center gap-4 p-5 rounded-2xl border border-white/8 bg-[#13131A] hover:border-violet-500/30 hover:bg-[#1A1A27] transition-all duration-300"
            whileHover={{ x: 2 }}
          >
            <div className="w-12 h-12 rounded-xl bg-violet-600/15 flex items-center justify-center shrink-0 group-hover:bg-violet-600/25 transition-colors">
              <Phone size={20} className="text-violet-400" />
            </div>
            <div>
              <p className="text-white/50 text-xs mb-1">{contact.press.label}</p>
              <p className="text-white font-medium text-sm">{contact.press.email}</p>
            </div>
          </motion.a>

          {/* WhatsApp */}
          <motion.a
            variants={fadeInUp}
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 p-5 rounded-2xl border border-green-500/20 bg-green-500/5 hover:border-green-500/40 hover:bg-green-500/10 transition-all duration-300"
            whileHover={{ x: 2 }}
          >
            <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center shrink-0 group-hover:bg-green-500/30 transition-colors">
              <MessageCircle size={20} className="text-green-400" />
            </div>
            <div>
              <p className="text-white/50 text-xs mb-1">{contact.whatsapp.label}</p>
              <p className="text-white font-medium text-sm">Chat with us</p>
              <p className="text-green-400/70 text-xs">Quick response</p>
            </div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
