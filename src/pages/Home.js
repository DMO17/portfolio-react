import React from "react";
import "../index.css";

import { ProfileBanner } from "../components/ProfileBanner";

import Container from "react-bootstrap/Container";

export const Home = () => {
  return (
    <Container>
      <ProfileBanner />
    </Container>
  );
};
