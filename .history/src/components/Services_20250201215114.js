// src/components/Services.js
import React from "react";
import "./Services.css";
import expert from "../assets/images/expert.svg";
import innovation from "../assets/images/innovation.svg";
import support from "../assets/images/support.svg";
import partnership from "../assets/images/partnership.svg";

const services = [
  {
    title: "Expert Guidance",
    description:
      "Benefit from tailored, data-driven insights and strategic direction offered by our seasoned consultants, ensuring personalized solutions that align with your objectives.",
    image: expert,
  },
  {
    title: "Innovative Solutions",
    description:
      "Harness cutting-edge technology to drive growth and enhance efficiency, with innovative solutions meticulously designed to meet your evolving business needs and challenges.",
    image: innovation,
  },
  {
    title: "Reliable Support",
    description:
      "Count on our unwavering commitment to provide prompt and dependable assistance at every stage of your projects, ensuring smooth progress and successful outcomes.",
    image: support,
  },
  {
    title: "Strategic Alliance",
    description:
      "Forge a strategic alliance grounded in trust and transparency, where mutual success is prioritized through open communication and efforts towards excellence.",
    image: partnership,
  },
];

const Services = () => {
  return (
    <section className="services">
      <h1>What you can expect from us</h1>
      <div className="service-cards">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <img
              src={service.image}
              alt={service.title}
              className="service-image"
            />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
