"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { projectsList, ProjectItem } from "@/data/portfolioData";

export default function ProjectArchive() {
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");
  const [activeCaseStudy, setActiveCaseStudy] = useState<ProjectItem | null>(null);

  const categories = ["ALL", "ENTERPRISE / ERP", "FULLSTACK & APIS", "FRONTEND ARCHITECTURE"];

  const filteredProjects = projectsList.filter((p) => {
    if (selectedCategory === "ALL") return true;
    if (selectedCategory === "ENTERPRISE / ERP") return p.category === "Enterprise / ERP";
    if (selectedCategory === "FULLSTACK & APIS") return p.category === "Fullstack & APIs";
    if (selectedCategory === "FRONTEND ARCHITECTURE")
      return p.category === "Frontend Architecture" || p.category === "Web Application";
    return true;
  });

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveCaseStudy(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section id="archive" className="relative bg-editorial-bg text-editorial-ink border-b border-editorial-border py-20 md:py-28 editorial-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header and Filter Ledger */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 mb-12 border-b border-editorial-border">
          <div>
            <div className="flex items-center gap-2 mb-2 font-mono text-xs text-brand-purple font-semibold">
              <span>{"// SECTION 02"}</span>
              <span>•</span>
              <span className="tracking-widest uppercase">PRODUCTION DELIVERIES</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-editorial-ink">
              Project Archive & Spec Sheets
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-md transition-all border ${
                  selectedCategory === cat
                    ? "bg-brand-purple border-brand-purple text-white shadow-sm font-semibold"
                    : "bg-editorial-surface border-editorial-border text-editorial-muted hover:text-editorial-ink hover:border-brand-purple/40"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Project Index Grid with Varied Rhythm */}
        <div className="space-y-12">
          {filteredProjects.map((project) => {
            // Lead project layout (SPEC_01)
            if (project.scaleType === "lead") {
              return (
                <div
                  key={project.id}
                  className="bg-editorial-surface border border-editorial-border hover:border-brand-purple/40 rounded-2xl transition-all shadow-sm group p-6 sm:p-8 lg:p-10"
                >
                  <div className="flex flex-wrap items-center justify-between gap-4 pb-4 mb-6 border-b border-editorial-border font-mono text-xs text-editorial-muted">
                    <div className="flex items-center gap-3">
                      <span className="text-brand-purple font-bold font-mono text-sm">{project.specNumber}</span>
                      <span className="text-editorial-ink font-semibold">{project.category}</span>
                      <span>•</span>
                      <span>{project.year}</span>
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300 font-mono text-[10px] font-semibold">
                      {project.status}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    <div className="lg:col-span-7">
                      <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-editorial-ink mb-3">
                        {project.title}
                      </h3>
                      <p className="text-editorial-muted text-sm sm:text-base leading-relaxed mb-6 font-sans">
                        {project.description}
                      </p>

                      {/* Technical Specs List */}
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6 font-mono text-xs">
                        {project.metrics?.map((m, i) => (
                          <div key={i} className="bg-editorial-bg p-3 rounded-lg border border-editorial-border">
                            <span className="text-editorial-muted text-[10px] block uppercase font-semibold">{m.label}</span>
                            <span className="text-editorial-ink font-bold truncate block mt-0.5">{m.value}</span>
                          </div>
                        ))}
                      </div>

                      {/* Stack Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {project.technologies.map((t) => (
                          <span
                            key={t}
                            className="font-mono text-[11px] px-2.5 py-1 bg-editorial-bg rounded border border-editorial-border text-editorial-muted font-medium"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      <button
                        onClick={() => setActiveCaseStudy(project)}
                        className="inline-flex items-center gap-2 font-mono text-xs px-5 py-2.5 bg-brand-purple hover:bg-brand-purple-vibrant text-white rounded-lg transition-all font-semibold shadow-sm"
                      >
                        <span>INSPECT ARCHITECTURAL SPEC</span>
                        <span>→</span>
                      </button>
                    </div>

                    <div
                      onClick={() => setActiveCaseStudy(project)}
                      className="lg:col-span-5 relative aspect-[16/10] overflow-hidden rounded-xl border border-editorial-border bg-editorial-bg cursor-pointer group-hover:border-brand-purple transition-all shadow-sm"
                    >
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 40vw"
                        className="object-cover object-top opacity-90 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
                      <div className="absolute bottom-3 left-3 font-mono text-[10px] px-2.5 py-1 bg-white/90 backdrop-blur-sm text-editorial-ink font-semibold rounded border border-editorial-border shadow-sm">
                        CLICK TO EXPAND CASE STUDY
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            // Dual / Split Scale (SPEC_02, SPEC_03)
            return (
              <div
                key={project.id}
                className="bg-editorial-surface border border-editorial-border hover:border-brand-purple/40 rounded-2xl transition-all p-6 sm:p-8 shadow-sm"
              >
                <div className="flex flex-wrap items-center justify-between gap-4 pb-3 mb-5 border-b border-editorial-border font-mono text-xs text-editorial-muted">
                  <div className="flex items-center gap-3">
                    <span className="text-brand-purple font-bold font-mono text-sm">{project.specNumber}</span>
                    <span className="text-editorial-ink font-semibold">{project.category}</span>
                    <span>•</span>
                    <span>{project.year}</span>
                  </div>
                  <span className="text-[11px] text-editorial-muted">ROLE: {project.role}</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                  <div
                    onClick={() => setActiveCaseStudy(project)}
                    className="md:col-span-5 relative aspect-[16/10] overflow-hidden rounded-xl border border-editorial-border bg-editorial-bg cursor-pointer hover:border-brand-purple transition-all shadow-sm"
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 40vw"
                      className="object-cover object-top opacity-90 hover:opacity-100 transition-opacity"
                    />
                  </div>

                  <div className="md:col-span-7 flex flex-col justify-between">
                    <div>
                      <h3 className="font-display text-xl sm:text-2xl font-bold text-editorial-ink mb-2">
                        {project.title}
                      </h3>
                      <p className="text-editorial-muted text-xs sm:text-sm leading-relaxed mb-4 font-sans">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {project.technologies.map((t) => (
                          <span
                            key={t}
                            className="font-mono text-[11px] px-2 py-0.5 bg-editorial-bg rounded border border-editorial-border text-editorial-muted font-medium"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <button
                      onClick={() => setActiveCaseStudy(project)}
                      className="self-start inline-flex items-center gap-2 font-mono text-xs px-4 py-2 bg-editorial-bg hover:bg-brand-purple hover:text-white text-editorial-ink rounded-lg border border-editorial-border hover:border-brand-purple transition-all font-semibold"
                    >
                      <span>VIEW FULL CASE STUDY</span>
                      <span className="text-brand-purple group-hover:text-white">→</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Forensic Case Study In-Situ Modal / Drawer */}
      {activeCaseStudy && (
        <div
          onClick={() => setActiveCaseStudy(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-md overflow-y-auto cursor-pointer"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl bg-editorial-surface border border-editorial-border rounded-2xl shadow-2xl p-6 sm:p-10 my-8 max-h-[90vh] overflow-y-auto cursor-default text-editorial-ink"
          >
            {/* Drawer Header */}
            <div className="flex items-start justify-between gap-4 pb-6 mb-8 border-b border-editorial-border">
              <div>
                <div className="flex items-center gap-3 font-mono text-xs text-brand-purple font-semibold mb-1">
                  <span>{activeCaseStudy.specNumber}</span>
                  <span>•</span>
                  <span>{activeCaseStudy.category.toUpperCase()}</span>
                  <span>•</span>
                  <span>{activeCaseStudy.year}</span>
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-editorial-ink">
                  {activeCaseStudy.title}
                </h3>
                <div className="font-mono text-xs text-editorial-muted mt-1">
                  ROLE: <span className="text-editorial-ink font-semibold">{activeCaseStudy.role}</span>
                </div>
              </div>

              <button
                onClick={() => setActiveCaseStudy(null)}
                className="font-mono text-xs px-3.5 py-1.5 bg-editorial-bg hover:bg-editorial-elevated text-editorial-ink rounded-lg border border-editorial-border font-semibold"
              >
                [ESC / CLOSE]
              </button>
            </div>

            {/* Case Study Full Preview */}
            <div className="relative aspect-[16/9] w-full mb-8 rounded-xl border border-editorial-border overflow-hidden bg-editorial-bg shadow-sm">
              <Image
                src={activeCaseStudy.image}
                alt={activeCaseStudy.title}
                fill
                className="object-cover object-top"
              />
            </div>

            {/* Structured Engineering Case Study Content */}
            {activeCaseStudy.caseStudy ? (
              <div className="space-y-6 font-sans">
                {/* 1. Context & Problem */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-editorial-bg border border-editorial-border rounded-xl p-5">
                    <span className="font-mono text-xs text-brand-purple uppercase tracking-wider block mb-2 font-semibold">
                      01 / CONTEXT
                    </span>
                    <p className="text-xs sm:text-sm text-editorial-ink leading-relaxed">
                      {activeCaseStudy.caseStudy.context}
                    </p>
                  </div>
                  <div className="bg-editorial-bg border border-editorial-border rounded-xl p-5">
                    <span className="font-mono text-xs text-brand-purple uppercase tracking-wider block mb-2 font-semibold">
                      02 / THE CORE PROBLEM
                    </span>
                    <p className="text-xs sm:text-sm text-editorial-ink leading-relaxed">
                      {activeCaseStudy.caseStudy.problem}
                    </p>
                  </div>
                </div>

                {/* 2. Architecture & Thinking */}
                <div className="bg-editorial-bg border border-editorial-border rounded-xl p-6">
                  <span className="font-mono text-xs text-brand-purple uppercase tracking-wider block mb-2 font-semibold">
                    03 / ARCHITECTURAL REASONING
                  </span>
                  <p className="text-sm text-editorial-ink leading-relaxed mb-4">
                    {activeCaseStudy.caseStudy.thinking}
                  </p>
                  <div className="pt-4 border-t border-editorial-border font-mono text-xs text-editorial-muted">
                    <span className="text-editorial-muted block mb-1 font-semibold">SYSTEM TOPOLOGY:</span>
                    <div className="bg-editorial-surface p-3 rounded-lg border border-editorial-border text-editorial-ink">
                      {activeCaseStudy.caseStudy.architectureDetail}
                    </div>
                  </div>
                </div>

                {/* 3. Challenges & Results */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-editorial-bg border border-editorial-border rounded-xl p-5">
                    <span className="font-mono text-xs text-brand-purple uppercase tracking-wider block mb-2 font-semibold">
                      04 / CHALLENGES & PITFALLS
                    </span>
                    <p className="text-xs sm:text-sm text-editorial-ink leading-relaxed">
                      {activeCaseStudy.caseStudy.challenges}
                    </p>
                  </div>
                  <div className="bg-editorial-bg border border-editorial-border rounded-xl p-5">
                    <span className="font-mono text-xs text-brand-purple uppercase tracking-wider block mb-2 font-semibold">
                      05 / MEASURABLE RESULT
                    </span>
                    <p className="text-xs sm:text-sm text-editorial-ink leading-relaxed">
                      {activeCaseStudy.caseStudy.result}
                    </p>
                  </div>
                </div>

                {/* 4. Engineering Lessons */}
                <div className="bg-editorial-bg border border-editorial-border rounded-xl p-5">
                  <span className="font-mono text-xs text-brand-purple uppercase tracking-wider block mb-1 font-semibold">
                    06 / KEY RETROSPECTIVE LESSON
                  </span>
                  <p className="text-xs sm:text-sm text-editorial-ink leading-relaxed italic">
                    &ldquo;{activeCaseStudy.caseStudy.lessons}&rdquo;
                  </p>
                </div>
              </div>
            ) : (
              <div className="bg-editorial-bg border border-editorial-border rounded-xl p-6 text-editorial-ink text-sm leading-relaxed">
                <p>{activeCaseStudy.description}</p>
                <div className="mt-4 pt-4 border-t border-editorial-border font-mono text-xs text-editorial-muted">
                  <span className="text-editorial-muted font-semibold">PRIMARY STACK: </span>
                  {activeCaseStudy.technologies.join(" • ")}
                </div>
              </div>
            )}

            {/* Close Bottom Button */}
            <div className="mt-8 pt-6 border-t border-editorial-border flex justify-end">
              <button
                onClick={() => setActiveCaseStudy(null)}
                className="font-mono text-xs px-5 py-2.5 bg-brand-purple hover:bg-brand-purple-vibrant text-white rounded-lg font-semibold shadow-sm"
              >
                CLOSE SPECIFICATION [ESC]
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
