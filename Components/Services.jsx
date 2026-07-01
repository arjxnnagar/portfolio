import {
  Globe,
  MonitorSmartphone,
  Server,
  Code2,
  ArrowRight,
} from "lucide-react";

import { services } from "@/assets/assets";

const Services = () => {
  return (
    <section id="services" className="w-full px-[12%] py-20 scroll-mt-20">

      <p className="text-center font-ovo text-lg">What I Offer</p>
      <h2 className="text-5xl font-ovo text-center mt-2">My Services</h2>

      <p className="max-w-2xl mx-auto text-center mt-6 text-gray-600 leading-8 font-ovo">
        I build modern, responsive, and scalable web applications with a strong
        focus on performance, clean code, and exceptional user experience.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14 font-ovo">
        {services.map((service, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-xl p-8
            hover:bg-light-hover
            hover:-translate-y-2
            hover:shadow-black
            transition-all duration-300 cursor-pointer"
          >
            <div className="w-14 h-14 rounded-lg bg-pink-500 text-white flex items-center justify-center">
              {service.icon}
            </div>

            <h3 className="text-2xl mt-6 font-semibold">{service.title}</h3>

            <p className="text-gray-600 mt-4 leading-7 text-sm">
              {service.description}
            </p>

            <button className="flex items-center gap-2 mt-8 text-sm font-medium group">
              Read More
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition"
              />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
