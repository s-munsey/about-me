import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <>
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
      <section id="contact">
        <h3>Contact Me</h3>
        <p>I'm always interested in hearing about new oportunities.</p>
        <p>
          <a href="mailto:s_munsey@live.com">Email Me</a>
        </p>
      </section>
    </>
  );
};

export default Home;
