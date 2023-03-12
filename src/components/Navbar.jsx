import React from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <h1>
            <a href="/">
              <FontAwesomeIcon icon={["fas", "hashtag"]} /> Shaun Munsey
            </a>
          </h1>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
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
          <a href="#todo" className="button">
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
