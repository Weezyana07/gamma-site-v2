import React from "react";
import { NavLink } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <header className="home-header">
        <div className="top-image"></div>
        <div className="mid-text">
          <p>
            At <span>GAMMA SPECTRE</span>, we specialize in providing
            comprehensive consultancy, information technology, and general
            solutions tailored to meet the diverse needs of our clients. With a
            deep understanding of industry trends and technological
            advancements, our team of experts collaborates closely with
            businesses to unlock their full potential and drive sustainable
            growth.
          </p>
        </div>
        <div className="bottom-image"></div>
        <div class="">
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
            <h2 id="h2">
              Transforming Businesses with Technology and Insight.
            </h2>
          </div>
        </div>
      </header>
      <section class="services">
        <div class="container">
          <h1>What you can expect from us</h1>
          <h2>
            At <span>GAMMA SPECTRE</span>, we specialize in providing
            comprehensive consultancy, information technology, and general
            solutions tailored to meet the diverse needs of our clients. With a
            deep understanding of industry trends and technological
            advancements, our team of experts collaborates closely with
            businesses to unlock their full potential and drive sustainable
            growth
          </h2>
          <div class="flex" id="flex">
            <div class="service-example">
              <div class="circle">
                <div class="icon">
                  <img src="images/expert.svg" />
                </div>
              </div>
              <h3>Expert Guidance</h3>
              <p>
                Gain tailored insights and expert guidance for strategic,
                goal-aligned solutions.
              </p>
            </div>
            <div class="service-example">
              <div class="circle">
                <div class="icon">
                  <img src="images/innovation.svg" />
                </div>
              </div>
              <h3>Innovative Solutions</h3>
              <p>
                Leverage advanced technology for growth, efficiency, and
                tailored solutions.
              </p>
            </div>
            <div class="service-example third">
              <div class="circle">
                <div class="icon">
                  <img src="images/support.svg" />
                </div>
              </div>
              <h3>Reliable Support</h3>
              <p>
                Gain insights, leverage technology, and trust our support for
                success.
              </p>
            </div>
            <div class="service-example">
              <div class="circle">
                <div class="icon">
                  <img src="images/partnership.svg" />
                </div>
              </div>
              <h3>Collaborative Partnership</h3>
              <p>
                Build a trusted partnership with transparency, collaboration,
                and shared success.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
