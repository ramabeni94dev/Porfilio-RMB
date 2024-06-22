import { FaLinkedin, FaWhatsapp, FaGithub } from "react-icons/fa";

const ProfileCard = () => {
  return (
    <div className="text-white w-full flex flex-row items-center justify-around p-4 mt-40 mb-40">
      <div className="flex flex-col  space-y-4 pr-10">
        <h1 className="text-2xl font-bold">Hi, I'm Ramiro</h1>
        <p className="text-md">Web Developer</p>
        <button className="bg-transparent border border-white rounded-full px-8 py-2 text-sm hover:bg-white hover:text-black transition-colors duration-300">
          Contact
        </button>
        <div className="flex items-center space-x-4">
          <a
            href="https://www.linkedin.com/in/ramabeni94/"
            className="hover:text-gray-400"
          >
            <FaLinkedin className="text-2xl" />
          </a>
          <a href="https://wa.me/541161031190" className="hover:text-gray-400">
            <FaWhatsapp className="text-2xl" />
          </a>
          <a
            href="https://github.com/ramabeni94dev"
            className="hover:text-gray-400"
          >
            <FaGithub className="text-2xl" />
          </a>
        </div>
      </div>
      <div className="bg-white overflow-hidden rounded-full flex justify-center items-center mt-4 md:mt-0 w-48   h-48 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-96 lg:h-96 ">
        <img
          src="/ProfileCard.png"
          alt="Ramiro Benitez"
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
};

export default ProfileCard;
