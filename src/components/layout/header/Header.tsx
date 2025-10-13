"use client";
import Link from "next/link";
import React, { FC, useEffect, useState } from "react";
import scss from "./Header.module.scss";
import ResumeButton from "@/components/UI/resumeButton/ResumeButton";
import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import { handleNavbar } from "@/toolkit/reduxSlice";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
const MotionLink = motion(Link);
interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Главное", href: "#" },
  { label: "Обо мне", href: "#about" },
  { label: "Проекты", href: "#projects" },
  { label: "Контакты", href: "#contact" },
];

const textContainer = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const textItem = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0 },
};

const Header: FC = () => {
  const [hovered, setHovered] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const { navbar } = useAppSelector((s) => s.navbarStore);
  const router = useRouter();
  const dispatch = useAppDispatch();
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;

      const scrollBar = document.getElementById("scrollBar");
      if (scrollBar) {
        scrollBar.style.width = `${scrollPercent}%`;
      }

      // header shrink логика
      if (scrollTop > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${scss.header} ${scrolled ? scss.scrolled : ""}`}>
      <div className="container">
        <div className={scss.content}>
          {/* desktopLogo start */}
          <h2 className={scss.desktopLogo} onClick={() => router.push("/")}>
            Port<span>folio</span>
          </h2>
          {/* desktopLogo end */}

          {/* Right start */}
          <div className={scss.right}>
            <motion.nav
              className={scss.nav}
              variants={textContainer}
              initial="hidden"
              animate="visible"
            >
              {navItems.map((item, idx) => (
                <MotionLink
                  variants={textItem}
                  key={item.href}
                  href={item.href}
                  className={
                    hovered === item.href ? scss.active : scss.inactive
                  }
                  onMouseEnter={() => setHovered(item.href)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <span>{`0${idx + 1}.`}</span>
                  {item.label}
                </MotionLink>
              ))}
            </motion.nav>

            <ResumeButton title="Resume" />
          </div>
          {/* Right end */}
          {/* mobileresponsiveMenu start */}
          <div className={scss.mobileMenu_block}>
            <label className={scss.container}>
              <input
                type="checkbox"
                aria-label="Toggle mobile menu"
                checked={navbar}
                onChange={() => dispatch(handleNavbar(!navbar))}
              />
              <div className={scss.checkmark}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </label>
          </div>
          {/* mobileresponsiveMenu end */}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={scss.headerScrollBar}>
        <div className={scss.scroll_Bar} id="scrollBar"></div>
      </div>
    </header>
  );
};

export default Header;
