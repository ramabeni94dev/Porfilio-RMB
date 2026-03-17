// components/About.js
import React from "react";

export default function About() {
  return (
    <div>
      <h2 className="text-xl font-light text-white mb-4 text-left ml-5">
        About
      </h2>
      <div className="flex items-center justify-center text-white p-5">
        <div className="max-w-3xl">
          <p className="text-3xl font-light leading-relaxed">
            I’m a Full Stack Developer based in Argentina, building modern web
            applications end-to-end: UI, APIs, integrations, and automation. I
            enjoy turning complex workflows into simple, reliable products, and
            I care deeply about maintainability, performance, and pragmatic UX.
            I’ve worked in both corporate and freelance environments, shipping
            solutions for areas like HR, operations, administration, and
            production.
          </p>
        </div>
      </div>
    </div>
  );
}
