import React, { useState } from "react";
import "../style/css/Projects.css";
import clone from "../images/clone.jpg";
import emailValidation from "../images/emailValidation.jpg";

const Projects = () => {
  const [mouseOverFirstProject, setMouseOverFirstProject] = useState(false);
  const [mouseOverSecondProject, setMouseOverSecondProject] = useState(false);

  const handleMouseOver = (state) => {
    state(true);
  };
  const handleMouseLeave = (state) => {
    state(false);
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
            onMouseOver={() => handleMouseOver(setMouseOverFirstProject)}
            onMouseLeave={() => handleMouseLeave(setMouseOverFirstProject)}
          >
            <img
              src={clone}
              alt="netflix clone"
              style={
                mouseOverFirstProject
                  ? { filter: "brightness(30%) blur(2px)" }
                  : { filter: "none" }
              }
            />
            {mouseOverFirstProject && (
              <div className="projects__content__first-div__project__hovered">
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
                  <a href="https://clone.donatas-k.com" target="_blank">
                    <button> Visit</button>
                  </a>

                  <a
                    href="https://github.com/DonatasKokanauskas/netlix-clone"
                    target="_blank"
                  >
                    <button>GitHub</button>
                  </a>
                </div>
              </div>
            )}
          </div>

          <div
            className="projects__content__first-div__second-project"
            onMouseOver={() => handleMouseOver(setMouseOverSecondProject)}
            onMouseLeave={() => handleMouseLeave(setMouseOverSecondProject)}
          >
            <img
              src={emailValidation}
              alt="email validation"
              style={
                mouseOverSecondProject
                  ? { filter: "brightness(30%) blur(2px)" }
                  : { filter: "none" }
              }
            />
            {mouseOverSecondProject && (
              <div className="projects__content__first-div__project__hovered">
                <h3>Email validation</h3>
                <p>
                  This is a small and simple email validation project that I
                  have completed for the purpose of learning TypeScript and
                  Regex.
                </p>
                <div className="spans-div">
                  <span>React</span>
                  <span>TypeScript</span>
                  <span>Sass & CSS</span>
                  <span>Axios</span>
                </div>

                <div className="buttons-div">
                  <a
                    href="https://email-validation.donatas-k.com/"
                    target="_blank"
                  >
                    <button> Visit</button>
                  </a>

                  <a
                    href="https://github.com/DonatasKokanauskas/Email-validation"
                    target="_blank"
                  >
                    <button>GitHub</button>
                  </a>
                </div>
              </div>
            )}
          </div>
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
