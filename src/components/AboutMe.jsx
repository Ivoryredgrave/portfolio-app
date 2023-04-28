import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Typewriter from "typewriter-effect";

export default function AboutMe(props) {
  return (
    <>
      <div id="aboutme">
        <Box className="aboutme">
          <Container>
            <Typography
              component="h1"
              variant="h5"
              color="text.secondary"
              paragraph
            >
              {props.descripcionPerfil}
            </Typography>

            <Typography
              variant="h2"
              component="h1"
              color="text.secondary"
              paragraph
            >
              <Typewriter
                onInit={(typewriter) => {
                  typewriter.typeString(props.nombrePerfil).start();
                }}
              />
            </Typography>

            <Typography variant="h6" color="text.secondary" paragraph>
              {props.descripcionPerfil1}
            </Typography>

            <Stack sx={{ pt: 1 }} direction="row" spacing={2}>
              <Button
                href={require(`../multimedia/pdf/${props.abrirCV}`)}
                target="_blank"
                rel="noopener noreferrer"
                variant="outlined"
              >
                {props.descripcionBotonCV}
              </Button>
            </Stack>
          </Container>
        </Box>
      </div>
    </>
  );
}
