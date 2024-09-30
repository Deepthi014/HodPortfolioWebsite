import Header from './components/Header';
import Featured from './components/Featured';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/App.css';  

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: false,   
      mirror:true,
      offset: 200,   
  });
}, []);
  return (
    <>
    <div className='container'>
      <Header />
      <main className='wrapper'>
        <Featured />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
      </div>
    </>
  );
}

export default App;
