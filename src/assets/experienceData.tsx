import { highlightStyle } from "../MyLibrary/MyStyles";

const jobsData = [
  {
    company: "Lorem ipsum",
    abbreviation: "Lorem",
    title: "Software Engineer",
    time: "January 2022 - Present",
    location: "United States",
    link: "/",
    duties: [
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.{" "}
        <div style={highlightStyle}>{` Fusce `}</div> id velit ut tortor
        pretium.Cras fermentum odio eu feugiat pretium nibh.
      </div>,
      <div>
        Quis risus sed vulputate odio. Pretium fusce id velit ut tortor pretium
        viverra suspendisse potenti.{" "}
        <div style={highlightStyle}>{` Pharetra `}</div> magna ac placerat
        vestibulum.
      </div>,
      <div>
        Senectus et netus et malesuada. Nec ullamcorper sit amet risus nullam.
        Eget duis at tellus at. <div style={highlightStyle}>{` Faucibus `}</div>{" "}
        scelerisque <div style={highlightStyle}>{` Eleifend `}</div> donec
        pretium vulputate sapien.
      </div>,
    ],
  },
  {
    company: "Ipsum dolor",
    abbreviation: "Ipsum",
    title: "Full-stack Developer",
    time: "September 2021 - January 2022",
    location: "United States",
    link: "/",
    duties: [
      <div>
        Lectus mauris ultrices eros in cursus turpis massa tincidunt. Dignissim
        enim sit amet venenatis. Malesuada proin libero nunc consequat interdum
        varius sit amet.
      </div>,
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        <div style={highlightStyle}>{` Tempor `}</div> incididunt ut labore et
        dolore magna aliqua. Fusce id velit ut tortor pretium.
      </div>,
      <div>
        Sem fringilla ut morbi tincidunt augue interdum velit euismod in. Ac ut
        consequat semper viverra nam libero.
      </div>,
    ],
  },
  {
    company: "Lorem ipsum dolor",
    abbreviation: "Dolor",
    title: "Software Developer",
    time: "September 2020 - September 2021",
    location: "United States",
    link: "/",
    duties: [
      <div>
        In arcu cursus euismod quis. Nunc sed blandit libero volutpat sed cras
        ornare arcu.<div style={highlightStyle}>{` Eget `}</div> est lorem ipsum
        dolor sit. Vel elit scelerisque mauris pellentesque pulvinar.
      </div>,
      <div>
        Sed adipiscing diam donec adipiscing tristique risus. Mattis nunc sed
        blandit libero volutpat. Mi proin sed libero enim sed faucibus turpis in
        eu.
      </div>,
      <div>
        Ipsum suspendisse ultrices gravida dictum fusce ut. Gravida arcu ac
        tortor <div style={highlightStyle}>{` Dignissim `}</div> convallis
        aenean. Eu facilisis sed odio morbi quis commodo odio aenean sed.
      </div>,
    ],
  },
];

export { jobsData };
