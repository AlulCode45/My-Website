"use client";

import React, { useState } from "react";
import Image from "next/image";
import { certificateList, personalInfo } from "@/data/portfolioData";

export default function CertificationsArchive() {
  const [activeCert, setActiveCert] = useState<number | null>(null);

  return (
    <section id="credentials" className="relative border-b border-hairline py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 mb-12 border-b border-hairline">
          <div>
            <div className="flex items-center gap-2 mb-2 font-mono text-xs text-signal-orange">
              <span>{"// SECTION 05"}</span>
              <span>•</span>
              <span className="tracking-widest uppercase">ACCREDITATIONS & AUDITS</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Verified Credentials & Security Honors
            </h2>
          </div>

          <a
            href={personalInfo.socials.certificatesDrive}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-zinc-400 hover:text-signal-orange flex items-center gap-1.5 pb-1 border-b border-hairline hover:border-signal-orange transition-colors"
          >
            <span>OFFICIAL CERTIFICATES DRIVE</span>
            <span>↗</span>
          </a>
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificateList.map((cert) => (
            <div
              key={cert.id}
              className="bg-obsidian-surface border border-hairline p-5 flex flex-col justify-between hover:border-zinc-700 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-hairline font-mono text-[11px] text-zinc-500">
                  <span className="text-signal-orange font-semibold">{cert.category.toUpperCase()}</span>
                  <span>{cert.year}</span>
                </div>

                <div
                  onClick={() => setActiveCert(cert.id)}
                  className="relative aspect-[4/3] w-full mb-4 border border-hairline bg-obsidian cursor-pointer overflow-hidden group"
                >
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center font-mono text-xs text-white">
                    CLICK TO INSPECT
                  </div>
                </div>

                <h3 className="font-display font-bold text-base text-white mb-2 leading-snug">
                  {cert.title}
                </h3>
                <p className="font-mono text-xs text-zinc-400 mb-3">{cert.issuer}</p>

                {cert.credentialNote && (
                  <p className="text-xs text-zinc-500 font-sans leading-relaxed">
                    {cert.credentialNote}
                  </p>
                )}
              </div>

              <div className="mt-4 pt-3 border-t border-hairline flex items-center justify-between font-mono text-[11px]">
                <span className="text-zinc-500">{cert.highlight}</span>
                <span className="text-emerald-400">VERIFIED ✓</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox / Certificate Inspection Modal */}
      {activeCert && (
        <div
          onClick={() => setActiveCert(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm cursor-pointer"
        >
          {(() => {
            const cert = certificateList.find((c) => c.id === activeCert);
            if (!cert) return null;
            return (
              <div
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-3xl w-full bg-obsidian-surface border border-hairline p-6 cursor-default"
              >
                <div className="flex justify-between items-center pb-4 mb-4 border-b border-hairline">
                  <div>
                    <span className="font-mono text-xs text-signal-orange">{cert.category} • {cert.year}</span>
                    <h4 className="font-display font-bold text-lg text-white">{cert.title}</h4>
                  </div>
                  <button
                    onClick={() => setActiveCert(null)}
                    className="font-mono text-xs px-3 py-1 bg-obsidian border border-hairline text-zinc-300 hover:text-white"
                  >
                    [CLOSE]
                  </button>
                </div>

                <div className="relative aspect-[16/10] w-full border border-hairline bg-obsidian overflow-hidden mb-4">
                  <Image src={cert.image} alt={cert.title} fill className="object-contain" />
                </div>

                <p className="font-mono text-xs text-zinc-400">{cert.issuer} — {cert.highlight}</p>
              </div>
            );
          })()}
        </div>
      )}
    </section>
  );
}
