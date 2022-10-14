import React from 'react'
import Formulario from './Formulario'
/* import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
} from "@fortawesome/free-solid-svg-icons"; */
import{
    FaLinkedinIn,
    FaGithub
} from 'react-icons/fa'
import i18n from "../i18n";
import { useTranslation } from "react-i18next";

const Contacto = () => {
  const {t} = useTranslation();
  return (
    <div id='contacto' className='flex flex-col md:flex-row max-w-4xl mx-auto mt-12'>
      <div className='flex flex-col   self-center w-1/2'>
          <div className='flex place-content-around group'>
              <h1 className="text-4xl   mb-4 font-kodchasan font-light text-azul ">{t("home.contactame")}<span className="text-4xl mb-4 font-kodchasan font-light text-naranja">me!</span></h1>
          </div>

          <div className='inline-flex justify-center w-60 text-blue-400 self-center mt-3'>
            <button ><a href='https://www.linkedin.com/in/maximiliano-sarmiento-frontend/' target='_blank' rel='noreferrer' className='flex items-center gap-1 ' > <FaLinkedinIn className='text-naranja text-4xl m-2  hover:text-orange-600 hover:scale-105 transition duration-150  items-center hover:drop-shadow-xl'></FaLinkedinIn></a></button>
            <button ><a href='https://github.com/maximilianosarmiento' target='_blank' rel='noreferrer' className='flex items-center gap-1 ' > <FaGithub className='text-naranja text-4xl m-2  hover:text-orange-600 hover:scale-105 transition duration-150  items-center hover:drop-shadow-xl'></FaGithub></a></button>
          </div>
      </div>

      <Formulario></Formulario>
        
    </div>
    
  )
}

export default Contacto