import React, { useLayoutEffect } from "react";

import { BackButton, Text } from "../MyLibrary";
import { myTextGrey, myMilkYellow } from "../MyLibrary/MyColors";

export default function ProjectTwo() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="project-page">
      <BackButton />
      <h1 style={{ color: myMilkYellow, marginTop: 30, marginBottom: 30 }}>
        Project Two
      </h1>
      <Text style={{ fontSize: 20, color: myTextGrey }}>
        <p>
          In arcu cursus euismod quis. Nunc sed blandit libero volutpat sed cras
          ornare arcu. Eget est lorem ipsum dolor sit. Vel elit scelerisque
          mauris pellentesque pulvinar. Sed adipiscing diam donec adipiscing
          tristique risus. Mattis nunc sed blandit libero volutpat. Mi proin sed
          libero enim sed faucibus turpis in eu. Vitae ultricies leo integer
          malesuada nunc. Ipsum suspendisse ultrices gravida dictum fusce ut.
          Gravida arcu ac tortor dignissim convallis aenean. Eu facilisis sed
          odio morbi quis commodo odio aenean sed.
        </p>
        <p>
          Senectus et netus et malesuada. Nec ullamcorper sit amet risus nullam.
          Eget duis at tellus at. Faucibus scelerisque eleifend donec pretium
          vulputate sapien. Sed vulputate odio ut enim blandit volutpat maecenas
          volutpat. Massa tincidunt dui ut ornare. Eu augue ut lectus arcu. Sem
          fringilla ut morbi tincidunt augue interdum velit euismod in. Ac ut
          consequat semper viverra nam libero.
        </p>
      </Text>
    </div>
  );
}
