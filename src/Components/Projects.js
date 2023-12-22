import "./Projects.css";
import { projectCodingList } from "./projectList";
import { useRef, useState } from "react";

const highlightsList = [
  {
    name: "Hack The North Finalist",
    image: require("../img/htn_logo.jpeg"),
    otherImages: [require("../img/DriveSense-logos.jpeg")],
    github: "https://github.com/xinlei55555/htn2023",
    url: null,
    video: "https://devpost.com/software/drive-sense",
    desc: "My team and I won the biggest hackathon in Canada! We built Built DriveSense, an advanced app that aims to enhance road safety by evaluating and addressing poor driving using computer vision and machine learning algorithms. The project features a React Native mobile frontend and GPS connectivity. The backend, built with Django utilizes YOLOv5 and YOLOv8 models for computer vision, analyzing camera feed images to assess driver habits, infer acceleration, and determine reaction time at red lights.",
  },
  {
    name: "Regeneron International Science and Engineering Fair Finalist",
    image: require("../img/isef_logo.png"),
    otherImages: [require("../img/projects/ASL_translator/asl_logo.png")],
    github: "https://github.com/alys28/ASL-words-translator",
    url: "https://projectboard.world/isef/project/robo053t-artificial-sign-language",
    video: null,
    desc: "My partner Xin Lei Lin and I built Artificial Sign Langague, a machine learning software that aims to translate American Sign Language into English words. Our project was invited to compete in Dallas, at the world's largest science fair for high school students.",
  },
];
const ProjectCodeMedia = ({ project, onClick }) => {
  return (
    <div
      onClick={() => {
        onClick(project);
      }}
      data-aos="zoom-in-down"
      className=" project-media flex m-auto flex-col flex-1 w-[30vw] max-w-[500px]  shadow-[0px_5px_11px_8px_rgba(0,0,0,0.3)] rounded-[5px] justify-center items-center"
    >
      <div
        style={{
          backgroundImage: `url(${project.image})`,
          height: "200px",
          width: "100%",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center top",
          borderTopLeftRadius: "5px",
          borderTopRightRadius: "5px",
        }}
      ></div>

      <div className="bg-[#7b96b0] w-[100%] text-white rounded-b-[5px] font-ChivoMono font-bold p-3">
        <p>{project.name}</p>
      </div>
    </div>
  );
};

const ProjectPopupMedia = ({ project }) => {
  console.log(project);
  if (project) {
    return (
      <div className="font-Montserrat pl-10 pb-5">
        <div className="flex p-5 justify-around flex-wrap">
          <img
            src={project.image}
            alt="main app"
            id="main-image"
            className=" shadow-[0px_5px_11px_8px_rgba(0,0,0,0.08)] rounded-md"
          />

          <div className="pl-10 p-5 dark:text-slate-300 w-[500px] flex flex-col justify-around">
            <div className="">
              <div className="font-bold text-[30px]">{project.name}</div>
              <div className="font-light pt-10 pr-10">{project.desc}</div>
            </div>
            <div className="mt-10 selection:flex justify-left font-ChivoMono xs:text-[12px]">
              {project.url && (
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={project.url}
                  className="border-2 p-3 m-2 rounded-md shadow-lg hover:-translate-y-1 border-indigo-400 text-indigo-400 hover:scale-105 duration-15 "
                >
                  View Site Live
                </a>
              )}
              {project.github && (
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={project.github}
                  className="border-2 p-3 m-2 rounded-md shadow-lg hover:-translate-y-1 hover:scale-105 duration-15 border-[#ff9900] text-[#ff9900]"
                >
                  View Code
                </a>
              )}
              {project.video && (
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={project.video}
                  className="border-2 m-2 p-3 rounded-md shadow-lg hover:-translate-y-1 hover:scale-105 duration-15 dark:border-slate-300 dark:text-slate-300 border-black text-black"
                >
                  View Video
                </a>
              )}
            </div>
          </div>
        </div>
        <div className="image-gallery">
          {project.otherImages &&
            project.otherImages.map((image) => {
              return (
                <img
                  alt="img-app"
                  src={image}
                  style={{ height: "30vh", display: "inline" }}
                  className="m-3 border-2 border-[#bab7b6] dark:border-none rounded-lg shadow-[0px_5px_11px_8px_rgba(0,0,0,0.05)]"
                />
              );
            })}
        </div>
      </div>
    );
  }
};

