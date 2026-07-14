import { useState, useEffect, useRef } from "react";
import "../styles/about.css";
import { motion, useInView } from "framer-motion";

import medicineProject from "../assets/medicine.png";
import lmsProject from "../assets/lms.png";

import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaAws,
  FaGithub,
  FaLaptopCode,
  FaDatabase,
  FaServer,
} from "react-icons/fa";



const TECH_STACK = [
  { icon: <FaReact />, name: "React" },
  { icon: <FaNodeJs />, name: "Node.js" },
  { icon: <FaPython />, name: "Python" },
  { icon: <FaJava />, name: "Java" },
  { icon: <FaAws />, name: "AWS" },
  { icon: <FaGithub />, name: "GitHub" },
];

const TIMELINE = [
  {
    side: "left",
    year: "2023",
    title: "Started Programming",
    text: "Learned C, Python and Java while understanding programming fundamentals and problem solving.",
  },
  {
    side: "right",
    year: "2024",
    title: "B.Tech Journey",
    text: "Started Computer Science Engineering while exploring Web Development, Databases and Operating Systems.",
  },
  {
    side: "left",
    year: "2025",
    title: "MERN Stack",
    text: "Mastered React, Node.js, Express.js and MongoDB by building complete full-stack applications.",
  },
  {
    side: "right",
    year: "2026",
    title: "Real Projects",
    text: "Developed Learning Management System, Medicine Reminder System, Weather App and many responsive React projects.",
  },
];

const ACHIEVEMENTS = [
  { value: 10, suffix: "+", title: "Projects", text: "Successfully completed full-stack and frontend development projects." },
  { value: 15, suffix: "+", title: "Technologies", text: "Hands-on experience with modern frontend, backend and cloud tools." },
  { value: 300, suffix: "+", title: "DSA Problems", text: "Solved hundreds of coding problems to strengthen analytical thinking." },
  { value: null, suffix: "∞", title: "Learning", text: "Continuously learning new technologies and improving every single day." },
];

const FOCUS = [
  { num: "01", title: "Data Structures", text: "Solving coding problems every day to prepare for product company interviews." },
  { num: "02", title: "System Design", text: "Learning scalable backend architecture and software engineering principles." },
  { num: "03", title: "Full Stack Development", text: "Building production-ready MERN applications with clean architecture." },
  { num: "04", title: "Open Source", text: "Exploring GitHub projects, contributing and improving collaboration skills." },
];



function Counter({ value, suffix }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView || value === null) return;

    const duration = 1200;
    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * value));
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [inView, value]);

  if (value === null) {
    return <h1 ref={ref}>{suffix}</h1>;
  }

  return (
    <h1 ref={ref}>
      {display}
      {suffix}
    </h1>
  );
}



