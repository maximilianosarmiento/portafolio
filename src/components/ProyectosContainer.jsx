import React from "react";
import proyectos from "./Proyectos";
import { FaGithub, FaPlay } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";
import { useEffect } from "react";

const ProyectosContainer = () => {
  const { t } = useTranslation();

  const animacion = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      animacion.start({
        y: 0,
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
        y: "20vh",
        opacity: 0,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return (
    <div
      ref={ref}
      id="proyectos"
      className="flex flex-col w-9/12 max-w-4xl mx-auto my-auto pt-12 overflow-hidden"
    >
      <h1 className="text-3xl mb-4 font-kodchasan font-light text-azul dark:text-grisClaro">
        {t("home.proyectos")}
      </h1>

      <motion.div
        animate={animacion}
        className="flex w-full flex-wrap justify-around self-center h-full"
      >
        {proyectos.map((proyecto, index) => {
          return (
            <div
              key={index}
              class="w-64 max-h-fit rounded-lg bg-grisClaro dark:bg-azul  flex flex-col m-5 border-2 border-naranja shadow-md hover:shadow-xl transition duration-200"
            >
              <a href={proyecto.url} rel="noreferrer" target="_blank">
                <img
                  class="rounded-t-lg"
                  src={proyecto.imagen}
                  alt="sitio web"
                />
              </a>

              <div class="p-3">
                <h5 class="mb-1 text-xl font-kodchasan font-semibold tracking-tight text-azul dark:text-grisClaro">
                  <a href={proyecto.url} rel="noreferrer" target="_blank">
                    {proyecto.nombre}
                  </a>
                </h5>

                <p class="font-normal text-xs text-grisOscuro dark:text-grisClaro dark:opacity-70 h-16">
                  {t(`home.descripcion.${proyecto.nombre.toUpperCase()}`)}
                </p>
              </div>

              <div className="flex items-center">
                <button className="btnGeneral transition duration-200 text-naranja font-kodchasan font-light m-2 hover:text-grisClaro border-naranja hover:bg-gradient-to-r from-naranja to-orange-600 border-2  w-fit rounded-xl px-2 py-1">
                  <a
                    href={proyecto.url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1"
                  >
                    {t("home.sitio")}
                    <FaPlay></FaPlay>
                  </a>
                </button>
                <button>
                  <a
                    href={proyecto.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1"
                  >
                    <FaGithub className="text-naranja text-4xl m-2 hover:text-orange-600 hover:scale-105  items-center"></FaGithub>
                  </a>
                </button>
              </div>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default ProyectosContainer;
