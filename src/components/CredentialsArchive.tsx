"use client";

import React, { useState } from "react";
import Image from "next/image";
import { certificateList, personalInfo } from "@/data/portfolioData";

export default function CredentialsArchive() {
  const [activeCert, setActiveCert] = useState<number | null>(null);

  return (
    <section id="credentials" className="relative bg-editorial-bg text-editorial-ink border-b border-editorial-border py-20 md:py-28 editorial-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 mb-12 border-b border-editorial-border">
          <div>
            <div className="flex items-center gap-2 mb-2 font-mono text-xs text-brand-purple font-semibold">
              <span>{"// SECTION 06"}</span>
              <span>•</span>
              <span className="tracking-widest uppercase">ACCREDITATIONS & AUDITS</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-editorial-ink">
              Verified Credentials & Security Honors
            </h2>
          </div>

          <a
            href={personalInfo.socials.certificatesDrive}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-editorial-muted hover:text-brand-purple flex items-center gap-1.5 pb-1 border-b border-editorial-border hover:border-brand-purple transition-colors font-semibold"
          >
            <span>OFFICIAL CERTIFICATES REPOSITORY</span>
            <span>↗</span>
          </a>
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificateList.map((cert) => (
            <div
              key={cert.id}
              className="bg-editorial-surface border border-editorial-border rounded-2xl p-5 flex flex-col justify-between hover:border-brand-purple/50 transition-all shadow-sm group"
            >
              <div>
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-editorial-border font-mono text-[11px] text-editorial-muted">
                  <span className="text-brand-purple font-bold">{cert.category.toUpperCase()}</span>
                  <span>{cert.year}</span>
                </div>

                <div
                  onClick={() => setActiveCert(cert.id)}
                  className="relative aspect-[4/3] w-full mb-4 rounded-xl border border-editorial-border bg-editorial-bg cursor-pointer overflow-hidden group shadow-sm"
                >
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    className="object-cover opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-brand-purple/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center font-mono text-xs text-white font-semibold">
                    CLICK TO INSPECT
                  </div>
                </div>

                <h3 className="font-display font-bold text-base text-editorial-ink mb-2 leading-snug">
                  {cert.title}
                </h3>
                <p className="font-mono text-xs text-editorial-muted mb-3 font-semibold">{cert.issuer}</p>

                {cert.credentialNote && (
                  <p className="text-xs text-editorial-muted font-sans leading-relaxed">
                    {cert.credentialNote}
                  </p>
                )}
              </div>

              <div className="mt-4 pt-3 border-t border-editorial-border flex items-center justify-between font-mono text-[11px]">
                <span className="text-editorial-muted">{cert.highlight}</span>
                <span className="text-emerald-700 font-bold">VERIFIED ✓</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox / Certificate Inspection Modal */}
      {activeCert && (
        <div
          onClick={() => setActiveCert(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm cursor-pointer"
        >
          {(() => {
            const cert = certificateList.find((c) => c.id === activeCert);
            if (!cert) return null;
            return (
              <div
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-3xl w-full bg-editorial-surface border border-editorial-border rounded-2xl p-6 sm:p-8 cursor-default shadow-2xl text-editorial-ink"
              >
                <div className="flex justify-between items-center pb-4 mb-4 border-b border-editorial-border">
                  <div>
                    <span className="font-mono text-xs text-brand-purple font-semibold">{cert.category} • {cert.year}</span>
                    <h4 className="font-display font-bold text-xl text-editorial-ink">{cert.title}</h4>
                  </div>
                  <button
                    onClick={() => setActiveCert(null)}
                    className="font-mono text-xs px-3.5 py-1.5 bg-editorial-bg rounded-lg border border-editorial-border text-editorial-ink hover:text-brand-purple font-semibold"
                  >
                    [CLOSE]
                  </button>
                </div>

                <div className="relative aspect-[16/10] w-full rounded-xl border border-editorial-border bg-editorial-bg overflow-hidden mb-4 shadow-sm">
                  <Image src={cert.image} alt={cert.title} fill className="object-contain" />
                </div>

                <p className="font-mono text-xs text-editorial-muted font-semibold">{cert.issuer} — {cert.highlight}</p>
              </div>
            );
          })()}
        </div>
      )}
    </section>
  );
}
