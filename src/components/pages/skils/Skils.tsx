import { FC } from "react";
import scss from "./Skils.module.scss";
import OpenSkills from "./openSkills/OpenSkills";



const Skils: FC = () => {
  return (
    <section className={scss.skils}>
      <div className="container">
          <h2>Skills</h2>
        <div className={scss.content}>
<div className={scss.top}>
  <OpenSkills />
</div>
        </div>
      </div>
    </section>
  );
};

export default Skils;
