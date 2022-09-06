import * as React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Box from "@mui/material/Box";

import html5logo from "../multimedia/images/html5-logo.png";
import css3logo from "../multimedia/images/css3-logo.png";
import mysqllogo from "../multimedia/images/mysql-logo.png";
import nodejslogo from "../multimedia/images/nodejs-logo.png";
import reactlogo from "../multimedia/images/react-logo.png";
import ue4logo from "../multimedia/images/ue4-logo.png";
import javascriptlogo from "../multimedia/images/javascript-logo.png";
import githublogo from "../multimedia/images/github-logo.png";
import antdlogo from "../multimedia/images/ant-design-logo.png";

export default function Skills() {
  return (
    <div id="skills">
      <Container >

        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom > Habilidades </Typography>

        <Box display="flex" justifyContent="center">
          <Stack direction="row" spacing={1}>
            <Avatar sx={{ width: 74, height: 74 }} alt="Remy Sharp" src={html5logo} />
            <Avatar sx={{ width: 74, height: 74 }} alt="Travis Howard" src={css3logo} />
            <Avatar sx={{ width: 74, height: 74 }} alt="Cindy Baker" src={javascriptlogo} />
          </Stack>
        </Box>

        <Box display="flex" justifyContent="center">
          <Stack direction="row" spacing={1}>
            <Avatar sx={{ width: 74, height: 74 }} alt="Remy Sharp" src={reactlogo} />
            <Avatar sx={{ width: 74, height: 74 }} alt="Travis Howard" src={antdlogo} />
            <Avatar sx={{ width: 74, height: 74 }} alt="Travis Howard" src={githublogo} />
          </Stack>
        </Box>

        <Box display="flex" justifyContent="center">
          <Stack direction="row" spacing={1}>
            <Avatar sx={{ width: 74, height: 74 }} alt="Remy Sharp" src={nodejslogo} />
            <Avatar sx={{ width: 74, height: 74 }} alt="Travis Howard" src={mysqllogo} />
            <Avatar sx={{ width: 74, height: 74 }} alt="Travis Howard" src={ue4logo} />
          </Stack>
        </Box>

      </Container>
    </div>
  );
}
