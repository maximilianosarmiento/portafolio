import React from "react";
import arg from "../img/arg.png";
import usa from "../img/usa.png";
import { useTranslation } from "react-i18next";
import { useState, useContext } from "react";
import { darkModeContext } from "../Context/darkModeContext.jsx";
import { FaMoon, FaSun } from "react-icons/fa";
import i18n from "../i18n";

const NavBar = () => {
  const contexto = useContext(darkModeContext);
  console.log(contexto);

  const darkMode = () => {
    contexto.toggleDarkMode();
  };

  const { t } = useTranslation();

  const [idioma, setIdioma] = useState("en");
  const cambiarIdioma = () => {
    i18n.changeLanguage(idioma);
    idioma === "es" ? setIdioma("en") : setIdioma("es");
  };

  return (
    <div className="bg-azul h-10 fixed z-10 w-full">
      <div className="container max-w-6xl h-full mx-auto flex place-content-around items-center">
        <h1 className="font-kodchasan font-medium text-naranja text-3xl justify-center">
          <a href="../index.html">M</a>
        </h1>

        <ul className="flex flex-row gap-3 lg:gap-9 text-center justify-center w-72">
          <li>
            <a
              className="text-naranja hover:text-grisClaro transition ease-in duration-150"
              href="#about"
            >
              {t("home.sobreMi")}
            </a>
          </li>
          <li>
            <a
              className="text-naranja hover:text-grisClaro transition ease-in duration-150"
              href="#proyectos"
            >
              {t("home.proyectos")}
            </a>
          </li>
          <li>
            <a
              className="text-naranja hover:text-grisClaro transition ease-in duration-150"
              href="#contacto"
            >
              {t("home.contacto")}
            </a>
          </li>
        </ul>

        <div className="flex gap-3 items-center">
          <button onClick={darkMode}>
            {contexto.isDark === false  ? 
              <FaSun className="text-xl text-naranja hover:text-grisClaro transition duration-150 cursor-pointer"></FaSun>
             :
              <FaMoon className="text-xl text-naranja hover:text-grisClaro transition duration-150 cursor-pointer"></FaMoon>
            }
          </button>

          <button onClick={cambiarIdioma}>
            {idioma === "es" ? (
              <img
                src={arg}
                alt="castellano"
                className="w-6 cursor-pointer hover:scale-110 transition duration-150"
              />
            ) : (
              <img
                src={usa}
                alt="castellano"
                className="w-6 cursor-pointer hover:scale-110 transition duration-150"
              />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
