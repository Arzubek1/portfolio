"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import scss from "./AnimatedTitle.module.scss";

interface AnimatedTitleProps {
  text: string;        // чыгара турган текст (мисалы: "About Me")
  index?: string;      // алдынкы номер ("01." ж.б.)
  delayStep?: number;  // ар бир тамга үчүн кечигүү (default: 0.12)
  threshold?: number;  // анимация качан башталат (default: 0.5)
}

const AnimatedTitle: React.FC<AnimatedTitleProps> = ({
  text,
  index,
  delayStep = 0.12,
  threshold = 0.5,
}) => {
  const letters = text.split("");
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold,
  });

const letterVariants: Variants = {
  hidden: (i: number) => ({
    y: i % 2 === 0 ? -100 : 100,
    scaleY: 2,
    opacity: 0,
  }),
  visible: (i: number) => ({
    y: 0,
    scaleY: 1,
    opacity: 1,
    transition: {
      duration: 0.6,
      delay: i * delayStep,
      ease: "easeOut",
    },
  }),
};



  return (
    <h2 ref={ref} className={scss.animatedTitle} aria-label={text}>
      {index && <span className={scss.index}>{index}</span>}{" "}
      {letters.map((char, i) => (
        <motion.span
          key={i}
          custom={i}
          variants={letterVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className={scss.letter}
        >
          {char}
        </motion.span>
      ))}
    </h2>
  );
};

export default AnimatedTitle;
