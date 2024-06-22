"use client";
import React, { useState, useEffect } from "react";
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
  const [showBottomNav, setShowBottomNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const show = window.pageYOffset > 100;
      setShowBottomNav(show);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className="p-5">
      <TopNavbar />
      {showBottomNav && <BottomNavbar />}
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
