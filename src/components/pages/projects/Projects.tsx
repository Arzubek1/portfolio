"use client";
import React from "react";
import scss from "./Projects.module.scss";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaReact, FaGithub } from "react-icons/fa";
import { IoLogoSass } from "react-icons/io5";
import { TbApi } from "react-icons/tb";
import AnimatedTitle from "@/components/UI/animatedTitle/AnimatedTitle";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const Projects = () => {
  return (
    <section className={scss.projects} id="projects">
      <div className="container">
        <div className={scss.title}>
          <AnimatedTitle text="Проекты" delayStep={0.2} />
        </div>
        <div className={scss.content}>
          <div className={scss.project}>
            {/* Сүрөт бөлүгү */}
            <motion.div
              className={scss.info}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <Image
                src="/images/filmhubimg.png"
                alt="FilmHub project"
                width={500}
                height={280}
                style={{ width: "100%", height: "100%" }}
              />
            </motion.div>

            {/* Маалымат бөлүгү */}
            <motion.div
              className={scss.info}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h3>FilmHub</h3>
              <p>
                Платформа для поиска фильмов и получения информации, созданная с
                использованием Movie API. Пользователи могут искать фильмы,
                просматривать рейтинги и получать подробную информацию.
              </p>
              <div className={scss.links}>
                <div className={scss.toFilm}>
                  <a href="https://filmhub-8vcu.vercel.app/" target="_blank">
                    <FiExternalLink />
                  </a>
                  <a
                    href="https://github.com/Arzubek1/filmhub.git"
                    target="_blank"
                    className={scss.github}
                  >
                    <FiGithub />
                  </a>
                </div>
                {/* Иконкалар */}
                <div className={scss.icons}>
                  <div className={scss.icon}>
                    <span>
                      <FaReact />
                    </span>
                    <h4>React + Vite</h4>
                  </div>
                  <div className={scss.icon}>
                    <span>
                      <IoLogoSass />
                    </span>
                    <h4>SASS</h4>
                  </div>
                  <div className={scss.icon}>
                    <span>
                      <TbApi />
                    </span>
                    <h4>Movie API</h4>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
