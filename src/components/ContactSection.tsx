"use client";

import React, { useState } from "react";
import { Mail, MessageSquare, Copy, Check, ExternalLink, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { personalInfo } from "@/data/portfolioData";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-24 border-t border-white/[0.06] relative">
      <div className="container mx-auto max-w-5xl px-4 sm:px-6">
        <div className="p-8 sm:p-12 md:p-16 rounded-3xl bg-[#11131a] border border-white/10 relative overflow-hidden shadow-2xl">
          {/* Subtle accent light */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>

          <div className="relative z-10 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/[0.04] border border-white/10 text-sky-400 text-xs font-mono mb-4">
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Inisiasi Kolaborasi</span>
            </div>

            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-4">
              Punya ide proyek atau peluang kerjasama teknis?
            </h2>

            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed mb-8">
              Saya terbuka untuk konsultasi teknis, kepemimpinan tim pengembangan sistem, maupun kolaborasi proyek web modern. Mari berdiskusi mengenai kebutuhan produk digital Anda.
            </p>

            {/* Direct Action Channels */}
            <div className="flex flex-wrap items-center gap-3.5 mb-10">
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-zinc-950 font-semibold text-sm hover:bg-zinc-200 transition-all shadow-md"
              >
                <Mail className="w-4 h-4 text-zinc-900" />
                <span>Kirim Email Langsung</span>
              </a>

              <a
                href={personalInfo.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/30 text-[#25D366] font-medium text-sm transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Hubungi via WhatsApp</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-zinc-300 text-sm font-mono transition-all"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400 text-xs">Email Disalin!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-zinc-400" />
                    <span className="text-xs">{personalInfo.email}</span>
                  </>
                )}
              </button>
            </div>

            {/* Social Channels List */}
            <div className="pt-8 border-t border-white/[0.08] flex flex-wrap items-center gap-6">
              <span className="text-xs text-zinc-500 font-mono">Saluran Resmi:</span>

              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-zinc-300 hover:text-white transition-colors"
              >
                <LinkedinIcon className="w-4 h-4 text-sky-400" />
                <span>LinkedIn</span>
                <ExternalLink className="w-3 h-3 text-zinc-500" />
              </a>

              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-zinc-300 hover:text-white transition-colors"
              >
                <GithubIcon className="w-4 h-4 text-zinc-200" />
                <span>GitHub</span>
                <ExternalLink className="w-3 h-3 text-zinc-500" />
              </a>

              <a
                href={personalInfo.socials.certificatesDrive}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-zinc-300 hover:text-white transition-colors"
              >
                <ExternalLink className="w-4 h-4 text-emerald-400" />
                <span>Google Drive Berkas</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
