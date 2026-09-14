"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowDown, Copy, Check, Sparkles, MapPin, Briefcase, Award } from "lucide-react";
import { personalInfo } from "@/data/portfolioData";

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const corePills = [
    "Next.js / React",
    "TypeScript",
    "Laravel / PHP",
    "PostgreSQL & MySQL",
    "System Architecture",
    "RESTful APIs",
  ];

  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-center text-center">
          
          {/* Availability & Location Pill */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 mb-8 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-medium text-zinc-300 font-mono tracking-tight">
              {personalInfo.status}
            </span>
            <span className="text-zinc-600">•</span>
            <div className="flex items-center gap-1 text-xs text-zinc-400">
              <MapPin className="w-3 h-3 text-zinc-500" />
              <span>Indonesia</span>
            </div>
          </div>

          {/* Main Title & Editorial Headline */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white max-w-4xl leading-[1.15] mb-6">
            Merancang & Membangun Sistem Web Berkualitas{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-sky-200 to-blue-400">
              Enterprise & Teruji.
            </span>
          </h1>

          {/* Subtitle / Bio */}
          <p className="text-base sm:text-lg md:text-xl text-zinc-300/90 max-w-2xl leading-relaxed mb-8 text-balance font-normal">
            Halo, saya <span className="text-white font-semibold">{personalInfo.name}</span>{" "}
            (<span className="text-sky-300 font-mono text-sm sm:text-base">AlulCode</span>).{" "}
            Project Lead Developer di PT Pusat Andalan Sukses Terpadu dan Fullstack Engineer yang berdedikasi membangun aplikasi web modern, performan, dan aman.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 mb-14">
            <Link
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-zinc-950 font-semibold text-sm hover:bg-zinc-200 hover:scale-[1.02] transition-all shadow-lg shadow-white/5"
            >
              <span>Lihat Proyek</span>
              <ArrowDown className="w-4 h-4" />
            </Link>

            <Link
              href="#experience"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-white font-medium text-sm transition-all"
            >
              <Briefcase className="w-4 h-4 text-sky-400" />
              <span>Jejak Karir</span>
            </Link>

            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 text-zinc-300 hover:text-white text-sm font-mono transition-all"
              title="Klik untuk menyalin email"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400 text-xs">Email Disalin!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-zinc-400" />
                  <span className="text-xs">{personalInfo.email}</span>
                </>
              )}
            </button>
          </div>

          {/* Core Tech Stack Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2 max-w-2xl mb-14">
            <span className="text-xs text-zinc-500 font-mono mr-1">Fokus Stack:</span>
            {corePills.map((pill) => (
              <span
                key={pill}
                className="px-3 py-1 text-xs font-mono text-zinc-300 bg-white/[0.03] border border-white/[0.07] rounded-md hover:border-sky-500/30 transition-colors"
              >
                {pill}
              </span>
            ))}
          </div>

          {/* Quick Metrics / Stats Grid */}
          <div className="w-full max-w-4xl grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-8 border-t border-white/[0.07]">
            {personalInfo.stats.map((stat, idx) => (
              <div
                key={idx}
                className="p-4 sm:p-5 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-white/10 transition-all text-left"
              >
                <div className="text-2xl sm:text-3xl font-bold font-display text-white tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-zinc-400 mt-1 font-sans">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
