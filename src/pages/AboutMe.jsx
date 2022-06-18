import * as React from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import perfillogo from '../multimedia/images/perfil-logo.jpg';
import cv from '../multimedia/pdf/cv.pdf';

export default function AboutMe() {
  return (
    <div id='aboutme'>
      <Box className='aboutme'
        sx={{
          bgcolor: 'background.paper',
          pt: 12,
          pb: 20,
        }}>
        <Container maxWidth="sm">

          <Grid item xs={6}>

            <img
              className='avatar'
              src={perfillogo}
              alt="Carlos Javier"
            />

          </Grid>

          <Grid sx={{ pt: 4 }} item xs={6}>
            <Typography variant="h4" align="center" color="text.secondary" paragraph>
              ¡Hola! Me llamo Carlos Javier López, soy desarrollador web junior en ReactJS.
            </Typography>
          </Grid>

          <Stack
            sx={{ pt: 1 }}
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
  );
}