import React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Typewriter from "typewriter-effect";

const AboutMe = ({
  profileDescription,
  profileName,
  profileDescription1,
  cvFile,
  cvButtonText,
}) => {
  return (
    <div id="aboutme">
      <Box className="aboutme">
        <Container>

          <Typography variant="h6" color="text.secondary">
            {profileDescription}
          </Typography>

          <Typography variant="h2">
            <Typewriter onInit={(typewriter) => { typewriter.typeString(profileName).start(); }} />
          </Typography>

          <Typography variant="h6" gutterBottom color="text.secondary">
            {profileDescription1}
          </Typography>

          <Stack sx={{ pt: 1 }} direction="row" spacing={2}>
            <Button
              href={`/${cvFile}`}
              target="_blank"
              rel="noopener noreferrer"
              variant="outlined"
            >
              {cvButtonText}
            </Button>
          </Stack>

        </Container>
      </Box>
    </div>
  );
};

AboutMe.propTypes = {
  profileDescription: PropTypes.string.isRequired,
  profileName: PropTypes.string.isRequired,
  profileDescription1: PropTypes.string.isRequired,
  cvFile: PropTypes.string.isRequired,
  cvButtonText: PropTypes.string.isRequired,
};

export default AboutMe;