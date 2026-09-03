import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Code, Sparkles, Building2, Calendar, CheckCircle2 } from "lucide-react";
import { useApp } from "../../context/AppContext";
import { experienceData } from "../../data/experienceData";

const iconMap = {
  Code: <Code className="text-amber-500 dark:text-amber-400" size={24} />,
  Briefcase: <Briefcase className="text-sky-500 dark:text-sky-400" size={24} />,
  Building2: <Building2 className="text-rose-500 dark:text-rose-400" size={24} />,
};

export default function WorkExperience() {
  const { t, language, isDark } = useApp();

  const experiences = experienceData.map((exp) => ({
    company: exp.company,
    role: exp.role[language] || exp.role.en,
    type: exp.type[language] || exp.type.en,
    period: exp.period[language] || exp.period.en,
    status: exp.status[language] || exp.status.en,
    description: exp.description[language] || exp.description.en,
    tasks: exp.tasks[language] || exp.tasks.en,
    skills: exp.skills,
    icon: iconMap[exp.iconType] || <Briefcase className="text-amber-500" size={24} />,
  }));

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 relative min-h-screen">
      {/* Background glow */}
      <div className="absolute top-1/3 left-0 w-80 sm:w-96 h-80 sm:h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto space-y-12 sm:space-y-16 relative z-10">
        {/* Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-500 dark:text-amber-300 text-xs font-semibold uppercase tracking-wider">
            <Sparkles size={14} /> {t("exp_badge")}
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            isDark ? "text-white" : "text-slate-900"
          }`}>
            {t("exp_title_pre")}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-rose-500 to-sky-500">
              {t("exp_title_highlight")}
            </span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            {t("exp_sub")}
          </p>
        </div>

        {/* Timeline List */}
        <div className={`relative border-l ml-3 sm:ml-8 space-y-10 sm:space-y-12 pl-6 sm:pl-10 ${
          isDark ? "border-white/10" : "border-slate-300"
        }`}>
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative group"
            >
              {/* Timeline Indicator Dot */}
              <div className={`absolute -left-[31px] sm:-left-[51px] top-1.5 w-6 h-6 rounded-full border-2 border-amber-400 flex items-center justify-center shadow-lg group-hover:scale-125 transition-transform ${
                isDark ? "bg-slate-950" : "bg-white"
              }`}>
                <div className="w-2 h-2 rounded-full bg-amber-400 animate-ping opacity-75" />
              </div>

              {/* Card Container */}
              <div className={`p-5 sm:p-8 rounded-3xl border backdrop-blur-xl shadow-xl transition-all duration-300 space-y-5 sm:space-y-6 ${
                isDark
                  ? "bg-slate-900/80 border-white/10 hover:border-amber-400/40"
                  : "bg-white border-slate-200 hover:border-amber-500/50 shadow-md"
              }`}>
                {/* Header row */}
                <div className={`flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b pb-4 ${
                  isDark ? "border-white/5" : "border-slate-200"
                }`}>
                  <div className="flex items-start sm:items-center gap-3 sm:gap-4">
                    <div className={`p-2.5 sm:p-3 rounded-2xl border shrink-0 ${
                      isDark ? "bg-white/5 border-white/10" : "bg-slate-100 border-slate-200"
                    }`}>
                      {exp.icon}
                    </div>
                    <div>
                      <h3 className={`text-lg sm:text-xl font-bold transition-colors ${
                        isDark ? "text-white group-hover:text-amber-300" : "text-slate-950 group-hover:text-amber-700"
                      }`}>
                        {exp.role}
                      </h3>
                      <div className={`text-xs sm:text-sm font-bold ${
                        isDark ? "text-amber-300" : "text-amber-700"
                      }`}>
                        {exp.company} <span className={`font-normal ${isDark ? "text-slate-400" : "text-slate-700"}`}>• {exp.type}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium border ${
                      isDark ? "bg-slate-950 border-slate-800 text-slate-300" : "bg-slate-100 border-slate-300 text-slate-800"
                    }`}>
                      <Calendar size={13} /> {exp.period}
                    </span>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-bold ${
                        exp.status === "Current Role" || exp.status === "តួនាទីបច្ចុប្បន្ន"
                          ? "bg-emerald-400/15 border border-emerald-400/30 text-emerald-600 dark:text-emerald-300"
                          : isDark
                            ? "bg-slate-950 border border-slate-800 text-slate-400"
                            : "bg-slate-100 border border-slate-300 text-slate-700"
                      }`}
                    >
                      {exp.status}
                    </span>
                  </div>
                </div>

                <p className={`text-xs sm:text-sm leading-relaxed ${
                  isDark ? "text-slate-300" : "text-slate-700 font-normal"
                }`}>
                  {exp.description}
                </p>

                {/* Key Responsibilities */}
                <div className="space-y-2.5">
                  <h4 className={`text-xs font-bold uppercase tracking-wider font-mono ${
                    isDark ? "text-slate-400" : "text-slate-700"
                  }`}>
                    {t("exp_resp_title")}
                  </h4>
                  <ul className="space-y-2">
                    {exp.tasks.map((task, i) => (
                      <li key={i} className={`flex items-start gap-2.5 text-xs sm:text-sm ${
                        isDark ? "text-slate-300" : "text-slate-800 font-medium"
                      }`}>
                        <CheckCircle2 size={15} className="text-amber-500 shrink-0 mt-0.5" />
                        <span>{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Skills tags */}
                <div className={`flex flex-wrap gap-1.5 sm:gap-2 pt-2 border-t ${
                  isDark ? "border-slate-800" : "border-slate-200"
                }`}>
                  {exp.skills.map((skill, i) => (
                    <span
                      key={i}
                      className={`px-2.5 sm:px-3 py-1 rounded-lg text-xs font-mono font-medium border ${
                        isDark ? "bg-slate-950 text-amber-300 border-slate-800" : "bg-slate-100 text-slate-900 border-slate-300"
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}