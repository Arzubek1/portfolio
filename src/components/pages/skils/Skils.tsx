"use client";
import { FC } from "react";
import scss from "./Skils.module.scss";
import OpenSkills from "./openSkills/OpenSkills";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface SkillItem {
  src: string;
  keyword: string;
  link: string;
}

const blockTop: SkillItem[] = [
  {
    src: "/images/css.webp",
    keyword: "CSS",
    link: "https://developer.mozilla.org/docs/Web/CSS",
  },
  {
    src: "/images/html.jpg",
    keyword: "HTML",
    link: "https://developer.mozilla.org/docs/Web/HTML",
  },
  {
    src: "/images/js.avif",
    keyword: "JavaScript",
    link: "https://developer.mozilla.org/docs/Web/JavaScript",
  },
  { src: "/images/react.avif", keyword: "React", link: "https://react.dev/" },
  {
    src: "/images/ts.png",
    keyword: "TypeScript",
    link: "https://www.typescriptlang.org/",
  },
  { src: "/images/next.jpg", keyword: "Next.js", link: "https://nextjs.org/" },
  { src: "/images/sass.png", keyword: "Sass", link: "https://sass-lang.com/" },
  { src: "/images/github.jpg", keyword: "GitHub", link: "https://github.com/" },
  { src: "/images/node.png", keyword: "Node.js", link: "https://nodejs.org/" },
];

const blockBottom: SkillItem[] = [
  {
    src: "/images/express.png",
    keyword: "Express",
    link: "https://expressjs.com/",
  },
  {
    src: "/images/mongo.png",
    keyword: "MongoDB",
    link: "https://www.mongodb.com/",
  },
  {
    src: "/images/tailwind.webp",
    keyword: "Tailwind",
    link: "https://tailwindcss.com/",
  },
  {
    src: "/images/swagger.webp",
    keyword: "Swagger",
    link: "https://swagger.io/",
  },
  { src: "/images/vite.png", keyword: "Vite", link: "https://vitejs.dev/" },
  {
    src: "/images/prisma.jpg",
    keyword: "Prisma",
    link: "https://www.prisma.io/",
  },
  {
    src: "/images/fastify.png",
    keyword: "Fastify",
    link: "https://fastify.dev/",
  },
  {
    src: "/images/postman.png",
    keyword: "Postman",
    link: "https://www.postman.com/",
  },
  {
    src: "/images/insomnia.png",
    keyword: "Insomnia",
    link: "https://insomnia.rest/",
  },
];

const Skils: FC = () => {
    const { ref, inView } = useInView({
    triggerOnce: true, // бир эле жолу иштейт
    threshold: 0.3,    // 30% көрүнгөндө анимация башталат
  });

  const letters = "Skills".split("");

  return (
    <section className={scss.skils}>
       <h2 ref={ref}>
      {letters.map((char, i) => (
        <motion.span
          key={i}
          initial={{
            y: i % 2 === 0 ? -100 : 100, // жуп болсо жогору, так болсо төмөндөн
            scaleY: 2, // узун болуп башталат
            opacity: 0,
          }}
          animate={
            inView
              ? { y: 0, scaleY: 1, opacity: 1 }
              : {}
          }
          transition={{
            duration: 0.6,
            delay: i * 0.15, // ар бир тамга кезеги менен чыгат
            ease: "easeOut",
          }}
          style={{ display: "inline-block" }}
        >
          {char}
        </motion.span>
      ))}
    </h2>
    
      <div className={scss.content}>
        <div className={scss.top}>
          <OpenSkills />
        </div>

        <div className={scss.mainContent}>
          {/* Жогорку ряд (оңго жылат) */}
          <div className={scss.slider}>
            <div className={`${scss.track} ${scss.right}`}>
              {blockTop.concat(blockTop).map((item, i) => (
                <div key={i} title={item.keyword}>
                <a
                  key={i}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={item.keyword}
                >
                  <Image
                    src={item.src}
                    alt={item.keyword}
                    width={320}
                    height={120}
                    style={{ cursor: "pointer" }}
                  />
                </a>
                </div>
              ))}
            </div>
          </div>

          {/* Төмөнкү ряд (солго жылат) */}
          <div className={scss.slider}>
            <div className={`${scss.track} ${scss.left}`}>
              {blockBottom.concat(blockBottom).map((item, i) => (
                <div key={i} title={item.keyword}>
                <a
                  key={i}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={item.keyword}
                >
                  <Image
                    src={item.src}
                    alt={item.keyword}
                    width={320}
                    height={120}
                    style={{ cursor: "pointer" }}
                  />
                </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skils;
