import Image from "next/image";
import { nextjs, reactjs, tailwind } from "@/public/assets/";
import { FiArrowUpRight } from "react-icons/fi";
import React, { useState } from "react";
import { motion } from "framer-motion";

const Projects = () => {
  const [viewMore, setViewMore] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.6 }}
      className="py-6 mx-auto max-w-containerSmall"
    >
      <h3 className="py-5 text-sm font-semibold tracking-wider uppercase md:text-base md:py-10 text-primary">
        Completed Projects
      </h3>
      {/* Projects content */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:px-10">
        {/* Next.js */}
        <div className="flex flex-col items-center rounded-lg shadow md:flex-row">
          <div className="flex flex-col justify-between w-full leading-normal md:p-4 md:border md:border-slate-800 md:rounded-lg">
            <div className="md:flex md:items-center">
              <Image
                src={nextjs}
                alt="Next.js"
                className="w-full mb-4 rounded-md h-44 md:h-32 lg:h-20 md:w-44 lg:w-32 md:border-solid md:border-2 md:border-slate-600 lg:hover:border-semidark"
              />
              <a
                href="#"
                className="mb-2 text-base font-medium group md:ml-4 font-title text-primary hover:text-sky"
              >
                Portfolio Next.js{" "}
                <FiArrowUpRight className="inline-flex group-hover:-translate-y-1 " />
              </a>
            </div>
            <p className="mt-2 mb-4 text-sm md:mt-0 md:text-md text-semidark">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore
              officia, animi perspiciatis quidem earum fugiat dolor dignissimos
              quo vero assumenda!
            </p>
            <ul className="flex flex-wrap items-center gap-2 text-xs md:text-sm text-dark">
              <span className="inline-block px-3 py-1 mr-0 text-xs font-medium rounded-full text-sky bg-slate-800 hover:bg-slate-700 last:mr-0">
                Next.js
              </span>
              <span className="inline-block px-3 py-1 mr-0 text-xs font-medium rounded-full text-sky bg-slate-800 hover:bg-slate-700 last:mr-0">
                Framer
              </span>
              <span className="inline-block px-3 py-1 mr-0 text-xs font-medium rounded-full text-sky bg-slate-800 hover:bg-slate-700 last:mr-0">
                Vercel
              </span>
            </ul>
          </div>
        </div>
        {/* React.js */}
        <div className="flex flex-col items-center rounded-lg shadow md:flex-row">
          <div className="flex-col justify-between w-full leading-normal after:flex md:p-4 md:border md:border-slate-800 md:rounded-lg">
            <div className="md:flex md:items-center">
              <Image
                src={reactjs}
                alt="React.js"
                className="w-full mb-4 rounded-md h-44 md:h-32 lg:h-20 md:w-44 lg:w-32 md:border-solid md:border-2 md:border-slate-600 lg:hover:border-semidark"
              />
              <a
                href="https://notes-noci.netlify.app/"
                className="mb-2 text-base font-medium group md:ml-4 font-title text-primary hover:text-sky"
              >
                Notes Project React.js{" "}
                <FiArrowUpRight className="inline-flex transition group-hover:-translate-y-1" />
              </a>
            </div>
            <p className="mt-2 mb-4 text-sm md:mt-0 md:text-md text-semidark">
              I created this project with React.js using state management with
              useContext and react-router-dom Dynamic Routing. Actually this is
              my project Submission in Dicoding
            </p>
            <ul className="flex flex-wrap items-center gap-2 text-xs md:text-sm text-dark">
              <span className="inline-block px-3 py-1 mr-0 text-xs font-medium rounded-full text-sky bg-slate-800 hover:bg-slate-700 last:mr-0">
                React.js
              </span>
              <span className="inline-block px-3 py-1 mr-0 text-xs font-medium rounded-full text-sky bg-slate-800 hover:bg-slate-700 last:mr-0">
                Tailwind
              </span>
              <span className="inline-block px-3 py-1 mr-0 text-xs font-medium rounded-full text-sky bg-slate-800 hover:bg-slate-700 last:mr-0">
                Vite
              </span>
            </ul>
          </div>
        </div>
        {/* Tailwind */}
        <div className="flex flex-col items-center rounded-lg shadow md:flex-row">
          <div className="flex flex-col justify-between w-full leading-normal md:p-4 md:border md:border-slate-800 md:rounded-lg">
            <div className="md:flex md:items-center">
              <Image
                src={tailwind}
                alt="Tailwind"
                className="w-full mb-4 rounded-md h-44 md:h-32 lg:h-20 md:w-44 lg:w-32 md:border-solid md:border-2 md:border-slate-600 lg:hover:border-semidark"
              />
              <a
                href="https://alvanochi.github.io/noci-store-tailwind/"
                className="mb-2 text-base font-medium group md:ml-4 font-title text-primary hover:text-sky"
              >
                My Store Tailwind{" "}
                <FiArrowUpRight className="inline-flex transition group-hover:-translate-y-1" />
              </a>
            </div>
            <p className="mt-2 mb-4 text-sm md:mt-0 md:text-md text-semidark">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum,
              placeat delectus sint ab ipsum corporis asperiores reprehenderit
              molestias nisi dolorem.
            </p>
            <ul className="flex flex-wrap items-center gap-2 text-xs md:text-sm text-dark">
              <span className="inline-block px-3 py-1 mr-0 text-xs font-medium rounded-full text-sky bg-slate-800 hover:bg-slate-700 last:mr-0">
                Sweet-Alert
              </span>
              <span className="inline-block px-3 py-1 mr-0 text-xs font-medium rounded-full text-sky bg-slate-800 hover:bg-slate-700 last:mr-0">
                Framer
              </span>
              <span className="inline-block px-3 py-1 mr-0 text-xs font-medium rounded-full text-sky bg-slate-800 hover:bg-slate-700 last:mr-0">
                Tailwind
              </span>
            </ul>
          </div>
        </div>
        {/* Tailwind */}
        <div className="flex flex-col items-center rounded-lg shadow md:flex-row">
          <div className="flex flex-col justify-between w-full leading-normal md:p-4 md:border md:border-slate-800 md:rounded-lg">
            <div className="md:flex md:items-center">
              <Image
                src={tailwind}
                alt="Tailwind"
                className="w-full mb-4 rounded-md h-44 md:h-32 lg:h-20 md:w-44 lg:w-32 md:border-solid md:border-2 md:border-slate-600 lg:hover:border-semidark"
              />
              <a
                href="https://alvanochi.github.io/Cashier/"
                className="mb-2 text-base font-medium group md:ml-4 font-title text-primary hover:text-sky"
              >
                Cashier Landing Page{" "}
                <FiArrowUpRight className="inline-flex transition group-hover:-translate-y-1" />
              </a>
            </div>
            <p className="mt-2 mb-4 text-sm md:mt-0 md:text-md text-semidark">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum,
              placeat delectus sint ab ipsum corporis asperiores reprehenderit
              molestias nisi dolorem.
            </p>
            <ul className="flex flex-wrap items-center gap-2 text-xs md:text-sm text-dark">
              <span className="inline-block px-3 py-1 mr-0 text-xs font-medium rounded-full text-sky bg-slate-800 hover:bg-slate-700 last:mr-0">
                Ajax
              </span>
              <span className="inline-block px-3 py-1 mr-0 text-xs font-medium rounded-full text-sky bg-slate-800 hover:bg-slate-700 last:mr-0">
                Framer
              </span>
              <span className="inline-block px-3 py-1 mr-0 text-xs font-medium rounded-full text-sky bg-slate-800 hover:bg-slate-700 last:mr-0">
                Tailwind
              </span>
            </ul>
          </div>
        </div>

        {/* More Projects */}
        {viewMore && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="flex flex-col items-center rounded-lg shadow md:flex-row"
            >
              <div className="flex flex-col justify-between w-full leading-normal md:p-4 md:border md:border-slate-800 md:rounded-lg">
                <div className="md:flex md:items-center">
                  <Image
                    src={nextjs}
                    alt="Next.js"
                    className="w-full mb-4 rounded-md h-44 md:h-32 lg:h-20 md:w-44 lg:w-32 md:border-solid md:border-2 md:border-slate-600 lg:hover:border-semidark"
                  />
                  <a
                    href="#"
                    className="mb-2 text-base font-medium group md:ml-4 font-title text-primary hover:text-sky"
                  >
                    Portfolio Next.js{" "}
                    <FiArrowUpRight className="inline-flex group-hover:-translate-y-1 " />
                  </a>
                </div>
                <p className="mt-2 mb-4 text-sm md:mt-0 md:text-md text-semidark">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Tempore officia, animi perspiciatis quidem earum fugiat dolor
                  dignissimos quo vero assumenda!
                </p>
                <ul className="flex flex-wrap items-center gap-2 text-xs md:text-sm text-dark">
                  <span className="inline-block px-3 py-1 mr-0 text-xs font-medium rounded-full text-sky bg-slate-800 hover:bg-slate-700 last:mr-0">
                    Next.js
                  </span>
                  <span className="inline-block px-3 py-1 mr-0 text-xs font-medium rounded-full text-sky bg-slate-800 hover:bg-slate-700 last:mr-0">
                    Framer
                  </span>
                  <span className="inline-block px-3 py-1 mr-0 text-xs font-medium rounded-full text-sky bg-slate-800 hover:bg-slate-700 last:mr-0">
                    Vercel
                  </span>
                </ul>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="flex flex-col items-center rounded-lg shadow md:flex-row"
            >
              <div className="flex flex-col justify-between w-full leading-normal md:p-4 md:border md:border-slate-800 md:rounded-lg">
                <div className="md:flex md:items-center">
                  <Image
                    src={nextjs}
                    alt="Next.js"
                    className="w-full mb-4 rounded-md h-44 md:h-32 lg:h-20 md:w-44 lg:w-32 md:border-solid md:border-2 md:border-slate-600 lg:hover:border-semidark"
                  />
                  <a
                    href="#"
                    className="mb-2 text-base font-medium group md:ml-4 font-title text-primary hover:text-sky"
                  >
                    Portfolio Next.js{" "}
                    <FiArrowUpRight className="inline-flex group-hover:-translate-y-1 " />
                  </a>
                </div>
                <p className="mt-2 mb-4 text-sm md:mt-0 md:text-md text-semidark">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Tempore officia, animi perspiciatis quidem earum fugiat dolor
                  dignissimos quo vero assumenda!
                </p>
                <ul className="flex flex-wrap items-center gap-2 text-xs md:text-sm text-dark">
                  <span className="inline-block px-3 py-1 mr-0 text-xs font-medium rounded-full text-sky bg-slate-800 hover:bg-slate-700 last:mr-0">
                    Next.js
                  </span>
                  <span className="inline-block px-3 py-1 mr-0 text-xs font-medium rounded-full text-sky bg-slate-800 hover:bg-slate-700 last:mr-0">
                    Framer
                  </span>
                  <span className="inline-block px-3 py-1 mr-0 text-xs font-medium rounded-full text-sky bg-slate-800 hover:bg-slate-700 last:mr-0">
                    Vercel
                  </span>
                </ul>
              </div>
            </motion.div>
          </>
        )}
      </div>

      {/* Button More Projects */}
      <div className="flex items-center justify-center mt-6">
        {viewMore ? (
          <button
            onClick={() => setViewMore(false)}
            className=" text-primary text-[14px] font-medium hover:underline hover:underline-offset-4 hover:decoration-sky"
          >
            Less Projects
          </button>
        ) : (
          <button
            onClick={() => setViewMore(true)}
            className=" text-primary text-[14px] font-medium hover:underline hover:underline-offset-4 hover:decoration-sky "
          >
            More Projects
          </button>
        )}
      </div>
    </motion.div>
  );
};

export default Projects;
