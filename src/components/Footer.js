import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="footer-logo">BD Medikal</h3>
          <p className="footer-description">
            Sağlık sektöründe yenilikçi çözümler ve güvenilir sonuçlar sunan
            lider medikal teknoloji şirketi.
          </p>
        </div>

        <div className="footer-section">
          <h4>Hızlı Bağlantılar</h4>
          <ul className="footer-links">
            <li>
              <Link to="/">Ana Sayfa</Link>
            </li>
            <li>
              <Link to="/hakkimizda">Hakkımızda</Link>
            </li>
            <li>
              <Link to="/teknoloji">Teknoloji</Link>
            </li>
            <li>
              <Link to="/urunler">Ürünler</Link>
            </li>
            <li>
              <Link to="/iletisim">İletişim</Link>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Ürünler</h4>
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
          <h4>İletişim</h4>
          <ul className="footer-contact">
            <li>
              <strong>Email:</strong>
              <a href="mailto:info@bdmedikal.com.tr"> info@bdmedikal.com.tr</a>
            </li>
            <li>
              <strong>Telefon:</strong>
              <a href="tel:+902167888888"> +90 (216) 788 88 88</a>
            </li>
            <li>
              <strong>Adres:</strong>
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
          &copy; {new Date().getFullYear()} BD Medikal. Tüm hakları saklıdır.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
