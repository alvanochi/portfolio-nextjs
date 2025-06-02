import React from "react";
import { motion } from "framer-motion";

const experiencesData = [
  {
    company: "Badan Pusat Statistik",
    role: "Frontend Web Developer",
    location: "Cibinong, Bogor",
    period: "Feb 2025 - Apr 2025",
    url: "https://www.bps.go.id/id",
  },
  {
    company: "Bangkit Academy",
    role: "Mobile Development",
    location: "WFH",
    period: "Sep 2024 - Jan 2025",
    url: "https://bangkit.academy/",
  },
  {
    company: "Talent Scouting Academy",
    role: "Database Design & Database Programming",
    location: "WFH",
    period: "Feb 2024 - Jul 2024",
    url: "https://digitalent.komdigi.go.id/pelatihan/7340",
  },
  {
    company: "Digital Talent Scholarship",
    role: "Junior Web Developer (Certification BNSP)",
    location: "Cikarang, Bekasi",
    period: "Mar 2023",
    url: "https://digitalent.komdigi.go.id/pelatihan/5697", 
  },
];

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="mb-10 mx-auto max-w-containerSmall"
    >
      <h3 className="py-5 text-sm font-semibold tracking-wider uppercase md:text-base md:py-10 text-primary">
        Education and experience
      </h3>
      <div className="grid grid-cols-1">
        {experiencesData.map((exp, index) => (
          <div
            key={index}
            className="flex justify-between mb-6 lg:px-10"
          >
            <div className="flex flex-col">
              <a
                href={exp.url}
                target="_blank"
                className="text-base font-medium tracking-wide text-primary hover:text-sky"
              >
                {exp.company}
              </a>
              <span className="text-base text-semidark">{exp.role}</span>
            </div>
            <div className="flex flex-col mt-1 text-right">
              <span className="text-sm text-semidark">{exp.location}</span>
              <span className="text-sm text-semidark">{exp.period}</span>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Experience