import './App.css';
import NavBar from './components/NavBar';
import { useTranslation } from 'react-i18next';


/* import '../src/styles/contacto.scss' */
import Contacto from './components/Contacto';
import Tecnologias from './components/Teconologias';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ProyectosCard from './components/ProyectosCard';
import ProyectosContainer from './components/ProyectosContainer';

import Formulario from './components/Formulario';


import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';







function App() {

  

  return (
    <div>
      <NavBar></NavBar>
      <Header></Header>
      <Main></Main>
      <Tecnologias></Tecnologias>
      <ProyectosContainer></ProyectosContainer>
      <Contacto></Contacto>
      <Footer></Footer>

      
      {/* <Main></Main> */}
      {/* <TituloProyectos></TituloProyectos>
      <Slider></Slider> */}
      {/* <ProyectosContainer></ProyectosContainer> */}
      {/* <Carrousel></Carrousel> */}
      {/* <Contacto></Contacto> 
      <Formulario></Formulario> */}
    </div>
  );
}

export default App;
