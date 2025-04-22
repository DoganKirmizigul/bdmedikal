import React from "react";
import { motion } from "framer-motion";
import Products from "../components/Products";

const Home = () => {
  return (
    <div className="home-page">
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
          <h1>Sağlık Sektöründe Güvenilir</h1>
          <h1>Çözüm Ortağınız</h1>
          <p className="hero-subtitle">
            15 yıl yakın deneyimimiz ve 1000'den fazla başarılı vaka desteğimiz
            ile sağlık sektörüne yenilikçi çözümler sunuyoruz
          </p>
          <div className="hero-buttons">
            <button className="primary-button">Ürünlerimizi İnceleyin</button>
            <button className="secondary-button">
              Bizimle İletişime Geçin
            </button>
          </div>
        </div>
      </section>

      <div className="stats-section">
        <div className="stat-item">
          <div className="stat-number">15+</div>
          <div className="stat-label">Yıllık Deneyim</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">1000+</div>
          <div className="stat-label">Vaka Desteği</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">50+</div>
          <div className="stat-label">Global Partner</div>
        </div>
      </div>

      <Products />
    </div>
  );
};

export default Home;
