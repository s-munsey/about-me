import React from "react";

const Projects = () => {
  return (
    <section id="projects">
      <h2>Projects I'm proud of:</h2>
      <h4>Current Project</h4>
      <h3>My Bookshelf</h3>
      <div className="project-description">
        I love to read, so I'm working on an application, using the open library
        api, that can track the books you have, your reading progress, and how
        many books you've read each year. You can follow its progress{" "}
        <a href="">here</a>.
      </div>
      <h4>Technologies used include:</h4>
      <ul>
        <li>React</li>
        <li>Node</li>
        <li>TypeScript</li>
      </ul>
      <div className="image"></div>
      <h4>University Project</h4>
      <h3>AI Music Classifier</h3>
      <div className="project-description">
        Another passion of mine is music, and using the million song dataset I
        built an artificial neural net that can compare, for example the
        loudness, bpm, etc, and (somewhat) accurately classify the genre
        <a href="">here</a>.
      </div>
      <h4>Technologies used include:</h4>
      <ul>
        <li>Python</li>
      </ul>
      <div className="image"></div>
      <h4>App I published</h4>
      <h3>Pomodoro App</h3>
      <div className="project-description">
        I've always got some project on the go, this is the first one I actually
        published, it helped me focused during many a project, and if you're
        fortunate enough to own a pebble (they're sadly discontinued) can
        download the app{" "}
        <a href="https://apps.rebble.io/en_US/application/573a3ae54264000fe3000022?query=reubeniv&section=watchapps">
          here
        </a>
        .
      </div>
      <h4>Technologies used include:</h4>
      <ul>
        <li>Pebble SDK</li>
        <li>C</li>
      </ul>
      <div className="image"></div>
    </section>
  );
};

export default Projects;
