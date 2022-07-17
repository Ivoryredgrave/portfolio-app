import * as React from "react";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import SchoolIcon from "@mui/icons-material/School";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import titulo_unphu from "../multimedia/images/titulo_unphu.jpg";

export default function Education() {
  return (
    <div id="education">
      <Container sx={{ py: 5 }} maxWidth="md">
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Educación
        </Typography>

        <List
          sx={{
            display: "block",
            margin: "auto",
            width: "100%",
            maxWidth: 460,
            bgcolor: "background.paper",
          }}
        >
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <SchoolIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="Politécnico Don Pepe Álvarez - La Vega"
              secondary="Bachiller | 2013 - 2016"
            />
          </ListItem>
        </List>

        <List
          sx={{
            display: "block",
            margin: "auto",
            width: "100%",
            maxWidth: 460,
            bgcolor: "background.paper",
          }}
        >
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <SchoolIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="UNPHU - (Recinto La Vega)"
              secondary={
                <Link
                  href={titulo_unphu}
                  target="_blank"
                  rel="noopener noreferrer"
                  underline="hover"
                >
                  Lic. en Informática | Sept. 2016 - Abr. 2022
                </Link>
              }
            />
          </ListItem>
        </List>
      </Container>
    </div>
  );
}
