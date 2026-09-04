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
import "../../styles/aboutMe.css";

export default function AboutMe() {
  const { t, language } = useApp();

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
    <section className="about-section" id="about">
      {/* Decorative Glow */}
      <div className="about-glow" />

      <div className="app-container">
        {/* Section Header */}
        <div className="section-header-block">
          <div className="section-badge">
            <Sparkles size={14} /> {t("about_badge")}
          </div>
          <h2 className="section-title">
            {t("about_title_pre")}{" "}
            <span className="text-gradient">
              {language === "kh" ? "SRUN Borath" : "SRUN Borath"}
            </span>
          </h2>
          <p className="section-subtitle">
            {t("about_sub")}
          </p>
        </div>

        {/* Stats Grid */}
        <div className="stats-cards-grid">
          {stats.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="stat-card-box"
            >
              <div className="stat-card-value">{item.value}</div>
              <div className="stat-card-label">{item.label}</div>
              <div className="stat-card-sub">{item.sub}</div>
            </motion.div>
          ))}
        </div>

        {/* Main Content: Two Columns */}
        <div className="about-main-grid">
          {/* Left Column: Narrative */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="about-text-column"
          >
            <p>{t("about_p1")}</p>
            <p>{t("about_p2")}</p>
            <p>{t("about_p3")}</p>

            {/* Highlights Box */}
            <div className="about-key-strengths-box">
              <h3 className="about-strengths-title">
                {t("about_strengths_title")}
              </h3>
              {highlights.map((point, i) => (
                <div key={i} className="strength-check-item">
                  <CheckCircle size={16} className="strength-icon" />
                  <span>{point}</span>
                </div>
              ))}
            </div>

            <div className="about-actions-row">
              <Link to="/cv" className="btn-primary-gradient">
                <FileText size={16} />
                <span>{t("about_btn_cv")}</span>
              </Link>
              <Link to="/contact" className="btn-secondary-outline">
                <Mail size={16} />
                <span>{t("about_btn_contact")}</span>
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Profile Summary Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="about-profile-card">
              <div className="profile-card-header">
                <div className="profile-avatar-wrapper">
                  <img
                    src={Cover}
                    alt="SRUN Borath Profile"
                  />
                </div>
                <div className="profile-card-info">
                  <h3>{profileData.name[language] || profileData.name.en}</h3>
                  <p>{language === "kh" ? "អ្នកអភិវឌ្ឍន៍ Full-Stack" : "Full-Stack Software Dev"}</p>
                </div>
              </div>

              <div className="contact-quick-list">
                <div className="contact-quick-item">
                  <GraduationCap size={16} className="contact-quick-icon" />
                  <span>{language === "kh" ? "សាកលវិទ្យាល័យពុទ្ធិសាស្ត្រ (Year 4 ICT)" : "University of Puthisastra (Year 4 ICT)"}</span>
                </div>
                <div className="contact-quick-item">
                  <MapPin size={16} className="contact-quick-icon" />
                  <span>{profileData.contact.location[language] || profileData.contact.location.en}</span>
                </div>
                <div className="contact-quick-item">
                  <Mail size={16} className="contact-quick-icon" />
                  <a href={`mailto:${profileData.contact.email}`} style={{ color: "inherit" }}>
                    {profileData.contact.email}
                  </a>
                </div>
                <div className="contact-quick-item">
                  <Phone size={16} className="contact-quick-icon" />
                  <a href={`tel:${profileData.contact.phoneClean}`} style={{ color: "inherit" }}>
                    {profileData.contact.phone}
                  </a>
                </div>
              </div>

              <div className="traits-section-box">
                <div className="traits-title">
                  {language === "kh" ? "លក្ខណៈបុគ្គល & គុណតម្លៃ" : "Personal Traits"}
                </div>
                <div className="traits-badge-wrap">
                  {traits.map((trait, i) => (
                    <span key={i} className="trait-tag">
                      {trait}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
