import logo from "./logo.svg";
import { useState, useEffect, createContext } from "react";
import "./App.css";
import NavBar from "./Components/NavBar";

export const Theme = createContext();

function App() {
  const [darkMode, setDarkMode] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );
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
          console.log(event);
        });
    };
  }, []);

  return (
    <Theme.Provider value={[darkMode, setDarkMode]}>
      <div className="App w-full">
        <NavBar />
        <p>ok</p>
      </div>
    </Theme.Provider>
  );
}

export default App;
