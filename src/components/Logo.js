import React from "react";
import logo from "../assets/images/logo.png";

function Logo() {
  return (
    <div
      className="logo-container"
      style={{ display: "flex", alignItems: "center", gap: "8px" }}
    >
      <img
        src={logo}
        alt="bdmedikal Logo"
        style={{ height: "80px", width: "auto" }} // Logonun boyutunu artırdık
      />
      <svg
        width="200" // SVG genişliğini artırdık
        height="50"
        viewBox="0 0 250 50" // Görünüm kutusunu güncelledik
        xmlns="http://www.w3.org/2000/svg"
      >
        <text
          x="0"
          y="40"
          fill="#32427d"
          fontFamily="Arial"
          fontSize="40" // Yazı boyutunu artırdık
          fontWeight="bold"
        >
          BD Medical
        </text>
      </svg>
    </div>
  );
}

export default Logo;
