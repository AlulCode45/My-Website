"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function PurpleEvent() {
  return (
    <section className="relative bg-gradient-to-br from-[#9814DC] via-[#A815E0] to-[#C71FE2] text-white py-28 sm:py-36 px-6 sm:px-10 overflow-hidden">
      {/* Background Geometric Light & Curves derived from AC Monogram */}
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-white/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-black/20 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-16 border-b border-white/20">
          <div>
            <span className="font-mono text-xs uppercase tracking-ultra text-white/70 block mb-3 font-semibold">
              AC MONOGRAM PHILOSOPHY
            </span>
            <h2 className="font-display font-extrabold text-4xl sm:text-6xl tracking-tight leading-tight">
              Design <span className="font-serif italic font-normal text-white/90">meets</span>
              <br />
              Engineering.
            </h2>
          </div>

          <p className="max-w-md font-sans text-sm sm:text-base text-white/85 leading-relaxed">
            The interlocking “A” and “C” monogram represents a dual commitment: the elegance of human design converging with the resilience of structured code.
          </p>
        </div>

        {/* Dynamic Dualism Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-16">
          {/* Form 'A' - Application & Architecture */}
          <div className="p-8 sm:p-10 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 hover:bg-white/15 transition-all duration-300">
            <div className="flex items-center justify-between mb-8">
              <span className="font-mono text-xs tracking-widest text-white/60">
                [ MOTIF A ]
              </span>
              <span className="text-2xl font-bold font-display text-white">01</span>
            </div>
            <h3 className="font-display font-bold text-2xl text-white mb-2">
              Architecture & Application
            </h3>
            <p className="font-serif italic text-white/80 text-lg mb-6">
              The structural integrity of software.
            </p>
            <ul className="space-y-2.5 text-sm text-white/85 font-sans border-t border-white/10 pt-4">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-white" />
                Relational schema normalization & transaction safety (PostgreSQL)
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-white" />
                RESTful API orchestration with policy-based authorization (Laravel)
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-white" />
                Containerized multi-service deployment with Docker & Nginx
              </li>
            </ul>
          </div>

          {/* Form 'C' - Code & Creativity */}
          <div className="p-8 sm:p-10 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 hover:bg-white/15 transition-all duration-300">
            <div className="flex items-center justify-between mb-8">
              <span className="font-mono text-xs tracking-widest text-white/60">
                [ MOTIF C ]
              </span>
              <span className="text-2xl font-bold font-display text-white">02</span>
            </div>
            <h3 className="font-display font-bold text-2xl text-white mb-2">
              Code & Creativity
            </h3>
            <p className="font-serif italic text-white/80 text-lg mb-6">
              The human clarity of user interaction.
            </p>
            <ul className="space-y-2.5 text-sm text-white/85 font-sans border-t border-white/10 pt-4">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-white" />
                State machines and component composability (React & TypeScript)
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-white" />
                Fluid, physical choreography without layout jumps (Framer Motion)
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-white" />
                Sub-second response and Core Web Vitals optimization (Next.js)
              </li>
            </ul>
          </div>
        </div>

        {/* Large Monogram Emblem Center */}
        <div className="mt-16 pt-12 border-t border-white/20 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-white/20 p-2 flex items-center justify-center">
              <Image
                src="/assets/icon 1@2x.png"
                alt="AC Monogram White"
                width={48}
                height={48}
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <p className="font-display font-bold text-sm tracking-tight text-white">
                MUHAMMAD KHOYRON AHLAQUL FIRDAUS
              </p>
              <p className="font-mono text-xs text-white/70">
                AlulCode • Engineering Discipline • Malang, ID
              </p>
            </div>
          </div>

          <span className="font-mono text-xs uppercase tracking-widest text-white/60">
            [ CONTINUOUS SCROLL TO CASE STUDIES ↓ ]
          </span>
        </div>
      </div>
    </section>
  );
}
