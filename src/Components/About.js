import { useContext } from "react";
import { Theme } from "../App";
import "./about.css";

const SkillCard = ({ logo, name, efficiency }) => {
  const special_names = ["Python", "HTML", "CSS", "NumPy"];
  if (special_names.indexOf(name) < 0) {
    return (
      <div className="flex flex-col justify-center items-center p-8 hover:-translate-y-1 hover:scale-110 duration-200">
        <i className={logo} style={{ fontSize: "60px" }}></i>
        <p className="font-Montserrat font-light dark:text-gray-50">{name}</p>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col justify-center items-center p-8 hover:-translate-y-1 hover:scale-110 duration-200">
        <img src={logo} style={{ height: "60px" }} alt="programming language" />
        <p className="font-Montserrat font-light dark:text-gray-50">{name}</p>
      </div>
    );
  }
};

const ServiceCard = ({ logo, name }) => {
  return (
    <div className="font-Montserrat">
      <div className="flex pb-8 justify-center items-center">
        <img src={logo} style={{ height: "4rem" }} alt="service logo" />
      </div>
      <p className="text-center font-medium text-lg dark:text-white">{name}</p>
    </div>
  );
};

const skillsList = [
  {
    name: "JavaScript",
    logo: "devicon-javascript-plain colored",
    efficiency: "100",
  },
  {
    name: "Python",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    efficiency: "100",
  },
  {
    name: "React / React Native",
    logo: "devicon-react-original colored",
    efficiency: "100",
  },
  {
    name: "HTML",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    efficiency: "100",
  },
  {
    name: "CSS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    efficiency: "90",
  },
  {
    name: "Git",
    logo: "devicon-git-plain colored",
    efficiency: "85",
  },
  {
    name: "Tensorflow / Keras",
    logo: "devicon-tensorflow-original colored",
    efficiency: "80",
  },
  {
    name: "NumPy",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
    efficiency: "80",
  },
  {
    name: "Tailwindcss",
    logo: "devicon-tailwindcss-original-wordmark colored",
    efficiency: "75",
  },
  {
    name: "NodeJS",
    logo: "devicon-nodejs-plain-wordmark colored",
    efficiency: "75",
  },
  // {
  //   name: "Racket",
  //   logo: require("../img/racket_logo.png"),
  //   efficiency: "60",
  // },
  {
    name: "MongoDB",
    logo: "devicon-mongodb-plain-wordmark colored",
    efficiency: "60",
  },
];

const About = () => {
  const [darkMode] = useContext(Theme);

  return (
    <div className="flex flex-col items-center dark:bg-[#121212] bg-gray-50">
      <h1 className="font-bold text-[50px] dark:text-white pt-10" id="about">
        About Me
      </h1>
      <div className="flex w-full p-10 flex-wrap">
        <div className="flex-1 pr-5 min-w-[250px]">
          <h3 className="text-indigo-400 font-bold text-xl">
            STEM Student and Programmer
          </h3>
          <p className="text-gray-500 p-2 font-light dark:text-gray-300 text-lg ">
            I'm currently a <b>19-year-old University student</b> originally
            from Montreal attending the <b>University of Waterloo</b> in
            Computer Science with Co-op. I have been coding for almost 5 years
            and my work is mainly focused in{" "}
            <b>web development and machine learning</b>. I discovered my passion
            for software development during the COVID pandemic, when I realized
            the importance of technology and its impact on our lives. As a STEM
            student, I want to contribute to society's innovations of tomorrow.
          </p>
        </div>
        <div className="flex-1 pl-5">
          <h3 className="text-indigo-400 font-bold text-xl">
            Aspiring Tech Entrepreneur
          </h3>
          <p className="text-gray-500 p-2 font-light dark:text-gray-300 text-lg">
            I wish to launch a tech startup in the next few years. I love
            reading and talking about business, finance and innovation. Through
            my experience, I have learned that entrepreneurship is not just a
            career, but rather a mindset focused on finding opportunities and
            taking action to improve society. It's about{" "}
            <b>solving problems, being flexible and taking risks</b>. Up to now,
            I have participated in{" "}
            <b>several business ventures and projects </b> (more can be found
            below).
          </p>
        </div>
      </div>
      <div className="flex justify-around w-full flex-wrap">
        <ServiceCard
          logo={
            darkMode
              ? require("../img/other_icons/web_dev_white.png")
              : require("../img/other_icons/web_dev.png")
          }
          name="Full-stack Web Development"
        />
        <ServiceCard
          logo={
            darkMode
              ? require("../img/other_icons/app_dev_white.png")
              : require("../img/other_icons/app_dev.png")
          }
          name="App Development"
        />
        <ServiceCard
          logo={
            darkMode
              ? require("../img/other_icons/ml_white.png")
              : require("../img/other_icons/ml.png")
          }
          name="Data Analysis / Machine Learning"
        />
        <ServiceCard
          logo={
            darkMode
              ? require("../img/other_icons/digital_marketing_white.png")
              : require("../img/other_icons/digital_marketing.png")
          }
          name="Online Marketing"
        />
      </div>
      <div
        className="notable-stats-section flex-wrap flex justify-around w-full mt-10 p-7"
        style={{
          background:
            "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(79,70,229,1) 0%, rgba(0,161,255,1) 100%)",
        }}
      >
        <div data-aos="zoom-in" className="notable-stat">
          <h4>$55,000+</h4>
          <p>in sales</p>
        </div>
        <div data-aos="zoom-in" className="notable-stat">
          <h4>ISEF'23</h4>
          <p>Finalist</p>
        </div>

        <div data-aos="zoom-in" className="notable-stat">
          <h4>5</h4>
          <p>years of coding experience</p>
        </div>
      </div>
      <div
        data-aos="fade-up"
        className="m-20 mt-10 shadow-[0px_5px_11px_8px_rgba(0,0,0,0.1)] bg-white dark:bg-slate-800 dark:shadow-[0px_5px_11px_8px_rgba(255,255,255,0.05)] rounded-[20px] flex-wrap p-5"
      >
        <h2 className="text-[40px] text-[#35383d] dark:text-white font-bold text-center">
          Technical Skills
        </h2>
        <div className="flex flex-wrap justify-center">
          {skillsList.map((skill) => {
            return (
              <SkillCard
                key={skill.name}
                logo={skill.logo}
                name={skill.name}
                efficiency={skill.efficiency}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default About;
