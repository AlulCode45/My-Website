"use client";

import React, { useState } from "react";
import { Copy, Check, Terminal, Code2, Layers, ShieldCheck, Sparkles, ArrowRight, ExternalLink } from "lucide-react";
import { personalInfo } from "@/data/portfolioData";
import { motion } from "framer-motion";

export default function TerminalHero() {
  const [activeTab, setActiveTab] = useState<"profile" | "stack" | "philosophy">("profile");
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const codeSnippets = {
    profile: `// profile.config.ts
export const engineer = {
  name: "Muhammad Khoyron Ahlaqul Firdaus",
  handle: "AlulCode",
  currentRole: {
    title: "Project Lead Developer",
    organization: "PT Pusat Andalan Sukses Terpadu",
    status: "Active / Engineering Leadership"
  },
  location: "East Java, Indonesia",
  focus: ["Fullstack Architecture", "Web Security", "System Optimization"],
  openForOpportunities: true,
  contact: "${personalInfo.email}"
};`,

    stack: `// architecture.stack.ts
export const productionStack = {
  frontend: ["Next.js (App Router)", "React", "TypeScript", "Tailwind CSS"],
  backend: ["Laravel (PHP 8.3)", "Node.js", "RESTful API Design"],
  database: ["PostgreSQL", "MySQL", "Relational Modeling & Indexes"],
  infrastructure: ["Linux / POSIX", "Docker", "Git Workflow", "Vercel"],
  securityPractices: ["Vulnerability Triage", "OWASP Top 10 Hardening", "RBAC"]
};`,

    philosophy: `// engineering_standards.md
# Core Engineering Principles
1. Zero Fluff: Write readable, deterministic, and maintainable code.
2. Performance First: Optimize critical rendering path & bundle sizes.
3. Security by Design: Validate inputs, protect state, enforce auth boundaries.
4. Business Impact: Translate domain problems into reliable software.`
  };

  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 z-10">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Authoritative Developer Identity */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="lg:col-span-6 flex flex-col"
          >
            {/* Live Role & Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 w-fit mb-6 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-mono text-zinc-300">
                Lead Developer & Fullstack Engineer
              </span>
            </div>

            {/* Name */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4 font-display leading-[1.15]">
              Muhammad Khoyron{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-sky-200 to-blue-400">
                Ahlaqul Firdaus
              </span>
            </h1>

            {/* Title & Authentic Bio */}
            <p className="text-base sm:text-lg text-zinc-300 font-normal leading-relaxed mb-6">
              Memimpin rekayasa produk digital di <strong className="text-white font-medium">PT Pusat Andalan Sukses Terpadu</strong>. Berpengalaman 5+ tahun membangun sistem web berskala produksi menggunakan arsitektur modern Next.js, Laravel, dan PostgreSQL.
            </p>

            {/* Highlights bullet badges */}
            <div className="flex flex-col gap-2.5 mb-8 text-xs text-zinc-300/90 font-mono">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-sky-400"></span>
                <span>Juara III Kompetisi Web Development Tingkat Nasional</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                <span>Terverifikasi Responsible Security Disclosure (Bug Hunter)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-400"></span>
                <span>Apresiasi Siswa Berprestasi Dinas Pendidikan Jawa Timur</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 mb-10">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-zinc-950 font-semibold text-sm hover:bg-zinc-200 hover:scale-[1.02] transition-all shadow-lg shadow-white/5"
              >
                <span>Lihat Karya Nyata</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.09] border border-white/10 text-zinc-200 hover:text-white text-xs sm:text-sm font-mono transition-all"
                title="Salin alamat email"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400">Email Disalin!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-zinc-400" />
                    <span>{personalInfo.email}</span>
                  </>
                )}
              </button>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-3 pt-6 border-t border-white/[0.08]">
              <div>
                <div className="text-2xl font-bold font-display text-white">5+ Thn</div>
                <div className="text-xs text-zinc-400 mt-0.5 font-sans">Pengalaman Rekayasa</div>
              </div>
              <div>
                <div className="text-2xl font-bold font-display text-white">15+</div>
                <div className="text-xs text-zinc-400 mt-0.5 font-sans">Proyek Selesai</div>
              </div>
              <div>
                <div className="text-2xl font-bold font-display text-emerald-400">Lead Dev</div>
                <div className="text-xs text-zinc-400 mt-0.5 font-sans">Peran Aktif</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Developer Console */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
            className="lg:col-span-6"
          >
            <div className="rounded-2xl bg-[#0d0e14]/90 border border-white/10 overflow-hidden shadow-2xl shadow-sky-950/20 backdrop-blur-xl">
              
              {/* Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#13151f] border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56]/90 border border-[#e0443e]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]/90 border border-[#dea123]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#27c93f]/90 border border-[#1aab29]"></div>
                  <span className="text-[11px] font-mono text-zinc-400 ml-2">
                    alul@workstation:~
                  </span>
                </div>

                {/* Tab Switcher */}
                <div className="flex items-center gap-1 bg-black/40 p-1 rounded-lg border border-white/5">
                  <button
                    onClick={() => setActiveTab("profile")}
                    className={`px-2.5 py-1 text-[11px] font-mono rounded-md transition-all ${
                      activeTab === "profile"
                        ? "bg-white/15 text-white font-medium shadow-sm"
                        : "text-zinc-400 hover:text-zinc-200"
                    }`}
                  >
                    profile.ts
                  </button>
                  <button
                    onClick={() => setActiveTab("stack")}
                    className={`px-2.5 py-1 text-[11px] font-mono rounded-md transition-all ${
                      activeTab === "stack"
                        ? "bg-white/15 text-white font-medium shadow-sm"
                        : "text-zinc-400 hover:text-zinc-200"
                    }`}
                  >
                    stack.ts
                  </button>
                  <button
                    onClick={() => setActiveTab("philosophy")}
                    className={`px-2.5 py-1 text-[11px] font-mono rounded-md transition-all ${
                      activeTab === "philosophy"
                        ? "bg-white/15 text-white font-medium shadow-sm"
                        : "text-zinc-400 hover:text-zinc-200"
                    }`}
                  >
                    standards.md
                  </button>
                </div>
              </div>

              {/* Code Editor Body */}
              <div className="p-5 overflow-x-auto text-xs font-mono leading-relaxed bg-[#0b0c12]/90 min-h-[300px]">
                <pre className="text-zinc-300">
                  <code>{codeSnippets[activeTab]}</code>
                </pre>
              </div>

              {/* Terminal Footer Info */}
              <div className="px-4 py-2.5 bg-[#13151f]/80 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-zinc-400">
                <div className="flex items-center gap-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>TypeScript 5.4 • Ready</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-zinc-500">UTF-8</span>
                  <span className="text-zinc-500">LF</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
