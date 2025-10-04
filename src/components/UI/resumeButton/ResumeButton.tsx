import React, { FC } from "react";
import scss from "./ResumeButton.module.scss";
import { FaFileDownload } from "react-icons/fa";

interface ResumeButtonProps {
  title: string;
}

const ResumeButton: FC<ResumeButtonProps> = ({ title }) => {
  return (
    <a
      className={scss.resumeButton}
      href="/resume/Resume(el).pdf"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className={scss.text}>{title}</span>
      <span className={scss.icon}>
        <FaFileDownload />
      </span>
    </a>
  );
};

export default ResumeButton;
