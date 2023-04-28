import * as React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import LinkIcon from "@mui/icons-material/Link";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import crudapp from "../multimedia/images/crudapp.jpg";
import crudapp2 from "../multimedia/images/crudapp2.jpg";
import crudapp3 from "../multimedia/images/crudapp3.jpg";
import crudapp4 from "../multimedia/images/crudapp4.jpg";
import crudapp5 from "../multimedia/images/crudapp5.jpg";
import crudapp6 from "../multimedia/images/crudapp6.jpg";
import crudapp7 from "../multimedia/images/crudapp7.jpg";
import crudapp8 from "../multimedia/images/crudapp8.jpg";
import galleryApp from "../multimedia/videos/videoGalleryApp.mp4";
import galleryappPreview from "../multimedia/images/preview-galleryapp.png";
import testiahri from "../multimedia/images/testi-ahri.jpg";
import testijinx from "../multimedia/images/testi-jinx.jpg";
import RickAndMortyApp from "../multimedia/images/RickAndMortyApp.png";
import RickAndMortyApp2 from "../multimedia/images/RickAndMortyApp2.png";

import artistPort from "../multimedia/images/artist-portfolio.jpg";
import artistPort2 from "../multimedia/images/artist-portfolio2.jpg";

export default function Projects() {
  const crudAppImagenes = [
    {
      img: crudapp,
    },
    {
      img: crudapp2,
    },
    {
      img: crudapp3,
    },
    {
      img: crudapp4,
    },
    {
      img: crudapp5,
    },
    {
      img: crudapp6,
    },
    {
      img: crudapp7,
    },
    {
      img: crudapp8,
    },
  ];

  const RickAndMortyAppImagenes = [
    {
      img: RickAndMortyApp,
    },
    {
      img: RickAndMortyApp2,
    },
  ];

  const testiappImagenes = [
    {
      img: testijinx,
    },
    {
      img: testiahri,
    },
  ];

  const portfolioArtistImagenes = [
    {
      img: artistPort,
    },
    {
      img: artistPort2,
    },
  ];

  const [expanded, setExpanded] = React.useState("panel1");

  const buttons = [
    <Button
      href="https://github.com/Ivoryredgrave/crudAPP-Frontend"
      target="_blank"
      rel="noopener noreferrer"
    >
      <LinkIcon />
      &nbsp;Código fuente Frontend
    </Button>,
    <Button
      href="https://github.com/Ivoryredgrave/crudAPP-Backend"
      target="_blank"
      rel="noopener noreferrer"
    >
      <LinkIcon />
      &nbsp;Código fuente Backend
    </Button>,
  ];

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div id="projects">
      <Container sx={{ py: 4 }} maxWidth="md">
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Proyectos
        </Typography>

        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>
              Crud-app
            </Typography>
            <Typography sx={{ color: "text.secondary" }}>
              Plantilla responsiva en base a las funciones de un CRUD.
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Chip label="ReactJS" color="primary" variant="outlined" />
            <Chip label="Ant Design" color="info" variant="outlined" />
            <Chip label="NodeJS" color="success" variant="outlined" />
            <Chip label="MySQL" color="warning" variant="outlined" />

            <br />
            <br />

            <Typography variant="body1" gutterBottom>
              ☑️ Ventana de iniciar sesión.
            </Typography>

            <Typography variant="body1" gutterBottom>
              ☑️ Roles de usuario.
            </Typography>

            <Typography variant="body1" gutterBottom>
              ☑️ Menú lateral.
            </Typography>

            <Typography variant="body1" gutterBottom>
              ☑️ Resúmenes estadísticos de usuarios.
            </Typography>

            <Typography variant="body1" gutterBottom>
              ☑️ Añadir y modificar usuarios.
            </Typography>

            <Typography variant="body1" gutterBottom>
              ☑️ Emisión de reportes en formato PDF y XLSX.
            </Typography>

            <br />

            <ImageList sx={{ height: 512 }} cols={1}>
              {crudAppImagenes.map((item) => (
                <ImageListItem key={item.img}>
                  <img
                    src={`${item.img}`}
                    srcSet={`${item.img}`}
                    alt={"crudapp"}
                    loading="lazy"
                  />
                </ImageListItem>
              ))}
            </ImageList>
            <Stack sx={{ pt: 1 }} direction="row" spacing={2}>
              <ButtonGroup
                color="primary"
                aria-label="medium secondary button group"
              >
                {buttons}
              </ButtonGroup>
            </Stack>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>
              Rick-And-Morty-app
            </Typography>
            <Typography sx={{ color: "text.secondary" }}>
              Consumiento api de Rick And Morty.
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Chip label="ReactJS" color="primary" variant="outlined" />
            <Chip label="Ant Design" color="info" variant="outlined" />

            <br />
            <br />

            <ImageList sx={{ height: 512 }} cols={1}>
              {RickAndMortyAppImagenes.map((item) => (
                <ImageListItem key={item.img}>
                  <img
                    src={`${item.img}`}
                    srcSet={`${item.img}`}
                    alt={"RickAndMortyApp"}
                    loading="lazy"
                  />
                </ImageListItem>
              ))}
            </ImageList>
            <Stack sx={{ pt: 1 }} direction="row" spacing={2}>
              <ButtonGroup
                color="primary"
                aria-label="medium secondary button group"
              >
                <Button
                  href="https://github.com/Ivoryredgrave/RickAndMortyApp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkIcon />
                  &nbsp;Código fuente
                </Button>
                <Button
                  href="https://ivoryredgrave.github.io/RickAndMortyApp/"
                  target="_blank"
                  color="success"
                  rel="noopener noreferrer"
                >
                  <LinkIcon />
                  &nbsp;Demo
                </Button>
              </ButtonGroup>
            </Stack>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>
              Artist-portfolio
            </Typography>
            <Typography sx={{ color: "text.secondary" }}>
              Portafolio para artistas.
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Chip label="ReactJS" color="primary" variant="outlined" />
            <Chip label="MUI" color="info" variant="outlined" />
            <Chip label="CSS" color="secondary" variant="outlined" />

            <br />
            <br />

            <ImageList sx={{ height: 512 }} cols={1}>
              {portfolioArtistImagenes.map((item) => (
                <ImageListItem key={item.img}>
                  <img
                    src={`${item.img}`}
                    srcSet={`${item.img}`}
                    alt={"testiapp"}
                    loading="lazy"
                  />
                </ImageListItem>
              ))}
            </ImageList>

            <ButtonGroup
              color="primary"
              aria-label="medium secondary button group"
            >
              <Button
                href="https://github.com/Ivoryredgrave/artist-portfolio"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkIcon />
                &nbsp;Código fuente
              </Button>
              <Button
                href="https://ivoryredgrave.github.io/artist-portfolio/"
                target="_blank"
                color="success"
                rel="noopener noreferrer"
              >
                <LinkIcon />
                &nbsp;Demo
              </Button>
            </ButtonGroup>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>
              Testi-app
            </Typography>
            <Typography sx={{ color: "text.secondary" }}>
              Testimonio de clientes.
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Chip label="ReactJS" color="primary" variant="outlined" />
            <Chip label="MUI" color="info" variant="outlined" />
            <Chip label="CSS" color="secondary" variant="outlined" />

            <br />
            <br />

            <ImageList sx={{ height: 512 }} cols={1}>
              {testiappImagenes.map((item) => (
                <ImageListItem key={item.img}>
                  <img
                    src={`${item.img}`}
                    srcSet={`${item.img}`}
                    alt={"testiapp"}
                    loading="lazy"
                  />
                </ImageListItem>
              ))}
            </ImageList>
            <ButtonGroup
              color="primary"
              aria-label="medium secondary button group"
            >
              <Button
                href="https://github.com/Ivoryredgrave/testiAPP"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkIcon />
                &nbsp;Código fuente
              </Button>
              <Button
                href="https://ivoryredgrave.github.io/testiAPP/"
                target="_blank"
                color="success"
                rel="noopener noreferrer"
              >
                <LinkIcon />
                &nbsp;Demo
              </Button>
            </ButtonGroup>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "panel5"}
          onChange={handleChange("panel5")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel5bh-content"
            id="panel5bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>
              Gallery-app
            </Typography>
            <Typography sx={{ color: "text.secondary" }}>
              Crud de imágenes.
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Chip label="ReactJS" color="primary" variant="outlined" />
            <Chip label="Ant Design" color="info" variant="outlined" />
            <Chip label="NodeJS" color="success" variant="outlined" />
            <Chip label="MySQL" color="warning" variant="outlined" />

            <br />
            <br />

            <ImageList>
              <ImageListItem>
                <video
                  src={galleryApp}
                  poster={galleryappPreview}
                  width="640"
                  height="480"
                  controls
                  loop
                />
              </ImageListItem>
            </ImageList>
            <Stack sx={{ pt: 1 }} direction="row" spacing={2}>
              <ButtonGroup
                color="primary"
                aria-label="medium secondary button group"
              >
                <Button
                  href="https://github.com/Ivoryredgrave/galleryapp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkIcon />
                  &nbsp;Código fuente
                </Button>
              </ButtonGroup>
            </Stack>
          </AccordionDetails>
        </Accordion>
      </Container>
    </div>
  );
}
