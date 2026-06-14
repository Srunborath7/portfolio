import {
  FaGithub,
  FaLinkedin,
  FaTelegram,
  FaArrowUp
} from "react-icons/fa";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Brand */}
        <div className="footer-brand">
          <h3>SRUN BORATH</h3>

          <p>
            Full Stack Developer | Web Developer |
            Mobile App Developer
          </p>
        </div>

        {/* Navigation */}
        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Social */}
        <div className="footer-social">

          <a
            href="https://github.com/Srunborath7"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://t.me/"
            target="_blank"
            rel="noreferrer"
          >
            <FaTelegram />
          </a>

        </div>

      </div>

      {/* Bottom */}
      <div className="footer-bottom">

        <p>
          © {new Date().getFullYear()} SRUN BORATH.
          All Rights Reserved.
        </p>

        <button
          className="scroll-top-btn"
          onClick={scrollToTop}
        >
          <FaArrowUp />
        </button>

      </div>

    </footer>
  );
}