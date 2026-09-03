import React, { useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Download,
  Eye,
  FileText,
  Sparkles,
  Send,
  Briefcase,
  GraduationCap,
  Layers,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  X,
  Maximize2,
} from "lucide-react";
import CVImage from "../../assets/cv.png";
import { useApp } from "../../context/AppContext";
import { profileData } from "../../data/profileData";

export default function CVPage() {
  const { t, language, isDark } = useApp();
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/cv.pdf";
    link.download = "SRUN_Borath_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 relative min-h-screen">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[350px] sm:w-[650px] h-[350px] sm:h-[650px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-6 sm:space-y-8 relative z-10">
        {/* Page Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-600 dark:text-amber-300 text-xs font-bold uppercase tracking-wider">
            <Sparkles size={14} /> {t("cv_badge")}
          </div>
          <h1 className={`text-3xl sm:text-5xl font-extrabold tracking-tight ${
            isDark ? "text-white" : "text-slate-950"
          }`}>
            {t("cv_title_pre")}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-rose-500 to-sky-600 dark:from-amber-400 dark:via-rose-400 dark:to-sky-400">
              {t("cv_title_highlight")}
            </span>
          </h1>
          <p className={`text-xs sm:text-sm font-medium ${
            isDark ? "text-slate-400" : "text-slate-700"
          }`}>
            {t("cv_sub")}
          </p>

          {/* Quick Action Bar */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-2.5 sm:gap-3 pt-1">
            <button
              onClick={handleDownload}
              className="w-full sm:w-auto px-5 sm:px-6 py-3 rounded-2xl bg-gradient-to-r from-amber-400 via-rose-400 to-pink-500 text-slate-950 font-bold text-xs sm:text-sm shadow-xl shadow-amber-500/20 hover:shadow-amber-500/40 hover:scale-105 active:scale-95 transition flex items-center justify-center gap-2 cursor-pointer"
            >
              <Download size={17} />
              <span>{language === "kh" ? "ទាញយក CV (PDF)" : "Download PDF Resume"}</span>
            </button>

            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={`w-full sm:w-auto px-5 py-3 rounded-2xl border backdrop-blur-md text-xs sm:text-sm font-bold transition hover:scale-105 flex items-center justify-center gap-2 cursor-pointer ${
                isDark ? "bg-slate-800 hover:bg-slate-700 border-slate-700 text-white" : "bg-white hover:bg-slate-100 border-slate-300 text-slate-900 shadow-xs"
              }`}
            >
              <ExternalLink size={16} />
              <span>{language === "kh" ? "បើកមើលឯកសារ PDF" : "Open PDF in New Tab"}</span>
            </a>

            <Link
              to="/contact"
              className={`w-full sm:w-auto px-5 py-3 rounded-2xl border backdrop-blur-md text-xs sm:text-sm font-bold transition hover:scale-105 flex items-center justify-center gap-2 cursor-pointer ${
                isDark ? "bg-slate-800 hover:bg-slate-700 border-slate-700 text-white" : "bg-white hover:bg-slate-100 border-slate-300 text-slate-900 shadow-xs"
              }`}
            >
              <Send size={16} />
              <span>{t("cv_inquire")}</span>
            </Link>
          </div>
        </div>

        {/* Content Layout: Preview Card & Quick Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* Left Column: High-Res Document Viewer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8 flex flex-col"
          >
            <div className={`w-full rounded-2xl sm:rounded-3xl border p-3 sm:p-5 backdrop-blur-2xl shadow-xl transition space-y-3 sm:space-y-3.5 ${
              isDark ? "bg-slate-900/90 border-slate-800" : "bg-white border-slate-200 shadow-xl"
            }`}>
              {/* Document Toolbar Header - Fully Responsive on Mobile */}
              <div className={`flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pb-3 border-b ${
                isDark ? "border-slate-800" : "border-slate-200"
              }`}>
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className={`p-2 rounded-xl border shrink-0 ${
                    isDark ? "bg-slate-950 border-slate-800 text-amber-400" : "bg-amber-50 border-amber-200 text-amber-700"
                  }`}>
                    <FileText size={17} />
                  </div>
                  <div className="min-w-0">
                    <h3 className={`text-xs sm:text-sm font-bold truncate ${isDark ? "text-white" : "text-slate-950"}`}>
                      SRUN_Borath_Resume.pdf
                    </h3>
                    <p className="text-[10px] sm:text-[11px] text-slate-500 font-mono truncate">Official PDF • High Resolution</p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 sm:gap-2 self-stretch sm:self-auto justify-end shrink-0">
                  <a
                    href="/cv.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`px-2.5 py-1.5 rounded-xl border text-xs font-semibold flex items-center gap-1 transition cursor-pointer ${
                      isDark ? "bg-slate-800 hover:bg-slate-700 border-slate-700 text-slate-200" : "bg-slate-100 hover:bg-slate-200 border-slate-300 text-slate-800"
                    }`}
                    title="Open PDF in New Window"
                  >
                    <ExternalLink size={13} />
                    <span>PDF</span>
                  </a>
                  <button
                    onClick={() => setIsFullscreen(true)}
                    className={`px-2.5 py-1.5 rounded-xl border text-xs font-semibold flex items-center gap-1 transition cursor-pointer ${
                      isDark ? "bg-slate-800 hover:bg-slate-700 border-slate-700 text-slate-200" : "bg-slate-100 hover:bg-slate-200 border-slate-300 text-slate-800"
                    }`}
                    title="Open Fullscreen"
                  >
                    <Eye size={13} />
                    <span>{language === "kh" ? "ពង្រីក" : "Zoom"}</span>
                  </button>
                  <button
                    onClick={handleDownload}
                    className="px-3 py-1.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs font-bold shadow-sm transition flex items-center gap-1 cursor-pointer shrink-0"
                  >
                    <Download size={13} />
                    <span>{language === "kh" ? "ទាញយក" : "Download"}</span>
                  </button>
                </div>
              </div>

              {/* Clean Document View - Nothing blocks the text */}
              <div
                onClick={() => setIsFullscreen(true)}
                className={`relative rounded-2xl overflow-hidden border cursor-zoom-in group ${
                  isDark ? "border-slate-800 bg-slate-950" : "border-slate-300 bg-slate-100"
                }`}
              >
                <img
                  src={CVImage}
                  alt="SRUN Borath Resume"
                  className="w-full h-auto object-contain mx-auto block group-hover:scale-[1.008] transition-transform duration-300"
                />
              </div>

              {/* Document Toolbar Footer */}
              <div className={`flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-3 border-t text-xs ${
                isDark ? "border-slate-800 text-slate-400" : "border-slate-200 text-slate-600"
              }`}>
                <span>Updated for 2026 Academic & Career Year</span>
                <button
                  onClick={handleDownload}
                  className="inline-flex items-center gap-1.5 font-bold text-amber-600 dark:text-amber-300 hover:underline cursor-pointer"
                >
                  <Download size={14} />
                  <span>Download original high-res copy</span>
                </button>
              </div>
            </div>
          </motion.div>

          {/* Right Column: CV Fast Facts */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-4 space-y-5"
          >
            {/* Quick Summary Card */}
            <div className={`p-6 sm:p-7 rounded-3xl border backdrop-blur-xl shadow-md space-y-4 ${
              isDark ? "bg-slate-900/90 border-slate-800" : "bg-white border-slate-200 shadow-xl"
            }`}>
              <h3 className={`text-base sm:text-lg font-bold flex items-center gap-2 ${
                isDark ? "text-white" : "text-slate-950"
              }`}>
                <FileText className="text-amber-600 dark:text-amber-400" size={18} />
                <span>{language === "kh" ? "សង្ខេបប្រវត្តិរូប" : "Executive Summary"}</span>
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start gap-3.5 text-slate-700 dark:text-slate-300">
                  <GraduationCap className="text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" size={18} />
                  <div>
                    <p className={`font-bold ${isDark ? "text-white" : "text-slate-950"}`}>
                      {language === "kh" ? "កម្រិតសិក្សា" : "Education"}
                    </p>
                    <p className="text-slate-600 dark:text-slate-400 text-xs font-medium mt-0.5">University of Puthisastra (4th Year)</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 text-slate-700 dark:text-slate-300">
                  <Briefcase className="text-sky-600 dark:text-sky-400 shrink-0 mt-0.5" size={18} />
                  <div>
                    <p className={`font-bold ${isDark ? "text-white" : "text-slate-950"}`}>
                      {language === "kh" ? "តួនាទីបច្ចុប្បន្ន" : "Current Experience"}
                    </p>
                    <p className="text-slate-600 dark:text-slate-400 text-xs font-medium mt-0.5">Instructor @ ICT Center</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 text-slate-700 dark:text-slate-300">
                  <Layers className="text-rose-600 dark:text-rose-400 shrink-0 mt-0.5" size={18} />
                  <div>
                    <p className={`font-bold ${isDark ? "text-white" : "text-slate-950"}`}>
                      {language === "kh" ? "ជំនាញស្នូល" : "Core Competencies"}
                    </p>
                    <p className="text-slate-600 dark:text-slate-400 text-xs font-medium mt-0.5">React, Laravel, Node.js, Flutter, Python</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Contact Card */}
            <div className={`p-6 sm:p-7 rounded-3xl border backdrop-blur-xl shadow-md space-y-4 ${
              isDark ? "bg-slate-900/90 border-slate-800" : "bg-white border-slate-200 shadow-xl"
            }`}>
              <h3 className={`text-base font-bold ${isDark ? "text-white" : "text-slate-950"}`}>
                {language === "kh" ? "ទំនាក់ទំនងផ្ទាល់" : "Direct Contacts"}
              </h3>

              <div className="space-y-3.5 text-xs text-slate-700 dark:text-slate-300">
                <div className="flex items-center gap-3">
                  <Phone size={16} className="text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span className="font-mono font-bold text-slate-900 dark:text-slate-100">{profileData.contact.phoneDisplay}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={16} className="text-sky-600 dark:text-sky-400 shrink-0" />
                  <span className="truncate font-semibold text-slate-900 dark:text-slate-100">{profileData.contact.email}</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin size={16} className="text-rose-600 dark:text-rose-400 shrink-0" />
                  <span className="font-medium text-slate-700 dark:text-slate-300">{profileData.contact.location[language] || profileData.contact.location.en}</span>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
                <a
                  href={profileData.contact.telegramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white text-xs font-bold shadow-md shadow-sky-500/20 flex items-center justify-center gap-2 transition hover:scale-[1.02] cursor-pointer"
                >
                  <Send size={15} />
                  <span>Telegram {profileData.contact.telegramUsername}</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Fullscreen High-Res Modal (Portaled directly to document.body with z-[99999]) */}
      {typeof document !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {isFullscreen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[99999] bg-black/95 backdrop-blur-xl flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
                onClick={() => setIsFullscreen(false)}
              >
                <div
                  className="relative max-w-4xl max-h-[92vh] w-full flex flex-col rounded-3xl bg-slate-900 border border-white/20 shadow-2xl overflow-hidden my-auto"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Modal Top Bar - Above everything on screen */}
                  <div className="flex items-center justify-between p-3.5 sm:p-4 bg-slate-950/95 border-b border-white/10 shrink-0">
                    <div className="flex items-center gap-2">
                      <FileText className="text-amber-400" size={18} />
                      <span className="text-xs sm:text-sm font-bold text-white tracking-wide">
                        SRUN Borath - Full Resume View
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <a
                        href="/cv.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold flex items-center gap-1.5 transition cursor-pointer"
                      >
                        <ExternalLink size={14} />
                        <span className="hidden sm:inline">Open PDF</span>
                      </a>
                      <button
                        onClick={handleDownload}
                        className="px-3.5 py-1.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs flex items-center gap-1.5 shadow-md transition cursor-pointer"
                      >
                        <Download size={14} />
                        <span>Download PDF</span>
                      </button>
                      <button
                        onClick={() => setIsFullscreen(false)}
                        className="p-1.5 sm:p-2 rounded-xl bg-white/10 hover:bg-rose-500/80 text-white transition cursor-pointer flex items-center justify-center ml-1"
                        title="Close Window"
                        aria-label="Close"
                      >
                        <X size={18} />
                      </button>
                    </div>
                  </div>

                  {/* Scrollable Image Area */}
                  <div className="overflow-y-auto p-2 sm:p-4 max-h-[calc(92vh-65px)] bg-slate-950 flex justify-center">
                    <img
                      src={CVImage}
                      alt="SRUN Borath Resume Full"
                      className="w-full h-auto rounded-xl object-contain max-w-3xl"
                    />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </section>
  );
}
