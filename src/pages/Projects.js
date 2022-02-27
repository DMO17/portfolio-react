import "../index.css";
import React from "react";
import { ProjectCards } from "../components/Projects";
import Container from "react-bootstrap/Container";

export const Projects = () => {
  return (
    <Container>
      <ProjectCards />
    </Container>
  );
};
