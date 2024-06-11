import React from 'react';
import Project from './Project';
import './Projects.css';

const projectData = [
  {
    title: "HomeSMART",
    description: "A smart home system specifically designed for persons with disabilities to promote an inclusive world.",
    image: "/HomeSMART.png",
    link: "https://github.com/raymond0425/HomeSMART"
  },
  {
    title: "WordlePro - C++",
    description: "WordlePro is an improved version of the classic wordle game! A full-mark coursework in C++.",
    image: "/WordlePro.png",
    link: "https://github.com/raymond0425/WordlePro_Cplusplus"
  },
  {
    title: "BigTwo - Java",
    description: "BigTwo is an online multi-player BigTwo poker game coded in Java with OOP principles.",
    image: "/BigTwo.png",
    link: "https://github.com/raymond0425/BigTwo_Java"
  },
  {
    title: "raymond0425.github.io",
    description: "The fascinating self introduction website that I will keep working on until perfection!",
    image: "/ReactJS.png",
    link: "https://github.com/raymond0425/raymond0425.github.io"
  },
];

const Projects = () => {
  return (
    <section id="projects">
      <h1>Projects</h1>
      <div className="projects-container">
        {projectData.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
