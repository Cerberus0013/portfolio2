import Project from "../Project/project";
import React from "react";

const portfolio = [
  {
    id: 1,
    title: "Safer Sale",
    link: "deployed",
    github: "linktogithub",
    image: "../../assets/safer/Screen Shot 2021-05-13 at 4.22.27 PM.png",
    description: "This is an app designed to sell your unwanted goods and services in a safer manner, which provides suggestions on safe places to exchange your goods/services"
  },
  {
    id: 2,
    title: "Daily Planner",
    link: "website",
    github: "repo",
    image: "./assets/planner/Screen Shot 2021-07-02 at 11.33.40 AM.png",
    description: "This is a daily planner that helps plan your business day"
  },
];

function Portfolio() {
  return (
    <div>
      {portfolio.map((project) => (
        <Project
          id={project.id}
          title={project.title}
          link={project.link}
          github={project.github}
          image={project.image}
          description={project.description}
          key={project.id}
        />
      ))}
    </div>
  );
}

export default Portfolio;
