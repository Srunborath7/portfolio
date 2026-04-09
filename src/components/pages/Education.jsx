import { useState } from "react";
import { motion } from "framer-motion";

function Education() {
  const [data] = useState([
    {
      institution: "University of Puthisastra",
      department: "Faculty of ICT",
      degree: "Bachelor of Information Communication & Technology",
      year: "2022 – Present",
      description:
        "Studying software development, databases, and system design with a strong focus on full-stack and mobile development. Experienced in Python, web development (frontend & backend), Android (Kotlin), Flutter, and currently exploring Linux, Artificial Intelligence (AI), and Machine Learning (ML), along with real-world project development."
    },

    // ICT FRONTEND
    {
      institution: "ICT Professional Center",
      department: "ICT Center",
      degree: "Frontend Development",
      year: "2023",
      description:
        "Learned modern UI development using HTML, CSS, JavaScript, and React. Focused on responsive design and interactive user interfaces."
    },

    // ICT BACKEND
    {
      institution: "ICT Professional Center",
      department: "ICT Center",
      degree: "Backend Development",
      year: "2024",
      description:
        "Studied server-side programming using PHP, Laravel, Node.js, and databases (MySQL, MongoDB). Built RESTful APIs and handled data processing."
    },

    // ICT FULLSTACK
    {
      institution: "ICT Professional Center",
      department: "ICT Center",
      degree: "Full-Stack Development",
      year: "2025",
      description:
        "Integrated frontend and backend skills to build complete web applications. Developed full-stack systems using React, Laravel, and Node.js."
    },

    // ICT UX/UI
    {
      institution: "ICT Professional Center",
      department: "ICT UX/UI Design",
      degree: "UX/UI Design",
      year: "2024",
      description:
        "Focused on user-centered design, wireframing, and prototyping using Figma. Designed modern and user-friendly interfaces."
    },

    {
      institution: "Standford American School",
      department: "English Program",
      degree: "General English",
      year: "2022 – 2024",
      description:
        "Improved English communication skills including speaking, writing, and professional communication."
    },

    {
      institution: "Tech Design Center",
      department: "Computer Fundamentals",
      degree: "Basic Computer Course",
      year: "2023",
      description:
        "Learned fundamental computer skills including Microsoft Office, internet usage, and IT basics."
    }
  ]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-950 via-indigo-950 to-sky-900 text-white py-20 px-6">
      
      <motion.h1
        className="flex text-4xl font-extrabold text-center mb-16 items-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        🎓Education
      </motion.h1>

      <div className="relative w-full max-w-4xl before:content-[''] before:absolute before:left-5 md:before:left-1/2 before:top-0 before:h-full before:w-1 before:bg-gradient-to-b before:from-amber-300 before:to-rose-400">
        
        {data.map((item, index) => (
          <motion.div
            key={index}
            className={`relative mb-12 flex flex-col md:flex-row ${
              index % 2 === 0 ? "md:justify-start" : "md:justify-end"
            }`}
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            {/* Dot */}
            <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 bg-amber-300 w-5 h-5 rounded-full"></div>

            {/* Card */}
            <div
              className={`mt-10 md:mt-0 bg-white/10 backdrop-blur-lg p-6 rounded-xl w-full md:w-[45%] ${
                index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
              }`}
            >
              {/* Department 🔥 */}
              <p className="text-sm text-amber-300 mb-1">
                {item.department}
              </p>

              <h2 className="text-xl font-bold text-white">
                {item.degree}
              </h2>

              <p className="text-white/80">{item.institution}</p>
              <p className="text-white/60 text-sm italic">{item.year}</p>

              <p className="mt-3 text-white/80 text-sm">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Education;