// react
import * as React from "react";
// material ui
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import SchoolIcon from "@mui/icons-material/School";
import Container from "@mui/material/Container";

export default function Education() {
  return (
    <div id="education">
      <Container sx={{ py: 4 }} maxWidth="md">
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
              primary="Politécnico Don Pepe Álvarez"
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
              primary="Universidad Nacional Pedro Henríquez Ureña"
              secondary="Lic. en Informática | Sept. 2016 - Abr. 2022"
            />
          </ListItem>
        </List>
      </Container>
    </div>
  );
}
