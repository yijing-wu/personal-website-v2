import React from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Grid from "@mui/material/Grid";

import ErrorPage from "./error-page";

import "./App.css";
import NavBar from "./components/NavBar";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Work from "./components/Work";
import About from "./components/About";
import Home from "./components/Home";
import Social from "./components/Social";
import Archive from "./components/Archive";

import { ProjectOne, ProjectTwo } from "./projectPages";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: (
        <div style={{ paddingLeft: 45, paddingRight: 45 }}>
          <Home />
          <About />
          <Experience />
          <Work />
          <Contact />
        </div>
      ),
      errorElement: <ErrorPage />,
    },
    {
      path: "/archive",
      element: <Archive />,
    },
    // projects
    {
      path: "/projectone",
      element: <ProjectOne />,
    },
    {
      path: "/projecttwo",
      element: <ProjectTwo />,
    },
  ],
  { basename: process.env.PUBLIC_URL }
);

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <Grid container spacing={12}>
        <Grid item xs={1}>
          <Social />
        </Grid>
        <Grid item xs={10}>
          <RouterProvider router={router} />
          <Footer />
        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>
    </div>
  );
}
