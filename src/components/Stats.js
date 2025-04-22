import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { tr } from "../translations/tr";
import { en } from "../translations/en";

const Stats = () => {
  const { language } = useLanguage();
  const t = language === "tr" ? tr : en;

  return (
    <div className="stats-section">
      <div className="stat-item">
        <div className="stat-number">{t.stats.experience.number}</div>
        <div className="stat-label">{t.stats.experience.text}</div>
      </div>
      <div className="stat-item">
        <div className="stat-number">{t.stats.cases.number}</div>
        <div className="stat-label">{t.stats.cases.text}</div>
      </div>
      <div className="stat-item">
        <div className="stat-number">{t.stats.products.number}</div>
        <div className="stat-label">{t.stats.products.text}</div>
      </div>
      <div className="stat-item">
        <div className="stat-number">{t.stats.hospitals.number}</div>
        <div className="stat-label">{t.stats.hospitals.text}</div>
      </div>
    </div>
  );
};

export default Stats;
