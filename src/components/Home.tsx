import React from "react";

import { Button, Text } from "../MyLibrary";
import {
  myTextGrey,
  myMilkYellowC0Alpha,
  myMintGreen,
} from "../MyLibrary/MyColors";
import { myGreeting, myName, myTitle, myBriefIntro } from "../assets/myData";

function Home() {
  return (
    <div
      id="head"
      style={{
        paddingTop: 150,
        paddingBottom: 150,
      }}
    >
      <Text
        style={{
          fontFamily: "SFMono-Regular",
          marginBottom: 30,
          color: myMintGreen,
        }}
      >
        {myGreeting}
      </Text>
      <Text style={{ fontFamily: "Calibre-Semibold", fontSize: 80 }}>
        {myName}
      </Text>
      <Text
        style={{
          fontFamily: "Calibre-Semibold",
          fontSize: 80,
          color: myMilkYellowC0Alpha,
        }}
      >
        {myTitle}
      </Text>
      <div style={{ width: "65%", marginBottom: 30 }}>
        <Text style={{ fontSize: 22, color: myTextGrey, lineHeight: 1.3 }}>
          {myBriefIntro}
        </Text>
      </div>
      <Button
        onClick={() => {
          // for external url
          // window.open(
          //   "{external url}",
          //   "_blank"
          // );
          // for internal pdf file
          window.open(process.env.PUBLIC_URL + "/Resume.pdf", "_blank");
        }}
      >
        <div style={{ padding: 5, fontSize: 15 }}>{"RESUME"}</div>
      </Button>
    </div>
  );
}

export default Home;
