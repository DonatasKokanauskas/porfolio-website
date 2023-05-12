import React from "react";
import "../style/css/Contact.css";
import { BsFillPersonFill } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { AiFillLinkedin } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdLocationPin } from "react-icons/md";
import { AiFillGithub } from "react-icons/ai";

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
          Thank you for stopping by. I am currently looking to join a new team
          of developers. If you think we might be a good fit for one another,
          please feel free to contact me.
        </p>

        <h3>
          <span>
            <BsFillPersonFill />
          </span>
          {"  "}
          Donatas Kokanauskas
        </h3>
        <h3>
          <span>
            <SiGmail />{" "}
          </span>{" "}
          donatas.kokanauskas@gmail.com
        </h3>
        <h3>
          <span>
            <AiFillLinkedin />{" "}
          </span>{" "}
          <a href="https://www.linkedin.com/in/donatas-kokanauskas-9b5b06275/">
            LinkedIn
          </a>
        </h3>
        <h3>
          <span>
            <AiFillGithub />{" "}
          </span>{" "}
          <a href="https://github.com/DonatasKokanauskas">GitHub</a>
        </h3>
        <h3>
          <span>
            <BsFillTelephoneFill />{" "}
          </span>{" "}
          +370 6 054 3927
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
