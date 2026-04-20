import { useEffect, useRef, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Moon, Activity, Droplets, Infinity as InfinityIcon, Microscope, Flower, ArrowRight } from 'lucide-react';
import LogoCursorTrail from './LogoCursorTrail';
import ServicosBackground from './ServicosBackground';

const servicos = [
  {
    slug: 'ginecologia-endocrina',
    icone: <InfinityIcon strokeWidth={1.5} className="w-[22px] h-[22px] md:w-[24px] md:h-[24px]" />,
    titulo: 'Ginecologia Endócrina',
    tag: 'Avaliação & Tratamento',
    descricao: 'Distúrbios hormonais e síndrome dos ovários policísticos (SOP).',
  },
  {
    slug: 'ciclo-menstrual',
    icone: <Activity strokeWidth={1.5} className="w-[22px] h-[22px] md:w-[24px] md:h-[24px]" />,
    titulo: 'Ciclo Menstrual',
    tag: 'Saúde & Controle',
    descricao: 'Irregularidade, sangramentos e TPM.',
  },
  {
    slug: 'climaterio-e-menopausa',
    icone: <Flower strokeWidth={1.5} className="w-[22px] h-[22px] md:w-[24px] md:h-[24px]" />,
    titulo: 'Climatério & Menopausa',
    tag: 'Terapia Hormonal',
    descricao: 'Manejo de calorões, ressecamento vaginal, terapia hormonal individualizada, saúde óssea e sexual.',
  },
  {
    slug: 'doencas-do-colo-e-vagina',
    icone: <Microscope strokeWidth={1.5} className="w-[22px] h-[22px] md:w-[24px] md:h-[24px]" />,
    titulo: 'Doenças do Colo e Vagina',
    tag: 'HPV & Prevenção',
    descricao: 'Rastreio, tratamento das lesões, prevenção e vacinação.',
  },
  {
    slug: 'corrimentos-vaginais',
    icone: <Droplets strokeWidth={1.5} className="w-[22px] h-[22px] md:w-[24px] md:h-[24px]" />,
    titulo: 'Corrimentos Vaginais',
    tag: 'Diagnóstico & Acompanhamento',
    descricao: 'Avaliação microscópica do conteúdo vaginal (Vaginose, candidíase), com diagnóstico, tratamento e seguimento adequados.',
  },
  {
    slug: 'contracepcao',
    icone: <Moon strokeWidth={1.5} className="w-[22px] h-[22px] md:w-[24px] md:h-[24px]" />,
    titulo: 'Contracepção',
    tag: 'DIU & Implanon',
    descricao: 'Escolha de método anticoncepcional, inserção e retirada de DIU, inserção e retirada de Implanon.',
  },
];

