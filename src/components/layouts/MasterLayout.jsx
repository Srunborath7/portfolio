import { NavLink, Outlet, useLocation } from "react-router-dom";
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

function MasterLayout() {
  const { theme, toggleTheme, language, setLanguage, t, isDark } = useApp();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef(null);
  const location = useLocation();

  // Scroll effect for navbar glass
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

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
    <div className={`min-h-screen flex flex-col transition-colors duration-300 relative ${
      isDark ? "bg-slate-950 text-slate-100 selection:bg-amber-400 selection:text-slate-950" : "bg-slate-50 text-slate-900 selection:bg-amber-400 selection:text-slate-900"
    }`}>
      {/* Background ambient lighting */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className={`absolute top-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full blur-[140px] ${
          isDark ? "bg-indigo-600/10" : "bg-indigo-400/15"
        }`} />
        <div className={`absolute top-[30%] right-[-10%] w-[500px] h-[500px] rounded-full blur-[140px] ${
          isDark ? "bg-rose-500/10" : "bg-rose-400/15"
        }`} />
        <div className={`absolute bottom-[-10%] left-[20%] w-[700px] h-[700px] rounded-full blur-[160px] ${
          isDark ? "bg-sky-600/10" : "bg-sky-400/15"
        }`} />
      </div>

      {/* HEADER NAVBAR (FIXED TOP 0) */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? isDark
              ? "bg-slate-950/90 backdrop-blur-xl border-b border-white/10 shadow-2xl py-3"
              : "bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-md py-3"
            : isDark
              ? "bg-slate-950/80 backdrop-blur-lg border-b border-white/5 py-4"
              : "bg-white/85 backdrop-blur-lg border-b border-slate-200/80 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex justify-between items-center gap-1.5 sm:gap-2">
          {/* BRAND LOGO */}
          <NavLink
            to="/"
            className="flex items-center gap-2 sm:gap-3 group focus:outline-none shrink-0"
          >
            <div className="relative shrink-0">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full p-[2px] bg-gradient-to-tr from-amber-400 via-rose-400 to-sky-400 group-hover:scale-105 transition-transform">
                <img
                  src={logo}
                  alt="SRUN Borath Logo"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-400 border-2 border-slate-950 rounded-full" />
            </div>

            <div className="min-w-0">
              <div className={`font-bold text-sm sm:text-lg leading-tight tracking-tight flex items-center gap-1 sm:gap-1.5 ${
                isDark ? "text-white" : "text-slate-950"
              }`}>
                SRUN <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-rose-500">Borath</span>
              </div>
              <div className={`text-[10px] sm:text-xs font-medium tracking-wide truncate max-w-[130px] sm:max-w-none ${
                isDark ? "text-slate-400" : "text-slate-600"
              }`}>
                {language === "kh" ? "អ្នកអភិវឌ្ឍន៍ Full-Stack" : "Full-Stack & Mobile Dev"}
              </div>
            </div>
          </NavLink>

          {/* DESKTOP NAV */}
          <nav className={`hidden xl:flex items-center gap-1 p-1 rounded-full border backdrop-blur-md shadow-xs ${
            isDark ? "bg-slate-900/90 border-white/10" : "bg-slate-100/90 border-slate-200"
          }`}>
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  `relative px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 flex items-center gap-1.5 ${
                    isActive
                      ? "text-slate-950 bg-gradient-to-r from-amber-400 to-rose-400 font-bold shadow-md shadow-amber-500/20"
                      : isDark
                        ? "text-slate-300 hover:text-white hover:bg-white/5"
                        : "text-slate-700 hover:text-slate-950 hover:bg-slate-200/60"
                  }`
                }
              >
                {item.icon}
                <span>{item.label}</span>
              </NavLink>
            ))}
          </nav>

          {/* CONTROLS (THEME, LANGUAGE, MENU) */}
          <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
            {/* Language Switcher Button */}
            <div className={`flex items-center p-0.5 sm:p-1 rounded-xl border shadow-xs ${
              isDark ? "bg-slate-900 border-white/10" : "bg-slate-100 border-slate-200"
            }`}>
              <button
                onClick={() => setLanguage("en")}
                className={`px-2 sm:px-2.5 py-0.5 sm:py-1 text-[11px] sm:text-xs font-bold rounded-lg transition-all cursor-pointer ${
                  language === "en"
                    ? "bg-amber-400 text-slate-950 shadow-xs"
                    : isDark
                      ? "text-slate-400 hover:text-white"
                      : "text-slate-600 hover:text-slate-900"
                }`}
                title="English"
              >
                EN
              </button>
              <button
                onClick={() => setLanguage("kh")}
                className={`px-2 sm:px-2.5 py-0.5 sm:py-1 text-[11px] sm:text-xs font-bold rounded-lg transition-all cursor-pointer ${
                  language === "kh"
                    ? "bg-amber-400 text-slate-950 shadow-xs"
                    : isDark
                      ? "text-slate-400 hover:text-white"
                      : "text-slate-600 hover:text-slate-900"
                }`}
                title="ភាសាខ្មែរ (Khmer)"
              >
                KH
              </button>
            </div>

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className={`p-1.5 sm:p-2.5 rounded-xl border transition-all hover:scale-105 active:scale-95 cursor-pointer ${
                isDark
                  ? "bg-slate-900 hover:bg-slate-800 border-white/10 text-amber-300 hover:text-amber-200"
                  : "bg-white hover:bg-slate-100 border-slate-200 text-amber-600 shadow-xs"
              }`}
              aria-label="Toggle Theme"
              title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {isDark ? <Sun size={17} /> : <Moon size={17} />}
            </button>

            {/* MOBILE DRAWER TOGGLE */}
            <button
              className={`xl:hidden p-1.5 sm:p-2 rounded-xl border transition text-xl sm:text-2xl focus:outline-none cursor-pointer ${
                isDark
                  ? "bg-slate-900 hover:bg-slate-800 border-white/10 text-white"
                  : "bg-white hover:bg-slate-100 border-slate-200 text-slate-900 shadow-xs"
              }`}
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
            className="xl:hidden fixed inset-0 z-[100]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <div
              className={`absolute inset-0 backdrop-blur-md ${
                isDark ? "bg-slate-950/80" : "bg-slate-900/50"
              }`}
              onClick={() => setIsOpen(false)}
            />

            {/* Sidebar Drawer */}
            <motion.div
              ref={menuRef}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 250 }}
              className={`absolute right-0 top-0 h-full w-4/5 max-w-sm border-l p-6 flex flex-col justify-between overflow-y-auto shadow-2xl ${
                isDark
                  ? "bg-slate-900 border-white/10 text-white"
                  : "bg-white border-slate-200 text-slate-900"
              }`}
            >
              <div>
                <div className={`flex justify-between items-center pb-6 border-b ${
                  isDark ? "border-white/10" : "border-slate-200"
                }`}>
                  <div className="flex items-center gap-3">
                    <img
                      src={logo}
                      alt="Logo"
                      className="w-10 h-10 rounded-full border border-amber-400/50"
                    />
                    <div>
                      <div className="font-bold">SRUN Borath</div>
                      <div className="text-xs text-amber-500 dark:text-amber-300">
                        {language === "kh" ? "និស្សិត & អ្នកសរសេរកូដ" : "ICT & Developer"}
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className={`p-1.5 rounded-lg ${
                      isDark ? "bg-white/5 text-slate-400 hover:text-white" : "bg-slate-100 text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    <HiX size={22} />
                  </button>
                </div>

                {/* Mobile Controls (Lang & Theme) */}
                <div className="flex items-center justify-between gap-3 my-5 p-3 rounded-2xl bg-slate-100 dark:bg-slate-800/60">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold">Language:</span>
                    <button
                      onClick={() => setLanguage(language === "en" ? "kh" : "en")}
                      className="px-3 py-1 rounded-xl text-xs font-bold bg-amber-400 text-slate-950"
                    >
                      {language === "en" ? "🇰🇭 KH" : "🇺🇸 EN"}
                    </button>
                  </div>

                  <button
                    onClick={toggleTheme}
                    className="p-2 rounded-xl bg-white dark:bg-slate-700 shadow-sm flex items-center gap-1.5 text-xs font-bold"
                  >
                    {isDark ? <Sun size={15} className="text-amber-400" /> : <Moon size={15} className="text-amber-600" />}
                    <span>{isDark ? "Light" : "Dark"}</span>
                  </button>
                </div>

                {/* Mobile Links */}
                <div className="flex flex-col gap-1.5">
                  {navItems.map((item) => (
                    <NavLink
                      key={item.to}
                      to={item.to}
                      end={item.to === "/"}
                      onClick={() => setIsOpen(false)}
                      className={({ isActive }) =>
                        `flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition ${
                          isActive
                            ? "bg-gradient-to-r from-amber-400/20 to-rose-400/20 text-amber-600 dark:text-amber-300 border border-amber-400/30 font-bold"
                            : isDark
                              ? "text-slate-300 hover:text-white hover:bg-white/5"
                              : "text-slate-700 hover:text-slate-900 hover:bg-slate-100"
                        }`
                      }
                    >
                      {item.icon}
                      <span>{item.label}</span>
                    </NavLink>
                  ))}
                </div>
              </div>

              {/* Mobile Drawer Footer */}
              <div className={`pt-6 border-t space-y-4 ${
                isDark ? "border-white/10" : "border-slate-200"
              }`}>
                <a
                  href={profileData.contact.telegramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold bg-gradient-to-r from-amber-400 to-rose-400 text-slate-950 shadow-lg"
                >
                  <FaTelegramPlane size={16} />
                  <span>{language === "kh" ? "ផ្ញើសារតាម Telegram" : "Message on Telegram"}</span>
                </a>

                <div className="flex justify-center gap-4 text-slate-500">
                  <a
                    href={profileData.contact.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-slate-100 dark:bg-white/5 hover:text-slate-900 dark:hover:text-white transition"
                    aria-label="GitHub"
                  >
                    <FaGithub size={20} />
                  </a>
                  <a
                    href={`mailto:${profileData.contact.email}`}
                    className="p-2.5 rounded-xl bg-slate-100 dark:bg-white/5 hover:text-slate-900 dark:hover:text-white transition"
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
      <main className="flex-1 relative z-10 pt-20 sm:pt-24">
        <Outlet />
      </main>

      {/* FOOTER */}
      <footer className={`relative z-10 border-t py-10 px-4 sm:px-6 lg:px-8 transition-colors ${
        isDark
          ? "border-white/10 bg-slate-950/80 backdrop-blur-xl text-slate-400"
          : "border-slate-200 bg-white/80 backdrop-blur-xl text-slate-600"
      }`}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <div className={`flex items-center justify-center md:justify-start gap-2 font-bold text-lg ${
              isDark ? "text-white" : "text-slate-900"
            }`}>
              <span className="text-amber-400">⚡</span> {profileData.name[language] || profileData.name.en}
            </div>
            <p className="text-xs mt-1 max-w-sm">
              {t("footer_tagline")}
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-xs font-mono">
            <a href={`tel:${profileData.contact.phoneClean}`} className="hover:text-amber-500 transition">
              📞 {profileData.contact.phone}
            </a>
            <a href={`mailto:${profileData.contact.email}`} className="hover:text-amber-500 transition">
              ✉️ {profileData.contact.email}
            </a>
            <span>📍 {profileData.contact.location[language] || profileData.contact.location.en}</span>
          </div>

          <div className="text-xs">
            © {new Date().getFullYear()} {profileData.name.en}. {t("footer_rights")}
          </div>
        </div>
      </footer>
    </div>
  );
}

export default MasterLayout;