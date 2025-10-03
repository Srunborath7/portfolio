import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Instagram } from "lucide-react";
import imageUrl from "../../assets/logo.jpg";

export default function HeroCover({
  name = "Srun Borath",
  title = "Web Developer & Mobile Developer",
  socials = [
    { type: "github", href: "https://github.com/Srunborath7" },
    { type: "linkedin", href: "#" },
    { type: "twitter", href: "#" },
  ],
  ctaText = "View Portfolio",
  ctaHref = "#portfolio",
}) {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [speed, setSpeed] = useState(150); // typing speed

  useEffect(() => {
    const fullText = name;
    let timer;

    if (!isDeleting && displayText.length < fullText.length) {
      // typing forward
      timer = setTimeout(() => {
        setDisplayText(fullText.substring(0, displayText.length + 1));
      }, speed);
    } else if (isDeleting && displayText.length > 0) {
      // deleting
      timer = setTimeout(() => {
        setDisplayText(fullText.substring(0, displayText.length - 1));
      }, speed / 2);
    } else if (!isDeleting && displayText.length === fullText.length) {
      // pause before deleting
      timer = setTimeout(() => setIsDeleting(true), 1000);
    } else if (isDeleting && displayText.length === 0) {
      // restart typing
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, loopNum, name, speed]);

  const iconFor = (type) => {
    switch (type) {
      case "github":
        return <Github className="w-5 h-5" />;
      case "linkedin":
        return <Linkedin className="w-5 h-5" />;
      case "twitter":
        return <Twitter className="w-5 h-5" />;
      case "instagram":
        return <Instagram className="w-5 h-5" />;
      default:
        return null;
    }
  };

  return (
    <div className="h-screen relative overflow-hidden bg-gradient-to-r from-slate-900 via-indigo-900 to-sky-800 text-white">
      {/* Cursor blink animation */}
      <style>{`
        @keyframes blink {
          0%, 50% { border-color: transparent; }
          51%, 100% { border-color: white; }
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left - Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-3 bg-white/6 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium ring-1 ring-white/10">
              <span className="h-2 w-2 rounded-full bg-emerald-400 block" />
              <span>Open for freelance & full-time</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
              Hi, I’m{" "}
              <span
                style={{
                  borderRight: "2px solid white",
                  animation: "blink 1s step-end infinite",
                }}
                className="bg-gradient-to-r from-rose-300 via-amber-200 to-white bg-clip-text text-transparent"
              >
                {displayText}
              </span>
            </h1>

            <p className="max-w-xl text-lg text-slate-100/90">{title}</p>

            <div className="flex items-center gap-4">
              <a
                href={ctaHref}
                className="inline-flex items-center gap-3 rounded-2xl bg-white text-slate-900 font-semibold px-5 py-3 shadow-lg hover:translate-y-[-2px] transition-transform"
              >
                {ctaText}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>

            <a
  href="https://t.me/Srun_Borath"
  target="_blank"
  rel="noopener noreferrer"
  className="text-sm underline underline-offset-4 text-white/90"
>
  Contact me on Telegram
</a>
            </div>

            {/* Socials */}
            <nav aria-label="Social links">
              <ul className="flex items-center gap-3 mt-4">
                {socials.map((s, idx) => (
                  <li key={idx}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-white/6 ring-1 ring-white/8 hover:bg-white/10 transition"
                      aria-label={s.type}
                    >
                      {iconFor(s.type)}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>

          {/* Right - Image / Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-md">
              <div
                className="absolute -inset-0 rounded-2xl blur-3xl opacity-30"
                style={{
                  background: "linear-gradient(90deg,#ff7a7a, #7c5cff)",
                }}
              />

              <div className="relative z-10 p-6 rounded-2xl bg-white/5 ring-1 ring-white/6 backdrop-blur">
                <div className="w-full aspect-square rounded-xl overflow-hidden shadow-2xl">
                  <img
                    src={imageUrl}
                    alt={`${name} portrait`}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="mt-4">
                  <div className="text-lg font-semibold">{name}</div>
                  <div className="text-sm text-white/80 mt-1">{title}</div>

                  <div className="mt-4 flex items-center gap-3">
                    <a
                      href={ctaHref}
                      className="text-sm font-medium underline underline-offset-4"
                    >
                      See work
                    </a>
                    <a href="#resume" className="text-sm text-white/80">
                      • Resume
                    </a>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 left-6 z-0 transform rotate-3">
                <div className="px-3 py-1 rounded-full bg-white/6 text-xs font-semibold">
                  Available • Remote
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative SVG wave */}
      <svg
        className="absolute bottom-0 left-0 w-full"
        viewBox="0 0 1440 80"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M0,40 C360,120 1080,-40 1440,40 L1440,80 L0,80 Z"
          fill="rgba(255,255,255,0.04)"
        />
      </svg>
    </div>
  );
}
