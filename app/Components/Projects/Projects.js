// components/Projects.js
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Componente para la sección de Achievements
const AchievementsList = ({ achievements }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <h4 className="text-xl font-semibold mb-2">Achievements:</h4>
      {/* En pantallas de notebook y superiores se muestran todos */}
      <ul className="hidden md:block list-disc list-inside mb-4 space-y-1">
        {achievements.map((achievement, i) => (
          <li key={i} className="text-lg">
            {achievement}
          </li>
        ))}
      </ul>
      {/* En teléfonos se ocultan por defecto y se muestran al presionar el botón */}
      <div className="block md:hidden">
        {expanded && (
          <ul className="list-disc list-inside mb-4 space-y-1">
            {achievements.map((achievement, i) => (
              <li key={i} className="text-lg">
                {achievement}
              </li>
            ))}
          </ul>
        )}
        <button
          onClick={() => setExpanded((prev) => !prev)}
          className="text-blue-500 hover:underline"
        >
          {expanded ? "Ver menos" : "Ver más"}
        </button>
      </div>
    </>
  );
};

const projects = [
  {
    title: "New Company Website Revamp – www.gottert.com",
    link: "https://www.gottert.com", // URL del proyecto
    image: "/Porfilio-RMB/gottertweb.gif", // Reemplaza con la ruta real de tu imagen
    width: 640, // Ancho deseado para el gif
    height: 360, // Alto deseado para el gif
    description:
      "I spearheaded the complete redesign and development of the company's new website to modernize its corporate image and enhance online communication. Developed a responsive, user-friendly site that reinforced the company’s brand identity and provided a platform for showcasing products, services, and corporate values.",
    achievements: [
      "Modernized the corporate image, refreshing the brand perception both internally and externally.",
      "Improved user engagement by enhancing navigation, reducing bounce rates, and increasing average session duration.",
      "Delivered a scalable, secure online platform supporting lead generation and improved customer communication.",
    ],
  },
  {
    title: "Shipping Notes & Client Management Platform",
    image: "/Porfilio-RMB/remitos.png", // Reemplaza con la ruta real de tu imagen
    width: 640,
    height: 360,
    description:
      "Designed to simplify and optimize the creation of shipping notes and the management of client data. Tech Stack: React.js (front-end), Node.js/Express (back-end), SQL/NoSQL databases.",
    achievements: [
      "Reduced manual errors by 30%.",
      "Improved data retrieval speeds by 40%.",
      "Shortened processing times, resulting in a 20% reduction in operational costs and increased user satisfaction.",
    ],
  },
  {
    title: "Car Reservation & Fleet Management App",
    image: "/Porfilio-RMB/flota.gif", // Reemplaza con la ruta real de tu imagen
    width: 640,
    height: 360,
    description:
      "Developed an application allowing employees to reserve company vehicles for both personal and work use. Administrators can assign vehicles, approve or reject requests, generate status updates, and maintain a comprehensive database for vehicle maintenance and reservations.",
    achievements: [
      "Increased fleet utilization by 35% through an optimized reservation process.",
      "Improved efficiency in reservation management and vehicle assignment by 45%, reducing wait times and boosting productivity.",
      "Reduced maintenance costs by 25% through proactive tracking and improved scheduling.",
      "Contributed to increased operating revenue by optimizing fleet usage.",
    ],
  },
];

const Projects = () => {
  return (
    <div className="py-20 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Projects & Responsibilities
        </h2>
        <div className="grid gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="overflow-hidden flex flex-col md:flex-row items-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Imagen del proyecto */}
              <div className="md:w-1/3">
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="responsive"
                  objectFit="contain"
                  width={project.width}
                  height={project.height}
                />
              </div>
              {/* Detalles del proyecto */}
              <div className="p-6 md:w-2/3 flex flex-col justify-center">
                <h3 className="text-2xl font-semibold mb-4">
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      {project.title}
                    </a>
                  ) : (
                    project.title
                  )}
                </h3>
                <p className="mb-4 text-lg">{project.description}</p>
                {/* Sección de logros con comportamiento responsivo */}
                <AchievementsList achievements={project.achievements} />
                <p className="mt-auto text-sm italic">
                  <span className="font-semibold">Tech Stack:</span> React,
                  Next.js, React Native, Node.js, SQL/NoSQL, REST APIs, Azure,
                  Azure Graph Explorer API, Agile Methodologies
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
