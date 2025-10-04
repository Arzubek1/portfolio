import React from "react";
import scss from "./Social.module.scss";
import { FiGithub } from "react-icons/fi";
import { SlSocialInstagram } from "react-icons/sl";
import { RiTelegram2Line } from "react-icons/ri";
import { LuLinkedin } from "react-icons/lu";
const Socials = () => {
  return (
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
  );
};

export default Socials;
