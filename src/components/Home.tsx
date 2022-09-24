import React from "react";

import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import Text from "../MyLibrary/Text";
import {
  myMilkYellow70Alpha,
  myMilkYellowA0Alpha,
  myMintGreen,
} from "../MyLibrary/MyColors";

function Home() {
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

  const briefIntro =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

  return (
    <div
      id="head"
      style={{
        paddingTop: 200,
        paddingBottom: 200,
      }}
    >
      <Text
        style={{
          fontFamily: "SFMono-Regular",
          marginBottom: 30,
          color: myMintGreen,
        }}
      >
        Hi, this is
      </Text>
      <Text style={{ fontFamily: "Calibre-Semibold", fontSize: 80 }}>
        Yijing Wu
      </Text>
      <Text
        style={{
          fontFamily: "Calibre-Semibold",
          fontSize: 80,
          color: myMilkYellowA0Alpha,
        }}
      >
        Lorem ipsum dolor sit amet
      </Text>
      <div style={{ width: "50%", marginBottom: 20 }}>
        <Text style={{ fontSize: 20, color: myMilkYellow70Alpha }}>
          {briefIntro}
        </Text>
      </div>
      <ThemeProvider theme={buttonTheme}>
        <Button
          variant="outlined"
          style={{
            fontFamily: "SFMono-Regular",
            fontSize: 14,
          }}
        >
          {"Resume"}
        </Button>
      </ThemeProvider>
    </div>
  );
}

export default Home;
