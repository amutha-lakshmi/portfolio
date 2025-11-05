import React, { useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_kglyiic",
        "template_tfb8115",
        form.current,
        "QgeEQq3d8_vZJDTxi"
      )
      .then(
        () => {
          alert("✅ Message Sent Successfully!");
          form.current.reset();
        },
        (error) => {
          alert("❌ Failed to send message. Please try again.");
          console.log(error);
        }
      );
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center items-center py-20 px-6"
    >
      <motion.h2
        className="text-4xl font-bold text-indigo-400 mb-8"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Get In Touch
      </motion.h2>

      <motion.p
        className="text-gray-400 mb-10 text-center max-w-xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Please contact me directly at{" "}
        <a
          href="mailto:amutharaj0597@gmail.com"
          className="text-indigo-400 hover:underline"
        >
          amutharaj0597@gmail.com
        </a>{" "}
        or send a message through this form.
      </motion.p>

      <motion.form
        ref={form}
        onSubmit={sendEmail}
        className="w-full max-w-md space-y-5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <input
          type="text"
          name="from_name"
          placeholder="Your Name"
          required
          className="w-full p-3 rounded-lg bg-[#111827]/60 border border-gray-600 focus:border-indigo-400 outline-none text-white"
        />
        <input
          type="email"
          name="from_email"
          placeholder="Your Email"
          required
          className="w-full p-3 rounded-lg bg-[#111827]/60 border border-gray-600 focus:border-indigo-400 outline-none text-white"
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          required
          className="w-full p-3 rounded-lg bg-[#111827]/60 border border-gray-600 focus:border-indigo-400 outline-none text-white"
        />
        <textarea
          rows="4"
          name="message"
          placeholder="Message"
          required
          className="w-full p-3 rounded-lg bg-[#111827]/60 border border-gray-600 focus:border-indigo-400 outline-none text-white"
        ></textarea>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-semibold py-3 rounded-full hover:opacity-90 transition"
        >
          Send Message
        </button>
      </motion.form>

      <motion.footer
        className="mt-16 text-gray-500 text-sm border-t border-gray-700 pt-6 text-center w-full"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        © {new Date().getFullYear()} Amutha Lakshmi. All rights reserved.
      </motion.footer>
    </section>
  );
};

export default Contact;
