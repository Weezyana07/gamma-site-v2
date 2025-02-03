import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <header className="home-header">
      <div className="top-image"></div>
      <div className="bottom-image"></div>
      <div class="container">
        <div class="wrapper">
          <div class="nav-wrapper">
            <div class="logo">
              <a href="#">
                <img src="images/Logo-Treehouse.png" alt="Manage" />
              </a>
            </div>
            <button
              class="mobile-nav-toggle"
              aria-controls="primary-navigation"
              aria-expanded="false"
            >
              <img
                class="icon-hamburger"
                src="images/icon-hamburger.png"
                alt=""
                aria-hidden="true"
              />

              <span class="visually-hidden">Menu</span>
            </button>
            <nav class="primary-navigation">
              <ul
                aria-label="Primary"
                role="list"
                class="nav-list"
                id="primary-navigation"
              >
                <li class="li">
                  <a href="#">home</a>
                </li>
                <li class="li">
                  <a href="#">services</a>
                </li>
                <li class="li">
                  <a href="#">portfolio</a>
                </li>
                <li class="li">
                  <a href="#">about</a>
                </li>
                <li class="li">
                  <a href="#">contact</a>
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
