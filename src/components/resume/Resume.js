import React from "react";
import SkillsTabs from "../portfolio/SkillsTab";
import "./Resume.scss";
const Resume = (props) => {
  var skillmessage = "";
  const works = [
    {
      company: "WDMtech",
      years: "2018",
      description: "",
    },
  ];

  return (
    <section  id="experience">
      {/* <div className="education">
        <h1>
          <span>Education</span>
        </h1>

        <div className="timeline">
          <h3> Diploma In Computer Engineering</h3>
          <p className="info">
            Jamia Millia Islamia <span>&bull;</span>
            <em className="date">May 2018</em>
          </p>
        </div>
      </div> */}

      <div className="work">
        <h1>
          <span>Work</span>
        </h1>

        <div className="timeline">
          <ul>
            <li>
              <time>2018</time>
              <h4>Web Developer</h4>
              <p id="description">
                Currently working at WDM technologies as Web and App Developer
              </p>
              <p id="duration">(September 2018-Present)</p>
            </li>

            <li>
              <time>2020</time>
              <h4></h4>
              <p id="description">
                {/* Currently working at WDM technologies as Web and App Developer */}
              </p>
              <p id="duration"></p>
            </li>

            {/* <li>
              <time>2018</time>
              <h4>Web Developer</h4>
              <p id="duration">(May 2018-Present)</p>
              <p id="description">
                Currently working at WDM technologies as Web and App Developer
              </p>
            </li> */}
          </ul>
        </div>
      </div>

      <div className="skills">
        <h1>
          <span>Skills</span>
        </h1>
        <div className="skills-bar">
          <SkillsTabs />
        </div>
        {/* <div className="bars"></div> */}
      </div>
    </section>
  );
};

export default Resume;
