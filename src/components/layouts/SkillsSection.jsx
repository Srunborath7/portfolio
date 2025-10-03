import { motion } from "framer-motion";
import { SiPython, SiLaravel, SiNodedotjs, SiReact, SiFlutter, SiMongodb } from "react-icons/si";
import { FaDatabase } from "react-icons/fa";
import { GiArtificialIntelligence } from "react-icons/gi";
import { SiCplusplus } from "react-icons/si";

const skills = [
  { name: "Python", icon: <SiPython className="text-5xl text-yellow-400" />, level: 65 },
  { name: "Laravel", icon: <SiLaravel className="text-5xl text-red-500" />, level: 70 },
  { name: "Node Express", icon: <SiNodedotjs className="text-5xl text-green-500" />, level: 60 },
  { name: "React", icon: <SiReact className="text-5xl text-blue-400" />, level: 75 },
  { name: "Flutter", icon: <SiFlutter className="text-5xl text-sky-400" />, level: 65 },
  { name: "C++", icon: <SiCplusplus className="text-5xl text-blue-600" />, level: 55 },
  { name: "AI / ML", icon: <GiArtificialIntelligence className="text-5xl text-purple-400" />, level: 50 },
  { name: "SQL", icon: <FaDatabase className="text-5xl text-orange-400" />, level: 70 },
  { name: "MongoDB", icon: <SiMongodb className="text-5xl text-green-600" />, level: 60 },
];

export default function SkillsSection() {
  return (
    <div className="bg-gradient-to-r from-slate-900 via-indigo-900 to-sky-800 py-16 px-6">
      <h2 className="text-3xl font-bold text-center text-white mb-12">
        🚀 My Skills
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="w-full p-6 rounded-2xl shadow-xl bg-white/5 backdrop-blur-md border border-white/10 flex flex-col items-center space-y-4 transition"
          >
            {/* Icon */}
            <div className="flex justify-center">{skill.icon}</div>

            {/* Name */}
            <h2 className="text-lg font-semibold text-white">{skill.name}</h2>

            {/* Circular Progress */}
            <div className="relative w-24 h-24">
              <svg className="w-24 h-24 -rotate-90">
                <circle
                  className="text-white/20"
                  strokeWidth="8"
                  stroke="currentColor"
                  fill="transparent"
                  r="40"
                  cx="48"
                  cy="48"
                />
                <motion.circle
                  className="text-amber-300"
                  strokeWidth="8"
                  stroke="currentColor"
                  fill="transparent"
                  r="40"
                  cx="48"
                  cy="48"
                  strokeDasharray={2 * Math.PI * 40}
                  strokeDashoffset={2 * Math.PI * 40 * (1 - skill.level / 100)}
                  initial={{ strokeDashoffset: 2 * Math.PI * 40 }}
                  animate={{ strokeDashoffset: 2 * Math.PI * 40 * (1 - skill.level / 100) }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                />
              </svg>
              <span className="absolute inset-0 flex items-center justify-center text-lg font-bold text-white">
                {skill.level}%
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
