import Hero from "./components/hero/Hero";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import Contact from "./components/contact/Contact";
import { useEffect } from "react";
import { useState } from "react";
function App() {
  const [showScrollBtn, setshowScrollBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setshowScrollBtn(true);
      } else {
        setshowScrollBtn(false);
      }
    });
  }, []);
  return (
    <div id="up" className="container">
      <Header />
      <div className="divider" />
      <Hero />
      <div className="divider" />
      <Main />
      <div className="divider" />
      <Contact />
      <div className="divider" />
      <Footer />
      <a
        href="#up"
        className="showScroll"
        style={{
          opacity: showScrollBtn ? 1 : 0,
        }}
      >
        <button
          id="upBtn"
          className="scroll2Top icon-keyboard_arrow_up"
        ></button>
      </a>
    </div>
  );
}

export default App;
