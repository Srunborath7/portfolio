import { motion } from "framer-motion";

function Education() {
  return (
    <motion.div
      className="max-w-4xl mx-auto my-16 p-6 bg-white/5 backdrop-blur-md rounded-2xl shadow-lg border border-white/10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-4xl md:text-5xl font-extrabold text-amber-300 mb-6 text-center">
        Education
      </h1>

      <div className="space-y-8">
        <motion.div
          className="bg-blue-950/80 p-4 rounded-xl shadow-md border border-amber-300"
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 120 }}
        >
          <h2 className="text-2xl font-bold text-white">
            Bachelor of Science in Computer Science
          </h2>
          <p className="text-white/80 mt-1">XYZ University, 2020 - 2024</p>
          <p className="text-white/70 mt-2">
            Specialized in Software Development, Web Technologies, and AI.
          </p>
        </motion.div>

        <motion.div
          className="bg-blue-950/80 p-4 rounded-xl shadow-md border border-amber-300"
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 120 }}
        >
          <h2 className="text-2xl font-bold text-white">
            High School Diploma
          </h2>
          <p className="text-white/80 mt-1">ABC High School, 2016 - 2020</p>
          <p className="text-white/70 mt-2">
            Focused on Science and Mathematics, graduated with honors.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Education;
