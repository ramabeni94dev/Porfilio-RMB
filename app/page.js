"use client";
import React, { useState, useEffect, useRef } from "react";
import { AnimatePresence } from "framer-motion";
import TopNavbar from "./Components/Navbar/TopNavbar";
import BottomNavbar from "./Components/Navbar/BottomNavbar";
import ProfileCard from "./Components/ProfileCard/ProfileCard";
import DateDisplay from "./Components/DateDisplay/DateDisplay";
import About from "./Components/SkillSet/SkillSet";
import Experience from "./Components/Experience/Experience";
import Projects from "./Components/Projects/Projects";
import ConnectMe from "./Components/ConnectMe/ConnectMe";
import Footer from "./Components/Footer/Footer";

export default function Home() {
  // Estado para determinar si el TopNavbar es visible
  const [topNavbarVisible, setTopNavbarVisible] = useState(true);
  const topNavbarRef = useRef(null);

  useEffect(() => {
    const target = topNavbarRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // entry.isIntersecting es true cuando el TopNavbar se ve en el viewport
        setTopNavbarVisible(entry.isIntersecting);
      },
      { threshold: 0 } // Se dispara en cuanto el elemento entra o sale del viewport
    );

    observer.observe(target);

    return () => {
      observer.unobserve(target);
    };
  }, []);

  return (
    <main className="p-5">
      {/* Envolvemos TopNavbar en un div con ref para detectar su visibilidad */}
      <div ref={topNavbarRef}>
        <TopNavbar />
      </div>

      {/* AnimatePresence para manejar la animación de entrada/salida del BottomNavbar */}
      <AnimatePresence>
        {!topNavbarVisible && <BottomNavbar key="bottom-navbar" />}
      </AnimatePresence>

      <ProfileCard />
      <DateDisplay />
      <About />
      <Experience />
      <Projects />
      <ConnectMe />
      <Footer />
    </main>
  );
}
