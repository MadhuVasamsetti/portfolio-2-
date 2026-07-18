import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import "../styles/home.css";

import profileImg from "../assets/profile.png";

import {
  FaArrowRight,
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaAws,
  FaGithub,
  FaCode,
} from "react-icons/fa";


const ROLES = [
  "Full Stack MERN Developer",
  "React & Node.js Engineer",
  "Problem Solver",
  "UI-Focused Builder",
];

const STACK_ICONS = [
  { icon: <FaReact />, name: "React" },
  { icon: <FaNodeJs />, name: "Node.js" },
  { icon: <FaPython />, name: "Python" },
  { icon: <FaJava />, name: "Java" },
  { icon: <FaAws />, name: "AWS" },
  { icon: <FaGithub />, name: "GitHub" },
];

const STATS = [
  { value: 10, suffix: "+", label: "Projects" },
  { value: 15, suffix: "+", label: "Technologies" },
  { value:100, suffix: "+", label: "DSA Problems" },
];



function Counter({ value, suffix }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const duration = 1200;
    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setDisplay(Math.round(eased * value));
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [inView, value]);

  return (
    <h2 ref={ref}>
      {display}
      {suffix}
    </h2>
  );
}


const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function Home() {
  const [roleIndex, setRoleIndex] = useState(0);

  const bgRef = useRef(null);
  const imageRef = useRef(null);
  const tiltRef = useRef(null);

  useEffect(() => {
    const id = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 2600);

    return () => clearInterval(id);
  }, []);

 
  useEffect(() => {
    const bg = bgRef.current;
    const image = imageRef.current;

    const handleMouseMove = (e) => {
      if (bg) {
        const px = (e.clientX / window.innerWidth) * 100;
        const py = (e.clientY / window.innerHeight) * 100;
        bg.style.setProperty("--spot-x", `${px}%`);
        bg.style.setProperty("--spot-y", `${py}%`);
      }

      if (image) {
        const x = (window.innerWidth / 2 - e.clientX) / 40;
        const y = (window.innerHeight / 2 - e.clientY) / 40;
        image.style.transform = `translate(${x}px, ${y}px)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);


  useEffect(() => {
    const el = tiltRef.current;
    if (!el) return;

    const handleMove = (e) => {
      const rect = el.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      el.style.setProperty("--ry", `${px * 14}deg`);
      el.style.setProperty("--rx", `${-py * 14}deg`);
    };

    const handleLeave = () => {
      el.style.setProperty("--ry", "0deg");
      el.style.setProperty("--rx", "0deg");
    };

    el.addEventListener("mousemove", handleMove);
    el.addEventListener("mouseleave", handleLeave);
    return () => {
      el.removeEventListener("mousemove", handleMove);
      el.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <section className="hero-section" id="home">
      <div className="hero-spotlight" ref={bgRef}></div>
      <div className="hero-grain"></div>
      <div className="hero-bg-circle hero-circle1"></div>
      <div className="hero-bg-circle hero-circle2"></div>

      <div className="hero-bg-text">MADHU</div>

      <div className="container hero-grid">
        

        <motion.div
          className="hero-left"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.span className="hero-badge" variants={itemVariants}>
            <FaCode />
            FULL STACK MERN DEVELOPER
          </motion.span>

          <motion.h1 variants={itemVariants}>
            Hello,
            <br />
            I'm
            <span> Madhukar.</span>
          </motion.h1>

          <motion.div className="hero-role-wrap" variants={itemVariants}>
            <AnimatePresence mode="wait">
              <motion.span
                key={roleIndex}
                className="hero-role"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.4 }}
              >
                {ROLES[roleIndex]}
                <span className="role-cursor" />
              </motion.span>
            </AnimatePresence>
          </motion.div>

          <motion.p variants={itemVariants}>
            Passionate Full Stack Developer specializing in React,
            Node.js, Express.js and MongoDB.
            I love creating modern, scalable and visually beautiful
            web applications that solve real-world problems.
          </motion.p>

          <motion.div className="hero-buttons" variants={itemVariants}>
            <a href="#projects" className="primary-btn">
              <span>View Projects</span>
              <FaArrowRight />
            </a>

            <a href="#contact" className="secondary-btn">
              <span>Contact Me</span>
            </a>
          </motion.div>

          <motion.div className="hero-stats" variants={itemVariants}>
            {STATS.map((stat) => (
              <motion.div
                className="stat-card"
                key={stat.label}
                whileHover={{ y: -8 }}
              >
                <Counter value={stat.value} suffix={stat.suffix} />
                <span>{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div className="hero-marquee" variants={itemVariants}>
            <div className="marquee-track">
              {[...STACK_ICONS, ...STACK_ICONS].map((item, index) => (
                <span className="marquee-item" key={index}>
                  {item.icon}
                  {item.name}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>

      

        <motion.div
          className="hero-right"
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
        >
          <div className="profile-tilt" ref={tiltRef}>
            <div className="profile-wrapper" ref={imageRef}>
              <img src={profileImg} alt="Madhukar" />
            </div>
          </div>

          <motion.div
            className="floating-card card-top"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 5 }}
          >
            <FaReact />
            <div>
              <h4>React Developer</h4>
              <p>Frontend Specialist</p>
            </div>
          </motion.div>

          <motion.div
            className="floating-card card-bottom"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 5, delay: 0.5 }}
          >
            <FaNodeJs />
            <div>
              <h4>Backend Developer</h4>
              <p>Node & Express</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Home;
