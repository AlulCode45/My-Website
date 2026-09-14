"use client";

import React, { useState } from "react";
import { experiences, educationList } from "@/data/portfolioData";

export default function ExperienceArchive() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggleExpand = (idx: number) => {
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };

  return (
    <section id="experience" className="relative bg-vault-bg text-vault-ink border-b border-vault-border py-20 md:py-28 vault-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 mb-12 border-b border-vault-border">
          <div>
            <div className="flex items-center gap-2 mb-2 font-mono text-xs text-brand-magenta font-semibold">
              <span>{"// SECTION 04"}</span>
              <span>•</span>
              <span className="tracking-widest uppercase">TRACK RECORD & POSTS</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white">
              Engineering Log & Appointments
            </h2>
          </div>
          <p className="font-mono text-xs text-vault-muted max-w-sm">
            Technical leadership milestones, production system ownership, and progressive enterprise responsibilities.
          </p>
        </div>

        {/* Editorial Experience Archive */}
        <div className="space-y-4 mb-16">
          {experiences.map((exp, idx) => {
            const isExpanded = expandedIndex === idx;
            return (
              <div
                key={idx}
                className="bg-vault-surface border border-vault-border rounded-xl transition-all"
              >
                {/* Header Row */}
                <div
                  onClick={() => toggleExpand(idx)}
                  className="p-5 sm:p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer hover:bg-vault-elevated transition-colors"
                >
                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6">
                    <span className="font-mono text-xs text-brand-magenta font-semibold tracking-wider min-w-[140px]">
                      {exp.period}
                    </span>
                    <div>
                      <h3 className="font-display text-lg sm:text-xl font-bold text-white">
                        {exp.role}
                      </h3>
                      <span className="font-mono text-xs text-zinc-400">
                        {exp.company} • <span className="text-vault-muted">{exp.locationType}</span>
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="hidden lg:flex flex-wrap gap-1.5">
                      {exp.technologies.slice(0, 3).map((tech) => (
                        <span key={tech} className="font-mono text-[10px] px-2 py-0.5 rounded bg-vault-bg border border-vault-border text-zinc-400">
                          {tech}
                        </span>
                      ))}
                      {exp.technologies.length > 3 && (
                        <span className="font-mono text-[10px] px-1.5 py-0.5 text-zinc-500">
                          +{exp.technologies.length - 3}
                        </span>
                      )}
                    </div>
                    <span className="font-mono text-xs text-zinc-400">
                      {isExpanded ? "[— COLLAPSE]" : "[+ EXPAND]"}
                    </span>
                  </div>
                </div>

                {/* Expanded Operational Detail */}
                {isExpanded && (
                  <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-vault-border/60 bg-black/30">
                    <p className="text-zinc-300 text-sm font-sans leading-relaxed mb-5 max-w-3xl">
                      {exp.description}
                    </p>

                    {exp.responsibilities && (
                      <div className="mb-5">
                        <span className="font-mono text-[11px] text-brand-magenta uppercase tracking-wider block mb-2 font-semibold">
                          KEY ARCHITECTURAL RESPONSIBILITIES
                        </span>
                        <ul className="space-y-1.5 font-mono text-xs text-zinc-300">
                          {exp.responsibilities.map((resp, rIdx) => (
                            <li key={rIdx} className="flex items-start gap-2">
                              <span className="text-brand-magenta">›</span>
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {exp.systemsBuilt && (
                      <div className="mb-4">
                        <span className="font-mono text-[11px] text-brand-magenta uppercase tracking-wider block mb-2 font-semibold">
                          SYSTEMS SHIPPED & MAINTAINED
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {exp.systemsBuilt.map((sys) => (
                            <span
                              key={sys}
                              className="font-mono text-xs px-2.5 py-1 rounded bg-vault-surface border border-vault-border text-zinc-200"
                            >
                              {sys}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="pt-3 border-t border-vault-border/50">
                      <span className="font-mono text-[10px] text-vault-muted uppercase block mb-1.5">
                        TECH REPERTOIRE
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {exp.technologies.map((t) => (
                          <span
                            key={t}
                            className="font-mono text-[11px] px-2 py-0.5 rounded bg-vault-bg border border-vault-border text-zinc-400"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Academic CS Foundation */}
        <div className="pt-8 border-t border-vault-border">
          <div className="flex items-center gap-2 mb-6 font-mono text-xs text-vault-muted">
            <span className="text-brand-magenta">●</span>
            <span className="uppercase tracking-widest text-white font-semibold">
              COMPUTER SCIENCE FOUNDATION & ACADEMIC RIGOR
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {educationList.map((edu, idx) => (
              <div key={idx} className="bg-vault-surface border border-vault-border rounded-xl p-6">
                <span className="font-mono text-xs text-brand-magenta block mb-1 font-semibold">{edu.period}</span>
                <h4 className="font-display text-lg font-bold text-white mb-1">{edu.degree}</h4>
                <div className="font-mono text-xs text-zinc-400 mb-3">{edu.institution}</div>
                <p className="text-zinc-400 text-xs sm:text-sm font-sans leading-relaxed mb-4">
                  {edu.description}
                </p>

                {edu.grades && (
                  <div className="pt-3 border-t border-vault-border space-y-1 font-mono text-[11px] text-zinc-300">
                    {edu.grades.map((g, gIdx) => (
                      <div key={gIdx} className="flex items-center gap-2">
                        <span className="text-emerald-400">✓</span>
                        <span>{g}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
