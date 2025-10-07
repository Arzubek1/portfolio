"use client";
import React, { useState, useEffect, useCallback, useMemo } from "react";
import Image from "next/image";
import scss from "./Welcome.module.scss";
import { motion } from "framer-motion";
import Navbar from "@/components/UI/navbar/Navbar";
import { useAppSelector } from "@/hooks/hooks";
import Title from "@/components/UI/title/Title";

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

const Welcome = () => {
  const displayedText = useTypewriter(texts);
  const { navbar } = useAppSelector((s) => s.navbarStore);
  useEffect(() => {
    if (navbar) {
      document.documentElement.style.overflow = "hidden"; // <html>
      document.body.style.overflow = "hidden"; // <body>
    } else {
      document.documentElement.style.overflow = "auto";
      document.body.style.overflow = "auto";
    }

    return () => {
      document.documentElement.style.overflow = "auto";
      document.body.style.overflow = "auto";
    };
  }, [navbar]);

  return (
    <section className={scss.welcome} id="/">
      <div className="container">
        <div className={scss.mobileTitle}>
          <Title />
        </div>
        <div className={scss.content}>
          {/* Сүрөт */}
          <div className={scss.image}>
            <div className={scss.block}>
              <Image
                src="/images/myImage.jpeg"
                alt="I am"
                width={320}
                height={350}
              />
            </div>
          </div>

          {/* Тексттер */}
          <motion.div
            className={scss.myself}
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
            <motion.p variants={textItem}>
              Я — увлечённый Full Stack разработчик, который ценит чистую
              архитектуру, масштабируемый дизайн и выразительный
              пользовательский интерфейс. Каждая строка кода, которую я пишу, —
              это шаг к тому, чтобы стать сеньор-инженером, сочетающим
              креативность и точность.
            </motion.p>
          </motion.div>
        </div>
      </div>
      <Navbar />
    </section>
  );
};

export default Welcome;
