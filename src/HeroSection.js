import React from "react";
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import "./HeroSection.css";
import img1 from './Images/IMG20240124195146.jpg';
import { Button } from "@mui/material";

const HeroSection = () => {
  return (
    <section className="hero-section">
      {/* Background Particles */}
      <div className="floating-particles">
        {Array.from({ length: 50 }).map((_, index) => (
          <span
            key={index}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 5}s`,
            }}
          ></span>
        ))}
      </div>

      {/* Hero Content */}
      <div className="content">
        <div className="profile-image-container">
          <img
          alt ="profile pic"
            src={img1}
            className="profile-image"
          />
        </div>
        <h1>Suchishree Sengupta</h1>
        <h2>
          <span>Frontend Developer</span>
        </h2>
        <div className="social-icons">
          <a
            href="https://www.facebook.com/suchishree.sengupta"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook size={30} />
          </a>
          <a
            href="https://www.linkedin.com/in/suchishree-sengupta/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={30} />
          </a>
          <a
            href="https://github.com/Titir123/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={30} />
          </a>
        </div>
      </div>
      <a href="/Suchishree-Sengupta.pdf" target="_blank" rel="noopener noreferrer">
  <Button
              variant="contained"
              color="error"
              sx={{ mt: 6, backgroundColor: "#f50057" }}
            >
              Download CV
            </Button>
</a>
      
    </section>
  );
};

export default HeroSection;
