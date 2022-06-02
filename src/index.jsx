import React from 'react';
import ReactDOM from 'react-dom/client';

// pages
import ResponsiveAppBar from './pages/AppBar';
import AboutMe from './pages/AboutMe';
import Skills from './pages/skills';
import Projects from './pages/Projects';
import Education from './pages/education';
import Footer from './pages/Footer';

// styles
import { ThemeProvider } from '@mui/material/styles';
import { darkTheme } from './styles/components/darkTheme';
import CssBaseline from '@mui/material/CssBaseline';
import './styles/styles.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      
      <CssBaseline />
      
      <ResponsiveAppBar />
      <AboutMe />
      <Education />
      <Skills />
      <Projects />
      <Footer />

    </ThemeProvider>
  </React.StrictMode>
);