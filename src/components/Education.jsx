import * as React from "react";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import SchoolIcon from "@mui/icons-material/School";
import Container from "@mui/material/Container";

export default function Education(props) {
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
          {props.titulo}
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
              primary={props.nombreSecundaria}
              secondary={props.subtituloSecundaria}
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
              primary={props.nombreUniversidad}
              secondary={props.subtituloUniversidad}
            />
          </ListItem>
        </List>
      </Container>
    </div>
  );
}
