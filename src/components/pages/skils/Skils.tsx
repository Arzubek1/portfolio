import { FC } from "react";
import scss from "./Skils.module.scss";
import OpenSkills from "./openSkills/OpenSkills";
import Image from "next/image";

const Skils: FC = () => {
  return (
    <section className={scss.skils}>
      <div className="container">
        <h2>Skills</h2>
        <div className={scss.content}>
          <div className={scss.top}>
            <OpenSkills />
          </div>
          <div className={scss.mainContent}>
            <div className={scss.mainCircle}>
              <div className={scss.js}>
                <h3>JS</h3>
              </div>
              <Image
                src={"/images/html.webp"}
                alt="img"
                width={56}
                height={56}
                className={scss.html}
              />
              <Image
                src={"/images/css.png"}
                alt="img"
                width={50}
                height={50}
                className={scss.css}
              />
              <Image
                src={"/images/react.png"}
                alt="img"
                width={56}
                height={56}
                className={scss.react}  
                />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skils;
