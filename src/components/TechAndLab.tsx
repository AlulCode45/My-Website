"use client";

import React from "react";
import { labExperiments } from "@/data/portfolioData";

export default function TechAndLab() {
  const tools = [
    { name: "React", category: "Client Framework", note: "Concurrent mode, hooks, state orchestration" },
    { name: "Next.js", category: "Fullstack React", note: "App Router, Server Components, dynamic ISR" },
    { name: "Laravel", category: "Backend Framework", note: "Eloquent ORM, Job queues, Policies & Sanctum auth" },
    { name: "TypeScript", category: "Language", note: "Strict type safety across API boundaries" },
    { name: "PostgreSQL", category: "Relational Database", note: "Indexing, transactions, JSONB & foreign keys" },
    { name: "Docker", category: "Containerization", note: "Reproducible microservices & multi-stage builds" },
    { name: "Tailwind CSS", category: "Styling Engine", note: "Custom design tokens & responsive systems" },
    { name: "PHP 8+", category: "Backend Engine", note: "Modern attributes, typed properties & OPcache" },
    { name: "Linux / Nginx", category: "Infrastructure", note: "Reverse proxy, SSL offloading & systemd daemons" },
  ];

  return (
    <section id="lab" className="bg-[#110A13] text-[#F7F5F8] py-28 sm:py-36 px-6 sm:px-10">
      <div className="max-w-7xl mx-auto space-y-24">
        {/* ==================================================================== */}
        {/* SECTION 1: TOOLS I BUILD WITH (Typographic Showcase)                */}
        {/* ==================================================================== */}
        <div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/10">
            <div>
              <span className="font-mono text-xs uppercase tracking-ultra text-brand-lavender font-semibold block mb-3">
                03 / WORKBENCH
              </span>
              <h2 className="font-display font-bold text-4xl sm:text-6xl text-white tracking-tight">
                Tools I Build{" "}
                <span className="font-serif italic font-normal text-brand-lavender">
                  With.
                </span>
              </h2>
            </div>

            <p className="max-w-md text-sm text-[#9C92A4] leading-relaxed font-sans">
              No arbitrary percentage bars or vanity meters. These are production-tested technologies I command to deliver resilient software.
            </p>
          </div>

          {/* Typographic Table of Tools */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12">
            {tools.map((tool, idx) => (
              <div
                key={tool.name}
                className="p-6 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-brand-lavender/40 hover:bg-white/[0.06] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-[#9C92A4]">
                      {tool.category}
                    </span>
                    <span className="font-mono text-xs text-brand-lavender/60">
                      0{idx + 1}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-2xl text-white mb-2">
                    {tool.name}
                  </h3>
                </div>
                <p className="text-xs text-[#9C92A4] font-sans leading-relaxed pt-4 border-t border-white/[0.06]">
                  {tool.note}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ==================================================================== */}
        {/* SECTION 2: THE LAB (Exploration & Side Projects)                     */}
        {/* ==================================================================== */}
        <div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/10">
            <div>
              <span className="font-mono text-xs uppercase tracking-ultra text-brand-lavender font-semibold block mb-3">
                04 / EXPLORATION
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight">
                The Lab &{" "}
                <span className="font-serif italic font-normal text-brand-lavender">
                  Experiments.
                </span>
              </h2>
            </div>

            <p className="max-w-md text-sm text-[#9C92A4] leading-relaxed font-sans">
              Where curiosity leads. Rapid prototypes exploring interactive physics, AI synthesis, and high-frequency algorithms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12">
            {labExperiments.map((exp) => (
              <div
                key={exp.id}
                className="p-6 rounded-xl bg-white/[0.03] border border-white/[0.08] flex flex-col justify-between space-y-6 hover:border-brand-lavender/30 transition-all duration-300"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] text-brand-lavender uppercase tracking-wider">
                      {exp.domain}
                    </span>
                    <span className="font-mono text-[10px] text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded-full">
                      {exp.status}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-lg text-white">
                    {exp.title}
                  </h3>

                  <p className="text-xs text-[#9C92A4] leading-relaxed font-sans">
                    {exp.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                  <span className="font-mono text-[10px] text-[#9C92A4]">
                    {exp.tech.join(" • ")}
                  </span>
                  <span className="font-mono text-xs text-brand-lavender">
                    PROTOTYPE →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
