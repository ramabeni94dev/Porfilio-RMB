import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";

const BottomNavbar = () => {
  const navVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.nav
      className="fixed inset-x-0 bottom-0 bg-white text-black flex justify-center p-4 mx-auto w-full max-w-screen-sm mb-5 rounded-full shadow-2xl z-50"
      style={{ boxShadow: "inset 0 0 10px rgba(0, 0, 0, 0.40)" }} // Sombra interna
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={navVariants}
      transition={{ duration: 0.75, ease: "easeOut" }}
    >
      <div className="flex gap-4 sm:gap-8">
        <a
          href="mailto:ramiromarcelobenitez@gmail.com"
          className="flex items-center gap-2 hover:bg-gray-100 hover:text-black p-3 rounded-full transition-all duration-300"
        >
          <FaEnvelope className="text-2xl" />
          <span className="hidden sm:block">Email</span>
        </a>
        <a
          href="https://www.linkedin.com/in/ramabeni94/"
          className="flex items-center gap-2 hover:bg-gray-100 hover:text-black p-3 rounded-full transition-all duration-300"
        >
          <FaLinkedin className="text-2xl" />
          <span className="hidden sm:block">LinkedIn</span>
        </a>
        <a
          href="https://github.com/ramabeni94dev"
          className="flex items-center gap-2 hover:bg-gray-100 hover:text-black p-3 rounded-full transition-all duration-300"
        >
          <FaGithub className="text-2xl" />
          <span className="hidden sm:block">GitHub</span>
        </a>
        <a
          href="https://wa.me/541161031190"
          className="flex items-center gap-2 hover:bg-gray-100 hover:text-black p-3 rounded-full transition-all duration-300"
        >
          <FaWhatsapp className="text-2xl" />
          <span className="hidden sm:block">Whatsapp</span>
        </a>
      </div>
    </motion.nav>
  );
};

export default BottomNavbar;
