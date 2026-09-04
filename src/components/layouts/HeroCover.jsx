import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Send,
  Download,
  Terminal,
  Layers,
  Smartphone,
  Server,
  Code2,
  CheckCircle2,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import CoverImage from "../../assets/cover.png";
import { useApp } from "../../context/AppContext";
import { profileData } from "../../data/profileData";
import "../../styles/heroCover.css";

export default function HeroCover() {
  const { t, language } = useApp();

  const titles = profileData.roles[language] || profileData.roles.en;

  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = titles[titleIndex % titles.length] || titles[0] || "";
    let timer;

    if (!isDeleting && displayText.length < currentTitle.length) {
      timer = setTimeout(() => {
        setDisplayText(currentTitle.substring(0, displayText.length + 1));
      }, 80);
    } else if (isDeleting && displayText.length > 0) {
      timer = setTimeout(() => {
        setDisplayText(currentTitle.substring(0, displayText.length - 1));
      }, 40);
    } else if (!isDeleting && displayText.length === currentTitle.length) {
      timer = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && displayText.length === 0) {
      timer = setTimeout(() => {
        setIsDeleting(false);
        setTitleIndex((prev) => (prev + 1) % titles.length);
      }, 200);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, titleIndex, titles]);

  const floatingBadges = [
    { icon: <Code2 size={15} style={{ color: "var(--accent-sky-light)" }} />, text: "React.js" },
    { icon: <Smartphone size={15} style={{ color: "var(--accent-sky)" }} />, text: "Flutter" },
    { icon: <Server size={15} style={{ color: "var(--accent-rose)" }} />, text: "Laravel" },
    { icon: <Terminal size={15} style={{ color: "var(--accent-emerald)" }} />, text: "Node.js" },
    { icon: <Layers size={15} style={{ color: "var(--accent-amber)" }} />, text: "Python" },
  ];

  return (
    <section className="hero-section bg-grid-pattern">
      {/* Glow circles */}
      <div className="hero-center-glow" />

      <div className="app-container">
        <div className="hero-grid-layout">
          {/* LEFT CONTENT COLUMN */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="hero-content-col"
          >
            {/* Availability Badge */}
            <div className="hero-badge-available">
              <span className="pulse-dot-wrapper">
                <span className="pulse-dot-ping" />
                <span className="pulse-dot-solid" />
              </span>
              <span>{t("hero_available")}</span>
            </div>

            {/* Greeting & Name */}
            <div>
              <div className="hero-greeting">
                👋 {t("hero_greeting")}
              </div>
              <h1 className="hero-title-name">
                SRUN <span className="text-gradient">Borath</span>
              </h1>
            </div>

            {/* Dynamic Typing Title */}
            <div className="hero-typing-box">
              <span className="hero-dynamic-role">
                {displayText}
              </span>
              <span className="hero-cursor-blink" />
            </div>

            {/* Biography */}
            <p className="hero-bio-paragraph">
              {t("hero_bio")}
            </p>

            {/* CTA Buttons Group */}
            <div className="hero-cta-group">
              <Link to="/projects" className="btn-primary-gradient">
                <span>{t("hero_btn_projects")}</span>
                <Send size={16} />
              </Link>

              <Link to="/cv" className="btn-secondary-outline">
                <Download size={16} />
                <span>{t("hero_btn_cv")}</span>
              </Link>

              <a
                href={profileData.contact.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-icon-square"
                aria-label="GitHub"
              >
                <FaGithub size={18} />
              </a>
            </div>

            {/* Floating Tech Chips */}
            <div className="hero-stack-chips">
              <span className="stack-label">STACK:</span>
              {floatingBadges.map((badge, idx) => (
                <span key={idx} className="stack-chip">
                  {badge.icon}
                  {badge.text}
                </span>
              ))}
            </div>
          </motion.div>

          {/* RIGHT VISUAL COLUMN */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-visual-col"
          >
            <div className="hero-cover-card">
              <img
                src={CoverImage}
                alt="SRUN Borath"
                className="hero-cover-image"
              />

              <div className="hero-floating-stat">
                <CheckCircle2 size={24} className="hero-floating-stat-icon" />
                <div>
                  <div className="hero-floating-stat-title">{t("stat_year")}</div>
                  <div className="hero-floating-stat-sub">{t("stat_year_sub")}</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
