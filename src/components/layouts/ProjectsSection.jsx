import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Github,
  FolderGit2,
  Layers,
  Smartphone,
  Server,
  Monitor,
  Code,
  Sparkles,
} from "lucide-react";
import { useApp } from "../../context/AppContext";
import { projectsData } from "../../data/projectsData";

const iconMap = {
  Monitor: <Monitor className="text-amber-600 dark:text-amber-400" size={22} />,
  Server: <Server className="text-emerald-600 dark:text-emerald-400" size={22} />,
  Smartphone: <Smartphone className="text-sky-600 dark:text-sky-400" size={22} />,
  Layers: <Layers className="text-purple-600 dark:text-purple-400" size={22} />,
  Code: <Code className="text-rose-600 dark:text-rose-400" size={22} />,
};

export default function ProjectsSection() {
  const { t, language, isDark } = useApp();
  const [activeTab, setActiveTab] = useState("All");

  const categories = [
    { key: "All", label: t("proj_all") },
    { key: "Full-Stack", label: "Full-Stack" },
    { key: "Backend", label: "Backend" },
    { key: "Mobile", label: "Mobile" },
    { key: "Python/Desktop", label: "Python/Desktop" },
  ];

  const localizedProjects = projectsData.map((project) => ({
    ...project,
    title: project.title[language] || project.title.en,
    description: project.description[language] || project.description.en,
    highlights: project.highlights[language] || project.highlights.en,
    icon: iconMap[project.iconType] || <Code className="text-amber-600 dark:text-amber-400" size={22} />,
  }));

  const filteredProjects =
    activeTab === "All"
      ? localizedProjects
      : localizedProjects.filter((p) => p.category === activeTab);

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 relative" id="projects">
      {/* Background glow */}
      <div className={`absolute bottom-0 left-1/4 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] rounded-full blur-3xl pointer-events-none ${
        isDark ? "bg-sky-500/10" : "bg-sky-500/5"
      }`} />

      <div className="max-w-7xl mx-auto space-y-10 sm:space-y-12 relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-600 dark:text-rose-300 text-xs font-semibold uppercase tracking-wider">
            <FolderGit2 size={14} /> {t("proj_badge")}
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            isDark ? "text-white" : "text-slate-950"
          }`}>
            {t("proj_title_pre")}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-rose-500 to-sky-600 dark:from-amber-400 dark:via-rose-400 dark:to-sky-400">
              {t("proj_title_highlight")}
            </span>
          </h2>
          <p className="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400">
            {t("proj_sub")}
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveTab(cat.key)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                activeTab === cat.key
                  ? "bg-gradient-to-r from-amber-400 to-rose-400 text-slate-950 shadow-md shadow-amber-500/20 scale-105"
                  : isDark
                    ? "bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800"
                    : "bg-white border border-slate-300 text-slate-700 hover:text-slate-950 hover:bg-slate-100 shadow-xs"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className={`rounded-3xl border p-6 sm:p-7 flex flex-col justify-between backdrop-blur-xl shadow-lg hover:shadow-2xl transition-all duration-300 group ${
                  isDark
                    ? "bg-slate-900/90 border-slate-800 hover:border-amber-400/50 hover:shadow-amber-500/10"
                    : "bg-white border-slate-200 hover:border-slate-300 hover:shadow-xl"
                }`}
              >
                <div className="space-y-4">
                  {/* Top Bar */}
                  <div className="flex justify-between items-start">
                    <div className={`p-3 rounded-2xl border group-hover:scale-105 transition-transform ${
                      isDark ? "bg-slate-950 border-slate-800" : "bg-slate-50 border-slate-200 shadow-xs"
                    }`}>
                      {project.icon}
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold border ${
                      isDark 
                        ? "bg-amber-400/10 border-amber-400/25 text-amber-300" 
                        : "bg-amber-50 border-amber-200 text-amber-900"
                    }`}>
                      {project.category}
                    </span>
                  </div>

                  {/* Title & Desc */}
                  <div>
                    <h3 className={`text-lg sm:text-xl font-bold transition-colors ${
                      isDark 
                        ? "text-white group-hover:text-amber-300" 
                        : "text-slate-950 group-hover:text-amber-700"
                    }`}>
                      {project.title}
                    </h3>
                    <p className={`text-xs sm:text-sm mt-2.5 leading-relaxed font-normal ${
                      isDark ? "text-slate-300" : "text-slate-700 font-normal"
                    }`}>
                      {project.description}
                    </p>
                  </div>

                  {/* Highlights */}
                  <div className={`space-y-2 pt-3 border-t ${
                    isDark ? "border-slate-800" : "border-slate-200"
                  }`}>
                    {project.highlights.map((hl, i) => (
                      <div key={i} className={`flex items-start gap-2.5 text-xs ${
                        isDark ? "text-slate-300" : "text-slate-800 font-medium"
                      }`}>
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0 mt-1.5" />
                        <span className="leading-snug">{hl}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className={`px-2.5 py-1 rounded-lg text-xs font-mono font-medium border ${
                          isDark 
                            ? "bg-slate-950 text-slate-300 border-slate-800" 
                            : "bg-slate-100 text-slate-900 border-slate-300"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Action Links */}
                <div className="pt-5 mt-5 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 rounded-xl border text-xs font-bold transition cursor-pointer ${
                      isDark
                        ? "bg-slate-800 hover:bg-slate-700 border-slate-700 text-white"
                        : "bg-slate-100 hover:bg-slate-200 border-slate-300 text-slate-900 shadow-xs"
                    }`}
                  >
                    <Github size={15} />
                    <span>{t("proj_source")}</span>
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-gradient-to-r from-amber-400 to-rose-400 hover:from-amber-300 hover:to-rose-300 text-slate-950 text-xs font-bold shadow-md shadow-amber-500/15 hover:shadow-amber-500/30 transition cursor-pointer"
                  >
                    <ExternalLink size={15} />
                    <span>{t("proj_preview")}</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
