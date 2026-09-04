import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  SiPython,
  SiLaravel,
  SiNodedotjs,
  SiReact,
  SiFlutter,
  SiMongodb,
  SiJavascript,
  SiHtml5,
  SiGit,
  SiFigma,
  SiKotlin,
  SiSpringboot,
  SiMysql,
  SiSqlite,
  SiLinux,
  SiPhp,
  SiPostman,
} from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";
import { Sparkles, Users, MessageSquare, Brain, Globe, Code } from "lucide-react";
import { useApp } from "../../context/AppContext";
import { skillsData } from "../../data/skillsData";
import "../../styles/skillsSection.css";

const iconMap = {
  SiReact: <SiReact style={{ color: "var(--accent-sky-light)" }} />,
  SiJavascript: <SiJavascript style={{ color: "var(--accent-amber)" }} />,
  SiHtml5: <SiHtml5 style={{ color: "var(--accent-rose)" }} />,
  SiCss3: <FaCss3Alt style={{ color: "var(--accent-sky)" }} />,
  SiLaravel: <SiLaravel style={{ color: "var(--accent-rose)" }} />,
  SiNodedotjs: <SiNodedotjs style={{ color: "var(--accent-emerald)" }} />,
  SiSpringboot: <SiSpringboot style={{ color: "var(--accent-emerald)" }} />,
  SiPython: <SiPython style={{ color: "var(--accent-sky)" }} />,
  SiPhp: <SiPhp style={{ color: "var(--accent-indigo)" }} />,
  Code: <Code style={{ color: "var(--accent-indigo)" }} />,
  SiFlutter: <SiFlutter style={{ color: "var(--accent-sky)" }} />,
  SiKotlin: <SiKotlin style={{ color: "var(--accent-purple)" }} />,
  SiMysql: <SiMysql style={{ color: "var(--accent-sky)" }} />,
  SiMongodb: <SiMongodb style={{ color: "var(--accent-emerald)" }} />,
  SiSqlite: <SiSqlite style={{ color: "var(--accent-sky-light)" }} />,
  SiGit: <SiGit style={{ color: "var(--accent-rose)" }} />,
  SiLinux: <SiLinux style={{ color: "var(--accent-amber)" }} />,
  SiFigma: <SiFigma style={{ color: "var(--accent-rose)" }} />,
  SiPostman: <SiPostman style={{ color: "var(--accent-amber)" }} />,
  Users: <Users size={24} />,
  Brain: <Brain size={24} />,
  MessageSquare: <MessageSquare size={24} />,
};

export default function SkillsSection() {
  const { t, language } = useApp();
  const [activeTab, setActiveTab] = useState("technical");

  const categories = ["Frontend", "Backend", "Mobile", "Database", "Tools"];

  const tabs = [
    { key: "technical", label: t("skills_tab_tech"), icon: <Code size={16} /> },
    { key: "soft", label: t("skills_tab_soft"), icon: <Users size={16} /> },
    { key: "languages", label: t("skills_tab_lang"), icon: <Globe size={16} /> },
  ];

  return (
    <section className="skills-section" id="skills">
      {/* Glow Effect */}
      <div className="skills-glow" />

      <div className="app-container">
        {/* Section Header */}
        <div className="section-header-block">
          <div className="section-badge" style={{ background: "rgba(99, 102, 241, 0.12)", borderColor: "rgba(99, 102, 241, 0.25)", color: "var(--accent-indigo)" }}>
            <Sparkles size={14} /> {t("skills_badge")}
          </div>
          <h2 className="section-title">
            {t("skills_title_pre")}{" "}
            <span className="text-gradient">
              {t("skills_title_highlight")}
            </span>
          </h2>
          <p className="section-subtitle">
            {t("skills_sub")}
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="skills-tab-bar">
          <div className="skills-tab-container">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`skills-tab-button ${activeTab === tab.key ? "active" : ""}`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          {activeTab === "technical" && (
            <motion.div
              key="technical"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="tech-categories-grid"
            >
              {categories.map((category, catIdx) => {
                const groupSkills = skillsData.technical.filter(
                  (s) => s.category === category
                );

                return (
                  <div key={catIdx} className="tech-group-card">
                    <div className="tech-group-header">
                      <div className="tech-group-icon-wrap">
                        <Code size={18} />
                      </div>
                      <h3 className="tech-group-title">
                        {category} {language === "kh" ? "ជំនាញ" : "Development"}
                      </h3>
                    </div>

                    <div className="tech-skills-item-list">
                      {groupSkills.map((skill, idx) => (
                        <div key={idx} className="tech-skill-item">
                          <div className="skill-info-row">
                            <div className="skill-name-with-icon">
                              {iconMap[skill.iconKey] || <Code size={16} />}
                              <span>{skill.name}</span>
                            </div>
                            <span className="skill-level-percent">
                              {skill.level}%
                            </span>
                          </div>

                          <div className="skill-progress-bar-bg">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.8, delay: idx * 0.05 }}
                              className="skill-progress-bar-fill"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </motion.div>
          )}

          {activeTab === "soft" && (
            <motion.div
              key="soft"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="soft-skills-grid"
            >
              {skillsData.soft.map((skill, idx) => (
                <div key={idx} className="soft-skill-card">
                  <div className="soft-skill-icon-box">
                    {iconMap[skill.iconKey] || <Users size={24} />}
                  </div>
                  <h3 className="soft-skill-title">
                    {skill.title[language] || skill.title.en}
                  </h3>
                  <p className="soft-skill-desc">
                    {skill.desc[language] || skill.desc.en}
                  </p>
                </div>
              ))}
            </motion.div>
          )}

          {activeTab === "languages" && (
            <motion.div
              key="languages"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="languages-grid"
            >
              {skillsData.languages.map((lang, idx) => (
                <div key={idx} className="language-card">
                  <div className="language-header">
                    <div>
                      <h3 className="language-name">
                        {lang.name[language] || lang.name.en}
                      </h3>
                      <div className="language-desc" style={{ marginTop: "0.25rem" }}>
                        {lang.desc[language] || lang.desc.en}
                      </div>
                    </div>
                    <span className="language-fluency-badge">
                      {lang.fluency[language] || lang.fluency.en}
                    </span>
                  </div>

                  <div className="tech-skill-item" style={{ marginTop: "0.5rem" }}>
                    <div className="skill-info-row">
                      <span style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>
                        {language === "kh" ? "កម្រិតជំនាញ" : "Fluency Level"}
                      </span>
                      <span className="skill-level-percent">{lang.level}%</span>
                    </div>
                    <div className="skill-progress-bar-bg">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${lang.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="skill-progress-bar-fill"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}