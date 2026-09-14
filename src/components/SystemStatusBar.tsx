"use client";

import React, { useEffect, useState } from "react";
import { personalInfo } from "@/data/portfolioData";

export default function SystemStatusBar() {
  const [timeString, setTimeString] = useState<string>("");
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [activeSection, setActiveSection] = useState<string>("HERO");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    // Dynamic Asia/Jakarta clock
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
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = Math.min(100, Math.max(0, Math.round((window.scrollY / totalHeight) * 100)));
        setScrollProgress(progress);
      }

      // Track active section via Intersection-like calculation
      const sections = ["hero", "philosophy", "archive", "topology", "experience", "credentials", "dispatch"];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveSection(sectionId.toUpperCase());
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
    <header className="sticky top-0 z-50 w-full bg-obsidian-pure/90 backdrop-blur-md border-b border-hairline transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        {/* Left: Brand Identity & Location */}
        <div className="flex items-center gap-4">
          <a
            href="#hero"
            className="flex items-center gap-2 group text-zinc-100 hover:text-signal-orange transition-colors"
          >
            <span className="w-2 h-2 rounded-none bg-signal-orange inline-block animate-pulse" />
            <span className="font-mono text-xs font-semibold tracking-wider">
              {personalInfo.nickname.toUpperCase()} {"//"} SYS.26
            </span>
          </a>

          <div className="hidden md:flex items-center gap-2 text-zinc-500 font-mono text-[11px] border-l border-hairline pl-4">
            <span>LOC: ID-JKT [7.98°S, 112.63°E]</span>
          </div>
        </div>

        {/* Center: Live Telemetry */}
        <div className="hidden lg:flex items-center gap-6 font-mono text-[11px] text-zinc-400">
          <div className="flex items-center gap-2">
            <span className="text-zinc-600">LOCAL_TIME</span>
            <span className="text-zinc-200 tabular-nums">{timeString ? `${timeString} WIB` : "--:--:--"}</span>
          </div>

          <div className="w-[1px] h-3 bg-hairline" />

          <div className="flex items-center gap-2">
            <span className="text-zinc-600">SCROLL</span>
            <span className="text-signal-orange tabular-nums">{String(scrollProgress).padStart(3, "0")}%</span>
          </div>

          <div className="w-[1px] h-3 bg-hairline" />

          <div className="flex items-center gap-2">
            <span className="text-zinc-600">SECTION</span>
            <span className="text-zinc-200">[{activeSection}]</span>
          </div>
        </div>

        {/* Right: Navigation Index & Dispatch */}
        <div className="flex items-center gap-4">
          <nav className="hidden md:flex items-center gap-5 font-mono text-xs text-zinc-400">
            <a
              href="#archive"
              className="hover:text-zinc-100 transition-colors hover:border-b hover:border-signal-orange pb-0.5"
            >
              01/ARCHIVE
            </a>
            <a
              href="#philosophy"
              className="hover:text-zinc-100 transition-colors hover:border-b hover:border-signal-orange pb-0.5"
            >
              02/THINKING
            </a>
            <a
              href="#topology"
              className="hover:text-zinc-100 transition-colors hover:border-b hover:border-signal-orange pb-0.5"
            >
              03/TOPOLOGY
            </a>
            <a
              href="#experience"
              className="hover:text-zinc-100 transition-colors hover:border-b hover:border-signal-orange pb-0.5"
            >
              04/LOG
            </a>
          </nav>

          <a
            href="#dispatch"
            className="flex items-center gap-1.5 font-mono text-xs px-3 py-1.5 bg-obsidian-elevated hover:bg-zinc-800 text-zinc-200 hover:text-white border border-hairline hover:border-signal-orange/40 transition-all"
          >
            <span>DISPATCH</span>
            <span className="text-signal-orange">↗</span>
          </a>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden flex flex-col gap-1 p-1 text-zinc-400 hover:text-white"
            aria-label="Toggle Navigation Index"
          >
            <span className={`w-4 h-[1px] bg-current transition-transform ${isMobileMenuOpen ? "rotate-45 translate-y-1" : ""}`} />
            <span className={`w-4 h-[1px] bg-current transition-opacity ${isMobileMenuOpen ? "opacity-0" : ""}`} />
            <span className={`w-4 h-[1px] bg-current transition-transform ${isMobileMenuOpen ? "-rotate-45 -translate-y-1" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-hairline bg-obsidian-surface px-6 py-4 flex flex-col gap-3 font-mono text-xs">
          <div className="flex justify-between items-center text-zinc-500 pb-2 border-b border-hairline text-[11px]">
            <span>TIME: {timeString} WIB</span>
            <span>SCROLL: {scrollProgress}%</span>
          </div>
          <a
            href="#archive"
            onClick={() => setIsMobileMenuOpen(false)}
            className="py-1 text-zinc-300 hover:text-signal-orange flex justify-between"
          >
            <span>01 / ARCHIVE</span>
            <span className="text-zinc-600">PROJECTS</span>
          </a>
          <a
            href="#philosophy"
            onClick={() => setIsMobileMenuOpen(false)}
            className="py-1 text-zinc-300 hover:text-signal-orange flex justify-between"
          >
            <span>02 / HOW I THINK</span>
            <span className="text-zinc-600">AXIOMS</span>
          </a>
          <a
            href="#topology"
            onClick={() => setIsMobileMenuOpen(false)}
            className="py-1 text-zinc-300 hover:text-signal-orange flex justify-between"
          >
            <span>03 / STACK TOPOLOGY</span>
            <span className="text-zinc-600">SYSTEM</span>
          </a>
          <a
            href="#experience"
            onClick={() => setIsMobileMenuOpen(false)}
            className="py-1 text-zinc-300 hover:text-signal-orange flex justify-between"
          >
            <span>04 / ENGINEERING LOG</span>
            <span className="text-zinc-600">TRACK RECORD</span>
          </a>
          <a
            href="#credentials"
            onClick={() => setIsMobileMenuOpen(false)}
            className="py-1 text-zinc-300 hover:text-signal-orange flex justify-between"
          >
            <span>05 / CREDENTIALS</span>
            <span className="text-zinc-600">AWARDS & SEC</span>
          </a>
        </div>
      )}
    </header>
  );
}
