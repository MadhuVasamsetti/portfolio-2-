import "../styles/projects.css";
import { motion } from "framer-motion";

import hospital from "../assets/projects/hospital.png";
import weather from "../assets/projects/weather.png";
import cms from "../assets/projects/cms.png";

const projects = [
  {
    title: "Hospital Management System",
    image: hospital,
    description:
      "A complete MERN Hospital Management System with authentication, appointments, doctors, patients and dashboard.",
    tech: ["React", "Node", "MongoDB", "Express"],
    github: "#",
    live: "#",
  },
  {
    title: "Weather App",
    image: weather,
    description:
      "Responsive weather application using OpenWeather API with beautiful UI.",
    tech: ["React", "API", "CSS"],
    github: "#",
    live: "#",
  },
  {
    title: "Content Management System",
    image: cms,
    description:
      "CMS built using React with CRUD operations and responsive dashboard.",
    tech: ["React", "Express", "MongoDB"],
    github: "#",
    live: "#",
  },
];

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="container">

        <motion.p
          className="section-tag"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          PROJECTS
        </motion.p>

        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Featured <span>Projects</span>
        </motion.h2>

        <div className="project-list">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              initial={{
                opacity: 0,
                x: 400,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.25,
              }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
                ease: "easeOut",
              }}
            >
              <div className="project-image">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  whileHover={{
                    scale: 1.05,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                />
              </div>

              <div className="project-content">
                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="tech-stack">
                  {project.tech.map((tech, i) => (
                    <span key={i}>{tech}</span>
                  ))}
                </div>

                <div className="project-buttons">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;