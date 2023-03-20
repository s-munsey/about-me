import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <h1>
            <Link to="/">
              <FontAwesomeIcon icon={["fas", "hashtag"]} /> Shaun Munsey
            </Link>
          </h1>
        </li>
        <li>
          <Link to="/#projects">Projects</Link>
        </li>
        <li>
          <Link to="/#contact">Contact</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
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
          <a
            href="https://drive.google.com/file/d/1WxdDyz7EMEwPR1qYsXwGqpFTc8momdSN/view?usp=share_link"
            target="_blank"
            rel="noreferrer"
            className="button"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
