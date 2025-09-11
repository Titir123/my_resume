import React from "react";
import Slider from "react-slick";
import {
  Card,
  CardContent,
  Typography,
  Link,
  Box,
} from "@mui/material";
 import img1 from '../src/Images/Screenshot 2025-09-11 190345.png';
 import img2 from '../src/Images/Screenshot 2025-09-11 190112.png';
 import img3 from '../src/Images/Screenshot 2025-09-11 190223.png';
 import img4 from '../src/Images/Make the picture of .png';

const otherProjects = [
  {
    name: "Itemize – Web Application showing CRUD operations",
    description:
      "React-based product-based web app featuring user authentication, CRUD operations, responsive UI, lazy loading for better performance, authentication with JWT tokens for secure login",
    url: "https://itemizeapp.netlify.app/",
    image: img1,
  },
  {
    name: "STonePaperScissor",
    url: "https://myreactgame.netlify.app/",
    description: "Rock-Paper-Scissors game built with React.",
    image: img3,
  },
  {
    name: "Tic-Tac-Toe",
    url: "https://myfirstreactgame.netlify.app/",
    description: "Tic-Tac-Toe game built with react",
    image: img2,
  },
  {
    name: "Todos",
    url: "https://mytodostore.netlify.app/",
    description: "Minimal task manager with CRUD in Next.js using AG Grid",
    image: img4,
  },
];

const OtherProjects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 900,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <Box
      sx={{
        padding: "2rem",
        backgroundColor: "#121212",
        fontFamily: "inherit",
        color: "#e0e0e0",
      }}
    >
      <Typography
        variant="h4"
        align="center"
        sx={{ color: "#66ccff", marginBottom: "1.5rem" }}
      >
        Other Projects
      </Typography>

      <Slider {...settings}>
        {otherProjects.map((project) => (
          <Box
            key={project.name}
            sx={{
              padding: "0 12px", // 👈 horizontal spacing between slides
              boxSizing: "border-box",
            }}
          >
            <Card
              sx={{
                position: "relative",
                borderRadius: "16px",
                overflow: "hidden",
                boxShadow: "0 4px 20px rgba(0,0,0,0.6)",
              }}
            >
              {/* Background Image */}
              <Box
                component="img"
                src={project.image}
                alt={project.name}
                sx={{
                  width: "100%",
                  height: "300px",
                  objectFit: "cover",
                  filter: "brightness(70%)",
                }}
              />

              {/* Overlay Content */}
              <CardContent
                sx={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.85), rgba(0,0,0,0.3))",
                  color: "#fff",
                  padding: "1rem",
                }}
              >
                <Typography variant="h6" sx={{ color: "#66ccff" }}>
                  <Link
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ color: "#66ccff", textDecoration: "none" }}
                  >
                    {project.name}
                  </Link>
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    marginTop: "0.5rem",
                    color: "#e0e0e0",
                    lineHeight: 1.4,
                  }}
                >
                  {project.description}
                </Typography>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Slider>

      <Typography
        sx={{
          marginTop: "1rem",
          color: "#cccccc",
          fontSize: "0.95rem",
          textAlign: "center",
        }}
      >
        Explore more on{" "}
        <Link
          href="https://github.com/Titir123"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: "#66ccff", textDecoration: "none" }}
        >
          my GitHub profile
        </Link>
        .
      </Typography>
    </Box>
  );
};

export default OtherProjects;


