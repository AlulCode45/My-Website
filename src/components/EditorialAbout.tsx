"use client";

import React from "react";
import { motion } from "framer-motion";

export default function EditorialAbout() {
  return (
    <section id="about" className="py-24 sm:py-32 px-6 sm:px-10 max-w-7xl mx-auto border-t border-[#110A13]/10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Left Column: Number & Section Tag */}
        <div className="lg:col-span-4 flex flex-col justify-between">
          <div>
            <span className="font-mono text-xs uppercase tracking-ultra text-brand-purple font-semibold block mb-3">
              01 / PERSPECTIVE
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#110A13] tracking-tight leading-tight">
              I don&apos;t just build the interface.
              <br />
              <span className="font-serif italic font-normal text-brand-purple">
                I want to know what happens behind it.
              </span>
            </h2>
          </div>

          <div className="hidden lg:block pt-16">
            <p className="font-mono text-[11px] uppercase tracking-widest text-[#6A6372] mb-2">
              ALULCODE (MUHAMMAD KHOYRON)
            </p>
            <p className="text-xs text-[#6A6372] leading-relaxed">
              Fullstack Developer & System Architect based in Malang, Indonesia.
            </p>
          </div>
        </div>

        {/* Right Column: Narrative Essay */}
        <div className="lg:col-span-8 space-y-8 text-[#110A13]">
          <p className="font-serif text-2xl sm:text-3xl lg:text-4xl font-light leading-relaxed text-[#110A13]">
            Many developers specialize either in how something <span className="italic font-normal text-brand-purple">looks</span> or how it <span className="italic font-normal text-brand-magenta">computes</span>. I find the most interesting engineering happens right at their collision.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4 text-base text-[#6A6372] leading-relaxed font-sans">
            <div className="space-y-4">
              <h3 className="font-display font-semibold text-base text-[#110A13] tracking-tight">
                Frontend with Tactile Emotion
              </h3>
              <p>
                A clean UI is not just aesthetics; it is clarity of thought. When working with React and Next.js, I treat layout, typography, and motion with obsessive care. A user should feel confidence the moment a page loads—through rapid paint times, zero layout shifts, and responsive touch feedback.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-display font-semibold text-base text-[#110A13] tracking-tight">
                Backend with Mechanical Rigor
              </h3>
              <p>
                Behind every elegant control sits a database transaction, a security check, and an API contract. I architect backends with Laravel and PostgreSQL that can withstand edge cases—designing normalized schemas, enforcing strict role policies, and structuring deployments with Docker containerization.
              </p>
            </div>
          </div>

          {/* Three Operating Principles */}
          <div className="pt-8 border-t border-[#110A13]/10 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-1">
              <span className="font-mono text-[11px] text-brand-purple font-semibold">01. INTENTION</span>
              <p className="text-xs text-[#6A6372]">
                No decorative bloat. Every element, animation, and database column must have an unambiguous purpose.
              </p>
            </div>
            <div className="space-y-1">
              <span className="font-mono text-[11px] text-brand-purple font-semibold">02. PERFORMANCE</span>
              <p className="text-xs text-[#6A6372]">
                Fast software respects user attention. Sub-second initial response, optimized queries, and fluid 60fps renders.
              </p>
            </div>
            <div className="space-y-1">
              <span className="font-mono text-[11px] text-brand-purple font-semibold">03. ARCHITECTURE</span>
              <p className="text-xs text-[#6A6372]">
                Clean boundaries between UI, API, domain models, and infrastructure that any developer can maintain.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
