import "../styles/footer.css";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Left */}

        <div className="footer-left">

          <h2>
            Madhu<span>.</span>
          </h2>

          <p>
            Full Stack MERN Developer passionate about building modern,
            responsive, and scalable web applications with beautiful UI and
            clean code.
          </p>

        </div>

        

        <div className="footer-center">

          <h3>Quick Links</h3>

          <a href="#home">Home</a>

          <a href="#about">About</a>

          <a href="#skills">Skills</a>

          <a href="#projects">Projects</a>

          <a href="#contact">Contact</a>

        </div>

        

        <div className="footer-right">

          <h3>Connect</h3>

          <div className="footer-social">

            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>

            <a href="mailto:yourmail@gmail.com">
              <FaEnvelope />
            </a>

          </div>

          <a href="#home" className="scroll-top">
            <FaArrowUp />
          </a>

        </div>

      </div>

      <div className="footer-bottom">

        

      </div>

    </footer>
  );
}

export default Footer;