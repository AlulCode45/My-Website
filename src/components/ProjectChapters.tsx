"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { projectsList, ProjectItem } from "@/data/portfolioData";

export default function ProjectChapters() {
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);
  const [atraderActiveIndex, setAtraderActiveIndex] = useState(0);
  const [drawerGalleryIndex, setDrawerGalleryIndex] = useState(0);
  const [lightboxImage, setLightboxImage] = useState<{
    src: string;
    title: string;
    subtitle?: string;
  } | null>(null);

  // Sync drawer index when activeProject opens
  const openProjectModal = (proj: ProjectItem, initialIndex: number = 0) => {
    setActiveProject(proj);
    setDrawerGalleryIndex(initialIndex);
  };

  // Keyboard navigation & ESC handler
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (lightboxImage) {
          setLightboxImage(null);
        } else if (activeProject) {
          setActiveProject(null);
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxImage, activeProject]);

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
          Four distinct systems built for real-world operations—from financial market intelligence and AI platforms for MSMEs to curated real estate and my own founded digital product startup.
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

            {/* Multi-Image Interactive Visual Showcase */}
            <div className="space-y-4">
              <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-[#0d0914] border border-[#110A13]/10 shadow-md group/viewer">
                {/* Active Image */}
                <Image
                  src={
                    projects[0].gallery && projects[0].gallery[atraderActiveIndex]
                      ? projects[0].gallery[atraderActiveIndex].src
                      : projects[0].image
                  }
                  alt={
                    projects[0].gallery && projects[0].gallery[atraderActiveIndex]
                      ? projects[0].gallery[atraderActiveIndex].title
                      : projects[0].title
                  }
                  fill
                  priority
                  className="object-cover object-top transition-transform duration-700 group-hover/viewer:scale-[1.015]"
                />

                {/* Top overlay badge: Module & Live Index */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none z-10">
                  <div className="pointer-events-auto flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-white/10 text-white font-mono text-[11px] shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-white/70">
                      VIEW {atraderActiveIndex + 1}/{projects[0].gallery?.length || 4}
                    </span>
                    <span className="text-white/30">•</span>
                    <span className="font-semibold text-white">
                      {projects[0].gallery?.[atraderActiveIndex]?.tag || "Macro Engine"}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      const cur = projects[0].gallery?.[atraderActiveIndex];
                      if (cur) {
                        setLightboxImage({
                          src: cur.src,
                          title: cur.title,
                          subtitle: cur.subtitle,
                        });
                      }
                    }}
                    className="pointer-events-auto px-3.5 py-1.5 rounded-full bg-black/75 hover:bg-black backdrop-blur-md border border-white/15 text-white font-mono text-[11px] flex items-center gap-1.5 transition-all shadow-sm hover:scale-105 active:scale-95"
                    title="Inspect High-Res Screenshot"
                  >
                    <span>Inspect 3360px</span>
                    <span className="font-sans">↗</span>
                  </button>
                </div>

                {/* Left/Right arrow controls */}
                {projects[0].gallery && projects[0].gallery.length > 1 && (
                  <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-4 pointer-events-none z-10">
                    <button
                      type="button"
                      aria-label="Previous screenshot"
                      onClick={(e) => {
                        e.stopPropagation();
                        setAtraderActiveIndex((prev) =>
                          prev === 0 ? (projects[0].gallery?.length ?? 1) - 1 : prev - 1
                        );
                      }}
                      className="pointer-events-auto w-10 h-10 rounded-full bg-black/70 hover:bg-black text-white backdrop-blur-md border border-white/15 flex items-center justify-center transition-all hover:scale-110 active:scale-95 shadow-md"
                    >
                      <span className="text-lg leading-none select-none">‹</span>
                    </button>
                    <button
                      type="button"
                      aria-label="Next screenshot"
                      onClick={(e) => {
                        e.stopPropagation();
                        setAtraderActiveIndex((prev) =>
                          prev === (projects[0].gallery?.length ?? 1) - 1 ? 0 : prev + 1
                        );
                      }}
                      className="pointer-events-auto w-10 h-10 rounded-full bg-black/70 hover:bg-black text-white backdrop-blur-md border border-white/15 flex items-center justify-center transition-all hover:scale-110 active:scale-95 shadow-md"
                    >
                      <span className="text-lg leading-none select-none">›</span>
                    </button>
                  </div>
                )}

                {/* Bottom overlay with caption and case study trigger */}
                <div
                  onClick={() => openProjectModal(projects[0], atraderActiveIndex)}
                  className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6 sm:p-8 cursor-pointer flex flex-col sm:flex-row sm:items-end justify-between gap-4 transition-opacity group-hover/viewer:from-black/95"
                >
                  <div className="max-w-xl">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-brand-purple font-semibold block mb-1">
                      {projects[0].gallery?.[atraderActiveIndex]?.subtitle || "Institutional Module"}
                    </span>
                    <h4 className="text-white font-display font-bold text-lg sm:text-2xl drop-shadow-sm">
                      {projects[0].gallery?.[atraderActiveIndex]?.title || projects[0].title}
                    </h4>
                    <p className="text-white/80 text-xs sm:text-sm font-sans line-clamp-2 mt-1 drop-shadow-sm">
                      {projects[0].gallery?.[atraderActiveIndex]?.description || projects[0].description}
                    </p>
                  </div>

                  <span className="inline-flex items-center gap-2 text-white font-display text-xs sm:text-sm font-semibold tracking-wide px-4 py-2.5 rounded-full bg-brand-purple hover:bg-brand-magenta border border-white/20 shadow-md transition-all self-start sm:self-auto shrink-0">
                    <span>Open Case Study</span>
                    <span>→</span>
                  </span>
                </div>
              </div>

              {/* Thumbnails strip for the 4 images */}
              {projects[0].gallery && (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-1">
                  {projects[0].gallery.map((item, idx) => {
                    const isActive = idx === atraderActiveIndex;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setAtraderActiveIndex(idx)}
                        className={`text-left p-2.5 rounded-xl border transition-all duration-300 flex flex-col gap-2 ${
                          isActive
                            ? "bg-white border-brand-purple shadow-md ring-2 ring-brand-purple/20 scale-[1.01]"
                            : "bg-white/60 hover:bg-white border-[#110A13]/10 hover:border-[#110A13]/25"
                        }`}
                      >
                        <div className="relative aspect-[16/10] w-full rounded-lg overflow-hidden bg-black/5">
                          <Image
                            src={item.src}
                            alt={item.title}
                            fill
                            className="object-cover object-top"
                          />
                          <div
                            className={`absolute inset-0 transition-opacity ${
                              isActive ? "bg-brand-purple/10" : "bg-black/10 hover:bg-transparent"
                            }`}
                          />
                          <span
                            className={`absolute bottom-1.5 left-1.5 font-mono text-[9px] px-1.5 py-0.5 rounded ${
                              isActive
                                ? "bg-brand-purple text-white font-bold"
                                : "bg-black/75 text-white"
                            }`}
                          >
                            0{idx + 1}
                          </span>
                        </div>
                        <div className="space-y-0.5">
                          <span className="font-mono text-[9px] uppercase tracking-wider text-brand-purple font-semibold block truncate">
                            {item.tag.replace(/^\d+\s*\/\s*/, "")}
                          </span>
                          <span className="font-display text-xs font-bold text-[#110A13] block truncate">
                            {item.title.split("&")[0].trim()}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            <div className="mt-8 flex items-center justify-between">
              <button
                onClick={() => openProjectModal(projects[0], atraderActiveIndex)}
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
                  04 / FOUNDED DIGITAL STARTUP
                </span>
                <span className="text-xs font-mono text-[#6A6372] uppercase tracking-wider">
                  JAGATBYTE • FOUNDER
                </span>
              </div>
              <span className="font-mono text-xs text-[#6A6372]">{projects[3].year} • ACTIVE STARTUP</span>
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
                <span>Read Digital Startup Architecture</span>
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

                {/* Hero / Multi-screenshot visual viewer */}
                {activeProject.gallery && activeProject.gallery.length > 0 ? (
                  <div className="space-y-3">
                    <div className="relative aspect-[16/9] rounded-xl overflow-hidden border border-[#110A13]/10 bg-[#0d0914] shadow-md group/drawerImg">
                      <Image
                        src={activeProject.gallery[drawerGalleryIndex]?.src || activeProject.image}
                        alt={activeProject.gallery[drawerGalleryIndex]?.title || activeProject.title}
                        fill
                        className="object-cover object-top"
                      />

                      {/* Top Action Pills */}
                      <div className="absolute top-3 inset-x-3 flex items-center justify-between pointer-events-none z-10">
                        <span className="pointer-events-auto px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/10 text-white font-mono text-[10px]">
                          VIEW {drawerGalleryIndex + 1}/{activeProject.gallery.length}
                        </span>

                        <button
                          type="button"
                          onClick={() => {
                            const cur = activeProject.gallery?.[drawerGalleryIndex];
                            if (cur) {
                              setLightboxImage({
                                src: cur.src,
                                title: cur.title,
                                subtitle: cur.subtitle,
                              });
                            }
                          }}
                          className="pointer-events-auto px-3 py-1 rounded-full bg-black/80 hover:bg-black text-white text-[11px] font-mono border border-white/20 flex items-center gap-1.5 backdrop-blur-md shadow-md transition-all hover:scale-105 active:scale-95"
                        >
                          <span>Zoom Fullscreen (3360px)</span>
                          <span className="font-sans">↗</span>
                        </button>
                      </div>

                      {/* Bottom Caption Overlay */}
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent p-5 text-white">
                        <span className="font-mono text-[10px] uppercase tracking-widest text-brand-purple font-semibold block mb-0.5">
                          {activeProject.gallery[drawerGalleryIndex]?.tag}
                        </span>
                        <h4 className="font-display font-bold text-base sm:text-lg leading-tight">
                          {activeProject.gallery[drawerGalleryIndex]?.title}
                        </h4>
                        <p className="text-white/80 text-xs font-sans mt-1">
                          {activeProject.gallery[drawerGalleryIndex]?.description}
                        </p>
                      </div>
                    </div>

                    {/* Drawer Gallery Thumbnails */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {activeProject.gallery.map((item, idx) => {
                        const isCurrent = idx === drawerGalleryIndex;
                        return (
                          <button
                            key={item.id}
                            type="button"
                            onClick={() => setDrawerGalleryIndex(idx)}
                            className={`p-2 rounded-lg border text-left transition-all ${
                              isCurrent
                                ? "bg-white border-brand-purple shadow-sm ring-1 ring-brand-purple"
                                : "bg-white/70 hover:bg-white border-[#110A13]/10"
                            }`}
                          >
                            <div className="relative aspect-[16/10] rounded overflow-hidden bg-black/5 mb-1.5">
                              <Image
                                src={item.src}
                                alt={item.title}
                                fill
                                className="object-cover object-top"
                              />
                            </div>
                            <span className="font-mono text-[9px] text-[#6A6372] block truncate">
                              0{idx + 1} • {item.tag.replace(/^\d+\s*\/\s*/, "")}
                            </span>
                            <span className="font-display text-[11px] font-bold text-[#110A13] block truncate">
                              {item.title.split("&")[0].trim()}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ) : (
                  <div className="relative aspect-[16/9] rounded-xl overflow-hidden border border-[#110A13]/10 bg-white">
                    <Image
                      src={activeProject.image}
                      alt={activeProject.title}
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                )}

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

      {/* High-Resolution Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex flex-col p-4 sm:p-6"
            onClick={() => setLightboxImage(null)}
          >
            {/* Top Bar */}
            <div
              className="flex items-center justify-between pb-4 border-b border-white/10 text-white shrink-0"
              onClick={(e) => e.stopPropagation()}
            >
              <div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-brand-purple font-semibold block">
                  HIGH-RESOLUTION ARCHITECTURAL INSPECTOR // 3360 × 1870
                </span>
                <h3 className="font-display font-bold text-lg sm:text-xl text-white">
                  {lightboxImage.title}
                </h3>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={lightboxImage.src}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-mono transition-colors"
                >
                  Open Raw Image ↗
                </a>
                <button
                  type="button"
                  onClick={() => setLightboxImage(null)}
                  className="px-4 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-mono text-xs transition-colors"
                  aria-label="Close Inspector"
                >
                  CLOSE [ESC]
                </button>
              </div>
            </div>

            {/* Image Container with scrollable full fidelity */}
            <div
              className="flex-1 relative mt-4 overflow-auto rounded-xl border border-white/10 bg-[#060408] flex items-center justify-center p-2"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-full min-h-[500px]">
                <Image
                  src={lightboxImage.src}
                  alt={lightboxImage.title}
                  fill
                  className="object-contain"
                  quality={100}
                />
              </div>
            </div>

            {/* Bottom Caption */}
            {lightboxImage.subtitle && (
              <div
                className="pt-3 text-center shrink-0"
                onClick={(e) => e.stopPropagation()}
              >
                <p className="font-mono text-xs text-white/60">
                  {lightboxImage.subtitle}
                </p>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

