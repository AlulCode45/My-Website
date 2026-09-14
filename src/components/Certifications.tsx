"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Award, ExternalLink, Maximize2 } from "lucide-react";
import { certificateList, CertificateItem, personalInfo } from "@/data/portfolioData";
import ImageModal from "./ImageModal";
import { motion, AnimatePresence } from "framer-motion";

export default function Certifications() {
  const [activeCategory, setActiveCategory] = useState<string>("Semua");
  const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(null);

  const categories = ["Semua", "Kompetisi", "Security", "Pemerintah", "Akademik"];

  const filteredCerts = certificateList.filter((cert) => {
    if (activeCategory === "Semua") return true;
    return cert.category === activeCategory;
  });

  const getCategoryBadgeColor = (cat: string) => {
    switch (cat) {
      case "Kompetisi":
        return "text-amber-400 bg-amber-500/10 border-amber-500/20";
      case "Security":
        return "text-emerald-400 bg-emerald-500/10 border-emerald-500/20";
      case "Pemerintah":
        return "text-sky-400 bg-sky-500/10 border-sky-500/20";
      default:
        return "text-zinc-300 bg-white/[0.04] border-white/10";
    }
  };

  return (
    <section id="certifications" className="py-20 border-t border-white/[0.06] relative z-10">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/[0.04] border border-white/10 text-sky-400 text-xs font-mono mb-3">
              <Award className="w-3.5 h-3.5" />
              <span>Validasi & Rekognisi</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight font-display">
              Sertifikasi & Lisensi Prestasi
            </h2>
          </div>
          <p className="text-sm text-zinc-400 max-w-md font-sans">
            Bukti pencapaian dalam kompetisi pemrograman web nasional, pengakuan keamanan siber (responsible disclosure), dan penghargaan instansi resmi.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-xs font-medium rounded-xl transition-all ${
                activeCategory === cat
                  ? "bg-white text-zinc-950 font-semibold shadow-md"
                  : "bg-white/[0.03] text-zinc-400 hover:text-white hover:bg-white/[0.07] border border-white/[0.06]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Animated Certificates Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredCerts.map((cert) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                key={cert.id}
                className="group flex flex-col rounded-2xl bg-[#11131a]/80 border border-white/[0.08] hover:border-sky-500/40 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-sky-950/20"
              >
                {/* Thumbnail Container */}
                <div
                  className="relative aspect-[4/3] w-full bg-black/60 overflow-hidden cursor-pointer"
                  onClick={() => setSelectedCert(cert)}
                >
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />

                  {/* Hover overlay with zoom icon */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/20 backdrop-blur-md text-white text-xs font-medium">
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span>Lihat Resolusi Penuh</span>
                    </span>
                  </div>

                  {/* Year Pill */}
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-md text-[11px] font-mono text-zinc-300 border border-white/10">
                    {cert.year}
                  </div>
                </div>

                {/* Certificate Details */}
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span
                      className={`px-2.5 py-0.5 rounded-md text-[10px] font-mono border ${getCategoryBadgeColor(
                        cert.category
                      )}`}
                    >
                      {cert.category}
                    </span>
                    <span className="text-[11px] text-zinc-400 font-mono truncate">
                      {cert.issuer}
                    </span>
                  </div>

                  <h3
                    onClick={() => setSelectedCert(cert)}
                    className="text-sm font-bold text-white group-hover:text-sky-300 transition-colors cursor-pointer mb-2 line-clamp-2"
                  >
                    {cert.title}
                  </h3>

                  <div className="mt-auto pt-3 border-t border-white/[0.05] flex items-center justify-between text-xs">
                    <span className="text-zinc-400 font-sans text-[11px] truncate max-w-[200px]">
                      {cert.highlight}
                    </span>
                    <button
                      onClick={() => setSelectedCert(cert)}
                      className="text-sky-400 hover:text-sky-300 font-mono text-[11px] inline-flex items-center gap-1"
                    >
                      <span>Detail</span>
                      <Maximize2 className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Google Drive Archive Banner */}
        <div className="mt-12 p-8 rounded-2xl bg-[#11131a]/50 border border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-base font-semibold text-white">Arsip Berkas Sertifikasi Lengkap</h4>
            <p className="text-xs sm:text-sm text-zinc-400 mt-1">
              Seluruh salinan legalitas, piagam lomba, dan berkas asli tersimpan terpusat di Google Drive resmi.
            </p>
          </div>
          <a
            href={personalInfo.socials.certificatesDrive}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-zinc-950 font-semibold text-xs sm:text-sm hover:bg-zinc-200 transition-colors whitespace-nowrap shadow-sm"
          >
            <span>Buka Google Drive</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedCert && (
        <ImageModal
          isOpen={!!selectedCert}
          onClose={() => setSelectedCert(null)}
          imageSrc={selectedCert.image}
          title={selectedCert.title}
          subtitle={`${selectedCert.issuer} • Tahun ${selectedCert.year}`}
          link={personalInfo.socials.certificatesDrive}
          linkLabel="Arsip di Drive"
        />
      )}
    </section>
  );
}
