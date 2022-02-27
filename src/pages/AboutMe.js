import React from "react";
import Container from "react-bootstrap/Container";
import { Bio } from "../components/Bio";
import { Experience } from "../components/Experience";

export const AboutMe = () => {
  return (
    <Container>
      <Bio />
      <Experience />
    </Container>
  );
};
