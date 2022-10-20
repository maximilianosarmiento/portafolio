import './App.css';
import NavBar from './components/NavBar';
import Contacto from './components/Contacto';
import Tecnologias from './components/Teconologias';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProyectosContainer from './components/ProyectosContainer';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';


function App() {

  return (
    <div className='dark'>
    <div className=' bg-grisClaro dark:bg-grisOscuro'>
      <NavBar></NavBar>
      <Header></Header>
      <Main></Main>
      <Tecnologias></Tecnologias>
      <ProyectosContainer></ProyectosContainer>
      <Contacto></Contacto>
      <Footer></Footer>
    </div>
    </div>
  );
}

export default App;
