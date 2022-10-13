import { highlightStyle } from "../MyLibrary/MyStyles";

// image import
import CircleDjangoProfile from "./projects/circle.png";
import PersonalWebsiteProfile from "./projects/personalWebsite2022.png";
import ProjectOneProfile from "./projects/ProjectOne.png";

// Project description

const circleDjango = {
  title: "Circle",
  abbreviation: "circleDjango",
  picture: CircleDjangoProfile,
  year: 2022,
  location: "-",
  description: (
    <>
      <div>
        - A discord-like application that allows users to join community and
        discuss easier
      </div>
      <div style={{ height: 4 }} />
      <div>
        - Developed via <div style={highlightStyle}>Python Django</div> with
        <div style={highlightStyle}> PostgreSQL</div> database
      </div>
      <div style={{ height: 4 }} />
      <div>
        - Built{" "}
        <a
          className="underline-animation"
          href={"https://circle.up.railway.app/api/"}
          target="_blank"
          rel="noreferrer"
        >
          REST API service
        </a>{" "}
        through Django REST framework
      </div>
      <div>
        - Mobile <div style={highlightStyle}> responsiveness</div> design
      </div>
      <div>- Deployed on Railway</div>
    </>
  ),
  tools: ["Django", "Python", "PostgreSQL", "JavaScript", "Railway"],
  mainLink: "https://circle.up.railway.app/",
  isMainLinkExternal: true,
  githubLink: "https://github.com/yijing-wu/Circle",
};

const personalWebsiteV2 = {
  title: "Personal Website V2",
  abbreviation: "personalWebsiteV2",
  picture: PersonalWebsiteProfile,
  year: 2022,
  location: "-",
  description: (
    <div>
      Second version of my personal website, built with{" "}
      <div style={highlightStyle}>React</div> and hosted on{" "}
      <div style={highlightStyle}>GitHub Pages</div>. This website!
    </div>
  ),
  tools: ["React", "Typescript", "CSS"],
  mainLink: "/",
  isMainLinkExternal: true, // inorder to redirect
  githubLink: "https://github.com/yijing-wu/personal-website-v2",
};

const santoriniGame = {
  title: "Santorini",
  abbreviation: "santoriniGame",
  picture: null,
  year: 2022,
  location: "-",
  description: (
    <>
      <div>
        - A strategy-based board game playable with 2 or 3 players, developed in{" "}
        <div style={highlightStyle}>Java</div>.
      </div>
      <div style={{ height: 4 }} />
      <div>
        - Players need to choose their God Card, build towers on the battlefield
        and climb the 3rd level before their enemies even notice it.
      </div>
    </>
  ),
  tools: ["Java", "Maven"],
  mainLink: "",
  isMainLinkExternal: false,
  githubLink: "",
};

const projectOne = {
  title: "Lorem ipsum",
  abbreviation: "Lorem",
  picture: ProjectOneProfile,
  year: 2021,
  location: "xxx University",
  description: (
    <>
      <div>
        - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod <div style={highlightStyle}>{" Tempor "}</div>incididunt.
      </div>
      <div style={{ height: 4 }} />
      <div>
        - Cras fermentum odio eu feugiat pretium nibh. Quis risus sed odio
        <div style={highlightStyle}>{" Vulputate"}</div> odio pretium id velit.
      </div>
      <div style={{ height: 4 }} />
      <div>- Fusce id velit ut tortor pretium.</div>
    </>
  ),
  tools: ["React", "JavaScript", "Python", "PostgreSQL"],
  mainLink: "/projectone",
  isMainLinkExternal: false,
  githubLink: "",
};

