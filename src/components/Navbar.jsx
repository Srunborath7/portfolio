import { useEffect, useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTelegram,
  FaMoon,
  FaSun,
  FaDownload
} from "react-icons/fa";

import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";

export default function Navbar() {

  const { dark, toggleTheme } = useTheme();
  const { language, toggleLanguage } = useLanguage();

  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {

    const handleScroll = () => {

      const sections = [
        "home",
        "about",
        "skills",
        "experience",
        "projects",
        "education",
        "contact"
      ];

      sections.forEach(section => {

        const element =
          document.getElementById(section);

        if (!element) return;

        const top = element.offsetTop - 100;
        const height = element.offsetHeight;

        if (
          window.scrollY >= top &&
          window.scrollY < top + height
        ) {
          setActiveSection(section);
        }
      });
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );

  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top glass-navbar ${dark ? "navbar-dark" : "navbar-light"
        }`}
    >
      <div className="container">

        {/* Logo */}

        <a
          href="#home"
          className="navbar-brand fw-bold d-flex align-items-center gap-2"
        >
          <img
            src="/logo.jpg"
            alt="avatar"
            className="avatar"
          />

          <span className="logo-text">
            SRUN BORATH
          </span>
        </a>

        {/* Hamburger */}

        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarMenu"
        >
          <span className="hamburger">
            ☰
          </span>
        </button>

        <div
          className="collapse navbar-collapse"
          id="navbarMenu"
        >

          <ul className="navbar-nav mx-auto">

            {[
              "home",
              "about",
              "skills",
              "experience",
              "projects",
              "education",
              "contact"
            ].map(item => (

              <li
                key={item}
                className="nav-item"
              >
                <a
                  href={`#${item}`}
                  className={`nav-link ${activeSection === item
                      ? "active-link"
                      : ""
                    }`}
                >
                  {item}
                </a>
              </li>

            ))}

          </ul>

          {/* Social */}

          <div className="d-flex align-items-center gap-2 social-links">

            <a
              href="https://github.com/Srunborath7"
              target="_blank"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/srun-borath-2980722bb/"
              target="_blank"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://t.me/Srun_Borath"
              target="_blank"
            >
              <FaTelegram />
            </a>
            <div className="language-flag">
              {language === "en"
                ? <img src="/kh_flag.png" alt="KH" />
                : <img src="/en_flag.png" alt="EN" />}
            </div>
            <button
              className="btn btn-outline-primary"
              onClick={toggleLanguage}
            >
              {language === "en"
                ? "KH"
                : "EN"}
            </button>

            <button
              className="btn btn-primary"
              onClick={toggleTheme}
            >
              {dark
                ? <FaSun />
                : <FaMoon />}
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
}