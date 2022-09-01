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

function App() {
    return (
        <div>
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
                    nombrePerfil="Carlos Javier López Morilla"
                    descripcionPerfil="¡Hola! Me llamo"
                    descripcionPerfil1="Soy desarrollador web junior en ReactJS, 
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
                <Skills />
                <Projects />
                <Footer
                    titulo="Contacto"
                    descripcion="Si tienes alguna pregunta o propuesta de trabajo, mi bandeja de
                    entrada esta disponible."
                    correo="ivoryredgrave@gmail.com"
                    nombreBotonGmail="Gmail"
                    urlWhatsapp="https://api.whatsapp.com/send?text=¡Hola!&phone=+18493861171
                    WhatsApp"
                    nombreBotonWhatsapp="WhatsApp"
                    textoFinalFooter="Desarrollado con ❤️ por Carlos Javier López"
                    urlGithub="https://github.com/Ivoryredgrave"
                    urlLinkedin="https://www.linkedin.com/in/carlos-javier-l%C3%B3pez/"
                />

            </ThemeProvider>
        </div>
    )
}

export default App;