import { motion } from "framer-motion";
import {
  SiPython, SiLaravel, SiNodedotjs, SiReact, SiFlutter,
  SiMongodb, SiJavascript, SiHtml5, SiCss3, SiGit, SiFigma,SiKotlin,
} from "react-icons/si";
import { FaChartBar, FaDatabase } from "react-icons/fa";
import { GiArtificialIntelligence } from "react-icons/gi";
import { SiCplusplus } from "react-icons/si";

const skills = [
  // Frontend
  { name: "HTML", icon: <SiHtml5 />, level: 80, category: "Frontend" },
  { name: "CSS", icon: <SiCss3 />, level: 75, category: "Frontend" },
  { name: "JavaScript", icon: <SiJavascript />, level: 75, category: "Frontend" },
  { name: "React", icon: <SiReact />, level: 75, category: "Frontend" },

  // Backend
  { name: "Laravel", icon: <SiLaravel />, level: 70, category: "Backend" },
  { name: "Node.js", icon: <SiNodedotjs />, level: 65, category: "Backend" },

  // Mobile
  { name: "Flutter", icon: <SiFlutter />, level: 60, category: "Mobile" },
  { name: "Kotlin", icon: <SiKotlin />, level: 60, category: "Mobile" },


  // Programming
  { name: "Python", icon: <SiPython />, level: 70, category: "Programming" },
  { name: "C++", icon: <SiCplusplus />, level: 55, category: "Programming" },

  // AI
  { name: "AI / ML", icon: <GiArtificialIntelligence />, level: 50, category: "AI" },

  // Database
  { name: "SQL", icon: <FaDatabase />, level: 70, category: "Database" },
  { name: "MongoDB", icon: <SiMongodb />, level: 60, category: "Database" },

  // Tools
  { name: "Git", icon: <SiGit />, level: 70, category: "Tools" },
  { name: "Figma", icon: <SiFigma />, level: 60, category: "Tools" },
  { name: "Power BI", icon: <FaChartBar />, level: 65, category: "Tools" },
];

export default function SkillsSection() {
  return (
    <div className="bg-gradient-to-br from-slate-950 via-indigo-950 to-sky-900 py-20 px-6">
      
      <h2 className="text-4xl font-extrabold text-center text-white mb-16">
        🚀 My Skills
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {skills.map((skill, index) => {
          const radius = 40;
          const circumference = 2 * Math.PI * radius;

          return (
            <motion.div
              key={index}
              whileHover={{ scale: 1.08 }}
              className="group relative p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl flex flex-col items-center transition duration-300 hover:shadow-amber-400/30"
            >
              {/* Category */}
              <span className="absolute top-3 right-3 text-xs bg-amber-300/20 text-amber-300 px-2 py-1 rounded-full">
                {skill.category}
              </span>

              {/* Icon */}
              <div className="text-5xl text-white group-hover:text-amber-300 transition mb-3">
                {skill.icon}
              </div>

              {/* Name */}
              <h3 className="text-lg font-semibold text-white">
                {skill.name}
              </h3>

              {/* Progress Circle */}
              <div className="relative w-24 h-24 mt-4">
                <svg className="w-24 h-24 -rotate-90">
                  <circle
                    strokeWidth="8"
                    stroke="rgba(255,255,255,0.1)"
                    fill="transparent"
                    r={radius}
                    cx="48"
                    cy="48"
                  />

                  <motion.circle
                    strokeWidth="8"
                    stroke="url(#gradient)"
                    fill="transparent"
                    r={radius}
                    cx="48"
                    cy="48"
                    strokeDasharray={circumference}
                    strokeDashoffset={circumference}
                    animate={{
                      strokeDashoffset:
                        circumference * (1 - skill.level / 100),
                    }}
                    transition={{ duration: 1.5 }}
                  />

                  {/* Gradient */}
                  <defs>
                    <linearGradient id="gradient">
                      <stop offset="0%" stopColor="#fbbf24" />
                      <stop offset="100%" stopColor="#fb7185" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Percentage */}
                <span className="absolute inset-0 flex items-center justify-center text-white font-bold">
                  {skill.level}%
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}