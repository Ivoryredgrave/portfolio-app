import ResponsiveAppBar from "./components/AppBar";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

import { ThemeProvider } from "@mui/material/styles";
import { darkTheme } from "./styles/components/muiStyles";
import CssBaseline from "@mui/material/CssBaseline";
import "./styles/styles.css";

import html5logo from "./multimedia/images/html5-logo.webp";
import css3logo from "./multimedia/images/css3-logo.webp";
import mysqllogo from "./multimedia/images/mysql-logo.webp";
import nodejslogo from "./multimedia/images/nodejs-logo.webp";
import reactlogo from "./multimedia/images/react-logo.webp";
import javascriptlogo from "./multimedia/images/javascript-logo.webp";
import githublogo from "./multimedia/images/github-logo.webp";
import antdlogo from "./multimedia/images/ant-design-logo.webp";

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
          tituloNombre="Portafolio"
          tituloSobreMi="Sobre mi"
          tituloProyectos="Proyectos"
          tituloHabilidades="Habilidades"
          tituloEducacion="Formación"
          tituloContacto="Contacto"
        />

        <AboutMe
          descripcionPerfil="¡Hola! Me llamo"
          nombrePerfil="Carlos Javier López"
          descripcionPerfil1="Soy desarrollador web especializado en ambos lados, frontend y backend."
          abrirCV="cv.pdf"
          descripcionBotonCV="Ver hoja de vida"
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
          textoFinalFooter="Desarrollado con ❤️ por Carlos Javier López"
          urlGithub="https://github.com/Ivoryredgrave"
          urlLinkedin="https://www.linkedin.com/in/carlos-lopez-morilla/"
        />
      </ThemeProvider>
    </>
  );
}
