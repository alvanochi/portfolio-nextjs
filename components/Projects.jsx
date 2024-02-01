import Image from "next/image";
import {
  nextjs,
  reactjs,
  nociStore,
  cashier,
  wedding,
  smanic,
} from "@/public/assets/";
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
                target="_blank"
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
        {/* wedding */}
        <div className="flex flex-col items-center rounded-lg shadow md:flex-row">
          <div className="flex flex-col justify-between w-full leading-normal md:p-4 md:border md:border-slate-800 md:rounded-lg">
            <div className="md:flex md:items-center">
              <Image
                src={wedding}
                alt="Wedding"
                className="w-full mb-4 rounded-md h-44 md:h-32 lg:h-20 md:w-44 lg:w-32 md:border-solid md:border-2 md:border-slate-600 lg:hover:border-semidark"
              />
              <a
                href="https://alvanochi.github.io/undangan/"
                target="_blank"
                className="mb-2 text-base font-medium group md:ml-4 font-title text-primary hover:text-sky"
              >
                Wedding Invitation{" "}
                <FiArrowUpRight className="inline-flex transition group-hover:-translate-y-1" />
              </a>
            </div>
            <p className="mt-2 mb-4 text-sm md:mt-0 md:text-md text-semidark">
              I proudly introduce an online wedding invitation design service.
              With a focus on beauty and convenience, this website is created to
              celebrate your love story with a modern flair and romantic touch.
            </p>
            <ul className="flex flex-wrap items-center gap-2 text-xs md:text-sm text-dark">
              <span className="inline-block px-3 py-1 mr-0 text-xs font-medium rounded-full text-sky bg-slate-800 hover:bg-slate-700 last:mr-0">
                Bootstrap
              </span>
              <span className="inline-block px-3 py-1 mr-0 text-xs font-medium rounded-full text-sky bg-slate-800 hover:bg-slate-700 last:mr-0">
                Postgresql
              </span>
              <span className="inline-block px-3 py-1 mr-0 text-xs font-medium rounded-full text-sky bg-slate-800 hover:bg-slate-700 last:mr-0">
                PHP (API)
              </span>
            </ul>
          </div>
        </div>
        {/* cashier */}
        <div className="flex flex-col items-center rounded-lg shadow md:flex-row">
          <div className="flex flex-col justify-between w-full leading-normal md:p-4 md:border md:border-slate-800 md:rounded-lg">
            <div className="md:flex md:items-center">
              <Image
                src={cashier}
                alt="Cashier-landing-page"
                className="w-full mb-4 rounded-md h-44 md:h-32 lg:h-20 md:w-44 lg:w-32 md:border-solid md:border-2 md:border-slate-600 lg:hover:border-semidark"
              />
              <a
                href="https://alvanochi.github.io/Cashier/"
                target="_blank"
                className="mb-2 text-base font-medium group md:ml-4 font-title text-primary hover:text-sky"
              >
                Cashier Landing Page{" "}
                <FiArrowUpRight className="inline-flex transition group-hover:-translate-y-1" />
              </a>
            </div>
            <p className="mt-2 mb-4 text-sm md:mt-0 md:text-md text-semidark">
              I designed this project using Tailwind CSS. The result is a
              visually appealing and responsive landing page that not only
              showcases the cashier functionality but also ensures a smooth and
              modern user experience.
            </p>
            <ul className="flex flex-wrap items-center gap-2 text-xs md:text-sm text-dark">
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
                    src={nociStore}
                    alt="noci-store"
                    className="w-full mb-4 rounded-md h-44 md:h-32 lg:h-20 md:w-44 lg:w-32 md:border-solid md:border-2 md:border-slate-600 lg:hover:border-semidark"
                  />
                  <a
                    href="https://toko.alvan.my.id"
                    target="_blank"
                    className="mb-2 text-base font-medium group md:ml-4 font-title text-primary hover:text-sky"
                  >
                    Noci-store Premium Services{" "}
                    <FiArrowUpRight className="inline-flex group-hover:-translate-y-1 " />
                  </a>
                </div>
                <p className="mt-2 mb-4 text-sm md:mt-0 md:text-md text-semidark">
                  I have developed a small-scale e-commerce website specializing
                  in premium services. When ready to make a purchase, users are
                  seamlessly directed to WhatsApp, ensuring a personalized and
                  direct interaction for a smooth and convenient buying
                  experience.
                </p>
                <ul className="flex flex-wrap items-center gap-2 text-xs md:text-sm text-dark">
                  <span className="inline-block px-3 py-1 mr-0 text-xs font-medium rounded-full text-sky bg-slate-800 hover:bg-slate-700 last:mr-0">
                    Tailwind
                  </span>
                  <span className="inline-block px-3 py-1 mr-0 text-xs font-medium rounded-full text-sky bg-slate-800 hover:bg-slate-700 last:mr-0">
                    Scroll-reveal
                  </span>
                  <span className="inline-block px-3 py-1 mr-0 text-xs font-medium rounded-full text-sky bg-slate-800 hover:bg-slate-700 last:mr-0">
                    Sweet Alert
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
                    src={smanic}
                    alt="SMA Negeri 1 Ciampea Landing Page"
                    className="w-full mb-4 rounded-md h-44 md:h-32 lg:h-20 md:w-44 lg:w-32 md:border-solid md:border-2 md:border-slate-600 lg:hover:border-semidark"
                  />
                  <a
                    href="https://sman1c.vercel.app/"
                    target="_blank"
                    className="mb-2 text-base font-medium group md:ml-4 font-title text-primary hover:text-sky"
                  >
                    SMA N 1 C{" "}
                    <FiArrowUpRight className="inline-flex group-hover:-translate-y-1 " />
                  </a>
                </div>
                <p className="mt-2 mb-4 text-sm md:mt-0 md:text-md text-semidark">
                  I have created the landing page for my high school, SMA Negeri
                  1 Ciampea, employing ReactJS and following to the Atomic
                  Design methodology for the folder structure. This approach
                  ensures a modular and organized design, enhancing the overall
                  user experience and responsiveness of the website.
                </p>
                <ul className="flex flex-wrap items-center gap-2 text-xs md:text-sm text-dark">
                  <span className="inline-block px-3 py-1 mr-0 text-xs font-medium rounded-full text-sky bg-slate-800 hover:bg-slate-700 last:mr-0">
                    Reactjs
                  </span>
                  <span className="inline-block px-3 py-1 mr-0 text-xs font-medium rounded-full text-sky bg-slate-800 hover:bg-slate-700 last:mr-0">
                    Framer
                  </span>
                  <span className="inline-block px-3 py-1 mr-0 text-xs font-medium rounded-full text-sky bg-slate-800 hover:bg-slate-700 last:mr-0">
                    Scroll-Carousel
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
