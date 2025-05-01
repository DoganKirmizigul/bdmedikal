import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaHospital,
  FaTruckMedical,
  FaHandHoldingMedical,
} from "react-icons/fa6";
import { useLanguage } from "../context/LanguageContext";
import { tr } from "../translations/tr";
import { en } from "../translations/en";
import "../styles/AboutPage.css";

function About() {
  const { language } = useLanguage();
  const t = language === "tr" ? tr : en;

  return (
    <div className="bdm-about-wrapper">
      <div className="bdm-about-bg-pattern"></div>

      <div className="bdm-about-container">
        <motion.div
          className="bdm-about-header"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {t.nav.about}
          </motion.h1>
          <motion.div
            className="bdm-header-line"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ delay: 0.5, duration: 0.8 }}
          ></motion.div>
        </motion.div>

        <div className="bdm-content-grid">
          <motion.div
            className="bdm-content-left"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <div className="bdm-year-badge">
              <span>{t.about.yearBadge}</span>
            </div>
            <h2>{t.about.title}</h2>
            <div className="bdm-stats">
              <div className="bdm-stat-item">
                <span className="bdm-stat-number">
                  {t.about.stats.experience.number}
                </span>
                <span className="bdm-stat-label">
                  {t.about.stats.experience.text}
                </span>
              </div>
              <div className="bdm-stat-item">
                <span className="bdm-stat-number">
                  {t.about.stats.projects.number}
                </span>
                <span className="bdm-stat-label">
                  {t.about.stats.projects.text}
                </span>
              </div>
            </div>
            <motion.div
              className="bdm-contact-button-wrapper"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <Link to="/iletisim" className="bdm-contact-button">
                {t.hero.ctaButton}
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="bdm-content-right"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <div className="bdm-info-card">
              <div className="bdm-card-section">
                <div className="bdm-icon-wrapper">
                  <FaHospital />
                </div>
                <p>{t.about.sections[0].text}</p>
              </div>

              <div className="bdm-card-section">
                <div className="bdm-icon-wrapper">
                  <FaTruckMedical />
                </div>
                <p>{t.about.sections[1].text}</p>
              </div>

              <div className="bdm-card-section">
                <div className="bdm-icon-wrapper">
                  <FaHandHoldingMedical />
                </div>
                <p>{t.about.sections[2].text}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default About;
