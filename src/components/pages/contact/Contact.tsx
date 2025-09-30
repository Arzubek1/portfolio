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
          <p>Let's build something awesome together</p>
        </motion.div>

        <motion.form
          className={scss.form}
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </motion.form>

        <motion.div
          className={scss.socials}
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <a
            href="https://github.com/username"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/username"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
          <a href="https://t.me/username" target="_blank" rel="noreferrer">
            <FaTelegramPlane />
          </a>
          <a href="mailto:example@gmail.com">
            <FaEnvelope />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
