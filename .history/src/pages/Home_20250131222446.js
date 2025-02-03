// src/pages/Home.js
import React from "react";
//import Header from "../components/Header";
// import Services from "../components/Services";
// import Industries from "../components/Industries";
// import Projects from "../components/Projects";
// import Testimonials from "../components/Testimonials";
// import Contact from "../components/Contact";
// import Footer from "../components/Footer";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="background">
          <Header />
          <div className="overlay">
            <div className="hero-content">
              <h1>Unlocking Potential</h1>
              <p>Transforming Businesses with Technology and Insight.</p>
              <button>READ MORE</button>
            </div>
          </div>
        </div>
        <div className="introduction">
          <p>
            At <span>GAMMA SPECTRE</span>, we specialize in providing
            comprehensive consultancy, information technology, and general
            solutions tailored to meet the diverse needs of our clients. With a
            deep understanding of industry trends and technological
            advancements, our team of experts collaborates closely with
            businesses to unlock their full potential and drive sustainable
            growth
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
