"use client";

import React from "react";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";
import { experiences } from "@/data/portfolioData";

export default function Experience() {
  return (
    <section id="experience" className="py-20 border-t border-white/[0.06] relative">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/[0.04] border border-white/10 text-sky-400 text-xs font-mono mb-3">
              <Briefcase className="w-3.5 h-3.5" />
              <span>Rekam Jejak Profesional</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
              Pengalaman Kerja & Kepemimpinan
            </h2>
          </div>
          <p className="text-sm text-zinc-400 max-w-md">
            Pengalaman dalam memimpin tim teknis, merancang arsitektur aplikasi berskala, dan mengeksekusi kebutuhan digital industri.
          </p>
        </div>

        {/* Timeline Items List */}
        <div className="space-y-6">
          {experiences.map((exp, idx) => {
            const isCurrent = exp.period.includes("Sekarang") || exp.period.includes("Present");

            return (
              <div
                key={idx}
                className={`group relative p-6 sm:p-8 rounded-2xl transition-all duration-300 ${
                  isCurrent
                    ? "bg-[#11131a] border border-sky-500/30 hover:border-sky-500/50 shadow-lg shadow-sky-950/20"
                    : "bg-[#11131a]/60 border border-white/[0.07] hover:border-white/15"
                }`}
              >
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 mb-4">
                  <div>
                    <div className="flex flex-wrap items-center gap-2.5 mb-1.5">
                      <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-sky-300 transition-colors">
                        {exp.role}
                      </h3>
                      {isCurrent && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-sky-500/10 text-sky-400 border border-sky-500/20">
                          <CheckCircle2 className="w-3 h-3" />
                          <span>Peran Saat Ini</span>
                        </span>
                      )}
                    </div>
                    <div className="text-sm font-medium text-zinc-300 flex flex-wrap items-center gap-x-3 gap-y-1">
                      <span className="text-white font-semibold">{exp.company}</span>
                      <span className="text-zinc-600">•</span>
                      <span className="text-zinc-400 text-xs font-mono">{exp.locationType}</span>
                    </div>
                  </div>

                  {/* Period Badge */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-zinc-300 self-start">
                    <Calendar className="w-3.5 h-3.5 text-zinc-400" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-zinc-300/90 leading-relaxed mb-5">
                  {exp.description}
                </p>

                {/* Technology Badges */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/[0.05]">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-mono text-zinc-400 bg-white/[0.03] border border-white/[0.06] rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
