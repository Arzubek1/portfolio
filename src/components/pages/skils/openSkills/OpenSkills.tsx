import React from "react";
import scss from "./OpenSkills.module.scss";
import Image from "next/image";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux/Toolkit",
  "Sass",
  "TypeScript",
  "Next.js",
  "GitHub",
  "Framer Motion",
  "Tailwind",
];

const OpenSkills = () => {
  return (
    <div className={scss.openSkills}>
      <div className="container">
          <h4> <Image src={"/images/openSkills_image.png"} alt="img" width={50} height={50}/> Open skills</h4>
        <div className={scss.content}>
            {skills.map((skill, index) => (
                <div key={index} className={scss.skillItem}>
                    {skill}
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default OpenSkills;
