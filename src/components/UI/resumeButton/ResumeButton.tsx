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
      href="/resume/Джураев-Арзубек.pdf"
      target="_blank"
      rel="noopener noreferrer"
      title="Резюме"
    >
      <span className={scss.text}>{title}</span>
      <span className={scss.icon}>
        <FaFileDownload />
      </span>
    </a>
  );
};

export default ResumeButton;
