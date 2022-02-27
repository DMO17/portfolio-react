import React from "react";
import "./style.css";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export const AboutMe = () => {
  return (
    <div className="about-me-container text-center mt-3">
      <div className="h1 mb-4">About Me</div>
      <Container className="about-container p-3 ">
        <Row className="gx-5 gy-5">
          <Col sm={12} lg={5}>
            <div className="about-me-img-container">
              <div className="about-me-img">
                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8&w=1000&q=80"
                  alt="web development wallpaper"
                />
              </div>
            </div>
          </Col>
          <Col sm={12} lg={6}>
            <div className="about-me-content">
              <div>
                <h4 className="mb-4">Get to know me</h4>
                <p>
                  is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book. It has survived
                  not only five centuries, but also the leap into electronic
                  typesetting, remaining essentially unchanged. It was
                  popularised in the 1960s with the release of Letraset sheets
                  containing Lorem Ipsum passages, and more recently with
                  desktop publishing software like Aldus PageMaker including
                  versions of Lorem Ipsum.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
