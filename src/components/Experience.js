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
          <p>Mad Max Design</p>
          <p>OCT 2013 - june 2014</p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            nisi quibusdam aspernatur id beatae repudiandae voluptatum quaerat
            explicabo veniam voluptatem.
          </p>
          <div className="experience__content__div__line"></div>
          <p>Crazy Design</p>
          <p>OCT 2013 - june 2015</p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            nisi quibusdam aspernatur id beatae repudiandae voluptatum quaerat
            explicabo veniam voluptatem.
          </p>
        </div>
        <div className="experience__content__div">
          <h3>
            MY <span>EDUCATION</span>
          </h3>
          <p>Maddison University</p>
          <p>OCT 2013 - june 2014</p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            nisi quibusdam aspernatur id beatae repudiandae voluptatum quaerat
            explicabo veniam voluptatem.
          </p>
          <div className="experience__content__div__line"></div>
          <p>Max Design & Art Institute</p>
          <p>OCT 2013 - june 2015</p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            nisi quibusdam aspernatur id beatae repudiandae voluptatum quaerat
            explicabo veniam voluptatem.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