export default function Servicos() {
  const [isMobile, setIsMobile] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  
  const angleRef = useRef(0);
  const targetAngleRef = useRef(0);
  const isAnimatingRef = useRef(false);
  const autoplayTimerRef = useRef<NodeJS.Timeout | null>(null);
  
  // Drag state
  const startXRef = useRef(0);
  const isDraggingRef = useRef(false);

  const positionCards = useCallback((angle: number) => {
    const currentIsMobile = window.innerWidth <= 768;
    
    // Horizontal spacing between cards (distance between centers)
    const X_OFFSET = currentIsMobile ? 150 : 200; 
    
    const totalCards = cardsRef.current.length;
    const angleStep = 360 / totalCards;

    cardsRef.current.forEach((card, i) => {
      if (!card) return;
      
      // Calculate continuous angle
      let cardAngle = (angle + i * angleStep) % 360;
      
      // Normalize to -180 to 180 range
      if (cardAngle > 180) cardAngle -= 360;
      if (cardAngle < -180) cardAngle += 360;
      
      // Calculate continuous step (-3 to 3 for 6 cards)
      const step = cardAngle / angleStep;
      const absStep = Math.abs(step);
      
      // Linear translation for perfect even spacing
      const translateX = step * X_OFFSET;
      
      // Flat rotation
      const rotateY = 0;
      
      // Scale down linearly as it goes further from center
      const scale = Math.max(0.75, 1 - absStep * 0.12);
      
      // Fade out linearly as it goes further
      const opacity = Math.max(0, 1 - absStep * 0.35);
      
      // Z-index based on distance from center
      const zIndex = Math.round(100 - absStep * 10);
      
      // Small translateZ for depth sorting in 3D space
      const translateZ = -absStep * 40; 
      
      card.style.transform = `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`;
      card.style.opacity = opacity.toString();
      card.style.zIndex = zIndex.toString();
      
      // Hide cards that are too far back to prevent weird overlaps during rotation
      if (absStep > 2.5) {
        card.style.opacity = '0';
        card.style.pointerEvents = 'none';
      } else {
        card.style.pointerEvents = absStep < 0.5 ? 'auto' : 'none';
      }
    });
  }, []);

  const rotateTo = useCallback((targetAngle: number, duration = 650) => {
    isAnimatingRef.current = true;
    const startAngle = angleRef.current;
    const startTime = performance.now();
    
    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // ease-out quartic for a snappy, fluid, light feel
      const eased = 1 - Math.pow(1 - progress, 4);
      
      angleRef.current = startAngle + (targetAngle - startAngle) * eased;
      positionCards(angleRef.current);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        isAnimatingRef.current = false;
        angleRef.current = targetAngle;
        
        const totalCards = servicos.length;
        const angleStep = 360 / totalCards;
        let normalizedAngle = ((targetAngle % 360) + 360) % 360;
        let active = Math.round((360 - normalizedAngle) / angleStep) % totalCards;
        
        setActiveIndex(active);
      }
    };
    
    requestAnimationFrame(animate);
  }, [positionCards]);

  const next = useCallback(() => {
    if (isAnimatingRef.current) return;
    targetAngleRef.current -= (360 / servicos.length);
    rotateTo(targetAngleRef.current);
  }, [rotateTo]);

  const prev = useCallback(() => {
    if (isAnimatingRef.current) return;
    targetAngleRef.current += (360 / servicos.length);
    rotateTo(targetAngleRef.current);
  }, [rotateTo]);

  const startAutoplay = useCallback(() => {
    if (autoplayTimerRef.current) clearInterval(autoplayTimerRef.current);
    autoplayTimerRef.current = setInterval(() => {
      next();
    }, 5500);
  }, [next]);

  const stopAutoplay = useCallback(() => {
    if (autoplayTimerRef.current) {
      clearInterval(autoplayTimerRef.current);
      autoplayTimerRef.current = null;
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      positionCards(angleRef.current);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [positionCards]);

  useEffect(() => {
    positionCards(0);
    startAutoplay();
    return () => stopAutoplay();
  }, [positionCards, startAutoplay, stopAutoplay]);

  // Drag handlers
  const handleDragStart = (clientX: number) => {
    startXRef.current = clientX;
    isDraggingRef.current = true;
    stopAutoplay();
  };

  const handleDragEnd = (clientX: number) => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;
    
    const deltaX = clientX - startXRef.current;
    if (deltaX > 50) {
      prev();
    } else if (deltaX < -50) {
      next();
    }
    startAutoplay();
  };

  return (
    <section id="servicos" className="bg-fundo pt-[64px] md:pt-[100px] relative overflow-hidden">
      <ServicosBackground />
      <LogoCursorTrail />
      
      {/* CABEÇALHO */}
      <div className="relative z-10 max-w-[1140px] mx-auto px-[max(32px,5vw)] text-center mb-[64px]">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="block font-body font-medium text-[10px] tracking-[0.20em] uppercase text-primaria mb-[12px]"
        >
          ESPECIALIDADES
        </motion.span>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display font-bold text-[32px] md:text-[46px] text-texto-escuro mb-[16px] leading-[1.2]"
        >
          Principais Tratamentos
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-body font-normal text-[17px] text-texto-medio max-w-[480px] mx-auto leading-[1.75]"
        >
          Tratamentos personalizados com abordagem baseada em evidências.
        </motion.p>
      </div>

      {/* CARROSSEL 3D */}
      <div 
        className="w-full h-[400px] md:h-[480px] relative z-10 select-none" 
        style={{ perspective: '1400px' }}
        onMouseEnter={stopAutoplay}
        onMouseLeave={startAutoplay}
        onTouchStart={(e) => handleDragStart(e.touches[0].clientX)}
        onTouchEnd={(e) => handleDragEnd(e.changedTouches[0].clientX)}
        onMouseDown={(e) => handleDragStart(e.clientX)}
        onMouseUp={(e) => handleDragEnd(e.clientX)}
      >
        <div className="relative w-full h-full" style={{ transformStyle: 'preserve-3d' }}>
          {servicos.map((servico, i) => {
            return (
              <div
                key={i}
                ref={el => { cardsRef.current[i] = el; }}
                className="absolute top-1/2 left-1/2 w-[220px] md:w-[280px] h-[340px] md:h-[420px] -mt-[170px] md:-mt-[210px] -ml-[110px] md:-ml-[140px] rounded-[24px] cursor-pointer transition-[filter] duration-400 ease-in-out will-change-transform bg-white/60 backdrop-blur-[12px] border border-white/50 shadow-[0_8px_32px_rgba(44,24,16,0.06)]"
                style={{ transformOrigin: 'center center' }}
              >
                <div className="p-[24px_20px] md:p-[32px_24px] flex flex-col justify-end h-full">
                  <div className="w-[48px] h-[48px] md:w-[52px] md:h-[52px] rounded-[16px] flex items-center justify-center mb-auto bg-gradient-to-br from-white/90 to-white/40 border border-white/60 shadow-[0_4px_12px_rgba(0,0,0,0.04)] text-primaria">
                    {servico.icone}
                  </div>
                  
                  <h3 className="font-display font-semibold text-[18px] md:text-[22px] leading-[1.2] mb-[8px] text-texto-escuro">
                    {servico.titulo}
                  </h3>
                  
                  <span className="font-body font-medium text-[9px] md:text-[10px] tracking-[0.15em] uppercase mb-[12px] text-primaria/80">
                    {servico.tag}
                  </span>
                  
                  <p className="font-body font-normal text-[12px] md:text-[13px] leading-[1.6] text-texto-medio mb-[20px]">
                    {servico.descricao}
                  </p>

                  <div className="mt-auto space-y-[12px]">
                    <Link 
                      to={`/tratamentos/${servico.slug}`}
                      className="group/btn flex items-center justify-center gap-[6px] w-full font-body font-semibold text-[13px] tracking-[0.05em] uppercase text-cta hover:text-cta-hover transition-colors mb-[8px]"
                    >
                      Saiba mais
                      <ArrowRight size={14} className="transition-transform group-hover/btn:translate-x-[2px]" />
                    </Link>

                    <a 
                      href="https://wa.me/5511998908666?text=Olá%20Dra.%20Luísa%2C%20gostaria%20de%20agendar%20uma%20consulta"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-[8px] w-full border-[1.5px] border-cta text-cta hover:bg-cta hover:text-white rounded-full py-[10px] font-body font-semibold text-[12px] uppercase tracking-wide transition-all"
                    >
                      Agendar Consulta
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* CONTROLES */}
      <div className="relative z-10 flex items-center justify-center gap-[24px] mt-[40px] pb-[80px]">
        <button 
          onClick={prev}
          className="w-[40px] md:w-[48px] h-[40px] md:h-[48px] rounded-full border-[1.5px] border-primaria bg-transparent text-primaria flex items-center justify-center transition-all duration-250 hover:bg-cta hover:border-cta hover:text-branco"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
        </button>
        
        <div className="flex gap-[8px]">
          {servicos.map((_, dot) => (
            <div 
              key={dot}
              className={`h-[8px] rounded-full transition-all duration-300 ${activeIndex === dot ? 'w-[24px] bg-cta' : 'w-[8px] bg-decorativo'}`}
            />
          ))}
        </div>
        
        <button 
          onClick={next}
          className="w-[40px] md:w-[48px] h-[40px] md:h-[48px] rounded-full border-[1.5px] border-primaria bg-transparent text-primaria flex items-center justify-center transition-all duration-250 hover:bg-cta hover:border-cta hover:text-branco"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </button>
      </div>

    </section>
  );
}
