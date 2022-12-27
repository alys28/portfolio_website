import { useRef } from "react";
import "./Home.css";
const profilePic = require("../img/aly_pic.jpeg");

// style={{
//     backgroundImage: `url(${require("../img/blurry-gradient-haikei.png")})`,
//     backgroundRepeat: "no-repeat",
//     backgroundSize: "cover",
//   }}

const Home = () => {
  const anchorTag = useRef();
  const handleClick = (event) => {
    event.preventDefault();
    anchorTag.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <div className="font-Montserrat dark:bg-[#121212]" id="home">
      <div className="flex flex-wrap">
        <div className="flex flex-col font-Montserrat flex-1 items-center justify-between pt-[6%] grow basis-1/2">
          <div className="flex flex-col p-10">
            <h1 className="font-bold text-[50px] dark:text-white">
              Hi, I'm Aly! 👋
            </h1>

            <h2 className="text-[30px] dark:text-white">Software Developer</h2>
            <hr />
            <h3 className="dark:text-white mt-10">
              Lorem Ipsufgherohruighreuiogheruiogheriuofghder oier.
              guihfuaisfhaeo aerioupfghaewipf gaewuivg fidgfuilewbgreiu fdfuifg
              euifgdfuig es
            </h3>
          </div>
          <div className="flex justify-center p-10">
            <a
              className="bg-indigo-500 text-white p-3 rounded-lg hover:bg-indigo-500/70"
              onClick={handleClick}
              href="#about"
              ref={anchorTag}
            >
              Learn More
            </a>
          </div>
        </div>
        <div
          className="relative  p-20 justify-center dark:text-white -z-[1] dark:z-0 flex-[0.5] grow basis-1/2"
          style={{
            backgroundImage: `url(${require("../img/home_bg.png")})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="flex justify-center">
            <img
              src={profilePic}
              className="profile-pic"
              style={{
                display: "block",
                maxHeight: "400px",
                width: "auto",
                height: "auto",
                borderRadius: "50%",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
