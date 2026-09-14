"use client";

import React, { useState } from "react";
import Image from "next/image";
import { intersectionData } from "@/data/portfolioData";

export default function ACIntersectionSection() {
  const [activeSide, setActiveSide] = useState<"A" | "C" | "BOTH">("BOTH");

  return (
    <section
      id="intersection"
      className="relative bg-gradient-to-br from-brand-purple via-brand-purple-vibrant to-brand-magenta text-white py-20 md:py-32 overflow-hidden"
    >
      {/* Background Decorative Diagonal & Arc Watermarks referencing AC */}
      <div className="absolute inset-0 pointer-events-none opacity-10 flex items-center justify-center select-none" aria-hidden="true">
        <div className="relative w-[700px] h-[700px] lg:w-[1000px] lg:h-[1000px]">
          <Image
            src="/assets/icon 2@2x.png"
            alt=""
            fill
            className="object-contain"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full font-mono text-xs tracking-widest uppercase mb-4 text-white/90">
            <span>THE SIGNATURE INTERSECTION</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4">
            Where Architecture Meets Creative Code.
          </h2>
          <p className="text-white/85 text-base sm:text-lg font-sans leading-relaxed">
            The &ldquo;AC&rdquo; monogram represents two interlocking disciplines: the structural rigor of
            backend engineering and the responsive empathy of modern frontend design.
          </p>

          {/* Interactive Switchers */}
          <div className="flex items-center justify-center gap-3 mt-8 font-mono text-xs">
            <button
              onClick={() => setActiveSide(activeSide === "A" ? "BOTH" : "A")}
              className={`px-4 py-2 rounded-full border transition-all ${
                activeSide === "A" || activeSide === "BOTH"
                  ? "bg-white text-brand-purple font-bold shadow-md border-white"
                  : "bg-white/10 text-white/80 border-white/20 hover:bg-white/20"
              }`}
            >
              [A] ARCHITECTURE WING
            </button>
            <button
              onClick={() => setActiveSide("BOTH")}
              className={`px-3 py-2 rounded-full border text-[11px] transition-all ${
                activeSide === "BOTH"
                  ? "bg-black/30 text-white border-white/40"
                  : "bg-white/5 text-white/60 border-white/10 hover:bg-white/15"
              }`}
            >
              DUAL EQUILIBRIUM
            </button>
            <button
              onClick={() => setActiveSide(activeSide === "C" ? "BOTH" : "C")}
              className={`px-4 py-2 rounded-full border transition-all ${
                activeSide === "C" || activeSide === "BOTH"
                  ? "bg-white text-brand-magenta font-bold shadow-md border-white"
                  : "bg-white/10 text-white/80 border-white/20 hover:bg-white/20"
              }`}
            >
              [C] CREATIVE WING
            </button>
          </div>
        </div>

        {/* The Dual System Intersecting Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Wing A: Architecture & Application */}
          <div
            onMouseEnter={() => setActiveSide("A")}
            className={`lg:col-span-6 bg-black/25 backdrop-blur-md border rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
              activeSide === "A" || activeSide === "BOTH"
                ? "border-white/50 bg-black/35 shadow-xl scale-[1.01]"
                : "border-white/15 opacity-60"
            }`}
          >
            <div>
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/15 font-mono text-xs">
                <span className="text-white/70 font-semibold tracking-wider uppercase">
                  WING A // BACKEND DISCIPLINE
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-white/10 text-white font-mono text-[11px]">
                  STABILITY & SCHEMA
                </span>
              </div>

              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center font-display font-black text-2xl text-white">
                  A
                </div>
                <div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                    {intersectionData.aSide.title}
                  </h3>
                  <p className="font-mono text-xs text-white/75">
                    {intersectionData.aSide.tagline}
                  </p>
                </div>
              </div>

              <ul className="space-y-3 font-sans text-sm text-white/90 my-6">
                {intersectionData.aSide.points.map((pt, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="font-mono text-xs text-white font-bold mt-0.5">0{idx + 1}.</span>
                    <span className="leading-relaxed">{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-white/15 font-mono text-xs text-white/75">
              <span className="text-white/50 block text-[10px] uppercase mb-1">PROVEN IN PRODUCTION:</span>
              <div className="flex flex-wrap gap-1.5">
                {intersectionData.aSide.highlightProjects.map((p) => (
                  <span key={p} className="px-2 py-0.5 bg-white/10 rounded text-[11px] text-white">
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Wing C: Code & Creative */}
          <div
            onMouseEnter={() => setActiveSide("C")}
            className={`lg:col-span-6 bg-black/25 backdrop-blur-md border rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
              activeSide === "C" || activeSide === "BOTH"
                ? "border-white/50 bg-black/35 shadow-xl scale-[1.01]"
                : "border-white/15 opacity-60"
            }`}
          >
            <div>
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/15 font-mono text-xs">
                <span className="text-white/70 font-semibold tracking-wider uppercase">
                  WING C // FRONTEND DISCIPLINE
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-white/10 text-white font-mono text-[11px]">
                  INTERACTION & RUNTIME
                </span>
              </div>

              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center font-display font-black text-2xl text-white">
                  C
                </div>
                <div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                    {intersectionData.cSide.title}
                  </h3>
                  <p className="font-mono text-xs text-white/75">
                    {intersectionData.cSide.tagline}
                  </p>
                </div>
              </div>

              <ul className="space-y-3 font-sans text-sm text-white/90 my-6">
                {intersectionData.cSide.points.map((pt, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="font-mono text-xs text-white font-bold mt-0.5">0{idx + 1}.</span>
                    <span className="leading-relaxed">{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-white/15 font-mono text-xs text-white/75">
              <span className="text-white/50 block text-[10px] uppercase mb-1">PROVEN IN PRODUCTION:</span>
              <div className="flex flex-wrap gap-1.5">
                {intersectionData.cSide.highlightProjects.map((p) => (
                  <span key={p} className="px-2 py-0.5 bg-white/10 rounded text-[11px] text-white">
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
