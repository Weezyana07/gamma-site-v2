// src/components/Footer.js
import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { ReactComponent as FacebookLogo } from "../assets/images/facebook.svg";
import { ReactComponent as XLogo } from "../assets/images/xx.svg";

const Footer = () => {
  return (
    <footer>
      <div className="footer-body">
        <div className="footer-section">
          <p>
            <span className="comp">Gamma Spectre Solutions Limited</span>
            <br /> <span className="stra">Strategic Solutions</span>
          </p>
          <br />
          <div className="social-links">
            <a href="#facebook" aria-label="Facebook">
              <FacebookLogo className="social-icon" />
            </a>
            {"|"}
            <a href="#x" aria-label="X">
              <XLogo className="social-icon" />
            </a>
          </div>
        </div>
        <div className="footer-section">
          <p>
            <span className="bold">Company</span>
          </p>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <p>
            <span className="bold">Get in touch</span>
          </p>
          15 Bujumbura Str. Wuse 2 FCT, Abuja.
          <br />
          info@gammaspectre.com.ng
          <br />
          +234 808 144 0207
          <br />
          +234 703 641 9054
          <br />
          <p>
            © 2024 <span className="comp">Gamma Spectre Solutions Limited</span>
            . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
