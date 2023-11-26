import React from "react";

const Project = ({
  className,
  mouseOverState,
  setMouseOverState,
  image,
  title,
  aboutProject,
  techArray,
  gitLink,
}) => {
  const handleMouseOver = (state) => {
    state(true);
  };
  const handleMouseLeave = (state) => {
    state(false);
  };
  return (
    <div
      className={`projects__content${className}`}
      onMouseOver={() => handleMouseOver(setMouseOverState)}
      onMouseLeave={() => handleMouseLeave(setMouseOverState)}
    >
      <img
        src={image}
        alt={title}
        style={
          mouseOverState
            ? { filter: "brightness(30%) blur(2px)" }
            : { filter: "none" }
        }
      />
      {mouseOverState && (
        <div className="projects__content__project__hovered">
          <h3>{title}</h3>
          <p>{aboutProject}</p>
          <div className="spans-div">
            {techArray.map((tech, index) => (
              <span key={index}>{tech}</span>
            ))}
          </div>

          <div className="buttons-div">
            <a
              href={`https://github.com/DonatasKokanauskas/${gitLink}`}
              target="_blank"
              rel="noreferrer"
            >
              <button>GitHub</button>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Project;
