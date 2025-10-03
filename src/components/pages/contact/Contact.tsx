"use client";
import React from "react";
import scss from "./Contact.module.scss";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaTelegramPlane,
  FaEnvelope,
} from "react-icons/fa";
import AnimatedTitle from "@/components/UI/animatedTitle/AnimatedTitle";
import ResumeButton from "@/components/UI/resumeButton/ResumeButton";
import Send from "@/components/UI/send/Send";

const Contact = () => {
  return (
    <section className={scss.contact} id="contact">
      <div className="container">
        <motion.div
          className={scss.title}
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className={scss.animatedTitle}>
            <AnimatedTitle text="Contact"  delayStep={0.2} />
          </div>
          <p>Let's build something awesome together!</p>
        </motion.div>

        <motion.form
          className={scss.form}
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <Send/>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
