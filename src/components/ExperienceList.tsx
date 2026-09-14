"use client";

import React from "react";
import { experiences, educationList, certificateList } from "@/data/portfolioData";

export default function ExperienceList() {
  return (
    <section id="experience" className="py-24 sm:py-32 px-6 sm:px-10 max-w-7xl mx-auto border-t border-[#110A13]/10">
      {/* Work History Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#110A13]/10">
        <div>
          <span className="font-mono text-xs uppercase tracking-ultra text-brand-purple font-semibold block mb-3">
            06 / RECORD
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-6xl text-[#110A13] tracking-tight">
            Work History &{" "}
            <span className="font-serif italic font-normal text-brand-purple">
              Foundation.
            </span>
          </h2>
        </div>

        <p className="max-w-md text-sm text-[#6A6372] leading-relaxed font-sans">
          Proven leadership in production environments, academic excellence in Computer Science, and industry-standard security certifications.
        </p>
      </div>

      {/* Editorial Work Timeline (No rigid boxes) */}
      <div className="divide-y divide-[#110A13]/10 py-8">
        {experiences.map((exp, idx) => (
          <div
            key={`${exp.company}-${idx}`}
            className="py-12 grid grid-cols-1 lg:grid-cols-12 gap-6 items-baseline group"
          >
            {/* Period */}
            <div className="lg:col-span-3">
              <span className="font-mono text-lg font-bold text-brand-purple block">
                {exp.period}
              </span>
              <span className="font-mono text-xs text-[#6A6372] uppercase tracking-wider">
                {exp.locationType}
              </span>
            </div>

            {/* Company & Role */}
            <div className="lg:col-span-4">
              <span className="font-mono text-xs uppercase tracking-widest text-[#6A6372] block mb-1">
                {exp.company}
              </span>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#110A13] group-hover:text-brand-purple transition-colors">
                {exp.role}
              </h3>
            </div>

            {/* Description & Impact */}
            <div className="lg:col-span-5 space-y-4">
              <p className="text-sm text-[#6A6372] leading-relaxed font-sans">
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-1.5 pt-2">
                {exp.technologies.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[10px] px-2 py-0.5 bg-white border border-[#110A13]/10 text-[#110A13] rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Academic Foundation & Honors Strip */}
      <div className="mt-12 pt-12 border-t border-[#110A13]/10 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Education */}
        <div className="space-y-4">
          <span className="font-mono text-xs uppercase tracking-ultra text-brand-purple font-semibold block">
            ACADEMIC FOUNDATION
          </span>
          {educationList.map((edu, idx) => (
            <div key={`${edu.institution}-${idx}`} className="p-6 rounded-xl bg-white border border-[#110A13]/10">
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-xs text-brand-purple font-medium">
                  {edu.period}
                </span>
                <span className="font-mono text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                  FOUNDATION
                </span>
              </div>
              <h4 className="font-display font-bold text-lg text-[#110A13]">
                {edu.institution}
              </h4>
              <p className="text-sm text-[#6A6372] mb-3">{edu.degree}</p>
              <p className="text-xs text-[#6A6372] font-sans leading-relaxed">
                {edu.description}
              </p>
            </div>
          ))}
        </div>

        {/* Selected Certifications */}
        <div className="space-y-4">
          <span className="font-mono text-xs uppercase tracking-ultra text-brand-purple font-semibold block">
            VERIFIED INDUSTRY CREDENTIALS
          </span>
          <div className="space-y-3">
            {certificateList.slice(0, 3).map((cert) => (
              <div
                key={cert.id}
                className="p-4 rounded-xl bg-white border border-[#110A13]/10 flex items-center justify-between"
              >
                <div>
                  <h4 className="font-display font-semibold text-sm text-[#110A13]">
                    {cert.title}
                  </h4>
                  <span className="font-mono text-[11px] text-[#6A6372]">
                    {cert.issuer} • {cert.year}
                  </span>
                </div>
                <span className="font-mono text-xs text-brand-purple font-medium">
                  {cert.highlight}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
