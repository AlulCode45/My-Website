"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { projectsList, ProjectItem } from "@/data/portfolioData";

export default function ProjectChapters() {
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  // 4 flagship projects with alternating visual compositions:
  // 01: ATraderTerminal (Full-bleed architectural visual + narrative)
  // 02: Boostera (Asymmetric split with prominent visual & AI features)
  // 03: Malang Alam Property (Text-dominant editorial with visual showcase)
  // 04: JagatByte (Horizontal widescreen digital product showcase)
  const projects = projectsList.slice(0, 4);

  return (
    <section id="work" className="py-28 sm:py-36 px-6 sm:px-10 max-w-7xl mx-auto">
      {/* Editorial Chapter Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-16 border-b border-[#110A13]/10">
        <div>
          <span className="font-mono text-xs uppercase tracking-ultra text-brand-purple font-semibold block mb-3">
            02 / SELECTED WORKS
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-6xl text-[#110A13] tracking-tight">
            Flagship Engineering{" "}
            <span className="font-serif italic font-normal text-brand-purple">
              Chapters.
            </span>
          </h2>
        </div>

        <p className="max-w-md text-sm sm:text-base text-[#6A6372] leading-relaxed font-sans">
          Four distinct systems built for real-world operations—from financial market intelligence and AI platforms for MSMEs to curated real estate and future-ready digital product studios.
        </p>
      </div>

      {/* Alternating Project Chapters */}
      <div className="divide-y divide-[#110A13]/10">
        {/* CHAPTER 01: ATraderTerminal */}
        {projects[0] && (
          <article className="py-20 sm:py-28 group">
            <div className="flex items-baseline justify-between mb-8">
              <div className="flex items-center gap-4">
                <span className="font-mono text-xs text-brand-purple font-semibold">
                  01 / FINANCIAL INTELLIGENCE
                </span>
                <span className="text-xs font-mono text-[#6A6372] uppercase tracking-wider">
                  ATRADERTERMINAL PRO
                </span>
              </div>
              <span className="font-mono text-xs text-[#6A6372]">{projects[0].year} • PRODUCTION</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-10">
              <div className="lg:col-span-8">
                <h3 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-[#110A13] tracking-tight leading-none mb-4 group-hover:text-brand-purple transition-colors duration-300">
                  {projects[0].title}
                </h3>
                <p className="font-serif italic text-xl sm:text-2xl text-[#6A6372]">
                  {projects[0].caseStudy?.thinking || projects[0].description}
                </p>
              </div>

              <div className="lg:col-span-4 flex flex-col justify-end h-full">
                <p className="text-sm text-[#6A6372] leading-relaxed font-sans mb-6">
                  {projects[0].description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {projects[0].technologies.map((t: string) => (
                    <span
                      key={t}
                      className="font-mono text-[10px] px-2.5 py-1 bg-white border border-[#110A13]/10 text-[#110A13] rounded-md"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Oversized Visual */}
            <div
              onClick={() => setActiveProject(projects[0])}
              className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-white border border-[#110A13]/10 shadow-sm cursor-pointer group-hover:shadow-xl group-hover:border-brand-purple/30 transition-all duration-500"
            >
              <Image
                src={projects[0].image}
                alt={projects[0].title}
                fill
                className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                <span className="inline-flex items-center gap-2 text-white font-display text-sm font-medium tracking-wide">
                  <span>Open Full Technical Case Study</span>
                  <span>→</span>
                </span>
              </div>
            </div>

            <div className="mt-8 flex items-center justify-between">
              <button
                onClick={() => setActiveProject(projects[0])}
                className="inline-flex items-center gap-2 font-display text-sm font-semibold text-[#110A13] hover:text-brand-purple transition-colors"
              >
                <span>Read Financial Terminal Architecture</span>
                <span className="font-mono">→</span>
              </button>
              <span className="font-mono text-xs text-[#6A6372]">
                {projects[0].role}
              </span>
            </div>
          </article>
        )}

        {/* CHAPTER 02: Boostera */}
        {projects[1] && (
          <article className="py-20 sm:py-28 group">
            <div className="flex items-baseline justify-between mb-8">
              <div className="flex items-center gap-4">
                <span className="font-mono text-xs text-brand-purple font-semibold">
                  02 / AI MARKETING SUITE
                </span>
                <span className="text-xs font-mono text-[#6A6372] uppercase tracking-wider">
                  BOOSTERA INDONESIA
                </span>
              </div>
              <span className="font-mono text-xs text-[#6A6372]">{projects[1].year} • PRODUCTION</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-6 space-y-6">
                <h3 className="font-display font-extrabold text-3xl sm:text-5xl text-[#110A13] tracking-tight leading-tight group-hover:text-brand-purple transition-colors duration-300">
                  {projects[1].title}
                </h3>
                <p className="font-serif italic text-xl text-[#6A6372]">
                  {projects[1].caseStudy?.context || projects[1].description}
                </p>
                <p className="text-sm text-[#6A6372] leading-relaxed font-sans">
                  {projects[1].description}
                </p>

                <div className="pt-2">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#6A6372] block mb-2">
                    TECHNOLOGY STACK
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {projects[1].technologies.map((t: string) => (
                      <span
                        key={t}
                        className="font-mono text-[10px] px-2.5 py-1 bg-white border border-[#110A13]/10 text-[#110A13] rounded-md"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    onClick={() => setActiveProject(projects[1])}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#110A13] text-white hover:bg-brand-purple transition-colors font-medium text-xs tracking-wide"
                  >
                    <span>Read AI Suite Architecture</span>
                    <span className="font-mono">→</span>
                  </button>
                </div>
              </div>

              <div
                onClick={() => setActiveProject(projects[1])}
                className="lg:col-span-6 relative aspect-[4/3] rounded-2xl overflow-hidden bg-white border border-[#110A13]/10 shadow-sm cursor-pointer group-hover:shadow-xl group-hover:border-brand-purple/30 transition-all duration-500"
              >
                <Image
                  src={projects[1].image}
                  alt={projects[1].title}
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                />
              </div>
            </div>
          </article>
        )}

        {/* CHAPTER 03: Malang Alam Property */}
        {projects[2] && (
          <article className="py-20 sm:py-28 group">
            <div className="flex items-baseline justify-between mb-8">
              <div className="flex items-center gap-4">
                <span className="font-mono text-xs text-brand-purple font-semibold">
                  03 / CURATED REAL ESTATE
                </span>
                <span className="text-xs font-mono text-[#6A6372] uppercase tracking-wider">
                  MALANG ALAM PROPERTY
                </span>
              </div>
              <span className="font-mono text-xs text-[#6A6372]">{projects[2].year} • LIVE</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div
                onClick={() => setActiveProject(projects[2])}
                className="lg:col-span-7 relative aspect-[16/10] rounded-2xl overflow-hidden bg-white border border-[#110A13]/10 shadow-sm cursor-pointer group-hover:shadow-xl group-hover:border-brand-purple/30 transition-all duration-500 order-2 lg:order-1"
              >
                <Image
                  src={projects[2].image}
                  alt={projects[2].title}
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                />
              </div>

              <div className="lg:col-span-5 space-y-6 order-1 lg:order-2">
                <h3 className="font-display font-extrabold text-3xl sm:text-5xl text-[#110A13] tracking-tight leading-tight group-hover:text-brand-purple transition-colors duration-300">
                  {projects[2].title}
                </h3>
                <p className="font-serif italic text-xl text-[#6A6372]">
                  {projects[2].caseStudy?.thinking || projects[2].description}
                </p>
                <p className="text-sm text-[#6A6372] leading-relaxed font-sans">
                  {projects[2].description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {projects[2].technologies.map((t: string) => (
                    <span
                      key={t}
                      className="font-mono text-[10px] px-2.5 py-1 bg-white border border-[#110A13]/10 text-[#110A13] rounded-md"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => setActiveProject(projects[2])}
                    className="inline-flex items-center gap-2 font-display text-sm font-semibold text-[#110A13] hover:text-brand-purple transition-colors"
                  >
                    <span>Read Real Estate Platform Specs</span>
                    <span className="font-mono">→</span>
                  </button>
                </div>
              </div>
            </div>
          </article>
        )}

        {/* CHAPTER 04: JagatByte */}
        {projects[3] && (
          <article className="py-20 sm:py-28 group">
            <div className="flex items-baseline justify-between mb-8">
              <div className="flex items-center gap-4">
                <span className="font-mono text-xs text-brand-purple font-semibold">
                  04 / DIGITAL PRODUCT STUDIO
                </span>
                <span className="text-xs font-mono text-[#6A6372] uppercase tracking-wider">
                  JAGATBYTE STUDIO
                </span>
              </div>
              <span className="font-mono text-xs text-[#6A6372]">{projects[3].year} • PRODUCTION</span>
            </div>

            <div className="space-y-6 mb-10">
              <h3 className="font-display font-extrabold text-3xl sm:text-5xl text-[#110A13] tracking-tight group-hover:text-brand-purple transition-colors duration-300">
                {projects[3].title}
              </h3>
              <p className="font-serif italic text-xl text-[#6A6372] max-w-2xl">
                {projects[3].caseStudy?.context || projects[3].description}
              </p>
            </div>

            <div
              onClick={() => setActiveProject(projects[3])}
              className="relative aspect-[21/9] w-full rounded-2xl overflow-hidden bg-white border border-[#110A13]/10 shadow-sm cursor-pointer group-hover:shadow-xl group-hover:border-brand-purple/30 transition-all duration-500"
            >
              <Image
                src={projects[3].image}
                alt={projects[3].title}
                fill
                className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
              />
            </div>

            <div className="mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex flex-wrap gap-2">
                {projects[3].technologies.map((t: string) => (
                  <span
                    key={t}
                    className="font-mono text-[10px] px-2.5 py-1 bg-white border border-[#110A13]/10 text-[#110A13] rounded-md"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <button
                onClick={() => setActiveProject(projects[3])}
                className="inline-flex items-center gap-2 font-display text-sm font-semibold text-[#110A13] hover:text-brand-purple transition-colors"
              >
                <span>Read Digital Product Architecture</span>
                <span className="font-mono">→</span>
              </button>
            </div>
          </article>
        )}
      </div>

      {/* Immersive Editorial Case Study Drawer */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex justify-end"
            onClick={() => setActiveProject(null)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-3xl bg-[#F7F5F8] text-[#110A13] h-full overflow-y-auto p-8 sm:p-12 shadow-2xl flex flex-col justify-between"
            >
              <div className="space-y-8">
                {/* Drawer Close & Meta */}
                <div className="flex items-center justify-between pb-6 border-b border-[#110A13]/10">
                  <span className="font-mono text-xs uppercase tracking-widest text-brand-purple font-semibold">
                    ENGINEERING SPECIFICATION // {activeProject.specNumber}
                  </span>
                  <button
                    onClick={() => setActiveProject(null)}
                    className="p-2 rounded-full hover:bg-[#110A13]/5 text-[#110A13] font-mono text-xs"
                    aria-label="Close Case Study"
                  >
                    CLOSE [ESC]
                  </button>
                </div>

                {/* Case Study Title */}
                <div>
                  <h3 className="font-display font-extrabold text-3xl sm:text-4xl text-[#110A13] tracking-tight mb-2">
                    {activeProject.title}
                  </h3>
                  <p className="font-serif italic text-xl text-brand-purple">
                    {activeProject.caseStudy?.context || activeProject.description}
                  </p>
                </div>

                {/* Hero visual */}
                <div className="relative aspect-[16/9] rounded-xl overflow-hidden border border-[#110A13]/10 bg-white">
                  <Image
                    src={activeProject.image}
                    alt={activeProject.title}
                    fill
                    className="object-cover object-top"
                  />
                </div>

                {/* Narrative Sections */}
                <div className="space-y-6 text-sm text-[#6A6372] leading-relaxed font-sans">
                  {activeProject.caseStudy && (
                    <>
                      <div>
                        <h4 className="font-mono text-xs uppercase tracking-widest text-[#110A13] font-semibold mb-2">
                          01 / The Context & Problem
                        </h4>
                        <p>{activeProject.caseStudy.problem}</p>
                      </div>

                      <div>
                        <h4 className="font-mono text-xs uppercase tracking-widest text-[#110A13] font-semibold mb-2">
                          02 / Architectural Approach
                        </h4>
                        <p>{activeProject.caseStudy.thinking}</p>
                      </div>

                      <div>
                        <h4 className="font-mono text-xs uppercase tracking-widest text-[#110A13] font-semibold mb-2">
                          03 / System Topology
                        </h4>
                        <p>{activeProject.caseStudy.architectureDetail}</p>
                      </div>

                      <div>
                        <h4 className="font-mono text-xs uppercase tracking-widest text-[#110A13] font-semibold mb-2">
                          04 / Measurable Outcome
                        </h4>
                        <p>{activeProject.caseStudy.result}</p>
                      </div>
                    </>
                  )}
                </div>

                {/* Tech Chips */}
                <div className="pt-6 border-t border-[#110A13]/10">
                  <span className="font-mono text-xs uppercase tracking-widest text-[#110A13] block mb-3 font-semibold">
                    Core Technologies
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {activeProject.technologies.map((t: string) => (
                      <span
                        key={t}
                        className="font-mono text-xs px-3 py-1.5 bg-white border border-[#110A13]/10 text-[#110A13] rounded-md font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Drawer footer actions */}
              <div className="pt-10 mt-8 border-t border-[#110A13]/10 flex items-center justify-between">
                {activeProject.link && (
                  <a
                    href={activeProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-purple text-white text-xs font-semibold hover:bg-brand-magenta transition-colors"
                  >
                    <span>Visit Live Platform</span>
                    <span>→</span>
                  </a>
                )}
                <button
                  onClick={() => setActiveProject(null)}
                  className="text-xs font-mono text-[#6A6372] hover:text-[#110A13]"
                >
                  Return to Archive
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

