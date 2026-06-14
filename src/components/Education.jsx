import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaUniversity,
  FaBookOpen
} from "react-icons/fa";

export default function Education() {
  const education = [
    {
      school: "University of Puthisastra",
      period: "2022 - Present",
      degree: "Bachelor of Information and Communication Technology (ICT)",
      icon: <FaUniversity />,
      description:
        "Focused on software development, web technologies, databases, and mobile application development."
    },
    {
      school: "Stanford American School",
      period: "2022 - 2024",
      degree: "General English Program",
      icon: <FaBookOpen />,
      description:
        "Enhanced communication, presentation, and professional English skills."
    }
  ];

  return (
    <section className="education-section" id="education">
      <div className="container">

        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Education
        </motion.h2>

        <div className="education-grid">

          {education.map((item, index) => (
            <motion.div
              key={index}
              className="education-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              <div className="education-icon">
                {item.icon}
              </div>

              <span className="education-period">
                {item.period}
              </span>

              <h3>{item.school}</h3>

              <h4>{item.degree}</h4>

              <p>{item.description}</p>

              <div className="education-status">
                <FaGraduationCap />
                <span>
                  {item.school === "University of Puthisastra"
                    ? "Currently Studying"
                    : "Completed"}
                </span>
              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}