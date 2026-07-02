import { assets } from "@/assets/assets";
import { ArrowRight, Download } from "lucide-react";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const zoomIn = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const Header = () => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4 mt-5"
    >
      {/* Profile Image */}
      <motion.div variants={zoomIn}>
        <Image
          src={assets.profile_img}
          alt=""
          width={160}
          height={160}
          className="w-full h-full object-cover rounded-full"
        />
      </motion.div>

      {/* Greeting */}
      <motion.h3
        variants={fadeUp}
        className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-ovo"
      >
        Hi! I am Arjun Nagar
        <motion.div
          animate={{ rotate: [0, 20, -10, 20, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatDelay: 2,
          }}
        >
          <Image src={assets.hand_icon} alt="" className="w-6" />
        </motion.div>
      </motion.h3>

      {/* Heading */}
      <motion.h1
        variants={fadeUp}
        className="text-3xl sm:text-6xl lg:text-[66px] font-ovo"
      >
        Code. Create. Innovate.
      </motion.h1>

      {/* Description */}
      <motion.p
        variants={fadeUp}
        className="max-w-2xl mx-auto font-ovo text-lg"
      >
        Aspiring Full-Stack Developer with a passion for creating modern web
        applications. I enjoy working with React, Next.js, Node.js, and C++,
        constantly improving my skills by building projects and solving
        challenging programming problems. I'm always eager to learn,
        collaborate, and create software that makes an impact.
      </motion.p>

      {/* Buttons */}
      <motion.div
        variants={fadeUp}
        className="flex flex-col sm:flex-row items-center gap-4 mt-4"
      >
        <motion.a
          href="#contact"
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{
            scale: 0.95,
          }}
          className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2"
        >
          Contact me
          <ArrowRight className="w-4" />
        </motion.a>

        <motion.a
          href="/resume.pdf"
          download
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{
            scale: 0.95,
          }}
          className="px-10 py-3 border dark:border-black bg-white rounded-full border-gray-500 flex items-center gap-2 text-black"
        >
          My resume
          <Download className="w-4" />
        </motion.a>
      </motion.div>
    </motion.div>
  );
};

export default Header;
