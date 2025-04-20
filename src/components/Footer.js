import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Neurovasc</h3>
          <p>Leading Medical Technology</p>
          <p>Innovative Solutions, Reliable Results</p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/technology">Technology</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Products</h3>
          <ul>
            <li>Proender®</li>
            <li>Perdenser™</li>
            <li>Freepass®</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: info@neurovasc.co.uk</p>
          <p>Phone: 07976 888630</p>
          <p>Address: RH12 3XX Horsham, West Sussex, England</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Neurovasc. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
