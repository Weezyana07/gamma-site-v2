import React from "react";
import "./Industries.css";
import consulting from "../assets/images/Consulting.png";
import information from "../assets/images/information.png";
import manufacturing from "../assets/images/manufacturing.png";
import construction from "../assets/images/Construction.png";
import general from "../assets/images/General.png";

const industries = [
  {
    title: "Consultancy",
    description:
      "We offer specialised consultancy services to a wide range of industries, providing expert guidance and solutions for diverse challenges.",
    image: consulting,
    link: "/services/consultancy",
  },
  {
    title: "Information Technology",
    description:
      "Our IT division excels in delivering cutting-edge technology solutions, including network infrastructure, software development, and telecom services.",
    image: information,
    link: "/services/it",
  },
  {
    title: "Manufacturing",
    description:
      "Our manufacturing division is committed to delivering high-quality products through innovation, efficiency, and sustainability.",
    image: manufacturing,
    link: "/services/manufacturing",
  },
  {
    title: "Construction",
    description:
      "Our construction division is dedicated to the creation of quality infrastructures, from residential and commercial buildings to civil engineering projects.",
    image: construction,
    link: "/services/construction",
  },
  {
    title: "General Contract",
    description:
      "We manage and execute various projects efficiently, ensuring top-tier service delivery across multiple sectors.",
    image: general,
    link: "/services/general",
  },
];

const Industries = () => {
  return (
    <section className="industries">
      <div className="industry-content">
        <p className="industry-label">
          <span>WHAT WE DO</span>
        </p>
        <h2>Industries and Sectors</h2>
        <div className="industry-grid">
          {industries.map((industry, index) => (
            <div key={index} className="industry-card">
              <img
                src={industry.image}
                alt={industry.title}
                className="industry-image"
              />
              <h3 className="industry-title">{industry.title}</h3>
              <p className="industry-description">{industry.description}</p>
              <a href={industry.link} className="read-more">
                READ MORE
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
