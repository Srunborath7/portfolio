import React, { useState } from "react";
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
  SiCss3,
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
import { Sparkles, Users, MessageSquare, Brain, Globe, Code } from "lucide-react";
import { useApp } from "../../context/AppContext";
import { skillsData } from "../../data/skillsData";

const iconMap = {
  SiReact: <SiReact className="text-cyan-400" />,
  SiJavascript: <SiJavascript className="text-amber-500" />,
  SiHtml5: <SiHtml5 className="text-orange-500" />,
  SiCss3: <SiCss3 className="text-sky-500" />,
  SiLaravel: <SiLaravel className="text-rose-500" />,
  SiNodedotjs: <SiNodedotjs className="text-emerald-500" />,
  SiSpringboot: <SiSpringboot className="text-emerald-500" />,
  SiPython: <SiPython className="text-blue-500" />,
  SiPhp: <SiPhp className="text-indigo-400" />,
  Code: <Code className="text-indigo-500" />,
  SiFlutter: <SiFlutter className="text-sky-500" />,
  SiKotlin: <SiKotlin className="text-purple-500" />,
  SiMysql: <SiMysql className="text-sky-600" />,
  SiMongodb: <SiMongodb className="text-emerald-500" />,
  SiSqlite: <SiSqlite className="text-cyan-500" />,
  SiGit: <SiGit className="text-rose-500" />,
  SiLinux: <SiLinux className="text-amber-500" />,
  SiFigma: <SiFigma className="text-pink-500" />,
  SiPostman: <SiPostman className="text-orange-500" />,
  Users: <Users className="text-amber-500 dark:text-amber-400" size={24} />,
  Brain: <Brain className="text-rose-500 dark:text-rose-400" size={24} />,
  MessageSquare: <MessageSquare className="text-sky-500 dark:text-sky-400" size={24} />,
};

