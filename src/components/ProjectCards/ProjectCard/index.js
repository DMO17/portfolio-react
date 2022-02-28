import React from "react";
import "./styles.css";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export const ProjectCard = ({
  title,
  projectImg,
  githubLink,
  liveDemoLink,
}) => {
  return (
    <div className="box-container m-4 p-2">
      <Card className=" card-container">
        <div className="image-container">
          <img src={projectImg} alt="project img" />
        </div>
        <Card.Title className="card-title my-3 ">{title}</Card.Title>
        <div className="btn-container d-flex flex-wrap justify-content-between">
          <Button href={githubLink} target="_blank">
            GITHUB
          </Button>
          <Button href={liveDemoLink} target="_blank">
            Live Demo
          </Button>
        </div>
      </Card>
    </div>
  );
};
