import * as React from "react";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import CustomAccordion from "./CustomAccordion";
import { Box } from "@mui/material";

import {

  artistPortfolioLanguages,
  artistPortfolioImages,
  artistPortfolioButtons,

  productCardLanguages,
  productCardImages,
  productCardButtons,

  rickAndMortyLanguages,
  rickAndMortyImages,
  rickAndMortyButtons,
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
          languages={rickAndMortyLanguages}
          images={rickAndMortyImages}
          buttons={rickAndMortyButtons}
        />

        <CustomAccordion
          title="Artist-portfolio"
          description="Portfolio for artists."
          languages={artistPortfolioLanguages}
          images={artistPortfolioImages}
          buttons={artistPortfolioButtons}
        />

        <CustomAccordion
          title="Product-card"
          description="A reusable card to display information."
          languages={productCardLanguages}
          images={productCardImages}
          buttons={productCardButtons}
        />

      </Box>
    </div>
  );
}

Projects.propTypes = {
  title: PropTypes.string.isRequired,
};
