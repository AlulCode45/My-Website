"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function ClosingDispatch() {
  const [copied, setCopied] = useState(false);
  const email = "contact.alulcode@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-28 sm:py-36 px-6 sm:px-10 max-w-7xl mx-auto border-t border-[#110A13]/10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Big Invitation */}
        <div className="lg:col-span-7 space-y-8">
          <div>
            <span className="font-mono text-xs uppercase tracking-ultra text-brand-purple font-semibold block mb-3">
              07 / TRANSMISSION
            </span>
            <h2 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl text-[#110A13] tracking-tight leading-tight">
              Have something
              <br />
              <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-magenta">
                worth building?
              </span>
            </h2>
          </div>

          <p className="font-sans text-base sm:text-lg text-[#6A6372] max-w-lg leading-relaxed">
            I am currently open to fullstack engineering leadership roles, complex contract builds, and challenging technical architectures. Let&apos;s build software that lasts.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#110A13] text-white hover:bg-brand-purple transition-all duration-300 font-display font-medium text-sm shadow-md hover:shadow-xl hover:scale-[1.02]"
            >
              <span>Initiate Conversation</span>
              <span className="font-mono">→</span>
            </a>

            <button
              onClick={handleCopy}
              className="px-6 py-4 rounded-full border border-[#110A13]/15 text-[#110A13] hover:border-brand-purple hover:text-brand-purple font-mono text-xs transition-colors"
            >
              {copied ? "COPIED TO CLIPBOARD ✓" : "COPY EMAIL"}
            </button>
          </div>
        </div>

        {/* Right Column: Direct Channels & Studio Metadata */}
        <div className="lg:col-span-5 p-8 sm:p-10 rounded-2xl bg-white border border-[#110A13]/10 shadow-sm space-y-8">
          <div className="flex items-center gap-4 pb-6 border-b border-[#110A13]/10">
            <div className="w-12 h-12 rounded-full overflow-hidden bg-brand-purple/10 flex items-center justify-center">
              <Image
                src="/assets/icon 1@2x.png"
                alt="AC Logo"
                width={48}
                height={48}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="font-display font-bold text-base text-[#110A13]">
                Muhammad Khoyron Ahlaqul Firdaus
              </p>
              <p className="font-mono text-xs text-[#6A6372]">
                Alul • Malang, East Java, Indonesia (UTC+7)
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <span className="font-mono text-[11px] uppercase tracking-widest text-[#6A6372] block">
              DIRECT CHANNELS
            </span>
            <div className="divide-y divide-[#110A13]/5 text-sm">
              <div className="py-2.5 flex items-center justify-between">
                <span className="text-[#6A6372]">Email</span>
                <a
                  href={`mailto:${email}`}
                  className="font-medium text-[#110A13] hover:text-brand-purple font-mono text-xs"
                >
                  {email}
                </a>
              </div>
              <div className="py-2.5 flex items-center justify-between">
                <span className="text-[#6A6372]">GitHub</span>
                <a
                  href="https://github.com/AlulCode45"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-[#110A13] hover:text-brand-purple font-mono text-xs"
                >
                  @AlulCode45 ↗
                </a>
              </div>
              <div className="py-2.5 flex items-center justify-between">
                <span className="text-[#6A6372]">LinkedIn</span>
                <a
                  href="https://linkedin.com/in/alulcode"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-[#110A13] hover:text-brand-purple font-mono text-xs"
                >
                  in/alulcode ↗
                </a>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-[#110A13]/10">
            <div className="flex items-center gap-2 text-xs text-emerald-600 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for high-impact engineering projects</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
