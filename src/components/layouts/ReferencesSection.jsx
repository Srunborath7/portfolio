import React from "react";
import { motion } from "framer-motion";
import {
  UserCheck,
  Building,
  Phone,
  Mail,
  Send,
  Sparkles,
} from "lucide-react";
import { useApp } from "../../context/AppContext";
import { referencesData } from "../../data/referencesData";

export default function ReferencesSection() {
  const { t, language, isDark } = useApp();

  const references = referencesData.map((ref) => ({
    name: ref.name,
    title: ref.title[language] || ref.title.en,
    institution: ref.institution[language] || ref.institution.en,
    phone: ref.phone,
    phoneDisplay: ref.phoneDisplay,
    email: ref.email,
    telegram: ref.telegram,
    endorsement: ref.endorsement[language] || ref.endorsement.en,
    badge: ref.badge[language] || ref.badge.en,
  }));

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 relative" id="references">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/3 w-80 sm:w-96 h-80 sm:h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-12 sm:space-y-16 relative z-10">
        {/* Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-500 dark:text-amber-300 text-xs font-semibold uppercase tracking-wider">
            <Sparkles size={14} /> {t("ref_badge")}
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            isDark ? "text-white" : "text-slate-900"
          }`}>
            {t("ref_title_pre")}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-rose-500 to-sky-500">
              {t("ref_title_highlight")}
            </span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            {t("ref_sub")}
          </p>
        </div>

        {/* References Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {references.map((ref, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
              className={`p-6 sm:p-8 rounded-3xl border backdrop-blur-xl shadow-md transition-all duration-300 flex flex-col justify-between space-y-5 sm:space-y-6 ${
                isDark
                  ? "bg-slate-900/90 border-slate-800 hover:border-amber-400/40"
                  : "bg-white border-slate-200 hover:border-slate-300 hover:shadow-xl"
              }`}
            >
              <div className="space-y-4">
                {/* Badge & Avatar */}
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-3.5">
                    <div className={`p-3.5 rounded-2xl border text-amber-600 dark:text-amber-400 ${
                      isDark ? "bg-slate-950 border-slate-800" : "bg-slate-50 border-slate-200 shadow-xs"
                    }`}>
                      <UserCheck size={24} />
                    </div>
                    <div>
                      <h3 className={`text-lg sm:text-xl font-bold ${
                        isDark ? "text-white" : "text-slate-950"
                      }`}>
                        {ref.name}
                      </h3>
                      <div className="text-xs sm:text-sm font-semibold text-amber-700 dark:text-amber-300 mt-0.5">
                        {ref.title}
                      </div>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold border ${
                    isDark ? "bg-amber-400/10 border-amber-400/25 text-amber-300" : "bg-amber-50 border-amber-200 text-amber-900"
                  }`}>
                    {ref.badge}
                  </span>
                </div>

                {/* Institution */}
                <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400">
                  <Building size={16} className="text-sky-600 dark:text-sky-400 shrink-0" />
                  <span>{ref.institution}</span>
                </div>

                {/* Endorsement quote */}
                <blockquote className={`p-4 rounded-2xl border text-xs sm:text-sm italic leading-relaxed ${
                  isDark ? "bg-slate-950/70 border-slate-800 text-slate-300" : "bg-slate-50 border-slate-200 text-slate-800"
                }`}>
                  "{ref.endorsement}"
                </blockquote>

                {/* Contact info */}
                <div className="space-y-2 pt-2 text-xs sm:text-sm">
                  <div className="flex items-center gap-2.5 text-slate-700 dark:text-slate-300">
                    <Phone size={15} className="text-emerald-600 dark:text-emerald-400 shrink-0" />
                    <a
                      href={`tel:${ref.phone.replace(/\s/g, "")}`}
                      className="hover:text-amber-600 dark:hover:text-amber-300 transition font-mono font-medium"
                    >
                      {ref.phoneDisplay}
                    </a>
                  </div>
                  <div className="flex items-center gap-2.5 text-slate-700 dark:text-slate-300">
                    <Mail size={15} className="text-sky-600 dark:text-sky-400 shrink-0" />
                    <a
                      href={`mailto:${ref.email}`}
                      className="hover:text-amber-600 dark:hover:text-amber-300 transition break-all font-medium"
                    >
                      {ref.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center gap-3">
                <a
                  href={`mailto:${ref.email}`}
                  className={`flex-1 inline-flex items-center justify-center gap-2 py-2.5 rounded-xl border text-xs font-bold transition cursor-pointer ${
                    isDark
                      ? "bg-slate-800 hover:bg-slate-700 border-slate-700 text-white"
                      : "bg-slate-100 hover:bg-slate-200 border-slate-300 text-slate-900 shadow-xs"
                  }`}
                >
                  <Mail size={14} />
                  <span>{t("ref_email_btn")}</span>
                </a>
                <a
                  href={`https://t.me/+${ref.phone.replace(/[^0-9]/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white text-xs font-bold shadow-md shadow-sky-500/20 transition cursor-pointer"
                >
                  <Send size={14} />
                  <span>{t("ref_telegram_btn")}</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
