"use client";

import About from "@/sections/about";
import Contact from "@/sections/contact";
import Hero from "@/sections/hero";
import Project from "@/sections/project";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaChevronCircleUp } from "react-icons/fa";

export default function Home() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.5) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main>
      <Hero />
      <About />
      <Project />
      <Contact />
      {showButton && (
        <div className="fixed bottom-5 right-5 lg:bottom-10 lg:right-10">
          <Link href={"#hero"}>
            <FaChevronCircleUp className="size-10 rounded-full bg-white text-green-700 shadow-xl transition-all duration-300 ease-in-out hover:text-green-800" />
          </Link>
        </div>
      )}
    </main>
  );
}
