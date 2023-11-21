import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div className="py-5 text-center">
      {/* Footer content */}
      <span className="block pt-1 text-xs md:text-sm text-slate-500">
        Created by{" "}
        <a
          href="https://www.linkedin.com/in/alvanoh/"
          target="_blank"
          className="font-medium text-semidark hover:text-sky hover:underline hover:underline-offset-4"
        >
          Alvano Hastagina
        </a>
        . Built with{" "}
        <a
          href="https://nextjs.org/"
          className="font-medium text-semidark hover:text-sky hover:underline hover:underline-offset-4"
          target="_blank"
        >
          Next.js
        </a>{" "}
        and{" "}
        <a
          href="https://tailwindcss.com/"
          className="font-medium text-semidark hover:text-sky hover:underline hover:underline-offset-4"
          target="_blank"
        >
          Tailwind CSS
        </a>
        .
      </span>
    </div>
  );
};

export default Footer;
