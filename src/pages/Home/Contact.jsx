import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="section-dkblue">
      <section id="contact">
        <p className="contact-eyebrow">Have a project in mind?</p>
        <h2>Let’s make something useful.</h2>
        <p>I'm always interested in hearing about new opportunities.</p>
        <p>
          <a className="button" href="mailto:s_munsey@live.com">
            Say hello <span aria-hidden="true">↗</span>
          </a>
        </p>
      </section>
    </div>
  );
};

export default Contact;
