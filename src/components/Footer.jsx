import * as React from "react";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Stack from "@mui/material/Stack";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Container from "@mui/material/Container";

const socialButtons = (urlGithub, urlLinkedin) => [
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

export default function Footer({
  title,
  description,
  email,
  emailButtonText,
  whatsappUrl,
  whatsappButtonText,
  footerText,
  urlGithub,
  urlLinkedin,
}) {

  const buttons = socialButtons(urlGithub, urlLinkedin);

  return (
    <div id="contact">
      <Box sx={{ bgcolor: "#272727", pb: 4 }} component="footer">
        <Container sx={{ py: 4 }} maxWidth="md">
          
          <Typography
            variant="h4"
            align="center"
            color="text.primary"
            gutterBottom
          >
            {title}
          </Typography>

          <Typography
            variant="h6"
            align="center"
            color="text.secondary"
          >
            {description}
          </Typography>

          <Stack
            sx={{ pt: 1 }}
            direction="row"
            spacing={2}
            justifyContent="center"
          >

            <Button startIcon={<MailIcon />} href={`mailto:${email}`} variant="outlined">
              {emailButtonText}
            </Button>

            <Button
              startIcon={<WhatsAppIcon />}
              href={whatsappUrl}
              variant="outlined"
              target="_blank"
              rel="noopener noreferrer"
            >
              {whatsappButtonText}
            </Button>

          </Stack>

        </Container>

        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="h1"
        >
          {footerText}
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

      </Box>
    </div>
  );
}

Footer.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  emailButtonText: PropTypes.string.isRequired,
  whatsappUrl: PropTypes.string.isRequired,
  whatsappButtonText: PropTypes.string.isRequired,
  footerText: PropTypes.string.isRequired,
  urlGithub: PropTypes.string.isRequired,
  urlLinkedin: PropTypes.string.isRequired,
};