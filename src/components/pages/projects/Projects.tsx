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
    <section className={scss.projects}>
      <div className="container">
        <div className={scss.title}>
          <AnimatedTitle text="Projects" delayStep={0.2} />
        </div>
        <div className={scss.content}>
          <div className={scss.project}>
            {/* Сүрөт бөлүгү */}
            <motion.div
              className={scss.info}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.5 }}
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
              viewport={{ once: true, amount: 0.5 }}
            >
              <h3>FilmHub</h3>
              <p>
                A movie search and information platform built using the Movie
                API. Users can search for movies, view ratings, and access
                detailed information.
              </p>
              <div className={scss.links}>
                <div className={scss.toFilm}>
                  <a href="https://filmhub-8vcu.vercel.app/" target="_blank">
                    <FiExternalLink />
                  </a>
                  <a
                    href="https://github.com/username/filmhub"
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
