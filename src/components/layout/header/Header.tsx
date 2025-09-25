"use client"
import Link from "next/link";
import React, { useState } from "react";
import scss from "./Header.module.scss";
import ResumeButton from "@/components/UI/resumeButton/ResumeButton";

const navItems = [
  { label: "About", href: "/" },
  { label: "Skills", href: "/skills" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

const Header = () => {
  const [hovered, setHovered] = useState<string | null>(null);

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
          <nav className={scss.nav}>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={hovered === item.href ? scss.active : scss.inactive}
                onMouseEnter={() => setHovered(item.href)}
                onMouseLeave={() => setHovered(null)}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right start */}
          <div className={scss.right}>
            {/* theme icon start*/}
            <div className={scss.theme_icon_block}>
              <button className={scss.theme__icon}>
                <span></span>
                <span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
                <span></span>
              </button>
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
    </header>
  );
};

export default Header;
