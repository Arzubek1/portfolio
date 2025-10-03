"use client";
import React from "react";
import scss from "./About.module.scss";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import AnimatedTitle from "@/components/UI/animatedTitle/AnimatedTitle";
import OpenSkills from "../skils/openSkills/OpenSkills";

const About = () => {
  return (
    <section className={scss.about}>
      <div className="container">
        <div className={scss.title}>
          <AnimatedTitle text="About Me" delayStep={0.2} />
        </div>
        <div className={scss.content}>
          <motion.p
            className={scss.info}
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.6 }}
          >
            I started my IT journey in August 2024 after discovering Motion Web
            Academy, and quickly realized this was the right path for me. Over
            13 months of learning, I completed the Frontend track and am now
            focusing on the Backend, building my skills toward becoming a
            confident Full Stack Developer. I enjoy turning ideas into real
            projects, solving challenges, and exploring new technologies.
          </motion.p>
          <motion.p
            className={scss.infoMobile}
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.6 }}
          >
            I began my IT journey in August 2024 at Motion Web Academy. After
            completing the Frontend track, I’m now focusing on Backend to become
            a confident Full Stack Developer. I enjoy building projects, solving
            challenges, and exploring new technologies.
          </motion.p>

          <OpenSkills />
        </div>
      </div>
    </section>
  );
};

export default About;
