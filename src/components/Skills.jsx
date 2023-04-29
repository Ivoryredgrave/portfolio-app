import * as React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

export default function Skills(props) {
  const { textoHabilidades, avatars } = props;

  const allAvatars = avatars.flat();

  const avatarGroups = [];
  for (let i = 0; i < allAvatars.length; i += 3) {
    avatarGroups.push(allAvatars.slice(i, i + 3));
  }

  return (
      <div id="skills">
        <Container>
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
            {textoHabilidades}
          </Typography>

          {avatarGroups.map((avatarGroup, index) => (
            <Box key={index} display="flex" justifyContent="center">
              <Stack direction="row" spacing={1}>
                {avatarGroup.map((avatar, index) => (
                  <Avatar
                    key={index}
                    sx={{ width: 74, height: 74 }}
                    alt={avatar.alt}
                    src={avatar.src}
                  />
                ))}
              </Stack>
            </Box>
          ))}
        </Container>
      </div>
  );
}
