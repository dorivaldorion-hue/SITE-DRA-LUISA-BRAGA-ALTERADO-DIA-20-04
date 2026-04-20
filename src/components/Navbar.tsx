import { useState, useEffect } from 'react';
import { Menu, X, Instagram, Linkedin } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const navLinks = [
  { name: 'Início', href: '/#inicio' },
  { name: 'Quem Sou', href: '/#quem-sou' },
  { name: 'Serviços', href: '/#servicos' },
  { name: 'Depoimentos', href: '/#depoimentos' },
  { name: 'Consultório', href: '/#consultorio' },
  { name: 'Perguntas frequentes', href: '/#faq' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -80% 0px' }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-[1000] bg-branco transition-all duration-300 ${
          isScrolled ? 'shadow-[0_2px_16px_rgba(44,24,16,0.08)]' : ''
        }`}
        style={{ borderBottom: '1px solid rgba(212,145,122,0.15)' }}
      >
        <div className="flex items-center justify-between h-[60px] md:h-[72px] px-6 md:px-[max(40px,5vw)]">
          {/* Logo */}
          <a href="/#inicio" className="flex items-center">
            <img 
              src="https://res.cloudinary.com/dezwlu6p2/image/upload/v1776688937/Prancheta_23_c%C3%B3pia_8_amwcsn.webp" 
              alt="Símbolo Dra. Luísa Braga" 
              className="h-[36px] md:h-[44px] w-auto object-contain -mr-1"
            />
            <div className="flex flex-col">
              <span className="font-display font-semibold text-[16px] md:text-[18px] text-texto-escuro leading-none tracking-wide">
                Dra. Luísa Braga
              </span>
              <span className="font-body font-normal text-[10px] md:text-[11px] text-texto-suave tracking-[0.1em] uppercase mt-1">
                Saúde feminina
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-[36px]">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-body font-medium text-[11px] tracking-[0.12em] uppercase transition-colors duration-200 ${
                  activeSection === link.href.substring(1)
                    ? 'text-primaria'
                    : 'text-texto-escuro hover:text-primaria'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="hidden md:flex items-center gap-5">
            <div className="flex items-center gap-3 mr-2">
              <a
                href="https://instagram.com/luisaginecologia"
                target="_blank"
                rel="noopener noreferrer"
                className="text-texto-suave hover:text-primaria transition-colors duration-200"
              >
                <Instagram size={18} strokeWidth={1.5} />
              </a>
              <a
                href="https://www.linkedin.com/in/lu%C3%ADsa-guedes-braga-b8977b108/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-texto-suave hover:text-primaria transition-colors duration-200"
              >
                <Linkedin size={18} strokeWidth={1.5} />
              </a>
            </div>
            <a
              href="https://wa.me/5511998908666?text=Olá%20Dra.%20Luísa%2C%20gostaria%20de%20agendar%20uma%20consulta"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-cta hover:bg-cta-hover text-branco rounded-full px-[22px] py-[10px] text-[12px] font-semibold tracking-[0.04em] transition-all duration-250 hover:-translate-y-[1px]"
            >
              Agendar Consulta
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-texto-escuro p-2 -mr-2"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 z-[1099] md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-0 right-0 h-full w-[280px] bg-branco z-[1100] shadow-2xl flex flex-col md:hidden"
            >
              <div className="flex justify-end p-4">
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-texto-escuro"
                >
                  <X size={24} />
                </button>
              </div>
              <div className="flex flex-col flex-grow">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="font-body font-medium text-[15px] text-texto-escuro px-[32px] py-[18px] border-b border-decorativo/30 uppercase tracking-wide"
                  >
                    {link.name}
                  </a>
                ))}
                <div className="mt-8 px-[32px]">
                  <a
                    href="https://wa.me/5511998908666?text=Olá%20Dra.%20Luísa%2C%20gostaria%20de%20agendar%20uma%20consulta"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-cta text-branco text-center rounded-full py-[14px] text-[14px] font-semibold tracking-[0.04em]"
                  >
                    Agendar Consulta
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
