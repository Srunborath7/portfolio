import { motion } from "framer-motion";
import {
  UserCheck,
  Building,
  Phone,
  Mail,
  Send,
  Sparkles,
  Quote,
} from "lucide-react";
import { useApp } from "../../context/AppContext";
import { referencesData } from "../../data/referencesData";
import "../../styles/referencesSection.css";

export default function ReferencesSection() {
  const { t, language } = useApp();

  return (
    <section className="references-section" id="references">
      {/* Glow */}
      <div className="references-glow" />

      <div className="app-container">
        {/* Section Header */}
        <div className="section-header-block">
          <div className="section-badge">
            <Sparkles size={14} /> {t("ref_badge")}
          </div>
          <h2 className="section-title">
            {t("ref_title_pre")}{" "}
            <span className="text-gradient">
              {t("ref_title_highlight")}
            </span>
          </h2>
          <p className="section-subtitle">
            {t("ref_sub")}
          </p>
        </div>

        {/* References Grid */}
        <div className="references-grid">
          {referencesData.map((ref, idx) => {
            const name = typeof ref.name === "object" ? (ref.name[language] || ref.name.en) : ref.name;
            const title = typeof ref.title === "object" ? (ref.title[language] || ref.title.en) : (ref.position?.[language] || ref.title || "");
            const institution = typeof ref.institution === "object" ? (ref.institution[language] || ref.institution.en) : ref.institution;
            const endorsement = ref.endorsement ? (ref.endorsement[language] || ref.endorsement.en) : "";
            const phoneClean = ref.phoneClean || ref.phone?.replace(/[\s+]/g, "") || "";
            const telegramUrl = ref.telegram || (phoneClean ? `https://t.me/+${phoneClean}` : "#");

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="reference-card"
              >
                <div>
                  <div className="reference-header">
                    <div className="reference-icon-avatar">
                      <UserCheck size={28} />
                    </div>
                    <div>
                      <h3 className="reference-name">{name}</h3>
                      <div className="reference-position">{title}</div>
                      <div className="reference-institution" style={{ display: "flex", alignItems: "center", gap: "0.25rem", marginTop: "0.2rem" }}>
                        <Building size={13} />
                        <span>{institution}</span>
                      </div>
                    </div>
                  </div>

                  {endorsement && (
                    <div style={{ marginTop: "1rem", padding: "0.75rem 1rem", borderRadius: "var(--radius-md)", background: "var(--bg-secondary)", borderLeft: "3px solid var(--accent-amber)", fontSize: "0.8rem", color: "var(--text-secondary)", fontStyle: "italic", display: "flex", gap: "0.5rem" }}>
                      <Quote size={16} style={{ color: "var(--accent-amber)", flexShrink: 0, marginTop: "0.1rem" }} />
                      <span>{endorsement}</span>
                    </div>
                  )}

                  <div className="reference-contacts-box" style={{ marginTop: "1rem" }}>
                    <div className="reference-contact-line">
                      <Mail size={15} className="ref-icon" />
                      <a href={`mailto:${ref.email}`} style={{ color: "inherit" }}>
                        {ref.email}
                      </a>
                    </div>
                    <div className="reference-contact-line">
                      <Phone size={15} className="ref-icon" />
                      <a href={`tel:${ref.phone?.replace(/\s+/g, '')}`} style={{ color: "inherit" }}>
                        {ref.phoneDisplay || ref.phone}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="reference-actions">
                  <a
                    href={`mailto:${ref.email}`}
                    className="ref-action-email"
                  >
                    <Mail size={14} />
                    <span>{t("ref_email_btn")}</span>
                  </a>
                  <a
                    href={telegramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ref-action-telegram"
                  >
                    <Send size={14} />
                    <span>{t("ref_telegram_btn")}</span>
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
