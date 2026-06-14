import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import translations from "../data/translations";
import TiltCard from "../context/TiltCard";

export default function About() {
  const { language } = useLanguage();
  const t = translations[language].about;
  const [projects, setProjects] = useState(0);
  const [experience, setExperience] = useState(0);

  useEffect(() => {
    let p = 0;
    let e = 0;

    const interval = setInterval(() => {
      if (p < 20) setProjects((prev) => prev + 1);
      if (e < 4) setExperience((prev) => prev + 1);

      p++;
      e++;

      if (p >= 20 && e >= 4) clearInterval(interval);
    }, 80);

    return () => clearInterval(interval);
  }, []);

  const skills = ["React", "Laravel", "Node.js", "Flutter", "Spring Boot"];

  return (
    <section className="about-section" id="about">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {t.title}
        </motion.h2>

        <div className="about-container">

          <TiltCard className="about-image-wrapper">
            <img
              src="/about.jpg"
              alt="SRUN BORATH"
              className="about-image"
            />
            <div className="glow"></div>
          </TiltCard>

          <div className="about-content">

            <p className="about-description">
              {t.description}
            </p>

            <div className="counter-grid">
              <div className="counter-box">
                <h3>{projects}+</h3>
                <p>Projects Completed</p>
              </div>

              <div className="counter-box">
                <h3>10+</h3>
                <p>Technologies</p>
              </div>
            </div>

            <div className="skills">
              {skills.map((skill, i) => (
                <span key={i} className="skill-badge">
                  {skill}
                </span>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}