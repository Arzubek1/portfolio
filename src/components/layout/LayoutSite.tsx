"use client"
import { FC, ReactNode, useEffect } from "react";
import scss from "./LayoutSite.module.scss"
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Socials from "../UI/socials/Socials";
interface LayoutSiteProps {
    children: ReactNode
}

const LayoutSite: FC<LayoutSiteProps> = ({children}) => {
useEffect(() => {
  const light = document.createElement("div");
  light.id = "light";
  light.style.position = "fixed";
  light.style.top = "0";
  light.style.left = "0";
  light.style.width = "100%";
  light.style.height = "100%";
  light.style.pointerEvents = "none";
  light.style.zIndex = "9999";
  document.body.appendChild(light);

  let targetX = 0, targetY = 0;
  let currentX = 0, currentY = 0;

  const handleMouseMove = (e: MouseEvent) => {
    targetX = e.clientX;
    targetY = e.clientY;
  };

  function animate() {
    // коэффициентти кичине чоңойттук (0.3)
    currentX += (targetX - currentX) * 0.3;
    currentY += (targetY - currentY) * 0.3;

    light.style.background = `radial-gradient(circle at ${currentX}px ${currentY}px, rgba(2,223,205,0.16), transparent 200px)`;

    requestAnimationFrame(animate);
  }

  document.addEventListener("mousemove", handleMouseMove);
  animate();

  return () => {
    document.removeEventListener("mousemove", handleMouseMove);
    document.body.removeChild(light);
  };
}, []);


return (
    <div className={scss.LayoutSite}>
        <Header/>
        <main>{children}</main>
        <Socials/>
        <Footer/>
    </div>
)
}
export default LayoutSite