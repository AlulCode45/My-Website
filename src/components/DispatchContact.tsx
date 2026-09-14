"use client";

import React, { useState } from "react";
import { personalInfo } from "@/data/portfolioData";

export default function DispatchContact() {
  const [copied, setCopied] = useState<boolean>(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="dispatch" className="relative border-b border-hairline py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border border-hairline bg-obsidian-surface p-8 sm:p-12 lg:p-16">
          <div className="flex items-center gap-2 mb-6 font-mono text-xs text-signal-orange">
            <span>{"// TRANSMISSION DISPATCH"}</span>
            <span>•</span>
            <span className="tracking-widest uppercase">END OF SPECIFICATION</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight mb-6">
                If you have a critical system that needs to be engineered, let&apos;s build it.
              </h2>
              <p className="text-zinc-400 text-base sm:text-lg font-sans max-w-2xl leading-relaxed">
                Available for engineering leadership, system architecture consulting, and high-concurrency production deployments.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-4 font-mono text-xs">
              {/* Copyable direct email */}
              <div className="bg-obsidian border border-hairline p-4">
                <span className="text-zinc-600 block text-[10px] uppercase mb-1">DIRECT DISPATCH CHANNEL</span>
                <div className="text-white font-semibold break-all mb-3">{personalInfo.email}</div>
                <button
                  onClick={copyEmail}
                  className="w-full py-2 bg-obsidian-elevated hover:bg-zinc-800 text-zinc-200 border border-hairline hover:border-signal-orange transition-colors flex items-center justify-center gap-2"
                >
                  <span>{copied ? "COPIED TO CLIPBOARD ✓" : "COPY EMAIL ADDRESS"}</span>
                </button>
              </div>

              {/* Verified links */}
              <div className="grid grid-cols-2 gap-2">
                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-obsidian border border-hairline hover:border-zinc-500 text-zinc-300 hover:text-white transition-colors flex items-center justify-between"
                >
                  <span>GITHUB</span>
                  <span className="text-signal-orange">↗</span>
                </a>
                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-obsidian border border-hairline hover:border-zinc-500 text-zinc-300 hover:text-white transition-colors flex items-center justify-between"
                >
                  <span>LINKEDIN</span>
                  <span className="text-signal-orange">↗</span>
                </a>
                <a
                  href={personalInfo.socials.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-obsidian border border-hairline hover:border-zinc-500 text-zinc-300 hover:text-white transition-colors flex items-center justify-between col-span-2"
                >
                  <span>WHATSAPP MESSENGER</span>
                  <span className="text-signal-orange">↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
