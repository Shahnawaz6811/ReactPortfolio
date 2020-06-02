import React from "react";
import "./Portfolio.scss";
const projects = require("../../data/portfolio.json");
// console.log(projects);
const Portfolio = () => {
  return (
    <section id="works">
      <h1>Something i have built.</h1>
      <div id="wrapper">
        {projects.map((project, index) => (
          <div key={index} className={`item ${index % 2 === 0 ? "even" : ""}`}>
            <div className="img-container">
              <img src={project.image_src} alt={project.title} />
            </div>

            <div id="item-detail">
              <h2 id="title">{project.title}</h2>
              <div id="description">
                <p>{project.description}</p>
              </div>
              <div id="footer">
                <div id="tech">
                  {project.tech.map((tech,index) => (
                    <span key={index}>{tech}</span>
                  ))}
                  {/* <span>ReactJS</span> ·<span>GraphQL</span> ·
                  <span>Github API</span> */}
                </div>
                <a href="" className="link">
                  <i className="fa fa-github fa-2x"></i>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
