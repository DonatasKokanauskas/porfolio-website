import React from "react";
import { useState, useEffect } from "react";
import "../style/css/Header.css";

const Header = () => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      style={
        scroll > 0
          ? {
              background:
                "linear-gradient(180deg, rgba(6,6,6,1) 0%, rgba(20,20,20,1) 100%)",
            }
          : {
              background:
                "linear-gradient(180deg,rgba(0,0,0,0.7) 0%,rgba(20, 20, 20, 0) 100%)",
            }
      }
    >
      <nav>
        <h4>
          Port<span>folio</span>
        </h4>

        <div className="second-header-div">
          <ul className="links">
            <li>
              <a href="#home" className="scroll-link">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="scroll-link">
                About
              </a>
            </li>
            <li>
              <a href="#skills" className="scroll-link">
                Skills
              </a>
            </li>
            <li>
              <a href="#experience" className="scroll-link">
                Experience
              </a>
            </li>
            <li>
              <a href="#projects" className="scroll-link">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="scroll-link">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
