import "./experience.css";

const WorkItem = ({ name, company, date, description, image }) => {
  return (
    <div
      data-aos="zoom-up"
      data-aos-easing="ease-out"
      className="flex flex-col flex-1 items-center p-5 m-5 dark:text-white  min-w-[300px]"
    >
      <div>
        <div className="flex justify-between">
          <div>
            <div className="font-bold">{name}</div>
            <div className="font-bold">@{company}</div>
          </div>
          {image && (
            <img
              src={image}
              style={{
                borderRadius: "50%",
                height: "50px",
                marginLeft: "10px",
              }}
              alt="company logo"
            />
          )}
        </div>
        <div className="text-md text-slate-400	">{date}</div>
        <div className="font-thin	 pt-4 text-[1rem] text-justify">
          {description}
        </div>
      </div>
    </div>
  );
};
const JobItem = ({ name, company, date, description, image }) => {
  return (
    <div
      data-aos="zoom-up"
      data-aos-easing="ease-out"
      className="flex flex-col flex-1 items-center m-5 dark:text-black  "
    >
      <div>
        <div className="flex justify-between">
          <div>
            <div className="font-bold text-lg">{name}</div>
            <div className="font-bold text-lg">@{company}</div>
          </div>
          {image && (
            <img
              src={image}
              style={{
                borderRadius: "5%",
                height: "80px",
                marginLeft: "10px",
              }}
              alt="company logo"
            />
          )}
        </div>
        <div className="text-lg text-slate-600	">{date}</div>
        <div className="font-light	 pt-4 text-[1.2rem] text-justify">
          {description.map((line) => (
            <p>{line}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

const Experience = () => {
  //Education, work experience, awards + certification
  return (
    <div className="dark:text-white dark:bg-darkTheme bg-[#edf2f8]">
      <h1
        className="font-bold text-[50px] dark:text-white pt-10 text-center"
        id="experience"
      >
        My Experience
      </h1>

      <div>
        <div className="p-5">
          <h2 className="text-[30px]">Education</h2>
          <div className="flex flex-col">
            <div className="education-entry">
              <div className="flex items-center justify-between">
                <h3 className="title">University of Waterloo</h3>
                <p>2023-2028</p>
              </div>
              <div className="flex justify-between ">
                <div>
                  <p>— Computer Science (Co-op)</p>
                  <ul className="font-light">
                    <li>
                      Relevant Coursework: CS145 (Advanced), MATH147 (Calculus I
                      - Advanced), PHYS121
                    </li>
                  </ul>
                </div>
                <img
                  src={require("../img/waterloo_logo.png")}
                  style={{ height: "6rem", margin: "10px" }}
                  alt="UWaterloo Logo"
                />
              </div>
            </div>
            <div className="education-entry">
              <div className="flex items-center justify-between">
                <h3 className="title">Marianopolis College</h3>
                <p>2022-2024</p>
              </div>
              <div className="flex justify-between ">
                <div>
                  <p>— Honours Pure and Applied Science</p>
                  <ul className="font-light">
                    <li>
                      Co-founder and Executive of 2 clubs (Web Dev Club,
                      Engineering Club){" "}
                    </li>
                  </ul>
                </div>
                <img
                  src={require("../img/marianopolis_logo.png")}
                  style={{ height: "6rem", margin: "10px" }}
                  alt="Marianopolis Logo"
                />
              </div>
            </div>
            <div className="education-entry">
              <div className="flex items-center justify-between">
                <h3 className="title">Collège Jean-de-Brébeuf</h3>
                <p>2017-2022</p>
              </div>
              <div className="flex justify-between">
                <div>
                  <p>
                    — <i>Langue et Civilisations latines</i> Program
                  </p>

                  <ul className="font-light">
                    <li>Graduated with Brébeuf Distinction</li>
                    <li>
                      Recipient of numerous merits in a variety of subjects
                      (Science, English, Art, etc.)
                    </li>
                    <li>
                      Member of environmental comitee for more than 3 years
                    </li>
                    <li>Member of Class Council</li>
                  </ul>
                </div>
                <img
                  src={require("../img/brebeuf_logo.png")}
                  style={{ height: "6rem", margin: "10px" }}
                  alt="Brebeuf Logo"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="m-10 p-4 pb-10 pt-10 bg-[#cfd6e3] shadow-lg rounded-xl">
          <div>
            <h2 className="text-[30px] dark:text-black">Work Experience</h2>
            <hr className="w-[2rem] border-indigo-500 border-[3px] rounded-sm" />
            <div className="flex ">
              <JobItem
                name={"Software Developer"}
                company={"DoorHan International"}
                date={"Mar. 2023 - Aug. 2023"}
                description={[
                  " - Developed a React Native mobile application aimed at enhancing the company's efficiency in delivering quotes to customers promptly.",
                  "- Also contributed to the development of a React web application tailored for administrators to track and manage employee-client interactions.",
                  "- Implemented a NodeJS (Express) API for seamless communication betweeen the web interface, mobile app and backend.",
                  "- Employed Postgres SQL as the database for secure and scalable data storage and management.",
                ]}
                image={require("../img/doorhan_logo.png")}
              />
            </div>
          </div>
        </div>
        <div className="p-5 pb-10">
          <div>
            <h2 className="text-[30px]">Business Experience</h2>
            <hr className="w-[2rem] border-indigo-500 border-[3px] rounded-sm" />
            <div className="flex"></div>
          </div>
          <div className="flex flex-wrap p-3 justify-around w-full">
            <WorkItem
              name={"Financial Assistant"}
              company={"Gestion Immobilière Anwar Inc."}
              date={"Apr. 2022 - Present"}
              description={
                "Responsible for helping manage finances at a real estate company. I mainly take care of compiling the spendings and revenus using spreadsheets and Sage 50, an accounting software. I also made an automation software using Python that reduced time by 50%."
              }
            />
            <WorkItem
              name={"Co-Founder and Co-CEO"}
              company={"EVO Pressure Washing"}
              date={"Apr. 2022 - Aug. 2022"}
              description={
                "Built this company with two school colleagues during the summer. We offered cleaning services for exterior surfaces. I was responsible for administrating and marketing the business online. Made nearly $11,000 in sales in just 4 months. "
              }
              image={require("../img/evo_logo.png")}
            />
            <WorkItem
              name={"Co-Founder and CEO"}
              company={"AXYAS Tutoring Service"}
              date={"Jun. 2022 - Aug. 2022"}
              description={
                "Company started during the COVID pandemic with three school colleagues. I kept track of finances, and communicated with clients and tutors. I also led my team in planning and setting up strategies to attract a bigger audience. Made over $45,000 in sales and served over 100 clients."
              }
              image={require("../img/axyas_logo.png")}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center pb-10 text-lg ">
        <a
          target="_blank"
          data-aos="fade-right"
          rel="noopener noreferrer"
          href="https://github.com/alys28/Resume/blob/main/Shariff_Resume.pdf"
          className="border-2 p-3 rounded-lg font-ChivoMono text-indigo-400 border-indigo-400 shadow-lg hover:shadow-[0px_5px_11px_8px_rgba(255,255,255,0.1)]"
        >
          View Full CV
        </a>
      </div>
    </div>
  );
};

export default Experience;
