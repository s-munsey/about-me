import React from "react";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="section-cream">
      <section id="projects">
        <h2>Projects I'm proud of:</h2>
        <article>
          <div className="text">
            <h4>Current Project</h4>
            <h3>Bookshelf</h3>
            <p className="blackbox">
              I love to read, so I'm working on an application, using the open
              library api, that can track the books you have, your reading
              progress, and how many books you've read each year. You can follow
              its progress{" "}
              <a href="https://github.com/s-munsey/Backend">here</a>.
            </p>
            <h4>Technologies used include:</h4>
            <ul>
              <li>React</li>
              <li>Node</li>
              <li>TypeScript</li>
            </ul>
          </div>
          <img src={require("./../../assets/wip.png")} />
        </article>
        <article className="reverse">
          <div className="text">
            <h4>App I published</h4>
            <h3>Pomodoro App</h3>
            <p className="blackbox">
              I've always got some project on the go, this is the first one I
              actually published, it helped me focused during many a project,
              and if you're fortunate enough to own a pebble (they're sadly
              discontinued) can download the app{" "}
              <a href="https://apps.rebble.io/en_US/application/573a3ae54264000fe3000022?query=reubeniv&section=watchapps">
                here
              </a>
              .
            </p>
            <h4>Technologies used include:</h4>
            <ul>
              <li>Pebble SDK</li>
              <li>C</li>
            </ul>
          </div>
          <img src={require("./../../assets/pomo_previewsq.png")} />
        </article>
        <article>
          <div className="text">
            <h4>University Project</h4>
            <h3>AI Music Classifier</h3>
            <p className="blackbox">
              Another passion of mine is music, and using the million song
              dataset I built an artificial neural net that can compare, for
              example the loudness, bpm, etc, and (somewhat) accurately classify
              the genre
              <a href="https://github.com/s-munsey/ANN_MusicClassifier">here</a>
              .
            </p>
            <h4>Technologies used include:</h4>
            <ul>
              <li>Python</li>
            </ul>
          </div>
          <img src={require("./../../assets/annsq.jpg")} />
        </article>
      </section>
    </div>
  );
};

export default Projects;
