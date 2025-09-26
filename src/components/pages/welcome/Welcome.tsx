"use client";
import React, { useState, useEffect } from "react";
import scss from "./Welcome.module.scss";
import Image from "next/image";
// texts start
const texts: string[] = [
  "FullStack developer",
  "React / Next.js specialist",
  "Future Senior Dev in Progress",
];
//texts end

// Component start
const Welcome = () => {
  // states for typewritter effect start
  const [textIndex, setTextIndex] = useState<number>(0);
  const [displayedText, setDisplayedText] = useState<string>("");
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const [typingSpeed, setTypingSpeed] = useState<number>(150);
  // states for typewritter effect end
//useEffect for typewritter effect start
  useEffect(() => {
    const handleTyping = () => {
      const currentText = texts[textIndex];
      if (isDeleting) {
        setDisplayedText(currentText.substring(0, displayedText.length - 1));
        setTypingSpeed(75);
      } else {
        setDisplayedText(currentText.substring(0, displayedText.length + 1));
        setTypingSpeed(150);
      }
      if (!isDeleting && displayedText === currentText) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && displayedText === "") {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, textIndex, typingSpeed]);
// useEffect for typewritter effect end

  return (
    <section className={scss.welcome}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.image}>
            <div className={scss.block}>
              <Image
                src={"/images/myImage.jpeg"}
                alt="I am"
                width={320}
                height={350}
              />
              <div className={scss.bg}></div>
            </div>
          </div>
          <div className={scss.myself}>
            <h5>Hello, I'm</h5>
            <h1>Arzubek Dzhuraev</h1>
            <h3>
              And I'm a <span>{displayedText}</span>{" "}
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
