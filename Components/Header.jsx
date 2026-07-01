import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4 mt-5">
      <div>
        <Image
          src={assets.profile_img}
          alt=""
          width={160}
          height={160}
          className="w-full h-full object-cover rounded-full"
        />
      </div>
      <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-ovo">
        Hi! I am Arjun Nagar
        <Image src={assets.hand_icon} alt="" className="w-6" />
      </h3>

      <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-ovo">
        Code. Create. Innovate.
      </h1>
      <p className="max-w-2xl mx-auto font-ovo text-lg">
        Aspiring Full-Stack Developer with a passion for creating modern web
        applications. I enjoy working with React, Next.js, Node.js, and C++,
        constantly improving my skills by building projects and solving
        challenging programming problems. I'm always eager to learn,
        collaborate, and create software that makes an impact.
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <a
          href="#contact"
          className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2"
        >
          Contact me{" "}
          <Image src={assets.right_arrow_white} alt="" className="w-4" />
        </a>
        <a
          href="/sample-resume.pdf"
          download
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2"
        >
          My resume <Image src={assets.download_icon} alt="" className="w-4" />
        </a>
      </div>
    </div>
  );
}

export default Header