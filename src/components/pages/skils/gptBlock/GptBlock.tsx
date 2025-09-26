"use client";
import { FC } from "react";
import scss from "./GptBlock.module.scss";

interface GptBlockProps {
  keyword: string;
  description: string;
  image: string;
  visible: boolean;
  position: { x: number; y: number };
}

const GptBlock: FC<GptBlockProps> = ({ keyword, description, image, visible, position }) => {
  if (!visible) return null;

  return (
    <div
      className={scss.gptPopup}
      style={{ top: position.y, left: position.x }}
    >
      <img src={image} alt={keyword} />
      <p><strong>{keyword}</strong></p>
      <p>{description}</p>
    </div>
  );
};

export default GptBlock;
