import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import "./About.css";

const AboutSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Initialize AOS with fade-in settings
  }, []);

  return (
    <>
      <section className="about-section">
        <div className="container" data-aos="fade-in">
          <div className="about-content">
            {/* Fade-in for title */}
            <h2>About</h2>
            <p>
            I'm a Frontend Developer with a strong academic background in technology, holding both M.Tech and M.Sc. degrees from the University of Calcutta. I specialize in building responsive, user-friendly web interfaces using React, Next.js, and MUI.

<br />I recently completed certifications in Web Design and Frontend Development from Webskitters Academy, where I honed my skills in modern frameworks and UI libraries. I'm passionate about clean design, performance, and crafting smooth user experiences. I'm always eager to learn and contribute to impactful web projects.
            </p>

            {/* Fade-in for basic information */}
            <h3>BASIC INFORMATION</h3>
            <ul>
              <li>
                <strong>Phone:</strong> +91 8830918552
              </li>
              <li>
                <strong>Degree:</strong> Masters
              </li>
              <li>
                <strong>Email:</strong> suchishree0111@gmail.com
              </li>
              <li>
                <strong>City:</strong> Bangalore, India
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
