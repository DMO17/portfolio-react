import React from "react";
import "../index.css";
import { AboutMe } from "../components/AboutMe";
import { ProfileBanner } from "../components/ProfileBanner";

import Container from "react-bootstrap/Container";

export const Home = () => {
  return (
    <Container>
      <ProfileBanner />
      <AboutMe />
    </Container>
  );
};
