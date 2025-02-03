import React from "react";
import { NavLink } from "react-router-dom";
import Card from "../components/Card";
import Card1 from "../components/Card1";
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
      <section class="section1">
        <div class="">
          <h1>What you can expect from us</h1>
          <div className="card-content">
            <Card
              image="/images/expert.svg"
              header="Expert Guidance"
              text="Benefit from tailored, data-driven insights and strategic direction offered by our seasoned consultants, ensuring personalized solutions that align with your objectives."
            />
            <Card
              image="/images/innovation.svg"
              header="Innovative Solutions"
              text="Harness technology for growth with innovative solutions tailored to your business. Build trust through collaboration, transparency, and open communication for shared success."
            />
            <Card
              image="images/support.svg"
              header="Reliable Support"
              text="Count on our unwavering commitment to provide prompt and dependable assistance at every stage of your projects, ensuring smooth progress and successful outcomes."
            />
            <Card
              image="images/partnership.svg"
              header="Collaborative Partnership"
              text="Forge a collaborative partnership grounded in trust and transparency, where our mutual success is prioritized through open communication and collective efforts towards achieving excellence."
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
