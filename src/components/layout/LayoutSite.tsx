"use client"
import { FC, ReactNode, useEffect } from "react";
import scss from "./LayoutSite.module.scss"
import Header from "./header/Header";
import Footer from "./footer/Footer";
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

    const handleMouseMove = (e: MouseEvent) => {
      light.style.background = `radial-gradient(circle at ${e.clientX}px ${e.clientY}px,  rgba(2, 223, 205, 0.16), transparent 20%)`;
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.body.removeChild(light);
    };
  }, []);
return (
    <div className={scss.LayoutSite}>
        <Header/>
        <main>{children}</main>
        <Footer/>
    </div>
)
}
export default LayoutSite