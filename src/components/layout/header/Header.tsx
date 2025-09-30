"use client";
import Link from "next/link";
import React, { FC, useEffect, useState } from "react";
import scss from "./Header.module.scss";
import ResumeButton from "@/components/UI/resumeButton/ResumeButton";
import { IoSunny } from "react-icons/io5";
import { RiMoonFill } from "react-icons/ri";
interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "About", href: "/" },
  { label: "Experience", href: "/skills" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];


const Header: FC = () => {
  const [hovered, setHovered] = useState<string | null>(null);
  const [theme, setTheme] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;

      const scrollBar = document.getElementById("scrollBar");
      if (scrollBar) {
        scrollBar.style.width = `${scrollPercent}%`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={scss.header}>
      <div className="container">
        <div className={scss.content}>
          {/* desktopLogo start */}
          <h2 className={scss.desktopLogo}>
            Port<span>folio</span>
          </h2>
          {/* desktopLogo end */}

          {/* mobileLogo start */}
          <h2 className={scss.mobileLogo}>
            P<span>F</span>
          </h2>
          {/* mobileLogo end */}


          {/* Right start */}
          <div className={scss.right}>
            
          <nav className={scss.nav}>
            {navItems.map((item, idx) => (
              <Link
                key={item.href}
                href={item.href}
                className={hovered === item.href ? scss.active : scss.inactive}
                onMouseEnter={() => setHovered(item.href)}
                onMouseLeave={() => setHovered(null)}
              >
                <span>{`0${idx + 1}.`}</span>{item.label}
              </Link>
            ))}
          </nav>
            {/* theme icon start*/}
            <div
              className={`${scss.themeIcon} ${!theme ? scss.dark : scss.light}`}
              onClick={() => setTheme(!theme)}
            >
              {theme ? (
                <h3 className={scss.sunIcon}>
                  <IoSunny />
                </h3>
              ) : (
                <h3 className={scss.moonIcon}>
                  <RiMoonFill />
                </h3>
              )}
            </div>
            {/* theme icon end*/}

            <ResumeButton title="Resume" />

            {/* mobileresponsiveMenu start */}
            <div className={scss.mobileMenu_block}>
              <label className={scss.container}>
                <input type="checkbox" aria-label="Toggle mobile menu" />
                <div className={scss.checkmark}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </label>
            </div>
            {/* mobileresponsiveMenu end */}
          </div>
          {/* Right end */}
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
