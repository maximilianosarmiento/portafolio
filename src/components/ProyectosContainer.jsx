import React from "react";
import ProyectosCard from "./ProyectosCard";
import proyectos from "./Proyectos";
import { FaGithub, FaPlay } from "react-icons/fa";
import i18n from "../i18n";
import { useTranslation } from "react-i18next";

const ProyectosContainer = () => {
  const { t } = useTranslation();

  return (
    <div
      id="proyectos"
      className=" flex flex-col w-9/12 max-w-4xl mx-auto my-auto pt-12 "
    >
      <h1 className="text-3xl   mb-4 font-kodchasan font-light text-azul dark:text-grisClaro">
        {t("home.proyectos")}
      </h1>

      <div className="flex w-full flex-wrap justify-around self-center">
        {proyectos.map((proyecto, index) => {
          return (
            <div
              key={index}
              class="w-64 max-h-fit  rounded-lg  bg-grisClaro dark:bg-azul  flex flex-col  m-5  border-2 border-naranja shadow-md hover:shadow-xl  transition duration-200"
            >
              <a href={proyecto.url} target="_blank">
                <img
                  class="rounded-t-lg "
                  src={proyecto.imagen}
                  alt="sitio web"
                />
              </a>

              <div class="p-3">
                <h5 class="mb-1 text-xl font-kodchasan font-semibold tracking-tight text-azul dark:text-grisClaro">
                  <a href={proyecto.url} target="_blank">
                    {proyecto.nombre}
                  </a>
                </h5>

                <p class=" font-normal text-xs text-grisOscuro h-16 ">
                  {t(`home.descripcion.${proyecto.nombre.toUpperCase()}`)}
                </p>
              </div>

              <div className="flex items-center ">
                <button className="btnGeneral transition duration-200 text-naranja font-kodchasan font-light m-2  hover:text-grisClaro border-naranja hover:bg-gradient-to-r from-naranja to-orange-600  border-2  w-fit rounded-xl px-2 py-1">
                  <a
                    href={proyecto.url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1"
                  >{t("home.sitio")}
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
                    <FaGithub className="text-naranja text-4xl m-2  hover:text-orange-600 hover:scale-105  items-center"></FaGithub>
                  </a>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProyectosContainer;
