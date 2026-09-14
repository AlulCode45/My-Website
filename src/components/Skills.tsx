"use client";

import React from "react";
import { Cpu, Layout, Server, Database, Terminal, ShieldCheck } from "lucide-react";
import { skillCategories } from "@/data/portfolioData";

export default function Skills() {
  const categoryIcons: Record<string, React.ReactNode> = {
    "Frontend Engineering": <Layout className="w-5 h-5 text-sky-400" />,
    "Backend & System APIs": <Server className="w-5 h-5 text-emerald-400" />,
    "Databases & Storage": <Database className="w-5 h-5 text-amber-400" />,
    "DevOps, Tools & Principles": <Terminal className="w-5 h-5 text-indigo-400" />,
  };

  return (
    <section id="skills" className="py-20 border-t border-white/[0.06] relative">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/[0.04] border border-white/10 text-sky-400 text-xs font-mono mb-3">
              <Cpu className="w-3.5 h-3.5" />
              <span>Keahlian & Penguasaan Teknologi</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
              Teknologi & Instrumen Rekayasa
            </h2>
          </div>
          <p className="text-sm text-zinc-400 max-w-md">
            Teknologi pilihan yang digunakan secara aktif dalam merancang antarmuka cepat, sistem backend tangguh, dan manajemen database transaksional.
          </p>
        </div>

        {/* 4-Column Skill Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-[#11131a]/60 border border-white/[0.07] hover:border-white/15 transition-all duration-300 flex flex-col"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-xl bg-white/[0.04] border border-white/10">
                  {categoryIcons[category.title] || <Cpu className="w-5 h-5 text-sky-400" />}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                  {category.title}
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6">
                {category.description}
              </p>

              {/* Skill Badges */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center justify-between gap-2 px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/[0.06] hover:border-sky-500/30 transition-colors"
                  >
                    <span className="text-xs font-medium text-zinc-200">{skill.name}</span>
                    <span className="text-[10px] font-mono text-zinc-500 bg-white/[0.04] px-1.5 py-0.5 rounded">
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Engineering Philosophy Cards */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] text-left">
            <div className="text-xs font-mono text-sky-400 mb-1">01 / Performance</div>
            <div className="text-sm font-semibold text-white mb-1">Kecepatan & Optimasi</div>
            <div className="text-xs text-zinc-400 leading-relaxed">
              Memastikan First Contentful Paint cepat, payload teroptimasi, dan interaksi yang instan.
            </div>
          </div>
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] text-left">
            <div className="text-xs font-mono text-emerald-400 mb-1">02 / Scalability</div>
            <div className="text-sm font-semibold text-white mb-1">Arsitektur Modular</div>
            <div className="text-xs text-zinc-400 leading-relaxed">
              Struktur kode yang mudah dirawat, terdokumentasi, dan siap berkembang seiring skala produk.
            </div>
          </div>
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] text-left">
            <div className="text-xs font-mono text-amber-400 mb-1">03 / Security</div>
            <div className="text-sm font-semibold text-white mb-1">Keamanan & Integritas</div>
            <div className="text-xs text-zinc-400 leading-relaxed">
              Perlindungan terhadap celah umum (SQLi, XSS, CSRF) serta otentikasi ketat berbasis token & role.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
