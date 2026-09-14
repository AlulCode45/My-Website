"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FolderGit2, Maximize2, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { projectsList, ProjectItem, personalInfo } from "@/data/portfolioData";
import ImageModal from "./ImageModal";
import { motion, AnimatePresence } from "framer-motion";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<string>("Semua");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const categories = ["Semua", "Web Application", "Enterprise", "E-Commerce", "Admin Dashboard"];

  const filteredProjects = projectsList.filter((project) => {
    if (activeCategory === "Semua") return true;
    if (activeCategory === "Enterprise") {
      return project.category.includes("Enterprise") || project.category.includes("Management");
    }
    return project.category.toLowerCase().includes(activeCategory.toLowerCase());
  });

  return (
    <section id="projects" className="py-20 border-t border-white/[0.06] relative z-10">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/[0.04] border border-white/10 text-sky-400 text-xs font-mono mb-3">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>Portofolio Rekayasa</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight font-display">
              Proyek & Aplikasi Terpilih
            </h2>
          </div>
          <p className="text-sm text-zinc-400 max-w-md font-sans">
            Solusi digital nyata yang dibangun dengan fokus pada performa, keamanan data, dan integritas arsitektur software.
          </p>
        </div>

        {/* Category Filter Pills */}
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

        {/* Animated Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                key={project.id}
                className="group flex flex-col rounded-2xl bg-[#11131a]/80 border border-white/[0.08] hover:border-sky-500/40 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-sky-950/20"
              >
                {/* Image Preview Container */}
                <div
                  className="relative aspect-video w-full bg-black/60 overflow-hidden cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/20 backdrop-blur-md text-white text-xs font-medium">
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span>Perbesar Resolusi Penuh</span>
                    </span>
                    <span className="text-[11px] font-mono text-zinc-300 bg-black/60 px-2.5 py-1 rounded-md backdrop-blur-md">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Card Content */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-mono text-sky-400 tracking-wide uppercase">
                      {project.category}
                    </span>
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="text-zinc-500 hover:text-white transition-colors p-1"
                      title="Perbesar gambar"
                    >
                      <Maximize2 className="w-4 h-4" />
                    </button>
                  </div>

                  <h3
                    onClick={() => setSelectedProject(project)}
                    className="text-lg font-bold text-white group-hover:text-sky-300 transition-colors cursor-pointer mb-2.5"
                  >
                    {project.title}
                  </h3>

                  <p className="text-sm text-zinc-300/80 leading-relaxed mb-5 flex-1">
                    {project.description}
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.06]">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs font-mono text-zinc-400 bg-white/[0.03] border border-white/[0.06] rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* More Projects Callout */}
        <div className="mt-12 p-8 rounded-2xl bg-[#11131a]/50 border border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-base font-semibold text-white">Ingin melihat lebih banyak proyek?</h4>
            <p className="text-xs sm:text-sm text-zinc-400 mt-1">
              Dokumentasi proyek lainnya dan rincian arsitektur sistem dapat Anda jelajahi di LinkedIn resmi.
            </p>
          </div>
          <a
            href={personalInfo.socials.linkedinProjects}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-zinc-950 font-semibold text-xs sm:text-sm hover:bg-zinc-200 transition-colors whitespace-nowrap shadow-sm"
          >
            <span>Buka LinkedIn Projects</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedProject && (
        <ImageModal
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          imageSrc={selectedProject.image}
          title={selectedProject.title}
          subtitle={`${selectedProject.category} • ${selectedProject.technologies.join(", ")}`}
          link={personalInfo.socials.linkedinProjects}
          linkLabel="Detail di LinkedIn"
        />
      )}
    </section>
  );
}
