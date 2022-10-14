import React from "react";
import proyectos from "./Proyectos";
import Tilt from "react-parallax-tilt";
import { FaChevronCircleRight } from "react-icons/fa";
import i18n from "../i18n";
import { useTranslation } from "react-i18next";

const ProyectosCard = () => {
  const {t} = useTranslation();
  return proyectos.map((proyecto) => {
    return (

      
<div className="w-64 h-fit rounded-lg bg-gray-500 flex flex-col bg-opacity-10 m-5 backdrop-filter backdrop-blur">
    <a href={proyecto.url}>
        <img className="rounded-t-lg " src={proyecto.imagen} alt="sitio web"/>
    </a>
    <div className="p-3">
        <a href="#">
            <h5 className="mb-1 text-lg font-bold tracking-tight text-gray-900 dark:text-white">{proyecto.nombre}</h5>
        </a>
        <p className=" font-normal text-xs text-gray-500 h-16 px-2">{proyecto.descripcion}</p>
        <a className="" target="_blank" href={proyecto.url}>
            <button className="btnInfo mb-2">
              Demo
              <FaChevronCircleRight ></FaChevronCircleRight>
            </button>
          </a>
        
    </div>
</div>

);
});
};

export default ProyectosCard;
{/* <div className="cardProyecto w-40 md:w-64  p-1 rounded-xl flex flex-col content-center">
  
  <img className="rounded-lg justify-center w-40 md:w-56 self-center" src={proyecto.imagen} />
 
  <div className="p-1 sm:p-4 sm:self-center col-span-1">
    <h1 className="tituloProyecto font-semibold text-xl">
      {proyecto.nombre}
    </h1>
    <p className="text-[10px] md:text-xs text-gray-500 justify-center h-fit">
      {proyecto.descripcion}
    </p>
    <a className="" target="_blank" href={proyecto.url}>
      <button className="btnInfo mt-4 ">
        Demo
        <FaChevronCircleRight className="flechaDer flecha"></FaChevronCircleRight>
      </button>
    </a>
  </div>
</div> */}
