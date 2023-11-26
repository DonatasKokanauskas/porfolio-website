import React from "react";
import "../../style/css/Footer.css";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <div className="footer">
      <h3>
        Created By <span>Donatas Kokanauskas</span> | {date}
      </h3>
    </div>
  );
};

export default Footer;
