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
            I have a deeper understanding of HTML, CSS, and JavaScript, and I
            have completed several projects using these languages. Additionally,
            I spend a lot of time learning and doing projects using the React
            library, having completed several smaller projects and one larger
            project. I enjoy using SASS (a CSS pre-processor) for styling
            because it makes using CSS easier and faster, and it has many useful
            functions. I am constantly learning and deepening my skills in these
            technologies.
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
