import React from "react";
import "../style/css/ScrollButton.css";
import { FaArrowUp } from "react-icons/fa";

const ScrollButton = () => {
  return (
    <a className="top-link" href="#home">
      <FaArrowUp />
    </a>
  );
};

export default ScrollButton;
