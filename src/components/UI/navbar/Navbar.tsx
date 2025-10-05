"use client";
import React from "react";
import scss from "./NavBar.module.scss";
import { BsCaretRight } from "react-icons/bs";
import { useAppSelector, useAppDispatch } from "@/hooks/hooks";
import { handleNavbar } from "@/toolkit/reduxSlice";
import { motion, AnimatePresence } from "framer-motion";
import ResumeButton from "../resumeButton/ResumeButton";

const Navbar = () => {
  const { navbar } = useAppSelector((s) => s.navbarStore);
  const dispatch = useAppDispatch();

  if (!navbar) return null; // display:none ордуна

  return (
    <AnimatePresence>
      {navbar && (
        <motion.div
          className={scss.container}
          onClick={() => dispatch(handleNavbar(false))}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className={scss.navbar}
            onClick={(e) => e.stopPropagation()}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
          >
            <a href="#about" onClick={() => dispatch(handleNavbar(false))}>
              <span>
                <BsCaretRight />
              </span>
              About
            </a>
            <a href="#" onClick={() => dispatch(handleNavbar(false))}>
              <span>
                <BsCaretRight />
              </span>
              Experience
            </a>
            <a href="#projects" onClick={() => dispatch(handleNavbar(false))}>
              <span>
                <BsCaretRight />
              </span>
              Projects
            </a>
            <a href="#contact" onClick={() => dispatch(handleNavbar(false))}>
              <span>
                <BsCaretRight />
              </span>
              Contact
            </a>
            <ResumeButton title="Resume"/>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Navbar;
