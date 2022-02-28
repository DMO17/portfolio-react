import React from "react";
import { ProjectCard } from "./ProjectCard";

export const ProjectCards = () => {
  return (
    <div className="d-flex flex-wrap justify-content-center">
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
    </div>
  );
};
