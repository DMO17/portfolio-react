import React from "react";
import "./style.css";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

import { BsFillPatchCheckFill } from "react-icons/bs";

export const Skills = () => {
  return (
    <div className="experience-container">
      <div className="text-center">
        <div className="h2 mb-5 mt-5 ">Experience</div>
        <Container className="container skills-container">
          <Row className="gx-5 gy-5">
            <Col sm={12} lg={6}>
              <div className="skill-information">
                <div
                  className="h5 text-center mb-5"
                  style={{ color: "rgba(255, 255, 255, 0.6)" }}
                >
                  Frontend Development
                </div>
                <div className="skills-content">
                  <div className="skill-details ">
                    <BsFillPatchCheckFill />
                    <div className="h6">HTML</div>
                  </div>
                  <div className="skill-details">
                    <BsFillPatchCheckFill />
                    <div className="h6">HTML</div>
                  </div>
                  <div className="skill-details">
                    <BsFillPatchCheckFill />
                    <div className="h6">HTML</div>
                  </div>
                  <div className="skill-details">
                    <BsFillPatchCheckFill />
                    <div className="h6">HTML</div>
                  </div>
                  <div className="skill-details">
                    <BsFillPatchCheckFill />
                    <div className="h6">HTML</div>
                  </div>
                </div>
              </div>
            </Col>

            <Col sm={12} lg={6}>
              <div className="skill-information">
                <div
                  className="h5 text-center mb-5 "
                  style={{ color: "rgba(255, 255, 255, 0.6)" }}
                >
                  Backend Development
                </div>
                <div className="skills-content">
                  <div className="skill-details">
                    <BsFillPatchCheckFill />
                    <div className="h6">HTML</div>
                  </div>
                  <div className="skill-details">
                    <BsFillPatchCheckFill />
                    <div className="h6">HTML</div>
                  </div>
                  <div className="skill-details">
                    <BsFillPatchCheckFill />
                    <div className="h6">HTML</div>
                  </div>
                  <div className="skill-details">
                    <BsFillPatchCheckFill />
                    <div className="h6">HTML</div>
                  </div>
                  <div className="skill-details">
                    <BsFillPatchCheckFill />
                    <div className="h6">HTML</div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="btn d-flex justify-content-center ">
        <Button>
          CV <i class="fa-solid fa-download"></i>
        </Button>
      </div>
    </div>
  );
};
