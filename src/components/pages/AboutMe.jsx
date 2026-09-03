import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Cover from "../../assets/cover.png";
import {
  GraduationCap,
  Sparkles,
  MapPin,
  Mail,
  Phone,
  CheckCircle,
  FileText,
} from "lucide-react";
import { useApp } from "../../context/AppContext";
import { profileData } from "../../data/profileData";

export default function AboutMe() {
  const { t, language, isDark } = useApp();

  const stats = [
    { label: language === "kh" ? "កម្រិតសិក្សា" : "Academic Standing", value: t("stat_year"), sub: t("stat_year_sub") },
    { label: language === "kh" ? "បទពិសោធន៍" : "Teaching & Roles", value: t("stat_roles"), sub: t("stat_roles_sub") },
    { label: language === "kh" ? "គម្រោង" : "Core Projects", value: t("stat_projects"), sub: t("stat_projects_sub") },
    { label: language === "kh" ? "បច្ចេកវិទ្យា" : "Tech Stack", value: t("stat_tools"), sub: t("stat_tools_sub") },
  ];

  const highlightsEn = [
    "Experienced in Full-Stack Web Development (React, Laravel, Node.js, Spring Boot)",
    "Cross-Platform Mobile App Development with Flutter & Kotlin",
    "Active Instructor at ICT Center teaching Python, OOP, and Backend Development",
    "Hands-on ERP Experience with Odoo v19 during Web Developer Internship at RMA Cambodia",
  ];

  const highlightsKh = [
    "មានបទពិសោធន៍អភិវឌ្ឍន៍គេហទំព័រ Full-Stack (React, Laravel, Node.js, Spring Boot)",
    "បង្កើតកម្មវិធីទូរស័ព្ទឆ្លងប្រព័ន្ធប្រតិបត្តិការជាមួយ Flutter & Kotlin",
    "ជាគ្រូបង្រៀន (Instructor) នៅមជ្ឈមណ្ឌល ICT Center បង្រៀន Python OOP & Backend",
    "បទពិសោធន៍ផ្ទាល់លើប្រព័ន្ធ ERP Odoo v19 ក្នុងពេលហាត់ការនៅ RMA Cambodia",
  ];

  const highlights = language === "kh" ? highlightsKh : highlightsEn;

  const traitsEn = ["Responsible", "Organized", "Honest", "Problem Solver", "Continuous Learner"];
  const traitsKh = ["ការទទួលខុសត្រូវខ្ពស់", "មានរបៀបរៀបរយ", "ស្មោះត្រង់", "ដោះស្រាយបញ្ហា", "រៀនសូត្រជាប់ជានិច្ច"];
  const traits = language === "kh" ? traitsKh : traitsEn;

  return (
    <section className={`relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden transition-colors ${
      isDark ? "bg-slate-950/80" : "bg-slate-100/50"
    }`} id="about">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-80 sm:w-96 h-80 sm:h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16">
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-500 dark:text-amber-300 text-xs font-semibold uppercase tracking-wider">
            <Sparkles size={14} /> {t("about_badge")}
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            isDark ? "text-white" : "text-slate-900"
          }`}>
            {t("about_title_pre")} <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-rose-500 to-sky-500">SRUN Borath</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            {t("about_sub")}
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 items-center">
          {/* Left Column: Portrait & Quick Info Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className={`p-5 sm:p-6 rounded-3xl border backdrop-blur-xl shadow-xl space-y-5 ${
              isDark ? "bg-slate-900/80 border-white/10" : "bg-white border-slate-200"
            }`}>
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-950 border border-white/5">
                <img
                  src={Cover}
                  alt="SRUN Borath Profile"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Personal Details */}
              <div className="space-y-2.5 text-xs sm:text-sm">
                <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                  <GraduationCap className="text-amber-500 dark:text-amber-400 shrink-0" size={17} />
                  <span>University of Puthisastra (2022 – Present)</span>
                </div>
                <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                  <MapPin className="text-rose-500 dark:text-rose-400 shrink-0" size={17} />
                  <span>{profileData.contact.addressDetail[language] || profileData.contact.addressDetail.en}</span>
                </div>
                <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                  <Mail className="text-sky-500 dark:text-sky-400 shrink-0" size={17} />
                  <span>{profileData.contact.email}</span>
                </div>
                <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                  <Phone className="text-emerald-500 dark:text-emerald-400 shrink-0" size={17} />
                  <span>{profileData.contact.phoneDisplay}</span>
                </div>
              </div>

              {/* Trait Pills */}
              <div className="pt-2 flex flex-wrap gap-1.5 sm:gap-2">
                {traits.map((trait, i) => (
                  <span
                    key={i}
                    className={`px-3 py-1 rounded-full text-xs font-medium border ${
                      isDark ? "bg-white/5 border-white/10 text-amber-200/90" : "bg-amber-50 border-amber-200 text-amber-800"
                    }`}
                  >
                    ✦ {trait}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Bio & Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-5 sm:space-y-6"
          >
            <div className={`space-y-3 sm:space-y-4 text-sm sm:text-base leading-relaxed ${
              isDark ? "text-slate-300" : "text-slate-800 font-normal"
            }`}>
              <p>{t("about_p1")}</p>
              <p>{t("about_p2")}</p>
              <p>{t("about_p3")}</p>
            </div>

            {/* Key Highlights Checklist */}
            <div className="space-y-3 pt-2">
              <h4 className={`text-xs sm:text-sm font-bold uppercase tracking-wider font-mono ${
                isDark ? "text-white" : "text-slate-950"
              }`}>
                {t("about_strengths_title")}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                {highlights.map((item, i) => (
                  <div
                    key={i}
                    className={`flex items-start gap-2.5 p-3 rounded-xl border text-xs ${
                      isDark ? "bg-slate-900 border-slate-800 text-slate-300" : "bg-white border-slate-200 text-slate-800 font-medium shadow-xs"
                    }`}
                  >
                    <CheckCircle className="text-amber-500 shrink-0 mt-0.5" size={15} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="pt-3 flex flex-wrap items-center gap-3 sm:gap-4">
              <Link
                to="/cv"
                className="inline-flex items-center gap-2 px-5 sm:px-6 py-3 rounded-2xl bg-gradient-to-r from-amber-400 to-rose-400 text-slate-950 font-bold text-xs sm:text-sm shadow-lg hover:scale-105 transition cursor-pointer"
              >
                <FileText size={16} />
                <span>{t("about_btn_cv")}</span>
              </Link>
              <Link
                to="/contact"
                className={`inline-flex items-center gap-2 px-5 sm:px-6 py-3 rounded-2xl border text-xs sm:text-sm font-bold transition cursor-pointer ${
                  isDark ? "bg-slate-800 hover:bg-slate-700 border-slate-700 text-white" : "bg-white hover:bg-slate-100 border-slate-300 text-slate-900 shadow-xs"
                }`}
              >
                <Mail size={16} />
                <span>{t("about_btn_contact")}</span>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Stats Strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 pt-2">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className={`p-4 sm:p-6 rounded-2xl border backdrop-blur-md text-center transition group ${
                isDark ? "bg-slate-900/70 border-slate-800 hover:border-amber-400/40" : "bg-white border-slate-200 hover:border-amber-500 shadow-sm"
              }`}
            >
              <div className="text-xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-rose-500 font-mono group-hover:scale-105 transition-transform">
                {stat.value}
              </div>
              <div className={`text-xs sm:text-sm font-bold mt-1 ${
                isDark ? "text-white" : "text-slate-950"
              }`}>
                {stat.label}
              </div>
              <div className={`text-[11px] sm:text-xs mt-0.5 font-medium ${
                isDark ? "text-slate-400" : "text-slate-600"
              }`}>
                {stat.sub}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


