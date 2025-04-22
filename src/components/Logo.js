import React from "react";
import logo from "../assets/images/logo.png";
import { useLanguage } from "../context/LanguageContext";
import { tr } from "../translations/tr";
import { en } from "../translations/en";

function Logo() {
  const { language } = useLanguage();
  const t = language === "tr" ? tr : en;

  return (
    <div
      className="logo-container"
      style={{ display: "flex", alignItems: "center", gap: "8px" }}
    >
      <img
        src={logo}
        alt={t.logo.alt}
        style={{ height: "80px", width: "auto" }}
      />
      <svg
        width="200"
        height="50"
        viewBox="0 0 250 50"
        xmlns="http://www.w3.org/2000/svg"
      >
        <text
          x="0"
          y="40"
          fill="#32427d"
          fontFamily="Arial"
          fontSize="40"
          fontWeight="bold"
        >
          {t.logo.text}
        </text>
      </svg>
    </div>
  );
}

export default Logo;
