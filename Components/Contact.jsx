"use client";

import { motion, AnimatePresence } from "motion/react";
import { ArrowRight } from "lucide-react";
import { useState, useRef } from "react";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const container = {
  hidden: {},
  whileInView: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const Contact = () => {
  const [result, setResult] = useState("");
  const successRef = useRef(null);

  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    formData.append("access_key", "c618323d-8bcb-4f66-b95d-01e043184313");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    setResult(data.success ? "Success!" : "Error");

    setTimeout(() => {
      successRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }, 100);

    event.target.reset();
  };

  return (
    <section
      id="contact"
      className="w-full min-h-screen bg-white flex flex-col items-center justify-center px-6 py-20 scroll-mt-10 dark:bg-dark-theme"
    >
      {/* Heading */}

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="whileInView"
        viewport={{ once: false, amount: 0.3 }}
        className="text-center max-w-2xl"
      >
        <p className="text-gray-500 text-lg dark:text-white font-ovo">
          Connect with me
        </p>

        <h2 className="text-5xl md:text-6xl mt-2 font-ovo">Get in touch</h2>

        <p className="text-gray-500 mt-6 leading-8 dark:text-white font-ovo">
          I'd love to hear from you! If you have any questions, comments or
          feedback, please use the form below.
        </p>
      </motion.div>

      {/* Form */}

      <motion.form
        onSubmit={onSubmit}
        variants={container}
        initial="hidden"
        whileInView="whileInView"
        viewport={{ once: false, amount: 0.15 }}
        className="w-full max-w-2xl mt-12 font-ovo"
      >
        <div className="grid md:grid-cols-2 gap-5">
          <motion.input
            variants={item}
            type="text"
            name="name"
            placeholder="Enter your name"
            required
            className="border border-gray-300 rounded-lg px-5 py-4 outline-none focus:border-black transition dark:placeholder:text-white dark:border-white dark:focus:border-white"
          />

          <motion.input
            variants={item}
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            className="border border-gray-300 rounded-lg px-5 py-4 outline-none focus:border-black transition dark:placeholder:text-white dark:border-white dark:focus:border-white"
          />
        </div>

        <motion.textarea
          variants={item}
          rows="7"
          name="message"
          placeholder="Enter your message"
          required
          className="w-full mt-5 border border-gray-300 rounded-lg px-5 py-4 resize-none outline-none focus:border-black transition dark:placeholder:text-white dark:border-white dark:focus:border-white"
        />

        <motion.div variants={item} className="flex justify-center mt-8">
          <motion.button
            type="submit"
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="bg-black text-white px-8 py-4 rounded-full flex items-center gap-2 hover:bg-gray-800 transition dark:border dark:border-white"
          >
            Submit now
            <motion.div
              whileHover={{
                x: 4,
              }}
            >
              <ArrowRight size={18} />
            </motion.div>
          </motion.button>
        </motion.div>

        {/* Success Message */}

        <AnimatePresence>
          {result && (
            <motion.div
              ref={successRef}
              initial={{
                opacity: 0,
                y: 30,
                scale: 0.95,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: -20,
              }}
              transition={{
                type: "spring",
                stiffness: 180,
                damping: 18,
              }}
              className="mt-8 flex items-center gap-3 rounded-xl border border-green-200 bg-green-50 px-5 py-4 text-green-700 shadow-sm"
            >
              <motion.svg
                initial={{
                  scale: 0,
                  rotate: -180,
                }}
                animate={{
                  scale: 1,
                  rotate: 0,
                }}
                transition={{
                  delay: 0.2,
                  type: "spring",
                  stiffness: 250,
                }}
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 shrink-0 text-green-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </motion.svg>

              <div>
                <p className="font-semibold">Message Sent Successfully!</p>

                <p className="text-sm text-green-600">
                  Thanks for reaching out. I'll get back to you soon.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.form>
    </section>
  );
};

export default Contact;
