import { motion } from "framer-motion";
import { Briefcase, Code, Sparkles, Building2, Calendar, CheckCircle2 } from "lucide-react";
import { useApp } from "../../context/AppContext";
import { experienceData } from "../../data/experienceData";
import "../../styles/workExperience.css";

const iconMap = {
  Code: <Code size={24} style={{ color: "var(--accent-amber)" }} />,
  Briefcase: <Briefcase size={24} style={{ color: "var(--accent-sky)" }} />,
  Building2: <Building2 size={24} style={{ color: "var(--accent-rose)" }} />,
};

export default function WorkExperience() {
  const { t, language } = useApp();

  const experiences = experienceData.map((exp) => ({
    company: exp.company,
    role: exp.role[language] || exp.role.en,
    type: exp.type[language] || exp.type.en,
    period: exp.period[language] || exp.period.en,
    status: exp.status[language] || exp.status.en,
    description: exp.description[language] || exp.description.en,
    tasks: exp.tasks[language] || exp.tasks.en,
    skills: exp.skills,
    icon: iconMap[exp.iconType] || <Briefcase size={24} style={{ color: "var(--accent-amber)" }} />,
  }));

  return (
    <section className="work-experience-section">
      {/* Background glow */}
      <div className="experience-glow" />

      <div className="app-container">
        {/* Section Header */}
        <div className="section-header-block">
          <div className="section-badge">
            <Sparkles size={14} /> {t("exp_badge")}
          </div>
          <h2 className="section-title">
            {t("exp_title_pre")}{" "}
            <span className="text-gradient">
              {t("exp_title_highlight")}
            </span>
          </h2>
          <p className="section-subtitle">
            {t("exp_sub")}
          </p>
        </div>

        {/* Timeline Container */}
        <div className="experience-timeline-container">
          <div className="experience-timeline">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="timeline-item"
              >
                {/* Timeline Indicator Dot */}
                <div className="timeline-dot">
                  <div className="timeline-dot-ping" />
                </div>

                {/* Card Container */}
                <div className="experience-card">
                  {/* Header row */}
                  <div className="experience-card-header">
                    <div className="experience-role-info">
                      <div className="experience-icon-box">
                        {exp.icon}
                      </div>
                      <div>
                        <h3 className="experience-title">
                          {exp.role}
                        </h3>
                        <div className="experience-company-line">
                          {exp.company} <span className="experience-type-tag">• {exp.type}</span>
                        </div>
                      </div>
                    </div>

                    <div className="experience-meta-tags">
                      <span className="period-badge">
                        <Calendar size={13} /> {exp.period}
                      </span>
                      <span
                        className={`status-badge ${
                          exp.status === "Current Role" || exp.status === "តួនាទីបច្ចុប្បន្ន"
                            ? "current"
                            : ""
                        }`}
                      >
                        {exp.status}
                      </span>
                    </div>
                  </div>

                  <p className="experience-desc">
                    {exp.description}
                  </p>

                  {/* Key Responsibilities */}
                  <div className="experience-tasks-block">
                    <h4 className="experience-tasks-title">
                      {t("exp_resp_title")}
                    </h4>
                    <div className="task-list">
                      {exp.tasks.map((task, i) => (
                        <div key={i} className="task-item">
                          <CheckCircle2 size={15} className="task-item-icon" />
                          <span>{task}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Skills tags */}
                  <div className="experience-skills-chips">
                    {exp.skills.map((skill, i) => (
                      <span key={i} className="exp-skill-chip">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}