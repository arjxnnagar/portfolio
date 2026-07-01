"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { workData } from "@/assets/assets";

export default function Work() {
  return (
    <section id="work" className="w-full px-6 lg:px-20 py-24">
      {/* Heading */}

      <div className="text-center max-w-3xl mx-auto font-ovo">
        <p className="text-gray-500 text-lg ">My portfolio</p>

        <h2 className="text-5xl font-serif mt-3">My latest work</h2>

        <p className="text-gray-500 mt-6 leading-8 font-ovo">
          Welcome to my web development portfolio! Explore a collection of
          projects showcasing my expertise in the world of development.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
        {workData.map((project, index) => (
          <div
            key={index}
            className="group relative h-120 overflow-hidden rounded-3xl cursor-pointer shadow-lg transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
            onClick={() =>
              window.open(project.live, "_blank", "noopener,noreferrer")
            }
          >
            <Image
              src={project.bgImage}
              alt={project.title}
              sizes="(max-width: 640px) 100vw,(max-width: 1024px) 50vw,25vw"
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />

            <div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-white/95 backdrop-blur-md p-5 shadow-2xl transition-all duration-500 group-hover:bottom-7">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {project.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    {project.description}
                  </p>
                </div>

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-lime-400 transition-all duration-300 group-hover:rotate-45 group-hover:scale-110">
                  <ArrowUpRight size={22} className="text-black" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Button */}

      <div className="flex justify-center mt-16">
        <button className="border rounded-full px-10 py-4 hover:bg-black hover:text-white transition">
          <a href="https://github.com/arjxnnagar">Show more →</a>
        </button>
      </div>
    </section>
  );
}
