"use client";
import { FC } from "react";
import scss from "./Footer.module.scss";

const Footer: FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={scss.footer}>
      <div className="container">
        <div className={scss.bottom}>
          <p>© {currentYear} Portfolio. All rights reserved.</p>
          <p className={scss.made}>Made with ❤️ using Next.js</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
