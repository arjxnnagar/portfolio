import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { services } from "@/assets/assets";

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
      staggerChildren: 0.18,
    },
  },
};

const card = {
  hidden: {
    opacity: 0,
    y: 50,
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

const Services = () => {
  return (
    <section id="services" className="w-full px-[12%] pb-20 pt-5 scroll-mt-20">
      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="whileInView"
        viewport={{ once: false, amount: 0.3 }}
        className="text-center font-ovo text-lg"
      >
        What I Offer
      </motion.p>

      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="whileInView"
        viewport={{ once: false, amount: 0.3 }}
        className="text-5xl font-ovo text-center mt-2"
      >
        My Services
      </motion.h2>

      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="whileInView"
        viewport={{ once: false, amount: 0.3 }}
        className="max-w-2xl mx-auto text-center mt-6 text-gray-600 leading-8 font-ovo dark:text-white"
      >
        I build modern, responsive, and scalable web applications with a strong
        focus on performance, clean code, and exceptional user experience.
      </motion.p>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="whileInView"
        viewport={{ once: false, amount: 0.15 }}
        className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6 mt-14 font-ovo"
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={card}
            whileHover={{
              y: -10,
              scale: 1.03,
            }}
            transition={{ duration: 0.25 }}
            className="border border-gray-300 rounded-xl p-8
            hover:bg-light-hover
            hover:shadow-lg
            cursor-pointer
            dark:border-white
            dark:hover:shadow-white
            dark:hover:bg-dark-hover"
          >
            <motion.div
              whileHover={{
                rotate: 12,
                scale: 1.1,
              }}
              transition={{ duration: 0.25 }}
              className="w-14 h-14 rounded-lg bg-pink-500 text-white flex items-center justify-center"
            >
              {service.icon}
            </motion.div>

            <h3 className="text-2xl mt-6 font-semibold">{service.title}</h3>

            <p className="text-gray-600 mt-4 leading-7 text-sm dark:text-white">
              {service.description}
            </p>

            <button className="flex items-center gap-2 mt-8 text-sm font-medium group">
              Read More
              <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <ArrowRight size={18} />
              </motion.div>
            </button>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Services;
