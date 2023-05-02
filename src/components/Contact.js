import React from "react";
import "../style/css/Contact.css";
import { BsFillPersonFill } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { AiFillLinkedin } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdLocationPin } from "react-icons/md";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact__page-name">
        <div className="contact__page-name__container">
          <h2>Contact Me</h2>
          <div className="contact__page-name__line"></div>
        </div>
      </div>
      <div className="contact__content">
        <h3>Get in Touch</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut debitis,
          at aliquid laboriosam pariatur quo hic deserunt voluptatum optio vero.
        </p>

        <h3>
          <span>
            <BsFillPersonFill />
          </span>
          {"  "}
          Amir Anwar
        </h3>
        <h3>
          <span>
            <SiGmail />{" "}
          </span>{" "}
          donatas.kokanauskas
        </h3>
        <h3>
          <span>
            <AiFillLinkedin />{" "}
          </span>{" "}
          my linkedin
        </h3>
        <h3>
          <span>
            <BsFillTelephoneFill />{" "}
          </span>{" "}
          860000000
        </h3>
        <h3>
          <span>
            <MdLocationPin />{" "}
          </span>{" "}
          Lithuania, Kaunas
        </h3>
      </div>
    </div>
  );
};

export default Contact;
