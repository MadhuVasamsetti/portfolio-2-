import "../styles/home.css";
import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import useReveal from "../hooks/useReveal";

import myPhoto from "../assets/images/myphoto.jpg";

import {
  FaGithub,
  FaLinkedin,
  FaArrowDown,
} from "react-icons/fa";

function Hero() {
  const heroRef = useRef(null);
  const imageRef = useRef(null);

  const { t } = useTranslation();

  useReveal(heroRef);

  // Mouse Parallax Effect
  useEffect(() => {
    const image = imageRef.current;

    const handleMouseMove = (e) => {
      if (!image) return;

      const x = (window.innerWidth / 2 - e.clientX) / 35;
      const y = (window.innerHeight / 2 - e.clientY) / 35;

      image.style.transform = `translate(${x}px, ${y}px)`;
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );
    };
  }, []);

  return (
    <section
      id="home"
      className="hero"
      ref={heroRef}
    >

      {/* Background */}

      <div className="hero-background"></div>

      {/* Huge Background Text */}

      <div className="hero-bg-text">
        MADHU
      </div>

      {/* Floating Shapes */}

      <div className="floating one"></div>
      <div className="floating two"></div>
      <div className="floating three"></div>

      <div className="container hero-container">

        {/* LEFT SIDE */}

        <div className="hero-left">

          <motion.p
            className="hero-tag"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .6 }}
          >
            {t("hero.tag")}
          </motion.p>

          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: .8,
              delay: .2,
            }}
          >

            <span className="line">
              {t("hero.title1")}
            </span>

            <span className="line highlight">
              {t("hero.title2")}
            </span>

          </motion.h1>

          <motion.p
            className="hero-description"
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: .5,
            }}
          >
            {t("hero.description")}
          </motion.p>

          {/* Status */}

          <motion.div
            className="hero-status"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: .7,
            }}
          >

            <div className="status-dot"></div>

            {t("hero.status")}

          </motion.div>

          {/* Buttons */}

          <motion.div
            className="hero-buttons"
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: .9,
            }}
          >

            <a
              href="#projects"
              className="btn-primary"
            >
              {t("My projects")}
            </a>

            <a
              href="#contact"
              className="btn-secondary"
            >
              {t("Get in touch")}
            </a>

          </motion.div>

          {/* Social */}

          <motion.div
            className="hero-socials"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 1.1,
            }}
          >

            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>

          </motion.div>

        </div>

        {/* RIGHT SIDE */}
                <motion.div
          className="hero-right"
          initial={{
            opacity: 0,
            scale: 0.8,
            rotate: -6,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            rotate: 0,
          }}
          transition={{
            duration: 1,
            delay: 0.4,
          }}
        >
          {/* Background Glow */}

          <div className="hero-glow"></div>

          {/* Floating Badge */}

          
            

          {/* Profile Image */}

          <motion.div
            ref={imageRef}
            className="image-box"
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 5,
              ease: "easeInOut",
            }}
          >
            <img
              src={myPhoto}
              alt="Madhu Vasamsetti"
            />
          </motion.div>

          {/* Decorative Circle */}

          <motion.div
            className="hero-circle"
            animate={{
              rotate: 360,
            }}
            transition={{
              repeat: Infinity,
              duration: 30,
              ease: "linear",
            }}
          />
        </motion.div>

      </div>

      {/* Scroll Down */}

      <motion.div
        className="scroll-down"
        animate={{
          y: [0, 12, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
      >
        <a href="#about">
          <FaArrowDown />
        </a>
      </motion.div>

    </section>
  );
}

export default Hero;
