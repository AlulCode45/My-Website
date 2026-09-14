"use client";

import React from "react";
import { fieldNotes } from "@/data/portfolioData";

export default function FieldNotes() {
  return (
    <section className="py-24 sm:py-32 px-6 sm:px-10 max-w-7xl mx-auto border-t border-[#110A13]/10">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#110A13]/10">
        <div>
          <span className="font-mono text-xs uppercase tracking-ultra text-brand-purple font-semibold block mb-3">
            05 / OBSERVATIONS
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-[#110A13] tracking-tight">
            Things I Keep{" "}
            <span className="font-serif italic font-normal text-brand-purple">
              Thinking About.
            </span>
          </h2>
        </div>

        <p className="max-w-md text-sm text-[#6A6372] leading-relaxed font-sans">
          Engineering is not just writing syntax; it is questioning defaults. Unfiltered notes on software friction, usability, and architecture.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-12">
        {fieldNotes.map((note) => (
          <article
            key={note.id}
            className="p-8 rounded-2xl bg-white border border-[#110A13]/10 hover:border-brand-purple/30 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-widest text-brand-purple font-semibold">
                  {note.category}
                </span>
                <span className="font-mono text-xs text-[#6A6372]">
                  {note.id}
                </span>
              </div>

              <h3 className="font-display font-bold text-xl sm:text-2xl text-[#110A13] tracking-tight leading-snug">
                {note.inquiry}
              </h3>

              <p className="text-sm text-[#6A6372] leading-relaxed font-sans">
                {note.observation}
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-[#110A13]/10 flex items-center justify-between text-xs font-mono text-[#6A6372]">
              <span>THESIS NOTE</span>
              <span className="text-brand-purple">READ ESSAY →</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
