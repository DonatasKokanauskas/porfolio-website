import React from "react";
import "../style/css/Experience.css";
import cover2 from "../images/cover2.png";

const Experience = () => {
  return (
    <div className="experience">
      <img className="experience__cover" src={cover2} alt="experience cover" />

      <div className="experience__page-name">
        <div className="experience__page-name__container">
          <h2>My Experience</h2>
          <div className="experience__page-name__line"></div>
        </div>
      </div>

      <div className="experience__content">
        <div className="experience__content__div">
          <h3>
            WORK <span>EXPERIENCE</span>
          </h3>
          <p>VIEŠOJO SAUGUMO TARNYBA</p>
          <p>2020 - 2023</p>
          <p>Main task - ensure and restore public safety.</p>
          <div className="experience__content__div__line"></div>
        </div>
        <div className="experience__content__div">
          <h3>
            MY <span>EDUCATION</span>
          </h3>
          <p>JAVASCRIPT COURSE</p>
          <p>Vilnius Coding School</p>
          <p>2020-12-14 - 2023-04-20, 160 hours</p>
          <p>
            I gained a deeper understanding of website development and testing.
            Welearned all the necessary and most popular technologies, such as
            HTML5,CSS3, JavaScript, React, SASS, GIT, Bootstrap, Material UI,
            JEST, TypeScript,and more. The main focus was on the JavaScript
            programming language.
          </p>
          <div className="experience__content__div__line"></div>
          <p>PUBLIC SECURITY SERVICE TRAINING</p>
          <p>Viešojo saugumo tarnyba</p>
          <p>2020-08-31 - 2020-10-08, 240 hours.</p>
          <div className="experience__content__div__line"></div>
          <p>THE DEGREE OF BACHELOR OF SPORT</p>
          <p>Lietuvos sporto universitetas</p>
          <p>2014 - 2018</p>
          <p>
            Knowledge and skills in athlete training and management
            technologies.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
