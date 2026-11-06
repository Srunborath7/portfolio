import { motion } from "framer-motion";
import {
  GraduationCap,
  Calendar,
  HeartHandshake,
} from "lucide-react";
import { useApp } from "../context/AppContext";
import { educationData } from "../data/educationData";
import "../styles/education.css";

export default function Education() {
  const { t, language } = useApp();
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
    <section className="education-section">
      {/* Background radial glow */}
      <div className="education-glow" />

      <div className="app-container">
        {/* Header */}
        <div className="section-header-block">
          <div className="section-badge">
            <GraduationCap size={14} /> {t("edu_badge")}
          </div>
          <h2 className="section-title">
            {t("edu_title_pre")}{" "}
            <span className="text-gradient">
              {t("edu_title_highlight")}
            </span>
          </h2>
          <p className="section-subtitle">
            {t("edu_sub")}
          </p>
        </div>

        {/* Education Cards Grid */}
        <div className="education-cards-grid">
          {educations.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="education-card"
            >
              <div>
                <div className="education-header-row">
                  <span className="institution-badge">
                    {item.badge}
                  </span>
                  <span className="edu-year-tag">
                    <Calendar size={13} /> {item.year}
                  </span>
                </div>

                <div style={{ marginTop: "1rem", display: "flex", flexDirection: "column", gap: "0.35rem" }}>
                  <h3 className="education-institution-name">
                    {item.institution}
                  </h3>
                  <div className="education-department-name">
                    {item.degree} • {item.department}
                  </div>
                </div>

                <p className="education-degree-desc" style={{ marginTop: "0.75rem" }}>
                  {item.description}
                </p>
              </div>

              {/* Topics chips */}
              <div className="education-topics-chips">
                {item.topics.map((topic, i) => (
                  <span key={i} className="edu-topic-tag">
                    {topic}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Community Volunteer Activities */}
        <div className="activities-sub-header">
          <div className="section-badge" style={{ background: "rgba(244, 63, 94, 0.12)", borderColor: "rgba(244, 63, 94, 0.25)", color: "var(--accent-rose)" }}>
            <HeartHandshake size={14} /> {t("edu_volunteer_title")}
          </div>
          <h3 className="activities-title">
            {language === "kh" ? "ការចូលរួមសកម្មភាព & សិក្ខាសាលា" : "Leadership & Community"}
          </h3>
          <p className="section-subtitle">
            {t("edu_volunteer_sub")}
          </p>
        </div>

        <div className="activities-grid">
          {activities.map((act, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="activity-card"
            >
              <div>
                <div className="activity-role">
                  {act.role}
                </div>
                <h4 className="activity-title" style={{ marginTop: "0.25rem" }}>
                  {act.title}
                </h4>
                <p className="activity-desc" style={{ marginTop: "0.6rem" }}>
                  {act.description}
                </p>
              </div>

              <div className="activity-footer-organizer">
                <span>{act.organizer}</span>
                <span style={{ fontFamily: "var(--font-mono)" }}>{act.years}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}