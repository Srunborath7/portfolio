import React from "react";
import { motion } from "framer-motion";
import CV from "../../assets/cv.png";

function CVPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-slate-900 via-indigo-900 to-sky-800 text-white py-12 px-4">
      {/* CV preview with animation */}
      <motion.div
        className="w-full max-w-4xl aspect-[8.5/11] bg-white shadow-2xl rounded-2xl overflow-hidden border border-white/10"
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
      >
        <img
          src={CV}
          alt="CV Preview"
          className="w-full h-full"
        />
      </motion.div>

      {/* Download button with motion */}
      <motion.a
        href="/cv.pdf"
        download="Borath_CV.pdf"
        className="mt-6 inline-block bg-gradient-to-r from-rose-500 to-amber-400 text-white font-semibold px-6 py-3 rounded-2xl shadow-lg hover:shadow-xl transition-transform"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Download CV
      </motion.a>
    </div>
  );
}

export default CVPage;
