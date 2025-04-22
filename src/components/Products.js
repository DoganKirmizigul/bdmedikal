import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { tr } from "../translations/tr";
import { en } from "../translations/en";

const Products = () => {
  const { language } = useLanguage();
  const t = language === "tr" ? tr : en;

  const products = [
    {
      id: 1,
      title: {
        tr: "Embolic Protection Device",
        en: "Embolic Protection Device",
      },
      description: {
        tr: "Karotis arter müdahalesi için geliştirilmiş, yenilikçi filtre tasarımı ile distal embolizasyona karşı güvenilir koruma sağlayan cihaz.",
        en: "Advanced protection device for carotid artery intervention, providing reliable protection against distal embolization with its innovative filter design.",
      },
      image:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80",
      link: "/urunler/embolic-protection",
    },
    {
      id: 2,
      title: {
        tr: "Kardiyovasküler Stentler",
        en: "Cardiovascular Stents",
      },
      description: {
        tr: "En son teknoloji ile üretilmiş, yüksek esneklik ve dayanıklılık sunan kardiyovasküler stent sistemleri.",
        en: "State-of-the-art cardiovascular stent systems offering high flexibility and durability.",
      },
      image:
        "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&q=80",
      link: "/urunler/stentler",
    },
    {
      id: 3,
      title: {
        tr: "Diagnostik Kateterler",
        en: "Diagnostic Catheters",
      },
      description: {
        tr: "Hassas tanı ve tedavi için özel olarak tasarlanmış, yüksek performanslı diagnostik kateter çözümleri.",
        en: "High-performance diagnostic catheter solutions specially designed for precise diagnosis and treatment.",
      },
      image:
        "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80",
      link: "/urunler/kateterler",
    },
  ];

  return (
    <section className="products-family-section">
      <div className="section-header">
        <h2>{t.products.title}</h2>
        <p>{t.products.description}</p>
      </div>

      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-image">
              <img src={product.image} alt={product.title[language]} />
            </div>
            <div className="product-content">
              <h3 className="product-title">{product.title[language]}</h3>
              <p className="product-description">
                {product.description[language]}
              </p>
              <Link to={product.link} className="product-link">
                {t.products.details} →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
