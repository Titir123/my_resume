import React from 'react';
import './Portfolio.css'; // Create a CSS file for styles
import project1Image from './Images/photo-1453928582365-b6ad33cbcf64.avif';
import project2Image from './Images/photo-1501959181532-7d2a3c064642.avif';
import project3Image from './Images/photo-1497215842964-222b430dc094.avif';

const Portfolio = () => {
  const projects = [
    {
      title: 'Itemize – Web Application showing CRUD operations',
      description:
        'React-based product-based web app featuring user authentication, CRUD operations, responsive UI, lazy loading for better performance, authentication with JWT tokens for secure login',
      image: project1Image,
      link: 'https://itemizeapp.netlify.app/',
    },
    {
      title: 'E-Commerce Website',
      description:
        'An e-commerce website showcasing products, implementing a shopping cart using Redux toolkit and persisted store, and a payment gateway integration.',
      image: project2Image,
      link: 'https://shopppingmania.netlify.app/',
    },
    {
      title: 'Medinest – Healthcare Appointment Booking Platform',
      description:
        ' A Next.js-powered platform enabling users to book doctor appointments, with full authentication and role-based access management.Developed secure user authentication and middleware protection. Implemented Redux for state management and data persistence. Optimized performance with server-side rendering (SSR) and static site generation (SSG)'
      , image: project3Image,
      link: 'https://doctorapi.netlify.app/',
    },
  ];

  return (
    <div className="portfolio-container">
      <h2 className="portfolio-title">Major Projects</h2>
      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <div key={index} className="portfolio-item">
            <img src={project.image} alt={project.title} className="portfolio-image" />
            <div className="portfolio-overlay">
              <h4 className="project-title">{project.title}</h4>
              <p className="project-description">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
