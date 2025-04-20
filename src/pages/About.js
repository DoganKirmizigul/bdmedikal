import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function About() {
  const heroBackgroundStyle = {
    background: `linear-gradient(rgba(26, 54, 93, 0.9), rgba(43, 76, 126, 0.9)), url("https://images.unsplash.com/photo-1631549916768-4119b2e5f926?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div className="page-container">
      <motion.section
        className="about-hero-section"
        style={heroBackgroundStyle}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="about-hero-content">
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            We are Neurovasc.
          </motion.h1>
          <motion.h2
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Leading provider of endovascular treatment solutions in the UK.
          </motion.h2>
          <motion.p
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="about-hero-description"
          >
            We are dedicated to advancing the health and wellbeing of the UK
            population by providing a network of high-quality and cost-effective
            healthcare services.
          </motion.p>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <Link to="/contact" className="about-cta-button">
              Contact Us
            </Link>
          </motion.div>
        </div>
      </motion.section>

      <section className="about-content-section">
        <div className="about-grid">
          <motion.div
            className="about-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3>Who We Are</h3>
            <p>
              Based in the UK, we are dedicated to advancing the health and
              wellbeing of the UK population. We provide a network of
              high-quality and cost-effective healthcare services, education,
              and training for the prevention, diagnosis, and treatment of
              diseases in accordance with current medical standards.
            </p>
          </motion.div>

          <motion.div
            className="about-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3>Our Expertise</h3>
            <p>
              Our expert team is dedicated to supporting every endovascular
              specialist. After 15 years of service across the EU and EMEA, we
              now offer our service in the UK. Case observation, procedure
              participation and assistance, providing and presenting the right
              tools for each patient are our team's main objectives.
            </p>
          </motion.div>

          <motion.div
            className="about-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3>Our Mission</h3>
            <p>
              Our mission is to provide healthcare professionals with advanced
              and cost-effective treatment options by bringing reliable and
              effective technologies in endovascular treatments.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default About;
