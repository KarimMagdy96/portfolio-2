import React from "react";
import devAnimation from "../../../public/animation/dev.json";

import "./hero.css";
import Lottie from "lottie-react";
import { motion } from "framer-motion";
export default function Hero() {
  return (
    <section id="about" className="hero flex">
      <div className="left-section ">
        <div className="parent-avatar flex">
          <motion.img
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(1.1)" }}
            transition={{ damping: 6, type: "spring", stiffness: 100 }}
            className="avatar flex"
            src="imgs/karim.webp"
            alt="karim"
            loading="lazy"
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
        <div className="icons flex  ">
          <a
            aria-label="WhatsApp"
            href=" https://wa.me/01097220712"
            target="_blank"
            className="icon icon-whatsapp"
          ></a>
          <a
            aria-label="Github"
            href="https://github.com/KarimMagdy96"
            target="_blank"
            className="icon icon-github"
          ></a>
          <a
            aria-label="Linkedin"
            href="https://www.linkedin.com/in/karimmagdy96"
            target="_blank"
            className="icon icon-linkedin"
          ></a>
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
