import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Box, IconButton, styled } from "@mui/material";
import { AccountCircle, Menu } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Logo = () => (
  <Box component={Link} to="/" sx={{ height: "60%" }}>
    <Box
      component="img"
      src="src/assets/topcar.png"
      alt="logo"
      sx={{ height: "100%" }}
    />
  </Box>
);

export default function Header() {
  return (
    <AppBar
      position="static"
      flex={1}
      sx={{
        width: { xs: "100vw", lg: "80vw" },
        height: { xs: "7vh", sm: "8vh" },
        margin: "0 auto",
        padding: "0 5vw",
        justifyContent: "center",
        backgroundColor: "background",
        zIndex: 10,
      }}
    >
      <Toolbar
        sx={{
          display: { xs: "none", md: "flex" },
          justifyContent: "space-between",
        }}
      >
        <Logo />

        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{ width: { xs: "100%", sm: "inherit" } }}
        >
          <Box marginRight="3vw">
            <Button href="/">Home</Button>
            <Button href="/cars">Cars</Button>
            <Button href="/about">About</Button>
            <Button href="/contact">Contact</Button>
          </Box>

          <Box display="flex" justifyContent="space-between">
            <Button variant="outlined" sx={{ marginRight: "0.5vw" }}>
              Sign in
            </Button>
            <Button variant="contained">Sign up</Button>
          </Box>
        </Box>
      </Toolbar>

      {/* For mobiles */}
      <Toolbar
        sx={{
          display: { xs: "flex", md: "none" },
          justifyContent: "space-between",
        }}
      >
        <IconButton>
          <Menu color="secondary" />
        </IconButton>

        <Logo />

        <IconButton>
          <AccountCircle color="secondary" />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
