import { useState } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Download,
  Eye,
  FileText,
  Sparkles,
  Send,
  Briefcase,
  GraduationCap,
  Layers,
  Phone,
  Mail,
  MapPin,
  X,
} from "lucide-react";
import CVImage from "../../assets/cv.png";
import { useApp } from "../../context/AppContext";
import { profileData } from "../../data/profileData";
import "../../styles/cvPage.css";

export default function CVPage() {
  const { t, language } = useApp();
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/cv.pdf";
    link.download = "SRUN_Borath_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="cv-page-section">
      {/* Ambient background glow */}
      <div className="cv-ambient-glow" />

      <div className="app-container">
        {/* Page Header */}
        <div className="section-header-block">
          <div className="section-badge">
            <Sparkles size={14} /> {t("cv_badge")}
          </div>
          <h1 className="section-title">
            {t("cv_title_pre")}{" "}
            <span className="text-gradient">
              {t("cv_title_highlight")}
            </span>
          </h1>
          <p className="section-subtitle">
            {t("cv_sub")}
          </p>
        </div>

        {/* Action Bar */}
        <div className="cv-action-bar-top">
          <button
            onClick={handleDownload}
            className="btn-primary-gradient"
          >
            <Download size={18} />
            <span>{t("cv_download")}</span>
          </button>

          <a
            href={profileData.contact.telegramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary-outline"
          >
            <Send size={18} />
            <span>{t("cv_inquire")}</span>
          </a>
        </div>

        {/* Layout Grid */}
        <div className="cv-layout-grid">
          {/* Left: Document Viewer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="cv-viewer-card"
          >
            <div className="cv-viewer-header">
              <div className="cv-viewer-status">
                <FileText size={16} style={{ color: "var(--accent-amber)" }} />
                <span>SRUN_Borath_Resume.pdf</span>
              </div>
              <button
                onClick={() => setIsFullscreen(true)}
                className="btn-secondary-outline"
                style={{ padding: "0.35rem 0.75rem", fontSize: "0.75rem" }}
              >
                <Eye size={14} />
                <span>{language === "kh" ? "មើលពេញអេក្រង់" : "Fullscreen"}</span>
              </button>
            </div>

            <div
              className="cv-preview-image-box"
              onClick={() => setIsFullscreen(true)}
            >
              <img
                src={CVImage}
                alt="SRUN Borath Resume Preview"
                className="cv-preview-img"
              />
              <div className="cv-preview-overlay">
                <div className="cv-preview-overlay-btn">
                  <Eye size={18} />
                  <span>{language === "kh" ? "ចុចដើម្បីពង្រីក" : "Click to Enlarge"}</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Key Qualifications Panel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="cv-metadata-panel"
          >
            {/* Summary Highlights */}
            <div className="cv-meta-block">
              <h3 className="cv-meta-title">
                <Briefcase size={20} className="cv-meta-title-icon" />
                <span>{language === "kh" ? "សង្ខេបបទពិសោធន៍សំខាន់ៗ" : "Executive Summary"}</span>
              </h3>
              <div className="cv-summary-list">
                <div className="cv-summary-item">
                  <span className="cv-bullet">✦</span>
                  <span>{language === "kh" ? "និស្សិតឆ្នាំទី៤ ផ្នែក ICT សាកលវិទ្យាល័យពុទ្ធិសាស្ត្រ" : "4th-Year ICT Student @ University of Puthisastra"}</span>
                </div>
                <div className="cv-summary-item">
                  <span className="cv-bullet">✦</span>
                  <span>{language === "kh" ? "គ្រូបង្រៀន Python & Backend Web Development នៅ ICT Center" : "Instructor of Python & Backend Web Development @ ICT Center"}</span>
                </div>
                <div className="cv-summary-item">
                  <span className="cv-bullet">✦</span>
                  <span>{language === "kh" ? "អ្នកហាត់ការ Web Developer លើប្រព័ន្ធ ERP Odoo 19 នៅ RMA Cambodia" : "Web Developer Intern (Odoo ERP v19) @ RMA Cambodia"}</span>
                </div>
              </div>
            </div>

            {/* Education & Contacts */}
            <div className="cv-meta-block">
              <h3 className="cv-meta-title">
                <GraduationCap size={20} className="cv-meta-title-icon" />
                <span>{language === "kh" ? "ព័ត៌មានទំនាក់ទំនងផ្ទាល់" : "Direct Contact Details"}</span>
              </h3>
              <div className="cv-summary-list">
                <div className="cv-summary-item">
                  <Phone size={15} style={{ color: "var(--accent-amber)" }} />
                  <a href={`tel:${profileData.contact.phoneClean}`} style={{ color: "inherit" }}>
                    {profileData.contact.phoneDisplay}
                  </a>
                </div>
                <div className="cv-summary-item">
                  <Mail size={15} style={{ color: "var(--accent-amber)" }} />
                  <a href={`mailto:${profileData.contact.email}`} style={{ color: "inherit" }}>
                    {profileData.contact.email}
                  </a>
                </div>
                <div className="cv-summary-item">
                  <MapPin size={15} style={{ color: "var(--accent-amber)" }} />
                  <span>{profileData.contact.addressDetail[language] || profileData.contact.addressDetail.en}</span>
                </div>
              </div>

              <div style={{ marginTop: "1rem", display: "flex", gap: "0.75rem" }}>
                <Link to="/contact" className="btn-primary-gradient" style={{ flex: 1 }}>
                  <Send size={15} />
                  <span>{language === "kh" ? "ទាក់ទងមកខ្ញុំ" : "Contact Borath"}</span>
                </Link>
                <Link to="/projects" className="btn-secondary-outline" style={{ flex: 1 }}>
                  <Layers size={15} />
                  <span>{language === "kh" ? "មើលគម្រោង" : "View Projects"}</span>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Fullscreen Modal Lightbox */}
      {isFullscreen &&
        createPortal(
          <div
            className="cv-lightbox-backdrop"
            onClick={() => setIsFullscreen(false)}
          >
            <div
              className="cv-lightbox-content"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsFullscreen(false)}
                className="cv-lightbox-close"
                aria-label="Close Preview"
              >
                <X size={20} />
              </button>
              <img
                src={CVImage}
                alt="SRUN Borath Resume Fullscreen"
                style={{ width: "100%", height: "auto", display: "block", borderRadius: "var(--radius-lg)" }}
              />
            </div>
          </div>,
          document.body
        )}
    </section>
  );
}
