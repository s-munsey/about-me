import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer>
      <ul>
        <li>Shaun Munsey • Software Engineer</li>
        <li>
          <a href="https://www.linkedin.com/in/smunsey">
            <FontAwesomeIcon icon={["fab", "linkedin"]} />
            <span className="sr-only">LinkedIn</span>
          </a>
        </li>
        <li>
          <a href="https://www.github.com/s-munsey">
            <FontAwesomeIcon icon={["fab", "github"]} />
            <span className="sr-only">Github</span>
          </a>
        </li>
        <li>
          <a href="mailto:s_munsey@live.com">
            <FontAwesomeIcon icon={["fas", "envelope"]} />
            <span className="sr-only">Email</span>
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
