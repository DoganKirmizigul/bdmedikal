import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { tr } from "../translations/tr";
import { en } from "../translations/en";

const Hero = () => {
  const { language } = useLanguage();
  const t = language === "tr" ? tr : en;

  return (
    <section
      className="hero-section"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/home-background.png)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="hero-content">
        <h1>{t.hero.title}</h1>
        <h2>{t.hero.subtitle}</h2>
        <p className="hero-subtitle">{t.hero.description}</p>
        <div className="hero-buttons">
          <Link to="/urunler" className="primary-button">
            {t.hero.exploreButton}
          </Link>
          <Link to="/iletisim" className="secondary-button">
            {t.hero.ctaButton}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
