import Hero from "./components/hero/Hero";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import Contact from "./components/contact/Contact";
function App() {
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
      <a href="#up">
        <button className="scroll2Top icon-keyboard_arrow_up"></button>
      </a>
    </div>
  );
}

export default App;
