import { useRef } from "react";
import { Link } from "react-scroll";
import { TypeAnimation } from "react-type-animation";
import "./Home.css";
const profilePic = require("../img/aly_pic.jpeg");

// style={{
//     backgroundImage: `url(${require("../img/blurry-gradient-haikei.png")})`,
//     backgroundRepeat: "no-repeat",
//     backgroundSize: "cover",
//   }}

const Home = () => {
  const anchorTag = useRef();
  // const handleClick = (event) => {
  //   event.preventDefault();
  //   anchorTag.current.scrollIntoView({ behavior: "smooth" });
  // };
  return (
    <div className="font-Montserrat dark:bg-[#121212] " id="home">
      <div className="flex flex-wrap">
        <div className="flex flex-col font-Montserrat flex-1 items-center justify-around pt-[6%] grow basis-1/2 h-[90vh]">
          <div className="flex flex-col p-10">
            <h1
              data-aos="fade-left"
              className="font-bold text-[50px] dark:text-white"
            >
              Hi, I'm Aly! 👋
            </h1>
            <TypeAnimation
              sequence={[
                "Computer Science @ UWaterloo", // Types 'One'
                500, // Waits 500ms
                "Regeneron ISEF' 23 Finalist", // Deletes 'Software Developer' and types 'CEGEP Student'
                500,
                "Entrepreneur", // Types 'Entrepreneur'
                500,
                "Machine Learning Enthusiast",
                750,
              ]}
              wrapper="h2"
              cursor={true}
              repeat={Infinity}
              className="text-[30px] dark:text-white font-light"
            />

            <hr />
            <h3 className="dark:text-white mt-10 font-light text-lg">
              Welcome to my Website! Excited to have you here! You can learn
              more about what I do and checkout my latest projects.
            </h3>
          </div>
          <div className="flex justify-center p-10">
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={0}
              duration={700}
              data-aos="fade-right"
              data-aos-easing="ease-in-sine"
              className="bg-indigo-500 text-white p-3 rounded-lg hover:bg-indigo-500/70 "
              // onClick={handleClick}
              href="#about"
              ref={anchorTag}
            >
              Learn More
            </Link>
          </div>
        </div>
        <div
          className="relative flex justify-center items-center dark:text-white -z-[1] dark:z-0 flex-[0.5] grow basis-1/2"
          style={{
            backgroundImage: `url(${require("../img/home_bg.png")})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="profile-pic-container flex justify-center min-w-[450px] p-10">
            <img
              src={profilePic}
              className="profile-pic"
              alt="profile-pic"
              data-aos="zoom-in"
              style={{
                minHeight: "250px",
                maxHeight: "500px",
                width: "auto",
                height: "auto",
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
