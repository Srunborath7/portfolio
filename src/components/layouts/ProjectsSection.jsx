import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  FolderGit2,
  Layers,
  Smartphone,
  Server,
  Monitor,
  Code,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { useApp } from "../../context/AppContext";
import { projectsData } from "../../data/projectsData";
import "../../styles/projectsSection.css";

const iconMap = {
  Monitor: <Monitor size={22} style={{ color: "var(--accent-amber)" }} />,
  Server: <Server size={22} style={{ color: "var(--accent-emerald)" }} />,
  Smartphone: <Smartphone size={22} style={{ color: "var(--accent-sky)" }} />,
  Layers: <Layers size={22} style={{ color: "var(--accent-purple)" }} />,
  Code: <Code size={22} style={{ color: "var(--accent-rose)" }} />,
};

export default function ProjectsSection() {
  const { t, language } = useApp();
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
    icon: iconMap[project.iconType] || <Code size={22} style={{ color: "var(--accent-amber)" }} />,
  }));

  const filteredProjects =
    activeTab === "All"
      ? localizedProjects
      : localizedProjects.filter((p) => p.category === activeTab);

  return (
    <section className="projects-section" id="projects">
      {/* Background glow */}
      <div className="projects-glow" />

      <div className="app-container">
        {/* Section Header */}
        <div className="section-header-block">
          <div className="section-badge" style={{ background: "rgba(244, 63, 94, 0.12)", borderColor: "rgba(244, 63, 94, 0.25)", color: "var(--accent-rose)" }}>
            <FolderGit2 size={14} /> {t("proj_badge")}
          </div>
          <h2 className="section-title">
            {t("proj_title_pre")}{" "}
            <span className="text-gradient">
              {t("proj_title_highlight")}
            </span>
          </h2>
          <p className="section-subtitle">
            {t("proj_sub")}
          </p>
        </div>

        {/* Category Tabs */}
        <div className="projects-tabs-row">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveTab(cat.key)}
              className={`project-tab-btn ${activeTab === cat.key ? "active" : ""}`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <motion.div layout className="projects-cards-grid">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                layout
                key={project.id || index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="project-card"
              >
                <div>
                  {/* Top card header */}
                  <div className="project-card-header">
                    <div className="project-icon-box">
                      {project.icon}
                    </div>
                    <span className="project-category-badge">
                      {project.category}
                    </span>
                  </div>

                  <div style={{ marginTop: "1rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    <h3 className="project-title">
                      {project.title}
                    </h3>
                    <p className="project-desc">
                      {project.description}
                    </p>
                  </div>

                  {/* Highlights */}
                  {project.highlights && (
                    <div className="project-highlights-list" style={{ marginTop: "1rem" }}>
                      {project.highlights.map((item, idx) => (
                        <div key={idx} className="project-highlight-item">
                          <span className="highlight-bullet">▹</span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div>
                  {/* Tech stack tags */}
                  <div className="project-tech-tags">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="project-tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="project-card-actions">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-github-btn"
                    >
                      <FaGithub size={15} />
                      <span>{t("proj_source")}</span>
                    </a>

                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-demo-btn"
                    >
                      <ExternalLink size={15} />
                      <span>{t("proj_preview")}</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
