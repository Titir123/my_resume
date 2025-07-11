import React from 'react';
import './Portfolio.css'; // Create a CSS file for styles
import project2Image from './Images/photo-1501959181532-7d2a3c064642.avif';
import project3Image from './Images/photo-1497215842964-222b430dc094.avif';

const Portfolio = () => {
  const projects = [
    {
      title: 'E-Commerce Website',
      description:
        'An e-commerce website showcasing products, implementing a shopping cart using Redux toolkit and persisted store, and a payment gateway integration. Integrated AI chatbot that handled product queries with more ease and reducing support tickets.',
      image: project2Image,
      link: 'https://shopppingmania.netlify.app/',
      chat:"https://youtu.be/cBHRIZ_n2V4"
    },
    {
      title: 'Medinest – Healthcare Appointment Booking Platform',
      description:
        ' A Next.js-powered platform enabling users to book doctor appointments, with full authentication and role-based access management.Developed secure user authentication and middleware protection. Implemented Redux for state management and data persistence. Optimized performance with server-side rendering (SSR) and static site generation (SSG). Implemented RAG application through n8n workflows for seamless user queries regarding appointments. '
      , image: project3Image,
      link: 'https://doctorapi.netlify.app/',
      chat:"https://youtu.be/WsYAR17B0VE"
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
              <div style={{display:'flex', flexDirection:"row", justifyContent:"space-between", width:"50%"}}>
                <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                View Project
              </a>
               <a
                href={project.chat}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                View Chat Video
              </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
