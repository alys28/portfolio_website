import "./experience.css";

const WorkItem = ({ name, company, date, description }) => {
  return (
    <div className="flex flex-col flex-1 items-center p-5 dark:text-white">
      <div>
        <div className="font-bold">{name}</div>
        <div className="font-bold">@{company}</div>
        <div className="text-md text-slate-400	">{date}</div>
        <div className="font-thin	 pt-4 text-[1rem] pr-[50px] text-justify">
          {description}
        </div>
      </div>
    </div>
  );
};

const Experience = () => {
  //Education, work experience, awards + certification
  return (
    <div className="dark:text-white dark:bg-darkTheme">
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
                <h3 className="title">Marianopolis College</h3>
                <p>2022-2024</p>
              </div>
              <div className="flex justify-between ">
                <div>
                  <p>— Honours Pure and Applied Science</p>
                  <ul className="font-light">
                    <li>
                      Co-founder and Executive of 3 clubs (Web Dev Club,
                      Engineering Club, Career Club){" "}
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
            />
            <WorkItem
              name={"Co-Founder and CEO"}
              company={"AXYAS Tutoring Service"}
              date={"Jun. 2022 - Aug. 2022"}
              description={
                "Company started during the COVID pandemic with three school colleagues. I kept track of finances, and communicated with clients and tutors. I also led my team in planning and setting up strategies to attract a bigger audience. Made over $45,000 in sales and served over 100 clients."
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
