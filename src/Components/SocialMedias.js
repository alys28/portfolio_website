import { useContext } from "react";
import { Theme } from "../App";
const githubLogo = require("../img/github.png");
const githubDarkLogo = require("../img/github_dark.png");
const linkedInLogo = require("../img/linkedIn.png");
const linkedInDarkLogo = require("../img/linkedIn_dark.png");

const SocialMedias = () => {
  const [darkMode] = useContext(Theme);
  return (
    <div className="flex">
      <a
        href="https://github.com/alys28"
        target="_blank"
        rel="noopener noreferrer"
        className="p-5"
      >
        <img
          src={darkMode ? githubDarkLogo : githubLogo}
          alt="linkedin Logo"
          className="social_img max-h-32 min-h-[16px] min-w-[16px]"
        />
      </a>
      <a
        href="https://www.linkedin.com/in/aly-shariff-6507951b3/"
        target="_blank"
        rel="noopener noreferrer"
        className="p-5"
      >
        <img
          alt="github logo"
          src={darkMode ? linkedInDarkLogo : linkedInLogo}
          className="social_img max-h-32 min-h-[16px] min-w-[16px]"
        />
      </a>
    </div>
  );
};

export default SocialMedias;
