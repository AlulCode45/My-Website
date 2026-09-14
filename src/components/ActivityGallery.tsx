"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { activityGalleryList, ActivityItem } from "@/data/portfolioData";

export default function ActivityGallery() {
  const [selectedActivity, setSelectedActivity] = useState<ActivityItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("ALL");

  const categories = ["ALL", "Seminar", "Workshop", "Tech Talk", "Kompetisi"];

  const filteredActivities =
    activeCategory === "ALL"
      ? activityGalleryList
      : activityGalleryList.filter((item) => item.category === activeCategory);

  return (
    <section id="gallery" className="py-28 sm:py-36 px-6 sm:px-10 max-w-7xl mx-auto border-t border-[#110A13]/10">
      {/* Editorial Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#110A13]/10">
        <div>
          <span className="font-mono text-xs uppercase tracking-ultra text-brand-purple font-semibold block mb-3">
            06 / COMMUNITY & ENGAGEMENT
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-6xl text-[#110A13] tracking-tight">
            Seminar, Talks &{" "}
            <span className="font-serif italic font-normal text-brand-purple">
              Activities.
            </span>
          </h2>
        </div>

        <p className="max-w-md text-sm text-[#6A6372] leading-relaxed font-sans">
          Dokumentasi visual keterlibatan dalam seminar teknologi, workshop rekayasa perangkat lunak, forum tech talk, dan simposium pengembang.
        </p>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex flex-wrap gap-2 pt-8 pb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all duration-200 ${
              activeCategory === cat
                ? "bg-[#110A13] text-white font-medium"
                : "bg-white border border-[#110A13]/10 text-[#6A6372] hover:text-[#110A13] hover:border-[#110A13]/25"
            }`}
          >
            {cat === "ALL" ? "SEMUA KEGIATAN" : cat.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Editorial Photo & Documentation Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredActivities.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.05 }}
            onClick={() => setSelectedActivity(item)}
            className="group cursor-pointer bg-white rounded-2xl p-4 border border-[#110A13]/10 hover:border-brand-purple/40 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-between"
          >
            {/* Photo / Media Container */}
            <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-[#F7F5F8] border border-[#110A13]/5 mb-4">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
                <span className="font-mono text-[10px] text-white tracking-widest uppercase bg-brand-purple/90 px-2.5 py-1 rounded-md">
                  Buka Dokumentasi ↗
                </span>
                <span className="font-mono text-[10px] text-white/80">
                  {item.date}
                </span>
              </div>
            </div>

            {/* Content & Metadata */}
            <div className="space-y-3 pt-1 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-[10px] text-brand-purple font-semibold uppercase tracking-wider">
                    {item.category} • {item.location}
                  </span>
                  <span className="font-mono text-[10px] text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded font-medium">
                    {item.role}
                  </span>
                </div>

                <h3 className="font-display font-bold text-base text-[#110A13] group-hover:text-brand-purple transition-colors leading-snug">
                  {item.title}
                </h3>
                <p className="font-mono text-xs text-[#6A6372] mt-1">
                  {item.event}
                </p>
              </div>

              <p className="font-sans text-xs text-[#6A6372] line-clamp-2 leading-relaxed pt-2 border-t border-[#110A13]/5">
                {item.description}
              </p>

              <div className="flex flex-wrap gap-1.5 pt-1">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[9px] px-2 py-0.5 bg-[#F7F5F8] text-[#6A6372] rounded"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox / Modal for High-Res Activity Inspection */}
      <AnimatePresence>
        {selectedActivity && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
            onClick={() => setSelectedActivity(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-[#F7F5F8] rounded-2xl overflow-hidden shadow-2xl border border-white/20 p-6 sm:p-8 flex flex-col max-h-[90vh]"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between pb-4 border-b border-[#110A13]/10 mb-4">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs uppercase tracking-widest text-brand-purple font-semibold">
                      DOKUMENTASI KEGIATAN // {selectedActivity.category.toUpperCase()}
                    </span>
                    <span className="font-mono text-xs text-[#6A6372]">
                      {selectedActivity.date}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-[#110A13] mt-1">
                    {selectedActivity.title}
                  </h3>
                  <p className="font-serif italic text-sm text-brand-purple">
                    {selectedActivity.event} — {selectedActivity.location}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedActivity(null)}
                  className="p-2 rounded-full hover:bg-[#110A13]/10 text-[#110A13] font-mono text-xs"
                  aria-label="Tutup"
                >
                  CLOSE [ESC]
                </button>
              </div>

              {/* Full Image Display */}
              <div className="relative flex-1 min-h-[300px] sm:min-h-[440px] w-full rounded-xl overflow-hidden bg-white border border-[#110A13]/10 mb-4">
                <Image
                  src={selectedActivity.image}
                  alt={selectedActivity.title}
                  fill
                  className="object-contain p-2"
                />
              </div>

              {/* Description & Tags */}
              <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-sans text-[#6A6372]">
                <div className="max-w-xl">
                  <span className="font-mono font-semibold text-[#110A13] block mb-1">
                    Catatan Kegiatan / Peran: {selectedActivity.role}
                  </span>
                  <p className="leading-relaxed text-[#110A13]/80">
                    {selectedActivity.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 self-start sm:self-center">
                  {selectedActivity.tags.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[10px] px-2.5 py-1 bg-white border border-[#110A13]/10 text-[#110A13] rounded-md font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
