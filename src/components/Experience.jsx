import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaChalkboardTeacher,
  FaUsers
} from "react-icons/fa";

export default function Experience() {
  const experiences = [
    {
      company: "ICT Center",
      period: "2025 - Present",
      icon: <FaChalkboardTeacher />,
      description:
        "Python Instructor, Flask, Laravel, MongoDB, Student Project Mentoring and Technical Training."
    },
    {
      company: "Sunrise Institute",
      period: "2024 - 2025",
      icon: <FaUsers />,
      description:
        "Training Coordinator, Student Support, Academic Activities and Event Management."
    }
  ];

  return (
    <section className="experience-section" id="experience">

      <motion.h2
        className="section-title container"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Experience
      </motion.h2>

      <div className="experience-timeline">

        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="experience-card"
            initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="experience-icon">
              {exp.icon}
            </div>

            <div className="experience-content">

              <div className="experience-header">
                <h3>{exp.company}</h3>

                <span className="experience-date">
                  {exp.period}
                </span>
              </div>

              <p>{exp.description}</p>

            </div>
          </motion.div>
        ))}

      </div>
    </section>
  );
}