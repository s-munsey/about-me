import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import "./Intro.css";

const Intro = () => {
  return (
    <section id="intro" aria-labelledby="intro-title">
      <div className="intro-copy">
        <p className="intro-eyebrow">
          <span className="status-dot" aria-hidden="true"></span>
          Software engineer · United Kingdom
        </p>
        <h1 id="intro-title">
          Hello, I’m <span>Shaun Munsey.</span>
        </h1>
        <h2>I build thoughtful digital experiences.</h2>
        <p className="intro-description">
          Full-stack engineer working across C#, Python, Node.js and React.
          Currently building useful things at AXA.
        </p>
        <div className="intro-actions">
          <Link className="button" to="/#projects">
            Explore my work <span aria-hidden="true">↗</span>
          </Link>
          <Link className="intro-text-link" to="/#contact">
            Get in touch <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
      <div className="intro-portrait">
        <img src={require("./../../assets/me.jpg")} alt="Shaun Munsey" />
        <p>Curious by nature. Engineer by trade.</p>
      </div>
    </section>
  );
};

export default Intro;
