import React from "react";
import "../style/css/Skills.css";

const Skills = () => {
  return (
    <div className="skills">
      <div className="skills__page-name">
        <div className="skills__page-name__container">
          <h2>My Skills</h2>
          <div className="skills__page-name__line"></div>
        </div>
      </div>

      <div className="skills__content">
        <div className="skills__content__first-div">
          <h4>
            My <span>skills</span> and <span>experiences.</span>
          </h4>
          <p>
            I have a solid understanding of HTML, CSS, and JavaScript, and I
            spend a considerable amount of time learning and working on projects
            with the React library. I have completed several projects using
            these technologies. For styling, SASS is my preferred choice, since
            it simplifies CSS usage, speeds up development, and provides many
            useful features. I am always learning and deepening my skills in
            these web development tools.
          </p>
          <p>
            I have become familiar with several other technologies, such as
            Bootstrap, Material UI, and TypeScript. Additionally, I have gained
            some experience in testing using Jest and Cypress.
          </p>
        </div>
        <div className="skills__content__second-div">
          <p>HTML</p>
          <div className="skills__content__second-div__line"></div>
          <p>CSS</p>
          <div className="skills__content__second-div__line"></div>
          <p>JavaScript</p>
          <div className="skills__content__second-div__line"></div>
          <p>React</p>
          <div className="skills__content__second-div__line"></div>
          <p>SASS</p>
          <div className="skills__content__second-div__line"></div>
          <p>GIT</p>
          <div className="skills__content__second-div__line"></div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
