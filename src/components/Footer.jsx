import * as React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Stack from "@mui/material/Stack";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Container from "@mui/material/Container";
import MailIcon from "@mui/icons-material/Mail";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export default function Footer(props) {
  const {
    titulo,
    descripcion,
    correo,
    nombreBotonGmail,
    urlWhatsapp,
    nombreBotonWhatsapp,
    textoFinalFooter,
    urlGithub,
    urlLinkedin,
  } = props;

  const buttons = [
    <Button
      key="github"
      href={urlGithub}
      target="_blank"
      rel="noopener noreferrer"
    >
      <GitHubIcon />
    </Button>,
    <Button
      key="linkedin"
      href={urlLinkedin}
      target="_blank"
      rel="noopener noreferrer"
    >
      <LinkedInIcon />
    </Button>,
  ];

  return (
    <div id="contacts">
      <Box
        sx={{ bgcolor: "#272727" }}
        justifyContent="center"
        component="footer"
      >
        <Container sx={{ py: 4 }} maxWidth="md">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
            {titulo}
          </Typography>

          <Typography
            component="h1"
            variant="h5"
            align="center"
            color="text.secondary"
            paragraph
          >
            {descripcion}
          </Typography>

          <Stack
            sx={{ pt: 1 }}
            direction="row"
            spacing={2}
            justifyContent="center"
          >
            <Button href={`mailto:${correo}`} variant="outlined">
              <MailIcon />
              &nbsp;{nombreBotonGmail}
            </Button>

            <Button
              href={urlWhatsapp}
              variant="outlined"
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon />
              &nbsp;{nombreBotonWhatsapp}
            </Button>
          </Stack>
        </Container>

        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="h1"
        >
          {textoFinalFooter}
        </Typography>

        <Stack
          sx={{ pt: 1 }}
          direction="row"
          spacing={2}
          justifyContent="center"
        >
          <ButtonGroup
            color="secondary"
            aria-label="medium secondary button group"
          >
            {buttons}
          </ButtonGroup>
        </Stack>
        <br />
      </Box>
    </div>
  );
}
