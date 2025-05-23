import React from 'react'
import {
  Typography, Grid, Box
} from "@mui/material";
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";

const Contacts = () => {
  return (
    <div>
       <Grid container justifyContent="space-between" alignItems="center">
             <Grid item xs={12} md={6}>
  <Typography variant="h6" gutterBottom>Reach Me At</Typography>
  <Typography variant="body1">
    Phone: <a href="tel:+918830918552" style={{ color: "inherit", textDecoration: "none" }}>
      +91 8830918552
    </a>
  </Typography>
  <Typography variant="body1">
    Email: <a href="mailto:suchishree0111@gmail.com" style={{ color: "inherit", textDecoration: "none" }}>
      suchishree0111@gmail.com
    </a>
  </Typography>
</Grid>

              <Grid item xs={12} md={6} textAlign="right">
                <Typography variant="h6">Social Links</Typography>
                <Box display="flex" justifyContent={{ md: "flex-end" }} gap={2} mt={1}>
                  <a href="https://www.facebook.com/suchishree.sengupta/" target="_blank" rel="noreferrer">
                    <FaFacebook color="info" />
                  </a>
                  <a href="https://www.linkedin.com/in/suchishree-sengupta/" target="_blank" rel="noreferrer">
                    <FaLinkedin color="info" />
                  </a>
                  <a href="https://github.com/Titir123/" target="_blank" rel="noreferrer">
                    <FaGithub color="info" />
                  </a>
                  
                </Box>
              </Grid>
            </Grid>
    </div>
  )
}

export default Contacts;
