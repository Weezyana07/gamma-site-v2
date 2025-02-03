import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Industries from "../components/Industries";
import Services from "../components/Services";
import Projects from "../components/Projects";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import "./Home.css";

const Home = () => {
  const [isNavScrolled, setIsNavScrolled] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsNavScrolled(true);
      } else {
        setIsNavScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {/* Header Section */}
      <header className="home-header">
        <div className="top-image"></div>
        <div className="mid-text">
          <p>
            At <span>GAMMA SPECTRE</span>, we specialize in providing
            comprehensive consultancy, information technology, and general
            solutions tailored to meet the diverse needs of our clients.
          </p>
        </div>
        <div className="bottom-image"></div>

        {/* Navigation */}
        <div className={`nav-wrapper ${isNavScrolled ? "sticky-nav" : ""}`}>
          <div className="logo">
            <a href="#">
              <img
                src="images/logo-home.png"
                alt="Logo"
                className={isNavScrolled ? "logo-small" : ""}
              />
            </a>
          </div>
          <button
            className="mobile-nav-toggle"
            onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
            aria-controls="primary-navigation"
            aria-expanded={isMobileNavOpen}
          >
            <img
              className="icon-hamburger"
              src="images/icon-hamburger.png"
              alt="Menu"
            />
          </button>
          <nav
            className={`primary-navigation ${
              isMobileNavOpen ? "open" : "closed"
            }`}
          >
            <ul className="nav-list">
              <li>
                <NavLink to="/" className="nav-link">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="nav-link">
                  About
                </NavLink>
              </li>
              <li className="dropdown-container">
                <NavLink to="/services" className="nav-link">
                  Services
                </NavLink>
                <ul className="dropdown">
                  <li>Consultancy</li>
                  <li>Information Technology</li>
                  <li>Manufacturing</li>
                  <li>Construction</li>
                  <li>General Contracts</li>
                </ul>
              </li>
              <li>
                <NavLink to="/contact" className="nav-link">
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>

        {/* Hero Section */}
        <div className="welcome">
          <h1 className="hero-title">Unlocking Potential:</h1>
          <h2 className="hero-subtitle">
            Transforming Businesses with Technology and Insight.
          </h2>
        </div>
      </header>

      {/* Main Content */}
      <div className="container">
        <Services />
        <Industries />
        <Projects />
        <Testimonials />
        <Contact />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
