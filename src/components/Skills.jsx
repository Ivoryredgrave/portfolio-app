import React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";

export default function Skills(props) {
  const { textoHabilidades, avatars } = props;

  return (
    <div id="skills">
      <Container>
        <br />
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          {textoHabilidades}
        </Typography>

        <Box display="flex" justifyContent="center" flexWrap="wrap">
          {avatars.flat().map((avatar, index) => (
            <Avatar
              key={index}
              sx={{
                width: "74px",
                height: "74px",
                margin: "10px",
              }}
              alt={avatar.alt}
              src={avatar.src}
            />
          ))}
        </Box>
      </Container>
    </div>
  );
}
