import React, { useState, useEffect, useRef } from "react";
import { useLanguage } from "../context/LanguageContext";
import { tr } from "../translations/tr";
import { en } from "../translations/en";
import useCountUp from "../hooks/useCountUp";

const Stats = () => {
  const { language } = useLanguage();
  const t = language === "tr" ? tr : en;
  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef(null);

  const experienceCount = useCountUp(isVisible ? "25" : "0");
  const casesCount = useCountUp(isVisible ? "1000" : "0");
  const productsCount = useCountUp(isVisible ? "50" : "0");
  const hospitalsCount = useCountUp(isVisible ? "100" : "0");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  return (
    <div className="stats-section" ref={statsRef}>
      <div className="stat-item">
        <div className="stat-number">{experienceCount}+</div>
        <div className="stat-label">{t.stats.experience.text}</div>
      </div>
      <div className="stat-item">
        <div className="stat-number">{casesCount}+</div>
        <div className="stat-label">{t.stats.cases.text}</div>
      </div>
      <div className="stat-item">
        <div className="stat-number">{productsCount}+</div>
        <div className="stat-label">{t.stats.products.text}</div>
      </div>
      <div className="stat-item">
        <div className="stat-number">{hospitalsCount}+</div>
        <div className="stat-label">{t.stats.hospitals.text}</div>
      </div>
    </div>
  );
};

export default Stats;
