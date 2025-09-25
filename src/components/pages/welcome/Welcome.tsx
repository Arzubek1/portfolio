import React from "react";
import scss from "./Welcome.module.scss";
import Image from "next/image";

const texts = [
  "FullStack developer",
  "React / Next.js specialist",
  "Future Senior Dev in Progress",
];

const Welcome = () => {
  return (
    <section className={scss.welcome}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.image}>
            <Image
              src={"/images/myImage.jpeg"}
              alt="I am"
              width={320}
              height={350}
            />
          </div>
          <div className={scss.myself}>
            <h5>Hello, I'm</h5>
            <h1>Arzuvek Dzhuraev</h1>
            <h3>
              And I'm a <span>{}</span>
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
