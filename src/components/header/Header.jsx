import React, { useState } from "react";
import "./header.css";
export default function Header() {
  const [showModel, setshowModul] = useState(false);
  return (
    <header className="border flex">
      <button
        onClick={() => {
          setshowModul(true);
        }}
        className="menu"
      >
        Show model
      </button>
      <div />
      <nav>
        <ul className="flex">
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Articles</a>
          </li>
          <li>
            <a href="">Projects</a>
          </li>
          <li>
            <a href="">Speaking</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </nav>
      <button>light</button>
      {showModel && (
        <div className=" fixed">
          <div className="">
            <ul className=" modal">
              <li>
                <button
                  onClick={() => {
                    setshowModul(false);
                  }}
                >
                  Close
                </button>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Articles</a>
              </li>
              <li>
                <a href="">Projects</a>
              </li>
              <li>
                <a href="">Speaking</a>
              </li>
              <li>
                <a href="">User</a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}
