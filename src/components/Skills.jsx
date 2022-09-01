import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import html5logo from "../multimedia/images/html5-logo.png";
import css3logo from "../multimedia/images/css3-logo.png";
import mysqllogo from "../multimedia/images/mysql-logo.png";
import nodejslogo from "../multimedia/images/nodejs-logo.png";
import reactjslogo from "../multimedia/images/reactjs-logo.png";
import ue4logo from "../multimedia/images/ue4-logo.png";

export default function Skills() {
  return (
    <div id="skills">
      <Container sx={{ py: 4 }} maxWidth="md">
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Habilidades
        </Typography>

        <Grid container spacing={4}>

          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{ height: "100%", display: "flex", flexDirection: "column" }}
            >
              <CardMedia
                component="img"
                sx={{
                  // 16:9
                  pt: "16.25%",
                }}
                image={html5logo}
                alt="random"
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography style={{ textAlign: "center" }} gutterBottom variant="h5" component="h2">
                  HTML5
                </Typography>
                <Box
                  sx={{
                    "& > legend": { mt: 2 },
                  }}
                >
                </Box>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{ height: "100%", display: "flex", flexDirection: "column" }}
            >
              <CardMedia
                component="img"
                sx={{
                  // 16:9
                  pt: "16.25%",
                }}
                image={css3logo}
                alt="random"
              />

              <CardContent sx={{ flexGrow: 1 }}>
                <Typography style={{ textAlign: "center" }} gutterBottom variant="h5" component="h2">
                  CSS3
                </Typography>
                <Box
                  sx={{
                    "& > legend": { mt: 2 },
                  }}
                >
                </Box>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{ height: "100%", display: "flex", flexDirection: "column" }}
            >
              <CardMedia
                component="img"
                sx={{
                  // 16:9
                  pt: "16.25%",
                }}
                image={reactjslogo}
                alt="random"
              />

              <CardContent sx={{ flexGrow: 1 }}>
                <Typography style={{ textAlign: "center" }} gutterBottom variant="h5" component="h2">
                  ReactJS
                </Typography>
                <Box
                  sx={{
                    "& > legend": { mt: 2 },
                  }}
                >
                </Box>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{ height: "100%", display: "flex", flexDirection: "column" }}
            >
              <CardMedia
                component="img"
                sx={{
                  // 16:9
                  pt: "16.25%",
                }}
                image={nodejslogo}
                alt="random"
              />

              <CardContent sx={{ flexGrow: 1 }}>
                <Typography style={{ textAlign: "center" }} gutterBottom variant="h5" component="h2">
                  NodeJS
                </Typography>
                <Box
                  sx={{
                    "& > legend": { mt: 2 },
                  }}
                >
                </Box>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{ height: "100%", display: "flex", flexDirection: "column" }}
            >
              <CardMedia
                component="img"
                sx={{
                  // 16:9
                  pt: "16.25%",
                }}
                image={mysqllogo}
                alt="random"
              />

              <CardContent sx={{ flexGrow: 1 }}>
                <Typography style={{ textAlign: "center" }} gutterBottom variant="h5" component="h2">
                  MySQL
                </Typography>
                <Box
                  sx={{
                    "& > legend": { mt: 2 },
                  }}
                >
                </Box>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{ height: "100%", display: "flex", flexDirection: "column" }}
            >
              <CardMedia
                component="img"
                sx={{
                  // 16:9
                  pt: "16.25%",
                }}
                image={ue4logo}
                alt="random"
              />

              <CardContent sx={{ flexGrow: 1 }}>
                <Typography style={{ textAlign: "center" }} gutterBottom variant="h5" component="h2">
                  Unreal Engine 4 Blueprints
                </Typography>
                <Box
                  sx={{
                    "& > legend": { mt: 2 },
                  }}
                >
                </Box>
              </CardContent>
            </Card>
          </Grid>

        </Grid>
      </Container>
      <br />
    </div>
  );
}
