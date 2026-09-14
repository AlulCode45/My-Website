"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { personalInfo } from "@/data/portfolioData";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Pengalaman", href: "#experience" },
    { name: "Proyek", href: "#projects" },
    { name: "Keahlian", href: "#skills" },
    { name: "Sertifikasi", href: "#certifications" },
    { name: "Pendidikan", href: "#education" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 flex justify-center px-4 sm:px-6 py-3 transition-all duration-300">
      <div
        className={`w-full max-w-6xl flex items-center justify-between px-5 py-3 rounded-2xl transition-all duration-300 ${
          isScrolled
            ? "bg-[#0f1118]/85 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/40"
            : "bg-[#0f1118]/60 backdrop-blur-md border border-white/[0.06]"
        }`}
      >
        {/* Brand Logo & Name */}
        <Link
          href="/"
          className="group flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded-lg"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center font-bold text-white text-sm shadow-md shadow-sky-500/20 group-hover:scale-105 transition-transform">
            A
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-white tracking-tight text-sm sm:text-base group-hover:text-sky-300 transition-colors">
              AlulCode
            </span>
            <span className="text-[10px] text-zinc-400 hidden sm:inline font-mono">
              Lead & Fullstack Dev
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-white/[0.03] border border-white/[0.06] rounded-full px-4 py-1.5">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="px-3.5 py-1.5 text-xs font-medium text-zinc-300 hover:text-white hover:bg-white/[0.06] rounded-full transition-all"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right Status & Contact CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-[11px] font-mono">Open to Projects</span>
          </div>

          <Link
            href="#contact"
            className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold text-zinc-900 bg-white hover:bg-zinc-200 rounded-full transition-all shadow-sm hover:shadow hover:scale-[1.02]"
          >
            <span>Hubungi</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          <Link
            href="#contact"
            className="text-xs font-medium text-white px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/15 transition-colors"
          >
            Kontak
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-zinc-300 hover:text-white rounded-lg hover:bg-white/10 transition-colors focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-x-4 top-20 z-40 md:hidden bg-[#0f1118]/95 backdrop-blur-2xl border border-white/10 rounded-2xl p-5 shadow-2xl animate-fade-in">
          <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-3">
            <div className="flex items-center gap-2 text-emerald-400 text-xs">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="font-mono">Tersedia untuk Kolaborasi</span>
            </div>
            <span className="text-xs text-zinc-500 font-mono">Menu</span>
          </div>

          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 text-sm font-medium text-zinc-300 hover:text-white hover:bg-white/5 rounded-xl transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-zinc-900 bg-white rounded-xl hover:bg-zinc-200 transition-colors"
            >
              <span>Hubungi Saya</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
