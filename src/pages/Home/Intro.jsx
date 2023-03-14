import React from "react";
import "./Intro.css";

const Intro = () => {
  return (
    <section id="intro">
      <p className="name">
        Hello, my name is <span>Shaun Munsey.</span>
      </p>
      <h2>I build the full stack</h2>
      <p>I'm a developer specialising in C#, Nodejs and Javascript.</p>
      <p>
        Currently, I'm building exciting things at{" "}
        <a href="/" target="_blank">
          Alpha Group
        </a>
        .
      </p>
    </section>
  );
};

export default Intro;
