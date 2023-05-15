import React, { useState } from "react";
import "../style/css/Projects.css";
import netflix from "../images/netflix-clone.png";

const Projects = () => {
  const [mouseOver, setMouseOver] = useState(false);
  const handleMouseOver = () => {
    setMouseOver(true);
  };
  const handleMouseLeave = () => {
    setMouseOver(false);
  };

  return (
    <div className="projects">
      <div className="projects__page-name">
        <div className="projects__page-name__container">
          <h2>Projects</h2>
          <div className="projects__page-name__line"></div>
        </div>
      </div>

      <div className="projects__content">
        <div className="projects__content__first-div">
          <div
            className="projects__content__first-div__first-project"
            onMouseOver={handleMouseOver}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src={netflix}
              alt="netflix clone"
              style={
                mouseOver
                  ? { filter: "brightness(30%) blur(2px)" }
                  : { filter: "none" }
              }
            />
            {mouseOver && (
              <div className="projects__content__first-div__first-project__hovered">
                <h3>Netflix Clone</h3>
                <p>
                  This is my first larger React project, in which I created a
                  Netflix clone. The purpose of this project was to deepen my
                  skills and build my portfolio, and it was both fun and useful
                  for me.
                </p>
                <div className="spans-div">
                  <span>React</span>
                  <span>JavaScript</span>
                  <span>Sass & CSS</span>
                  <span>Context</span>
                  <span>Router</span>
                </div>

                <div className="buttons-div">
                  <a href="https://clone.donatas-k.com">
                    <button> Visit</button>
                  </a>

                  <a href="https://github.com/DonatasKokanauskas/netlix-clone">
                    <button>GitHub</button>
                  </a>
                </div>
              </div>
            )}
          </div>

          <div className="projects__content__first-div__second-project"></div>
        </div>
        <div className="projects__content__second-div">
          <div className="projects__content__second-div__first-project"></div>
          <div className="projects__content__second-div__second-project"></div>
        </div>
        <div className="projects__content__third-div">
          <div className="projects__content__third-div__first-project"></div>
          <div className="projects__content__third-div__second-project"></div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
