import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { tr } from "../translations/tr";
import { en } from "../translations/en";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const t = language === "tr" ? tr : en;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="container">
        <Link to="/" className="logo-container">
          <div className="logo-text">
            <h1 className="logo-title">
              BD <span>Medikal</span>
            </h1>
            <div className="logo-subtitle">{t.logo.subtitle}</div>
          </div>
        </Link>

        <div className="nav-right">
          <div className={`nav-links ${isMenuOpen ? "active" : ""}`}>
            <Link to="/" onClick={() => setIsMenuOpen(false)}>
              {t.nav.home}
            </Link>
            <Link to="/hakkimizda" onClick={() => setIsMenuOpen(false)}>
              {t.nav.about}
            </Link>
            <Link to="/urunler" onClick={() => setIsMenuOpen(false)}>
              {t.nav.products}
            </Link>
            <Link to="/iletisim" onClick={() => setIsMenuOpen(false)}>
              {t.nav.contact}
            </Link>
          </div>

          <div className="language-selector">
            <select
              value={language}
              onChange={(e) => toggleLanguage(e.target.value)}
              className="language-select"
            >
              <option value="tr">TR</option>
              <option value="en">EN</option>
            </select>
          </div>

          <button
            className={`menu-button ${isMenuOpen ? "active" : ""}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
