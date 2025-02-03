import React from "react";
import { NavLink } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <header className="home-header">
      <nav>
        <ul className="nav-list">
          <li>
            <NavLink
              exact
              to="/"
              className={({ isActive }) =>
                isActive ? "nav-link active-link" : "nav-link"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "nav-link active-link" : "nav-link"
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive ? "nav-link active-link" : "nav-link"
              }
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "nav-link active-link" : "nav-link"
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="welcome">
        <div className="h2-container">
          <h1 id="h1">Unlocking Potential:</h1>
        </div>
        <h2 id="h2">Transforming Businesses with Technology and Insight.</h2>
      </div>
      <div className="top-image"></div>
      <div className="bottom-image"></div>
      <div class="container"></div>
    </header>
  );
};

export default Home;
