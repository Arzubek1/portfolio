import scss from "./Title.module.scss";
import { motion } from "framer-motion";
import React, { useState, useEffect, useCallback, useMemo } from "react";

const texts = [
  "FullStack разработчик",
  "Специалист по React / Next.js",
  "Будущий Senior разработчик",
];

function useTypewriter(
  words: string[],
  speed = 150,
  deleteSpeed = 75,
  pause = 1000
) {
  const [textIndex, setTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const currentWord = useMemo(() => words[textIndex], [words, textIndex]);

  const tick = useCallback(() => {
    if (isDeleting) {
      setDisplayedText(currentWord.substring(0, displayedText.length - 1));
    } else {
      setDisplayedText(currentWord.substring(0, displayedText.length + 1));
    }

    if (!isDeleting && displayedText === currentWord) {
      setTimeout(() => setIsDeleting(true), pause);
    } else if (isDeleting && displayedText === "") {
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % words.length);
    }
  }, [currentWord, displayedText, isDeleting, words.length, pause]);

  useEffect(() => {
    const timer = setTimeout(tick, isDeleting ? deleteSpeed : speed);
    return () => clearTimeout(timer);
  }, [tick, isDeleting, speed, deleteSpeed]);

  return displayedText;
}

const textContainer = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const textItem = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Title = () => {
  const displayedText = useTypewriter(texts);

  return (
    <motion.div
      className={scss.title}
      variants={textContainer}
      initial="hidden"
      animate="visible"
    >
      <motion.h5 className={scss.hello} variants={textItem}>
       Здравствуйте, меня зовут
      </motion.h5>
      <motion.h1 variants={textItem}>Арзубек Джураев</motion.h1>
      <motion.h3 variants={textItem}>
        и Я <span>{displayedText}</span>
        <span className={scss.cursor}></span>
      </motion.h3>
    </motion.div>
  );
};

export default Title;
