import Image from "next/image";
import { motion } from "motion/react";
import { assets, infoList, toolsData } from "@/assets/assets";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -80 },
  whileInView: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 80 },
  whileInView: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
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

const card = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const About = ({ darkMode }) => {
  return (
    <div id="about" className="w-full px-[12%] py-5 scroll-my-20">
      <motion.h4
        variants={fadeUp}
        initial="hidden"
        whileInView="whileInView"
        viewport={{ once: false, amount: 0.3 }}
        className="text-center mb-2 text-lg font-ovo"
      >
        Introduction
      </motion.h4>

      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="whileInView"
        viewport={{ once: false, amount: 0.3 }}
        className="text-center text-5xl font-ovo"
      >
        About me
      </motion.h2>

      <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
        {/* Left Image */}
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          whileInView="whileInView"
          viewport={{ once: false, amount: 0.3 }}
          className="w-64 sm:w-80 rounded-3xl max-w-none"
        >
          <Image
            src={assets.user_image}
            alt="user"
            className="w-full rounded-3xl"
          />
        </motion.div>

        {/* Right Content */}
        <motion.div
          variants={fadeRight}
          initial="hidden"
          whileInView="whileInView"
          viewport={{ once: false, amount: 0.2 }}
          className="flex-1"
        >
          <p className="mb-10 max-w-2xl font-ovo">
            I am a passionate Full Stack Developer with a strong interest in
            building responsive, scalable, and user-friendly web applications. I
            enjoy transforming ideas into interactive digital experiences using
            modern technologies like React, Next.js, Node.js, and Tailwind CSS.
            Alongside web development, I continuously sharpen my problem-solving
            skills through Data Structures and Algorithms.
          </p>

          {/* Info Cards */}
          <motion.ul
            variants={container}
            initial="hidden"
            whileInView="whileInView"
            viewport={{ once: false, amount: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl"
          >
            {infoList.map(({ icon, iconDark, title, description }, idx) => (
              <motion.li
                variants={card}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                }}
                key={idx}
                className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-light-hover duration-300 hover:shadow-lg dark:border-white dark:hover:shadow-white dark:hover:bg-dark-hover"
              >
                <Image
                  src={darkMode ? iconDark : icon}
                  alt={title}
                  className="w-7 mt-3"
                />

                <h3 className="my-4 font-semibold text-gray-700 dark:text-white">
                  {title}
                </h3>

                <p className="text-sm text-gray-600 dark:text-white font-ovo">
                  {description}
                </p>
              </motion.li>
            ))}
          </motion.ul>

          {/* Tools */}
          <motion.h4
            variants={fadeUp}
            initial="hidden"
            whileInView="whileInView"
            viewport={{ once: false }}
            className="my-6 text-gray-700 font-ovo dark:text-white"
          >
            Tools I use
          </motion.h4>

          <motion.ul
            variants={container}
            initial="hidden"
            whileInView="whileInView"
            viewport={{ once: false }}
            className="flex items-center gap-3 sm:gap-5"
          >
            {toolsData.map((tool, idx) => (
              <motion.li
                key={idx}
                variants={card}
                whileHover={{
                  scale: 1.15,
                  rotate: 5,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:bg-light-hover duration-300 hover:shadow-lg dark:border-white dark:hover:shadow-white dark:hover:bg-dark-hover"
              >
                <Image src={tool} alt="Tool" className="w-5 sm:w-7" />
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
