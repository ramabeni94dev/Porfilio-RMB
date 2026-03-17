// components/About.js
import React from "react";

export default function ConnectMe() {
  return (
    <div id="contact">
      <h2 className="text-xl font-light  text-white mb-4 text-left ml-5  mt-20">
        Contact
      </h2>
      <div className="flex items-center justify-center   text-white p-5">
        <div className="max-w-3xl">
          <p className="text-3xl font-light leading-relaxed">
            If you want to build something together or just say hi, feel free to
            email me or reach out on social media. You can also learn more about
            my background on{" "}
            <a
              href="https://www.linkedin.com/in/ramabeni94/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 underline"
            >
              LinkedIn
            </a>
            , or check out my work on{" "}
            <a
              href="https://github.com/ramabeni94dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 underline"
            >
              GitHub
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
