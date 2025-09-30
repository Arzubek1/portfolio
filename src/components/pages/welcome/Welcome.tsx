"use client";
import React, { useState, useEffect, useCallback, useMemo } from "react";
import Image from "next/image";
import scss from "./Welcome.module.scss";

// texts сыртта (бир жолу гана түзүлөт)
const texts = [
  "FullStack developer",
  "React / Next.js specialist",
  "Future Senior Dev in Progress",
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

    // токтогон учурлар
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

const Welcome = () => {
  const displayedText = useTypewriter(texts);

  return (
    <section className={scss.welcome}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.image}>
            <div className={scss.block}>
              <Image
                src="/images/myImage.jpeg"
                alt="I am"
                width={320}
                height={350}
              />
              {/* <div className={scss.bg}></div> */}
            </div>
          </div>
          <div className={scss.myself}>
            <h5 className={scss.hello}>Hello, my name is</h5>
            <h1>Arzubek Dzhuraev</h1>
            <h3>
              And I'm a <span>{displayedText}</span>
              <span className={scss.cursor}></span>
            </h3>
            <p>
              I'm a passionate fullstack developer with a love for clean
              architecture, scalable design, and expressive UI. Every line of
              code I write is a step toward becoming a senior engineer who
              blends creativity with precision.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
