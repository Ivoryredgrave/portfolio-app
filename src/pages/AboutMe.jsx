// react
import * as React from "react";

// material ui
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";

// multimedia
import perfillogo from "../multimedia/images/perfil-logo.jpg";
import cv from "../multimedia/pdf/cv.pdf";

export default function AboutMe() {
  return (
    <div id="aboutme">
      <Box
        className="aboutme"
        sx={{
          bgcolor: "background.paper",
          pt: 18,
          pb: 18,
        }}
      >
        <Container maxWidth="sm">
          <Grid item xs={6}>
            <Stack direction="row" spacing={2}>
              <Avatar
                style={{
                  display: "block",
                  margin: "auto",
                  boxShadow: "0px 6px 5px rgba(0, 0, 0, 0.527)",
                }}
                alt="Carlos Javier"
                src={perfillogo}
                sx={{ width: 334, height: 414 }}
              />
            </Stack>
          </Grid>

          <Grid sx={{ pt: 4 }} item xs={6}>
            <Typography
              variant="h4"
              align="center"
              color="text.secondary"
              paragraph
            >
              ¡Hola! Me llamo Carlos Javier López, soy desarrollador web junior
              en ReactJS.
            </Typography>
          </Grid>

          <Stack
            sx={{ pt: 1 }}
            direction="row"
            spacing={2}
            justifyContent="center"
          >
            <Button
              href={cv}
              target="_blank"
              rel="noopener noreferrer"
              variant="outlined"
            >
              Ver hoja de vida
            </Button>
          </Stack>
        </Container>
      </Box>
    </div>
  );
}
