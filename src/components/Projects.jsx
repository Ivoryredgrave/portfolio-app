import * as React from "react";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import CustomAccordion from "./CustomAccordion";
import { Box } from "@mui/material";

import {
  RickAndMortyAppImages,
  artistPortfolioImages,
  buttonsRickAndMortyApp,
  buttonsArtistPortfolio,
  languagesRickAndMortyApp,
  languagesArtistPortfolio,
} from "../data/projectsData";

export default function Projects({ title }) {
  return (
    <div id="projects">
      <Box
        sx={{
          marginTop: "40px",
          marginBottom: "50px",
          maxWidth: "md",
          flexDirection: "column",
          marginLeft: "auto",
          marginRight: "auto"
        }}
      >
        <Typography
          variant="h4"
          align="center"
          color="text.primary"
          gutterBottom
        >
          {title}
        </Typography>

        <CustomAccordion
          title="Rick-and-morty-app"
          description="Consuming rick and morty api."
          languages={languagesRickAndMortyApp}
          images={RickAndMortyAppImages}
          buttons={buttonsRickAndMortyApp}
        />

        <CustomAccordion
          title="Artist-portfolio"
          description="Portfolio for artists."
          languages={languagesArtistPortfolio}
          images={artistPortfolioImages}
          buttons={buttonsArtistPortfolio}
        />
      </Box>
    </div>
  );
}

Projects.propTypes = {
  title: PropTypes.string.isRequired,
};
