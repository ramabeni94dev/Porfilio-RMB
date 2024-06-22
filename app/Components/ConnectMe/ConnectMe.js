// components/About.js
import React from "react";

export default function ConnectMe() {
  return (
    <div>
      <h2 className="text-xl font-light  text-white mb-4 text-left ml-5  mt-20">
        Connect with me
      </h2>
      <div className="flex items-center justify-center   text-white p-5">
        <div className="max-w-3xl">
          <p className="text-3xl font-light leading-relaxed">
            If you want to team up or just chat, you can write me an email or
            reach out to me on social media. I occasionally share my thoughts,
            findings, and recommendations. You can also find more about me by
            exploring my{" "}
            <a
              href="https://www.linkedin.com/in/ramabeni94/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 underline"
            >
              LinkedIn
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
