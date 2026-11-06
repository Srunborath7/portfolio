import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  Send,
  Download,
  GraduationCap,
  Briefcase,
  CheckCircle2,
  FolderGit2,
} from "lucide-react";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaGithub,
  FaTelegramPlane,
  FaLinkedin,
} from "react-icons/fa";
import {
  SiFlutter,
  SiLaravel,
  SiPostgresql,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";
import { Link } from "react-router-dom";
import { useApp } from "../../context/AppContext";
import { profileData } from "../../data/profileData";
import "../../styles/heroCover.css";

export default function HeroCover() {
  const { t, language } = useApp();
  const containerRef = useRef(null);
  const videoRef = useRef(null);

  // Dynamic programming roles
  const programmingRolesEn = [
    "Full-Stack Developer",
    "React & Next.js Dev",
    "Flutter Mobile Engineer",
    "Laravel & Node.js Backend",
    "Python & AI Logic Instructor",
  ];

  const programmingRolesKh = [
    "អ្នកអភិវឌ្ឍន៍ Full-Stack",
    "អ្នកបង្កើត React & Next.js",
    "វិស្វករកម្មវិធីទូរស័ព្ទ Flutter",
    "ប្រព័ន្ធ Backend Laravel & Node",
    "គ្រូបង្រៀន Python & OOP Logic",
  ];

  const roles = language === "kh" ? programmingRolesKh : programmingRolesEn;

  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [scrollProg, setScrollProg] = useState(0);

  // Terminal commands sequence simulation
  const terminalCommands = [
    { cmd: "srun --status", out: "● Open to Full-Stack & Mobile Roles [200 OK]", isStatus: true },
    { cmd: "srun --stack", out: "['React', 'Flutter', 'Laravel', 'Node.js', 'Python']", isStatus: false },
    { cmd: "git commit -m 'feat: ship modern digital experience'", out: "✓ [main c8f2e91] Clean code delivered", isStatus: false },
  ];
  const [termLineIdx, setTermLineIdx] = useState(0);

  useEffect(() => {
    const termTimer = setInterval(() => {
      setTermLineIdx((prev) => (prev + 1) % terminalCommands.length);
    }, 3800);
    return () => clearInterval(termTimer);
  }, [terminalCommands.length]);

  // Dynamic typing animation for roles
  useEffect(() => {
    const currentTitle = roles[roleIndex % roles.length] || roles[0] || "";
    let timer;

    if (!isDeleting && displayText.length < currentTitle.length) {
      timer = setTimeout(() => {
        setDisplayText(currentTitle.substring(0, displayText.length + 1));
      }, 70);
    } else if (isDeleting && displayText.length > 0) {
      timer = setTimeout(() => {
        setDisplayText(currentTitle.substring(0, displayText.length - 1));
      }, 35);
    } else if (!isDeleting && displayText.length === currentTitle.length) {
      timer = setTimeout(() => setIsDeleting(true), 2400);
    } else if (isDeleting && displayText.length === 0) {
      timer = setTimeout(() => {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }, 200);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex, roles]);

  // Scroll tracking
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 26,
    mass: 0.35,
    restDelta: 0.001,
  });

  useEffect(() => {
    const unsubscribe = smoothProgress.on("change", (latest) => {
      setScrollProg(Math.max(0, Math.min(1, latest)));
    });
    return () => unsubscribe();
  }, [smoothProgress]);

  // Video auto-play on mount
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.play().catch(() => {});
  }, []);

  // Split dynamic role into first highlighted word and remaining words
  const words = displayText.split(" ");
  const firstWord = words[0] || "Full-Stack";
  const restWords = words.slice(1).join(" ") || "Developer";

  // Programming tech icon chips with brand animation keys
  const techStack = [
    { name: "React.js", icon: <FaReact size={15} />, brand: "react", color: "#38bdf8" },
    { name: "Flutter", icon: <SiFlutter size={14} />, brand: "flutter", color: "#60a5fa" },
    { name: "Laravel", icon: <SiLaravel size={14} />, brand: "laravel", color: "#f43f5e" },
    { name: "Node.js", icon: <FaNodeJs size={15} />, brand: "node", color: "#10b981" },
    { name: "Python", icon: <FaPython size={15} />, brand: "python", color: "#fbbf24" },
    { name: "PostgreSQL", icon: <SiPostgresql size={14} />, brand: "postgres", color: "#818cf8" },
    { name: "TypeScript", icon: <SiTypescript size={13} />, brand: "ts", color: "#38bdf8" },
    { name: "Tailwind", icon: <SiTailwindcss size={13} />, brand: "tailwind", color: "#06b6d4" },
  ];

  const jumpToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section ref={containerRef} className="hero-tt-outer" id="hero">
      <div className="hero-tt-sticky">
        {/* BACKGROUND VIDEO (Auto-plays smoothly, matches cinematic story video) */}
        <div className="hero-tt-video-container">
          <video
            ref={videoRef}
            src="/videos/borath-story.mp4"
            poster="/images/borath-studio.jpg"
            className="hero-tt-video"
            autoPlay
            playsInline
            muted
            loop
            preload="auto"
          />
          {/* Subtle Vignette to blend seamlessly into dark background */}
          <div className="hero-tt-vignette" />
        </div>

        {/* HERO CONTENT GRID */}
        <div className="hero-tt-content">
          {/* LEFT COLUMN: Role, Greeting, Name & Programming Icons */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="hero-tt-col hero-tt-col-left"
          >
            {/* Availability Badge */}
            <div className="hero-badge-available">
              <span className="pulse-dot-wrapper">
                <span className="pulse-dot-ping" />
                <span className="pulse-dot-solid" />
              </span>
              <span>{t("hero_available")}</span>
            </div>

            {/* Large Bold Programming Role (TikTok style) */}
            <div className="hero-tt-role-wrap">
              <h1 className="hero-tt-big-title">
                <span className="hero-tt-word-accent">{firstWord}</span>
                <span className="hero-tt-word-main">{restWords}</span>
              </h1>
              <div className="hero-tt-underline" />
            </div>

            {/* Name & Identity */}
            <div className="hero-tt-name-sub">
              <span className="hero-greeting">👋 {t("hero_greeting")}</span>
              <h2 className="hero-name-heading">
                SRUN <span className="text-gradient">Borath</span>
              </h2>
            </div>

            {/* Interactive Programming Tech Icon Pills with Base Ambient Animation */}
            <div className="hero-tech-icon-bar">
              {techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className={`hero-tech-icon-pill pill-${tech.brand}`}
                  style={{ animationDelay: `${idx * 0.28}s` }}
                >
                  <span className={`hero-tech-icon-glyph glyph-${tech.brand}`} style={{ color: tech.color }}>
                    {tech.icon}
                  </span>
                  <span>{tech.name}</span>
                </span>
              ))}
            </div>

            {/* Action Buttons Group */}
            <div className="hero-cta-group" style={{ marginTop: "0.5rem" }}>
              <Link to="/projects" className="btn-primary-gradient">
                <span>{t("hero_btn_projects")}</span>
                <Send size={15} />
              </Link>

              <Link to="/cv" className="btn-secondary-outline">
                <Download size={15} />
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

              <a
                href={profileData.contact.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-icon-square"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={18} />
              </a>

              <a
                href={profileData.contact.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-icon-square"
                aria-label="Telegram"
              >
                <FaTelegramPlane size={18} />
              </a>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Introduction, Live Dev Terminal & Bento Stats */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hero-tt-col hero-tt-col-right"
          >
            <div className="hero-tt-intro-tag">~ Introduction</div>

            <h3 className="hero-tt-intro-title">
              {language === "kh"
                ? "ខ្ញុំបង្កើតគេហទំព័រ REST APIs និងកម្មវិធីទូរស័ព្ទ"
                : "I build modern web platforms, REST APIs and mobile apps"}
            </h3>

            <p className="hero-tt-intro-body">
              {t("hero_bio")}
            </p>

            {/* LIVE DEV TERMINAL SIMULATOR */}
            <div className="hero-terminal-sim-box">
              <div className="hero-terminal-sim-header">
                <div className="hero-terminal-controls">
                  <span className="mac-dot red" />
                  <span className="mac-dot yellow" />
                  <span className="mac-dot green" />
                </div>
                <span className="hero-terminal-path">srun@workstation: ~/portfolio</span>
                <span className="hero-sound-visualizer">
                  <span className="sound-bar" />
                  <span className="sound-bar" />
                  <span className="sound-bar" />
                  <span className="sound-bar" />
                </span>
              </div>

              <div className="hero-terminal-sim-content">
                <div className="term-cmd-line">
                  <span className="term-prompt">$</span>
                  <span className="term-cmd">{terminalCommands[termLineIdx].cmd}</span>
                  <span className="term-cursor" />
                </div>

                <div className="term-out-line">
                  {terminalCommands[termLineIdx].isStatus ? (
                    <span className="term-status-badge">
                      <CheckCircle2 size={12} />
                      {terminalCommands[termLineIdx].out}
                    </span>
                  ) : (
                    <span>&gt; {terminalCommands[termLineIdx].out}</span>
                  )}
                </div>
              </div>
            </div>

            {/* MODERN BENTO STATS ROW */}
            <div className="hero-bento-stats-grid">
              <div className="hero-bento-stat-card">
                <div className="hero-bento-stat-val">
                  <GraduationCap size={15} style={{ color: "var(--accent-amber)" }} />
                  <span>Year 4 ICT</span>
                </div>
                <span className="hero-bento-stat-label">Univ. of Puthisastra</span>
              </div>

              <div className="hero-bento-stat-card">
                <div className="hero-bento-stat-val">
                  <Briefcase size={14} style={{ color: "var(--accent-sky-light)" }} />
                  <span>3+ Positions</span>
                </div>
                <span className="hero-bento-stat-label">Instructor & Roles</span>
              </div>

              <div className="hero-bento-stat-card">
                <div className="hero-bento-stat-val">
                  <FolderGit2 size={14} style={{ color: "var(--accent-emerald)" }} />
                  <span>5+ Built</span>
                </div>
                <span className="hero-bento-stat-label">Web & Mobile Apps</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* BOTTOM SCROLL PROMPT */}
        <div
          className="hero-tt-scroll-hint"
          onClick={jumpToAbout}
          style={{
            opacity: Math.max(0, 1 - scrollProg * 3),
          }}
        >
          <span>SCROLL</span>
          <div className="hero-tt-scroll-tick" />
        </div>
      </div>
    </section>
  );
}
