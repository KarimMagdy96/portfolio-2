import React from "react";
import "./footer.css";
export default function Footer() {
  return (
    <footer className="flex">
      <ul className="flex">
        <li>
          <a href="#about" aria-label="about me">
            About
          </a>
        </li>
        <li>
          <a href="#projects" aria-label="my projects">
            Projects
          </a>
        </li>
      </ul>
      <p>&copy;2024 Karim Magdy. All rights reserved.</p>
    </footer>
  );
}
