"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { certificateList, CertificateItem, personalInfo } from "@/data/portfolioData";

export default function CertificatesSection() {
  const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("ALL");

  const categories = [
    { key: "ALL", label: `SEMUA (${certificateList.length})` },
    { key: "Kompetisi", label: "KOMPETISI" },
    { key: "Security", label: "SECURITY & BUG BOUNTY" },
    { key: "Profesi & Nasional", label: "PROFESI & NASIONAL" },
    { key: "Akademik", label: "AKADEMIK" },
    { key: "Course & Spesialisasi", label: "COURSE & SPESIALISASI" },
    { key: "Pemerintah", label: "PEMERINTAH" },
    { key: "Komunitas", label: "KOMUNITAS" },
  ];

  const filteredCerts =
    activeCategory === "ALL"
      ? certificateList
      : certificateList.filter((item) => item.category === activeCategory);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedCert(null);
      if (!selectedCert) return;
      const currentIndex = filteredCerts.findIndex((c) => c.id === selectedCert.id);
      if (e.key === "ArrowRight") {
        const nextIndex = (currentIndex + 1) % filteredCerts.length;
        setSelectedCert(filteredCerts[nextIndex]);
      } else if (e.key === "ArrowLeft") {
        const prevIndex = (currentIndex - 1 + filteredCerts.length) % filteredCerts.length;
        setSelectedCert(filteredCerts[prevIndex]);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedCert, filteredCerts]);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedCert) return;
    const currentIndex = filteredCerts.findIndex((c) => c.id === selectedCert.id);
    const nextIndex = (currentIndex + 1) % filteredCerts.length;
    setSelectedCert(filteredCerts[nextIndex]);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedCert) return;
    const currentIndex = filteredCerts.findIndex((c) => c.id === selectedCert.id);
    const prevIndex = (currentIndex - 1 + filteredCerts.length) % filteredCerts.length;
    setSelectedCert(filteredCerts[prevIndex]);
  };

  return (
    <section
      id="certificates"
      className="py-28 sm:py-36 px-6 sm:px-10 max-w-7xl mx-auto border-t border-[#110A13]/10"
    >
      {/* Editorial Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-12 border-b border-[#110A13]/10">
        <div>
          <span className="font-mono text-xs uppercase tracking-ultra text-brand-purple font-semibold block mb-3">
            07 / CREDENTIALS & ACCREDITATION
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-6xl text-[#110A13] tracking-tight">
            Verified Honors &{" "}
            <span className="font-serif italic font-normal text-brand-purple">
              Certifications.
            </span>
          </h2>
        </div>

        <div className="max-w-lg space-y-4">
          <p className="text-sm text-[#6A6372] leading-relaxed font-sans">
            Koleksi {certificateList.length} kredensial terverifikasi mencakup kejuaraan web development tingkat nasional, pengujian keamanan sistem (responsible disclosure), standar kompetensi profesi KKNI IV, hingga sertifikasi teknologi industri.
          </p>
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.socials.certificatesDrive}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#110A13] text-white hover:bg-brand-purple text-xs font-mono transition-colors shadow-sm"
            >
              <span>Buka Seluruh Arsip di Google Drive</span>
              <span className="text-white/70">↗</span>
            </a>
            <span className="font-mono text-xs text-[#6A6372]">
              {filteredCerts.length} Dokumen Ditampilkan
            </span>
          </div>
        </div>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap gap-2 pt-8 pb-10">
        {categories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setActiveCategory(cat.key)}
            className={`px-4 py-2 rounded-full text-xs font-mono transition-all duration-200 ${
              activeCategory === cat.key
                ? "bg-[#110A13] text-white font-medium shadow-sm"
                : "bg-white border border-[#110A13]/10 text-[#6A6372] hover:text-[#110A13] hover:border-[#110A13]/25"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Certificates Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCerts.map((cert, idx) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: Math.min(idx * 0.04, 0.3) }}
            onClick={() => setSelectedCert(cert)}
            className="group cursor-pointer bg-white rounded-2xl p-4 border border-[#110A13]/10 hover:border-brand-purple/40 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
          >
            {/* Image Preview Container */}
            <div className="relative aspect-[16/11] w-full rounded-xl overflow-hidden bg-[#F7F5F8] border border-[#110A13]/5 mb-4">
              <Image
                src={cert.image}
                alt={cert.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
                <span className="font-mono text-[10px] text-white tracking-widest uppercase bg-brand-purple/90 px-2.5 py-1 rounded-md backdrop-blur-sm">
                  Pratinjau Penuh ↗
                </span>
                <span className="font-mono text-[11px] text-white/90 font-medium">
                  {cert.year}
                </span>
              </div>
            </div>

            {/* Content & Metadata */}
            <div className="space-y-3 pt-1 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="font-mono text-[10px] text-brand-purple font-semibold uppercase tracking-wider">
                    {cert.category}
                  </span>
                  <span className="font-mono text-[10px] text-[#6A6372] bg-[#F7F5F8] px-2 py-0.5 rounded">
                    {cert.year}
                  </span>
                </div>

                <h3 className="font-display font-bold text-base text-[#110A13] group-hover:text-brand-purple transition-colors leading-snug line-clamp-2">
                  {cert.title}
                </h3>

                <p className="font-mono text-xs text-[#6A6372] mt-1 line-clamp-1">
                  {cert.issuer}
                </p>
              </div>

              <div className="pt-3 border-t border-[#110A13]/5 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200/50">
                    {cert.highlight}
                  </span>
                  <span className="font-mono text-xs text-brand-purple group-hover:translate-x-1 transition-transform inline-flex items-center gap-1 font-medium">
                    Lihat ↗
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal / Lightbox */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/85 backdrop-blur-md overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl bg-white rounded-2xl overflow-hidden shadow-2xl border border-white/20 my-auto"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-[#110A13]/10 bg-[#F7F5F8]">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs px-2.5 py-0.5 rounded-full bg-brand-purple text-white font-medium">
                    {selectedCert.category}
                  </span>
                  <span className="font-mono text-xs text-[#6A6372]">
                    Tahun {selectedCert.year}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrev}
                    aria-label="Previous Certificate"
                    className="p-1.5 rounded-full hover:bg-white text-[#110A13] transition-colors border border-transparent hover:border-[#110A13]/10"
                  >
                    ←
                  </button>
                  <button
                    onClick={handleNext}
                    aria-label="Next Certificate"
                    className="p-1.5 rounded-full hover:bg-white text-[#110A13] transition-colors border border-transparent hover:border-[#110A13]/10"
                  >
                    →
                  </button>
                  <button
                    onClick={() => setSelectedCert(null)}
                    aria-label="Close modal"
                    className="p-1.5 rounded-full hover:bg-white text-[#110A13] transition-colors border border-transparent hover:border-[#110A13]/10 ml-2 font-mono text-sm"
                  >
                    ✕
                  </button>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 space-y-6 max-h-[80vh] overflow-y-auto">
                {/* Certificate Image */}
                <div className="relative aspect-[16/11] w-full rounded-xl overflow-hidden bg-black/5 border border-[#110A13]/10">
                  <Image
                    src={selectedCert.image}
                    alt={selectedCert.title}
                    fill
                    className="object-contain"
                  />
                </div>

                {/* Details */}
                <div className="space-y-4">
                  <div>
                    <span className="font-mono text-xs text-brand-purple font-semibold uppercase tracking-wider block mb-1">
                      {selectedCert.highlight}
                    </span>
                    <h3 className="font-display font-bold text-2xl text-[#110A13]">
                      {selectedCert.title}
                    </h3>
                    <p className="font-mono text-sm text-[#6A6372] mt-1">
                      Penyelenggara / Issuer: <span className="font-semibold text-[#110A13]">{selectedCert.issuer}</span>
                    </p>
                  </div>

                  {selectedCert.credentialNote && (
                    <div className="p-4 rounded-xl bg-[#F7F5F8] border border-[#110A13]/10">
                      <span className="font-mono text-[10px] uppercase tracking-wider text-[#6A6372] block mb-1 font-semibold">
                        Keterangan Dokumen & Validasi
                      </span>
                      <p className="text-sm text-[#110A13] leading-relaxed font-sans">
                        {selectedCert.credentialNote}
                      </p>
                    </div>
                  )}

                  {/* Actions */}
                  <div className="pt-2 flex flex-wrap items-center gap-3">
                    {selectedCert.credentialUrl && (
                      <a
                        href={selectedCert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-purple text-white hover:bg-brand-purple/90 text-xs font-mono font-medium transition-all shadow-sm"
                      >
                        <span>Verifikasi Kredensial Resmi</span>
                        <span>↗</span>
                      </a>
                    )}
                    <a
                      href={personalInfo.socials.certificatesDrive}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white border border-[#110A13]/15 text-[#110A13] hover:border-[#110A13]/30 text-xs font-mono transition-colors"
                    >
                      <span>Buka Folder Google Drive</span>
                      <span>↗</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
