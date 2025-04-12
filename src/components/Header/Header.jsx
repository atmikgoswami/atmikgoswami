import { useState } from "react";
import Resume from "../../assets/AtmikGoswami_Resume.pdf";

export default function Header({ theme, toggleTheme }) {
  const [isActive, setActive] = useState(false);

  function closeMenu() {
    setActive(false);
  }

  function scrollToSection(id) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      closeMenu();
    }
  }

  return (
    <header className={`w-full backdrop-blur-sm p-4 lg:px-16 border-b flex flex-wrap justify-between items-center gap-4 sticky top-0 z-50 transition-colors duration-300`}>
      {/* Logo */}
      <button onClick={() => scrollToSection("home")} className="font-anonymous text-2xl">
        {"<Atmik Goswami/>"}
      </button>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-6">
        <button onClick={() => scrollToSection("home")} className="uppercase hover:scale-110 transition">
          Home
        </button>
        <button onClick={() => scrollToSection("about")} className="uppercase hover:scale-110 transition">
          About me
        </button>
        <button onClick={() => scrollToSection("projects")} className="uppercase hover:scale-110 transition">
          Projects
        </button>
        <button onClick={() => scrollToSection("contact")} className="uppercase hover:scale-110 transition">
          Contact
        </button>
        <a href={Resume} download className="bg-green-500 px-5 py-2 rounded-full text-white uppercase hover:scale-110 transition">
          Resume
        </a>
      </nav>

      {/* Theme Toggle */}
      <label className="w-14 h-7 bg-green-500 rounded-full flex items-center cursor-pointer relative ml-4">
        <input
          onChange={toggleTheme}
          type="checkbox"
          className="hidden peer"
        />
        <span className={`w-5 h-5 bg-white rounded-full absolute top-1 transition-all duration-300 ${theme === "light" ? "translate-x-7" : "translate-x-1"}`}></span>
      </label>

      {/* Mobile Menu Button */}
      <div
        className="w-8 h-6 ml-6 flex flex-col justify-between cursor-pointer md:hidden"
        onClick={() => setActive(!isActive)}
      >
        <span className={`block w-full h-1 bg-white transition-transform ${isActive ? "rotate-45 translate-y-2" : ""}`}></span>
        <span className={`block w-full h-1 bg-white ${isActive ? "opacity-0" : ""}`}></span>
        <span className={`block w-full h-1 bg-white transition-transform ${isActive ? "-rotate-45 -translate-y-2" : ""}`}></span>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`absolute top-16 left-0 w-full bg-gray-900 bg-opacity-95 backdrop-blur-md flex flex-col items-center py-6 space-y-4 md:hidden transition-transform duration-300 ${
          isActive ? "block" : "hidden"
        }`}
      >
        <button onClick={() => scrollToSection("home")} className="text-white uppercase">
          Home
        </button>
        <button onClick={() => scrollToSection("about")} className="text-white uppercase">
          About me
        </button>
        <button onClick={() => scrollToSection("projects")} className="text-white uppercase">
          Projects
        </button>
        <button onClick={() => scrollToSection("contact")} className="text-white uppercase">
          Contact
        </button>
        <a href="" download className="bg-green-500 px-5 py-2 rounded-full text-white uppercase">
          Resume
        </a>
      </div>
    </header>
  );
}