const Projects = () => {
  const popupControl = useRef(null);
  const [projectOpened, setProjectOpened] = useState(null);
  const handleCloseClick = () => {
    document.body.style.overflowY = "auto";
    popupControl.current.style.display = "none";
  };
  const handleOpenClick = (project) => {
    popupControl.current.style.display = "block";
    document.body.style.overflowY = "hidden";
    setProjectOpened(project);
  };
  return (
    <div className="projects">
      <h1 className="text-center font-bold text-[50px] text-white pt-10">
        Projects and Awards
      </h1>
      <div>
        <div className="m-10 p-4 pb-10 pt-4 bg-[#d3d2d6] shadow-lg rounded-xl">
          <h2 className="p-5 font-ChivoMono font-bold text-[30px] text-center  mt-5">
            Highlights
          </h2>
          <div className="md:flex flex-wrap justify-center align-middle">
            {highlightsList.map((project) => {
              return (
                <div className="md:m-3">
                  <ProjectCodeMedia
                    project={project}
                    onClick={handleOpenClick}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <h2 className="p-5 font-ChivoMono text-white text-[30px] sm:text-center  mt-5">
          Coding Projects{" "}
          <img
            src={require("../img/other_icons/coding.png")}
            alt="coding-icon"
            style={{
              display: "inline-block",
              border: "solid 1px",
              padding: "2px",
              borderRadius: "10%",
            }}
          />
        </h2>
        <div className="projects-section justify-between">
          {projectCodingList.map((project) => {
            return (
              <ProjectCodeMedia project={project} onClick={handleOpenClick} />
            );
          })}
        </div>
        <h2 className="p-5 font-ChivoMono text-white text-[30px] sm:text-center mt-10">
          Other Projects{" "}
        </h2>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.youtube.com/watch?v=Pl3vavCDoF8&ab_channel=TED-EdStudentTalks"
          className="flex m-auto flex-col flex-1 w-[30vw] min-w-[200px] max-w-[500px]  shadow-[0px_5px_11px_8px_rgba(0,0,0,0.3)] rounded-[5px] justify-center items-center hover:scale-105 duration-150 hover:-translate-y-1"
        >
          <img
            src={require("../img/aly_ted_talk.png")}
            alt="student Ted Talk"
            className="flex-1 rounded-t-lg w-[100%] shadow-[0px_5px_11px_8px_rgba(0,0,0,0.1)] "
          />
          <figcaption className="caption-talk bg-white w-[100%] dark:text-white md:text-[16px] dark:bg-[#121212] flex-1 p-3 font-Montserrat font-light rounded-b-md">
            TED-ED Talk about Entrepreneurship and Education
          </figcaption>
        </a>
      </div>

      <div id="overlay" ref={popupControl}>
        <div className="bg-white  max-h-[80vh] max-w-[80vw] absolute top-0 bottom-0 left-0 right-0 m-auto dark:bg-darkTheme rounded-md overflow-y-auto overflow-x-hidden">
          <button
            onClick={handleCloseClick}
            className="text-[#e85046] m-5 pt-1 pb-1 pr-2 pl-2 text-[20px] border-2 border-[#e85046] shadow-md rounded-lg hover:shadow-[0px_5px_11px_8px_rgba(240,0,0,0.1)] dark:hover:shadow-[0px_5px_11px_8px_rgba(240,0,0,0.3)]"
          >
            x
          </button>
          <div>
            <ProjectPopupMedia project={projectOpened} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
