import React from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Sparkles,
  Calendar,
  HeartHandshake,
} from "lucide-react";
import { useApp } from "../../context/AppContext";
import { educationData } from "../../data/educationData";

export default function Education() {
  const { t, language, isDark } = useApp();

  const educations = educationData.educations.map((item) => ({
    institution: item.institution[language] || item.institution.en,
    department: item.department[language] || item.department.en,
    degree: item.degree[language] || item.degree.en,
    year: item.year[language] || item.year.en,
    badge: item.badge[language] || item.badge.en,
    description: item.description[language] || item.description.en,
    topics: item.topics,
  }));

  const activities = educationData.activities.map((act) => ({
    title: act.title[language] || act.title.en,
    role: act.role[language] || act.role.en,
    years: act.years[language] || act.years.en || act.years,
    organizer: act.organizer[language] || act.organizer.en,
    description: act.description[language] || act.description.en,
  }));

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 relative min-h-screen">
      {/* Background radial glow */}
      <div className="absolute bottom-10 right-10 w-80 sm:w-96 h-80 sm:h-96 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-12 sm:space-y-16 relative z-10">
        {/* Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-500 dark:text-amber-300 text-xs font-semibold uppercase tracking-wider">
            <GraduationCap size={14} /> {t("edu_badge")}
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            isDark ? "text-white" : "text-slate-900"
          }`}>
            {t("edu_title_pre")}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-rose-500 to-sky-500">
              {t("edu_title_highlight")}
            </span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            {t("edu_sub")}
          </p>
        </div>

        {/* Education Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {educations.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`p-6 sm:p-7 rounded-3xl border backdrop-blur-xl shadow-md transition-all duration-300 flex flex-col justify-between space-y-5 sm:space-y-6 ${
                isDark
                  ? "bg-slate-900/90 border-slate-800 hover:border-amber-400/40"
                  : "bg-white border-slate-200 hover:border-slate-300 hover:shadow-xl"
              }`}
            >
              <div className="space-y-3.5">
                <div className="flex justify-between items-start gap-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold border ${
                    isDark ? "bg-amber-400/10 border-amber-400/25 text-amber-300" : "bg-amber-50 border-amber-200 text-amber-900"
                  }`}>
                    {item.badge}
                  </span>
                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400 font-medium flex items-center gap-1.5">
                    <Calendar size={13} /> {item.year}
                  </span>
                </div>

                <div>
                  <h3 className={`text-lg sm:text-xl font-bold leading-snug ${
                    isDark ? "text-white" : "text-slate-950"
                  }`}>
                    {item.degree}
                  </h3>
                  <div className="text-xs sm:text-sm font-semibold text-sky-600 dark:text-sky-300 mt-1">
                    {item.institution}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 font-medium">
                    {item.department}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              {/* Topics */}
              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-200 dark:border-slate-800">
                {item.topics.map((topic, i) => (
                  <span
                    key={i}
                    className={`px-2.5 py-1 rounded-lg text-xs font-mono font-medium border ${
                      isDark ? "bg-slate-950 text-slate-300 border-slate-800" : "bg-slate-100 text-slate-800 border-slate-200"
                    }`}
                  >
                    ✦ {topic}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Volunteer & Workshop Section */}
        <div className="space-y-6 sm:space-y-8 pt-4 sm:pt-6">
          <div className="flex items-center gap-3">
            <div className={`p-3 rounded-2xl border ${
              isDark ? "bg-slate-950 border-slate-800 text-amber-400" : "bg-amber-50 border-amber-200 text-amber-700 shadow-xs"
            }`}>
              <HeartHandshake size={22} />
            </div>
            <div>
              <h3 className={`text-xl sm:text-2xl font-bold ${
                isDark ? "text-white" : "text-slate-950"
              }`}>
                {t("edu_volunteer_title")}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-medium">
                {t("edu_volunteer_sub")}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {activities.map((act, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.4 }}
                className={`p-6 rounded-3xl border backdrop-blur-xl shadow-md space-y-3.5 transition ${
                  isDark
                    ? "bg-slate-900/90 border-slate-800 hover:border-amber-400/30"
                    : "bg-white border-slate-200 hover:border-slate-300 hover:shadow-lg"
                }`}
              >
                <div className="flex justify-between items-start gap-2">
                  <div>
                    <h4 className={`text-base sm:text-lg font-bold ${
                      isDark ? "text-white" : "text-slate-950"
                    }`}>
                      {act.title}
                    </h4>
                    <span className="text-xs font-semibold text-amber-600 dark:text-amber-300">
                      {act.role}
                    </span>
                  </div>
                  <span className={`text-xs font-mono px-3 py-1 rounded-full border shrink-0 ${
                    isDark ? "bg-slate-950 border-slate-800 text-slate-400" : "bg-slate-100 border-slate-200 text-slate-700 font-medium"
                  }`}>
                    {act.years}
                  </span>
                </div>

                <div className="text-xs text-slate-500 dark:text-slate-400 font-semibold">
                  🏛️ {act.organizer}
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  {act.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}