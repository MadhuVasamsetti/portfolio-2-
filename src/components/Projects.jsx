import "../styles/projects.css";
import { motion } from "framer-motion";

import hospital from "../assets/hms.png";
import calculator from "../assets/calculator.png";
import airesume from "../assets/airesume.png";
import password from "../assets/password.png";
import quote from "../assets/quote.png";

const projects = [
  {
    title: "Scientific Calculator",
    image: calculator,
    description:
      "A responsive calculator with scientific operations and modern UI.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/MadhuVasamsetti/Calculator",
    live: "https://calculator123-orpin.vercel.app/",
  },
  {
    title: "AI Resume Builder",
    image: airesume,
    description:
      "An AI-powered resume builder that generates ATS-friendly resumes with customizable templates.",
    tech: ["React", "OpenAI", "Node.js"],
    github: "https://github.com/MadhuVasamsetti/AI_Resume_analyzer_final",
    live: "https://your-live-link.com",
  },
  {
    title: "Hospital Management System",
    image: hospital,
    description:
      "A complete MERN Hospital Management System with authentication, appointments, doctors, patients, and admin dashboard.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    github: "https://github.com/MadhuVasamsetti/mernfrontend",
    live: "https://your-live-link.com",
  },
  
  {
    title: "Password Generator",
    image: password,
    description:
      "Generate secure passwords with customizable length and character options.",
    tech: ["React", "CSS"],
    github: "https://github.com/MadhuVasamsetti/Password_generator",
    live: "https://password-generator-6jmj.vercel.app/",
  },
  {
    title: "Random Quote Generator",
    image: quote,
    description:
      "Beautiful quote generator with animations, copy feature, and responsive glassmorphism UI.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/MadhuVasamsetti/Random_quote",
    live: "https://random-quote-steel.vercel.app/",
  },
];


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
         Additional Featured <span>Projects</span>
        </motion.h2>

        <div className="project-fan">
          {projects.map((project, index) => {
            const offset = offsets[index];

            return (
              <motion.div
                key={index}
                className="fan-card"
                style={{
                  zIndex: 100 - Math.abs(offset),
                }}
                initial={{
                  opacity: 0,
                  y: 80,
                  rotate: 0,
                }}
                whileInView={{
                  opacity: 1,
                  x: offset * 130,
                  y: Math.abs(offset) * 45,
                  rotate: offset * 9,
                }}
                whileHover={{
                  y: Math.abs(offset) * 45 - 30,
                  rotate: 0,
                  scale: 1.05,
                  zIndex: 200,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.12,
                }}
              >
                <div className="fan-card-image">
                  <img src={project.image} alt={project.title} />
                  <div className="fan-card-overlay"></div>
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
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default Projects;
