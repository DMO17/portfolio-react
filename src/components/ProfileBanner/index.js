import React from "react";
import "./style.css";

import Typewriter from "typewriter-effect";
import Button from "react-bootstrap/Button";

export const ProfileBanner = () => {
  return (
    <div className="profile-container p-3 d-flex flex-wrap justify-content-around text-center align-items-center">
      <div className="profile-details">
        <div className="colz ">
          <div className="colz-icon">
            <a href="https://www.google.com/">
              <i class="fa-brands fa-github-square"></i>
            </a>
            <a href="https://www.google.com/">
              <i class="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://www.google.com/">
              <i class="fa-solid fa-g"></i>
            </a>
          </div>
        </div>
        <div className="profile-details-name">
          <h4 className="primary-text ">
            Hello, I'M <span className="highlighted-text">DAHIR MOHAMED</span>
          </h4>
        </div>
        <div className="profile-description">
          <h1>
            <Typewriter
              options={{
                strings: [
                  "Web Developer 💻",
                  "Full Stack Developer 🌐",
                  "MERN STACK 😎",
                  "Enthusiastic Developer 🔴",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <span className="profile-tagline">
            Real interest in learning and building web-applications with front
            and back end operations.
          </span>
        </div>
        <div className="profile-cv btn">
          <Button>
            CV <i class="fa-solid fa-download"></i>
          </Button>
        </div>
      </div>
      <div className="profile-pic d-flex align-items-center justify-content-center">
        <div className="profile-pic-background"></div>
      </div>
    </div>
  );
};
