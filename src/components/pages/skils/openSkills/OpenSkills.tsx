import React from "react";
import scss from "./OpenSkills.module.scss";
import { AiOutlinePushpin } from "react-icons/ai";
import { motion } from "framer-motion";

const OpenSkills = () => {
  return (
    <motion.div
                 className={scss.openSkills}
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.6 }}
    >
      <h4>Technical Skills:</h4>
      <div className={scss.content}>
        <div className={scss.skillItem}>
          <h5>
            <span>
              <AiOutlinePushpin />
            </span>
            HTML{" "}
          </h5>
          <h5>
            <span>
              <AiOutlinePushpin />
            </span>
            CSS{" "}
          </h5>
          <h5>
            <span>
              <AiOutlinePushpin />
            </span>
            JavaScript (ES6+)
          </h5>
          <h5>
            <span>
              <AiOutlinePushpin />
            </span>
            React
          </h5>
        </div>
        <div className={scss.skillItem}>
          <h5>
            <span>
              <AiOutlinePushpin />
            </span>
            SASS
          </h5>
          <h5>
            <span>
              <AiOutlinePushpin />
            </span>
            TypeScript
          </h5>
          <h5>
            <span>
              <AiOutlinePushpin />
            </span>
            NextJS
          </h5>
          <h5>
            <span>
              <AiOutlinePushpin />
            </span>
            GitHub
          </h5>
        </div>
      </div>
    </motion.div>
  );
};

export default OpenSkills;
