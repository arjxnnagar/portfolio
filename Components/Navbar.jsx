import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { assets } from "@/assets/assets";

const Navbar = ({darkMode,setDarkMode}) => {

    const sideMenuRef = useRef();
    const [isScroll,setIsScroll] = useState(false);

    const openMenu = ()=>{
        sideMenuRef.current.style.transform = 'translateX(-16rem)'
    }
    const closeMenu = () => {
      sideMenuRef.current.style.transform = "translateX(16rem)";
    };

    useEffect(()=>{
      window.addEventListener('scroll',()=>{
        if(scrollY> 50){
          setIsScroll(true);
        }else{
          setIsScroll(false);
        }
      })
    },[])

    const setTheme = ()=>{
      setDarkMode(!darkMode);
    }


  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
        <Image src={assets.header_bg_color} alt="" className="w-full" />
      </div>
      <nav
        className={` w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${isScroll ? " bg-white bg-opacity-50 backdrop-blur-lg shadow-sm duration-500 dark:bg-dark-theme dark:shadow-white/20" : ""}`}
      >
        <a href="#top">
          <h3 className="text-5xl font-bold font-ovo">
            arjxnagar<span className="text-red-500">.</span>
          </h3>
        </a>
        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll ? "" : " bg-white shadow-sm bg-opacity-50 duration-500 dark:border dark:border-white/50 dark:bg-transparent"}  `}
        >
          <li>
            <a href="#top" className="font-ovo">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="font-ovo">
              About me
            </a>
          </li>
          <li>
            <a href="#services" className="font-ovo">
              Services
            </a>
          </li>
          <li>
            <a href="#work" className="font-ovo">
              My Work
            </a>
          </li>
          <li>
            <a href="#contact" className="font-ovo">
              Contact Me
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <button onClick={setTheme}>
            {!darkMode ? (
              <Image src={assets.moon_icon} alt="" className="w-6" />
            ) : (
              <Image src={assets.sun_icon} alt="" className="w-6 color-black" />
            )}
          </button>

          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-ovo dark:border-white/50"
          >
            Contact
            <Image src={darkMode? assets.arrow_icon_dark:assets.arrow_icon} className="w-3" alt="" />{" "}
          </a>

          <button className="block md:hidden ml-3">
            <Image
              src={darkMode?assets.menu_white:assets.menu_black}
              className="w-6 "
              alt=""
              onClick={openMenu}
            />
          </button>
        </div>

        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 botton-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 dark:bg-dark-hover"
        >
          <div className="absolute right-6 top-6" onClick={closeMenu}>
            <Image
              src={darkMode?assets.close_white:assets.close_black}
              alt=""
              className="w-5 cursor-pointer"
            />
          </div>
          <li>
            <a href="#top" className="font-ovo" onClick={closeMenu}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="font-ovo" onClick={closeMenu}>
              About me
            </a>
          </li>
          <li>
            <a href="#services" className="font-ovo" onClick={closeMenu}>
              Services
            </a>
          </li>
          <li>
            <a href="#work" className="font-ovo" onClick={closeMenu}>
              My Work
            </a>
          </li>
          <li>
            <a href="#contact" className="font-ovo" onClick={closeMenu}>
              Contact Me
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
