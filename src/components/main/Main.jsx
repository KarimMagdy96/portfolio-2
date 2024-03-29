import React from "react";
import "./main.css";
export default function Main() {
  return (
    <main className=" flex">
      <section className=" flex   left-section">
        <button className="active">All Projects</button>
        <button>HTML&CSS</button>
        <button>Java Script</button>
        <button>React</button>
      </section>
      <section className="  right-section">
        <article className="card border">
          <img src="" alt="" />
          <div className="box">
            <h1 className="title">landing page 2</h1>
            <p className="sub-title">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Necessitatibus minima laborum ullam.
            </p>
            <div className="flex">
              <div className="icon-link"></div>
              <div className="icon-github"></div>
              <a href="">
                more <span className="icon-arrow_forward"></span>
              </a>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
}
