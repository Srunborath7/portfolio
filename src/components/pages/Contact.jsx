import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Copy,
  Check,
  Sparkles,
  MessageSquare,
  Clock,
} from "lucide-react";
import Swal from "sweetalert2";
import { useApp } from "../../context/AppContext";
import { profileData } from "../../data/profileData";

export default function Contact() {
  const { t, language, isDark } = useApp();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedField, setCopiedField] = useState(null);

  const contactCards = [
    {
      icon: <Phone className="text-emerald-500 dark:text-emerald-400" size={24} />,
      title: language === "kh" ? "លេខទូរស័ព្ទ / Phone" : "Direct Phone",
      primary: profileData.contact.phone,
      secondary: profileData.contact.phoneDisplay.split(" / ")[0],
      copyText: profileData.contact.phoneClean,
      fieldKey: "phone",
      action: `tel:${profileData.contact.phoneClean}`,
      actionText: language === "kh" ? "ទូរស័ព្ទផ្ទាល់" : "Call Now",
    },
    {
      icon: <Mail className="text-sky-500 dark:text-sky-400" size={24} />,
      title: language === "kh" ? "អ៊ីមែល / Email" : "Email Address",
      primary: profileData.contact.email,
      secondary: language === "kh" ? "ឆ្លើយតបក្នុងរយៈពេល < 24h" : "Fast turnaround response",
      copyText: profileData.contact.email,
      fieldKey: "email",
      action: `mailto:${profileData.contact.email}`,
      actionText: language === "kh" ? "ផ្ញើអ៊ីមែល" : "Send Email",
    },
    {
      icon: <Send className="text-sky-500 dark:text-sky-400" size={24} />,
      title: language === "kh" ? "តេឡេក្រាម / Telegram" : "Telegram Channel",
      primary: profileData.contact.telegramUsername,
      secondary: profileData.contact.phoneClean.replace("+855", "0"),
      copyText: profileData.contact.telegramUrl,
      fieldKey: "telegram",
      action: profileData.contact.telegramUrl,
      actionText: language === "kh" ? "បើកតេឡេក្រាម" : "Chat on Telegram",
    },
    {
      icon: <MapPin className="text-rose-500 dark:text-rose-400" size={24} />,
      title: language === "kh" ? "ទីតាំងបច្ចុប្បន្ន / Location" : "Location / Base",
      primary: profileData.contact.location[language] || profileData.contact.location.en,
      secondary: profileData.contact.addressDetail[language] || profileData.contact.addressDetail.en,
      copyText: `${profileData.contact.addressDetail.en} ${profileData.contact.location.en}`,
      fieldKey: "location",
      action: profileData.contact.mapQueryUrl,
      actionText: language === "kh" ? "មើលទីតាំង" : "View Map",
    },
  ];

  const handleCopy = (text, fieldKey) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldKey);
    setTimeout(() => setCopiedField(null), 2000);
    Swal.fire({
      toast: true,
      position: "top-end",
      icon: "success",
      title: language === "kh" ? "បានចម្លងរួចរាល់!" : "Copied to clipboard!",
      showConfirmButton: false,
      timer: 1800,
      background: isDark ? "#0f172a" : "#ffffff",
      color: isDark ? "#f8fafc" : "#0f172a",
    });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.message) {
      Swal.fire({
        icon: "warning",
        title: language === "kh" ? "ព័ត៌មានមិនទាន់គ្រប់គ្រាន់" : "Missing Information",
        text: language === "kh" ? "សូមបញ្ចូលអ៊ីមែល និងសាររបស់អ្នក" : "Please provide your email and message before sending.",
        background: isDark ? "#0f172a" : "#ffffff",
        color: isDark ? "#f8fafc" : "#0f172a",
        confirmButtonColor: "#f59e0b",
      });
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      Swal.fire({
        icon: "success",
        title: language === "kh" ? "ផ្ញើសារបានជោគជ័យ!" : "Message Sent Successfully!",
        text:
          language === "kh"
            ? `អរគុណ ${formData.name || ""} ខ្ញុំនឹងឆ្លើយតបសាររបស់អ្នកឱ្យបានលឿនបំផុត។`
            : `Thank you ${formData.name || ""}, Borath will get back to you as soon as possible!`,
        background: isDark ? "#0f172a" : "#ffffff",
        color: isDark ? "#f8fafc" : "#0f172a",
        confirmButtonColor: "#f59e0b",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1000);
  };

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 relative min-h-screen" id="contact">
      {/* Background glow */}
      <div className="absolute top-1/4 right-1/4 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-sky-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16 relative z-10">
        {/* Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-500 dark:text-amber-300 text-xs font-semibold uppercase tracking-wider">
            <Sparkles size={14} /> {t("contact_badge")}
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            isDark ? "text-white" : "text-slate-900"
          }`}>
            {t("contact_title_pre")}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-rose-500 to-sky-500">
              {t("contact_title_highlight")}
            </span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            {t("contact_sub")}
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12">
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className={`text-lg sm:text-xl font-bold mb-4 flex items-center gap-2 ${
              isDark ? "text-white" : "text-slate-950"
            }`}>
              <MessageSquare className="text-amber-600 dark:text-amber-400" size={20} />
              <span>{t("contact_info_title")}</span>
            </h3>

            <div className="space-y-3.5">
              {contactCards.map((card, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.4 }}
                  className={`p-4 sm:p-5 rounded-2xl border backdrop-blur-xl shadow-md flex items-center justify-between gap-3 group transition ${
                    isDark
                      ? "bg-slate-900/90 border-slate-800 hover:border-amber-400/40"
                      : "bg-white border-slate-200 hover:border-slate-300 hover:shadow-lg"
                  }`}
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className={`p-3 rounded-2xl border shrink-0 ${
                      isDark ? "bg-slate-950 border-slate-800" : "bg-slate-50 border-slate-200 shadow-xs"
                    }`}>
                      {card.icon}
                    </div>
                    <div className="min-w-0">
                      <p className="text-[11px] font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold">
                        {card.title}
                      </p>
                      <p className={`text-xs sm:text-sm font-bold truncate mt-0.5 ${
                        isDark ? "text-white" : "text-slate-950"
                      }`}>
                        {card.primary}
                      </p>
                      <p className="text-xs text-slate-600 dark:text-slate-400 truncate mt-0.5">
                        {card.secondary}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={() => handleCopy(card.copyText, card.fieldKey)}
                      className={`p-2.5 rounded-xl border transition cursor-pointer ${
                        copiedField === card.fieldKey
                          ? "bg-emerald-500 text-slate-950 border-emerald-500 font-bold"
                          : isDark
                            ? "bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700 hover:text-white"
                            : "bg-slate-100 border-slate-300 text-slate-700 hover:bg-slate-200 hover:text-slate-950"
                      }`}
                      title="Copy to clipboard"
                    >
                      {copiedField === card.fieldKey ? <Check size={14} /> : <Copy size={14} />}
                    </button>
                    <a
                      href={card.action}
                      target={card.fieldKey === "telegram" || card.fieldKey === "location" ? "_blank" : "_self"}
                      rel="noopener noreferrer"
                      className={`px-3.5 py-2 rounded-xl border text-xs font-bold transition cursor-pointer ${
                        isDark
                          ? "bg-slate-800 border-slate-700 text-white hover:bg-slate-700"
                          : "bg-slate-100 border-slate-300 text-slate-900 hover:bg-slate-200 shadow-xs"
                      }`}
                    >
                      {card.actionText}
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Availability Box */}
            <div className={`p-4 sm:p-5 rounded-2xl border flex items-center gap-3.5 mt-4 ${
              isDark ? "bg-amber-400/10 border-amber-400/25 text-amber-200" : "bg-amber-50 border-amber-200 text-amber-950"
            }`}>
              <Clock className="text-amber-600 dark:text-amber-400 shrink-0" size={22} />
              <div className="text-xs leading-relaxed">
                <p className="font-bold text-sm">{t("contact_status_title")}</p>
                <p className="text-slate-700 dark:text-slate-300 mt-0.5">{t("contact_status_sub")}</p>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`p-6 sm:p-8 rounded-3xl border backdrop-blur-xl shadow-lg ${
                isDark ? "bg-slate-900/90 border-slate-800" : "bg-white border-slate-200 shadow-xl"
              }`}
            >
              <h3 className={`text-lg sm:text-xl font-bold mb-1.5 ${
                isDark ? "text-white" : "text-slate-950"
              }`}>
                {t("contact_form_title")}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-6 font-normal">
                {t("contact_form_sub")}
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold font-mono text-slate-700 dark:text-slate-300">
                      {t("contact_form_name")}
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={language === "kh" ? "ឈ្មោះរបស់អ្នក..." : "John Doe"}
                      className={`w-full px-4 py-3 rounded-2xl border text-xs sm:text-sm transition focus:outline-none focus:ring-2 focus:ring-amber-400/30 ${
                        isDark 
                          ? "bg-slate-950 border-slate-800 text-white placeholder-slate-500 focus:border-amber-400" 
                          : "bg-slate-50 border-slate-300 text-slate-950 placeholder-slate-400 focus:border-amber-500 focus:bg-white"
                      }`}
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold font-mono text-slate-700 dark:text-slate-300">
                      {t("contact_form_email")}
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      className={`w-full px-4 py-3 rounded-2xl border text-xs sm:text-sm transition focus:outline-none focus:ring-2 focus:ring-amber-400/30 ${
                        isDark 
                          ? "bg-slate-950 border-slate-800 text-white placeholder-slate-500 focus:border-amber-400" 
                          : "bg-slate-50 border-slate-300 text-slate-950 placeholder-slate-400 focus:border-amber-500 focus:bg-white"
                      }`}
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold font-mono text-slate-700 dark:text-slate-300">
                    {t("contact_form_subject")}
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder={language === "kh" ? "កម្មវត្ថុ ឬឱកាសការងារ..." : "Job Opportunity / Project Collaboration"}
                    className={`w-full px-4 py-3 rounded-2xl border text-xs sm:text-sm transition focus:outline-none focus:ring-2 focus:ring-amber-400/30 ${
                      isDark 
                        ? "bg-slate-950 border-slate-800 text-white placeholder-slate-500 focus:border-amber-400" 
                        : "bg-slate-50 border-slate-300 text-slate-950 placeholder-slate-400 focus:border-amber-500 focus:bg-white"
                    }`}
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold font-mono text-slate-700 dark:text-slate-300">
                    {t("contact_form_message")}
                  </label>
                  <textarea
                    name="message"
                    rows="4"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={language === "kh" ? "សរសេរសាររបស់អ្នកនៅទីនេះ..." : "Hi Borath, we would love to discuss an opportunity with you..."}
                    className={`w-full px-4 py-3 rounded-2xl border text-xs sm:text-sm transition resize-none focus:outline-none focus:ring-2 focus:ring-amber-400/30 ${
                      isDark 
                        ? "bg-slate-950 border-slate-800 text-white placeholder-slate-500 focus:border-amber-400" 
                        : "bg-slate-50 border-slate-300 text-slate-950 placeholder-slate-400 focus:border-amber-500 focus:bg-white"
                    }`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-amber-400 via-rose-400 to-pink-500 text-slate-950 font-bold text-xs sm:text-sm shadow-xl shadow-amber-500/20 hover:shadow-amber-500/40 hover:scale-[1.01] active:scale-[0.99] transition flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <span>{t("contact_sending")}</span>
                  ) : (
                    <>
                      <span>{t("contact_btn_send")}</span>
                      <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}