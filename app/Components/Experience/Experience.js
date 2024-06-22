import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "Full Stack Developer",
    company: "Göttert",
    duration: "Aug 2023 - Present · 11 months",
    location: "Provincia de Buenos Aires, Argentina · Presencial",
    description: [
      "Specialized in using technologies such as JavaScript, React, HTML, Nextjs and CSS to innovate, develop, and implement computer technology solutions.",
      "Focused on enhancing Backoffice operations, spanning areas like Administration and Finance, Supplies, Sales, and Human Resources.",
    ],
  },
  {
    title: "Freelance Web Developer",
    company: "Ramiro Benítez · Autónomo",
    duration: "Jan 2023 - Present · 1 year 6 months",
    location: "Provincia de Buenos Aires, Argentina · En remoto",
    description: [
      "Crafted custom websites for clients using HTML, CSS, JavaScript, and PHP.",
      "Implemented and maintained content management systems, such as WordPress and Joomla.",
      "Collaborated with graphic designers and marketing specialists to ensure the website aligns with the client's brand and goals.",
      "Tested and troubleshot websites to ensure functionality and security.",
    ],
  },

  // Add more experiences as needed
];

const Experience = () => {
  const [expanded, setExpanded] = useState(
    Array(experiences.length).fill(false)
  );

  const toggleExpand = (index) => {
    setExpanded(expanded.map((item, i) => (i === index ? !item : item)));
  };

  return (
    <div>
      <h2 className="text-xl font-light text-white mb-4 text-left ml-5">
        Experience
      </h2>
      <div className="flex items-center justify-center text-white p-5">
        <div className="max-w-3xl">
          {experiences.map((experience, index) => (
            <div key={index} className="mb-20">
              <h3 className="text-3xl font-bold text-gray-200">
                {experience.title}
              </h3>
              <p className="text-3xl italic text-gray-400">
                {experience.company}
              </p>
              <p className="text-3xl text-gray-400">{experience.duration}</p>
              <p className="text-3xl text-gray-400">{experience.location}</p>
              <button
                onClick={() => toggleExpand(index)}
                className="flex items-center text-blue-500 underline"
              >
                {expanded[index] ? (
                  <>
                    Hide details <FiChevronUp className="ml-2" />
                  </>
                ) : (
                  <>
                    Show details <FiChevronDown className="ml-2" />
                  </>
                )}
              </button>
              {expanded[index] && (
                <motion.ul
                  className="list-disc list-inside mt-2 space-y-1"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.5 }}
                >
                  {experience.description.map((item, i) => (
                    <li
                      key={i}
                      className="text-3xl text-gray-300 leading-relaxed"
                    >
                      {item}
                    </li>
                  ))}
                </motion.ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
