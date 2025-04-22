import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { tr } from "../translations/tr";
import { en } from "../translations/en";

const Hero = () => {
  const { language } = useLanguage();
  const translations = language === "tr" ? tr : en;
};

export default Hero;
