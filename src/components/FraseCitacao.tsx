import { useState, useRef, MouseEvent } from 'react';
import { motion } from 'motion/react';

export default function FraseCitacao() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [gradientPos, setGradientPos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const handleMouseMove = (e: MouseEvent) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    
    // Parallax (relative to center)
    const px = e.clientX - rect.left - rect.width / 2;
    const py = e.clientY - rect.top - rect.height / 2;
    setMousePos({ x: px, y: py });

    // Gradient (relative to top-left)
    const gx = e.clientX - rect.left;
    const gy = e.clientY - rect.top;
    setGradientPos({ x: gx, y: gy });
  };

  const handleMouseEnter = () => setIsHovered(true);
  
  const handleMouseLeave = () => {
    setIsHovered(false);
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <section 
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative overflow-hidden w-full bg-fundo py-20 md:py-32 flex items-center justify-center"
    >
      {/* Dynamic Gradient Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{ 
          background: isHovered 
            ? `radial-gradient(600px circle at ${gradientPos.x}px ${gradientPos.y}px, rgba(212, 145, 122, 0.06), transparent 70%)` 
            : 'transparent',
          transition: 'background 0.4s ease'
        }}
      />

      {/* Parallax Layers */}
      
      {/* Layer 1: factor 0.02 */}
      <div 
        className="absolute inset-0 pointer-events-none transition-transform duration-300 ease-out"
        style={{ transform: `translate(${mousePos.x * 0.02}px, ${mousePos.y * 0.02}px)` }}
      >
        {/* SVG Circles - Top Left Corner */}
        <svg className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] text-primaria opacity-[0.12]" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="0.5" vectorEffect="non-scaling-stroke" />
          <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.5" vectorEffect="non-scaling-stroke" />
        </svg>
        {/* Dots */}
        <div className="absolute top-[20%] left-[15%] w-[2px] h-[2px] rounded-full bg-primaria opacity-20" />
        <div className="absolute bottom-[30%] right-[20%] w-[2px] h-[2px] rounded-full bg-primaria opacity-20" />
      </div>

      {/* Layer 2: factor 0.04 */}
      <div 
        className="absolute inset-0 pointer-events-none transition-transform duration-300 ease-out"
        style={{ transform: `translate(${mousePos.x * 0.04}px, ${mousePos.y * 0.04}px)` }}
      >
        {/* SVG Circles - Bottom Right Corner */}
        <svg className="absolute bottom-[-250px] right-[-200px] w-[600px] h-[600px] text-primaria opacity-[0.12]" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.5" vectorEffect="non-scaling-stroke" />
          <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="0.5" vectorEffect="non-scaling-stroke" />
          <circle cx="50" cy="50" r="10" fill="none" stroke="currentColor" strokeWidth="0.5" vectorEffect="non-scaling-stroke" />
        </svg>
        <svg className="absolute top-[10%] right-[10%] w-[150px] h-[150px] text-primaria opacity-[0.12]" viewBox="0 0 100 100">
          <line x1="0" y1="100" x2="100" y2="0" stroke="currentColor" strokeWidth="0.5" vectorEffect="non-scaling-stroke" />
          <line x1="20" y1="100" x2="100" y2="20" stroke="currentColor" strokeWidth="0.5" vectorEffect="non-scaling-stroke" />
        </svg>
        {/* Dots */}
        <div className="absolute top-[40%] right-[30%] w-[2px] h-[2px] rounded-full bg-primaria opacity-20" />
        <div className="absolute bottom-[15%] left-[25%] w-[2px] h-[2px] rounded-full bg-primaria opacity-20" />
      </div>

      {/* Layer 3: factor -0.02 */}
      <div 
        className="absolute inset-0 pointer-events-none transition-transform duration-300 ease-out"
        style={{ transform: `translate(${mousePos.x * -0.02}px, ${mousePos.y * -0.02}px)` }}
      >
        {/* SVG Circles - Top Right Overflowing */}
        <svg className="absolute top-[-150px] right-[-100px] w-[450px] h-[450px] text-primaria opacity-[0.10]" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" vectorEffect="non-scaling-stroke" />
          <circle cx="50" cy="50" r="15" fill="none" stroke="currentColor" strokeWidth="0.5" vectorEffect="non-scaling-stroke" />
        </svg>
        <svg className="absolute bottom-[10%] left-[5%] w-[100px] h-[100px] text-primaria opacity-[0.12]" viewBox="0 0 100 100">
          <line x1="0" y1="0" x2="100" y2="100" stroke="currentColor" strokeWidth="0.5" vectorEffect="non-scaling-stroke" />
        </svg>
        {/* Dots */}
        <div className="absolute top-[60%] left-[10%] w-[2px] h-[2px] rounded-full bg-primaria opacity-20" />
        <div className="absolute top-[10%] left-[40%] w-[2px] h-[2px] rounded-full bg-primaria opacity-20" />
        <div className="absolute bottom-[40%] right-[10%] w-[2px] h-[2px] rounded-full bg-primaria opacity-20" />
        <div className="absolute top-[80%] right-[40%] w-[2px] h-[2px] rounded-full bg-primaria opacity-20" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[600px] px-6 mx-auto text-center flex flex-col items-center">
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9 }}
          className="font-display italic text-xl md:text-3xl text-texto-medio leading-relaxed mb-6"
        >
          "Cada mulher carrega em si uma força que merece ser vista, respeitada e cuidada em cada fase da vida."
        </motion.blockquote>
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="font-body font-light tracking-[0.1em] text-sm text-texto-suave"
        >
          — Dra. Luísa Braga
        </motion.span>
      </div>
    </section>
  );
}
