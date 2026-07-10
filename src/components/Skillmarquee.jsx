import "../styles/skillMarquee.css";

import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaAws,
  FaGithub,
} from "react-icons/fa";

const STACK = [
  { icon: <FaReact />, name: "React" },
  { icon: <FaNodeJs />, name: "Node.js" },
  { icon: <FaPython />, name: "Python" },
  { icon: <FaJava />, name: "Java" },
  { icon: <FaAws />, name: "AWS" },
  { icon: <FaGithub />, name: "GitHub" },
];

function SkillMarquee() {
  return (
    <div className="skill-marquee">
      <div className="skill-marquee-track">
        {/* Duplicated once so the loop has no visible seam */}
        {[...STACK, ...STACK].map((skill, index) => (
          <div className="skill-box" key={index}>
            {skill.icon}
            <h3>{skill.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillMarquee;