const projectTwo = {
  title: "Lorem ipsum",
  abbreviation: "Lorem",
  picture: ProjectOneProfile,
  year: 2019,
  location: "-",
  description: (
    <>
      <div>
        - In arcu cursus euismod quis. Nunc sed blandit libero volutpat sed cras
        ornare arcu.
      </div>
      <div style={{ height: 4 }} />
      <div>
        - Eget est lorem ipsum dolor sit. Vel elit scelerisque mauris
        pellentesque pulvinar. Senectus et netus et malesuada.
      </div>
    </>
  ),
  tools: ["React", "JavaScript", "Node.js"],
  mainLink: "projecttwo",
  isMainLinkExternal: false,
  githubLink: "",
};

const projectThree = {
  title: "Lorem ipsum",
  abbreviation: "Lorem",
  picture: ProjectOneProfile,
  year: 2018,
  location: "-",
  description: (
    <>
      <div>
        - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt.
      </div>
      <div style={{ height: 4 }} />
      <div>
        - Cras fermentum odio eu feugiat pretium nibh. Quis risus sed odio
        <div style={highlightStyle}>{" Vulputate"}</div> odio pretium id velit.
      </div>
      <div style={{ height: 4 }} />
      <div>- In arcu cursus euismod quis. </div>
    </>
  ),
  tools: ["React", "JavaScript", "Node.js"],
  mainLink: "",
  isMainLinkExternal: false,
  githubLink: "",
};

const projectFour = {
  title: "Lorem ipsum",
  abbreviation: "Lorem",
  picture: ProjectOneProfile,
  year: 2020,
  location: "-",
  description: (
    <>
      <div>
        - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt.
      </div>
      <div style={{ height: 4 }} />
      <div>
        - Cras fermentum odio eu feugiat pretium nibh. Quis risus sed odio
        <div style={highlightStyle}>{" Vulputate"}</div> odio pretium id velit.
      </div>
      <div style={{ height: 4 }} />
      <div>- Nunc sed blandit libero volutpat sed cras ornare arcu.</div>
    </>
  ),
  tools: ["React", "JavaScript", "Node.js"],
  mainLink: "",
  isMainLinkExternal: false,
  githubLink: "",
};

const projectFive = {
  title: "Lorem ipsum",
  abbreviation: "Lorem",
  picture: ProjectOneProfile,
  year: 2017,
  location: "-",
  description: (
    <>
      <div>
        - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt.
      </div>
      <div style={{ height: 4 }} />
      <div>
        - Cras fermentum odio eu feugiat pretium nibh. Quis risus sed odio
        <div style={highlightStyle}>{" Vulputate"}</div> odio pretium id velit.
      </div>
      <div style={{ height: 4 }} />
      <div>- Fusce id velit ut tortor pretium.</div>
    </>
  ),
  tools: ["React", "JavaScript", "Node.js"],
  mainLink: "",
  isMainLinkExternal: false,
  githubLink: "",
};

const projectSix = {
  title: "Lorem ipsum",
  abbreviation: "Lorem",
  picture: ProjectOneProfile,
  year: 2020,
  location: "-",
  description: (
    <>
      <div>
        - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt.
      </div>
      <div style={{ height: 4 }} />
      <div>
        - Cras fermentum odio eu feugiat pretium nibh. Quis risus sed odio
        <div style={highlightStyle}>{" Vulputate"}</div> odio pretium id velit.
      </div>
      <div style={{ height: 4 }} />
      <div>- At tellus at urna condimentum mattis pellentesque id.</div>
    </>
  ),
  tools: ["React", "JavaScript", "Node.js"],
  mainLink: "",
  isMainLinkExternal: false,
  githubLink: "",
};

// export components
const FeaturedProjectsData = [personalWebsiteV2, circleDjango, projectOne];

const OtherProjectsData = [
  santoriniGame,
  projectTwo,
  projectThree,
  projectFour,
  projectFive,
  projectSix,
];

const ArchivedProjectsData = [
  circleDjango,
  personalWebsiteV2,
  santoriniGame,
  projectOne,
  projectTwo,
  projectThree,
  projectFour,
  projectFive,
  projectSix,
];

export { FeaturedProjectsData, OtherProjectsData, ArchivedProjectsData };
