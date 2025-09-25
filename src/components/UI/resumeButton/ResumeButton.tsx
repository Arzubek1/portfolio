import React, { FC } from "react";
import scss from "./ResumeButton.module.scss";
import { FaFileDownload } from "react-icons/fa";

interface ResumeButtonProps {
  title: string;
}

const ResumeButton: FC<ResumeButtonProps> = ({ title }) => {
  return (
    <button className={scss.resumeButton}>
      <span className={scss.text}>{title}</span>
      <span className={scss.icon}>
        <FaFileDownload />
      </span>
    </button>
  );
};

export default ResumeButton;
