import { useEffect, useState } from "react";
import "./header.css";
export default function Header() {
  const [showModel, setshowModul] = useState(false);
  const [them, setThem] = useState(
    localStorage.getItem("caretTheme") ?? "dark"
  );
  useEffect(() => {
    if (them === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
  }, [them]);
  return (
    <header className=" flex">
      <button
        onClick={() => {
          setshowModul(true);
        }}
        className="icon-th-menu"
      ></button>
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
      <button
        onClick={() => {
          localStorage.setItem(
            "caretTheme",
            them === "light" ? "dark" : "light"
          );
          setThem(localStorage.getItem("caretTheme"));
        }}
      >
        {localStorage.getItem("caretTheme") === "light" ? (
          <span className="icon-wb_sunny"></span>
        ) : (
          <span className="icon-moon"></span>
        )}
      </button>
      {showModel && (
        <div className=" fixed">
          <div className="">
            <ul className=" modal">
              <li>
                <button
                  className="icon-cancel"
                  onClick={() => {
                    setshowModul(false);
                  }}
                ></button>
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
