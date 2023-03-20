import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="section-cream">
      <section id="about">
        <h2>About Shaun Munsey</h2>
        <article>
          <div className="text">
            <h3>Just the highlights</h3>
            <div className="blackbox">
              <p>
                A full stack web developer and systems engineer with solid agile
                experience, I Studied Software Engineering at Aberystwyth
                University; specialising in machine learning, Java, and computer
                graphics. I've worked commercially with Java, .Net, Nodejs,
                Azure, AWS, and a number of frontend web frameworks, including
                Knockout, Angular and React.
              </p>
              <p>
                Outside coding I enjoy playing chess, videogames, and spending
                time with my family.
              </p>
              <p>
                In a past life I played bass in a band and served for two years
                as an army reservist.
              </p>
            </div>
            <h4>My favourite technologies include:</h4>
            <ul>
              <li>C#</li>
              <li>JavaScript</li>
              <li>Python</li>
            </ul>
          </div>
          <img src={require("./../../assets/me.jpg")} />
        </article>
      </section>
    </div>
  );
};

export default About;
