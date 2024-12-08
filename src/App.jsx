import AppBar from "./components/AppBar";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import { avatars } from "./data/skillsData";

import { ThemeProvider } from "@mui/material/styles";
import { darkTheme } from "./styles/components/muiStyles";
import CssBaseline from "@mui/material/CssBaseline";
import "./styles/styles.css";

export default function App() {

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />

        <AppBar
          title="Portfolio"
          menuItems={[
            { title: "About Me", href: "#aboutme" },
            { title: "Skills", href: "#skills" },
            { title: "Projects", href: "#projects" },
            { title: "Contact", href: "#contact" },
          ]}
        />

        <AboutMe
          profileDescription="Hi! My name is"
          profileName="Carlos Javier López"
          profileDescription1="I am a web developer specialized in both frontend and backend."
          cvFile="cv.pdf"
          cvButtonText="View Resume"
        />

        <Skills skillsText="Skills" avatars={avatars} />

        <Projects title="Projects" />

        <Footer
          title="Contact"
          description="If you have any questions or work proposals, my inbox is open."
          email="ivoryredgrave@gmail.com"
          emailButtonText="Gmail"
          whatsappUrl="https://api.whatsapp.com/send?text=Hi!&phone=+18296911654"
          whatsappButtonText="WhatsApp"
          footerText="Developed with ❤️ by Carlos Javier López"
          urlGithub="https://github.com/Ivoryredgrave"
          urlLinkedin="https://www.linkedin.com/in/carlos-lopez-morilla/"
        />

      </ThemeProvider>
    </>
  );
}