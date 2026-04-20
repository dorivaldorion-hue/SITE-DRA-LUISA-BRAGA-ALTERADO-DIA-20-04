import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Ticker from '../components/Ticker';
import QuemSou from '../components/QuemSou';
import Servicos from '../components/Servicos';
import FraseCitacao from '../components/FraseCitacao';
import Consultorio from '../components/Consultorio';
import Depoimentos from '../components/Depoimentos';
import Faq from '../components/Faq';
import Encerramento from '../components/Encerramento';

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1);
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 0);
    }
  }, [location]);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Ticker />
        <QuemSou />
        <Servicos />
        <FraseCitacao />
        <Depoimentos />
        <Consultorio />
        <Faq />
        <Encerramento />
      </main>
    </>
  );
}
