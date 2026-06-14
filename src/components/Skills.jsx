import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaLinux
} from "react-icons/fa";

import {
  SiJavascript,
  SiHtml5,
  SiFlutter,
  SiLaravel,
  SiSpringboot,
  SiMysql,
  SiMongodb
} from "react-icons/si";

import { FaCss3Alt } from "react-icons/fa";

export default function Skills() {

  const skillsData = [
    { name: "React.js", icon: <FaReact />, level: 90 },
    { name: "JavaScript", icon: <SiJavascript />, level: 95 },
    { name: "HTML5", icon: <SiHtml5 />, level: 95 },
    { name: "CSS3", icon: <FaCss3Alt />, level: 90 },
    { name: "Flutter", icon: <SiFlutter />, level: 85 },
    { name: "Node.js", icon: <FaNodeJs />, level: 88 },
    { name: "Laravel", icon: <SiLaravel />, level: 80 },
    { name: "Spring Boot", icon: <SiSpringboot />, level: 75 },
    { name: "MySQL", icon: <SiMysql />, level: 85 },
    { name: "MongoDB", icon: <SiMongodb />, level: 80 },
    { name: "Git", icon: <FaGitAlt />, level: 90 },
    { name: "Linux", icon: <FaLinux />, level: 70 }
  ];

  const [levels, setLevels] = useState(skillsData.map(() => 0));

  useEffect(() => {
    const interval = setInterval(() => {

      setLevels((prev) =>
        prev.map((val, i) => {
          if (val < skillsData[i].level) {
            return val + 1;
          }
          return val;
        })
      );

    }, 15);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="skills-section" id="skills">

      <motion.h2
        className="section-title container"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Skills
      </motion.h2>

      <div className="skills-grid container">

        {skillsData.map((skill, index) => (
          <motion.div
            key={index}
            className="skill-card"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.08 }}
          >

            <div className="skill-icon">
              {skill.icon}
            </div>

            <h3>{skill.name}</h3>

            {/* ANIMATED BAR */}
            <div className="skill-bar">
              <div
                className="skill-progress"
                style={{ width: `${levels[index]}%` }}
              />
            </div>

            <span className="skill-percent">
              {levels[index]}%
            </span>

          </motion.div>
        ))}

      </div>
    </section>
  );
}