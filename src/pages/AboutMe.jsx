import * as React from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';

import perfillogo from '../multimedia/images/perfil-logo.png';
import cv from '../multimedia/pdf/cv.pdf';

export default function AboutMe() {
  return (
    <div id='aboutme'>

      <div id='particle-container'>

        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>

        <Box className='aboutme'
          sx={{
            bgcolor: 'background.paper',
            pt: 30,
            pb: 30,
          }}>

          <Container maxWidth="sm">

            <Grid item xs={6}>
              <Avatar
                className='avatar'
                alt="Carlos Javier"
                src={perfillogo}
                style={{
                  display: 'block',
                  margin: 'auto'
                }}
                sx={{ width: 312, height: 312 }}
              />
            </Grid>

            <Grid sx={{ pt: 4 }} item xs={6}>
              <Typography variant="h4" align="center" color="text.secondary" paragraph>
                ¡Hola! Me llamo Carlos Javier López, soy desarrollador web junior en ReactJS.
              </Typography>
            </Grid>

            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button href={cv}
                target="_blank" rel="noopener noreferrer" variant="outlined">
                Descargar CV
              </Button>
            </Stack>

          </Container>
        </Box>

      </div>
    </div>
  );
}