"use client";

import React from "react";
import Image from "next/image";

export default function StudioFooter() {
  return (
    <footer className="py-16 px-6 sm:px-10 max-w-7xl mx-auto border-t border-[#110A13]/10 text-xs text-[#6A6372] font-mono flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="flex items-center gap-3">
        <div className="relative w-6 h-6 flex items-center justify-center flex-shrink-0">
          <Image
            src="/assets/icon 1@2x.png"
            alt="AC Monogram"
            width={24}
            height={24}
            className="w-full h-full object-contain"
          />
        </div>
        <span className="font-display font-bold text-sm text-[#110A13]">
          AlulCode (Muhammad Khoyron Ahlaqul Firdaus)
        </span>
      </div>

      <div className="flex items-center gap-6">
        <span>BUILT WITH NEXT.JS & TAILWIND</span>
        <span>•</span>
        <span>MALANG, INDONESIA</span>
        <span>•</span>
        <span>© 2026 AC MONOGRAM</span>
      </div>

      <div>
        <a
          href="#"
          className="hover:text-[#110A13] underline underline-offset-4 decoration-brand-purple"
        >
          BACK TO TOP ↑
        </a>
      </div>
    </footer>
  );
}
