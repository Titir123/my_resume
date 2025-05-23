import React, { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Skills.css";
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import { SiMui, SiNextdotjs } from "react-icons/si";

const SkillsSection = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const skills = [
    { name: "HTML", level: 95, icon: <FaHtml5 color="#e34c26" /> },
    { name: "CSS", level: 90, icon: <FaCss3Alt color="#264de4" /> },
    { name: "JavaScript", level: 90, icon: <FaJs color="#f7df1e" /> },
    { name: "ReactJS", level: 90, icon: <FaReact color="#61dbfb" /> },
    { name: "MUI", level: 85, icon: <SiMui color="#007FFF" /> },
  ];

  return (
    <section className="skills-section" ref={sectionRef}>
      <div className="container" data-aos="zoom-in">
        <h2 className="skills-title">My Skills</h2>
        <div className="skills">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="skill"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="skill-name">
                <span className="icon">{skill.icon}</span>
                <span>{skill.name}</span>
                <span className="level">{skill.level}%</span>
              </div>
              <div className="progress-bar">
                <div
                  className={`progress-fill ${visible ? "animated" : ""}`}
                  style={{ width: visible ? `${skill.level}%` : "0%" }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

