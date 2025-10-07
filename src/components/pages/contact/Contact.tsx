"use client";
import React, { FC, useState } from "react";
import scss from "./Contact.module.scss";
import { motion } from "framer-motion";
import AnimatedTitle from "@/components/UI/animatedTitle/AnimatedTitle";
import Send from "@/components/UI/send/Send";
import Swal from "sweetalert2";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact: FC = () => {
  // Form state
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  // Form change handler
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Telegramга жөнөтүү
  const toTelegram = async () => {
    const botToken = "8022276168:AAHxRYyRj1clxI_vW37BknqlwMjs2RB1r8w";
    const chatId = "-1002987101327"; // сенин каналдын ID
    const text = `New message from contact form:\n\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`;

    const url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(
      text
    )}`;

    try {
      if (
        !formData.name.trim() ||
        !formData.email.trim() ||
        !formData.message.trim()
      ) {
      } else {
        await fetch(url);
        Swal.fire({
          title: "Спасибо!",
          text: "Ваше сообщение успешно отправлено. Я свяжусь с вами в ближайшее время!",
          icon: "success",
          confirmButtonText: "Ок",
        });
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (error) {
      console.error("Telegram send error:", error);
      alert("Failed to send message.");
    }
  };

  // Form submit handler
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toTelegram();
  };

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
            <AnimatedTitle text="Contact" delayStep={0.2} />
          </div>
          <p>Давайте создадим что-нибудь потрясающее вместе!</p>
        </motion.div>

        <motion.form
          className={scss.form}
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                e.currentTarget.form?.requestSubmit();
              }
            }}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                e.currentTarget.form?.requestSubmit();
              }
            }}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                e.currentTarget.form?.requestSubmit();
              }
            }}
            required
          />
          <Send />
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
