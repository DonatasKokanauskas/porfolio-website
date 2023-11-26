import React, { useState } from "react";
import { useEffect } from "react";
import "../../style/css/Navbar.css";

const Navbar = ({ scroll, handleClick, navHeight }) => {
  const liLine = { paddingBottom: "2px", borderBottom: "3px solid #f4fa1a" };

  const hero = document.querySelector(".home");

  const about = document.querySelector(".about");
  const [aboutOffSetTop, setAboutOffSetTop] = useState(0);

  const skills = document.querySelector(".skills");
  const [skillsOffSetTop, setSkillsOffSetTop] = useState(0);

  const experience = document.querySelector(".experience");
  const [experienceOffSetTop, setExperienceOffSetTop] = useState(0);

  const projects = document.querySelector(".projects");
  const [projectsOffSetTop, setProjectsOffSetTop] = useState(0);

  const contact = document.querySelector(".contact");
  const [contactHeight, setContactHeight] = useState(0);
  const [contactOffSetTop, setContactOffSetTop] = useState(0);

  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    if (about) {
      setAboutOffSetTop(
        about.offsetTop - navHeight - hero.getBoundingClientRect().height * 0.3
      );
    }
    if (skills) {
      setSkillsOffSetTop(
        skills.offsetTop -
          navHeight -
          about.getBoundingClientRect().height * 0.3
      );
    }
    if (experience) {
      setExperienceOffSetTop(
        experience.offsetTop -
          navHeight -
          skills.getBoundingClientRect().height * 0.3
      );
    }
    if (projects) {
      setProjectsOffSetTop(
        projects.offsetTop -
          navHeight -
          experience.getBoundingClientRect().height * 0.3
      );
    }
    if (contact) {
      setContactHeight(contact.getBoundingClientRect().height - navHeight);
      setContactOffSetTop(
        contact.offsetTop -
          navHeight -
          projects.getBoundingClientRect().height * 0.3
      );
    }
  }, [about, skills, experience, projects, contact, navHeight, hero]);

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
          <div className="burger">
            <input
              type="checkbox"
              onClick={() => {
                if (!isChecked) {
                  document.querySelector(".links").style.transform =
                    "translate(-100%, 0)";
                  setIsChecked(true);
                } else {
                  document.querySelector(".links").style.transform =
                    "translate(0%, 0)";
                  setIsChecked(false);
                }
              }}
            />
            <span className="span-active"></span>
            <span className="span-active"></span>
            <span className="span-active"></span>
          </div>
          <ul className="links">
            <li
              style={
                scroll >= aboutOffSetTop && aboutOffSetTop !== 0
                  ? { paddingBottom: "0px", border: "none" }
                  : {}
              }
            >
              <a href="#home" className="scroll-link" onClick={handleClick}>
                Home
              </a>
            </li>
            <li
              style={
                scroll >= aboutOffSetTop && scroll < skillsOffSetTop
                  ? liLine
                  : null
              }
            >
              <a href="#about" className="scroll-link" onClick={handleClick}>
                About
              </a>
            </li>
            <li
              style={
                scroll >= skillsOffSetTop && scroll < experienceOffSetTop
                  ? liLine
                  : null
              }
            >
              <a href="#skills" className="scroll-link" onClick={handleClick}>
                Skills
              </a>
            </li>
            <li
              style={
                scroll >= experienceOffSetTop && scroll < projectsOffSetTop
                  ? liLine
                  : null
              }
            >
              <a
                href="#experience"
                className="scroll-link"
                onClick={handleClick}
              >
                Experience
              </a>
            </li>
            <li
              style={
                scroll >= projectsOffSetTop && scroll < contactOffSetTop
                  ? liLine
                  : null
              }
            >
              <a href="#projects" className="scroll-link" onClick={handleClick}>
                Projects
              </a>
            </li>
            <li
              style={
                scroll >= contactOffSetTop &&
                scroll < contactOffSetTop + contactHeight
                  ? liLine
                  : null
              }
            >
              <a href="#contact" className="scroll-link" onClick={handleClick}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
