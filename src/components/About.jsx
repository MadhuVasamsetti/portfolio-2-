import { useState, useEffect } from "react";
import "../styles/about.css";
import { motion, AnimatePresence } from "framer-motion";

import profileImg from "../assets/profile.png";
import medicineProject from "../assets/medicine.png";
import lmsProject from "../assets/lms.png";

import {
  FaArrowRight,
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaAws,
  FaGithub,
  FaCode,
  FaLaptopCode,
  FaDatabase,
  FaServer,
} from "react-icons/fa";

/* ==========================================================
   HERO DATA
   ========================================================== */

// Rotating role words shown under the headline.
const ROLES = [
  "Full Stack MERN Developer",
  "React & Node.js Engineer",
  "Problem Solver",
  "UI-Focused Builder",
];

// Small tech marquee shown once the intro copy finishes.
const STACK_ICONS = [
  { icon: <FaReact />, name: "React" },
  { icon: <FaNodeJs />, name: "Node.js" },
  { icon: <FaPython />, name: "Python" },
  { icon: <FaJava />, name: "Java" },
  { icon: <FaAws />, name: "AWS" },
  { icon: <FaGithub />, name: "GitHub" },
];

function About() {
  const [roleIndex, setRoleIndex] = useState(0);

  // Rotate role text every 2.6s
  useEffect(() => {
    const id = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 2600);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="about" id="about">

      

      

      {/* ================= ABOUT ================= */}

      <section className="about-me">

        <div className="container about-grid">

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
          >

            <span className="section-tag">
              ABOUT ME
            </span>

            <h2>

              Building Software That
              Makes People's Lives Better.

            </h2>

            <p>

              I'm Madhukar Vasamsetti,
              a passionate Full Stack Developer
              currently pursuing B.Tech in Computer Science.

            </p>

            <p>

              I enjoy designing modern user interfaces,
              building scalable backend systems,
              solving DSA problems and continuously
              learning new technologies.

            </p>

            <p>

              My dream is to become a Software Engineer
              at a top product-based company where I can
              build impactful applications.

            </p>

          </motion.div>

          <motion.div
            className="about-cards"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
          >

            <div className="info-card">

              <FaLaptopCode />

              <div>

                <h3>Frontend</h3>

                <p>
                  React • HTML • CSS • JavaScript
                </p>

              </div>

            </div>

            <div className="info-card">

              <FaServer />

              <div>

                <h3>Backend</h3>

                <p>
                  Node.js • Express.js
                </p>

              </div>

            </div>

            <div className="info-card">

              <FaDatabase />

              <div>

                <h3>Database</h3>

                <p>
                  MongoDB • MySQL
                </p>

              </div>

            </div>

          </motion.div>

        </div>

      </section>

      {/* ================= SKILLS ================= */}

      <section className="skills-overview">

        <div className="container">

          <div className="section-title">

            <span>TECH STACK</span>

            <h2>
              Technologies I Work With
            </h2>

          </div>

          <div className="skills-grid">

            <div className="skill-box">
              <FaReact />
              <h3>React</h3>
            </div>

            <div className="skill-box">
              <FaNodeJs />
              <h3>Node.js</h3>
            </div>

            <div className="skill-box">
              <FaPython />
              <h3>Python</h3>
            </div>

            <div className="skill-box">
              <FaJava />
              <h3>Java</h3>
            </div>

            <div className="skill-box">
              <FaAws />
              <h3>AWS</h3>
            </div>

            <div className="skill-box">
              <FaGithub />
              <h3>GitHub</h3>
            </div>

          </div>

        </div>

      </section>
            {/* ================= JOURNEY ================= */}

      <section className="journey-section" id="journey">

        <div className="container">

          <div className="section-title">

            <span>MY JOURNEY</span>

            <h2>
              Every Step Built
              The Developer I Am Today
            </h2>

            <p>
              My journey is driven by curiosity,
              consistency and a passion for learning.
            </p>

          </div>

          <div className="timeline">

            <motion.div
              className="timeline-card left"
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: .7 }}
              viewport={{ once: true }}
            >

              <span className="year">2023</span>

              <h3>Started Programming</h3>

              <p>
                Learned C, Python and Java while
                understanding programming
                fundamentals and problem solving.
              </p>

            </motion.div>

            <motion.div
              className="timeline-card right"
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: .7 }}
              viewport={{ once: true }}
            >

              <span className="year">2024</span>

              <h3>B.Tech Journey</h3>

              <p>
                Started Computer Science Engineering
                while exploring Web Development,
                Databases and Operating Systems.
              </p>

            </motion.div>

            <motion.div
              className="timeline-card left"
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: .7 }}
              viewport={{ once: true }}
            >

              <span className="year">2025</span>

              <h3>MERN Stack</h3>

              <p>
                Mastered React, Node.js,
                Express.js and MongoDB by
                building complete full-stack
                applications.
              </p>

            </motion.div>

            <motion.div
              className="timeline-card right"
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: .7 }}
              viewport={{ once: true }}
            >

              <span className="year">2026</span>

              <h3>Real Projects</h3>

              <p>
                Developed Learning Management System,
                Medicine Reminder System,
                Weather App and many
                responsive React projects.
              </p>

            </motion.div>

          </div>

        </div>

      </section>

      {/* ================= PROJECTS ================= */}

      <section className="featured-projects">

        <div className="container">

          <div className="section-title">

            <span>FEATURED PROJECTS</span>

            <h2>
              Projects That Define
              My Development Journey
            </h2>

          </div>

          {/* Project 1 */}

          <motion.div
            className="project-row"
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
          >

            <div className="project-image">

              <img
                src={medicineProject}
                alt="Medicine Reminder"
              />

            </div>

            <div className="project-content">

              <span className="project-tag">
                MERN STACK
              </span>

              <h2>
                Medicine Reminder System
              </h2>

              <p>

                A complete MERN application
                allowing users to manage medicines,
                reminders and authentication
                with a clean responsive UI.

              </p>

              <div className="tech-list">

                <span>React</span>
                <span>Node.js</span>
                <span>MongoDB</span>
                <span>Express</span>

              </div>

              <div className="project-buttons">

                <a
                  href="#"
                  className="primary-btn"
                >
                  Live Demo
                </a>

                <a
                  href="#"
                  className="secondary-btn"
                >
                  GitHub
                </a>

              </div>

            </div>

          </motion.div>

          {/* Project 2 */}

          <motion.div
            className="project-row reverse"
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
          >

            <div className="project-image">

              <img
                src={lmsProject}
                alt="Learning Management System"
              />

            </div>

            <div className="project-content">

              <span className="project-tag">
                FULL STACK
              </span>

              <h2>
                Learning Management System
              </h2>

              <p>

                A role-based LMS with authentication,
                course management, dashboards,
                assignments and modern responsive UI
                for students and instructors.

              </p>

              <div className="tech-list">

                <span>React</span>
                <span>Express</span>
                <span>MongoDB</span>
                <span>JWT</span>

              </div>

              <div className="project-buttons">

                <a
                  href="#"
                  className="primary-btn"
                >
                  Live Demo
                </a>

                <a
                  href="#"
                  className="secondary-btn"
                >
                  GitHub
                </a>

              </div>

            </div>

          </motion.div>

        </div>

      </section>
            {/* ================= ACHIEVEMENTS ================= */}

      <section className="achievements-section">

        <div className="container">

          <div className="section-title">

            <span>ACHIEVEMENTS</span>

            <h2>
              Numbers That Reflect
              My Growth
            </h2>

          </div>

          <div className="achievement-grid">

            <motion.div
              className="achievement-card"
              whileHover={{ y: -10 }}
            >
              <h1>10+</h1>
              <h3>Projects</h3>
              <p>
                Successfully completed full-stack
                and frontend development projects.
              </p>
            </motion.div>

            <motion.div
              className="achievement-card"
              whileHover={{ y: -10 }}
            >
              <h1>15+</h1>
              <h3>Technologies</h3>
              <p>
                Hands-on experience with modern
                frontend, backend and cloud tools.
              </p>
            </motion.div>

            <motion.div
              className="achievement-card"
              whileHover={{ y: -10 }}
            >
              <h1>300+</h1>
              <h3>DSA Problems</h3>
              <p>
                Solved hundreds of coding problems
                to strengthen analytical thinking.
              </p>
            </motion.div>

            <motion.div
              className="achievement-card"
              whileHover={{ y: -10 }}
            >
              <h1>∞</h1>
              <h3>Learning</h3>
              <p>
                Continuously learning new technologies
                and improving every single day.
              </p>
            </motion.div>

          </div>

        </div>

      </section>

      {/* ================= CURRENT FOCUS ================= */}

      <section className="focus-section">

        <div className="container">

          <div className="section-title">

            <span>CURRENT FOCUS</span>

            <h2>
              What I'm
              Working On
            </h2>

          </div>

          <div className="focus-grid">

            <div className="focus-card">

              <span>01</span>

              <h3>Data Structures</h3>

              <p>

                Solving coding problems every
                day to prepare for product
                company interviews.

              </p>

            </div>

            <div className="focus-card">

              <span>02</span>

              <h3>System Design</h3>

              <p>

                Learning scalable backend
                architecture and software
                engineering principles.

              </p>

            </div>

            <div className="focus-card">

              <span>03</span>

              <h3>Full Stack Development</h3>

              <p>

                Building production-ready MERN
                applications with clean architecture.

              </p>

            </div>

            <div className="focus-card">

              <span>04</span>

              <h3>Open Source</h3>

              <p>

                Exploring GitHub projects,
                contributing and improving
                collaboration skills.

              </p>

            </div>

          </div>

        </div>

      </section>

      {/* ================= FINAL CTA ================= */}

      <section className="cta-section">

        <div className="container">

          <motion.div
            className="cta-card"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
          >

            <span>AVAILABLE FOR OPPORTUNITIES</span>

            <h2>

              Let's Build Something
              Amazing Together

            </h2>

            <p>

              I'm actively looking for internships,
              freelance work and Software Engineer
              opportunities.

            </p>

            <div className="hero-buttons">

              <a
                href="#contact"
                className="primary-btn"
              >
                Contact Me
              </a>

              <a
                href="#projects"
                className="secondary-btn"
              >
                View Projects
              </a>

            </div>

          </motion.div>

        </div>

      </section>

    </section>
  );
}

export default About;
