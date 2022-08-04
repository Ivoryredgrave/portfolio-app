import * as React from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";

export default function AboutMe(props) {
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
                alt={props.alt}
                src={require(`../multimedia/images/${props.imagenPerfil}`)}
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
              {props.descripcionPerfil}
            </Typography>
          </Grid>

          <Stack
            sx={{ pt: 1 }}
            direction="row"
            spacing={2}
            justifyContent="center"
          >
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
  );
}
