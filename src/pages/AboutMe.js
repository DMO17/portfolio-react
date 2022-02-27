import "../index.css";
import React from "react";
import { Bio } from "../components/Bio";
import { Experience } from "../components/Skills";

import Container from "react-bootstrap/Container";

export const AboutMe = () => {
  return (
    <Container>
      <Bio />
    </Container>
  );
};
