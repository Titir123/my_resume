import { useEffect } from "react";
import './FadeIn.css';

const FadeIn = () => {
  useEffect(() => {
    const fadeElements = document.querySelectorAll(".fade-in");

    const handleScroll = () => {
      fadeElements.forEach((element) => {
        if (element.getBoundingClientRect().top < window.innerHeight) {
          element.classList.add("visible");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // For elements already in view

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="fade-in">
      <h2>Scroll-triggered Fade-in Animation</h2>
      <p>This content fades in when scrolled into view.</p>
    </div>
  );
};

export default FadeIn;
