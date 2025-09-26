import { FC } from "react";
import scss from "./Skils.module.scss";

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

const Skils: FC = () => {
  return (
    <section className={scss.skils}>
      <div className="container">
        <div className={scss.content}>
          <h2>My Skills</h2>
          <div className={scss.skillsCircle}>
            {skills.map((skill, i) => (
              <div
                key={i}
                className={scss.skillItem}
                style={{ "--angle": `${(360 / skills.length) * i}deg` } as React.CSSProperties}
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skils;
