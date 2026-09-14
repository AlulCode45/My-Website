"use client";

import React, { useState } from "react";
import { labExperiments, fieldNotes } from "@/data/portfolioData";

export default function TheLabAndNotes() {
  const [activeTab, setActiveTab] = useState<"LAB" | "NOTES">("LAB");

  return (
    <section id="lab" className="relative bg-vault-bg text-vault-ink border-b border-vault-border py-20 md:py-28 vault-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Switcher */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 mb-12 border-b border-vault-border">
          <div>
            <div className="flex items-center gap-2 mb-2 font-mono text-xs text-brand-magenta font-semibold">
              <span>{"// SECTION 05"}</span>
              <span>•</span>
              <span className="tracking-widest uppercase">CURIOSITY & EXPLORATION</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white">
              The Lab & Field Notes
            </h2>
          </div>

          {/* Toggle between Lab Prototypes & Field Notes */}
          <div className="flex items-center gap-2 font-mono text-xs">
            <button
              onClick={() => setActiveTab("LAB")}
              className={`px-4 py-2 rounded-lg transition-all border ${
                activeTab === "LAB"
                  ? "bg-brand-purple border-brand-purple text-white shadow-md font-semibold"
                  : "bg-vault-surface border-vault-border text-vault-muted hover:text-white"
              }`}
            >
              THE LAB [PROTOTYPES]
            </button>
            <button
              onClick={() => setActiveTab("NOTES")}
              className={`px-4 py-2 rounded-lg transition-all border ${
                activeTab === "NOTES"
                  ? "bg-brand-magenta border-brand-magenta text-white shadow-md font-semibold"
                  : "bg-vault-surface border-vault-border text-vault-muted hover:text-white"
              }`}
            >
              FIELD NOTES [OBSERVATIONS]
            </button>
          </div>
        </div>

        {/* Content View */}
        {activeTab === "LAB" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {labExperiments.map((item) => (
              <div
                key={item.id}
                className="bg-vault-surface border border-vault-border hover:border-brand-magenta/50 rounded-2xl p-6 sm:p-7 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-vault-border font-mono text-[11px]">
                    <span className="text-brand-magenta font-semibold">{item.id}</span>
                    <span className="text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/40 text-[10px]">
                      {item.status}
                    </span>
                  </div>

                  <span className="font-mono text-[10px] text-vault-muted uppercase tracking-wider block mb-1 font-semibold">
                    {item.domain}
                  </span>
                  <h3 className="font-display font-bold text-xl text-white mb-3 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-zinc-300 text-sm font-sans leading-relaxed mb-6">
                    {item.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-vault-border flex flex-wrap gap-1.5 font-mono text-[11px]">
                  {item.tech.map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded bg-vault-bg border border-vault-border text-zinc-400">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {fieldNotes.map((note) => (
              <div
                key={note.id}
                className="bg-vault-surface border border-vault-border hover:border-brand-purple/50 rounded-2xl p-6 sm:p-7 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-vault-border font-mono text-[11px]">
                    <span className="text-brand-purple-vibrant font-semibold">{note.id}</span>
                    <span className="text-vault-muted text-[10px] uppercase font-semibold">
                      {"//"} {note.category}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-lg sm:text-xl text-white mb-3 leading-snug">
                    &ldquo;{note.inquiry}&rdquo;
                  </h3>
                  <p className="text-zinc-300 text-sm font-sans leading-relaxed">
                    {note.observation}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-vault-border font-mono text-[10px] text-vault-muted flex items-center justify-between">
                  <span>LOGGED FROM PRODUCTION</span>
                  <span className="text-brand-magenta">VERIFIED NOTE</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
