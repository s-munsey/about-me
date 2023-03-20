import React from "react";
import Intro from "./Intro";
import Contact from "./Contact";
import Projects from "./Projects";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Intro />
      <div className="gradient"></div>
      <Projects />
      <div className="gradient"></div>
      <Contact />
    </>
  );
};

export default Home;
