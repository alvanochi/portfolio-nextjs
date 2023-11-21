import { motion } from "framer-motion";
import { FiInstagram, FiFacebook, FiLinkedin, FiGithub } from "react-icons/fi";

const Intro = () => {
  return (
    <section className="text-center lg:min-h-screen">
      {/* Header start */}
      <nav className="flex items-center justify-between p-4 py-5 mb-2 lg:mb-12">
        <motion.a
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
          className="text-sm font-semibold tracking-wider uppercase md:text-base font-title text-primary hover:text-sky"
          href="#"
        >
          Alvano Hastagina
        </motion.a>
        <ul className="">
          <li>
            <a
              href="https://docs.google.com/document/d/1lhNZ6KMWIOSFzLHpTXr24qJKNSjN_6xR/edit?usp=sharing&ouid=115773730673062895158&rtpof=true&sd=true"
              target="_blank"
            >
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="bg-transparent text-primary font-medium text-sm px-4 py-2.5 rounded-md hover:bg-sky hover:border-sky hover:text-white"
              >
                Resume
              </motion.button>
            </a>
          </li>
        </ul>
      </nav>
      {/* Header stop */}

      {/* About content */}
      <div className="p-4 py-24">
        <motion.h2
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="py-2 text-xl font-bold md:text-5xl font-title text-primary"
        >
          Alvano Hastagina
        </motion.h2>
        <motion.h3
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="py-2 text-base font-medium md:text-2xl font-title text-slate-300"
        >
          Frontend Developer
        </motion.h3>
        <motion.p
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="py-5 text-sm leading-8 tracking-wider text-semidark md:text-base"
        >
          I create website design and develop website. Focus on building
          beautiful <span className="font-medium text-primary">interfaces</span>{" "}
          & <span className="font-medium text-primary">experiences</span>.
        </motion.p>
        {/* Social Media */}
        <div className="flex justify-center">
          <div className="flex items-center gap-2 text-semidark">
            {/* Github */}
            <motion.a
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              href="https://github.com/alvanochi"
              title="GitHub"
              target="_blank"
            >
              <span className="inline-flex items-center justify-center w-10 h-10 text-2xl transition-all duration-300 cursor-pointer hover:text-sky hover:-translate-y-2">
                <FiGithub />
              </span>
            </motion.a>
            {/* Linkedin */}
            <motion.a
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              href="https://www.linkedin.com/in/alvanoh/"
              title="Linkedin"
              target="_blank"
            >
              <span className="inline-flex items-center justify-center w-10 h-10 text-2xl transition-all duration-300 cursor-pointer hover:text-sky hover:-translate-y-2">
                <FiLinkedin />
              </span>
            </motion.a>
            {/* Facebook */}
            <motion.a
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              href="https://facebook.com/navlaID"
              title="Facebook"
              target="_blank"
            >
              <span className="inline-flex items-center justify-center w-10 h-10 text-2xl transition-all duration-300 cursor-pointer hover:text-sky hover:-translate-y-2">
                <FiFacebook />
              </span>
            </motion.a>
            {/* Instagram */}
            <motion.a
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              href="https://instagram.com/alvanocchi"
              title="Instagram"
              target="_blank"
            >
              <span className="inline-flex items-center justify-center w-10 h-10 text-2xl transition-all duration-300 cursor-pointer hover:text-sky hover:-translate-y-2">
                <FiInstagram />
              </span>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
