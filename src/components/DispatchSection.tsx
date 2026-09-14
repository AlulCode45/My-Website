"use client";

import React, { useState } from "react";
import Image from "next/image";
import { personalInfo } from "@/data/portfolioData";

export default function DispatchSection() {
  const [copied, setCopied] = useState<boolean>(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="dispatch" className="relative bg-editorial-bg text-editorial-ink border-b border-editorial-border py-20 md:py-32 editorial-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border border-editorial-border bg-editorial-surface rounded-3xl p-8 sm:p-12 lg:p-16 shadow-md relative overflow-hidden">
          {/* Subtle Background AC glyph */}
          <div className="absolute -right-10 -bottom-10 w-72 h-72 opacity-[0.04] pointer-events-none select-none">
            <Image src="/assets/logo 1@2x.png" alt="" fill className="object-contain" />
          </div>

          <div className="flex items-center gap-2 mb-6 font-mono text-xs text-brand-purple font-semibold">
            <span>{"// TRANSMISSION DISPATCH"}</span>
            <span>•</span>
            <span className="tracking-widest uppercase">END OF SPECIFICATION</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end relative z-10">
            <div className="lg:col-span-8">
              <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-editorial-ink leading-tight mb-6">
                Have something critical worth building? Let&apos;s engineer it.
              </h2>
              <p className="text-editorial-muted text-base sm:text-lg font-sans max-w-2xl leading-relaxed">
                Available for technical leadership, production system architecture, and high-concurrency fullstack deployments.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-4 font-mono text-xs">
              {/* Direct copyable email box */}
              <div className="bg-editorial-bg border border-editorial-border rounded-xl p-5 shadow-sm">
                <span className="text-editorial-muted block text-[10px] uppercase mb-1 font-semibold">
                  DIRECT TRANSMISSION CHANNEL
                </span>
                <div className="text-editorial-ink font-bold break-all mb-3 text-sm">
                  {personalInfo.email}
                </div>
                <button
                  onClick={copyEmail}
                  className="w-full py-2.5 bg-brand-purple hover:bg-brand-purple-vibrant text-white rounded-lg transition-colors flex items-center justify-center gap-2 font-semibold shadow-sm"
                >
                  <span>{copied ? "COPIED TO CLIPBOARD ✓" : "COPY EMAIL ADDRESS"}</span>
                </button>
              </div>

              {/* Verified Connection Channels */}
              <div className="grid grid-cols-2 gap-2.5">
                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 bg-editorial-bg border border-editorial-border rounded-xl hover:border-brand-purple text-editorial-ink transition-colors flex items-center justify-between font-semibold"
                >
                  <span>GITHUB</span>
                  <span className="text-brand-purple">↗</span>
                </a>
                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 bg-editorial-bg border border-editorial-border rounded-xl hover:border-brand-purple text-editorial-ink transition-colors flex items-center justify-between font-semibold"
                >
                  <span>LINKEDIN</span>
                  <span className="text-brand-purple">↗</span>
                </a>
                <a
                  href={personalInfo.socials.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 bg-editorial-bg border border-editorial-border rounded-xl hover:border-brand-purple text-editorial-ink transition-colors flex items-center justify-between col-span-2 font-semibold"
                >
                  <span>WHATSAPP DIRECT</span>
                  <span className="text-brand-purple">↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
