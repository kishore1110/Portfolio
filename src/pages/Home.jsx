import { useEffect } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Achievements from '../components/Achievements';
import Contact from '../components/Contact';

export default function Home() {
  useEffect(() => {
    document.title = 'Kishore - Portfolio';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col w-full overflow-hidden">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Achievements />
      <Contact />
    </div>
  );
}
