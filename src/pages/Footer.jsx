import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Stack from '@mui/material/Stack';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Container from '@mui/material/Container';

export default function Footer() {

  const buttons = [
    <Button href="https://github.com/Ivoryredgrave"
      target="_blank" rel="noopener noreferrer"><GitHubIcon /></Button>,
    <Button href="https://www.linkedin.com/in/carlos-javier-l%C3%B3pez/"
      target="_blank" rel="noopener noreferrer"><LinkedInIcon /></Button>,
  ];

  return (
    <div id='contacts'>

      <Box sx={{ bgcolor: '#272727' }} justifyContent="center" component="footer">

        <Container sx={{ py: 5 }} maxWidth="md">

          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
            Contacto
          </Typography>

          <Typography variant="h5" align="center" color="text.secondary" paragraph>
            Si tienes alguna pregunta o propuesta de trabajo, mi bandeja de entrada esta disponible.
          </Typography>

          <Stack
            sx={{ pt: 1 }}
            direction="row"
            spacing={2}
            justifyContent="center"
          >
            <Button href="mailto:ivoryredgrave@gmail.com" variant="outlined">Enviar mensaje</Button>
          </Stack>

        </Container>

        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Desarrollado con ❤️ por Carlos Javier López
        </Typography>

        <Stack
          sx={{ pt: 1 }}
          direction="row"
          spacing={2}
          justifyContent="center"
        >
          <ButtonGroup color="secondary" aria-label="medium secondary button group">
            {buttons}
          </ButtonGroup>
        </Stack>
        <br />

      </Box>

    </div>
  );
}