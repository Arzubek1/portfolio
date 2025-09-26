import React from "react";
import scss from "./OpenSkills.module.scss";
import Image from "next/image";

const OpenSkills = () => {
  return (
    <div className={scss.openSkills}>
      <h4>
        Technical Skills
      </h4>
      <div className={scss.content}>
        <div className={scss.skillItem}>
          <h5><span>01.</span>HTML</h5>
          <h5><span>02.</span>CSS</h5>
          <h5><span>03.</span>JavaScript</h5>
          <h5><span>04.</span>React</h5>
        </div>
        <div className={scss.skillItem}>
          <h5><span>05.</span>Redux/Toolkit</h5>
          <h5><span>06.</span>SASS</h5>
          <h5><span>07.</span>TypeScript</h5>
          <h5><span>08.</span>NextJS</h5>
        </div>
        <div className={scss.skillItem}>
          <h5><span>09.</span>GitHub</h5>
          <h5><span>10.</span>Tailwind</h5>
          <h5><span>11.</span>Framer Motion</h5>
        </div>
      </div>
    </div>
  );
};

export default OpenSkills;
