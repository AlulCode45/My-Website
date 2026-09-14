"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function EditorialNav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Selected Work", href: "#work" },
    { label: "About & Thesis", href: "#about" },
    { label: "The Lab", href: "#lab" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "py-4 bg-[#F7F5F8]/85 backdrop-blur-md border-b border-[#110A13]/5 shadow-sm"
            : "py-7 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 flex items-center justify-between">
          {/* Brand Monogram */}
          <Link
            href="#"
            className="group flex items-center gap-3.5 focus:outline-none"
            aria-label="Return to top"
          >
            <div className="relative w-8 h-8 rounded-full overflow-hidden bg-brand-purple/10 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/assets/icon 1@2x.png"
                alt="AC Monogram"
                width={32}
                height={32}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-sm tracking-tight text-[#110A13]">
                AlulCode
              </span>
              <span className="font-mono text-[9px] uppercase tracking-widest text-[#6A6372]">
                AC Studio
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[#6A6372] hover:text-[#110A13] transition-colors relative py-1 text-[13px] tracking-tight hover:underline underline-offset-4 decoration-brand-purple decoration-1.5"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Action / Availability pill */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href="mailto:contact.alulcode@gmail.com"
              className="group inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium border border-[#110A13]/15 text-[#110A13] hover:border-brand-purple hover:bg-brand-purple hover:text-white transition-all duration-300"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 group-hover:bg-white animate-pulse" />
              <span>Available for Build</span>
            </a>
          </div>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#110A13] focus:outline-none"
            aria-label="Toggle Navigation"
          >
            <div className="w-5 h-4 flex flex-col justify-between">
              <span
                className={`w-full h-0.5 bg-[#110A13] transition-all duration-300 ${
                  mobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              />
              <span
                className={`w-full h-0.5 bg-[#110A13] transition-all duration-300 ${
                  mobileMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`w-full h-0.5 bg-[#110A13] transition-all duration-300 ${
                  mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-[#F7F5F8] pt-28 px-8 flex flex-col justify-between pb-12 md:hidden"
          >
            <div className="flex flex-col gap-6">
              <p className="font-mono text-[10px] uppercase tracking-widest text-[#6A6372]">
                Navigation
              </p>
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-display text-2xl font-semibold tracking-tight text-[#110A13] hover:text-brand-purple"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-8 border-t border-[#110A13]/10 flex flex-col gap-3">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#6A6372]">
                Direct Contact
              </span>
              <a
                href="mailto:contact.alulcode@gmail.com"
                className="font-display font-medium text-lg text-brand-purple"
              >
                contact.alulcode@gmail.com
              </a>
              <span className="text-xs text-[#6A6372]">
                Malang, East Java, Indonesia
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
