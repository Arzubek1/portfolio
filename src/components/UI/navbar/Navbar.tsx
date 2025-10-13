"use client";
import React from "react";
import scss from "./NavBar.module.scss";
import { BsCaretRight } from "react-icons/bs";
import { useAppSelector, useAppDispatch } from "@/hooks/hooks";
import { handleNavbar } from "@/toolkit/reduxSlice";
import { motion, AnimatePresence } from "framer-motion";
import ResumeButton from "../resumeButton/ResumeButton";
import Socials from "../socials/Socials";
import { FiGithub } from "react-icons/fi";
import { SlSocialInstagram } from "react-icons/sl";
import { RiTelegram2Line } from "react-icons/ri";
import { LuLinkedin } from "react-icons/lu";

const Navbar = () => {
  const { navbar } = useAppSelector((s) => s.navbarStore);
  const dispatch = useAppDispatch();

  if (!navbar) return null; // display:none ордуна

  return (
    <AnimatePresence>
      {navbar && (
        <motion.div
          className={scss.container}
          onClick={() => dispatch(handleNavbar(false))}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className={scss.navbar}
            onClick={(e) => e.stopPropagation()}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
          >
            <a href="#" onClick={() => dispatch(handleNavbar(false))}>
              <span>
                <BsCaretRight />
              </span>
              Главное
            </a>
            <a href="#about" onClick={() => dispatch(handleNavbar(false))}>
              <span>
                <BsCaretRight />
              </span>
              Обо мне
            </a>
            <a href="#projects" onClick={() => dispatch(handleNavbar(false))}>
              <span>
                <BsCaretRight />
              </span>
              Проекты
            </a>
            <a href="#contact" onClick={() => dispatch(handleNavbar(false))}>
              <span>
                <BsCaretRight />
              </span>
              Контакты
            </a>
            <ResumeButton title="Resume" />
             <div className={scss.socials}>
      <a
        href="https://github.com/Arzubek1"
        title="GitHub"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FiGithub />
      </a>
      <a
        href="https://www.instagram.com/dzhuraev_000/"
        target="_blank"
        rel="noopener noreferrer"
        title="Instagram"
      >
        <SlSocialInstagram />
      </a>
      <a
        className={scss.resumeButton}
        href="https://web.telegram.org/a/"
        target="_blank"
        rel="noopener noreferrer"
        title="Telegram"
      >
        <RiTelegram2Line />
      </a>
      <a
        href="https://www.linkedin.com/in/arzubek-d-a5b69b37b/"
        target="_blank"
        rel="noopener noreferrer"
        title="Linkedin"
      >
        <LuLinkedin />
      </a>
    </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Navbar;
