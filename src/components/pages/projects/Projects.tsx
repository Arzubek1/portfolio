"use client";
import React from "react";
import scss from "./Projects.module.scss";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { FaReact } from "react-icons/fa";
import { IoLogoSass } from "react-icons/io5";
import { TbApi } from "react-icons/tb";
const Projects = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // бир эле жолу иштейт
    threshold: 0.5, // 30% көрүнгөндө анимация башталат
  });

  const letters = "Projects".split("");
  return (
    <section className={scss.projects}>
<div className="container">
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
        <div className="container">
          <div className={scss.first}>
            <div className={scss.img}>
              <Image
                src="/images/filmhubimg.png"
                alt="img"
                width={500}
                height={280}
                style={{ width: "100%", height: "100%" }}
              />
              <div className={scss.icons}>
                <div className={scss.icon}>
                  {" "}
                  <span>
                    <FaReact />
                  </span>{" "}
                  <h4>React + Vite </h4>
                </div>
                <div className={scss.icon}>
                  <span>
                    <IoLogoSass />
                  </span>{" "}
                  <h4> SASS</h4>
                </div>
                <div className={scss.icon}>
                  <span>
                    <TbApi />
                  </span>{" "}
                  <h4> Movie API</h4>
                </div>
              </div>
            </div>
            <div className={scss.info}>
              
            </div>
          </div>
        </div>
      </div>
</div>
    </section>
  );
};

export default Projects;
