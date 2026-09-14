"use client";

import React, { useState } from "react";
import { stackLayers } from "@/data/portfolioData";

export default function StackTopology() {
  const [activeLayerId, setActiveLayerId] = useState<string>("interface");
  const [selectedTech, setSelectedTech] = useState<string | null>(null);

  const activeLayer = stackLayers.find((l) => l.layerId === activeLayerId) || stackLayers[0];

  return (
    <section id="topology" className="relative border-b border-hairline py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 mb-12 border-b border-hairline">
          <div>
            <div className="flex items-center gap-2 mb-2 font-mono text-xs text-signal-orange">
              <span>{"// SECTION 03"}</span>
              <span>•</span>
              <span className="tracking-widest uppercase">SYSTEM ARCHITECTURE</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Stack Topology & Engineering Layers
            </h2>
          </div>
          <p className="font-mono text-xs text-zinc-500 max-w-md">
            Not a passive wall of logos. An interconnected technical map showing architectural rationale and verified production deployments.
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
                className={`text-left p-4 transition-all border ${
                  isActive
                    ? "bg-obsidian-elevated border-signal-orange text-white"
                    : "bg-obsidian-surface border-hairline text-zinc-400 hover:text-zinc-200 hover:border-zinc-700"
                }`}
              >
                <div className="font-mono text-[10px] text-zinc-500 mb-1 uppercase tracking-wider">
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
        <div className="bg-obsidian-surface border border-hairline p-6 sm:p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 mb-6 border-b border-hairline">
            <div>
              <span className="font-mono text-xs text-signal-orange uppercase tracking-wider block mb-1">
                {activeLayer.title}
              </span>
              <p className="text-zinc-300 text-sm font-sans">
                {activeLayer.description}
              </p>
            </div>
            <span className="font-mono text-[11px] text-zinc-500">
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
                  className={`p-4 border transition-all cursor-pointer ${
                    isSelected
                      ? "bg-obsidian-elevated border-signal-orange"
                      : "bg-obsidian border-hairline hover:border-zinc-600"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono font-bold text-sm text-white">{tech.name}</span>
                    <span className="font-mono text-[10px] px-2 py-0.5 bg-obsidian-surface text-signal-orange border border-hairline">
                      {tech.level}
                    </span>
                  </div>

                  <p className="text-xs text-zinc-400 font-sans leading-relaxed mb-3">
                    {tech.rationale}
                  </p>

                  <div className="pt-2 border-t border-hairline/60 flex flex-wrap items-center gap-1.5 font-mono text-[11px]">
                    <span className="text-zinc-600">USED IN:</span>
                    {tech.usedInProjects.map((p) => (
                      <span key={p} className="text-zinc-300 bg-obsidian-surface px-1.5 py-0.5 border border-hairline">
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
