import { useEffect, useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Links from './components/Links';
import './App.css';
function App() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY >= 50) {
        setShow(true);
      } else {
        setShow(false);
      }
    };
  }, []);
  return (
    <div className='App'>
      <Hero />
      <Skills />
      <Contact />
      <Links />
      <a
        style={
          show
            ? {
                zIndex: 9999,
                position: 'fixed',
                border: 'none',
                outline: 'none',
                cursor: 'pointer',
                bottom: '10%',
                left: '10%',
                fontSize: '100%',
                backgroundColor: 'none',
                textDecoration: 'none',
                color: 'sandybrown',
              }
            : {
                display: 'none',
              }
        }
        href='#top'
      >
        ☝ go to top
      </a>
    </div>
  );
}

export default App;
