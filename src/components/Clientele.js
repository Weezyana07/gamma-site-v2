// src/components/Clientele.js
import React from "react";
import "./Clientele.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import customer1Image from "../assets/images/copslogo.png";
import customer2Image from "../assets/images/defencelogo.png";
import customer3Image from "../assets/images/minedulogo.png";

const clienteleData = [
  {
    name: "Cops Limited",
    image: customer1Image,
  },
  {
    name: "Federal Ministry of Defence",
    image: customer2Image,
  },
  {
    name: "Federal Ministry of Education",
    image: customer3Image,
  },
];

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Clientele = () => {
  return (
    <section className="clientele">
      <div className="clientele-background">
        <div className="left-bg"></div>
        <div className="right-bg"></div>
      </div>
      <div className="clientele-carousel-container">
        <h2>Our Clientele</h2>
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
        >
          {clienteleData.map((client, index) => (
            <div key={index} className="clientele-card">
              <div className="clientele-image-container">
                <img
                  src={client.image}
                  alt={client.name}
                  className="clientele-image"
                />
              </div>
              <div className="clientele-info">
                <h3>{client.name}</h3>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Clientele;
