// src/components/Projects.js
import React from "react";
import "./Projects.css";
import project1Image from "../assets/images/project1.jpeg"; // Example image path
import project2Image from "../assets/images/project2.jpeg";
import project3Image from "../assets/images/project3.jpeg";
import project4Image from "../assets/images/project4.jpeg";
import project5Image from "../assets/images/project5.jpeg";
import project6Image from "../assets/images/project6.jpeg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const projects = [
  {
    title: "Project One",
    description: "Description for project one.",
    image: project1Image,
    link: "/projects/project-one",
  },
  {
    title: "Project Two",
    description: "Description for project two.",
    image: project2Image,
    link: "/projects/project-two",
  },
  {
    title: "Project Three",
    description: "Description for project three.",
    image: project3Image,
    link: "/projects/project-three",
  },
  {
    title: "Project Four",
    description: "Description for project four.",
    image: project4Image,
    link: "/projects/project-four",
  },
  {
    title: "Project Five",
    description: "Description for project five.",
    image: project5Image,
    link: "/projects/project-five",
  },
  {
    title: "Project Six",
    description: "Description for project sic.",
    image: project6Image,
    link: "/projects/project-six",
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

const Projects = () => {
  return (
    <section className="projects">
      <h2>Projects</h2>
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
      >
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              {/* <a href={project.link} className="view-more">
                VIEW MORE
              </a> */}
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default Projects;
