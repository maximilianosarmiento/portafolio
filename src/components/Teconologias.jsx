import React from "react";
import Cards from "./Cards";
import { useTranslation } from "react-i18next";

import i18n from "../i18n";

const Teconologias = () => {
  const {t} = useTranslation();
  return (
    <div className="flex flex-col  w-9/12 max-w-4xl mx-auto my-4">

      
        <h1 className="text-3xl  my-4 font-kodchasan font-light text-azul">
          {t("home.habilidades")}
        </h1>
      

      <div className=" flex flex-wrap  self-center w-full  md:mt-0 justify-center">
        <Cards className=""></Cards>
      </div>

    </div>
  );
};

export default Teconologias; /* flex flex-col col-span-full mt-4  */ /* col-span-2 text-center */
