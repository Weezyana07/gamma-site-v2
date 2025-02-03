import react from "react";
import { NavLink } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <header class="primary-header">
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
                  <a href="#">about</a>
                </li>
                <li class="li">
                  <a href="#">contact</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div class="welcome">
          <h2 id="h2">Unlocking Potential:</h2>
          <h1 id="h1">Transforming Businesses with Technology and Insight.</h1>
        </div>
      </div>
    </header>
  );
};

export default Home;
