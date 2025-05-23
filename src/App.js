import React, { useRef, useEffect } from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import AboutSection from "./About";
import SkillsSection from "./Skills";
import Portfolio from "./PortfolioItems";
import OtherProjects from "./OtherProjects";
import "./App.css";
import {
  Container, Typography, Grid, Divider, Box
} from "@mui/material";
import {
  Timeline, TimelineItem, TimelineSeparator,
  TimelineDot, TimelineConnector, TimelineContent
} from '@mui/lab';
import Contacts from "./Contacts";
import { useLocation } from "react-router-dom";

// TimelineSection Component
const TimelineSection = ({ title, items }) => (
  <Box mb={4}>
    <Typography variant="h5" gutterBottom color="white">{title}</Typography>
    <Timeline>
      {items.map((item, index) => (
        <TimelineItem key={index}>
          <TimelineSeparator>
            <TimelineDot color="info" />
            {index !== items.length - 1 && <TimelineConnector />}
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h6" color="white">{item.title}</Typography>
            <Typography color="gray">{item.year}</Typography>
            <Typography color="gray" variant="body2">{item.institution}</Typography>
            {item.details && <Typography color="gray" variant="body2">{item.details}</Typography>}
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  </Box>
);

// Scroll handler
const ScrollToSection = ({ sectionRefs }) => {
  const location = useLocation();

  useEffect(() => {
    const section = location.pathname.replace("/", "") || "home";
    const ref = sectionRefs[section];
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location.pathname, sectionRefs]);

  return null;
};

const App = () => {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const portfolioRef = useRef(null);
  const educationRef = useRef(null);
  const contactRef = useRef(null);

  const sectionRefs = {
    home: heroRef,
    about: aboutRef,
    skills: skillsRef,
    portfolio: portfolioRef,
    education: educationRef,
    contact: contactRef,
  };

  const education = [
    { title: "MASTER OF TECHNOLOGY", year: "2010 - 2012", institution: "University of Calcutta", details: "Score: 78%" },
    { title: "MASTER OF SCIENCE", year: "2008 - 2010", institution: "University of Calcutta", details: "Score: 76%" },
    { title: "BACHELOR OF SCIENCE", year: "2005 - 2008", institution: "University of Calcutta", details: "Score: 67.12%" },
  ];

  const certifications = [
    { title: "WEB DESIGN USING BOOTSTRAP", year: "2024 - 2025", institution: "Webskitters Academy, Calcutta", details: "HTML, CSS, and Bootstrap" },
    { title: "FRONTEND DESIGN USING REACT JS", year: "2024 - 2025", institution: "Webskitters Academy, Calcutta", details: "ReactJS, NEXT.js, MUI" },
  ];

  return (
    <>
      <Navbar />
      <ScrollToSection sectionRefs={sectionRefs} />

      {/* Adjust for fixed navbar height */}
      
        <div ref={heroRef}><HeroSection />
        <div ref={aboutRef}><AboutSection /></div>
        <div ref={skillsRef}><SkillsSection /></div>
        <div ref={portfolioRef}><Portfolio /></div>
        <div ref={educationRef}><OtherProjects /></div>
       

        <Box sx={{ backgroundColor: "#000e1ce9", color: "white", minHeight: "100vh", paddingTop: 4 }}>
          <Container maxWidth="lg">
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <TimelineSection title="Education" items={education} />
              </Grid>
              <Grid item xs={12} md={6}>
                <TimelineSection title="Certifications" items={certifications} />
              </Grid>
            </Grid>

            <Divider sx={{ backgroundColor: "gray", my: 4 }} /> 
             <div ref={contactRef}><Contacts/></div>
          </Container>
        </Box>
      </div>
   </>
  );
};

export default App;





