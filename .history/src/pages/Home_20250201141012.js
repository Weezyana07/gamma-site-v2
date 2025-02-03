import React from "react";
import { NavLink } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <header className="home-header">
      <div class="container">
        <div className="wrapper">
          <div className="nav-wrapper">
            <div className="logo">
              <a href="#">
                <img src="images/Logo-Treehouse.png" alt="Manage" />
              </a>
            </div>
            <button
              className="mobile-nav-toggle"
              aria-controls="primary-navigation"
              aria-expanded="false"
            >
              <img
                className="icon-hamburger"
                src="images/icon-hamburger.png"
                alt=""
                aria-hidden="true"
              />
              <span className="visually-hidden">Menu</span>
            </button>
            <nav className="primary-navigation">
              <ul
                aria-label="Primary"
                role="list"
                className="nav-list"
                id="primary-navigation"
              >
                <li className="li">
                  <NavLink to="/" exact activeClassName="active">
                    Home
                  </NavLink>
                </li>
                <li className="li">
                  <NavLink to="/services" activeClassName="active">
                    Services
                  </NavLink>
                </li>
                <li className="li">
                  <NavLink to="/portfolio" activeClassName="active">
                    Portfolio
                  </NavLink>
                </li>
                <li className="li">
                  <NavLink to="/about" activeClassName="active">
                    About
                  </NavLink>
                </li>
                <li className="li">
                  <NavLink to="/contact" activeClassName="active">
                    Contact
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="welcome">
          <div className="h2-container">
            <h1 id="h1">Unlocking Potential:</h1>
          </div>
          <h2 id="h2">Transforming Businesses with Technology and Insight.</h2>
        </div>
      </div>
    </header>
  );
};

export default Home;
