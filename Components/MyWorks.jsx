"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { workData } from "@/assets/assets";

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
      staggerChildren: 0.2,
    },
  },
};

const card = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.96,
  },
  whileInView: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function Work() {
  return (
    <section id="work" className="w-full px-6 lg:px-20 py-24">
      {/* Heading */}

      <motion.div
        initial="hidden"
        whileInView="whileInView"
        viewport={{ once: false, amount: 0.3 }}
        variants={fadeUp}
        className="text-center max-w-3xl mx-auto font-ovo"
      >
        <p className="text-gray-500 text-lg dark:text-white">My portfolio</p>

        <h2 className="text-5xl font-serif mt-3">My latest work</h2>

        <p className="text-gray-500 mt-6 leading-8 font-ovo dark:text-white">
          Welcome to my web development portfolio! Explore a collection of
          projects showcasing my expertise in the world of development.
        </p>
      </motion.div>



      <motion.div
        variants={container}
        initial="hidden"
        whileInView="whileInView"
        viewport={{ once: false, amount: 0.15 }}
        className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-8 mt-10 font-ovo"
      >
        {workData.map((project, index) => (
          <motion.div
            key={index}
            variants={card}
            whileHover={{
              y: -10,
              transition: { duration: 0.25 },
            }}
            className="group relative h-80 overflow-hidden rounded-3xl cursor-pointer shadow-lg hover:shadow-black dark:hover:shadow-white"
            onClick={() =>
              window.open(project.live, "_blank", "noopener,noreferrer")
            }
          >
            <motion.div
              whileHover={{
                scale: 1.08,
              }}
              transition={{
                duration: 0.5,
              }}
              className="absolute inset-0"
            >
              <Image
                src={project.bgImage}
                alt={project.title}
                fill
                sizes="(max-width:640px)100vw,(max-width:1024px)50vw,25vw"
                className="object-cover"
              />
            </motion.div>

            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />

            <motion.div
              whileHover={{
                y: -8,
              }}
              transition={{ duration: 0.25 }}
              className="absolute bottom-5 left-5 right-5 rounded-2xl bg-white/95 backdrop-blur-md p-5 shadow-2xl dark:bg-dark-theme"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {project.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-white">
                    {project.description}
                  </p>
                </div>

                <motion.div
                  whileHover={{
                    rotate: 45,
                    scale: 1.1,
                  }}
                  transition={{ duration: 0.25 }}
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-lime-400"
                >
                  <ArrowUpRight size={22} className="text-black" />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* Button */}

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="whileInView"
        viewport={{ once: false }}
        className="flex justify-center mt-16"
      >
        <motion.button
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{
            scale: 0.95,
          }}
          className="border rounded-full px-10 py-4 hover:bg-black hover:text-white transition"
        >
          <a
            href="https://github.com/arjxnnagar"
            target="_blank"
            rel="noopener noreferrer"
          >
            Show more →
          </a>
        </motion.button>
      </motion.div>
    </section>
  );
}
