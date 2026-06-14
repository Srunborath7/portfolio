import { motion } from "framer-motion";
import ProjectCard from "../context/ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "POS System",
      description:
        "Point of Sale system with inventory, sales, invoices, and reporting.",
      tech: ["React", "Laravel", "MongoDB"],
      images: [
        "/projects/pos1.jpg",
        "/projects/pos2.jpg",
        "/projects/pos3.jpg",
        "/projects/pos4.jpg"
      ],
      github:
        "https://github.com/Srunborath7/mart_pos_system",
      demo:
        "https://mart-pos-system.vercel.app/auth/login"
    },

    {
      title: "E-Commerce Website",
      description:
        "Modern e-commerce platform with cart, orders, wishlist and payment integration.",
      tech: ["React", "Node.js", "MongoDB"],
      images: [
        "/projects/ecommerce1.jpg",
        "/projects/ecommerce2.jpg",
        "/projects/ecommerce3.jpg"
      ],
      github: "#",
      demo: "#"
    },

    {
      title: "REST API",
      description:
        "Spring Boot REST API with JWT authentication and RBAC.",
      tech: ["Spring Boot", "MySQL"],
      images: [
        "/projects/api1.jpg",
        "/projects/api2.jpg"
      ],
      github: "#",
      demo: "#"
    },

    {
      title: "Mobile News App",
      description:
        "Flutter application consuming public APIs with modern UI.",
      tech: ["Flutter", "REST API"],
      images: [
        "/projects/news1.jpg",
        "/projects/news2.jpg",
        "/projects/news3.jpg"
      ],
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section
      className="projects-section"
      id="projects"
    >
      <div className="container">

        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Projects
        </motion.h2>

        <div className="projects-grid">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 50
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              transition={{
                delay: index * 0.15
              }}
              viewport={{ once: true }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}