import React from "react";
import "../style/css/ScrollButton.css";
import { FaArrowUp } from "react-icons/fa";

const ScrollButton = ({ scroll, handleClick }) => {
  return (
    <a
      className={`top-link ${scroll > 500 && "show-link"}`}
      href="#home"
      onClick={handleClick}
    >
      <FaArrowUp />
    </a>
  );
};

export default ScrollButton;
