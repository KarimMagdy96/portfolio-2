import React, { useState } from "react";
import "./main.css";
import { AnimatePresence, motion } from "framer-motion";
let myProjects = [
  {
    projectTitle: "RecipeRover-Food",
    ProjectDes:
      "RecipeRover Food Website Provides seamless intertwines coding prowess with the magic of culinary exploration",
    category: "javascript",
    projectUrl: "https://reciperover.vercel.app/",
    projectGithub:
      "https://github.com/KarimMagdy96/RecipeRover-Food?tab=readme-ov-file",
    projectImg: "/public/project1.png",
  },
  {
    projectTitle: "Gmate-Gym",
    ProjectDes:
      "Gymate provides a space for people to improve their physical fitness and overall health through regular exercise.",
    category: "css",
    projectUrl: "https://gymate-gym.vercel.app/",
    projectGithub: "https://github.com/KarimMagdy96/Gmate-Gym",
    projectImg: "/public/project2.png",
  },
  {
    projectTitle: "MemoVerse",
    ProjectDes:
      "MemoVerse provides seamless idea capture with its user-friendly note app and real-time updates.",
    category: "javascript",
    projectUrl: "https://note-app-steel-theta.vercel.app/",
    projectGithub: "https://github.com/KarimMagdy96/MemoVerse",
    projectImg: "/public/project3.png",
  },
  {
    projectTitle: "Movie-Wave",
    ProjectDes:
      "MovieWave is a website integrated with the latest movie API, providing access to the newest films and TV shows.",
    category: "react",
    projectUrl: "https://movie-wave-opal.vercel.app/#/login",
    projectGithub: "https://github.com/KarimMagdy96/Movie-Wave",
    projectImg: "/public/project4.png",
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
    <main id="projects" className=" flex">
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
                    <a
                      href={item.projectUrl}
                      target="_blank"
                      className="icon-link"
                    ></a>
                    <a
                      href={item.projectGithub}
                      target="_blank"
                      className="icon-github"
                    ></a>
                  </div>
                  <a
                    className="card-link"
                    style={{ fontWeight: "bold" }}
                    target="_blank"
                    href={item.projectUrl}
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
