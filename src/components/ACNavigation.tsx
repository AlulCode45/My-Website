"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { personalInfo } from "@/data/portfolioData";

export default function ACNavigation() {
  const [timeString, setTimeString] = useState<string>("");
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [activeSection, setActiveSection] = useState<string>("HERO");
  const [isMobileOpen, setIsMobileOpen] = useState<boolean>(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Jakarta",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      setTimeString(new Intl.DateTimeFormat("en-GB", options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      if (total > 0) {
        const pct = Math.min(100, Math.max(0, Math.round((window.scrollY / total) * 100)));
        setScrollProgress(pct);
      }

      const sections = ["hero", "intersection", "archive", "system", "experience", "lab", "dispatch"];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 160 && rect.bottom >= 160) {
            setActiveSection(id.toUpperCase());
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full bg-editorial-surface/90 backdrop-blur-md border-b border-editorial-border transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Left: AC Monogram Icon & Brand Tag */}
        <div className="flex items-center gap-3">
          <a href="#hero" className="flex items-center gap-2.5 group">
            <div className="relative w-8 h-8 rounded-lg overflow-hidden border border-brand-purple/20 shadow-sm group-hover:scale-105 transition-transform">
              <Image
                src="/assets/icon 1@2x.png"
                alt="AC Monogram"
                fill
                priority
                className="object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-xs sm:text-sm text-editorial-ink tracking-tight group-hover:text-brand-purple transition-colors">
                {personalInfo.nickname.toUpperCase()}
              </span>
              <span className="font-mono text-[9px] text-editorial-muted tracking-widest uppercase">
                FULLSTACK DEVELOPER
              </span>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-2 font-mono text-[11px] text-editorial-muted border-l border-editorial-border pl-4">
            <span>LOC: ID-JKT [7.98°S, 112.63°E]</span>
          </div>
        </div>

        {/* Center: Real Telemetry (Time, Scroll, Section) */}
        <div className="hidden md:flex items-center gap-6 font-mono text-[11px] text-editorial-muted">
          <div className="flex items-center gap-2">
            <span className="text-brand-purple font-semibold">●</span>
            <span className="text-editorial-muted">WIB</span>
            <span className="text-editorial-ink font-semibold tabular-nums">
              {timeString || "--:--:--"}
            </span>
          </div>

          <div className="w-[1px] h-3 bg-editorial-border" />

          <div className="flex items-center gap-1.5">
            <span className="text-editorial-muted">SCROLL</span>
            <span className="text-brand-purple font-semibold tabular-nums">
              {String(scrollProgress).padStart(3, "0")}%
            </span>
          </div>

          <div className="w-[1px] h-3 bg-editorial-border" />

          <div className="flex items-center gap-1.5">
            <span className="text-editorial-muted">NODE</span>
            <span className="text-editorial-ink font-semibold">[{activeSection}]</span>
          </div>
        </div>

        {/* Right: Section Anchors & Dispatch CTA */}
        <div className="flex items-center gap-4">
          <nav className="hidden lg:flex items-center gap-5 font-mono text-xs text-editorial-muted">
            <a
              href="#intersection"
              className="hover:text-brand-purple transition-colors hover:border-b hover:border-brand-purple pb-0.5"
            >
              01/INTERSECTION
            </a>
            <a
              href="#archive"
              className="hover:text-brand-purple transition-colors hover:border-b hover:border-brand-purple pb-0.5"
            >
              02/WORK
            </a>
            <a
              href="#system"
              className="hover:text-brand-purple transition-colors hover:border-b hover:border-brand-purple pb-0.5"
            >
              03/SYSTEM
            </a>
            <a
              href="#experience"
              className="hover:text-brand-purple transition-colors hover:border-b hover:border-brand-purple pb-0.5"
            >
              04/LOG
            </a>
            <a
              href="#lab"
              className="hover:text-brand-purple transition-colors hover:border-b hover:border-brand-purple pb-0.5"
            >
              05/LAB
            </a>
          </nav>

          <a
            href="#dispatch"
            className="flex items-center gap-1.5 font-mono text-xs px-3.5 py-1.5 bg-brand-purple hover:bg-brand-purple-vibrant text-white rounded-md shadow-sm transition-all"
          >
            <span>DISPATCH</span>
            <span>↗</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="lg:hidden p-1.5 text-editorial-ink hover:text-brand-purple focus:outline-none"
            aria-label="Toggle Navigation Ledger"
          >
            <div className="w-5 flex flex-col gap-1">
              <span className={`h-0.5 bg-current transition-transform ${isMobileOpen ? "rotate-45 translate-y-1.5" : ""}`} />
              <span className={`h-0.5 bg-current transition-opacity ${isMobileOpen ? "opacity-0" : ""}`} />
              <span className={`h-0.5 bg-current transition-transform ${isMobileOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileOpen && (
        <div className="lg:hidden bg-editorial-surface border-t border-editorial-border px-6 py-4 flex flex-col gap-3 font-mono text-xs">
          <div className="flex justify-between items-center text-editorial-muted text-[11px] pb-2 border-b border-editorial-border">
            <span>TIME: {timeString} WIB</span>
            <span>SCROLL: {scrollProgress}%</span>
          </div>
          <a
            href="#intersection"
            onClick={() => setIsMobileOpen(false)}
            className="py-1.5 text-editorial-ink hover:text-brand-purple flex justify-between"
          >
            <span>01 / INTERSECTION</span>
            <span className="text-editorial-muted">DESIGN × SYSTEMS</span>
          </a>
          <a
            href="#archive"
            onClick={() => setIsMobileOpen(false)}
            className="py-1.5 text-editorial-ink hover:text-brand-purple flex justify-between"
          >
            <span>02 / WORK ARCHIVE</span>
            <span className="text-editorial-muted">PRODUCTION PROJECTS</span>
          </a>
          <a
            href="#system"
            onClick={() => setIsMobileOpen(false)}
            className="py-1.5 text-editorial-ink hover:text-brand-purple flex justify-between"
          >
            <span>03 / SYSTEM TOPOLOGY</span>
            <span className="text-editorial-muted">TECH PIPELINE</span>
          </a>
          <a
            href="#experience"
            onClick={() => setIsMobileOpen(false)}
            className="py-1.5 text-editorial-ink hover:text-brand-purple flex justify-between"
          >
            <span>04 / ENGINEERING LOG</span>
            <span className="text-editorial-muted">TRACK RECORD</span>
          </a>
          <a
            href="#lab"
            onClick={() => setIsMobileOpen(false)}
            className="py-1.5 text-editorial-ink hover:text-brand-purple flex justify-between"
          >
            <span>05 / THE LAB & NOTES</span>
            <span className="text-editorial-muted">EXPERIMENTS</span>
          </a>
        </div>
      )}
    </header>
  );
}
