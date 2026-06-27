import "../styles/about.css";
import { motion } from "framer-motion";

import profileImg from "../assets/profile.png";

import coding from "../assets/career/coding.png";
import graduation from "../assets/career/graduation.png";
import mern from "../assets/career/mern.png";
import projects from "../assets/career/projects.png";
import hackerrank from "../assets/career/hackerrank.png";

import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaAws,
  FaGithub
} from "react-icons/fa";

function About() {
  return (
    <section className="about" id="about">

      <div className="container">

        {/* Section Title */}

        <motion.div
          className="about-heading"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
        >
          <p className="section-tag">
            ABOUT ME
          </p>

          <h2 className="section-title">
            My Journey
            <span>.</span>
          </h2>

          <p className="section-subtitle">
            Every project, every technology and every challenge
            has shaped me into the developer I am today.
          </p>
        </motion.div>

        {/* Main Grid */}

        <div className="about-main">

          {/* LEFT */}

          <motion.div
            className="about-image-side"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
          >

            {/* Glow */}

            <div className="profile-glow"></div>

            {/* Orbit Skills */}

            <div className="orbit orbit-react">
              <FaReact />
            </div>

            <div className="orbit orbit-node">
              <FaNodeJs />
            </div>

            <div className="orbit orbit-python">
              <FaPython />
            </div>

            <div className="orbit orbit-java">
              <FaJava />
            </div>

            <div className="orbit orbit-aws">
              <FaAws />
            </div>

            <div className="orbit orbit-github">
              <FaGithub />
            </div>

            {/* Profile */}

            <motion.img
              src={profileImg}
              alt="Madhu"
              className="profile-image"
              animate={{
                y: [0, -12, 0]
              }}
              transition={{
                duration: 5,
                repeat: Infinity
              }}
            />

          </motion.div>

          {/* RIGHT */}

          <motion.div
            className="about-content"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
          >

            <h3>
              Turning Ideas into
              <span> Digital Products</span>
            </h3>

            <p>
              Hello! I'm <strong>Madhu Vasamsetti</strong>,
              a passionate Full Stack MERN Developer who loves
              building responsive and modern web applications.
            </p>

            <p>
              My focus is creating beautiful user experiences,
              scalable backend systems and clean reusable code.
            </p>

            {/* Stats */}

            <div className="about-stats">

              <motion.div
                className="stat-card"
                whileHover={{
                  y: -10
                }}
              >
                <h2>10+</h2>
                <span>Projects</span>
              </motion.div>

              <motion.div
                className="stat-card"
                whileHover={{
                  y: -10
                }}
              >
                <h2>15+</h2>
                <span>Technologies</span>
              </motion.div>

              <motion.div
                className="stat-card"
                whileHover={{
                  y: -10
                }}
              >
                <h2>100%</h2>
                <span>Passion</span>
              </motion.div>

            </div>

          </motion.div>

        </div>

        {/* ==========================
            CAREER TIMELINE
        ========================== */}

        <div className="career-section">

          <motion.h2
            className="career-title"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            My Career Journey
          </motion.h2>

          <div className="timeline">

            <motion.div
              className="timeline-card"
              whileHover={{
                scale: 1.03
              }}
            >
              <img src={coding} alt="" />

              <div>
                <h3>Programming Journey</h3>

                <p>
                  Started learning programming
                  fundamentals and problem solving.
                </p>
              </div>

            </motion.div>

            <motion.div
              className="timeline-card"
              whileHover={{
                scale: 1.03
              }}
            >
              <img src={graduation} alt="" />

              <div>
                <h3>Computer Science</h3>

                <p>
                  Pursuing B.Tech while building
                  practical development skills.
                </p>
              </div>

            </motion.div>

            <motion.div
              className="timeline-card"
              whileHover={{
                scale: 1.03
              }}
            >
              <img src={mern} alt="" />

              <div>
                <h3>MERN Stack</h3>

                <p>
                  Learned React, Node, Express
                  and MongoDB for full stack
                  development.
                </p>
              </div>

            </motion.div>
                        <motion.div
              className="timeline-card"
              whileHover={{
                scale: 1.03
              }}
            >
              <img src={projects} alt="Projects" />

              <div>
                <h3>Full Stack Projects</h3>

                <p>
                  Built complete MERN applications including
                  Hospital Management System, Learning
                  Management System, Weather App and
                  Content Management System.
                </p>
              </div>

            </motion.div>

            <motion.div
              className="timeline-card"
              whileHover={{
                scale: 1.03
              }}
            >
              <img src={hackerrank} alt="HackerRank" />

              <div>
                <h3>Certifications</h3>

                <p>
                  Earned HackerRank Python certification
                  while continuously improving Data
                  Structures, Algorithms and Full Stack
                  Development skills.
                </p>
              </div>

            </motion.div>

          </div>

        </div>

        {/* =========================
            ACHIEVEMENTS
        ========================= */}

        <motion.div
          className="achievement-section"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
        >

          <h2>
            Highlights
          </h2>

          <div className="achievement-grid">

            <motion.div
              className="achievement-card"
              whileHover={{
                y: -12,
                rotate: -1
              }}
            >
              <h1>🏆</h1>

              <h3>
                HackerRank
              </h3>

              <p>
                Python (Basic)
                Certified Developer
              </p>

            </motion.div>

            <motion.div
              className="achievement-card"
              whileHover={{
                y: -12,
                rotate: 1
              }}
            >
              <h1>💻</h1>

              <h3>
                Full Stack
              </h3>

              <p>
                React, Node,
                Express &
                MongoDB
              </p>

            </motion.div>

            <motion.div
              className="achievement-card"
              whileHover={{
                y: -12,
                rotate: -1
              }}
            >
              <h1>🚀</h1>

              <h3>
                10+
                Projects
              </h3>

              <p>
                Academic and
                Real World
                Applications
              </p>

            </motion.div>

            <motion.div
              className="achievement-card"
              whileHover={{
                y: -12,
                rotate: 1
              }}
            >
              <h1>🎯</h1>

              <h3>
                Career Goal
              </h3>

              <p>
                Software Engineer
                at Microsoft
              </p>

            </motion.div>

          </div>

        </motion.div>

        {/* =========================
            QUOTE
        ========================= */}

        <motion.div
          className="about-quote"
          initial={{
            opacity: 0,
            y: 60
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: .8
          }}
          viewport={{
            once: true
          }}
        >

          <h2>

            "Every project is an opportunity
            to learn, improve and create
            something meaningful."

          </h2>

          <span>
            — Madhu Vasamsetti
          </span>

        </motion.div>

        {/* =========================
            CALL TO ACTION
        ========================= */}

        <motion.div
          className="about-cta"
          initial={{
            opacity: 0,
            y: 60
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: .8
          }}
          viewport={{
            once: true
          }}
        >

          <h2>

            Let's Build Something Amazing Together

          </h2>

          <p>

            I enjoy creating modern,
            scalable and high-performance
            web applications with beautiful
            user experiences.

          </p>

          <a
            href="#contact"
            className="about-btn"
          >
            Get In Touch
          </a>

        </motion.div>

      </div>

    </section>
  );
}

export default About;