import React from "react";
import { FaDownload, FaLinkedinIn, FaGithub } from "react-icons/fa";
import pefil from "../img/perfil.jpg";
import CV from "../Maximiliano Sarmiento CV IT (English).pdf";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const Main = () => {
  const { t } = useTranslation();

  return (
    <div className="mb-10">
      <motion.div
        initial={{
          y: "-30vh",
          opacity: 0,
        }}
        animate={{
          y: "0",
          opacity: 1,
        }}
        transition={{ type: "spring", duration: 1.7, bounce: 0.3 }}
        className="bg-grisClaro dark:bg-azul w-10/12 max-w-4xl relative -top-16 mx-auto rounded-3xl border-naranja shadow-[0px_-15px_14px_-11px_rgba(0,0,2,0.25)] grid grid-cols-1 lg:grid-cols-5 p-7"
      >
        <div className="col-span-3">
          <h2 className="font-kodchasan font-medium text-5xl lg:text-6xl text-azul dark:text-grisClaro">
            Maxi <span className="text-naranja">Sarmiento</span>
          </h2>
          <h5 className="bg-gradient-to-r from-naranja to-orange-500 text-azul dark:text-grisClaro font-light font-mono w-fit px-3 mt-2 text-sm md:text-2xl rounded-sm">
            {t("home.desarrolladorFrontend")}
          </h5>
          <p className="text-grisOscuro dark:text-grisClaro font-extralight w-11/12 mt-7 text-xs md:text-base">
            {t("home.presentacion")}
          </p>
          <div className="inline-flex w-full text-blue-400 mt-5 gap-1">
          <button className="text-naranja font-kodchasan font-medium hover:text-grisClaro border-naranja hover:border-1 hover:bg-gradient-to-r from-naranja to-orange-600 border-2 w-fit rounded-xl px-1 sm:px-2 py-1 transition ease-in duration-200 mr-1">
            <a href={CV} download={CV} className="flex items-center gap-1 text-xs sm:text-base">
              {t("home.descargarCV")}
              <FaDownload />
            </a>
          </button>
          <button>
            <a
              href="https://www.linkedin.com/in/maximiliano-sarmiento-frontend/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center"
            >
              <FaLinkedinIn className="text-naranja text-2xl m-2 hover:text-orange-600 hover:scale-105 transition duration-150 items-center hover:drop-shadow-xl"></FaLinkedinIn>
            </a>
          </button>
          <button>
            <a
              href="https://github.com/maximilianosarmiento"
              target="_blank"
              rel="noreferrer"
              className="flex items-center"
            >
              <FaGithub className="text-naranja text-2xl m-2 hover:text-orange-600 hover:scale-105 transition duration-150 items-center hover:drop-shadow-xl"></FaGithub>
            </a>
          </button>
        </div>
        </div>
        <div className="pt-7 col-span-2">
          <img
            src={pefil}
            alt="perfil"
            className="animate-burbuja border-4 border-naranja w-60 lg:w-64 p-1 mx-auto"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Main;
