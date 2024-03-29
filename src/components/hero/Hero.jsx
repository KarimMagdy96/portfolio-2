import React from "react";
import "./hero.css";
export default function Hero() {
  return (
    <section className="hero flex">
      <div className="left-section border">
        <div className="parent-avatar flex">
          <img className="avatar" src="./karim.png" alt="" />
          <div className="icon-verified"></div>
        </div>
        <h1 className="title">Front-End React Developer</h1>
        <p>
          Versatile front-end developer with expertise in HTML5, CSS3, Sass,
          Bootstrap, jQuery, and JavaScript (ES6+), Proven track record in
          creating responsive web applications using React, Collaborative team
          player experienced in Git version control, Passionate about solving
          challenges and dedicated to delivering impactful user experiences.
        </p>
      </div>
      <div className="right-section animation border">
        Lorem ipsum dolor sit amet.
      </div>
    </section>
  );
}
