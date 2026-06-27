import "../styles/about.css";
import { motion } from "framer-motion";
import { FaLaptopCode, FaGraduationCap, FaRocket } from "react-icons/fa";
import profileImg from "../assets/profile.png";

function About() {
  return (
    <section className="about" id="about">
      <div className="container">

        {/* Tag */}
        <motion.p
          className="section-tag"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          ABOUT ME
        </motion.p>

        {/* Title */}
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Passionate Developer <span>.</span>
        </motion.h2>

        <div className="about-grid">

          {/* LEFT SIDE */}
          <motion.div
            className="about-left"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3>
              Turning Ideas into <span>Digital Experiences</span>
            </h3>

            <p>
              I'm Madhu Vasamsetti, a Full Stack MERN Developer passionate about
              building scalable web applications.
            </p>

            <p>
              I enjoy solving real-world problems using React, Node.js, Express
              and MongoDB while creating modern UI.
            </p>

            <div className="about-stats">
              <motion.div className="stat-card" whileHover={{ scale: 1.05 }}>
                <h1>10+</h1>
                <p>Projects</p>
              </motion.div>

              <motion.div className="stat-card" whileHover={{ scale: 1.05 }}>
                <h1>2+</h1>
                <p>Internships</p>
              </motion.div>

              <motion.div className="stat-card" whileHover={{ scale: 1.05 }}>
                <h1>15+</h1>
                <p>Technologies</p>
              </motion.div>
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            className="about-right"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >

            {/* IMAGE */}
            <motion.div
              className="about-img"
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
            >
              <img src={profileImg} alt="profile" />
            </motion.div>

            <motion.div className="info-card" whileHover={{ scale: 1.05 }}>
              <FaLaptopCode />
              <h3>Development</h3>
              <p>React, Node.js, Express, MongoDB, REST APIs</p>
            </motion.div>

            <motion.div className="info-card" whileHover={{ scale: 1.05 }}>
              <FaGraduationCap />
              <h3>Education</h3>
              <p>B.Tech Computer Science</p>
            </motion.div>

            <motion.div className="info-card" whileHover={{ scale: 1.05 }}>
              <FaRocket />
              <h3>Goal</h3>
              <p>Become a Software Engineer at Microsoft.</p>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default About;

