// components/Projects.js
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Componente para la sección de Achievements
const AchievementsList = ({ achievements }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <h4 className="text-xl font-semibold mb-2">Highlights</h4>
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
          {expanded ? "Show less" : "Show more"}
        </button>
      </div>
    </>
  );
};

const projects = [
  {
    title: "Company Website Revamp — gottert.com",
    link: "https://www.gottert.com",
    image: "/Porfilio-RMB/gottertweb.gif",
    width: 640,
    height: 360,
    description:
      "Led the redesign and development of the corporate website to modernize the brand presence and improve communication. Delivered a responsive, user-friendly experience focused on clarity, performance, and maintainability.",
    achievements: [
      "Modernized the corporate image and improved content discoverability.",
      "Improved UX through clearer navigation and responsive layouts.",
      "Shipped a maintainable foundation ready for future iterations.",
    ],
    techStack:
      "Next.js, React, Tailwind CSS, responsive UI, performance-focused delivery",
  },
  {
    title: "Shipping Notes & Client Management Platform",
    image: "/Porfilio-RMB/remitos.png",
    width: 640,
    height: 360,
    description:
      "Built a platform to streamline shipping note creation and client data management, reducing friction and error-prone manual steps while improving traceability.",
    achievements: [
      "Reduced manual errors by standardizing data entry and validation.",
      "Improved search and retrieval for client/shipping records.",
      "Shortened turnaround time for day-to-day operations.",
    ],
    techStack: "React, Node.js/Express, SQL/NoSQL, REST APIs",
  },
  {
    title: "Fleet Reservation & Management App",
    image: "/Porfilio-RMB/flota.gif",
    width: 640,
    height: 360,
    description:
      "Developed an application for employees to reserve company vehicles, with admin workflows for approvals, assignments, and maintenance tracking to keep fleet usage organized and auditable.",
    achievements: [
      "Centralized reservations, approvals, and usage history in one place.",
      "Improved operational visibility with statuses and maintenance tracking.",
      "Reduced time spent coordinating availability and assignments.",
    ],
    techStack: "React, React Native, Node.js, SQL/NoSQL, REST APIs",
  },
  {
    title: "AI Ticketing & Support Assistant",
    link: "https://github.com/ramabeni94dev/Ticket-ia",
    image: "/Porfilio-RMB/remitos.png",
    width: 640,
    height: 360,
    description:
      "Built an AI-assisted ticketing concept focused on faster triage, clearer problem statements, and more consistent support workflows.",
    achievements: [
      "Structured incoming requests to reduce back-and-forth.",
      "Improved categorization and context gathering for support.",
      "Designed for practical adoption in real teams.",
    ],
    techStack: "JavaScript/TypeScript, APIs, prompt-driven workflows",
  },
  {
    title: "AI Chatbot Prototype",
    link: "https://github.com/ramabeni94dev/Chatbot-ia",
    image: "/Porfilio-RMB/gottertweb.gif",
    width: 640,
    height: 360,
    description:
      "Prototyped a chatbot experience to assist with common questions and internal knowledge access, focused on usability and fast iteration.",
    achievements: [
      "Designed a simple conversational UX to reduce friction.",
      "Iterated quickly on flows and failure cases.",
      "Built as a foundation for future productization.",
    ],
    techStack: "Next.js/React, API integrations, UX iteration",
  },
];

const Projects = () => {
  return (
    <div className="py-20 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Selected Projects
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
                  <span className="font-semibold">Tech stack:</span>{" "}
                  {project.techStack ??
                    "Next.js, React, Node.js, REST APIs, Tailwind CSS"}
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
