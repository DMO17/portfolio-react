import React, { useState } from "react";
import { projectInfo } from "../../data/ProjectsData";
import { ProjectCard } from "./ProjectCard";

export const ProjectCards = () => {
  const [projectsType, setProjectType] = useState("Full-stack");

  const [projectArray, setProjectArray] = useState(projectInfo);

  const onclickReact = () => {};
  const onclickHtml = () => {};
  const onclickFullStack = () => {};
  const onclickFrontEnd = () => {};
  const onclickBackEnd = () => {};

  return (
    <div className="d-flex flex-wrap justify-content-center">
      {projectInfo.map((each, index) => {
        return <ProjectCard {...each} key={index} />;
      })}
    </div>
  );
};
