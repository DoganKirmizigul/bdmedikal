import React, { useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import { tr } from "../translations/tr";
import { en } from "../translations/en";
import "../styles/Products.css";

const Products = () => {
  const { language } = useLanguage();
  const t = language === "tr" ? tr : en;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const partners = [
    {
      name: "Terumo Neuro",
      logo: "https://mma.prnewswire.com/media/2613109/Terumo_Neuro___Logo.jpg?p=facebook",
      url: "https://www.terumoneuro.com",
    },
    {
      name: "Boston Scientific",
      logo: "https://verbashadow.com/wp-content/uploads/2024/01/Boston-Scientific.png",
      url: "https://www.bostonscientific.com",
    },
    {
      name: "Balt",
      logo: "https://media.licdn.com/dms/image/v2/D4E0BAQEYwL5zLtCNlg/company-logo_200_200/company-logo_200_200/0/1730815810486/balt_group_logo?e=2147483647&v=beta&t=ZAHHYpDYQ-oxU1xRN02_J9kic5_prw-91uVGeMZRxns",
      url: "https://baltgroup.com",
    },
    {
      name: "AngioDynamics",
      logo: "https://mms.businesswire.com/media/20240401305298/en/664620/22/ANGO_-_Logo.jpg",
      url: "https://www.angiodynamics.com",
    },
    {
      name: "Abbott",
      logo: "https://www.tr.abbott/etc.clientlibs/abbott-platform/clientlibs/clientlib-site/resources/images/abbott-logo.png",
      url: "https://www.abbott.com",
    },
    {
      name: "Taha Biomed",
      logo: "https://www.tahabiomed.com/wp-content/uploads/LOGO-Y.png",
      url: "https://www.tahabiomed.com",
    },
    {
      name: "Varian",
      logo: "https://www.mpo-mag.com/wp-content/uploads/sites/7/2019/07/091_main.jpg",
      url: "https://www.varian.com",
    },
    {
      name: "Merit Medical",
      logo: "https://www.eleapsoftware.com/wp-content/uploads/2019/11/merit-medical-systems-logo-vector.png.webp",
      url: "https://www.merit.com",
    },
    {
      name: "Edwards Lifesciences",
      logo: "https://www.hprc.org/wp-content/uploads/2022/09/EW-Resized.png",
      url: "https://www.edwards.com",
    },
    {
      name: "Bentley",
      logo: "https://www.bentley.global/img/logo.png",
      url: "https://www.bentley.global",
    },
    {
      name: "Andramed",
      logo: "https://lh6.googleusercontent.com/proxy/iO16CaSC7SZc5AScqSDTh4bcHRLVzPu9zjfzc7sr31CwwcrUkV2bc0xOJPu6_pC5R6lZX76ZeUUTUnn3O-8I2UOJ8YaLLYWrtFkee7sSwDKa1g",
      url: "https://andramed.com",
    },
    {
      name: "Maxiocel",
      logo: "https://pbs.twimg.com/profile_images/1084781866228609024/7f76mRAb_400x400.jpg",
      url: "https://maxiocel.co.uk",
    },
    {
      name: "Polymem",
      logo: "https://polymem.com/wp-content/uploads/2025/03/polymemsmall.png",
      url: "https://polymem.com",
    },
    {
      name: "Chemosat",
      logo: "https://chemosat.com/assets/img/chemosat-logo.svg",
      url: "https://chemosat.com",
    },
    {
      name: "Mavera Medical",
      logo: `https://www.maveramedical.com.tr/album/maveramedical/sayfalar/1626096868-XCxox.png?v=${Date.now()}`,
      url: "https://www.maveramedical.com.tr",
    },
  ];

  return (
    <div className="products-page">
      <section className="partner-hero">
        <div className="partner-hero-content">
          <h1>
            {language === "tr"
              ? "Güvenilir Ortaklarımız"
              : "Our Trusted Partners"}
          </h1>
          <p>{t.partners.description}</p>
        </div>
        <div className="partner-hero-shapes">
          <div className="hero-shape hero-shape-1"></div>
          <div className="hero-shape hero-shape-2"></div>
          <div className="hero-shape hero-shape-3"></div>
        </div>
      </section>

      <section className="partners-section">
        <div className="partners-grid">
          {partners.map((partner, index) => (
            <a
              key={index}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="partner-card"
              aria-label={partner.name}
            >
              <div className="partner-logo-container">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="partner-logo"
                  loading="lazy"
                />
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Products;
