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
        tr: "Endovasküler Beyin Anevrizması Tedavisi",
        en: "Endovascular Brain Aneurysm Treatment",
      },
      description: {
        tr: "En ileri teknoloji ürünleri ve piyasanın en kaliteli malzemeleriyle hizmet veriyoruz. Özellikle beyin anevrizması, inme tedavileri ve periferik arter hastalığı alanlarında, en güncel çözümleri sunuyoruz. Dünya çapında kendini kanıtlamış birden fazla marka seçeneğimizle her ihtiyaca özel ürün desteği sağlıyoruz.",
        en: "We provide service with the most advanced technology products and highest quality materials in the market. We offer the latest solutions especially in brain aneurysm, stroke treatments and peripheral artery disease. With multiple globally proven brand options, we provide product support tailored to every need.",
      },
      image: "https://www.sevs.com.au/files/mastheads/10-surgery.jpg",
      link: "/urunler",
    },
    {
      id: 2,
      title: {
        tr: "Girişimsel Onkoloji",
        en: "Interventional Oncology",
      },
      description: {
        tr: "Kanser tedavisinde devrim yaratan kriyoablasyon yöntemiyle tümörleri dondurarak, mikrodalga ablasyon yöntemiyle tümörleri yakarak kesin ve etkili sonuçlar sağlıyoruz. Dünyanın en prestijli markalarına ait cihazlarla güvenilir ve ileri teknoloji hizmet sunuyoruz. Birçok farklı bölgedeki tümörlerde yüksek başarı oranı elde ediyoruz. Girişimsel onkolojide sadece bir yöntemle sınırlı kalmıyor, farklı tedavi seçenekleriyle de hastalarımıza çözüm sunuyoruz. Amacımız, kanserle mücadelede en etkili ve modern yöntemleri ulaştırmak.",
        en: "We provide precise and effective results by freezing tumors with the revolutionary cryoablation method and burning tumors with microwave ablation in cancer treatment. We offer reliable and advanced technology service with devices from the world's most prestigious brands. We achieve high success rates in tumors in many different regions. In interventional oncology, we are not limited to just one method, we also offer solutions to our patients with different treatment options. Our goal is to deliver the most effective and modern methods in the fight against cancer.",
      },
      image:
        "https://ysm-res.cloudinary.com/image/upload/v1/yms/prod/8d9718b5-44ea-472f-ab86-0db4a5811aee",
      link: "/urunler",
    },
    {
      id: 3,
      title: {
        tr: "Kalp ve Damar Cerrahisi & Kardiyoloji",
        en: "Cardiovascular Surgery & Cardiology",
      },
      description: {
        tr: "Kalp kapakları, tüm stent çeşitleri ve daha fazlası için en kapsamlı ürün portföyüne sahibiz. Alanında lider, dünya çapında tanınan markaların çözümleriyle hizmet veriyoruz. Her türlü girişimsel ve cerrahi ihtiyaca yönelik en kaliteli ürünleri sağlıyoruz. Kalp ve damar sağlığında güvenilirliği, teknolojiyi ve kaliteyi bir araya getiriyoruz. Sağlık profesyonellerine, her adımda en üst düzey desteği sunuyoruz.",
        en: "We have the most comprehensive product portfolio for heart valves, all types of stents and more. We provide service with solutions from globally recognized, leading brands in the field. We provide the highest quality products for all kinds of interventional and surgical needs. We combine reliability, technology and quality in cardiovascular health. We provide healthcare professionals with the highest level of support at every step.",
      },
      image:
        "https://dam.northwell.edu/m/790f0b92222eafc3/Drupal-web_LHH_Cardio_MG_047.jpg",
      link: "/urunler",
    },
    {
      id: 4,
      title: {
        tr: "Genel Cerrahi",
        en: "General Surgery",
      },
      description: {
        tr: "Yara bakımı, yanık tedavisi ve genel cerrahi alanında dünyanın en kaliteli markalarıyla hizmet sunuyoruz. Her ihtiyaca özel, en güvenilir ve etkili ürünleri profesyonellerle buluşturuyoruz. Gelişmiş yara bakım çözümleriyle hızlı iyileşme ve maksimum hasta konforu sağlıyoruz. Yanık tedavisinde, en ileri teknoloji ürünleriyle fark yaratıyoruz. Genel cerrahide kaliteyi ve güveni standart haline getiriyoruz.",
        en: "We provide services with the world's highest quality brands in wound care, burn treatment, and general surgery. We bring the most reliable and effective products tailored to every need to professionals. We ensure rapid healing and maximum patient comfort with advanced wound care solutions. We make a difference in burn treatment with the most advanced technology products. We make quality and trust the standard in general surgery.",
      },
      image:
        "https://sankohastanesi.com.tr/upload/bolum/temp/Genel-cerrahi-3775_h1200.jpg",
      link: "/urunler",
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
