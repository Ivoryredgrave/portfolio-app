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
  Dialog,
  DialogContent,
  IconButton,
} from "@mui/material";
import LinkIcon from "@mui/icons-material/Link";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CloseIcon from "@mui/icons-material/Close";

export default function CustomAccordion({
  title,
  description,
  languages,
  images,
  buttons,
}) {

  const [expanded, setExpanded] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const handleChange = () => {
    setExpanded(!expanded);
  };

  const handleImageClick = (img) => {
    setSelectedImage(img);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
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
              <ImageListItem
                key={index}
                onClick={() => handleImageClick(image.img)}
                sx={{
                  cursor: "pointer",
                  position: "relative",
                  overflow: "hidden",
                  "&:hover::after": {
                    opacity: 1,
                  },
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(0, 0, 0, 0.3)",
                    opacity: 0,
                    transition: "opacity 0.5s ease",
                  },
                }}
              >
                <img
                  src={image.img}
                  alt={image.img}
                  loading="lazy"
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    height: "100%",
                    transition: "transform 0.5s ease",
                  }}
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

      <Dialog open={openModal} onClose={handleCloseModal} maxWidth="md" fullWidth>
        <DialogContent sx={{ position: "relative", textAlign: "center", p: 0 }}>
          <IconButton
            onClick={handleCloseModal}
            sx={{
              position: "absolute",
              top: 10,
              right: 10,
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              color: "#fff",
              "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.8)" },
            }}
          >
            <CloseIcon />
          </IconButton>
          <img
            src={selectedImage}
            alt="Selected"
            style={{ width: "100%", height: "auto" }}
          />
        </DialogContent>
      </Dialog>
      
    </Accordion>
  );
}

CustomAccordion.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  languages: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      color: PropTypes.string,
      variant: PropTypes.string,
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
