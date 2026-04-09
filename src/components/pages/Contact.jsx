import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import {
  FaTelegramPlane,
  FaPhoneAlt,
  FaFacebookF,
  FaEnvelope,
} from "react-icons/fa";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !message) return;

    setLoading(true);

    emailjs
      .send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        {
          from_email: email,
          message,
          to_email: "your@email.com",
        },
        "YOUR_PUBLIC_KEY"
      )
      .then(() => {
        setSent(true);
        setLoading(false);
        setEmail("");
        setMessage("");
        setTimeout(() => setSent(false), 3000);
      })
      .catch(() => setLoading(false));
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center px-6 py-20 text-white overflow-hidden bg-gradient-to-r from-slate-900 via-indigo-900 to-sky-800">

      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute w-[500px] h-[500px] bg-indigo-600/20 blur-[120px] top-[-100px] left-[-100px]" />
        <div className="absolute w-[500px] h-[500px] bg-rose-500/20 blur-[120px] bottom-[-100px] right-[-100px]" />
      </div>

      {/* Container */}
      <div className="relative z-10 w-full max-w-6xl grid md:grid-cols-2 gap-10">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-6"
        >
          <h1 className="text-5xl font-bold leading-tight">
            Let’s Build Something <span className="text-amber-400">Amazing</span>
          </h1>

          <p className="text-gray-400 text-lg">
            Feel free to reach out anytime. I usually respond within 24 hours.
          </p>

          {/* Contact Cards */}
          <div className="space-y-4">

            <a
              href="https://t.me/Srun_Borath"
              className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition"
            >
              <FaTelegramPlane className="text-blue-400 text-2xl" />
              <span>@Srun_Borath</span>
            </a>

            <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5">
              <FaPhoneAlt className="text-green-400 text-2xl" />
              <span>+855 974 242 291</span>
            </div>

            <a
              href="https://www.facebook.com/srunborath007/"
              className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition"
            >
              <FaFacebookF className="text-blue-500 text-2xl" />
              <span>Facebook Profile</span>
            </a>
          </div>
        </motion.div>

        {/* RIGHT SIDE FORM */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          className="p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl space-y-6"
        >
          <div className="flex items-center gap-3">
            <FaEnvelope className="text-amber-400 text-xl" />
            <h2 className="text-2xl font-semibold">Send Message</h2>
          </div>

          {/* Email */}
          <input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 rounded-xl bg-white/10 outline-none focus:ring-2 focus:ring-amber-400"
          />

          {/* Message */}
          <textarea
            rows={5}
            placeholder="Write your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-3 rounded-xl bg-white/10 outline-none focus:ring-2 focus:ring-amber-400"
          />

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl font-semibold transition bg-gradient-to-r from-amber-400 to-rose-500 hover:scale-[1.02]"
          >
            {loading
              ? "Sending..."
              : sent
              ? "Message Sent ✅"
              : "Send Message"}
          </button>
        </motion.form>
      </div>
    </div>
  );
}