export default function SkillsSection() {
  const { t, language, isDark } = useApp();
  const [activeTab, setActiveTab] = useState("Technical");

  const techSkills = skillsData.technical.map((item) => ({
    ...item,
    icon: iconMap[item.iconKey] || <Code className="text-amber-500" />,
  }));

  const softSkills = skillsData.soft.map((item) => ({
    title: item.title[language] || item.title.en,
    desc: item.desc[language] || item.desc.en,
    icon: iconMap[item.iconKey] || <Users className="text-amber-500" size={24} />,
  }));

  const spokenLanguages = skillsData.languages.map((item) => ({
    lang: item.name[language] || item.name.en,
    fluency: item.fluency[language] || item.fluency.en,
    level: item.level,
    desc: item.desc[language] || item.desc.en,
  }));

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 relative" id="skills">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-10 sm:space-y-12 relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-500 dark:text-amber-300 text-xs font-semibold uppercase tracking-wider">
            <Sparkles size={14} /> {t("skills_badge")}
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            isDark ? "text-white" : "text-slate-950"
          }`}>
            {t("skills_title_pre")}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-rose-500 to-sky-600 dark:from-amber-400 dark:via-rose-400 dark:to-sky-400">
              {t("skills_title_highlight")}
            </span>
          </h2>
          <p className={`text-xs sm:text-sm font-medium ${isDark ? "text-slate-400" : "text-slate-700"}`}>
            {t("skills_sub")}
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center gap-2 sm:gap-3">
          {[
            { key: "Technical", label: t("skills_tab_tech") },
            { key: "Soft Skills", label: t("skills_tab_soft") },
            { key: "Languages", label: t("skills_tab_lang") },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                activeTab === tab.key
                  ? "bg-gradient-to-r from-amber-400 to-rose-400 text-slate-950 shadow-lg shadow-amber-400/20 scale-105"
                  : isDark
                    ? "bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800"
                    : "bg-white border border-slate-300 text-slate-800 hover:text-slate-950 hover:bg-slate-100 shadow-xs"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Tabs */}
        <AnimatePresence mode="wait">
          {activeTab === "Technical" && (
            <motion.div
              key="tech"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-3.5 sm:gap-6"
            >
              {techSkills.map((skill, index) => (
                <div
                  key={index}
                  className={`p-4 sm:p-5 rounded-2xl border backdrop-blur-md hover:-translate-y-1 transition-all duration-300 group shadow-md flex flex-col justify-between ${
                    isDark
                      ? "bg-slate-900/90 border-slate-800 hover:border-amber-400/50"
                      : "bg-white border-slate-200 hover:border-slate-300 hover:shadow-lg"
                  }`}
                >
                  <div className="flex justify-between items-start mb-3">
                    <div className="text-2xl sm:text-3xl group-hover:scale-105 transition-transform">
                      {skill.icon}
                    </div>
                    <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full border ${
                      isDark ? "bg-slate-950 border-slate-800 text-slate-300" : "bg-slate-100 border-slate-300 text-slate-900"
                    }`}>
                      {skill.category}
                    </span>
                  </div>

                  <div>
                    <h3 className={`font-bold text-xs sm:text-sm transition-colors ${
                      isDark ? "text-white group-hover:text-amber-300" : "text-slate-950 group-hover:text-amber-700"
                    }`}>
                      {skill.name}
                    </h3>

                    {/* Progress Bar */}
                    <div className="mt-2.5 sm:mt-3 space-y-1.5">
                      <div className={`flex justify-between text-[10px] sm:text-[11px] font-mono ${
                        isDark ? "text-slate-400" : "text-slate-700 font-semibold"
                      }`}>
                        <span>{language === "kh" ? "កម្រិតស្ទាត់" : "Proficiency"}</span>
                        <span className="text-amber-600 dark:text-amber-300 font-bold">{skill.level}%</span>
                      </div>
                      <div className={`w-full h-2 rounded-full overflow-hidden border ${
                        isDark ? "bg-slate-950 border-slate-800" : "bg-slate-100 border-slate-300"
                      }`}>
                        <motion.div
                          className="h-full bg-gradient-to-r from-amber-400 to-rose-400 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: index * 0.04 }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {activeTab === "Soft Skills" && (
            <motion.div
              key="soft"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {softSkills.map((item, idx) => (
                <div
                  key={idx}
                  className={`p-6 sm:p-7 rounded-3xl border backdrop-blur-xl shadow-md space-y-4 transition ${
                    isDark
                      ? "bg-slate-900/90 border-slate-800 hover:border-amber-400/40"
                      : "bg-white border-slate-200 hover:border-slate-300 hover:shadow-xl"
                  }`}
                >
                  <div className={`p-3.5 rounded-2xl border w-fit ${
                    isDark ? "bg-slate-950 border-slate-800" : "bg-slate-50 border-slate-200 shadow-xs"
                  }`}>
                    {item.icon}
                  </div>
                  <h3 className={`text-base sm:text-lg font-bold ${
                    isDark ? "text-white" : "text-slate-950"
                  }`}>
                    {item.title}
                  </h3>
                  <p className={`text-xs sm:text-sm leading-relaxed ${
                    isDark ? "text-slate-300" : "text-slate-700 font-normal"
                  }`}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </motion.div>
          )}

          {activeTab === "Languages" && (
            <motion.div
              key="languages"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
            >
              {spokenLanguages.map((lang, idx) => (
                <div
                  key={idx}
                  className={`p-6 sm:p-7 rounded-3xl border backdrop-blur-xl shadow-md space-y-4 transition ${
                    isDark
                      ? "bg-slate-900/90 border-slate-800 hover:border-amber-400/40"
                      : "bg-white border-slate-200 hover:border-slate-300 hover:shadow-xl"
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-3.5">
                      <div className={`p-3.5 rounded-2xl border text-amber-600 dark:text-amber-400 ${
                        isDark ? "bg-slate-950 border-slate-800" : "bg-slate-50 border-slate-200 shadow-xs"
                      }`}>
                        <Globe size={22} />
                      </div>
                      <div>
                        <h3 className={`text-lg sm:text-xl font-bold ${
                          isDark ? "text-white" : "text-slate-950"
                        }`}>
                          {lang.lang}
                        </h3>
                        <p className="text-xs text-amber-700 dark:text-amber-300 font-bold mt-0.5">
                          {lang.fluency}
                        </p>
                      </div>
                    </div>
                  </div>

                  <p className={`text-xs sm:text-sm leading-relaxed ${
                    isDark ? "text-slate-300" : "text-slate-700 font-normal"
                  }`}>
                    {lang.desc}
                  </p>

                  <div className="space-y-1.5 pt-2">
                    <div className={`flex justify-between text-xs font-mono font-medium ${
                      isDark ? "text-slate-400" : "text-slate-700"
                    }`}>
                      <span>{language === "kh" ? "កម្រិតសមត្ថភាព" : "Proficiency Level"}</span>
                      <span className="text-amber-600 dark:text-amber-300 font-bold">{lang.level}%</span>
                    </div>
                    <div className={`w-full h-2.5 rounded-full overflow-hidden border ${
                      isDark ? "bg-slate-950 border-slate-800" : "bg-slate-100 border-slate-300"
                    }`}>
                      <div
                        className="h-full bg-gradient-to-r from-amber-400 to-rose-400 rounded-full"
                        style={{ width: `${lang.level}%` }}
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