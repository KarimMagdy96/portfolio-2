import { useEffect, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { LuMenu } from "react-icons/lu";

import "./header.css";
export default function Header() {
  const [showModel, setshowModul] = useState(false);
  const [them, setThem] = useState(
    localStorage.getItem("caretTheme") ?? "dark"
  );
  useEffect(() => {
    if (them === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
  }, [them]);
  return (
    <header className=" flex">
      <button
        aria-label="nav menu"
        onClick={() => {
          setshowModul(true);
        }}
        className="icon-th-menu"
      >
        <LuMenu />
      </button>
      <div />
      <nav>
        <ul className="flex">
          <li>
            <a href="#about" aria-label="about">
              About
            </a>
          </li>
          <li>
            <a href="#projects" aria-label="projects">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" aria-label="contact">
              Contact Us
            </a>
          </li>
        </ul>
      </nav>
      <button
        aria-label="light and dark mode switcher"
        onClick={() => {
          localStorage.setItem(
            "caretTheme",
            them === "light" ? "dark" : "light"
          );
          setThem(localStorage.getItem("caretTheme"));
        }}
      >
        {localStorage.getItem("caretTheme") === "light" ? (
          <span className=" icon-sun-fill"></span>
        ) : (
          <span className="icon-moon"></span>
        )}
      </button>
      {showModel && (
        <div className=" fixed">
          <div className="">
            <ul className=" modal">
              <li>
                <button
                  aria-label="cancel button"
                  className="icon-cancel"
                  onClick={() => {
                    setshowModul(false);
                  }}
                >
                  <IoCloseSharp />
                </button>
              </li>
              <li>
                <a
                  onClick={() => {
                    setshowModul(false);
                  }}
                  href="#about"
                  aria-label="about"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    setshowModul(false);
                  }}
                  href="#projects"
                  aria-label="projects"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    setshowModul(false);
                  }}
                  href="#contact"
                  aria-label="contact"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}
