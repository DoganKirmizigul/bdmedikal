import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaFax, FaMapMarkerAlt } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";
import { tr } from "../translations/tr";
import { en } from "../translations/en";
import "../styles/ContactPage.css";
import contactPattern from "../assets/contact-pattern.svg";
import { toast } from "react-toastify";

function Contact() {
  const { language } = useLanguage();
  const t = language === "tr" ? tr : en;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("http://localhost:3001/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success(
          language === "tr"
            ? "Mesajınız başarıyla gönderildi!"
            : "Your message has been sent successfully!"
        );
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        toast.error(
          language === "tr"
            ? "Mesaj gönderilirken bir hata oluştu: " + data.error
            : "An error occurred while sending the message: " + data.error
        );
      }
    } catch (error) {
      toast.error(
        language === "tr"
          ? "Bir hata oluştu: " + error.message
          : "An error occurred: " + error.message
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bdm-contact-wrapper">
      <div className="bdm-contact-bg-pattern">
        <img src={contactPattern} alt="" className="contact-pattern-image" />
      </div>

      <div className="bdm-contact-container">
        <motion.div
          className="bdm-contact-header"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {t.nav.contact}
          </motion.h1>
          <motion.div
            className="bdm-header-line"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ delay: 0.5, duration: 0.8 }}
          ></motion.div>
        </motion.div>

        <div className="bdm-contact-grid">
          <motion.div
            className="bdm-contact-info"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <div className="bdm-info-card">
              <div className="bdm-contact-item">
                <a
                  href="mailto:info@bdmedikal.com"
                  className="bdm-contact-link"
                >
                  <div className="bdm-icon-wrapper">
                    <FaEnvelope />
                  </div>
                  <div className="bdm-contact-details">
                    <h3>Email</h3>
                    <span>info@bdmedikal.com</span>
                  </div>
                </a>
              </div>

              <div className="bdm-contact-item">
                <a href="tel:+902422277620" className="bdm-contact-link">
                  <div className="bdm-icon-wrapper">
                    <FaPhone />
                  </div>
                  <div className="bdm-contact-details">
                    <h3>{t.contact.phone}</h3>
                    <span>+90 242 227 76 20</span>
                  </div>
                </a>
              </div>

              <div className="bdm-contact-item">
                <div className="bdm-icon-wrapper">
                  <FaFax />
                </div>
                <div className="bdm-contact-details">
                  <h3>Fax</h3>
                  <span>+90 242 227 04 10</span>
                </div>
              </div>

              <div className="bdm-contact-item">
                <a
                  href="https://maps.app.goo.gl/aNgahWVdgmNh4w5P9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bdm-contact-link"
                >
                  <div className="bdm-icon-wrapper">
                    <FaMapMarkerAlt />
                  </div>
                  <div className="bdm-contact-details">
                    <h3>{t.contact.address}</h3>
                    <p>
                      {t.contact.addressText.line1}
                      <br />
                      {t.contact.addressText.line2}
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="bdm-contact-form"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder={t.contact.form.name}
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder={t.contact.form.email}
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  placeholder={t.contact.form.subject}
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div className="form-group message-group">
                <textarea
                  name="message"
                  placeholder={t.contact.form.message}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="8"
                  disabled={isSubmitting}
                ></textarea>
              </div>
              <button
                type="submit"
                className="bdm-submit-button"
                disabled={isSubmitting}
              >
                {isSubmitting
                  ? language === "tr"
                    ? "Gönderiliyor..."
                    : "Sending..."
                  : t.contact.form.submit}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