const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const popItem = {
  hidden: { opacity: 0, scale: 0.85, y: 20 },
  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

function About() {
  return (
    <section className="about" id="about">

     

      <section className="about-me">

        <div className="container about-grid">

          <motion.div
            className="about-info"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >

            <motion.span className="section-tag" variants={item}>
              ABOUT ME
            </motion.span>

            <motion.h2 variants={item}>
              Building Software That
              Makes People's Lives Better.
            </motion.h2>

            <motion.p variants={item}>
              I'm Madhukar Vasamsetti,
              a passionate Full Stack Developer
              currently pursuing B.Tech in Computer Science.
            </motion.p>

            <motion.p variants={item}>
              I enjoy designing modern user interfaces,
              building scalable backend systems,
              solving DSA problems and continuously
              learning new technologies.
            </motion.p>

            <motion.p variants={item}>
              My dream is to become a Software Engineer
              at a top product-based company where I can
              build impactful applications.
            </motion.p>

          </motion.div>

          <motion.div
            className="about-cards"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >

            <motion.div className="info-card" variants={item} whileHover={{ x: 8 }}>
              <FaLaptopCode />
              <div>
                <h3>Frontend</h3>
                <p>React • HTML • CSS • JavaScript</p>
              </div>
            </motion.div>

            <motion.div className="info-card" variants={item} whileHover={{ x: 8 }}>
              <FaServer />
              <div>
                <h3>Backend</h3>
                <p>Node.js • Express.js</p>
              </div>
            </motion.div>

            <motion.div className="info-card" variants={item} whileHover={{ x: 8 }}>
              <FaDatabase />
              <div>
                <h3>Database</h3>
                <p>MongoDB • MySQL</p>
              </div>
            </motion.div>

          </motion.div>

        </div>

      </section>

      

      

      <section className="journey-section" id="journey">

        <div className="container">

          <motion.div
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <span>MY JOURNEY</span>
            <h2>Every Step Built The Developer I Am Today</h2>
            <p>My journey is driven by curiosity, consistency and a passion for learning.</p>
          </motion.div>

          <div className="timeline">

            <motion.div
              className="timeline-line"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              transition={{ duration: 1.4, ease: "easeInOut" }}
              viewport={{ once: true, amount: 0.2 }}
            />

            {TIMELINE.map((entry, index) => (
              <motion.div
                className={`timeline-card ${entry.side}`}
                key={entry.year}
                initial={{ opacity: 0, x: entry.side === "left" ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: index * 0.05 }}
                viewport={{ once: true, amount: 0.4 }}
                whileHover={{ y: -6 }}
              >
                <span className="year">{entry.year}</span>
                <h3>{entry.title}</h3>
                <p>{entry.text}</p>
              </motion.div>
            ))}

          </div>

        </div>

      </section>

      

      <section className="featured-projects">

        <div className="container">

          <motion.div
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <span>FEATURED PROJECTS</span>
            <h2>Projects That Define My Development Journey</h2>
          </motion.div>

          

          <motion.div
            className="project-row"
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
          >

            <motion.div
              className="project-image"
              initial={{ clipPath: "inset(0 100% 0 0)" }}
              whileInView={{ clipPath: "inset(0 0% 0 0)" }}
              transition={{ duration: 0.9, ease: "easeInOut" }}
              viewport={{ once: true, amount: 0.4 }}
              whileHover={{ scale: 1.03 }}
            >
              <img src={medicineProject} alt="Medicine Reminder" />
            </motion.div>

            <div className="project-content">
              <span className="project-tag">MERN STACK</span>
              <h2>Medicine Reminder System</h2>
              <p>
                A complete MERN application allowing users to manage medicines,
                reminders and authentication with a clean responsive UI.
              </p>

              <div className="tech-list">
                <span>React</span>
                <span>Node.js</span>
                <span>MongoDB</span>
                <span>Express</span>
              </div>

              <div className="project-buttons">
                <a href="#" className="primary-btn"><span>Live Demo</span></a>
                <a href="#" className="secondary-btn"><span>GitHub</span></a>
              </div>
            </div>

          </motion.div>

        

          <motion.div
            className="project-row reverse"
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
          >

            <motion.div
              className="project-image"
              initial={{ clipPath: "inset(0 0 0 100%)" }}
              whileInView={{ clipPath: "inset(0 0 0 0%)" }}
              transition={{ duration: 0.9, ease: "easeInOut" }}
              viewport={{ once: true, amount: 0.4 }}
              whileHover={{ scale: 1.03 }}
            >
              <img src={lmsProject} alt="Learning Management System" />
            </motion.div>

            <div className="project-content">
              <span className="project-tag">FULL STACK</span>
              <h2>Learning Management System</h2>
              <p>
                A role-based LMS with authentication, course management, dashboards,
                assignments and modern responsive UI for students and instructors.
              </p>

              <div className="tech-list">
                <span>React</span>
                <span>Express</span>
                <span>MongoDB</span>
                <span>JWT</span>
              </div>

              <div className="project-buttons">
                <a href="#" className="primary-btn"><span>Live Demo</span></a>
                <a href="#" className="secondary-btn"><span>GitHub</span></a>
              </div>
            </div>

          </motion.div>

        </div>

      </section>

      

      <section className="achievements-section">

        <div className="container">

          <motion.div
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <span>ACHIEVEMENTS</span>
            <h2>Numbers That Reflect My Growth</h2>
          </motion.div>

          <motion.div
            className="achievement-grid"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            {ACHIEVEMENTS.map((a) => (
              <motion.div
                className="achievement-card"
                key={a.title}
                variants={popItem}
                whileHover={{ y: -10 }}
              >
                <Counter value={a.value} suffix={a.suffix} />
                <h3>{a.title}</h3>
                <p>{a.text}</p>
              </motion.div>
            ))}
          </motion.div>

        </div>

      </section>

      

      <section className="focus-section">

        <div className="container">

          <motion.div
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <span>CURRENT FOCUS</span>
            <h2>What I'm Working On</h2>
          </motion.div>

          <motion.div
            className="focus-grid"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            {FOCUS.map((f) => (
              <motion.div
                className="focus-card"
                key={f.num}
                variants={item}
                whileHover={{ y: -10 }}
              >
                <span>{f.num}</span>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </motion.div>
            ))}
          </motion.div>

        </div>

      </section>

      

      <section className="cta-section">

        <div className="container">

          <motion.div
            className="cta-card"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >

            <span>AVAILABLE FOR OPPORTUNITIES</span>

            <h2>Let's Build Something Amazing Together</h2>

            <p>
              I'm actively looking for internships, freelance work and
              Software Engineer opportunities.
            </p>

            <div className="hero-buttons">
              <a href="#contact" className="primary-btn"><span>Contact Me</span></a>
              <a href="#projects" className="secondary-btn"><span>View Projects</span></a>
            </div>

          </motion.div>

        </div>

      </section>

    </section>
  );
}

export default About;
