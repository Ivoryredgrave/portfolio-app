import React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { Link as ScrollLink } from "react-scroll";

const MenuLinks = ({ menuItems, onCloseNavMenu }) => {
  return menuItems.map((item, index) => (
    <Button key={index} onClick={onCloseNavMenu} href={`#${item.href}`}>
      {item.title}
    </Button>
  ));
};

const DesktopMenu = ({ menuItems }) => {
  return (
    <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, justifyContent: "center" }}>
      {menuItems.map((item, index) => (
        <ScrollLink
          key={index}
          to={item.href}
          smooth={true}
          duration={500}
          offset={-70}
        >
          <Button>{item.title}</Button>
        </ScrollLink>
      ))}
    </Box>
  );
};

const MobileMenu = ({ menuItems, anchorElNav, handleCloseNavMenu }) => {
  return (
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
      <MenuLinks menuItems={menuItems} onCloseNavMenu={handleCloseNavMenu} />
    </Menu>
  );
};

const ResponsiveAppBar = ({ title, menuItems }) => {
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
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <MobileMenu
              menuItems={menuItems}
              anchorElNav={anchorElNav}
              handleCloseNavMenu={handleCloseNavMenu}
            />
          </Box>

          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            {title}
          </Typography>

          <DesktopMenu menuItems={menuItems} />

        </Toolbar>
      </Container>
    </AppBar>
  );
};

ResponsiveAppBar.propTypes = {
  title: PropTypes.string.isRequired,
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    })
  ).isRequired,
};

MenuLinks.propTypes = {
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    })
  ).isRequired,
  onCloseNavMenu: PropTypes.func.isRequired,
};

DesktopMenu.propTypes = {
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    })
  ).isRequired,
};

MobileMenu.propTypes = {
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    })
  ).isRequired,
  anchorElNav: PropTypes.object,
  handleCloseNavMenu: PropTypes.func.isRequired,
};

export default ResponsiveAppBar;
