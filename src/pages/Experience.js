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
        <div className="width">
          <div className="experience__content__div">
            <h3>
              WORK <span>EXPERIENCE</span>
            </h3>

            <div>
              <p>INTERSHIP AT TELTONIKA NETWORKS</p>
              <p>2023-09-28 - 2023-11-24, 311 hours.</p>
              <p>
                I have worked in front-end development using the Vue.js
                framework.
              </p>
              <div className="experience__content__div__line"></div>
            </div>

            <div>
              <p>VIEŠOJO SAUGUMO TARNYBA</p>
              <p>2020-10-05 - 2023-09-25</p>
              <p>Main task - ensure and restore public safety.</p>
              <div className="experience__content__div__line"></div>
            </div>
          </div>

          <div
            className="experience__content__div"
            style={{ marginTop: "20px" }}
          >
            <h3>CERTIFICATES</h3>

            <div>
              <p>VUE - THE COMPLETE GUIDE (incl. ROUTER & COMPOSITION API)</p>
              <p>2023-10-01, 32 hours.</p>
              <p>Certificate no: UC-70c4227e-9a15-4c3a-8d14-eb0854533d0d</p>
              <div className="experience__content__div__line"></div>
            </div>

            <div>
              <p>JavaScript Unit Testing - The Practical Guide</p>
              <p>2023-11-12, 5.5 hours.</p>
              <p>Certificate no: UC-f0469e92-44c8-47f8-8b2b-26dd052f8110</p>
              <div className="experience__content__div__line"></div>
            </div>
          </div>
        </div>

        <div className="experience__content__div width">
          <h3>
            MY <span>EDUCATION</span>
          </h3>
          <div>
            <p>JAVASCRIPT COURSE</p>
            <p>Vilnius Coding School</p>
            <p>2022-12-14 - 2023-04-20, 160 hours</p>
            <p>
              I have gained a deeper understanding of website development and
              testing. During the course, I learned all the necessary and most
              popular technologies such as HTML5, CSS3, JavaScript, React, SASS,
              GIT, Bootstrap, Material UI, JEST, TypeScript, and more. The main
              focus of the course was on the JavaScript programming language.
            </p>
            <div className="experience__content__div__line"></div>
          </div>

          <div>
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
    </div>
  );
};

export default Experience;
