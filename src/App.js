import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Links from './components/Links';
function App() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <Hero />
      <Skills />
      <Contact />
      <Links />
    </>
  );
}

export default App;
