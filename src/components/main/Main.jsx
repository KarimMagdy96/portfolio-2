import React, { useState } from "react";
import "./main.css";
import { AnimatePresence, motion } from "framer-motion";
let myProjects = [
  {
    projectTitle: "react Project",
    ProjectDes: "lorem120",
    category: "react",
    projectImg: "a",
  },
  {
    projectTitle: "Css Project",
    ProjectDes: "lorem120",
    category: "css",
    projectImg: "b",
  },
  {
    projectTitle: "javascript Project",
    ProjectDes: "lorem120",
    category: "javascript",
    projectImg: "c",
  },
];
export default function Main() {
  const [curentActive, setcurentActive] = useState("all");
  const [projects, setProjects] = useState(myProjects);
  let handleClick = (category) => {
    setcurentActive(category);
    setProjects(myProjects.filter((item) => item.category === category));
  };
  return (
    <main className=" flex">
      <section className=" flex    left-section">
        <button
          onClick={() => {
            setcurentActive("all");
            setProjects(myProjects);
          }}
          className={curentActive === "all" ? "active" : null}
        >
          All Projects
        </button>
        <button
          onClick={() => {
            handleClick("css");
          }}
          className={curentActive === "css" ? "active" : null}
        >
          HTML&CSS
        </button>

        <button
          onClick={() => {
            handleClick("javascript");
          }}
          className={curentActive === "javascript" ? "active" : null}
        >
          Java Script
        </button>
        <button
          onClick={() => {
            handleClick("react");
          }}
          className={curentActive === "react" ? "active" : null}
        >
          React
        </button>
      </section>
      <section className=" flex  right-section">
        <AnimatePresence>
          {projects.map((item) => (
            <motion.article
              layout
              transition={{ type: "spring", stiffness: 100, damping: 6 }}
              initial={{ transform: "scale(0)" }}
              animate={{ transform: "scale(1)" }}
              key={item.projectImg}
              className="card "
            >
              <img width={266} src={item.projectImg} alt={item.projectTitle} />
              <div style={{ width: "266px" }} className="box">
                <h1 className="title">{item.projectTitle}</h1>
                <p className="sub-title">{item.ProjectDes}</p>
                <div className="flex card-icons">
                  <div style={{ gap: "11px" }} className="flex">
                    <div className="icon-link"></div>
                    <div className="icon-github"></div>
                  </div>
                  <a
                    className="card-link"
                    style={{ fontWeight: "bold" }}
                    href=""
                  >
                    More <span className="icon-arrow_forward"></span>
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </section>
    </main>
  );
}
