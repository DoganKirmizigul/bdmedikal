import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { tr } from "../translations/tr";
import { en } from "../translations/en";

const Footer = () => {
  const { language } = useLanguage();
  const t = language === "tr" ? tr : en;

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="footer-logo">BD Medikal</h3>
          <p className="footer-description">{t.footer.description}</p>
        </div>

        <div className="footer-section">
          <h4>{t.footer.quickLinks.title}</h4>
          <ul className="footer-links">
            <li>
              <Link to="/">{t.nav.home}</Link>
            </li>
            <li>
              <Link to="/hakkimizda">{t.nav.about}</Link>
            </li>
            <li>
              <Link to="/teknoloji">{t.footer.quickLinks.technology}</Link>
            </li>
            <li>
              <Link to="/urunler">{t.nav.products}</Link>
            </li>
            <li>
              <Link to="/iletisim">{t.nav.contact}</Link>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>{t.footer.products.title}</h4>
          <ul className="footer-links">
            <li>
              <Link to="/urunler/proender">Proender®</Link>
            </li>
            <li>
              <Link to="/urunler/perdenser">Perdenser™</Link>
            </li>
            <li>
              <Link to="/urunler/freepass">Freepass®</Link>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>{t.footer.contact.title}</h4>
          <ul className="footer-contact">
            <li>
              <strong>{t.footer.contact.email}:</strong>
              <a href="mailto:info@bdmedikal.com.tr"> info@bdmedikal.com.tr</a>
            </li>
            <li>
              <strong>{t.footer.contact.phone}:</strong>
              <a href="tel:+902167888888"> +90 (216) 788 88 88</a>
            </li>
            <li>
              <strong>{t.footer.contact.address}:</strong>
              <address>
                Merkez Mah. Medikal Sk. No:123
                <br />
                34876 İstanbul, Türkiye
              </address>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} BD Medikal. {t.footer.copyright}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
