import React from "react";

import Grid from "@mui/material/Grid";

import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Work from "./components/Work";
import About from "./components/About";
import Home from "./components/Home";
import Social from "./components/Social";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      <NavBar />
      <Grid container spacing={12}>
        <Grid item xs={1}>
          <Social />
        </Grid>
        <Grid item xs={10}>
          <div style={{ paddingLeft: 45, paddingRight: 45 }}>
            <Home />
            <About />
            <Education />
            <Experience />
            <Work />
            <Contact />
            <Footer />
          </div>
        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>
    </div>
  );
}

export default App;
