import React from "react";
import "../style/css/Hero.css";
import cover from "../images/cover.png";
import photo from "../images/my-photo.jpeg";
import { IoIosArrowRoundForward } from "react-icons/io";

const Hero = ({ handleClick }) => {
  return (
    <div className="hero">
      <img className="hero__cover" src={cover} alt="hero cover" />

      <div className="hero__content">
        <div className="hero__content__about-me">
          <h3>Hello, I'm</h3>
          <h1>Donatas Kokanauskas</h1>
          <h2>Front-end web developer</h2>

          <a href="#contact" className="scroll-link" onClick={handleClick}>
            <button>
              Contact Me <IoIosArrowRoundForward />
            </button>
          </a>
        </div>

        <img className="hero__content__my-photo" src={photo} alt="my photo" />
      </div>
    </div>
  );
};

export default Hero;
