import React from "react";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Slide from "@mui/material/Slide";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { myMintGreen, myNavy } from "../MyLibrary/MyColors";
import Logo from "../assets/Logo/Logo-pure.png";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children: React.ReactElement;
}

function HideOnScroll(props: Props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function NavBar() {
  const navItems = [
    { name: "About", url: "#about" },
    { name: "Education", url: "#education" },
    { name: "Experience", url: "#experience" },
    { name: "Work", url: "#work" },
    { name: "Contact", url: "#contact" },
  ];

  const buttonTheme = createTheme({
    palette: {
      primary: {
        main: "#c2ded1",
      },
      secondary: {
        main: "#000000",
      },
    },
  });

  return (
    <HideOnScroll>
      <AppBar style={{ backgroundColor: myNavy }}>
        <Toolbar>
          <Typography
            variant="h6"
            component="a"
            href="/"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block", md: "flex" },
            }}
          >
            <img src={Logo} style={{ width: 50 }} alt="Logo" />
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item, index) => (
              <a
                href={item.url}
                key={index}
                style={{
                  fontFamily: "SFMono-Regular",
                  padding: 10,
                  fontSize: 13,
                  textDecoration: "none",
                }}
                className="navbar-item"
              >
                <span style={{ color: myMintGreen }}>{`0${index + 1}.`}</span>
                {`${item.name}`}
              </a>
            ))}
            <ThemeProvider theme={buttonTheme}>
              <Button
                variant="outlined"
                style={{
                  fontFamily: "SFMono-Regular",
                  fontSize: 13,
                  margin: 10,
                }}
              >
                {"Resume"}
              </Button>
            </ThemeProvider>
          </Box>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
}
