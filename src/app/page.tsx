import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import WhatWeBuild from "@/components/sections/WhatWeBuild";
import Vision from "@/components/sections/Vision";
import WhyJiora from "@/components/sections/WhyJiora";
import Products from "@/components/sections/Products";
import Process from "@/components/sections/Process";
import WhoWeWorkWith from "@/components/sections/WhoWeWorkWith";
import Technology from "@/components/sections/Technology";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhatWeBuild />
        <Vision />
        <WhyJiora />
        <Products />
        <Process />
        <WhoWeWorkWith />
        <Technology />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
