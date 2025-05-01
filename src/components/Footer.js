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
              <Link to="/urunler">{t.nav.products}</Link>
            </li>
            <li>
              <Link to="/iletisim">{t.nav.contact}</Link>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>{t.footer.contact.title}</h4>
          <ul className="footer-contact">
            <li>
              <strong>{t.footer.contact.email}:</strong>
              <a href="mailto:info@bdmedikal.com"> info@bdmedikal.com</a>
            </li>
            <li>
              <strong>{t.footer.contact.phone}:</strong>
              <a href="tel:+902422277620"> +90 242 227 76 20</a>
            </li>
            <li>
              <strong>Fax:</strong>
              <a href="tel:+902422270410"> +90 242 227 04 10</a>
            </li>
            <li>
              <strong>{t.footer.contact.address}:</strong>
              <address>
                {language === "tr" ? (
                  <>
                    Kültür Mahallesi 3802 Sokak No: 7/B
                    <br />
                    Kepez, Antalya, Turkey
                  </>
                ) : (
                  <>
                    7/B, 3802 Street, Kultur District
                    <br />
                    Kepez, Antalya, Turkey
                  </>
                )}
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
