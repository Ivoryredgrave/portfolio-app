import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

const ResponsiveAppBar = (props) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="fixed">
      <Container maxWidth="xl">
        <Toolbar>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              onMouseLeave={handleCloseNavMenu}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <Button onClick={handleCloseNavMenu} href="#aboutme">
                {props.tituloSobreMi}
              </Button>
              <Button onClick={handleCloseNavMenu} href="#education">
                {props.tituloEducacion}
              </Button>
              <Button onClick={handleCloseNavMenu} href="#skills">
                {props.tituloHabilidades}
              </Button>
              <Button onClick={handleCloseNavMenu} href="#projects">
                {props.tituloProyectos}
              </Button>
              <Button onClick={handleCloseNavMenu} href="#contacts">
                {props.tituloContacto}
              </Button>
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            {props.tituloNombre}
          </Typography>
          <Box
            style={{
              justifyContent: "center",
            }}
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
          >
            <Button href="#aboutme">{props.tituloSobreMi}</Button>
            <Button href="#education">{props.tituloEducacion}</Button>
            <Button href="#skills">{props.tituloHabilidades}</Button>
            <Button href="#projects"> {props.tituloProyectos}</Button>
            <Button href="#contacts">{props.tituloContacto}</Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
