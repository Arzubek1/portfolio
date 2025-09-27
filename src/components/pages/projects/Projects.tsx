"use client";
import React from "react";
import scss from "./Projects.module.scss";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Projects = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // бир эле жолу иштейт
    threshold: 0.3, // 30% көрүнгөндө анимация башталат
  });

  const letters = "Projects".split("");
  return (
    <section className={scss.projects}>
      <h2 ref={ref}>
        {letters.map((char, i) => (
          <motion.span
            key={i}
            initial={{
              y: i % 2 === 0 ? -100 : 100, // жуп болсо жогору, так болсо төмөндөн
              scaleY: 2, // узун болуп башталат
              opacity: 0,
            }}
            animate={inView ? { y: 0, scaleY: 1, opacity: 1 } : {}}
            transition={{
              duration: 0.6,
              delay: i * 0.15, // ар бир тамга кезеги менен чыгат
              ease: "easeOut",
            }}
            style={{ display: "inline-block" }}
          >
            {char}
          </motion.span>
        ))}
      </h2>
      <div className={scss.content}>
        {scss.firstProject}
      </div>
    </section>
  );
};

export default Projects;
