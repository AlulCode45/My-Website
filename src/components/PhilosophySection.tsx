"use client";

import React, { useState } from "react";
import { engineeringAxioms } from "@/data/portfolioData";

export default function PhilosophySection() {
  const [activeAxiomId, setActiveAxiomId] = useState<string>("01");

  const engineeringQuestions = [
    "Why does this endpoint take 420ms when the payload is under 12KB?",
    "Can this multi-screen administrative workflow be reduced to two deterministic steps?",
    "What happens to local client state when network latency exceeds 3,000ms or drops entirely?",
    "Is this third-party dependency providing value, or just importing 4MB of node_modules bloat?",
    "Will this database index continue to perform when this table scales past 2,000,000 records?",
  ];

  return (
    <section id="philosophy" className="relative border-b border-hairline py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 mb-12 border-b border-hairline">
          <div>
            <span className="font-mono text-xs text-signal-orange tracking-widest uppercase">
              {"// SECTION 02: HOW I THINK"}
            </span>
            <h2 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-white mt-1">
              Engineering Axioms & Mental Models
            </h2>
          </div>
          <p className="font-mono text-xs text-zinc-500 max-w-sm">
            Disciplines distilled from designing, refactoring, and maintaining production systems across 5+ years.
          </p>
        </div>

        {/* Two-Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Axiom Index & Tabs */}
          <div className="lg:col-span-5 space-y-3">
            <span className="font-mono text-[11px] text-zinc-500 uppercase tracking-wider block mb-2">
              FOUNDATIONAL AXIOMS
            </span>

            {engineeringAxioms.map((axiom) => {
              const isActive = activeAxiomId === axiom.id;
              return (
                <button
                  key={axiom.id}
                  onClick={() => setActiveAxiomId(axiom.id)}
                  className={`w-full text-left p-4 transition-all border ${
                    isActive
                      ? "bg-obsidian-elevated border-signal-orange text-white"
                      : "bg-obsidian-surface border-hairline text-zinc-400 hover:text-zinc-200 hover:border-zinc-700"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-mono text-xs text-signal-orange font-semibold">
                      AXIOM {axiom.id}
                    </span>
                    <span className="font-mono text-[10px] text-zinc-500">{axiom.subtitle}</span>
                  </div>
                  <div className="font-display font-bold text-base sm:text-lg text-white">
                    {axiom.title}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Deep Architectural Journal Card */}
          <div className="lg:col-span-7 bg-obsidian-surface border border-hairline p-6 sm:p-8 font-sans">
            {(() => {
              const current = engineeringAxioms.find((a) => a.id === activeAxiomId) || engineeringAxioms[0];
              return (
                <div>
                  <div className="flex items-center justify-between pb-4 mb-6 border-b border-hairline font-mono text-xs text-zinc-500">
                    <span>INDEX ENTRY: {current.id} / 04</span>
                    <span className="text-signal-orange font-semibold">{current.subtitle}</span>
                  </div>

                  <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-4 leading-snug">
                    &ldquo;{current.statement}&rdquo;
                  </h3>

                  <p className="text-sm sm:text-base text-zinc-300 leading-relaxed mb-8">
                    {current.elaboration}
                  </p>

                  <div>
                    <span className="font-mono text-[11px] text-zinc-500 uppercase tracking-wider block mb-2">
                      OPERATIONAL FOCUS AREAS
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {current.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-mono text-xs px-2.5 py-1 bg-obsidian border border-hairline text-zinc-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        </div>

        {/* "Things I Keep Thinking About" - Editorial Investigation Strip */}
        <div className="mt-16 pt-8 border-t border-hairline">
          <div className="mb-4">
            <span className="font-mono text-xs text-signal-orange tracking-widest uppercase">
              {"// RECURRING INQUIRIES"}
            </span>
            <h3 className="font-display text-lg sm:text-xl font-bold text-white mt-0.5">
              Questions that govern every pull request and design decision
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 font-mono text-xs">
            {engineeringQuestions.map((q, idx) => (
              <div
                key={idx}
                className="bg-obsidian-surface border border-hairline p-4 text-zinc-300 hover:border-zinc-600 transition-colors flex items-start gap-3"
              >
                <span className="text-signal-orange font-semibold">Q{idx + 1}.</span>
                <span className="leading-relaxed">{q}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
