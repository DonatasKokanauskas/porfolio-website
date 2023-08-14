import React from "react";
import "../style/css/About.css";
import photo2 from "../images/my-photo2.jpeg";

const About = () => {
  return (
    <div className="about">
      <div className="about__page-name">
        <h2>About Me</h2>
        <div className="about__page-name__line"></div>
      </div>
      <div className="about__me">
        <div className="about__me__photo">
          <img src={photo2} alt="Donatas Kokanauskas" />
        </div>
        <div className="about__me__description">
          <h4>Who I Am?</h4>
          <p>
            I am a front-end web developer with over a year of intense
            self-learning experience. Additionally, I am certified by Vilnius
            Coding School with excellent grades. My passion for new technologies
            and interest in website structure and functionality led me to pursue
            this profession. In my previous job, I gained valuable experience by
            working collaboratively with a team, which gave me the necessary
            skills to work effectively within a company and alongside positive
            team members. I am now seeking new opportunities and challenges that
            will allow me to expand my skill set, and I am ready to take on new
            projects and solve coding issues.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
