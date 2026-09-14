"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function EditorialHero() {
  return (
    <section className="relative min-h-[92vh] pt-36 pb-20 px-6 sm:px-10 max-w-7xl mx-auto flex flex-col justify-between overflow-hidden">
      {/* Editorial Top Dateline */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-12 border-b border-[#110A13]/10">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs uppercase tracking-widest text-brand-purple font-medium">
            Vol. 2026
          </span>
          <span className="text-[#110A13]/25">/</span>
          <span className="font-mono text-xs uppercase tracking-widest text-[#6A6372]">
            Digital Monograph
          </span>
        </div>

        <div className="flex items-center gap-4 text-xs font-mono tracking-wider text-[#6A6372]">
          <span>FULLSTACK WEB DEVELOPER</span>
          <span className="hidden sm:inline text-[#110A13]/25">•</span>
          <span className="hidden sm:inline">MALANG, INDONESIA</span>
        </div>
      </div>

      {/* Main Monumental Typography & Asymmetric Layout */}
      <div className="py-12 md:py-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
        <div className="lg:col-span-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="font-mono text-[11px] uppercase tracking-ultra text-[#6A6372] mb-4">
              [ IDENTITY & DIRECTION ]
            </p>
            <h1 className="font-display font-extrabold text-5xl sm:text-7xl lg:text-8xl tracking-tighter leading-[0.94] text-[#110A13] uppercase">
              Muhammad
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9814DC] via-[#C71FE2] to-[#110A13]">
                Khoyron
              </span>
              <br />
              <span className="font-light tracking-tight text-3xl sm:text-5xl lg:text-6xl lowercase font-sans text-[#6A6372]">
                ahlaqul firdaus
              </span>
            </h1>
          </motion.div>
        </div>

        {/* Secondary Editorial Commentary & Cropped Monogram */}
        <div className="lg:col-span-4 flex flex-col justify-between h-full pt-4 lg:pt-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6"
          >
            {/* Pure AC visual motif */}
            <div className="relative w-20 h-20 flex items-center justify-center flex-shrink-0">
              <Image
                src="/assets/icon 1@2x.png"
                alt="AC Identity"
                width={80}
                height={80}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="space-y-3">
              <p className="font-serif italic text-2xl sm:text-3xl text-[#110A13] leading-snug">
                Building systems with{" "}
                <span className="text-brand-purple font-normal">clarity</span>,{" "}
                <span className="text-[#110A13]">substance</span>, and intent.
              </p>
              <p className="text-sm text-[#6A6372] leading-relaxed font-sans">
                Fullstack engineer and project lead. Specialized in bridging backend rigor (Laravel, PostgreSQL, Docker) with fluid, intentional client experiences (React, Next.js, Tailwind).
              </p>
            </div>

            <div className="pt-2 flex items-center gap-5 text-xs font-mono text-[#110A13]">
              <a
                href="#work"
                className="inline-flex items-center gap-1.5 pb-0.5 border-b border-[#110A13] hover:text-brand-purple hover:border-brand-purple transition-colors font-medium tracking-wide"
              >
                EXPLORE PROJECTS ↓
              </a>
              <a
                href="#about"
                className="inline-flex items-center gap-1.5 pb-0.5 border-b border-[#110A13]/30 hover:border-[#110A13] text-[#6A6372] hover:text-[#110A13] transition-colors tracking-wide"
              >
                READ THESIS →
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Hero Footnote Strip */}
      <div className="pt-8 border-t border-[#110A13]/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-xs text-[#6A6372]">
        <div>
          <span className="font-mono text-[10px] uppercase tracking-widest text-[#110A13]/40 block mb-1">
            CORE ROLE
          </span>
          <span className="font-medium text-[#110A13]">Lead Fullstack Developer</span>
        </div>
        <div>
          <span className="font-mono text-[10px] uppercase tracking-widest text-[#110A13]/40 block mb-1">
            FLAGSHIP ARCHITECTURE
          </span>
          <span className="font-medium text-[#110A13]">PT PAS Enterprise Tax Platform</span>
        </div>
        <div>
          <span className="font-mono text-[10px] uppercase tracking-widest text-[#110A13]/40 block mb-1">
            FOUNDATION
          </span>
          <span className="font-medium text-[#110A13]">Informatics, Institut Asia Malang</span>
        </div>
        <div>
          <span className="font-mono text-[10px] uppercase tracking-widest text-[#110A13]/40 block mb-1">
            CODE DISCIPLINE
          </span>
          <span className="font-medium text-[#110A13]">Design × Systems Rigor</span>
        </div>
      </div>
    </section>
  );
}
