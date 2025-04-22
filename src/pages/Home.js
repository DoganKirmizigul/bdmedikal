import React from "react";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Products from "../components/Products";

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <Stats />
      <Products />
    </div>
  );
};

export default Home;
