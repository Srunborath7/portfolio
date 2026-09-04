import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Home, HelpCircle } from "lucide-react";
import { useApp } from "../../context/AppContext";
import "../../styles/pageNotFound.css";

export default function PageNotFound() {
  const { language } = useApp();

  return (
    <section className="not-found-section">
      {/* Background glow */}
      <div className="not-found-glow" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="not-found-card"
      >
        <div className="not-found-icon-box">
          <HelpCircle size={44} />
        </div>

        <div>
          <div className="not-found-code text-gradient">
            404
          </div>
          <h1 className="not-found-title" style={{ marginTop: "0.5rem" }}>
            {language === "kh" ? "រកមិនឃើញទំព័រនេះទេ" : "Page Not Found"}
          </h1>
          <p className="not-found-desc" style={{ marginTop: "0.5rem" }}>
            {language === "kh"
              ? "ទំព័រដែលលោកអ្នកកំពុងស្វែងរកមិនមាន ឬត្រូវបានផ្លាស់ប្តូរទីតាំង។"
              : "The page you are looking for might have been removed, had its name changed, or is temporarily unavailable."}
          </p>
        </div>

        <Link
          to="/"
          className="btn-primary-gradient"
          style={{ width: "100%", justifyContent: "center" }}
        >
          <Home size={16} />
          <span>{language === "kh" ? "ត្រឡប់ទៅទំព័រដើម" : "Back to Home"}</span>
        </Link>
      </motion.div>
    </section>
  );
}
