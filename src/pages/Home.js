import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import heroBackground from "../assets/images/hero-bg.jpg";
import perdenserImage from "../assets/images/perdenser2.jpg";
import proenderImage from "../assets/images/proender.jpg";
import freepassImage from "../assets/images/freepass.jpg";

function Home() {
  const [activeCard, setActiveCard] = useState(null);
  const count1 = useMotionValue(0);
  const count2 = useMotionValue(0);
  const count3 = useMotionValue(0);

  const rounded1 = useTransform(count1, (latest) => Math.round(latest));
  const rounded2 = useTransform(count2, (latest) => Math.round(latest));
  const rounded3 = useTransform(count3, (latest) => Math.round(latest));

  React.useEffect(() => {
    const controls1 = animate(count1, 15, { duration: 2 });
    const controls2 = animate(count2, 1000, { duration: 2 });
    const controls3 = animate(count3, 50, { duration: 2 });

    return () => {
      controls1.stop();
      controls2.stop();
      controls3.stop();
    };
  }, []);

  const products = [
    {
      id: 1,
      title: "Proender®",
      description: "Single-Use Embolic Protection Device",
      details:
        "Specially designed protection system for carotid artery intervention",
      icon: "🔬",
    },
    {
      id: 2,
      title: "VascuGuard™",
      description: "Vascular Treatment System",
      details: "Innovative vascular protection and treatment technology",
      icon: "💉",
    },
    {
      id: 3,
      title: "NeuroCare",
      description: "Neurovascular Solutions",
      details: "Advanced neurovascular treatment systems",
      icon: "🧠",
    },
  ];

  return (
    <div>
      <motion.header
        className="hero-section"
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url(${heroBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          imageRendering: "crisp-edges",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="hero-content">
          <motion.h1
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
          >
            Leading Medical Technology
          </motion.h1>
          <motion.p
            className="subtitle"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Innovative Solutions, Reliable Results
          </motion.p>
          <motion.div
            className="hero-buttons"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <Link to="/products" className="primary-button">
              Our Products
            </Link>
            <Link to="/contact" className="secondary-button">
              Contact Us
            </Link>
          </motion.div>
        </div>
      </motion.header>

      <section className="stats-section">
        <div className="stats-container">
          <motion.div
            className="stat-item"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3>
              <motion.span>{rounded1}</motion.span>+
            </h3>
            <p>Years of Experience</p>
          </motion.div>
          <motion.div
            className="stat-item"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3>
              <motion.span>{rounded2}</motion.span>+
            </h3>
            <p>Case Support</p>
          </motion.div>
          <motion.div
            className="stat-item"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3>
              <motion.span>{rounded3}</motion.span>+
            </h3>
            <p>Global Partners</p>
          </motion.div>
        </div>
      </section>

      <section className="product-family-section">
        <h2>Our Product Family</h2>
        <div className="product-cards">
          <motion.div
            className="product-card"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img
              src={proenderImage}
              alt="Proender Device"
              className="product-image"
            />
            <h3>Proender®</h3>
            <p className="product-subtitle">Embolic Protection Device</p>
            <p>
              Advanced protection device for carotid artery intervention,
              providing reliable protection against distal embolization with its
              innovative filter design.
            </p>
            <Link to="/products?product=proender" className="learn-more-btn">
              Learn More
            </Link>
          </motion.div>

          <motion.div
            className="product-card"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img
              src={perdenserImage}
              alt="Perdenser Device"
              className="product-image"
            />
            <h3>Perdenser™</h3>
            <p className="product-subtitle">3D Perdenser Detachable Coil</p>
            <p>
              Offer excellent versatility, featuring a broad selection of sizes
              and varying degrees of softness to accommodate a wide range of
              clinical cases.
            </p>
            <Link to="/products?product=perrdenser" className="learn-more-btn">
              Learn More
            </Link>
          </motion.div>

          <motion.div
            className="product-card"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img
              src={freepassImage}
              alt="Freepass Device"
              className="product-image"
            />
            <h3>Freepass®</h3>
            <p className="product-subtitle">Microcatheter</p>
            <p>
              Freepass is designed to delivery of interventional devices
              provides enhanced access to the treatment site, improved stent
              trackability, and greater stent deployment accuracy.
            </p>
            <Link to="/products?product=freepass" className="learn-more-btn">
              Learn More
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="cta-section">
        <motion.div
          className="cta-content"
          whileInView={{ y: [50, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2>Future of Healthcare Technology</h2>
          <p>
            Contact us to learn more about our latest technologies and
            innovative solutions
          </p>
          <Link to="/contact" className="cta-button">
            Contact Us
          </Link>
        </motion.div>
      </section>
    </div>
  );
}

export default Home;
