import jauImg from "../img/jau1.png";
import brumImg from "../img/brum1.png";
import reactstore from "../img/reactstore1.png";

let proyectos = [
  {
    id: 1,
    nombre: "JaU",
    url: "https://maximilianosarmiento.github.io/JaU/",
    repo: "https://github.com/maximilianosarmiento/JaU",
    imagen: jauImg,
    descripcion:
      'App orientada a resolver problemas cotidianos, de forma sencilla o "casera"',
  },
  {
    id: 2,
    nombre: "Brum",
    url: "https://maximilianosarmiento.github.io/brum_fletes/",
    repo: "https://github.com/maximilianosarmiento/brum_fletes",
    imagen: brumImg,
    descripcion:
      "Plataforma que permite, buscar flete y precio en base a nuestra necesidad de carga",
  },
  {
    id: 3,
    nombre: "React-Store",
    url: "https://sprightly-longma-a62fe8.netlify.app/",
    repo: "https://github.com/maximilianosarmiento/cursoReact_sarmiento",
    imagen: reactstore,
    descripcion:
      "E-Commerce, presentado como proyecto final en curso de React JS en Coderhouse",
  },
];

export default proyectos;
