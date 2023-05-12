import { useState, useEffect } from "react";
import "./style/css/App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollButton from "./components/ScrollButton";

function App() {
  const [scroll, setScroll] = useState(window.scrollY);
  const [navHeight, setNavHeight] = useState(0);

  useEffect(() => {
    if (document.querySelector("header")) {
      setNavHeight(
        document.querySelector("header").getBoundingClientRect().height
      );
    }

    const handleScroll = () => {
      setScroll(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (e) => {
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.querySelector(`.${id}`);

    let position =
      e.currentTarget !== "home"
        ? element.offsetTop - navHeight / 2
        : element.offsetTop;

    window.scrollTo({
      left: 0,
      top: position,
      behavior: "smooth",
    });
  };
  return (
    <div className="app">
      <Header scroll={scroll} handleClick={handleClick} navHeight={navHeight} />
      <Hero handleClick={handleClick} />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
      <ScrollButton scroll={scroll} handleClick={handleClick} />
    </div>
  );
}

export default App;
