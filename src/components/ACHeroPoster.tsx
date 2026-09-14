"use client";

import React, { useState } from "react";
import Image from "next/image";
import { personalInfo } from "@/data/portfolioData";

export default function ACHeroPoster() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { currentTarget, clientX, clientY } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = ((clientX - left) / width - 0.5) * 8; // Subtle -4px to +4px
    const y = ((clientY - top) / height - 0.5) * 8;
    setMousePos({ x, y });
  };

  return (
    <section
      id="hero"
      onMouseMove={handleMouseMove}
      className="relative bg-editorial-bg text-editorial-ink border-b border-editorial-border pt-12 md:pt-20 pb-16 md:pb-24 overflow-hidden editorial-grid"
    >
      {/* Background Architectural AC Watermark Motifs */}
      <div
        className="absolute -right-16 -top-20 w-[420px] h-[420px] md:w-[680px] md:h-[680px] pointer-events-none opacity-[0.045] select-none transition-transform duration-700 ease-out"
        style={{ transform: `translate3d(${mousePos.x * -1.5}px, ${mousePos.y * -1.5}px, 0)` }}
        aria-hidden="true"
      >
        <Image
          src="/assets/logo 1@2x.png"
          alt=""
          fill
          className="object-contain"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Editorial Datum Ledger */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-10 border-b border-editorial-border font-mono text-xs text-editorial-muted">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-brand-purple inline-block animate-pulse" />
            <span className="text-editorial-ink font-semibold">AC // DIGITAL IDENTITY</span>
            <span className="text-editorial-muted">|</span>
            <span>SPEC.2026</span>
          </div>

          <div className="flex items-center gap-6 text-[11px]">
            <div>
              <span className="text-editorial-muted">ROLE:</span>{" "}
              <span className="text-editorial-ink font-semibold">PROJECT LEAD DEVELOPER</span>
            </div>
            <div className="hidden sm:block">
              <span className="text-editorial-muted">DISCIPLINE:</span>{" "}
              <span className="text-editorial-ink font-semibold">FULLSTACK ENGINEERING</span>
            </div>
          </div>
        </div>

        {/* Hero Poster Grid: Typographic Statement + AC Monogram Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          {/* Left Column: Bold Typographic Headline */}
          <div
            className="lg:col-span-8 transition-transform duration-500 ease-out"
            style={{ transform: `translate3d(${mousePos.x * 0.4}px, ${mousePos.y * 0.4}px, 0)` }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-purple/10 border border-brand-purple/20 text-brand-purple font-mono text-[11px] rounded-full mb-6 font-semibold">
              <span>{"[A]"} ARCHITECTURE</span>
              <span>×</span>
              <span>{"[C]"} CREATIVE CODE</span>
            </div>

            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tighter text-editorial-ink leading-[1.02] mb-6">
              Building between design fidelity and resilient backend systems.
            </h1>

            <p className="text-base sm:text-xl text-editorial-muted max-w-2xl font-sans leading-relaxed">
              Muhammad Khoyron Ahlaqul Firdaus (Alul). I design, build, deploy, and maintain software that
              survives contact with production reality—from sub-second interface frames down to PostgreSQL schemas
              and containerized Linux nodes.
            </p>
          </div>

          {/* Right Column: Architectural AC Monogram Card & Identity Specs */}
          <div className="lg:col-span-4 bg-editorial-surface border border-editorial-border rounded-2xl p-6 sm:p-7 shadow-sm">
            {/* The Brand Mark in its Squircle container */}
            <div className="flex items-center gap-4 pb-5 mb-5 border-b border-editorial-border">
              <div className="relative w-16 h-16 rounded-2xl overflow-hidden shadow-md border border-brand-purple/30 flex-shrink-0">
                <Image
                  src="/assets/icon 1@2x.png"
                  alt="AC Monogram Brand"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
              <div>
                <span className="font-mono text-[10px] text-brand-purple uppercase tracking-wider font-semibold block">
                  PRIMARY VISUAL MARK
                </span>
                <div className="font-display text-lg font-bold text-editorial-ink">
                  ALULCODE (AC)
                </div>
                <div className="font-mono text-[11px] text-editorial-muted">
                  MALANG, ID [7.98°S, 112.63°E]
                </div>
              </div>
            </div>

            {/* Spec Ledger */}
            <div className="space-y-3 font-mono text-[11px]">
              <div className="flex justify-between pb-2 border-b border-editorial-border/60">
                <span className="text-editorial-muted">CALLSIGN:</span>
                <span className="text-editorial-ink font-semibold">Alul / AlulCode</span>
              </div>
              <div className="flex justify-between pb-2 border-b border-editorial-border/60">
                <span className="text-editorial-muted">PRIMARY POST:</span>
                <span className="text-editorial-ink">PT Pusat Andalan Sukses</span>
              </div>
              <div className="flex justify-between pb-2 border-b border-editorial-border/60">
                <span className="text-editorial-muted">SPECIALTY:</span>
                <span className="text-brand-purple font-semibold">Laravel • React • Next • SQL</span>
              </div>
              <div className="flex justify-between">
                <span className="text-editorial-muted">VERIFIED AUDIT:</span>
                <span className="text-emerald-600 font-semibold">Bug Hunter (Disclosure Verif.)</span>
              </div>
            </div>

            {/* Quick dispatch anchor */}
            <div className="mt-6 pt-4 border-t border-editorial-border flex items-center justify-between font-mono text-xs">
              <span className="text-editorial-muted">STATUS</span>
              <span className="inline-flex items-center gap-1.5 text-editorial-ink font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                ACTIVE FOR ENGAGEMENTS
              </span>
            </div>
          </div>
        </div>

        {/* Quick Factual Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-editorial-border font-mono">
          {personalInfo.stats.map((stat, i) => (
            <div key={i} className="bg-editorial-surface border border-editorial-border p-4 rounded-xl">
              <div className="text-[10px] text-editorial-muted uppercase tracking-wider mb-1 font-semibold">
                {stat.label}
              </div>
              <div className="text-xl sm:text-2xl font-bold font-display text-editorial-ink">
                {stat.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
