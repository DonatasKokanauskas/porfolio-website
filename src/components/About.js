import React from "react";
import "../style/css/About.css";
import photo2 from "../images/my-photo2.png";

const About = () => {
  return (
    <div className="about">
      <div className="about__page-name">
        <h2>About Me</h2>
        <div className="about__page-name__line"></div>
      </div>
      <div className="about__me">
        <div className="about__me__photo">
          <img src={photo2} alt="my photo" />
        </div>
        <div className="about__me__description">
          <h4>Who I Am?</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at
            tellus semper lacus varius suscipit. Suspendisse pulvinar, justo id
            scelerisque efficitur, quam augue pharetra metus, ultricies finibus
            elit ipsum vitae.
          </p>
          <p>
            Cupiditate recusandae laudantium esse, harum animi aspernatur
            quisquam et delectus ipsum quam alias quaerat? Quasi hic quidem
            illum
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
