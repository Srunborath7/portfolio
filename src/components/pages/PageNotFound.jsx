import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white px-6 relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute w-[500px] h-[500px] bg-indigo-600/20 blur-[120px] top-[-120px] left-[-120px]" />
        <div className="absolute w-[500px] h-[500px] bg-rose-500/20 blur-[120px] bottom-[-120px] right-[-120px]" />
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 text-center max-w-xl"
      >
        {/* 404 Text */}
        <motion.h1
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-[120px] font-extrabold bg-gradient-to-r from-amber-400 to-rose-500 text-transparent bg-clip-text"
        >
          404
        </motion.h1>

        {/* Title */}
        <h2 className="text-3xl font-bold mb-3">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="text-gray-400 mb-8">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>

        {/* Button */}
        <Link to="/">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-400 to-rose-500 font-semibold shadow-lg"
          >
            Go Back Home
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
}