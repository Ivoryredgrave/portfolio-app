import React from "react";
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

export default function CustomAccordion(props) {
  const {
    titulo,
    descripcion,
    lenguajes,
    detalles,
    imagenes,
    video,
    tituloVideo,
    posterVideo,
    botones,
  } = props;

  return (
    <Accordion expanded>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography sx={{ width: "33%", flexShrink: 0 }}>{titulo}</Typography>
        <Typography sx={{ color: "text.secondary" }}>{descripcion}</Typography>
      </AccordionSummary>

      <AccordionDetails>
        {lenguajes &&
          lenguajes.map((lenguaje) => (
            <Chip
              key={lenguaje.texto}
              label={lenguaje.texto}
              color={lenguaje.color}
              variant={lenguaje.variant}
            />
          ))}

        <br />
        <br />

        {detalles &&
          detalles.map((detalle, index) => (
            <Typography key={index}>{detalle.texto}</Typography>
          ))}

        {imagenes && (
          <ImageList sx={{ height: 512 }} cols={1}>
            {imagenes.map((imagen, index) => (
              <ImageListItem key={index}>
                <img
                  src={`${imagen.img}`}
                  srcSet={`${imagen.img}`}
                  alt={imagen.img}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        )}

        {video && (
          <>
            <ImageList>
              <ImageListItem>
                <video
                  src={video}
                  width="640"
                  poster={posterVideo}
                  controls
                  loop
                  preload="auto"
                />
                <Typography sx={{ color: "text.secondary" }}>
                  {tituloVideo}
                </Typography>
              </ImageListItem>
            </ImageList>
          </>
        )}

        {botones && (
          <ButtonGroup
            color="primary"
            aria-label="medium secondary button group"
          >
            {botones.map((boton, index) => (
              <Button
                key={index}
                target="_blank"
                rel="noopener noreferrer"
                color={boton.color}
                href={boton.href}
              >
                <LinkIcon />
                &nbsp;{boton.nombre}
              </Button>
            ))}
          </ButtonGroup>
        )}
      </AccordionDetails>
    </Accordion>
  );
}
