"use client";

import React from "react";
import { motion } from "motion/react";
import { Mail } from "lucide-react";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
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
    y: 20,
  },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const Footer = () => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="whileInView"
      viewport={{ once: false, amount: 0.2 }}
      className="w-full max-w-7xl mx-auto font-ovo"
    >
      {/* Top */}

      <motion.div
        variants={fadeUp}
        className="mt-12 flex flex-col items-center"
      >
        <motion.h3
          whileHover={{
            scale: 1.03,
          }}
          className="text-5xl font-bold"
        >
          arjxnagar<span className="text-red-500">.</span>
        </motion.h3>

        <motion.div
          variants={item}
          className="flex items-center gap-3 text-gray-500 mt-3"
        >
          <motion.div
            animate={{
              y: [0, -3, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Mail size={20} />
          </motion.div>

          <span>arjunnagar012@gmail.com</span>
        </motion.div>
      </motion.div>

      {/* Bottom */}

      <motion.footer
        variants={fadeUp}
        className="w-full max-w-7xl border-t mt-20 mb-20 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm gap-4"
      >
        <p>© 2026 Arjun Nagar. All rights reserved.</p>

        <motion.div variants={container} className="flex gap-8">
          {[
            {
              name: "Leetcode",
              href: "https://leetcode.com/u/Arjxnnagar/",
            },
            {
              name: "Github",
              href: "https://github.com/arjxnnagar",
            },
            {
              name: "LinkedIn",
              href: "https://www.linkedin.com/in/arjxnnagar",
            },
          ].map((link) => (
            <motion.a
              key={link.name}
              variants={item}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                y: -3,
                scale: 1.05,
              }}
              transition={{
                duration: 0.2,
              }}
              className="hover:text-black dark:hover:text-white transition"
            >
              {link.name}
            </motion.a>
          ))}
        </motion.div>
      </motion.footer>
    </motion.div>
  );
};

export default Footer;
