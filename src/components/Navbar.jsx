import { useState, useEffect } from "react";
import "../styles/navbar.css";

import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

const NAV_LINKS = [
  { id: "about", href: "#about" },
  { id: "journey", href: "#journey" },
  { id: "projects", href: "#projects" },
  { id: "skills", href: "#skills" },
  { id: "contact", href: "#contact" },
];

const SOCIALS = [
  {
    icon: <FaGithub />,
    href: "https://github.com/yourusername",
    label: "GitHub",
  },
  {
    icon: <FaLinkedin />,
    href: "https://linkedin.com/in/yourusername",
    label: "LinkedIn",
  },
  {
    icon: <FaInstagram />,
    href: "https://instagram.com/yourusername",
    label: "Instagram",
  },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        {/* Logo */}
        <a href="#home" className="logo" onClick={closeMenu}>
          Madhukar
        </a>

        {/* Navigation */}
        <ul className={menuOpen ? "nav-links active" : "nav-links"}>
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <a href={link.href} onClick={closeMenu}>
                {t(
                  `navbar.${link.id}`,
                  link.id.charAt(0).toUpperCase() + link.id.slice(1)
                )}
              </a>
            </li>
          ))}

          {/* Mobile Social Icons */}
          <li className="mobile-socials">
            {SOCIALS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </li>
        </ul>

        {/* Right Side */}
        <div className="nav-right">
          <div className="nav-socials">
            {SOCIALS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <div
            className="menu-icon"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;