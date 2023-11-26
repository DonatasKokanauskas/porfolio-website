import React, { useState } from "react";
import "../style/css/Projects.css";
import Project from "../components/common/Project";
import clone from "../images/clone.jpg";
import stockAppImage from "../images/stockAppImage.jpg";
import expenseTracker from "../images/expenseTracker.png";
import postsApplication from "../images/postsApplication.png";

const Projects = () => {
  const [mouseOverFirstProject, setMouseOverFirstProject] = useState(false);
  const [mouseOverSecondProject, setMouseOverSecondProject] = useState(false);
  const [mouseOverThirdProject, setMouseOverThirdProject] = useState(false);
  const [mouseOverFourthProject, setMouseOverFourthProject] = useState(false);

  return (
    <div className="projects">
      <div className="projects__page-name">
        <div className="projects__page-name__container">
          <h2>Projects</h2>
          <div className="projects__page-name__line"></div>
        </div>
      </div>

      <div className="projects__content">
        <div className="projects__content__first-div">
          <Project
            className="__first-div__first-project"
            mouseOverState={mouseOverFirstProject}
            setMouseOverState={setMouseOverFirstProject}
            image={clone}
            title="Netflix Clone"
            aboutProject="This is my first larger React project, in which I created a
                  Netflix clone. The purpose of this project was to deepen my
                  skills and build my portfolio, and it was both fun and useful
                  for me."
            techArray={[
              "React",
              "JavaScript",
              "Sass & CSS",
              "Axios",
              "Context",
              "Router",
            ]}
            gitLink="netlix-clone"
          />

          <Project
            className="__first-div__second-project"
            mouseOverState={mouseOverSecondProject}
            setMouseOverState={setMouseOverSecondProject}
            image={stockAppImage}
            title="Stock Price App"
            aboutProject="In this project, it is possible to enter a stock symbol, add
                  it to the list, and obtain data to monitor price changes at
                  the current time, over one week, one month, and one year."
            techArray={[
              "React",
              "JavaScript",
              "Sass & CSS",
              "localStorage",
              "Axios",
              "Context",
              "Router",
            ]}
            gitLink="stock-price-app"
          />
        </div>

        <div className="projects__content__second-div">
          <Project
            className="__second-div__first-project"
            mouseOverState={mouseOverThirdProject}
            setMouseOverState={setMouseOverThirdProject}
            image={postsApplication}
            title="Posts Application"
            aboutProject="This is my Vue.js project, created with the aim of deepening my skills. In this project, users can create, delete, or edit posts and search for them by term. Additionally, I implemented form validation, pagination, popup notification, error handling, and created unit tests for components."
            techArray={[
              "Vue.js",
              "Vuex",
              "Vue Router",
              "Unit testing",
              "Bulma",
              "Axios",
              "Vue debounce",
            ]}
            gitLink="posts-application"
          />

          <Project
            className="__second-div__second-project"
            mouseOverState={mouseOverFourthProject}
            setMouseOverState={setMouseOverFourthProject}
            image={expenseTracker}
            title="Expense Tracker"
            aboutProject="In this project, users can add or remove their expenses for a specific month or year and track them. Users can also view a chart illustrating how their expenses change over time."
            techArray={["React", "Javascript", "CSS"]}
            gitLink="expense-tracker"
          />
        </div>
        <div className="projects__content__third-div">
          <div className="projects__content__third-div__first-project"></div>
          <div className="projects__content__third-div__second-project"></div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
