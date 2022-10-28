import React, { useState } from "react";
import { Formik } from "formik";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";
import { FaChevronCircleRight } from "react-icons/fa";

const Formulario = () => {
  const { t } = useTranslation();

  function enviarEmail(params) {
    console.log(params);

    emailjs
      .send("service_ucyzy7n", "template_zzcgbf8", params, "dsWGoHBUsPv8yohyq")
      .then((res) => {
        console.log(res);
      });
  }

  const [formularioEnviado, setFormularioEnviado] = useState(false);
  return (
    <>
      <Formik
        initialValues={{
          nombre: "",
          correo: "",
          textArea: "",
        }}
        validate={(valores) => {
          let errores = {};

          if (!valores.nombre) {
            errores.nombre = t("home.ingresarNombre");
            console.log("");
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)) {
            errores.nombre = t("home.errorNombre");
          }

          if (!valores.correo) {
            errores.correo = t("home.ingresarCorreo");
            console.log("");
          } else if (
            !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
              valores.correo
            )
          ){
            errores.correo = t("home.errorCorreo");
          }

          return errores;
        }}
        onSubmit={(valores, { resetForm }) =>{
          console.log("Formulario Enviado");
          console.log(valores);
          setFormularioEnviado(true);
          resetForm();
          setTimeout(() => setFormularioEnviado(false), 5000);
          enviarEmail(valores);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleSubmit,
          handleChange,
          handleBlur,
        }) => (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col w-full p-2 lg:pr-4 self-center"
          >
            {console.log(errors)}

            <div className="divNombre">
              <label
                htmlFor="nombre"
                className="text-azul dark:text-grisClaro font-kodchasan font-light"
              >
                {t("home.nombre")}
              </label>
              <input
                onBlur={handleBlur}
                className="shadow-md w-full bg-grisClaro border-2 border-naranja mt-3 p-1 rounded-lg"
                type="text"
                name="nombre"
                id="nombre"
                placeholder="Tony Stark"
                value={values.nombre}
                onChange={handleChange}
              ></input>

              {touched.nombre && errors.nombre && (
                <div className=" text-red-600">{errors.nombre}</div>
              )}
            </div>

            <div className="divApellido border-naranja mt-5">
              <label
                htmlFor="correo"
                className="text-azul dark:text-grisClaro font-kodchasan font-light"
              >
                {t("home.correo")}
              </label>
              <input
                onBlur={handleBlur}
                className="shadow-md w-full border-2 bg-grisClaro border-naranja mt-3 p-1 rounded-lg"
                type="email"
                name="correo"
                id="correo"
                placeholder="tonystark@starkindustries.com"
                value={values.correo}
                onChange={handleChange}
              ></input>

              {touched.correo && errors.correo && (
                <div className="text-red-600">{errors.correo}</div>
              )}
            </div>

            <textarea
              className="shadow-xl mt-4 bg-grisClaro border-2 border-naranja resize-none h-32 rounded-lg"
              name="textArea"
              id="textArea"
              onChange={handleChange}
              value={values.textArea}
            ></textarea>

            {formularioEnviado && (
              <p className="text-green-600 text-center py-1">
                {t("home.saludoContacto")}
              </p>
            )}

            <>
              <button
                type="submit"
                className="text-naranja font-kodchasan font-medium mt-4 hover:text-grisClaro border-naranja hover:border-1 hover:bg-gradient-to-r from-naranja to-orange-600 border-2 w-fit rounded-xl px-2 py-1 transition ease-in duration-200 group"
              >
                <span href="" className="flex items-center gap-1">
                  {t("home.enviar")}
                  <FaChevronCircleRight className="group-hover:transform group-hover:translate-x-2 group-hover:transition group-hover:duration-200 mr-1"></FaChevronCircleRight>
                </span>
              </button>
            </>
          </form>
        )}
      </Formik>
    </>
  );
};

export default Formulario;
