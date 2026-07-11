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
    title: "Weather App",
    image: weather,
    description:
      "Responsive weather application using OpenWeather API with beautiful UI.",
    tech: ["React", "API", "CSS"],
    github: "#",
    live: "#",
  },
];

// Fan geometry: how far each card sits from the centre card, in "slots".
// With 3 projects the offsets are [-1, 0, 1]; this scales automatically
// if you add more projects to the array above.
function getFanOffsets(count) {
  const mid = (count - 1) / 2;
  return Array.from({ length: count }, (_, i) => i - mid);
}

function Projects() {
  const offsets = getFanOffsets(projects.length);

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

        <div className="project-fan">
          {projects.map((project, index) => {
            const offset = offsets[index];
            const rotate = offset * 9; // degrees of fan-out per slot
            const translateX = offset * 130; // horizontal spread per slot
            const translateY = Math.abs(offset) * 46; // lower the further from centre

            return (
              <motion.a
                key={index}
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="fan-card"
                style={{ zIndex: 100 - Math.abs(offset) }}
                initial={{ opacity: 0, y: 80, rotate: 0 }}
                whileInView={{
                  opacity: 1,
                  y: translateY,
                  x: translateX,
                  rotate: rotate,
                }}
                whileHover={{
                  y: translateY - 28,
                  rotate: 0,
                  scale: 1.05,
                  zIndex: 200,
                }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <div className="fan-card-image">
                  <img src={project.image} alt={project.title} />
                  <div className="fan-card-overlay" />
                </div>

                <div className="fan-card-body">
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
                      onClick={(e) => e.stopPropagation()}
                    >
                      GitHub
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Projects;
