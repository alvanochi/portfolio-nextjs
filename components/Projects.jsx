import Image from "next/image";
import {
  cekulit,
  smanic,
  catat,
  anikitsu,
  gesture,
  bps,
} from "@/public/assets/";
import { FiArrowUpRight } from "react-icons/fi";
import React, { useState } from "react";
import { motion } from "framer-motion";

const Projects = () => {
  const [viewMore, setViewMore] = useState(false);

  const pinnedProjects = [
    {
      title: "Cekulit",
      image: cekulit,
      description: "Skin scan AI-powered app and skincare routine recommendations powered",
      technologies: ["Kotlin", "Retrofit", "Room"],
      link: "https://www.canva.com/design/DAGY3FIg9R4/zHbbLNE7X8QUTk_IvW-PxA/edit",
    },
    {
      title: "Anikitsu",
      image: anikitsu,
      description: "an app that displays a list of anime and can add them to favorites",
      technologies: ["Kotlin", "Jetpack Compose", "Retrofit", "Room"],
      link: "https://github.com/alvanochi/anikitsu",
    },
    {
      title: "Gesture Booth",
      image: gesture,
      description: "Photobooth AI-powered using your hand gesture",
      technologies: ["Next.js", "Tailwind", "Mediapipe"],
      link: "https://gesture-booth.vercel.app/",
    },
    {
      title: "SMAN1C",
      image: smanic,
      description: "My Senior High School Landing page",
      technologies: ["React.js", "Tailwind", "Framer"],
      link: "https://sman1c.vercel.app/",
    }
  ];

  const moreProjects = [
    {
      title: "GuestBook Digital BPS",
      image: bps,
      description: "digital guestbook app to record guest visits and interactive & dynamic dashboard views",
      technologies: ["React.js", "Tailwind", "Tanstack", "Lottie"],
    },
    {
      title: "Catat Jadwal Mata Kuliah",
      image: catat,
      description: "Note app for managing academic schedules",
      technologies: ["React.js", "Tailwind", "Firebase"],
      link: "https://catat-mata-kuliah.vercel.app/",
    }
  ]

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
        {pinnedProjects.map((item, index) => (
          <div key={index} className="flex flex-col items-center rounded-lg shadow md:flex-row">
            <div className="flex flex-col justify-between w-full leading-normal md:p-4 md:border md:border-slate-800 md:rounded-lg">
              <div className="md:flex md:items-center">
                <Image
                  src={item.image}
                  alt={item.title}
                  className="w-full mb-4 object-contain rounded-md h-44 md:h-32 lg:h-20 md:w-44 lg:w-32 md:border-solid md:border-2 md:border-slate-600 lg:hover:border-semidark"
                />
                <a
                  href={item.link}
                  target={item.link ? "_blank": "_self"}
                  className="mb-2 text-base font-medium group md:ml-4 font-title text-primary hover:text-sky"
                >
                  {item.title}
                  <FiArrowUpRight className="inline-flex group-hover:-translate-y-1 " />
                </a>
              </div>
              <p className="mt-2 mb-4 text-sm md:mt-0 md:text-md text-semidark">
                {item.description}
              </p>
              <ul className="flex flex-wrap items-center gap-2 text-xs md:text-sm text-dark">
                {item.technologies.map((tech, idx) => (
                  <span key={idx} className="inline-block px-3 py-1 mr-0 text-xs font-medium rounded-full text-sky bg-slate-800 hover:bg-slate-700 last:mr-0">
                    {tech}
                  </span>
                ))}
              </ul>
            </div>
          </div>
        ))}

        {/* More Projects */}
        {viewMore && (
          <>
            {moreProjects.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="flex flex-col items-center rounded-lg shadow md:flex-row"
              >
                <div className="flex flex-col justify-between w-full leading-normal md:p-4 md:border md:border-slate-800 md:rounded-lg">
                  <div className="md:flex md:items-center">
                    <Image
                      src={item.image}
                      alt={item.title}
                      className="w-full mb-4 rounded-md h-44 md:h-32 lg:h-20 md:w-44 lg:w-32 md:border-solid md:border-2 md:border-slate-600 lg:hover:border-semidark"
                    />
                    <a
                      href={item.link}
                      target={item.link ? "_blank": "_self"}
                      className="mb-2 text-base font-medium group md:ml-4 font-title text-primary hover:text-sky"
                    >
                      {item.title}
                      <FiArrowUpRight className="inline-flex group-hover:-translate-y-1 " />
                    </a>
                  </div>
                  <p className="mt-2 mb-4 text-sm md:mt-0 md:text-md text-semidark">
                    {item.description}
                  </p>
                  <ul className="flex flex-wrap items-center gap-2 text-xs md:text-sm text-dark">
                  {item.technologies.map((tech, idx) => (
                    <span key={idx} className="inline-block px-3 py-1 mr-0 text-xs font-medium rounded-full text-sky bg-slate-800 hover:bg-slate-700 last:mr-0">
                      {tech}
                    </span>
                  ))}  
                  </ul>
                </div>
              </motion.div>
            ))}
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
