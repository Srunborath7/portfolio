import { motion } from "framer-motion";
import { Briefcase, Code } from "lucide-react";

const experiences = [
  {
    company: "Sunrise Institute",
    role: "Coordinator",
    icon: <Briefcase className="text-amber-300" />,
    year: "2024 – 2025",
    tasks: [
      "Organized and managed school competitions and activities",
      "Solved student-related issues and provided support",
      "Communicated and coordinated effectively with students",
      "Created and managed class groups",
      "Monitored classroom activities and performance",
      "Designed certificates using Canva"
    ]
  },
  {
    company: "ICT Center",
    role: "Instructor",
    icon: <Code className="text-sky-400" />,
    year: "2025 – Present",
    tasks: [
      "Taught Python fundamentals, programming logic, and OOP",
      "Introduced Flask for basic web application development",
      "Taught backend development using PHP and Laravel",
      "Covered SQL and MongoDB database systems",
      "Explained jQuery and real-world backend workflows"
    ]
  }
];

export default function WorkExperience() {
  return (
    <div className="bg-gradient-to-br from-slate-950 via-indigo-950 to-sky-900 py-20 px-6 text-white">
      
      {/* Title */}
      <h2 className="text-4xl font-extrabold text-center mb-16">
        💼 Work Experience
      </h2>

      {/* Timeline */}
      <div className="relative max-w-5xl mx-auto before:absolute before:left-5 md:before:left-1/2 before:top-0 before:h-full before:w-1 before:bg-gradient-to-b before:from-amber-300 before:to-rose-400">
        
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className={`relative mb-16 flex flex-col md:flex-row ${
              index % 2 === 0 ? "md:justify-start" : "md:justify-end"
            }`}
          >
            {/* Dot */}
            <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-6 h-6 bg-amber-300 rounded-full shadow-lg"></div>

            {/* Card */}
            <div
              className={`mt-10 md:mt-0 w-full md:w-[45%] p-6 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 shadow-xl hover:scale-[1.03] transition ${
                index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
              }`}
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-3">
                <div className="text-2xl">{exp.icon}</div>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    {exp.role}
                  </h3>
                  <p className="text-amber-300 text-sm">
                    {exp.company}
                  </p>
                </div>
              </div>

              {/* Year */}
              <p className="text-white/60 text-sm italic mb-4">
                {exp.year}
              </p>

              {/* Tasks */}
              <ul className="space-y-2 text-white/80 text-sm">
                {exp.tasks.map((task, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-amber-300">•</span>
                    {task}
                  </li>
                ))}
              </ul>

              {/* Skills Tags */}
              {exp.company === "ICT Center" && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {["Python", "Flask", "Laravel", "MongoDB", "SQL"].map(
                    (skill, i) => (
                      <span
                        key={i}
                        className="bg-sky-400/20 text-sky-300 px-2 py-1 rounded-full text-xs"
                      >
                        {skill}
                      </span>
                    )
                  )}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}