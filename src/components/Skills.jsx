import React from "react";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";

export default function Skills({ skillsText, avatars }) {

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

      <Grid  container spacing={4} justifyContent="center">
        {avatars
          .filter((avatar) => avatar.category === "frontend")
          .map((avatar, index) => (
            <Grid key={index} xs={4} sm={3} md={2} display="flex" justifyContent="center">
              <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <img src={avatar.src} alt={avatar.alt} style={{ width: "74px", height: "74px" }} />
                <Typography variant="body2" color="text.secondary" align="center">
                  {avatar.alt}
                </Typography>
              </Box>
            </Grid>
          ))}
      </Grid>

      <Grid sx={{ marginTop: "40px" }} container spacing={4} justifyContent="center">
        {avatars
          .filter((avatar) => avatar.category === "backend")
          .map((avatar, index) => (
            <Grid key={index} xs={4} sm={3} md={2} display="flex" justifyContent="center">
              <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <img src={avatar.src} alt={avatar.alt} style={{ width: "74px", height: "74px" }} />
                <Typography variant="body2" color="text.secondary" align="center">
                  {avatar.alt}
                </Typography>
              </Box>
            </Grid>
          ))}
      </Grid>

    </div>
  );
}

Skills.propTypes = {
  skillsText: PropTypes.string.isRequired,
  avatars: PropTypes.arrayOf(
    PropTypes.shape({
      alt: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
    })
  ).isRequired,
};
