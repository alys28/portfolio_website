import SocialMedias from "./SocialMedias";
import { useContext, useEffect, useLayoutEffect, useState } from "react";
import { Theme } from "../App";
import ReorderIcon from "@mui/icons-material/Reorder";
import { Link } from "react-scroll";

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
  const [darkMode] = useContext(Theme);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const width = useWindowWidth();
  const CompressedNavBar = () => {
    return (
      <div id="small-width" className="p-2">
        <div className="flex flex-col">
          <Link
            onClick={() => {
              setDrawerOpen(false);
            }}
            to="home"
            spy={true}
            smooth={true}
            offset={-450}
            duration={1000}
            className=" text-black  hover:bg-slate-100 px-5 py-5   hover:text-slate-900 hover:rounded-lg dark:text-white"
          >
            Home
          </Link>
          <Link
            onClick={() => {
              setTimeout(() => {
                setDrawerOpen(false);
              }, 2000);
            }}
            to="about"
            spy={true}
            smooth={true}
            offset={0}
            duration={1000}
            className=" text-black whitespace-nowrap hover:bg-slate-100 px-5 py-5   hover:text-slate-900 hover:rounded-lg dark:text-white"
          >
            About Me
          </Link>
          <Link
            onClick={() => {
              setTimeout(() => {
                setDrawerOpen(false);
              }, 2000);
            }}
            to="experience"
            spy={true}
            smooth={true}
            offset={0}
            duration={1000}
            className=" text-black  hover:bg-slate-100 px-5 py-5  hover:text-slate-900 hover:rounded-lg dark:text-white"
          >
            Experience
          </Link>
          <Link
            onClick={() => {
              setTimeout(() => {
                setDrawerOpen(false);
              }, 2000);
            }}
            to="projects"
            spy={true}
            smooth={true}
            offset={0}
            duration={1000}
            className=" text-black  hover:bg-slate-100 px-5 py-5 hover:text-slate-900 hover:rounded-lg dark:text-white"
          >
            Projects
          </Link>
          <Link
            onClick={() => {
              setTimeout(() => {
                setDrawerOpen(false);
              }, 3000);
            }}
            to="blog"
            spy={true}
            smooth={true}
            offset={0}
            duration={1000}
            className=" text-black  hover:bg-slate-100 px-5 py-5  hover:text-slate-900 hover:rounded-lg dark:text-white"
          >
            Blog
          </Link>
          <Link
            onClick={() => {
              setTimeout(() => {
                setDrawerOpen(false);
              }, 3000);
            }}
            to="contact"
            spy={true}
            smooth={true}
            offset={0}
            duration={1000}
            className=" text-black  hover:bg-slate-100 px-5 py-5  hover:text-slate-900 hover:rounded-lg dark:text-white"
          >
            Contact
          </Link>
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
            alt="Aly logo"
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
        alt="Aly Logo"
        className="h-20"
      />
      <div id="hidden" className="flex">
        <nav className="flex space-x-6 items-center">
          <Link
            onClick={() => {
              setDrawerOpen(false);
            }}
            to="home"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            className="hover:cursor-pointer container text-black  hover:bg-slate-100 px-3 py-2 text-center md:text-sm sm: text-xs hover:text-slate-900 hover:rounded-lg dark:text-white"
          >
            Home
          </Link>
          <Link
            onClick={() => {
              setDrawerOpen(false);
            }}
            to="about"
            spy={true}
            smooth={true}
            offset={0}
            duration={1000}
            className="container hover:cursor-pointer text-black whitespace-nowrap hover:bg-slate-100 px-3 py-2 text-center md:text-sm sm: text-xs hover:text-slate-900 hover:rounded-lg dark:text-white"
          >
            About Me
          </Link>
          <Link
            onClick={() => {
              setDrawerOpen(false);
            }}
            className="container hover:cursor-pointer text-black  hover:bg-slate-100 px-3 py-2 text-center md:text-sm sm: text-xs hover:text-slate-900 hover:rounded-lg dark:text-white"
            to="experience"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            Experience
          </Link>
          <Link
            onClick={() => {
              setDrawerOpen(false);
            }}
            className="container hover:cursor-pointer text-black  hover:bg-slate-100 px-3 py-2 text-center md:text-sm sm: text-xs hover:text-slate-900 hover:rounded-lg dark:text-white"
            to="projects"
            spy={true}
            smooth={true}
            offset={0}
            duration={1800}
          >
            Projects
          </Link>
          <Link
            to="blog"
            spy={true}
            smooth={true}
            offset={0}
            duration={1700}
            className="container hover:cursor-pointer text-black  hover:bg-slate-100 px-3 py-2 text-center md:text-sm sm: text-xs hover:text-slate-900 hover:rounded-lg dark:text-white"
          >
            Blog
          </Link>

          <Link
            onClick={() => {
              setDrawerOpen(false);
            }}
            to="contact"
            spy={true}
            smooth={true}
            offset={0}
            duration={1800}
            className="container hover:cursor-pointer text-black  hover:bg-slate-100 px-3 py-2 text-center md:text-sm sm: text-xs hover:text-slate-900 hover:rounded-lg dark:text-white"
          >
            Contact
          </Link>
        </nav>
        <SocialMedias />
      </div>
    </div>
  );
};

export default NavBar;
