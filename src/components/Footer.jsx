import React from "react";
import { FaLinkedinIn, FaGithub, FaChevronCircleUp } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-azul text-naranja h-16 mt-5 w-full items-center">
      <div className="flex max-w-6xl mx-auto justify-around items-center h-full">
        <div className="justify-center w-fit text-blue-400 self-center flex flex-col md:flex-row">
          <button>
            <a
              href="https://www.linkedin.com/in/maximiliano-sarmiento-frontend/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1"
            >
              <FaLinkedinIn className="text-naranja text-xl md:text-2xl m-0 md:m-2 hover:text-grisClaro hover:scale-105 transition duration-150 items-center hover:drop-shadow-xl"></FaLinkedinIn>
            </a>
          </button>
          <button>
            <a
              href="https://github.com/maximilianosarmiento"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1"
            >
              <FaGithub className="text-naranja text-xl md:text-2xl m-0 md:m-2 hover:text-grisClaro hover:scale-105 transition duration-150 items-center hover:drop-shadow-xl"></FaGithub>
            </a>
          </button>
        </div>

        <div className="h-full flex flex-col items-center justify-center">
          <span className="font-kodchasan font-medium text-naranja text-3xl justify-center ml-0 md:ml-1">
            M
          </span>
          <span className="text-xs">{t("home.creadoPor")}</span>
        </div>
        <a
          href="#about"
          className="flex flex-col md:flex-row items-center hover:text-grisClaro transition duration-150 group"
        >
          {t("home.volverAlInicio")}
          <FaChevronCircleUp className="hidden md:block group-hover:animate-none animate-bounce ml-2 group-hover:transform group-hover:-translate-y-2 group-hover:scale-110 transition duration-150"></FaChevronCircleUp>
        </a>
      </div>
    </div>
  );
};

export default Footer;
