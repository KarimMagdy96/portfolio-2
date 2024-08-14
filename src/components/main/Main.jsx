import React, { useState } from "react";
import "./main.css";
import { AnimatePresence, motion } from "framer-motion";
let myProjects = [
  {
    projectTitle: "RecipeRover-Food",
    ProjectDes:
      "RecipeRover Food Website Provides seamless intertwines coding prowess with the magic of culinary exploration",
    category: "javascript",
    projectUrl: "https://reciperover.vercel.app",
    projectGithub:
      "https://github.com/KarimMagdy96/RecipeRover-Food?tab=readme-ov-file",
    projectImg: "imgs/project1.webp",
  },
  {
    projectTitle: "Gmate-Gym",
    ProjectDes:
      "Gymate provides a space for people to improve their physical fitness and overall health through regular exercise.",
    category: "css",
    projectUrl: "https://gymate-gym.vercel.app",
    projectGithub: "https://github.com/KarimMagdy96/Gmate-Gym",
    projectImg: "imgs/project2.webp",
  },
  {
    projectTitle: "Smart-Home",
    ProjectDes:
      "Smart Home website, where innovation meets convenience. Explore a realm where technology integrates with everyday living.",
    category: "css",
    projectUrl: "https://karimmagdy96.github.io/Smart-Home/",
    projectGithub:
      "https://github.com/KarimMagdy96/Smart-Home?tab=readme-ov-file",
    projectImg: "imgs/project5.webp",
  },
  {
    projectTitle: "Omnifood",
    ProjectDes:
      "The smart 365-days-per-year food subscription that will make you eat healthy again. Tailored to your personal tastes.",
    category: "css",
    projectUrl: "https://karimmagdy96.github.io/Omnifood/",
    projectGithub: "https://github.com/KarimMagdy96/Omnifood",
    projectImg: "imgs/project6.webp",
  },
  {
    projectTitle: "MemoVerse",
    ProjectDes:
      "MemoVerse provides seamless idea capture with its user-friendly note app and real-time updates.",
    category: "javascript",
    projectUrl: "https://memoversee.vercel.app",
    projectGithub: "https://github.com/KarimMagdy96/MemoVerse",
    projectImg: "imgs/project3.webp",
  },
  {
    projectTitle: "CRUDS",
    ProjectDes:
      "CRUDS refers to the Five basic operations This website application able to perform – Create, Read, Update ,Search, and Delete.",
    category: "javascript",
    projectUrl: "https://cruds96.netlify.app",
    projectGithub: "https://github.com/KarimMagdy96/CRUDS",
    projectImg: "imgs/project8.webp",
  },
  {
    projectTitle: "Movie-Wave",
    ProjectDes:
      "MovieWave is a website integrated with the latest movie API, providing access to the newest films and TV shows.",
    category: "react",
    projectUrl: "https://moviewavee.vercel.app",
    projectGithub: "https://github.com/KarimMagdy96/Movie-Wave",
    projectImg: "imgs/project4.webp",
  },

  {
    projectTitle: "TODO-App",
    ProjectDes:
      "Step into a world of productivity with our Todo App website designed to empower you in managing your tasks.",
    category: "react",
    projectUrl: "https://spiffy-lokum-c6ca72.netlify.app/",
    projectGithub: "https://github.com/KarimMagdy96/TODO-App-with-React",
    projectImg: "imgs/project7.webp",
  },
  {
    projectTitle: "E-commerce site",
    ProjectDes:
      "user-friendly eCommerce site delivering seamless shopping experiences and responsive design.",
    category: "react",
    projectUrl: "https://ecommerce-react-ivory-two.vercel.app/",
    projectGithub: "https://github.com/KarimMagdy96/ecommerceReact",
    projectImg: "imgs/project9.webp",
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
          aria-label="All Projects"
          onClick={() => {
            setcurentActive("all");
            setProjects(myProjects);
          }}
          className={curentActive === "all" ? "active" : null}
        >
          All Projects
        </button>
        <button
          aria-label="HTML&CSS"
          onClick={() => {
            handleClick("css");
          }}
          className={curentActive === "css" ? "active" : null}
        >
          HTML&CSS
        </button>

        <button
          aria-label="Java Script"
          onClick={() => {
            handleClick("javascript");
          }}
          className={curentActive === "javascript" ? "active" : null}
        >
          Java Script
        </button>
        <button
          aria-label="React"
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
              <img
                width={266}
                src={item.projectImg}
                alt={item.projectTitle}
                loading="lazy"
              />
              <div style={{ width: "266px" }} className="box">
                <h1 className="title">{item.projectTitle}</h1>
                <p className="sub-title">{item.ProjectDes}</p>
                <div className="flex card-icons">
                  <div style={{ gap: "11px" }} className="flex">
                    <a
                      aria-label="project link"
                      href={item.projectUrl}
                      target="_blank"
                      className="icon-link"
                    ></a>
                    <a
                      aria-label="project github"
                      href={item.projectGithub}
                      target="_blank"
                      className="icon-github"
                    ></a>
                  </div>
                  <a
                    aria-label={item.projectTitle}
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
