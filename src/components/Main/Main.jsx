import Header from "./../Header/Header";
import Intro from "./../Intro/Intro";
import About from "../About/About";
import Project from "../Project/Project";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import { useState, useEffect } from "react";

export default function Main() {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "dark");

  useEffect(() => {
    if (theme === "light") {
      document.body.classList.add("bg-white", "text-black");
      document.body.classList.remove("bg-[#1F1F1F]", "text-white");
    } else {
      document.body.classList.add("bg-[#1F1F1F]", "text-white");
      document.body.classList.remove("bg-white", "text-black");
    }
  }, [theme]);

  function toggleTheme() {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  }

  return (
    <div className={`w-full min-h-screen transition-colors duration-300 ${theme === "light" ? "bg-white text-black" : "bg-[#1F1F1F] text-white"}`}>
      <Header theme={theme} toggleTheme={toggleTheme} />
      
      {/* Add section IDs for scroll targets */}
      <section id="home">
        <Intro />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Project theme={theme} />
      </section>
      <section id="contact">
        <Contact theme={theme} />
      </section>
      
      <Footer />
    </div>
  );
}
