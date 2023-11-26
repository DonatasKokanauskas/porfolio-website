import { useState, useEffect } from "react";
import "./style/css/App.css";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/home/Hero";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./components/layout/Footer";
import ScrollButton from "./components/layout/ScrollButton";

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
    e.preventDefault();

    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.querySelector(`.${id}`);

    let position =
      id !== "home" ? element.offsetTop - navHeight / 1.6 : element.offsetTop;

    window.scroll({
      left: 0,
      top: position,
      behavior: "smooth",
    });
  };
  return (
    <div className="app">
      <Navbar scroll={scroll} handleClick={handleClick} navHeight={navHeight} />
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
