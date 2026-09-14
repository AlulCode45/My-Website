"use client";

import React from "react";
import { GraduationCap, Calendar, CheckCircle2 } from "lucide-react";
import { educationList } from "@/data/portfolioData";

export default function Education() {
  return (
    <section id="education" className="py-20 border-t border-white/[0.06] relative">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/[0.04] border border-white/10 text-sky-400 text-xs font-mono mb-3">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Jalur Akademik</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
              Pendidikan Formal
            </h2>
          </div>
          <p className="text-sm text-zinc-400 max-w-md">
            Pondasi keilmuan rekayasa perangkat lunak, algoritma pemrograman, dan sains komputasi yang dipelajari secara terstruktur.
          </p>
        </div>

        {/* Education Cards */}
        <div className="space-y-6">
          {educationList.map((edu, idx) => {
            const isCurrent = edu.period.includes("Sekarang") || edu.period.includes("Present");

            return (
              <div
                key={idx}
                className={`p-6 sm:p-8 rounded-2xl transition-all duration-300 ${
                  isCurrent
                    ? "bg-[#11131a] border border-sky-500/30 hover:border-sky-500/50"
                    : "bg-[#11131a]/60 border border-white/[0.07] hover:border-white/15"
                }`}
              >
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-3 mb-3">
                  <div>
                    <div className="flex flex-wrap items-center gap-2.5 mb-1">
                      <h3 className="text-lg sm:text-xl font-bold text-white">
                        {edu.degree}
                      </h3>
                      {isCurrent && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-sky-500/10 text-sky-400 border border-sky-500/20">
                          <CheckCircle2 className="w-3 h-3" />
                          <span>Studi Aktif</span>
                        </span>
                      )}
                    </div>
                    <p className="text-sm font-semibold text-zinc-300">
                      {edu.institution}
                    </p>
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-zinc-300 self-start">
                    <Calendar className="w-3.5 h-3.5 text-zinc-400" />
                    <span>{edu.period}</span>
                  </div>
                </div>

                <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                  {edu.description}
                </p>

                {edu.grades && edu.grades.length > 0 && (
                  <div className="pt-4 border-t border-white/[0.05]">
                    <span className="text-xs font-mono text-zinc-400 block mb-2">
                      Fokus Kurikulum Utama:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {edu.grades.map((grade, gIdx) => (
                        <div
                          key={gIdx}
                          className="flex items-center gap-2 text-xs text-zinc-300 bg-white/[0.02] border border-white/[0.04] px-3 py-1.5 rounded-md"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                          <span>{grade}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
