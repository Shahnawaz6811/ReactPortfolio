import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import ProgressBar from "react-animated-progress-bar";
import "react-tabs/style/react-tabs.css";
let skills = require("data/skills");
console.log(skills);

const SkillProgress = ({ progress }) => {
  return (
    <ProgressBar
      width={window.matchMedia("(max-width: 700px)").matches ? "300px":"100%"}
      height="15px"
      rect
      defColor={{
        fair: "#F06000",
        good: "#F06000",
        excellent: "#F06000",
        poor: "#F06000",
      }}
      fontColor="gray"
      percentage={progress}
      rectPadding="0px"
      rectBorderRadius="4px"
      trackPathColor="transparent"
      bgColor="#f05a48"
      trackBorderColor="grey"
    />
  );
};

export default () => {
 

  return (
    <Tabs>
      <TabList>
        <Tab>Frontend</Tab>
        <Tab>Backend</Tab>
        <Tab>Other</Tab>
      </TabList>

      <TabPanel>
        <div>
          {skills.frontend.map((skill) => (
            <div className="skill">
              <div className="skill-name">{skill.name}</div>
              <SkillProgress progress={skill.per} />
            </div>
          ))}
        </div>
      </TabPanel>
      <TabPanel>
        <div>
          {skills.backend.map((skill) => (
            <div className="skill">
              <div className="skill-name">{skill.name}</div>
              <SkillProgress progress={skill.per} />
            </div>
          ))}
        </div>
      </TabPanel>
      <TabPanel>
        <div>
          {skills.other.map((skill) => (
            <div className="skill">
              <div className="skill-name">{skill.name}</div>
              <SkillProgress progress={skill.per} />
            </div>
          ))}
        </div>
      </TabPanel>
    </Tabs>
  );
};
