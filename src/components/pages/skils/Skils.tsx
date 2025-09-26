import { FC } from "react";
import scss from "./Skils.module.scss";
import OpenSkills from "./openSkills/OpenSkills";
import Image from "next/image";

const blockTop = [
  <Image src={"/images/css.webp"} alt="img" />,
  <Image src={"/images/html.jpg"} alt="img" />,
  <Image src={"/images/js.avif"} alt="img" />,
  <Image src={"/images/react.avif"} alt="img" />,
  <Image src={"/images/ts.png"} alt="img" />,
  <Image src={"/images/next.jpg"} alt="img" />,
  <Image src={"/images/sass.png"} alt="img" />,
  <Image src={"/images/github.jpg"} alt="img" />,
  <Image src={"/images/node.png"} alt="img" />,
];
const blockBottom = [
  <Image src={"/images/express.png"} alt="img" />,
  <Image src={"/images/mongo.png"} alt="img" />,
  <Image src={"/images/tailwind.webp"} alt="img" />,
  <Image src={"/images/swagger.webp"} alt="img" />,
  <Image src={"/images/vite.png"} alt="img" />,
  <Image src={"/images/prisma.jpg"} alt="img" />,
  <Image src={"/images/fastify.png"} alt="img" />,
  <Image src={"/images/postman.png"} alt="img" />,
  <Image src={"/images/insomnia.png"} alt="img" />,
];

const Skils: FC = () => {
  
  return (
    <section className={scss.skils}>
      <h2>Skills</h2>
      <div className={scss.content}>
        <div className={scss.top}>
          <OpenSkills />
        </div>
        <div className={scss.mainContent}>
          <div className={scss.mainTop}>

            {blockTop.map((img, index) => (

              <div className={scss.img} key={index} >
                <Image
                  src={img.props.src}
                  alt={img.props.alt}
                  width={320} // px
                  height={120} // px
                  style={{ objectFit: "cover" }}
                />
              </div>
          
            ))}
      


          </div>
          <div className={scss.mainBottom}>
            {blockBottom.map((img, index) => (
              <div className={scss.img} key={index}>
                <Image
                  src={img.props.src}
                  alt={img.props.alt}
                  width={320} // px
                  height={120} // px
                  style={{ objectFit: "cover" }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skils;
