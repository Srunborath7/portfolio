import { useState, useEffect } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaGithub,
  FaExternalLinkAlt
} from "react-icons/fa";

export default function ProjectCard({ project }) {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    if (project.images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImage(
        (prev) => (prev + 1) % project.images.length
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [project.images.length]);

  const nextImage = () => {
    setCurrentImage(
      (prev) => (prev + 1) % project.images.length
    );
  };

  const prevImage = () => {
    setCurrentImage(
      (prev) =>
        prev === 0
          ? project.images.length - 1
          : prev - 1
    );
  };

  return (
    <div className="project-card">

      <div className="project-slider">

        <img
          src={project.images[currentImage]}
          alt={project.title}
        />

        {project.images.length > 1 && (
          <>
            <button
              className="slider-btn left"
              onClick={prevImage}
            >
              <FaChevronLeft />
            </button>

            <button
              className="slider-btn right"
              onClick={nextImage}
            >
              <FaChevronRight />
            </button>
          </>
        )}

        <div className="slider-dots">
          {project.images.map((_, index) => (
            <span
              key={index}
              className={
                currentImage === index
                  ? "dot active"
                  : "dot"
              }
              onClick={() => setCurrentImage(index)}
            />
          ))}
        </div>

      </div>

      <div className="project-content">

        <h3>{project.title}</h3>

        <p>{project.description}</p>

        <div className="project-tech">
          {project.tech.map((item, i) => (
            <span key={i}>{item}</span>
          ))}
        </div>

        <div className="project-actions">

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="project-btn"
          >
            <FaGithub />
            GitHub
          </a>

          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="project-btn demo"
          >
            <FaExternalLinkAlt />
            Live Demo
          </a>

        </div>

      </div>

    </div>
  );
}