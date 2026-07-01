"use client"

import About from "@/Components/About";
import Header from "@/Components/Header";
import Work from "@/Components/MyWorks";
import Navbar from "@/Components/Navbar";
import Services from "@/Components/Services";


export default function Home() {
  return (
    <>
      <Navbar />
      <Header/>
      <About />
      <Services />
      <Work />
    </>
  );
}
