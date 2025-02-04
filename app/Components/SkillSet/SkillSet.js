// components/About.js
import React from "react";

export default function About() {
  return (
    <div>
      <h2 className="text-xl font-light text-white mb-4 text-left ml-5">
        A Few Words About Me
      </h2>
      <div className="flex items-center justify-center text-white p-5">
        <div className="max-w-3xl">
          <p className="text-3xl font-light leading-relaxed">
            I am a versatile Full Stack Developer with a proven track record in
            both corporate and freelance environments. My journey has allowed me
            to design, develop, and deploy scalable web applications using
            cutting-edge technologies such as React.js, Next.js, Node.js, and
            more. At GÖTTERT, I led initiatives to digitize workflows and
            optimize internal processes, while my freelance work has honed my
            skills in crafting tailored solutions that meet diverse client
            needs. I thrive on tackling challenging technical problems,
            collaborating across teams, and continuously evolving to stay at the
            forefront of web development innovation.
          </p>
        </div>
      </div>
    </div>
  );
}
