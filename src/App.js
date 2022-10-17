import './App.css';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import NavBar from './components/NavBar';
import Contacto from './components/Contacto';
import Tecnologias from './components/Teconologias';
import ProyectosContainer from './components/ProyectosContainer';
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
    </div>
  );
}

export default App;
