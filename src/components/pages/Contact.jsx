import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Copy,
  Check,
  Sparkles,
  Clock,
} from "lucide-react";
import Swal from "sweetalert2";
import { useApp } from "../../context/AppContext";
import { profileData } from "../../data/profileData";
import "../../styles/contact.css";

export default function Contact() {
  const { t, language } = useApp();
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
      icon: <Phone size={24} style={{ color: "var(--accent-emerald)" }} />,
      title: language === "kh" ? "លេខទូរស័ព្ទ / Phone" : "Direct Phone",
      primary: profileData.contact.phone,
      secondary: profileData.contact.phoneDisplay.split(" / ")[0],
      copyText: profileData.contact.phoneClean,
      fieldKey: "phone",
      action: `tel:${profileData.contact.phoneClean}`,
      actionText: language === "kh" ? "ទូរស័ព្ទផ្ទាល់" : "Call Now",
    },
    {
      icon: <Mail size={24} style={{ color: "var(--accent-sky)" }} />,
      title: language === "kh" ? "អ៊ីមែល / Email" : "Email Address",
      primary: profileData.contact.email,
      secondary: language === "kh" ? "ឆ្លើយតបក្នុងរយៈពេល < 24h" : "Fast turnaround response",
      copyText: profileData.contact.email,
      fieldKey: "email",
      action: `mailto:${profileData.contact.email}`,
      actionText: language === "kh" ? "ផ្ញើអ៊ីមែល" : "Send Email",
    },
    {
      icon: <Send size={24} style={{ color: "var(--accent-sky-light)" }} />,
      title: language === "kh" ? "តេឡេក្រាម / Telegram" : "Telegram Channel",
      primary: profileData.contact.telegramUsername,
      secondary: profileData.contact.phoneClean.replace("+855", "0"),
      copyText: profileData.contact.telegramUrl,
      fieldKey: "telegram",
      action: profileData.contact.telegramUrl,
      actionText: language === "kh" ? "បើកតេឡេក្រាម" : "Chat on Telegram",
    },
  ];

  const handleCopy = (text, fieldKey) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldKey);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      Swal.fire({
        title: language === "kh" ? "បានផ្ញើជោគជ័យ!" : "Message Sent!",
        text:
          language === "kh"
            ? "សូមអរគុណ! ខ្ញុំនឹងឆ្លើយតបសាររបស់លោកអ្នកក្នុងពេលឆាប់ៗ។"
            : "Thank you for reaching out! I will get back to you as soon as possible.",
        icon: "success",
        confirmButtonColor: "#f59e0b",
      });

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 1000);
  };

  return (
    <section className="contact-section" id="contact">
      {/* Glow */}
      <div className="contact-glow" />

      <div className="app-container">
        {/* Section Header */}
        <div className="section-header-block">
          <div className="section-badge">
            <Sparkles size={14} /> {t("contact_badge")}
          </div>
          <h2 className="section-title">
            {t("contact_title_pre")}{" "}
            <span className="text-gradient">
              {t("contact_title_highlight")}
            </span>
          </h2>
          <p className="section-subtitle">
            {t("contact_sub")}
          </p>
        </div>

        {/* 3 Contact Method Cards */}
        <div className="contact-methods-grid">
          {contactCards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="contact-method-card"
            >
              <div className="contact-method-header">
                <div className="contact-method-icon-wrap">
                  {card.icon}
                </div>
                <div>
                  <div className="contact-method-title">{card.title}</div>
                  <div className="contact-method-primary">{card.primary}</div>
                  <div className="contact-method-secondary">{card.secondary}</div>
                </div>
              </div>

              <div className="contact-method-actions">
                <a
                  href={card.action}
                  target={card.fieldKey === "telegram" ? "_blank" : undefined}
                  rel={card.fieldKey === "telegram" ? "noopener noreferrer" : undefined}
                  className="btn-primary-gradient"
                  style={{ flex: 1, padding: "0.6rem 1rem", fontSize: "0.75rem" }}
                >
                  <span>{card.actionText}</span>
                </a>

                <button
                  onClick={() => handleCopy(card.copyText, card.fieldKey)}
                  className="copy-icon-btn"
                  title="Copy to clipboard"
                >
                  {copiedField === card.fieldKey ? (
                    <Check size={16} style={{ color: "var(--accent-emerald)" }} />
                  ) : (
                    <Copy size={16} />
                  )}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Main Grid: Form + Sidebar Info */}
        <div className="contact-main-grid">
          {/* Form Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="contact-form-card"
          >
            <div className="form-title-group">
              <h3>{t("contact_form_title")}</h3>
              <p>{t("contact_form_sub")}</p>
            </div>

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-input-row">
                <div className="form-group">
                  <label className="form-label">{t("contact_name_label")}</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder={t("contact_name_ph")}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">{t("contact_email_label")}</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder={t("contact_email_ph")}
                    className="form-input"
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">{t("contact_subject_label")}</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder={t("contact_subject_ph")}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label">{t("contact_msg_label")}</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder={t("contact_msg_ph")}
                  className="form-textarea"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary-gradient"
                style={{ width: "100%", padding: "0.85rem", justifyContent: "center" }}
              >
                <Send size={16} />
                <span>{isSubmitting ? t("contact_btn_sending") : t("contact_btn_send")}</span>
              </button>
            </form>
          </motion.div>

          {/* Location & Quick Info Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="contact-sidebar-info"
          >
            <div className="sidebar-info-card">
              <div className="sidebar-info-header">
                <Clock size={20} style={{ color: "var(--accent-amber)" }} />
                <span>{t("contact_fast_resp")}</span>
              </div>
              <p className="sidebar-info-body">
                {t("contact_fast_desc")}
              </p>
            </div>

            <div className="sidebar-info-card">
              <div className="sidebar-info-header">
                <MapPin size={20} style={{ color: "var(--accent-rose)" }} />
                <span>{language === "kh" ? "ទីតាំងបច្ចុប្បន្ន" : "Office & Location"}</span>
              </div>
              <div className="sidebar-info-body">
                <p style={{ fontWeight: "700", color: "var(--text-heading)" }}>
                  {profileData.contact.location[language] || profileData.contact.location.en}
                </p>
                <p style={{ marginTop: "0.35rem" }}>
                  {profileData.contact.addressDetail[language] || profileData.contact.addressDetail.en}
                </p>
              </div>

              <a
                href={profileData.contact.mapQueryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary-outline"
                style={{ padding: "0.6rem 1rem", fontSize: "0.75rem", justifyContent: "center" }}
              >
                <MapPin size={14} />
                <span>{language === "kh" ? "បើកមើលក្នុង Google Maps" : "View on Google Maps"}</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}