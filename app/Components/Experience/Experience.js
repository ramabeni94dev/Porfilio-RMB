import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "Full Stack Developer",
    company: "GÖTTERT",
    startDate: "2023-08-01", // August 2023
    endDate: null, // null indicates it's still ongoing (Present)
    location: "Provincia de Buenos Aires, Argentina · On-site",
    description: [
      "Develop and maintain web applications using React.js, Next.js, Node.js, and CSS, streamlining internal processes for Administration, Finance, Supplies, and HR departments.",
      "Lead initiatives to digitize manual workflows and migrate legacy systems, reducing errors and improving overall efficiency.",
      "Collaborate cross-functionally with technical and non-technical teams to ensure smooth project execution.",
      "Implement best coding practices, focusing on performance optimization and maintainability.",
    ],
  },

  {
    title: "Freelance Web Developer",
    company: "Ramiro Benítez · Freelance",
    startDate: "2023-01-01", // January 2023
    endDate: null, // ongoing
    location: "Provincia de Buenos Aires, Argentina · Remote",
    description: [
      "Build custom websites for clients using HTML, CSS, JavaScript, and PHP.",
      "Implement and maintain content management systems like WordPress and Joomla.",
      "Collaborate with designers and marketers to ensure brand consistency and alignment with client goals.",
      "Test and troubleshoot websites to ensure functionality and security.",
    ],
  },
];

const formatDate = (dateStr) => {
  if (!dateStr) return "Present";
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", { month: "short", year: "numeric" });
};

const getDuration = (startDateStr, endDateStr) => {
  const startDate = new Date(startDateStr);
  const endDate = endDateStr ? new Date(endDateStr) : new Date();
  let years = endDate.getFullYear() - startDate.getFullYear();
  let months = endDate.getMonth() - startDate.getMonth();

  if (months < 0) {
    years--;
    months += 12;
  }

  let duration = "";
  if (years > 0) {
    duration += years + (years === 1 ? " year" : " years");
  }
  if (months > 0) {
    if (duration) duration += " ";
    duration += months + (months === 1 ? " month" : " months");
  }
  if (!duration) duration = "Less than a month";
  return duration;
};

const Experience = () => {
  const [expanded, setExpanded] = useState(
    Array(experiences.length).fill(false)
  );

  // Se utiliza la función actualizadora con el estado previo para garantizar la actualización correcta
  const toggleExpand = (index) => {
    setExpanded((prevExpanded) =>
      prevExpanded.map((item, i) => (i === index ? !item : item))
    );
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
              <p className="text-3xl text-gray-400">
                {formatDate(experience.startDate)} -{" "}
                {formatDate(experience.endDate)} ·{" "}
                {getDuration(experience.startDate, experience.endDate)}
              </p>
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
              {expanded[index] && experience.description.length > 0 && (
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
