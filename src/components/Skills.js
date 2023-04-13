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
            My creative <span>skills</span> and <span>experiences.</span>
          </h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dignissimos, ratione error est recusandae consequatur, iusto illum
            deleniti quidem impedit, quos quaerat quis minima sequi. Cupiditate
            recusandae laudantium esse, harum animi aspernatur quisquam et
            delectus ipsum quam alias quaerat? Quasi hic quidem illum. Ad
            delectus natus aut hic explicabo minus quod.
          </p>
        </div>
        <div className="skills__content__second-div">
          <p>HTML</p>
          <div className="skills__content__second-div__line"></div>
          <p>CSS</p>
          <div className="skills__content__second-div__line"></div>
          <p>JavaScript</p>
          <div className="skills__content__second-div__line"></div>
          <p>PHP</p>
          <div className="skills__content__second-div__line"></div>
          <p>MySQL</p>
          <div className="skills__content__second-div__line"></div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
