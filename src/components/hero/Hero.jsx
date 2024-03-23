import React from "react";
import "./hero.css";
export default function Hero() {
  return (
    <section className="hero flex">
      <div className="left-section border">
        <div className="parent-avatar">
          <img className="avatar" src="./karim.png" alt="" />
          <span className="icon-verified"></span>
        </div>
      </div>
      <div className="right-section animation border">
        Lorem ipsum dolor sit amet.
      </div>
    </section>
  );
}
