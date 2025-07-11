// OtherProjects.js
import React from "react";

const otherProjects = [
  {
      name: 'Itemize – Web Application showing CRUD operations',
      description:
        'React-based product-based web app featuring user authentication, CRUD operations, responsive UI, lazy loading for better performance, authentication with JWT tokens for secure login',
      url: 'https://itemizeapp.netlify.app/',
    },
  {
    name: "STonePaperScissor",
    url: "https://github.com/Titir123/STonePaperScissor",
    description: "Rock-Paper-Scissors game built with React.",
  },
  {
    name: "Crypto",
    url: "https://github.com/Titir123/Crypto",
    description: "Real-time crypto tracker using Next.js.",
  },
  {
    name: "Todos",
    url: "https://github.com/Titir123/Todos",
    description: "Minimal task manager with CRUD in Next.js using AG Grid",
  },

];

const styles = {
  section: {
    padding: "2rem",
    backgroundColor: "#121212",
    fontFamily: "inherit",
    color: "#e0e0e0",
  },
  heading: {
    textAlign: "center",
    color: "#66ccff",
    fontSize: "1.8rem",
    marginBottom: "1.5rem",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    border: "1px solid #003366", // dark blue border
  },
  th: {
    backgroundColor: "#1e1e1e",
    color: "#66ccff",
    textAlign: "left",
    padding: "12px",
    borderBottom: "1px solid #003366",
  },
  td: {
    padding: "12px",
    borderBottom: "1px solid #003366",
  },
  link: {
    color: "#66ccff",
    textDecoration: "none",
  },
  footerText: {
    marginTop: "1rem",
    color: "#cccccc",
    fontSize: "0.95rem",
    textAlign: "center",
  },
};

const OtherProjects = () => {
  return (
    <section style={styles.section}>
      <h2 style={styles.heading}>Other Projects</h2>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Project</th>
            <th style={styles.th}>Description</th>
          </tr>
        </thead>
        <tbody>
          {otherProjects.map((project) => (
            <tr key={project.name}>
              <td style={styles.td}>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={styles.link}
                >
                  {project.name}
                </a>
              </td>
              <td style={styles.td}>{project.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p style={styles.footerText}>
        Explore more on{" "}
        <a
          href="https://github.com/Titir123"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.link}
        >
          my GitHub profile
        </a>
        .
      </p>
    </section>
  );
};

export default OtherProjects;

