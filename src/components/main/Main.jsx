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
      <section className="border flex  right-section">
        {["aa", "bb", "cc"].map((item) => (
          <article key={item} className="card ">
            <img width={266} src="./test.png" alt="" />
            <div style={{ width: "266px" }} className="box">
              <h1 className="title">Landing page 2</h1>
              <p className="sub-title">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Necessitatibus minima laborum ullam.
              </p>
              <div className="flex card-icons">
                <div style={{ gap: "11px" }} className="flex">
                  <div className="icon-link"></div>
                  <div className="icon-github"></div>
                </div>
                <a className="card-link" href="">
                  more <span className="icon-arrow_forward"></span>
                </a>
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
