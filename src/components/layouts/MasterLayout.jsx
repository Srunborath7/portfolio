import { NavLink, Outlet } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { FaGithub, FaTelegramPlane } from "react-icons/fa";
import { Sun, Moon } from "lucide-react";
import logo from "../../assets/logo.jpg";
import { motion, AnimatePresence } from "framer-motion";
import {
  User,
  Briefcase,
  GraduationCap,
  FileText,
  FolderGit2,
  PhoneCall,
  Sparkles,
} from "lucide-react";
import { useApp } from "../../context/AppContext";
import { profileData } from "../../data/profileData";
import "../../styles/masterLayout.css";

function MasterLayout() {
  const { toggleTheme, language, setLanguage, t, isDark } = useApp();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef(null);

  // Scroll effect for navbar glass
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  // Prevent scroll when drawer open
  useEffect(() => {
    document.documentElement.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  const navItems = [
    { to: "/", label: t("nav_overview"), icon: <User size={17} /> },
    { to: "/projects", label: t("nav_projects"), icon: <FolderGit2 size={17} /> },
    { to: "/work-experience", label: t("nav_experience"), icon: <Briefcase size={17} /> },
    { to: "/skills", label: t("nav_skills"), icon: <Sparkles size={17} /> },
    { to: "/education", label: t("nav_education"), icon: <GraduationCap size={17} /> },
    { to: "/cv", label: t("nav_cv"), icon: <FileText size={17} /> },
    { to: "/contact", label: t("nav_contact"), icon: <PhoneCall size={17} /> },
  ];

  return (
    <div className="layout-wrapper">
      {/* Background ambient lighting */}
      <div className="ambient-glow-wrapper">
        <div className="ambient-glow ambient-glow-1" />
        <div className="ambient-glow ambient-glow-2" />
        <div className="ambient-glow ambient-glow-3" />
      </div>

      {/* HEADER NAVBAR */}
      <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
        <div className="app-container header-container">
          {/* BRAND LOGO */}
          <NavLink to="/" className="brand-link">
            <div className="brand-avatar-box">
              <div className="brand-avatar-ring">
                <img
                  src={logo}
                  alt="SRUN Borath Logo"
                  className="brand-avatar-img"
                />
              </div>
              <span className="status-indicator" />
            </div>

            <div className="brand-info">
              <div className="brand-name">
                SRUN <span>Borath</span>
              </div>
              <div className="brand-role">
                {language === "kh" ? "អ្នកអភិវឌ្ឍន៍ Full-Stack" : "Full-Stack & Mobile Dev"}
              </div>
            </div>
          </NavLink>

          {/* DESKTOP NAV */}
          <nav className="desktop-nav">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  `nav-item-link ${isActive ? "active" : ""}`
                }
              >
                {item.icon}
                <span>{item.label}</span>
              </NavLink>
            ))}
          </nav>

          {/* CONTROLS (THEME, LANGUAGE, MENU) */}
          <div className="header-controls">
            {/* Language Switcher Button */}
            <div className="lang-switcher">
              <button
                onClick={() => setLanguage("en")}
                className={`lang-btn ${language === "en" ? "active" : ""}`}
                title="English"
              >
                EN
              </button>
              <button
                onClick={() => setLanguage("kh")}
                className={`lang-btn ${language === "kh" ? "active" : ""}`}
                title="ភាសាខ្មែរ (Khmer)"
              >
                KH
              </button>
            </div>

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="icon-action-btn"
              aria-label="Toggle Theme"
              title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {isDark ? <Sun size={17} /> : <Moon size={17} />}
            </button>

            {/* MOBILE DRAWER TOGGLE */}
            <button
              className="mobile-nav-toggle"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <HiX /> : <HiMenu />}
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE DRAWER */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="mobile-drawer-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <div
              className="mobile-drawer-backdrop"
              onClick={() => setIsOpen(false)}
            />

            {/* Sidebar Drawer */}
            <motion.div
              ref={menuRef}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 250 }}
              className="mobile-drawer-content"
            >
              <div>
                <div className="mobile-drawer-header">
                  <div className="brand-link">
                    <img
                      src={logo}
                      alt="Logo"
                      className="brand-avatar-img"
                      style={{ width: "2.5rem", height: "2.5rem", borderRadius: "9999px" }}
                    />
                    <div>
                      <div className="brand-name">SRUN Borath</div>
                      <div className="brand-role" style={{ color: "var(--accent-amber)" }}>
                        {language === "kh" ? "និស្សិត & អ្នកសរសេរកូដ" : "ICT & Developer"}
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="mobile-drawer-close"
                  >
                    <HiX size={22} />
                  </button>
                </div>

                {/* Mobile Controls (Lang & Theme) */}
                <div className="mobile-controls-row">
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <span style={{ fontSize: "0.75rem", fontWeight: "600" }}>Lang:</span>
                    <button
                      onClick={() => setLanguage(language === "en" ? "kh" : "en")}
                      className="lang-btn active"
                    >
                      {language === "en" ? "🇰🇭 KH" : "🇺🇸 EN"}
                    </button>
                  </div>

                  <button
                    onClick={toggleTheme}
                    className="icon-action-btn"
                    style={{ fontSize: "0.75rem", fontWeight: "700", gap: "0.35rem", display: "inline-flex" }}
                  >
                    {isDark ? <Sun size={15} /> : <Moon size={15} />}
                    <span>{isDark ? "Light" : "Dark"}</span>
                  </button>
                </div>

                {/* Mobile Links */}
                <div className="mobile-nav-links">
                  {navItems.map((item) => (
                    <NavLink
                      key={item.to}
                      to={item.to}
                      end={item.to === "/"}
                      onClick={() => setIsOpen(false)}
                      className={({ isActive }) =>
                        `mobile-nav-link ${isActive ? "active" : ""}`
                      }
                    >
                      {item.icon}
                      <span>{item.label}</span>
                    </NavLink>
                  ))}
                </div>
              </div>

              {/* Mobile Drawer Footer */}
              <div className="mobile-drawer-footer">
                <a
                  href={profileData.contact.telegramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mobile-telegram-btn"
                >
                  <FaTelegramPlane size={16} />
                  <span>{language === "kh" ? "ផ្ញើសារតាម Telegram" : "Message on Telegram"}</span>
                </a>

                <div className="mobile-social-row">
                  <a
                    href={profileData.contact.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mobile-social-icon"
                    aria-label="GitHub"
                  >
                    <FaGithub size={20} />
                  </a>
                  <a
                    href={`mailto:${profileData.contact.email}`}
                    className="mobile-social-icon"
                    aria-label="Email"
                  >
                    <PhoneCall size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MAIN CONTENT */}
      <main className="main-content">
        <Outlet />
      </main>

      {/* FOOTER */}
      <footer className="site-footer">
        <div className="app-container footer-container">
          <div>
            <div className="footer-brand-title">
              <span style={{ color: "var(--accent-amber)" }}>⚡</span> {profileData.name[language] || profileData.name.en}
            </div>
            <p className="footer-tagline">
              {t("footer_tagline")}
            </p>
          </div>

          <div className="footer-contacts-list">
            <a href={`tel:${profileData.contact.phoneClean}`} className="footer-contact-link">
              📞 {profileData.contact.phone}
            </a>
            <a href={`mailto:${profileData.contact.email}`} className="footer-contact-link">
              ✉️ {profileData.contact.email}
            </a>
            <span>📍 {profileData.contact.location[language] || profileData.contact.location.en}</span>
          </div>

          <div className="footer-copyright">
            © {new Date().getFullYear()} {profileData.name.en}. {t("footer_rights")}
          </div>
        </div>
      </footer>
    </div>
  );
}

export default MasterLayout;