import React from "react";
import scss from "./OpenSkills.module.scss";

const OpenSkills = () => {
  return (
    <div className={scss.openSkills}>
      <h4>
        Technical Skills
      </h4>
      <div className={scss.content}>
        <div className={scss.skillItem}>
          <h5><span>01.</span>HTML </h5>
          <h5><span>02.</span>CSS </h5>
          <h5><span>03.</span>JavaScript (ES6+)</h5>
          <h5><span>04.</span>React</h5>
        </div>
        <div className={scss.skillItem}>
          <h5><span>05.</span>SASS</h5>
          <h5><span>06.</span>TypeScript</h5>
          <h5><span>07.</span>NextJS</h5>
          <h5><span>08.</span>GitHub</h5>
        </div>
      </div>
    </div>
  );
};

export default OpenSkills;
