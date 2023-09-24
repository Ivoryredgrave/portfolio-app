import * as React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import CustomAccordion from "./CustomAccordion";

import galleryApp from "../multimedia/videos/videoGalleryApp.mp4";
import crudappVideo from "../multimedia/videos/crudappVideo.mp4";

import testiahri from "../multimedia/images/testi-ahri.webp";
import testijinx from "../multimedia/images/testi-jinx.webp";

import RickAndMortyApp from "../multimedia/images/RickAndMortyApp.webp";
import RickAndMortyApp2 from "../multimedia/images/RickAndMortyApp2.webp";

import artistPort from "../multimedia/images/artist-portfolio.webp";
import artistPort2 from "../multimedia/images/artist-portfolio2.webp";

export default function Projects(props) {
  const { titulo } = props;

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

  const botonesCrudApp = [
    {
      nombre: "Código fuente Frontend",
      href: "https://github.com/Ivoryredgrave/crudAPP-Frontend",
    },
    {
      nombre: "Código fuente Backend",
      href: "https://github.com/Ivoryredgrave/crudAPP-Backend",
    },
  ];

  const botonesRickAndMortyApp = [
    {
      nombre: "Código fuente",
      href: "https://github.com/Ivoryredgrave/RickAndMortyApp",
    },
    {
      nombre: "Demo",
      href: "https://ivoryredgrave.github.io/RickAndMortyApp/",
      color: "success",
    },
  ];

  const botonesArtistPortfolio = [
    {
      nombre: "Código fuente",
      href: "https://github.com/Ivoryredgrave/artist-portfolio",
    },
    {
      nombre: "Demo",
      href: "https://ivoryredgrave.github.io/artist-portfolio/",
      color: "success",
    },
  ];

  const botonesTestiApp = [
    {
      nombre: "Código fuente",
      href: "https://github.com/Ivoryredgrave/testiAPP",
    },
    {
      nombre: "Demo",
      href: "https://ivoryredgrave.github.io/testiAPP/",
      color: "success",
    },
  ];

  const botonesGalleryApp = [
    {
      nombre: "Código fuente",
      href: "https://github.com/Ivoryredgrave/galleryapp",
    },
  ];

  const lenguajesCrudApp = [
    { texto: "ReactJS", color: "primary", variant: "outlined" },
    { texto: "Ant Design", color: "info", variant: "outlined" },
    { texto: "NodeJS", color: "success", variant: "outlined" },
    { texto: "MySQL", color: "warning", variant: "outlined" },
  ];

  const lenguajesGalleryApp = [
    { texto: "ReactJS", color: "primary", variant: "outlined" },
    { texto: "Ant Design", color: "info", variant: "outlined" },
    { texto: "NodeJS", color: "success", variant: "outlined" },
    { texto: "MySQL", color: "warning", variant: "outlined" },
  ];

  const lenguajesRickAndMortyApp = [
    { texto: "ReactJS", color: "primary", variant: "outlined" },
    { texto: "Ant Design", color: "info", variant: "outlined" },
  ];

  const lenguajesArtistPorfolio = [
    { texto: "ReactJS", color: "primary", variant: "outlined" },
    { texto: "MUI", color: "info", variant: "outlined" },
    { texto: "CSS", color: "secondary", variant: "outlined" },
  ];

  const lenguajesTestiApp = [
    { texto: "ReactJS", color: "primary", variant: "outlined" },
    { texto: "MUI", color: "info", variant: "outlined" },
    { texto: "CSS", color: "secondary", variant: "outlined" },
  ];

  const detallesCrudApp = [
    { texto: "☑️ Ventana de iniciar sesión." },
    { texto: "☑️ Roles de usuario." },
    { texto: "☑️ Menú lateral." },
    { texto: "☑️ Resúmenes estadísticos de usuarios." },
    { texto: "☑️ Añadir y modificar usuarios." },
    { texto: "☑️ Emisión de reportes en formato PDF y XLSX." },
  ];

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
          {titulo}
        </Typography>

        <CustomAccordion
          titulo="Crud-app"
          descripcion="Aplicación para la gestión de datos."
          lenguajes={lenguajesCrudApp}
          detalles={detallesCrudApp}
          tituloVideo="Vista previa en vídeo"
          video={crudappVideo}
          botones={botonesCrudApp}
        />

        <CustomAccordion
          titulo="Rick-And-Morty-app"
          descripcion="Consumiento api de Rick And Morty."
          lenguajes={lenguajesRickAndMortyApp}
          imagenes={RickAndMortyAppImagenes}
          botones={botonesRickAndMortyApp}
        />

        <CustomAccordion
          titulo="Artist-portfolio"
          descripcion="Portafolio para artistas."
          lenguajes={lenguajesArtistPorfolio}
          imagenes={portfolioArtistImagenes}
          botones={botonesArtistPortfolio}
        />

        <CustomAccordion
          titulo="Testi-app"
          descripcion="Testimonio de clientes."
          lenguajes={lenguajesTestiApp}
          imagenes={testiappImagenes}
          botones={botonesTestiApp}
        />

        <CustomAccordion
          titulo="Gallery-app"
          descripcion="Crud de imágenes."
          lenguajes={lenguajesGalleryApp}
          tituloVideo="Vista previa en vídeo"
          video={galleryApp}
          botones={botonesGalleryApp}
        />
      </Container>
    </div>
  );
}
