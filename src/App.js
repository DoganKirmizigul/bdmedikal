import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Logo from "./components/Logo";
import { FaBars, FaTimes } from "react-icons/fa";

// Sayfaları import edelim
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Contact from "./pages/Contact";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Router>
      <div className="App">
        <nav className={`navbar ${isMenuOpen ? "menu-open" : ""}`}>
          <NavLink
            to="/"
            className="logo-link"
            onClick={() => setIsMenuOpen(false)}
          >
            <Logo />
          </NavLink>
          <button className="menu-button" onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
          <div className={`nav-links ${isMenuOpen ? "active" : ""}`}>
            <NavLink
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              HOME
            </NavLink>
            <NavLink
              to="/about"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              ABOUT
            </NavLink>
            <NavLink
              to="/products"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              PRODUCTS
            </NavLink>
            <NavLink
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              CONTACT
            </NavLink>
          </div>
        </nav>

        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
