"use client";

import React, { useState } from "react";
import { stackLayers } from "@/data/portfolioData";

export default function StackSystemMap() {
  const [activeLayerId, setActiveLayerId] = useState<string>("interface");
  const [selectedTech, setSelectedTech] = useState<string | null>(null);

  const activeLayer = stackLayers.find((l) => l.layerId === activeLayerId) || stackLayers[0];

  return (
    <section id="system" className="relative bg-vault-bg text-vault-ink border-b border-vault-border py-20 md:py-28 vault-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 mb-12 border-b border-vault-border">
          <div>
            <div className="flex items-center gap-2 mb-2 font-mono text-xs text-brand-magenta font-semibold">
              <span>{"// SECTION 03"}</span>
              <span>•</span>
              <span className="tracking-widest uppercase">SYSTEM TOPOLOGY</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white">
              Engineering Pipeline & Stack Map
            </h2>
          </div>
          <p className="font-mono text-xs text-vault-muted max-w-md">
            Not an arbitrary wall of logos. An interactive systems map linking technologies to actual architectural responsibilities and production projects.
          </p>
        </div>

        {/* 4 Architectural Layer Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
          {stackLayers.map((layer) => {
            const isActive = activeLayerId === layer.layerId;
            return (
              <button
                key={layer.layerId}
                onClick={() => {
                  setActiveLayerId(layer.layerId);
                  setSelectedTech(null);
                }}
                className={`text-left p-4 rounded-xl transition-all border ${
                  isActive
                    ? "bg-vault-elevated border-brand-magenta text-white shadow-lg"
                    : "bg-vault-surface border-vault-border text-vault-muted hover:text-white hover:border-brand-purple/40"
                }`}
              >
                <div className="font-mono text-[10px] text-brand-magenta mb-1 uppercase tracking-wider font-semibold">
                  {layer.subtitle}
                </div>
                <div className="font-display font-bold text-base sm:text-lg text-white">
                  {layer.title.split(" — ")[1]}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Layer Details */}
        <div className="bg-vault-surface border border-vault-border rounded-2xl p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 mb-6 border-b border-vault-border">
            <div>
              <span className="font-mono text-xs text-brand-magenta uppercase tracking-wider font-semibold block mb-1">
                {activeLayer.title}
              </span>
              <p className="text-zinc-300 text-sm font-sans">
                {activeLayer.description}
              </p>
            </div>
            <span className="font-mono text-[11px] text-vault-muted">
              {activeLayer.technologies.length} INSTRUMENTED CORE TECHNOLOGIES
            </span>
          </div>

          {/* Grid of technologies in this layer */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {activeLayer.technologies.map((tech) => {
              const isSelected = selectedTech === tech.name;
              return (
                <div
                  key={tech.name}
                  onClick={() => setSelectedTech(isSelected ? null : tech.name)}
                  className={`p-4 rounded-xl border transition-all cursor-pointer ${
                    isSelected
                      ? "bg-vault-elevated border-brand-magenta shadow-md"
                      : "bg-vault-bg border-vault-border hover:border-brand-purple/50"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono font-bold text-sm text-white">{tech.name}</span>
                    <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-brand-purple/20 text-brand-magenta-light border border-brand-purple/30 font-semibold">
                      {tech.level}
                    </span>
                  </div>

                  <p className="text-xs text-zinc-400 font-sans leading-relaxed mb-3">
                    {tech.rationale}
                  </p>

                  <div className="pt-2 border-t border-vault-border/60 flex flex-wrap items-center gap-1.5 font-mono text-[11px]">
                    <span className="text-vault-muted">PROVEN IN:</span>
                    {tech.usedInProjects.map((p) => (
                      <span key={p} className="text-zinc-300 bg-vault-surface px-2 py-0.5 rounded border border-vault-border text-[10px]">
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
