import "../styles/skills.css";

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

const frontend = [
  { icon: <FaReact />, name: "React" },
  { icon: <SiJavascript />, name: "JavaScript" },
  { icon: <FaHtml5 />, name: "HTML5" },
  { icon: <FaCss3Alt />, name: "CSS3" },
];

const backend = [
  { icon: <FaNodeJs />, name: "Node.js" },
  { icon: <SiExpress />, name: "Express" },
  { icon: <SiMongodb />, name: "MongoDB" },
];

const programming = [
  { icon: <FaPython />, name: "Python" },
  { icon: <FaJava />, name: "Java" },
  { icon: <SiCplusplus />, name: "C++" },
];

const tools = [
  { icon: <FaGitAlt />, name: "Git" },
  { icon: <FaGithub />, name: "GitHub" },
  { icon: <FaAws />, name: "AWS" },
  { icon: <SiVite />, name: "Vite" },
];

function SkillGroup({ title, items }) {
  return (
    <div className="skill-group">
      <h3>{title}</h3>

      <div className="skill-grid">
        {items.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="skill-icon">{skill.icon}</div>
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Skills() {
  return (
    <section id="skills" className="skills">

      <div className="container">

        <p className="section-tag">MY SKILLS</p>

        <h2 className="section-title">
          Technologies <span>I Work With</span>
        </h2>

        <SkillGroup title="Frontend" items={frontend} />

        <SkillGroup title="Backend" items={backend} />

        <SkillGroup title="Programming Languages" items={programming} />

        <SkillGroup title="Tools & Cloud" items={tools} />

      </div>

    </section>
  );
}

export default Skills;