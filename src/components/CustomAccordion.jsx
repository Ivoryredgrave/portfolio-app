import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Chip,
  ImageList,
  ImageListItem,
  ButtonGroup,
  Button,
} from "@mui/material";
import LinkIcon from "@mui/icons-material/Link";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function CustomAccordion({
  title,
  description,
  languages,
  images,
  buttons,
}) {

  const [expanded, setExpanded] = useState(true);

  const handleChange = () => {
    setExpanded(!expanded);
  };

  return (
    <Accordion expanded={expanded} onChange={handleChange}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography sx={{ width: "33%", flexShrink: 0 }}>{title}</Typography>
        <Typography sx={{ color: "text.secondary" }}>{description}</Typography>
      </AccordionSummary>
      <AccordionDetails>

        {languages &&
          languages.map((language) => (
            <Chip
              key={language.text}
              label={language.text}
              color={language.color}
              variant={language.variant}
              sx={{ mx: 0.5 }}
            />
          ))}

        {images && (
          <ImageList sx={{ height: 512 }} cols={1}>
            {images.map((image, index) => (
              <ImageListItem key={index}>
                <img
                  src={`${image.img}`}
                  srcSet={`${image.img}`}
                  alt={image.img}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        )}

        {buttons && (
          <ButtonGroup
            color="primary"
            aria-label="medium secondary button group"
          >
            {buttons.map((button, index) => (
              <Button
                key={index}
                target="_blank"
                rel="noopener noreferrer"
                color={button.color}
                href={button.href}
                startIcon={<LinkIcon />}
              >
                {button.name}
              </Button>
            ))}
          </ButtonGroup>
        )}

      </AccordionDetails>
    </Accordion>
  );
}

CustomAccordion.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  languages: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
      variant: PropTypes.string.isRequired,
    })
  ).isRequired,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      img: PropTypes.string.isRequired,
    })
  ).isRequired,
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
      color: PropTypes.string,
    })
  ).isRequired,
};
