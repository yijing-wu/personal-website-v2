import React, { useState } from "react";
import { Text, Title } from "../MyLibrary";
import {
  myMilkYellow70Alpha,
  myMintGreen,
  myNavy,
} from "../MyLibrary/MyColors";

function Experience() {
  const [selected, setSelected] = useState(1);
  const [mouseFocused, setMouseFocused] = useState(-1);

  const jobsData = [
    {
      company: "Upduo",
      abbreviation: "Upduo",
      title: "Software Engineer Co-op",
      time: "September 2022 - December 2022",
      location: "US",
      duties: [
        "Ac ut consequat semper viverra. Integer enim neque volutpat ac tincidunt vitae semper quis. ",
        "Lobortis scelerisque fermentum dui faucibus in ornare quam viverra. ",
        "Sed risus pretium quam vulputate dignissim suspendisse in est ante. ",
        "Convallis tellus id interdum velit. Pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus nisl. ",
      ],
    },
    {
      company: "Huawei Technologies",
      abbreviation: "Huawei",
      title: "Software Engineer Co-op",
      time: "September 2022 - December 2022",
      location: "US",
      duties: [
        "Arcu cursus vitae congue mauris rhoncus aenean vel elit. Morbi leo urna molestie at elementum eu facilisis sed. ",
        "Et leo duis ut diam quam. Lectus proin nibh nisl condimentum id venenatis a. ",
        "Imperdiet massa tincidunt nunc pulvinar sapien et ligula. Turpis in eu mi bibendum.",
      ],
    },
    {
      company: "Tongji University",
      abbreviation: "Tongji",
      title: "Software Engineer Co-op",
      time: "September 2022 - December 2022",
      location: "US",
      duties: [
        "Sed risus pretium quam vulputate dignissim suspendisse in est ante. ",
        "Convallis tellus id interdum velit. Pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus nisl. ",
        "Imperdiet massa tincidunt nunc pulvinar sapien et ligula. Turpis in eu mi bibendum.",
      ],
    },
  ];

  return (
    <div
      id="experience"
      style={{
        paddingTop: 100,
        paddingBottom: 100,
      }}
    >
      <div
        style={{
          width: 700,
          margin: "auto",
        }}
      >
        <Title
          index={2}
          content={"Where I've worked"}
          style={{ marginBottom: 40 }}
        />
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div>
            <div
              style={{
                position: "absolute",
                width: 2,
                height: 40,
                backgroundColor: myMintGreen,
              }}
            />
            <div style={{ marginRight: 20 }}>
              {jobsData.map((jobData, index) => {
                return (
                  <div key={"jobData" + index}>
                    <button
                      className="jobs-button"
                      style={{
                        minWidth: 120,
                        height: 40,
                        border: "none",
                        borderLeftWidth: 2,
                        borderLeftStyle: "solid",
                        borderLeftColor: myMilkYellow70Alpha,
                        paddingLeft: 20,
                        paddingRight: 20,
                        cursor: "pointer",
                        textAlign: "left",
                        fontFamily: "SFMono-Medium",
                        fontSize: 14,
                        color:
                          index === selected || index === mouseFocused
                            ? myMintGreen
                            : myMilkYellow70Alpha,
                        backgroundColor:
                          index === selected || index === mouseFocused
                            ? "#4a566b"
                            : myNavy,
                      }}
                      onClick={() => {
                        setSelected(index);
                      }}
                      onMouseEnter={() => {
                        setMouseFocused(index);
                      }}
                      onMouseLeave={() => {
                        setMouseFocused(-1);
                      }}
                    >
                      {jobData.abbreviation}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          <div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <Text
                style={{
                  fontFamily: "Calibre-Medium",
                  fontSize: 22,
                  marginRight: 5,
                }}
              >
                {jobsData[selected].title}
              </Text>
              <Text
                style={{
                  fontFamily: "Calibre-Medium",
                  fontSize: 22,
                  color: myMintGreen,
                }}
              >
                {`@ ${jobsData[selected].company}`}
              </Text>
            </div>
            <Text
              style={{
                fontFamily: "SFMono-Regular",
                color: myMilkYellow70Alpha,
              }}
            >
              {jobsData[selected].time}
              {", "}
              {jobsData[selected].location}
            </Text>
            {jobsData[selected].duties.map((duty, index) => {
              return (
                <div
                  key={"duty" + index}
                  className="duty"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginTop: index === 0 ? 15 : 10,
                  }}
                >
                  <Text style={{ color: myMilkYellow70Alpha, fontSize: 18 }}>
                    {duty}
                  </Text>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
