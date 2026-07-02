"use client"

import About from "@/Components/About";
import Contact from "@/Components/Contact";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import Work from "@/Components/MyWorks";
import Navbar from "@/Components/Navbar";
import Services from "@/Components/Services";
import { useEffect ,useState} from "react";


export default function Home() {

  const [darkMode,setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("Theme");

    if (savedTheme === "dark" || window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setDarkMode(true);
    }
  }, []);

  useEffect(()=>{
    if(darkMode){
      document.documentElement.classList.add('dark');
      localStorage.setItem("Theme","dark");
    }else{
      document.documentElement.classList.remove("dark");
      localStorage.removeItem("Theme");
    }
  },[darkMode])

  return (
    <>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Header darkMode={darkMode} />
      <About darkMode={darkMode} />
      <Services darkMode={darkMode} />
      <Work darkMode={darkMode} />
      <Contact darkMode={darkMode} />
      <Footer darkMode={darkMode}  />
    </>
  );
}
