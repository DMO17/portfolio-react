import React, { useState } from "react";
import { projectInfo } from "../../data/ProjectsData";
import { ProjectCard } from "./ProjectCard";

import "./styles.css";

export const ProjectCards = () => {
  const [projectArray, setProjectArray] = useState(projectInfo);

  const onclickReact = () => {
    const reactProjectArray = projectInfo.filter((each) => {
      return each.projectType === "React";
    });

    setProjectArray(reactProjectArray);
  };

  const onclickFullStack = () => {
    const reactProjectArray = projectInfo.filter((each) => {
      return each.projectType === "Full-stack";
    });

    console.log();

    setProjectArray(reactProjectArray);
  };

  const onclickFrontEnd = () => {
    const reactProjectArray = projectInfo.filter((each) => {
      return each.projectType === "Front-end";
    });

    setProjectArray(reactProjectArray);
  };

  const onclickBackEnd = () => {
    const reactProjectArray = projectInfo.filter((each) => {
      return each.projectType === "Back-end";
    });

    setProjectArray(reactProjectArray);
  };

  return (
    <div className="mt-5">
      <div className="d-flex flex-wrap justify-content-center  mb-3">
        <div className="project-menu mx-5" onClick={onclickFullStack}>
          Full-stack
        </div>
        <div className="project-menu mx-5" onClick={onclickReact}>
          React
        </div>
        <div className="project-menu mx-5" onClick={onclickBackEnd}>
          Back-end
        </div>
        <div className="project-menu mx-5" onClick={onclickFrontEnd}>
          Front-end
        </div>
      </div>
      <div className="d-flex flex-wrap justify-content-center">
        {projectArray.map((each, index) => {
          return <ProjectCard {...each} key={index} />;
        })}
      </div>
    </div>
  );
};
