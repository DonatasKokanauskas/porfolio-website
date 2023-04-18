import React, { useState } from "react";
import "../style/css/Projects.css";
import netflix from "../images/netflix-clone2.png";

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
            <img src={netflix} alt="netflix clone" />
            {mouseOver && (
              <div className="projects__content__first-div__first-project__hovered">
                <h3>Netflix Clone</h3>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Illo, est!
                </p>
                <div className="spans-div">
                  <span>React</span>
                  <span>JavaScript</span>
                  <span>Sass & CSS</span>
                  <span>Context</span>
                  <span>Router</span>
                </div>

                <div className="buttons-div">
                  <button>Visit</button>
                  <button>GitHub</button>
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
