import React from "react";
import devAnimation from "../../../public/animation/dev.json";

import "./hero.css";
import Lottie from "lottie-react";
import { motion } from "framer-motion";
export default function Hero() {
  return (
    <section className="hero flex">
      <div className="left-section ">
        <div className="parent-avatar flex">
          <motion.img
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(1.1)" }}
            transition={{ damping: 6, type: "spring", stiffness: 100 }}
            className="avatar"
            src="./karim.png"
            alt="karim"
          />
          <div className="icon-verified"></div>
        </div>
        <h1 className="title">Front-End React Developer</h1>
        <p className="subtitle">
          Versatile front-end developer with expertise in HTML5, CSS3, Sass,
          Bootstrap, jQuery, and JavaScript (ES6+), Proven track record in
          creating responsive web applications using React, Collaborative team
          player experienced in Git version control, Passionate about solving
          challenges and dedicated to delivering impactful user experiences.
        </p>
        <div className="icons flex">
          <div className="icon icon-twitter"></div>
          <div className="icon icon-instagram"></div>
          <div className="icon icon-github"></div>
          <div className="icon icon-linkedin"></div>
        </div>
      </div>
      <div className="right-section animation ">
        <div className="animation-hero ">
          <Lottie
            className="contact-Animation"
            style={{ width: 355 }}
            animationData={devAnimation}
          />
        </div>
      </div>
    </section>
  );
}
