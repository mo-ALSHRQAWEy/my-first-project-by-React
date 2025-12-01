import React, { useEffect } from 'react';
import NaveBar from './componantes/NaveBar.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Home from './componantes/Home.jsx';
import About from './componantes/About.jsx';
import Serv from './componantes/Serv.jsx';
import Project from './componantes/Project.jsx';
import Portifolio from './componantes/Portifolio.jsx';
import Testimonials from './componantes/Test.jsx';
import Bolg from './componantes/Bolg.jsx';
import Footer from './componantes/Footer.jsx';
import { Counter } from './componantes/End.jsx';


function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <NaveBar />
      <Home />
      <About />
      <Serv />
      <Project />
      <Portifolio />
      <Testimonials />
      <Bolg />
      <Footer />
      <Counter />
    </>
  );
}



export default App;
