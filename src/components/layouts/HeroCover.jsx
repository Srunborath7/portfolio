import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Github,
  Send,
  Download,
  Terminal,
  Layers,
  Smartphone,
  Server,
  Code2,
  CheckCircle2,
} from "lucide-react";
import { Link } from "react-router-dom";
import CoverImage from "../../assets/cover.png";
import { useApp } from "../../context/AppContext";
import { profileData } from "../../data/profileData";

export default function HeroCover() {
  const { t, language, isDark } = useApp();

  const titles = profileData.roles[language] || profileData.roles.en;

  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    setTitleIndex(0);
    setDisplayText("");
    setIsDeleting(false);
  }, [language]);

  useEffect(() => {
    const currentTitle = titles[titleIndex] || titles[0];
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
      setIsDeleting(false);
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, titleIndex, titles]);

  const floatingBadges = [
    { icon: <Code2 size={15} className="text-cyan-400" />, text: "React.js" },
    { icon: <Smartphone size={15} className="text-sky-400" />, text: "Flutter" },
    { icon: <Server size={15} className="text-rose-400" />, text: "Laravel" },
    { icon: <Terminal size={15} className="text-emerald-400" />, text: "Node.js" },
    { icon: <Layers size={15} className="text-amber-400" />, text: "Python" },
  ];

  return (
    <section className="relative min-h-[88vh] flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 py-12 sm:py-16 bg-grid-pattern">
      {/* Glow circles */}
      <div className={`absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] rounded-full blur-[120px] pointer-events-none ${
        isDark ? "bg-gradient-to-tr from-amber-500/10 via-indigo-600/15 to-rose-500/10" : "bg-gradient-to-tr from-amber-300/20 via-sky-200/30 to-rose-200/20"
      }`} />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center relative z-10">
        {/* LEFT COLUMN - TEXT & CTAS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7 space-y-6 text-center lg:text-left"
        >
          {/* Status Badge */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
            <div className={`inline-flex items-center gap-2.5 px-4 py-2 rounded-full border backdrop-blur-md text-xs sm:text-sm font-semibold ${
              isDark ? "bg-slate-900/90 border-slate-800 text-slate-200" : "bg-white border-slate-200 text-slate-800 shadow-xs"
            }`}>
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>{t("hero_available")}</span>
            </div>
          </div>

          {/* Heading */}
          <div className="space-y-2">
            <div className="flex items-center justify-center lg:justify-start gap-2">
              <p className="text-sm sm:text-base font-bold font-mono tracking-wide text-amber-600 dark:text-amber-400">
                {t("hero_greeting")}
              </p>
              <span className="text-base animate-bounce">👋</span>
            </div>

            <h1 className={`text-4xl sm:text-6xl font-black tracking-tight leading-tight ${
              isDark ? "text-white" : "text-slate-950"
            }`}>
              SRUN{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-rose-500 to-sky-600 dark:from-amber-400 dark:via-rose-400 dark:to-sky-400">
                Borath
              </span>
            </h1>

            {/* Dynamic Typing Title */}
            <div className="min-h-10 sm:min-h-12 flex items-center justify-center lg:justify-start gap-2.5">
              <span className="text-amber-500 font-mono text-xl sm:text-2xl font-bold">{">"}</span>
              <span className={`text-lg sm:text-2xl lg:text-3xl font-extrabold tracking-tight ${
                isDark ? "text-slate-100" : "text-slate-900"
              }`}>
                {displayText}
              </span>
              <span className="w-1.5 h-6 sm:h-8 bg-amber-400 animate-pulse inline-block rounded-xs" />
            </div>
          </div>

          {/* Bio text */}
          <p className={`text-sm sm:text-base leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal ${
            isDark ? "text-slate-300" : "text-slate-700"
          }`}>
            {t("hero_bio")}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
            <Link
              to="/projects"
              className="px-5 sm:px-6 py-3 sm:py-3.5 rounded-2xl bg-gradient-to-r from-amber-400 via-rose-400 to-pink-500 text-slate-950 font-bold text-xs sm:text-sm shadow-xl shadow-amber-500/20 hover:shadow-amber-500/40 hover:scale-[1.03] active:scale-[0.98] transition flex items-center gap-2 cursor-pointer"
            >
              <span>{t("hero_btn_projects")}</span>
              <Code2 size={17} />
            </Link>

            <Link
              to="/cv"
              className={`px-5 sm:px-6 py-3 sm:py-3.5 rounded-2xl border backdrop-blur-md font-bold text-xs sm:text-sm hover:scale-[1.03] active:scale-[0.98] transition flex items-center gap-2 cursor-pointer ${
                isDark ? "bg-slate-800 hover:bg-slate-700 border-slate-700 text-white" : "bg-white hover:bg-slate-100 border-slate-300 text-slate-900 shadow-xs"
              }`}
            >
              <Download size={17} />
              <span>{t("hero_btn_cv")}</span>
            </Link>

            <a
              href={profileData.contact.telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 sm:p-3.5 rounded-2xl border transition hover:scale-105 cursor-pointer ${
                isDark ? "bg-slate-800 hover:bg-slate-700 border-slate-700 text-sky-400" : "bg-white hover:bg-slate-100 border-slate-300 text-sky-600 shadow-xs"
              }`}
              aria-label="Telegram"
            >
              <Send size={18} />
            </a>

            <a
              href={profileData.contact.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 sm:p-3.5 rounded-2xl border transition hover:scale-105 cursor-pointer ${
                isDark ? "bg-slate-800 hover:bg-slate-700 border-slate-700 text-white" : "bg-white hover:bg-slate-100 border-slate-300 text-slate-900 shadow-xs"
              }`}
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
          </div>

          {/* Floating Tech Chips */}
          <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-2">
            <span className="text-[11px] font-mono font-bold text-slate-500 dark:text-slate-400 mr-1">STACK:</span>
            {floatingBadges.map((badge, idx) => (
              <span
                key={idx}
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-semibold border ${
                  isDark ? "bg-slate-900 border-slate-800 text-slate-200" : "bg-white border-slate-200 text-slate-800 shadow-xs"
                }`}
              >
                {badge.icon}
                {badge.text}
              </span>
            ))}
          </div>
        </motion.div>

        {/* RIGHT COLUMN - VISUAL CARD / AVATAR */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 flex justify-center"
        >
          <div className="relative w-full max-w-xs sm:max-w-sm">
            {/* Elegant Ambient Glow Aura */}
            <div className={`absolute -inset-2 rounded-3xl blur-2xl transition duration-500 ${
              isDark 
                ? "bg-gradient-to-tr from-amber-500/20 via-sky-500/15 to-indigo-500/20 opacity-70" 
                : "bg-gradient-to-tr from-amber-400/20 via-sky-400/20 to-rose-400/15 opacity-60"
            }`} />

            {/* Glass Container */}
            <div className={`relative rounded-3xl border p-5 sm:p-6 backdrop-blur-2xl shadow-2xl space-y-5 ${
              isDark ? "bg-slate-900/95 border-slate-800" : "bg-white border-slate-200 shadow-2xl"
            }`}>
              {/* Photo Box */}
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 group">
                <img
                  src={CoverImage}
                  alt="SRUN Borath"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60" />
                
                {/* Floating Tag */}
                <div className="absolute bottom-3 left-3 right-3 p-2.5 sm:p-3 rounded-xl bg-slate-950/80 backdrop-blur-md border border-white/10 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span className="font-semibold text-white">UP Discovery Festival</span>
                  </div>
                  <span className="text-amber-300 font-mono">2022-2024</span>
                </div>
              </div>

              {/* Quick Profile Summary */}
              <div className="space-y-3">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className={`font-bold text-base sm:text-lg ${isDark ? "text-white" : "text-slate-950"}`}>
                      SRUN Borath
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">{t("hero_student_tag")}</p>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-amber-400/15 border border-amber-400/30 text-amber-600 dark:text-amber-300 text-xs font-bold">
                    {language === "kh" ? "គ្រូបង្រៀន" : "Instructor"}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className={`p-2.5 rounded-xl border flex items-center gap-2 font-medium ${
                    isDark ? "bg-slate-950 border-slate-800 text-slate-300" : "bg-slate-50 border-slate-200 text-slate-800"
                  }`}>
                    <CheckCircle2 size={15} className="text-emerald-500 shrink-0" />
                    <span>{t("hero_clean_code")}</span>
                  </div>
                  <div className={`p-2.5 rounded-xl border flex items-center gap-2 font-medium ${
                    isDark ? "bg-slate-950 border-slate-800 text-slate-300" : "bg-slate-50 border-slate-200 text-slate-800"
                  }`}>
                    <CheckCircle2 size={15} className="text-sky-500 shrink-0" />
                    <span>{t("hero_fast_learner")}</span>
                  </div>
                  <div className={`p-2.5 rounded-xl border flex items-center gap-2 font-medium ${
                    isDark ? "bg-slate-950 border-slate-800 text-slate-300" : "bg-slate-50 border-slate-200 text-slate-800"
                  }`}>
                    <CheckCircle2 size={15} className="text-amber-500 shrink-0" />
                    <span>{t("hero_team_player")}</span>
                  </div>
                  <div className={`p-2.5 rounded-xl border flex items-center gap-2 font-medium ${
                    isDark ? "bg-slate-950 border-slate-800 text-slate-300" : "bg-slate-50 border-slate-200 text-slate-800"
                  }`}>
                    <CheckCircle2 size={15} className="text-rose-500 shrink-0" />
                    <span>{t("hero_honest")}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


