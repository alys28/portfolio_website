import { useState, useEffect, createContext } from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import About from "./Components/About";
import Experience from "./Components/Experience";
import Blog from "./Components/Blog";
import Contact from "./Components/Contact";
import Aos from "aos";
import "aos/dist/aos.css";
import Projects from "./Components/Projects";

export const Theme = createContext();

function App() {
  const [darkMode, setDarkMode] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );
  useEffect(() => {
    Aos.init({ duration: 1000 }); //Initialize animation functionality to all components
  }, []);

  useEffect(() => {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (event) => {
        setDarkMode(event.matches);
      });
    return () => {
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .removeEventListener("change", (event) => {
          setDarkMode(event.matches);
        });
    };
  }, []);

  return (
    <Theme.Provider value={[darkMode, setDarkMode]}>
      <div className="App">
        <NavBar />
        <Home />
        <About />
        <Experience />
        <Projects />
        <Blog />
        <Contact />
        <footer className="font-ChivoMono text-center p-1 bg-[#121212]">
          <p className="text-gray-400 text-xs">
            Copyright © 2023. All Rights Reserved.
          </p>
        </footer>
      </div>
    </Theme.Provider>
  );
}

export default App;
