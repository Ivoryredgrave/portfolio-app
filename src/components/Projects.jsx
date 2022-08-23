import * as React from 'react';
import Typography from '@mui/material/Typography';
import Container from "@mui/material/Container";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import LinkIcon from "@mui/icons-material/Link";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import crudapp from "../multimedia/images/crudapp.png";
import crudapp2 from "../multimedia/images/crudapp2.png";
import crudapp3 from "../multimedia/images/crudapp3.png";
import crudapp4 from "../multimedia/images/crudapp4.png";
import menuUE4 from "../multimedia/videos/videoMenuUE4.mp4";
import galleryApp from "../multimedia/videos/videoGalleryApp.mp4";
import menuPreview from "../multimedia/images/menu_ue4.jpg";
import galleryappPreview from "../multimedia/images/preview-galleryapp.png";
import portfolio from "../multimedia/images/portfolio-preview.jpg";
import ivorybot from "../multimedia/images/ivorybot.jpg";
import ivorybot2 from "../multimedia/images/ivorybot2.jpg";
import ivorybot3 from "../multimedia/images/ivorybot3.jpg";
import ivorybot4 from "../multimedia/images/ivorybot4.jpg";
import testiahri from "../multimedia/images/testi-ahri.jpg";
import testijinx from "../multimedia/images/testi-jinx.jpg";

