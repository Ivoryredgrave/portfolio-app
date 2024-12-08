import React from "react";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";

export default function Skills({ skillsText, techStack }) {

  return (
    <div id="skills">

      <Box sx={{ marginTop: "40px" }}>
        <Typography
          variant="h4"
          align="center"
          color="text.primary"
          gutterBottom
        >
          {skillsText}
        </Typography>
      </Box>

      <Grid sx={{ marginTop: "40px" }} container spacing={2} justifyContent="center">
        {techStack
          .filter((tech) => tech.category === "frontend")
          .map((tech) => (
            <Box key={tech.alt} sx={{ display: "flex", flexDirection: "column" }}>
              <img src={tech.src} alt={tech.alt} style={{ width: "74px", height: "74px" }} />
              <Typography variant="body2" color="text.secondary" align="center">
                {tech.alt}
              </Typography>
            </Box>
          ))}
      </Grid>

      <Grid sx={{ marginTop: "40px" }} container spacing={2} justifyContent="center">
        {techStack
          .filter((tech) => tech.category === "backend")
          .map((tech) => (
            <Box key={tech.alt} sx={{ display: "flex", flexDirection: "column" }}>
              <img src={tech.src} alt={tech.alt} style={{ width: "74px", height: "74px" }} />
              <Typography variant="body2" color="text.secondary" align="center">
                {tech.alt}
              </Typography>
            </Box>
          ))}
      </Grid>

    </div>
  );
}

Skills.propTypes = {
  skillsText: PropTypes.string.isRequired,
  techStack: PropTypes.arrayOf(
    PropTypes.shape({
      alt: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
    })
  ).isRequired,
};
