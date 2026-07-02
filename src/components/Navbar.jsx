import { useState, useEffect } from "react";
import "../styles/navbar.css";

import { FaBars, FaTimes } from "react-icons/fa";

import { useTranslation } from "react-i18next";

import LanguageSwitcher from "./LanguageSwitcher";

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

  const closeMenu = () => {

    setMenuOpen(false);

  };

  return (

    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>

      <div className="nav-container">

        {/* Logo */}

        <a href="#" className="logo">

          Madhukar

        </a>

        

        <ul className={menuOpen ? "nav-links active" : "nav-links"}>

          

          <li>

            <a href="#about" onClick={closeMenu}>

              {t("navbar.about")}

            </a>

          </li>

          <li>

            <a href="#skills" onClick={closeMenu}>

              {t("navbar.skills")}

            </a>

          </li>

          <li>

            <a href="#projects" onClick={closeMenu}>

              {t("navbar.projects")}

            </a>

          </li>

          

          <li>

            <a href="#contact" onClick={closeMenu}>

              {t("navbar.contact")}

            </a>

          </li>

          

          <li>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="resume-btn mobile-resume"
            >

              Resume

            </a>

          </li>

        </ul>

        

        <div className="nav-right">

          

          <LanguageSwitcher />

          {

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-btn desktop-resume"
          >

            Resume

          </a>

         

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
