import React from "react";
import "../style/css/Projects.css";

const Projects = () => {
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
          <div className="projects__content__first-div__first-project"></div>
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
