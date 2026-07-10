import { useState } from "react";
import "../styles/skills.css";
import { motion, AnimatePresence } from "framer-motion";

import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaJava,
  FaGitAlt,
  FaGithub,
  FaAws,
} from "react-icons/fa";

import {
  SiJavascript,
  SiExpress,
  SiMongodb,
  SiCplusplus,
  SiVite,
} from "react-icons/si";

/* ==========================================================
   DATA
   ========================================================== */

const TABS = [
  {
    id: "frontend",
    label: "Frontend",
    tagline: "Building interfaces people enjoy using.",
    items: [
      { icon: <FaReact />, name: "React" },
      { icon: <SiJavascript />, name: "JavaScript" },
      { icon: <FaHtml5 />, name: "HTML5" },
      { icon: <FaCss3Alt />, name: "CSS3" },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    tagline: "APIs and systems that hold up under real use.",
    items: [
      { icon: <FaNodeJs />, name: "Node.js" },
      { icon: <SiExpress />, name: "Express" },
      { icon: <SiMongodb />, name: "MongoDB" },
    ],
  },
  {
    id: "programming",
    label: "Languages",
    tagline: "Core problem-solving foundations.",
    items: [
      { icon: <FaPython />, name: "Python" },
      { icon: <FaJava />, name: "Java" },
      { icon: <SiCplusplus />, name: "C++" },
    ],
  },
  {
    id: "tools",
    label: "Tools & Cloud",
    tagline: "How I ship, version and deploy work.",
    items: [
      { icon: <FaGitAlt />, name: "Git" },
      { icon: <FaGithub />, name: "GitHub" },
      { icon: <FaAws />, name: "AWS" },
      { icon: <SiVite />, name: "Vite" },
    ],
  },
];

/* ==========================================================
   COMPONENT
   ========================================================== */

function Skills() {
  const [activeId, setActiveId] = useState(TABS[0].id);
  const activeTab = TABS.find((tab) => tab.id === activeId);

  return (
    <section id="skills" className="skills">

      <div className="skills-glow" />

      <div className="container">

        {/* Header */}

        <motion.p
          className="section-tag"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          MY SKILLS
        </motion.p>

        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Technologies <span>I Work With</span>
        </motion.h2>

        {/* Tabs */}

        <motion.div
          className="skills-tabs"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          viewport={{ once: true }}
        >
          {TABS.map((tab) => (
            <button
              key={tab.id}
              className={`skills-tab ${activeId === tab.id ? "active" : ""}`}
              onClick={() => setActiveId(tab.id)}
            >
              {activeId === tab.id && (
                <motion.span
                  layoutId="tab-pill"
                  className="tab-pill"
                  transition={{ type: "spring", duration: 0.5 }}
                />
              )}
              <span className="tab-label">{tab.label}</span>
            </button>
          ))}
        </motion.div>

        {/* Tagline */}

        <AnimatePresence mode="wait">
          <motion.p
            key={activeTab.id + "-tagline"}
            className="skills-tagline"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
          >
            {activeTab.tagline}
          </motion.p>
        </AnimatePresence>

        {/* Skill Grid */}

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab.id}
            className="skill-grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab.items.map((skill, index) => (
              <motion.div
                className="skill-card"
                key={skill.name}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                whileHover={{ y: -8 }}
              >
                <div className="skill-icon">{skill.icon}</div>
                <p>{skill.name}</p>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

      </div>

    </section>
  );
}

export default Skills;
