import "./experience.css";

const Experience = () => {
  //Education, work experience, awards + certification
  return (
    <div>
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
              <div className="flex justify-between">
                <div>
                  <p>— Honours Pure and Applied Science</p>
                  <ul>
                    <li>
                      Co-founder and Executive of 3 clubs (Web Dev Club,
                      Engineering Club, Career Club){" "}
                    </li>
                  </ul>
                </div>
                <img
                  src={require("../img/marianopolis_logo.png")}
                  style={{ height: "6rem", margin: "10px" }}
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

                  <ul>
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
                />
              </div>
            </div>
          </div>
        </div>
        {/* Education, ALS, AXYAS, EVO, */}
      </div>
    </div>
  );
};

export default Experience;
