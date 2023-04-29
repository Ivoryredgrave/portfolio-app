import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Typewriter from "typewriter-effect";

export default function AboutMe(props) {
  const {
    descripcionPerfil,
    nombrePerfil,
    descripcionPerfil1,
    abrirCV,
    descripcionBotonCV,
  } = props;

  return (
    <div id="aboutme">
      <Box className="aboutme">
        <Container>
          <Typography
            component="h1"
            variant="h5"
            color="text.secondary"
            paragraph
          >
            {descripcionPerfil}
          </Typography>

          <Typography
            variant="h2"
            component="h1"
            color="text.secondary"
            paragraph
          >
            <Typewriter
              onInit={(typewriter) => {
                typewriter.typeString(nombrePerfil).start();
              }}
            />
          </Typography>

          <Typography variant="h6" color="text.secondary" paragraph>
            {descripcionPerfil1}
          </Typography>

          <Stack sx={{ pt: 1 }} direction="row" spacing={2}>
            <Button
              href={require(`../multimedia/pdf/${abrirCV}`)}
              target="_blank"
              rel="noopener noreferrer"
              variant="outlined"
            >
              {descripcionBotonCV}
            </Button>
          </Stack>
        </Container>
      </Box>
    </div>
  );
}
