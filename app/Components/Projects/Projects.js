// components/Projects.js
import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Gottert SA Landing Page",
    image: "/WEBSITEGOTTERT.png",
    link: "https://example.com/project3",
  },
  {
    title: "Gottert SA Human Resources Portal",
    image: "/PORTAL-RRHH.png",
    link: "https://example.com/project1",
  },
  {
    title: "Gottert SA After-Sales Quoter",
    image: "/POSVENTA.png",
    link: "https://example.com/project1",
  },
  {
    title: "Personal Notice FORMS",
    image: "/AVISO-PERSONAL.png",
    link: "https://example.com/project1",
  },
  {
    title: "LARIBERA Fish Shop E-Commerce",
    image: "/LARIBERA.png",
    link: "https://example.com/project1",
  },
  {
    title: "EMOTIONS-ANALYTICS APP",
    image: "/EMOTIONANALITICS.png",
    link: "https://example.com/project1",
  },
  {
    title: "EMOTIONS-ANALYTICS APP",
    image: "/gottertappremitos.png",
    link: "https://example.com/project1",
  },
  {
    title: "EMOTIONS-ANALYTICS APP",
    image: "/miniscenics.png",
    link: "https://example.com/project1",
  },
  {
    title: "EMOTIONS-ANALYTICS APP",
    image: "/tiendadejuegos.png",
    link: "https://example.com/project1",
  },
];

const Projects = () => {
  return (
    <div>
      <h2 className="text-xl font-light  text-white mb-4 text-left ml-5  mt-20">
        Projects
      </h2>
      <div className="container mx-auto p-4">
        <div className="flex justify-center items-center min-h-screen">
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="bg-stone-600 rounded-lg shadow-lg overflow-hidden"
                whileHover={{ scale: 1.05 }}
              >
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative h-64 overflow-hidden"
                >
                  <motion.div
                    className="relative w-full h-full"
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-500 ease-in-out"
                    />
                  </motion.div>
                </a>
                <div className="p-4">
                  <h2 className="text-xl text-center font-semibold text-white">
                    {project.title}
                  </h2>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
