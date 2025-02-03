// src/components/Testimonials.js
import React from "react";
import "./Testimonials.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import customer1Image from "../assets/images/customer1.jpg";
import customer2Image from "../assets/images/customer1.jpg";
import customer3Image from "../assets/images/customer1.jpg";

const testimonials = [
  {
    name: "John Doe",
    position: "CEO, Company One",
    text: "This company provided exceptional service and support. Highly recommend!",
    image: customer1Image,
  },
  {
    name: "Jane Smith",
    position: "CTO, Company Two",
    text: "The insights and technology provided by this company have been invaluable.",
    image: customer2Image,
  },
  {
    name: "Emily Johnson",
    position: "Manager, Company Three",
    text: "Fantastic results, great team, and excellent support throughout.",
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

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="testimonials-background">
        <div className="left-bg"></div>
        <div className="right-bg"></div>
      </div>
      <div className="carousel-container">
        <h2>Our Customers</h2>
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="customer-image"
              />
              <div className="testimonial-info">
                <p>"{testimonial.text}"</p>
                <h3>{testimonial.name}</h3>
                <p>{testimonial.position}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
