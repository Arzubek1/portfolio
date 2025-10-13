"use client";
import React from "react";
import scss from "./About.module.scss";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import AnimatedTitle from "@/components/UI/animatedTitle/AnimatedTitle";
import OpenSkills from "../skils/openSkills/OpenSkills";

const About = () => {
  return (
    <section className={scss.about} id="about">
      <div className="container">
        <div className={scss.title}>
          <AnimatedTitle text="Обо мне" delayStep={0.2} />
        </div>
        <div className={scss.content}>
          <motion.p
            className={scss.info}
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.6 }}
          >
            Я начал свой путь в IT в августе 2024 года, когда познакомился с
            Motion Web Academy, и быстро понял, что это именно то направление,
            которым я хочу заниматься. За 13 месяцев обучения я прошёл трек
            Frontend и сейчас сосредоточен на Backend, развивая свои навыки,
            чтобы стать уверенным Full Stack разработчиком. Мне нравится
            воплощать идеи в реальные проекты, решать задачи и изучать новые
            технологии.
          </motion.p>
          <motion.p
            className={scss.infoMobile}
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.6 }}
          >
            Я начал свой путь в IT в августе 2024 года в Motion Web Academy.
            После завершения трека по Frontend сейчас сосредоточен на изучении
            Backend, чтобы стать уверенным Full Stack разработчиком. Мне
            нравится создавать проекты, решать сложные задачи и изучать новые
            технологии.
          </motion.p>

          <OpenSkills />
        </div>
      </div>
    </section>
  );
};

export default About;
