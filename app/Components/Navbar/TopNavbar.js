import React from "react";
import { FaEnvelope, FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";

const TopNavbar = () => {
  return (
    <nav className=" text-white w-full p-4 flex flex-wrap justify-between items-center">
      <div className="flex flex-col md:flex-row md:items-center">
        <h1 className="text-lg font-bold">Ramiro Benitez</h1>
        <p className="md:ml-4">Web Developer</p>
      </div>
      <div className="flex gap-2 md:gap-4">
        <a
          href="mailto:ramiromarcelobenitez@gmail.com"
          className="hover:bg-gray-700 p-2 rounded-full transition-colors duration-150"
        >
          <FaEnvelope className="text-xl" />
        </a>
        <a
          href="https://www.linkedin.com/in/ramabeni94/"
          className="hover:bg-gray-700 p-2 rounded-full transition-colors duration-150"
        >
          <FaLinkedin className="text-xl" />
        </a>
        <a
          href="https://github.com/ramabeni94dev"
          className="hover:bg-gray-700 p-2 rounded-full transition-colors duration-150"
        >
          <FaGithub className="text-xl" />
        </a>
        <a
          href="https://wa.me/541161031190"
          className="hover:bg-gray-700 p-2 rounded-full transition-colors duration-150"
        >
          <FaWhatsapp className="text-xl" />
        </a>
      </div>
    </nav>
  );
};

export default TopNavbar;
