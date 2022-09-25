import React from "react";

import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { Text } from "../MyLibrary";
import {
  myMilkYellow70Alpha,
  myMilkYellowC0Alpha,
  myMintGreen,
} from "../MyLibrary/MyColors";

function Contact() {
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
    <div
      id="contact"
      style={{
        height: 500,
        textAlign: "center",
        marginLeft: 180,
        marginRight: 180,
      }}
    >
      <Text
        style={{
          fontFamily: "SFMono-Medium",
          fontSize: 16,
          color: myMintGreen,
          marginBottom: 10,
        }}
      >
        {`04. Contact`}
      </Text>

      <Text
        style={{
          fontFamily: "Calibre-Semibold",
          fontSize: 60,
          color: myMilkYellowC0Alpha,
          marginBottom: 10,
        }}
      >
        Get In Touch
      </Text>
      <Text
        style={{
          fontFamily: "Calibre-Regular",
          fontSize: 20,
          color: myMilkYellow70Alpha,
          marginBottom: 30,
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Dui vivamus arcu
        felis bibendum. Dui vivamus arcu felis bibendum.
      </Text>

      <ThemeProvider theme={buttonTheme}>
        <Button
          variant="outlined"
          style={{
            fontFamily: "SFMono-Regular",
            fontSize: 14,
          }}
          href={"mailto:yijingwu.w@gmail.com"}
        >
          {"Say Hi"}
        </Button>
      </ThemeProvider>
    </div>
  );
}

export default Contact;
