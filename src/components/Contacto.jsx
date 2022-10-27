import { React, useEffect } from "react";
import Formulario from "./Formulario";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Contacto = () => {
  const { t } = useTranslation();
  const animacion = useAnimation();
  const animacionForm = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.35,
  });

  useEffect(() => {
    if (inView) {
      animacion.start({
        x: 0,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 1.5,
          bounce: 0.2,
        },
      });
      animacionForm.start({
        x: 0,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 1.5,
          bounce: 0.2,
        },
      });
    }
    if (!inView) {
      animacion.start({
        x: "-15vw",
        opacity: 0,
      });
      animacionForm.start({
        x: "15vw",
        opacity: 0,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return (
    <div
      ref={ref}
      id="contacto"
      className="flex flex-col md:flex-row max-w-4xl mx-auto mt-12"
    >
      <motion.div
        animate={animacion}
        className="flex flex-col self-center w-1/2"
      >
        <div className="flex place-content-around group">
          <h1 className="text-4xl mb-4 font-kodchasan font-light text-azul dark:text-grisClaro">
            {t("home.contactame")}
            <span className="text-4xl mb-4 font-kodchasan font-light text-naranja">
              me!
            </span>
          </h1>
        </div>

        <div className="inline-flex justify-center w-60 text-blue-400 self-center mt-3">
          <button>
            <a
              href="https://www.linkedin.com/in/maximiliano-sarmiento-frontend/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1"
            >
              <FaLinkedinIn className="text-naranja text-4xl m-2 hover:text-orange-600 hover:scale-105 transition duration-150 items-center hover:drop-shadow-xl"></FaLinkedinIn>
            </a>
          </button>
          <button>
            <a
              href="https://github.com/maximilianosarmiento"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1"
            >
              <FaGithub className="text-naranja text-4xl m-2 hover:text-orange-600 hover:scale-105 transition duration-150 items-center hover:drop-shadow-xl"></FaGithub>
            </a>
          </button>
        </div>
      </motion.div>
      <motion.div animate={animacionForm} className="w-full">
        <Formulario></Formulario>
      </motion.div>
    </div>
  );
};

export default Contacto;
