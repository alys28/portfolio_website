import SocialMedias from "./SocialMedias";
import { useContext, useEffect, useLayoutEffect, useState } from "react";
import { Theme } from "../App";
import ReorderIcon from "@mui/icons-material/Reorder";

function useWindowWidth() {
  const [width, setWidth] = useState(0);
  useLayoutEffect(() => {
    function updateWidth() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", updateWidth);
    updateWidth();
    return () => window.removeEventListener("resize", updateWidth);
  }, []);
  return width;
}

const NavBar = () => {
  const [darkMode, setDarkMode] = useContext(Theme);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const width = useWindowWidth();
  const CompressedNavBar = () => {
    const handleClick = (event) => {
      setDrawerOpen(false);
      event.preventDefault();
      event.target.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    return (
      <div id="small-width" className="p-2">
        <div className="flex flex-col">
          <a
            className=" text-black  hover:bg-slate-100 px-5 py-5   hover:text-slate-900 hover:rounded-lg dark:text-white"
            onClick={handleClick}
            href="#home"
          >
            Home
          </a>
          <a
            className=" text-black whitespace-nowrap hover:bg-slate-100 px-5 py-5   hover:text-slate-900 hover:rounded-lg dark:text-white"
            onClick={handleClick}
            href="#about"
          >
            About Me
          </a>
          <a className=" text-black  hover:bg-slate-100 px-5 py-5  hover:text-slate-900 hover:rounded-lg dark:text-white">
            Experience
          </a>
          <a className=" text-black  hover:bg-slate-100 px-5 py-5 hover:text-slate-900 hover:rounded-lg dark:text-white">
            Projects
          </a>
          <a className=" text-black  hover:bg-slate-100 px-5 py-5  hover:text-slate-900 hover:rounded-lg dark:text-white">
            Blog
          </a>
          <a className=" text-black  hover:bg-slate-100 px-5 py-5  hover:text-slate-900 hover:rounded-lg dark:text-white">
            Contact
          </a>
        </div>
        <div className="flex justify-center">
          <SocialMedias />
        </div>
      </div>
    );
  };

  useEffect(() => {
    if (window.innerWidth > 980 && drawerOpen) {
      setDrawerOpen(false);
    }
  }, [width]);
  if (width <= 980) {
    return (
      <div className="font-ChivoMono dark:bg-darkTheme w-full bg-white">
        <div
          className="flex items-center "
          style={{ justifyContent: "space-between" }}
        >
          <img
            src={
              darkMode
                ? require("../img/aly_logo_dark.png")
                : require("../img/aly_logo.png")
            }
            className="h-20"
          />
          <div
            className="hover:bg-slate-100 hover:dark:bg-gray-600 hover:rounded-lg cursor-pointer m-4 p-3"
            onClick={() => {
              setDrawerOpen(!drawerOpen);
            }}
          >
            <ReorderIcon style={{ color: darkMode ? "white" : "black" }} />
          </div>
        </div>
        {drawerOpen && <CompressedNavBar />}
      </div>
    );
  }
  return (
    <div
      className="flex flex-wrap drop-shadow-md bg-white items-center  font-ChivoMono dark:bg-darkTheme "
      style={{ justifyContent: "space-between" }}
    >
      <img
        src={
          darkMode
            ? require("../img/aly_logo_dark.png")
            : require("../img/aly_logo.png")
        }
        className="h-20"
      />
      <div id="hidden" className="flex">
        <nav className="flex space-x-6 items-center">
          <a
            className="container text-black  hover:bg-slate-100 px-3 py-2 text-center md:text-sm sm: text-xs hover:text-slate-900 hover:rounded-lg dark:text-white"
            href="#home"
          >
            Home
          </a>
          <a
            className="container text-black whitespace-nowrap hover:bg-slate-100 px-3 py-2 text-center md:text-sm sm: text-xs hover:text-slate-900 hover:rounded-lg dark:text-white"
            href="#about"
          >
            About Me
          </a>
          <a className="container text-black  hover:bg-slate-100 px-3 py-2 text-center md:text-sm sm: text-xs hover:text-slate-900 hover:rounded-lg dark:text-white">
            Experience
          </a>
          <a className="container text-black  hover:bg-slate-100 px-3 py-2 text-center md:text-sm sm: text-xs hover:text-slate-900 hover:rounded-lg dark:text-white">
            Projects
          </a>
          <a className="container text-black  hover:bg-slate-100 px-3 py-2 text-center md:text-sm sm: text-xs hover:text-slate-900 hover:rounded-lg dark:text-white">
            Blog
          </a>
          <a className="container text-black  hover:bg-slate-100 px-3 py-2 text-center md:text-sm sm: text-xs hover:text-slate-900 hover:rounded-lg dark:text-white">
            Contact
          </a>
        </nav>
        <SocialMedias />
      </div>
    </div>
  );
};

export default NavBar;
