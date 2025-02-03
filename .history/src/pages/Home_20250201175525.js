import React from "react";
import { NavLink } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <header className="home-header">
      <div className="top-image"></div>
      <p>hello</p>
      <div className="bottom-image"></div>
      <div class="container">
        <div className="wrapper">
          <div className="nav-wrapper">
            <div className="logo">
              <a href="#">
                <img src="images/logo-home.png" alt="Manage" />
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
              </ul>
            </nav>
          </div>
        </div>
        <div className="welcome">
          <div className="h1-container">
            <h1 id="h1">Unlocking Potential:</h1>
          </div>
          <h2 id="h2">Transforming Businesses with Technology and Insight.</h2>
        </div>
      </div>
    </header>
  );
};

export default Home;
