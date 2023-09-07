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
  const {
    tituloSobreMi,
    tituloHabilidades,
    tituloProyectos,
    tituloContacto,
    tituloNombre,
  } = props;

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
                {tituloSobreMi}
              </Button>

              <Button onClick={handleCloseNavMenu} href="#skills">
                {tituloHabilidades}
              </Button>

              <Button onClick={handleCloseNavMenu} href="#projects">
                {tituloProyectos}
              </Button>

              <Button onClick={handleCloseNavMenu} href="#contacts">
                {tituloContacto}
              </Button>
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            {tituloNombre}
          </Typography>
          <Box
            style={{
              justifyContent: "center",
            }}
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
          >
            <Button href="#aboutme">{tituloSobreMi}</Button>
            <Button href="#skills">{tituloHabilidades}</Button>
            <Button href="#projects"> {tituloProyectos}</Button>
            <Button href="#contacts">{tituloContacto}</Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
