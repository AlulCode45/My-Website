"use client";

import React from "react";
import Image from "next/image";
import { personalInfo } from "@/data/portfolioData";

export default function SystemFooter() {
  return (
    <footer className="w-full bg-editorial-surface border-t border-editorial-border py-12 text-editorial-muted font-mono text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-editorial-border">
          <div className="flex items-center gap-3">
            <div className="relative w-7 h-7 rounded-lg overflow-hidden border border-brand-purple/20 flex-shrink-0">
              <Image src="/assets/icon 1@2x.png" alt="AC" fill className="object-cover" />
            </div>
            <div>
              <div className="text-editorial-ink font-bold tracking-tight text-sm font-display">
                {personalInfo.name.toUpperCase()}
              </div>
              <div className="text-editorial-muted text-[10px] tracking-wider">
                PROJECT LEAD DEVELOPER & FULLSTACK SOFTWARE ENGINEER
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-[11px]">
            <div>
              <span className="text-editorial-muted font-semibold">LOC:</span>{" "}
              <span className="text-editorial-ink">MALANG / INDONESIA</span>
            </div>
            <div>
              <span className="text-editorial-muted font-semibold">ID:</span>{" "}
              <span className="text-editorial-ink">AC // SYS.26</span>
            </div>
            <div>
              <span className="text-editorial-muted font-semibold">STACK:</span>{" "}
              <span className="text-brand-purple font-semibold">LARAVEL • NEXT.JS • TS</span>
            </div>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[11px]">
          <p className="text-editorial-muted">
            © {new Date().getFullYear()} MUHAMMAD KHOYRON AHLAQUL FIRDAUS. DESIGNED & AUTHORED WITH ART DIRECTION.
          </p>
          <p className="text-editorial-muted font-semibold">
            BUILT BETWEEN DESIGN AND SYSTEMS.
          </p>
        </div>
      </div>
    </footer>
  );
}
