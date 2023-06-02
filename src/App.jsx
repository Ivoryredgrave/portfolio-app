import ResponsiveAppBar from "./components/AppBar";
import AboutMe from "./components/AboutMe";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

import { ThemeProvider } from "@mui/material/styles";
import { darkTheme } from "./styles/components/muiStyles";
import CssBaseline from "@mui/material/CssBaseline";
import "./styles/styles.css";

import html5logo from "./multimedia/images/html5-logo.png";
import css3logo from "./multimedia/images/css3-logo.png";
import mysqllogo from "./multimedia/images/mysql-logo.png";
import nodejslogo from "./multimedia/images/nodejs-logo.png";
import reactlogo from "./multimedia/images/react-logo.png";
import javascriptlogo from "./multimedia/images/javascript-logo.png";
import githublogo from "./multimedia/images/github-logo.png";
import antdlogo from "./multimedia/images/ant-design-logo.png";

export default function App() {
  const avatars = [
    { src: html5logo, alt: "HTML5 Logo" },
    { src: css3logo, alt: "CSS3 Logo" },
    { src: javascriptlogo, alt: "JavaScript Logo" },
    { src: reactlogo, alt: "React Logo" },
    { src: antdlogo, alt: "Antd Logo" },
    { src: mysqllogo, alt: "MySQL Logo" },
    { src: nodejslogo, alt: "NodeJS Logo" },
    { src: githublogo, alt: "Github Logo" },
  ];

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />

        <ResponsiveAppBar
          tituloNombre="Carlos Javier López"
          tituloSobreMi="Sobre mi"
          tituloEducacion="Educación"
          tituloHabilidades="Habilidades"
          tituloProyectos="Proyectos"
          tituloContacto="Contacto"
        />

        <AboutMe
          descripcionPerfil="¡Hola! Me llamo"
          nombrePerfil="Carlos Javier López Morilla"
          descripcionPerfil1="Soy frontend developer en React, 
                    amante del anime y apasionado por el game development."
          abrirCV="cv.pdf"
          descripcionBotonCV="Ver hoja de vida"
        />

        <Education
          titulo="Educación"
          nombreSecundaria="Politécnico Don Pepe Álvarez"
          subtituloSecundaria="Bachiller | 2013 - 2016"
          nombreUniversidad="Universidad Nacional Pedro Henríquez Ureña"
          subtituloUniversidad="Lic. en Informática | Sept. 2016 - Abr. 2022"
        />

        <Skills textoHabilidades="Habilidades" avatars={avatars} />

        <Projects titulo="Proyectos" />

        <Footer
          titulo="Contacto"
          descripcion="Si tienes alguna pregunta o propuesta de trabajo, mi bandeja de
                    entrada esta disponible."
          correo="ivoryredgrave@gmail.com"
          nombreBotonGmail="Gmail"
          urlWhatsapp="https://api.whatsapp.com/send?text=¡Hola!&phone=+18296911654
                    WhatsApp"
          nombreBotonWhatsapp="WhatsApp"
          textoFinalFooter="Desarrollado con ❤️ por Carlos Javier López Morilla"
          urlGithub="https://github.com/Ivoryredgrave"
          urlLinkedin="https://www.linkedin.com/in/carlos-javier-l%C3%B3pez/"
        />
      </ThemeProvider>
    </>
  );
}