export default function Projects() {

  const dataItem = [
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
  ];

  const itemData = [
    {
      img: ivorybot,
    },
    {
      img: ivorybot2,
    },
    {
      img: ivorybot3,
    },
    {
      img: ivorybot4,
    },
  ];

  const imgTestiApp = [
    {
      img: testijinx,
    },
    {
      img: testiahri,
    },

  ];

  const [expanded, setExpanded] = React.useState('panel1');

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

        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography sx={{ width: '33%', flexShrink: 0 }}>
              Crud-app
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>
              Plantilla responsiva en base a las funciones de un CRUD.
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Stack spacing={1} direction="row">
              <Chip label="ReactJS" color="primary" variant="outlined" />
              <Chip label="Ant Design" color="info" variant="outlined" />
              <Chip label="NodeJS" color="success" variant="outlined" />
              <Chip label="MySQL" color="warning" variant="outlined" />
            </Stack>

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
              ☑️ Emisión de reportes en formato PDF, CSV y XLSX.
            </Typography>
            <br />
            <ImageList sx={{ height: 512 }} cols={1}>
              {dataItem.map((item) => (
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

        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <Typography sx={{ width: '33%', flexShrink: 0 }}>Menu-template</Typography>
            <Typography sx={{ color: 'text.secondary' }}>
              Menú responsivo.
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Chip
              label="Unreal Engine 4.27.2"
              color="default"
              variant="outlined"
            />
            <br />
            <br />
            <Typography variant="body1" gutterBottom>
              ☑️ Menú de pausa al presionar la tecla ESC.
            </Typography>

            <Typography variant="body1" gutterBottom>
              ☑️ Ventana de carga (loading...).
            </Typography>

            <Typography variant="body1" gutterBottom>
              ☑️ Ventana de créditos.
            </Typography>

            <Typography variant="body1" gutterBottom>
              ☑️ Pantalla completa y modo ventana.
            </Typography>

            <Typography variant="body1" gutterBottom>
              ☑️ Controlar volumen de música y efectos.
            </Typography>

            <Typography variant="body1" gutterBottom>
              ☑️ Guardado automático de la ventana de ajustes.
            </Typography>
            <br />
            <ImageList>
              <ImageListItem>
                <video
                  src={menuUE4}
                  poster={menuPreview}
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
                  href="https://github.com/Ivoryredgrave/PlantillaMenuUE4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkIcon />
                  &nbsp;Código fuente
                </Button>

                <Button
                  href="https://ivoryredgrave.itch.io/menu-template-ue4"
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

        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <Typography sx={{ width: '33%', flexShrink: 0 }}>
              Portfolio-app
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>
              Portafolio personal.
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Stack spacing={1} direction="row">
              <Chip label="ReactJS" color="primary" variant="outlined" />
              <Chip label="MUI" color="info" variant="outlined" />
              <Chip label="CSS" color="secondary" variant="outlined" />
            </Stack>
            <br />
            <br />
            <ImageList sx={{ height: 512 }} cols={1}>
              <ImageListItem>
                <img
                  src={portfolio}
                  srcSet={portfolio}
                  alt={"portfolio"}
                  loading="lazy"
                />
              </ImageListItem>
            </ImageList>
            <Stack sx={{ pt: 1 }} direction="row" spacing={2}>
              <ButtonGroup
                color="primary"
                aria-label="medium secondary button group"
              >
                <Button
                  href="https://github.com/Ivoryredgrave/portfolio-app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkIcon />
                  &nbsp;Código fuente
                </Button>
                <Button
                  href="https://ivoryredgrave.github.io/portfolio-app/"
                  target="_blank"
                  color="success"
                  rel="noopener noreferrer">
                  <LinkIcon />
                  &nbsp;Demo
                </Button>
              </ButtonGroup>
            </Stack>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
          >
            <Typography sx={{ width: '33%', flexShrink: 0 }}>Ivory-bot</Typography>
            <Typography sx={{ color: 'text.secondary' }}>
              Bot para discord con comandos básicos.
            </Typography>
          </AccordionSummary>
          <AccordionDetails>

            <Chip
              label="Discord.js v12"
              color="primary"
              variant="outlined"
            />
            <br />
            <br />
            <ImageList sx={{ height: 512 }} cols={1}>
              {itemData.map((item) => (
                <ImageListItem key={item.img}>
                  <img
                    src={`${item.img}`}
                    srcSet={`${item.img}`}
                    alt={"ivorybot"}
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
                href="https://github.com/Ivoryredgrave/ivorybot"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkIcon />
                &nbsp;Código fuente
              </Button>

            </ButtonGroup>

          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
          >
            <Typography sx={{ width: '33%', flexShrink: 0 }}>Testi-app</Typography>
            <Typography sx={{ color: 'text.secondary' }}>
              Testimonio de clientes.
            </Typography>
          </AccordionSummary>
          <AccordionDetails>

            <Stack spacing={1} direction="row">
              <Chip label="ReactJS" color="primary" variant="outlined" />
              <Chip label="MUI" color="info" variant="outlined" />
              <Chip label="CSS" color="secondary" variant="outlined" />
            </Stack>

            <br />
            <br />
            <ImageList sx={{ height: 512 }} cols={1}>
              {imgTestiApp.map((item) => (
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
              aria-label="medium secondary button group">
              <Button
                href="https://github.com/Ivoryredgrave/testiAPP"
                target="_blank"
                rel="noopener noreferrer">
                <LinkIcon />
                &nbsp;Código fuente
              </Button>
              <Button
                href="https://ivoryredgrave.github.io/testiAPP/"
                target="_blank"
                color="success"
                rel="noopener noreferrer">
                <LinkIcon />
                &nbsp;Demo
              </Button>
            </ButtonGroup>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel5bh-content"
            id="panel5bh-header"
          >
            <Typography sx={{ width: '33%', flexShrink: 0 }}>Gallery-app</Typography>
            <Typography sx={{ color: 'text.secondary' }}>
              Crud de imágenes.
            </Typography>
          </AccordionSummary>
          <AccordionDetails>

            <Stack spacing={1} direction="row">
              <Chip label="ReactJS" color="primary" variant="outlined" />
              <Chip label="Ant Design" color="info" variant="outlined" />
              <Chip label="NodeJS" color="success" variant="outlined" />
              <Chip label="MySQL" color="warning" variant="outlined" />
            </Stack>

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