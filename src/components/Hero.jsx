import { useEffect, useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTelegram,
  FaDownload,
  FaEnvelope
} from "react-icons/fa";

import { useLanguage } from "../context/LanguageContext";
import translations from "../data/translations";

export default function Hero() {
  const { language } = useLanguage();
  const t = translations[language];

  const titles =
    language === "en"
      ? [
        "Web Developer",
        "Mobile App Developer",
        "Full Stack Developer",
        "React Developer",
        "Flutter Developer"
      ]
      : [
        "អ្នកអភិវឌ្ឍន៍វេបសាយ",
        "អ្នកអភិវឌ្ឍន៍កម្មវិធីទូរស័ព្ទ",
        "អ្នកអភិវឌ្ឍន៍ Full Stack",
        "អ្នកអភិវឌ្ឍន៍ React",
        "អ្នកអភិវឌ្ឍន៍ Flutter"
      ];

  const [text, setText] = useState("");
  const [titleIndex, setTitleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = titles[titleIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(currentTitle.substring(0, text.length + 1));

        if (text === currentTitle) {
          setTimeout(() => {
            setIsDeleting(true);
          }, 1500);
        }
      } else {
        setText(currentTitle.substring(0, text.length - 1));

        if (text === "") {
          setIsDeleting(false);
          setTitleIndex((prev) => (prev + 1) % titles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, titleIndex, titles]);

  return (
    <section id="home" className="hero">
      <div className="hero-content container">

        <div className="hero-left">

          <span className="hero-tag">
            👋 {language === "en"
              ? "Welcome To My Portfolio"
              : "ស្វាគមន៍មកកាន់ Portfolio របស់ខ្ញុំ"}
          </span>

          <h1>{t.name}</h1>

          <h2 className="typing-text">
            {text}
            <span className="cursor">|</span>
          </h2>

          <p>
            {language === "en"
              ? "Passionate Full Stack Developer specializing in React, Flutter, Node.js, Laravel and Spring Boot. I build modern, scalable web and mobile applications."
              : "ជាអ្នកអភិវឌ្ឍន៍ Full Stack ដែលមានចំណង់ចំណូលចិត្តក្នុង React, Flutter, Node.js, Laravel និង Spring Boot។ ខ្ញុំបង្កើត Web និង Mobile Application ទំនើប និងអាចពង្រីកបាន។"}
          </p>

          <div className="hero-buttons">

            <a
              href="/srun_borath_cv.pdf"
              download
              className="btn-primary-custom"
            >
              <FaDownload />
              {language === "en"
                ? "Download CV"
                : "ទាញយក CV"}
            </a>

            <a
              href="#contact"
              className="btn-outline-custom"
            >
              <FaEnvelope />
              {language === "en"
                ? "Contact Me"
                : "ទំនាក់ទំនង"}
            </a>

          </div>

          <div className="hero-social">

            <a
              href="https://github.com/Srunborath7"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/srun-borath-2980722bb/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://t.me/Srun_Borath"
              target="_blank"
              rel="noreferrer"
            >
              <FaTelegram />
            </a>

          </div>

          <div className="hero-stats">

            <div className="stat-card">
              <h3>10+</h3>
              <span>
                {language === "en"
                  ? "Technologies"
                  : "បច្ចេកវិទ្យា"}
              </span>
            </div>

            <div className="stat-card">
              <h3>20+</h3>
              <span>
                {language === "en"
                  ? "Projects"
                  : "គម្រោង"}
              </span>
            </div>

            <div className="stat-card">
              <h3>4+</h3>
              <span>
                {language === "en"
                  ? "Years Learning"
                  : "ឆ្នាំសិក្សា"}
              </span>
            </div>

          </div>

        </div>

        <div className="hero-right">

          <div className="profile-wrapper">

            <img
              src="/cover.jpg"
              alt="SRUN BORATH"
              className="hero-image"
            />

            <div className="floating react">
              React
            </div>

            <div className="floating flutter">
              Flutter
            </div>

            <div className="floating node">
              Node.js
            </div>
            <div className="floating python">
              Python
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}