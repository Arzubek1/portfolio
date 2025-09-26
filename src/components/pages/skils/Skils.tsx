"use client";
import { FC, useState } from "react";
import scss from "./Skils.module.scss";
import OpenSkills from "./openSkills/OpenSkills";
import Image from "next/image";
import GptBlock from "./gptBlock/GptBlock";

interface SkillItem {
  src: string;
  keyword: string;
  description: string;
}

const blockTop: SkillItem[] = [
  { src: "/images/css.webp", keyword: "CSS", description: "CSS – веб үчүн стилдөө тили." },
  { src: "/images/html.jpg", keyword: "HTML", description: "HTML – веб үчүн структуралык тил." },
  { src: "/images/js.avif", keyword: "JavaScript", description: "JS – веб үчүн негизги программалоо тили." },
  { src: "/images/react.avif", keyword: "React", description: "React – UI китепканасы." },
  { src: "/images/ts.png", keyword: "TypeScript", description: "TS – JSке статикалык типтерди кошот." },
  { src: "/images/next.jpg", keyword: "Next.js", description: "Next – React үчүн SSR/SSG фреймворк." },
  { src: "/images/sass.png", keyword: "Sass", description: "Sass – CSS препроцессор." },
  { src: "/images/github.jpg", keyword: "GitHub", description: "GitHub – кодду сактоо жана версиялоо." },
  { src: "/images/node.png", keyword: "Node.js", description: "Node – серверде JS иштетет." },
];

const blockBottom: SkillItem[] = [
  { src: "/images/express.png", keyword: "Express", description: "Express – Node үчүн web framework." },
  { src: "/images/mongo.png", keyword: "MongoDB", description: "Mongo – NoSQL база." },
  { src: "/images/tailwind.webp", keyword: "Tailwind", description: "Tailwind – utility-first CSS." },
  { src: "/images/swagger.webp", keyword: "Swagger", description: "Swagger – API документациясы." },
  { src: "/images/vite.png", keyword: "Vite", description: "Vite – frontend dev сервер." },
  { src: "/images/prisma.jpg", keyword: "Prisma", description: "Prisma – ORM Node.js үчүн." },
  { src: "/images/fastify.png", keyword: "Fastify", description: "Fastify – Node.js framework." },
  { src: "/images/postman.png", keyword: "Postman", description: "Postman – API тестер." },
  { src: "/images/insomnia.png", keyword: "Insomnia", description: "Insomnia – API client." },
];

const Skils: FC = () => {
  const [hoverData, setHoverData] = useState<{
    visible: boolean;
    keyword: string;
    description: string;
    image: string;
    position: { x: number; y: number };
  }>({
    visible: false,
    keyword: "",
    description: "",
    image: "",
    position: { x: 0, y: 0 },
  });

  const handleMouseEnter = (e: React.MouseEvent, item: SkillItem) => {
    const rect = (e.target as HTMLElement).getBoundingClientRect();
    setHoverData({
      visible: true,
      keyword: item.keyword,
      description: item.description,
      image: item.src,
      position: { x: rect.right + 10, y: rect.top },
    });
  };

  const handleMouseLeave = () => {
    setHoverData(prev => ({ ...prev, visible: false }));
  };

  return (
    <section className={scss.skils}>
      <h2>Skills</h2>
      <div className={scss.content}>
<div className={scss.top}>
  <OpenSkills />
  
  <GptBlock
    visible={hoverData.visible}
    keyword={hoverData.keyword}
    description={hoverData.description}
    image={hoverData.image}
     position={{x:0, y:0}}
  />
</div>


        <div className={scss.mainContent}>
          {/* Жогорку ряд (оңго жылат) */}
          <div className={scss.slider}>
            <div className={`${scss.track} ${scss.right}`}>
              {blockTop.concat(blockTop).map((item, i) => (
                <div key={i} onMouseEnter={(e) => handleMouseEnter(e, item)} onMouseLeave={handleMouseLeave}>
                  <Image src={item.src} alt={item.keyword} width={320} height={120} />
                </div>
              ))}
            </div>
          </div>

          {/* Төмөнкү ряд (солго жылат) */}
          <div className={scss.slider}>
            <div className={`${scss.track} ${scss.left}`}>
              {blockBottom.concat(blockBottom).map((item, i) => (
                <div key={i} onMouseEnter={(e) => handleMouseEnter(e, item)} onMouseLeave={handleMouseLeave}>
                  <Image src={item.src} alt={item.keyword} width={320} height={120} />
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
