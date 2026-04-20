import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export default function ServicosBackground() {
  const [particles, setParticles] = useState<Array<{
    id: number;
    size: number;
    left: number;
    delay: number;
    duration: number;
    xOffset: number;
  }>>([]);

  useEffect(() => {
    // Generate particles only on client side to avoid hydration mismatch
    const newParticles = Array.from({ length: 24 }).map((_, i) => ({
      id: i,
      size: Math.random() * 18 + 6, // 6px to 24px
      left: Math.random() * 100, // 0% to 100%
      delay: Math.random() * 15, // 0s to 15s
      duration: Math.random() * 25 + 25, // 25s to 50s (very slow and subtle)
      xOffset: Math.random() * 60 - 30, // -30px to 30px drift
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 flex items-center justify-center">
      
      {/* Abstract Scientific / Uterus Line Art */}
      <motion.div 
        className="absolute w-[140%] md:w-[90%] h-auto max-h-[90%] opacity-[0.04] text-primaria flex items-center justify-center"
        animate={{ 
          scale: [1, 1.02, 1],
          opacity: [0.03, 0.06, 0.03]
        }}
        transition={{ 
          duration: 12, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      >
        <svg 
          viewBox="0 0 1000 600" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="1.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          className="w-full h-full"
        >
          {/* Central Body (Abstract Uterus) */}
          <path d="M 500 480 C 400 480, 360 350, 400 220 C 430 120, 570 120, 600 220 C 640 350, 600 480, 500 480 Z" />
          
          {/* Left Tube & Fimbriae */}
          <path d="M 405 190 C 280 140, 180 220, 160 300 C 140 350, 170 390, 210 380" />
          <path d="M 210 380 C 220 395, 200 410, 190 400" />
          <path d="M 210 380 C 230 400, 220 420, 205 410" />
          
          {/* Right Tube & Fimbriae */}
          <path d="M 595 190 C 720 140, 820 220, 840 300 C 860 350, 830 390, 790 380" />
          <path d="M 790 380 C 780 395, 800 410, 810 400" />
          <path d="M 790 380 C 770 400, 780 420, 795 410" />
          
          {/* Left Ovary (Abstract Cell/Node) */}
          <circle cx="230" cy="410" r="28" strokeDasharray="4 6" />
          <circle cx="230" cy="410" r="18" opacity="0.5" />
          <circle cx="230" cy="410" r="4" fill="currentColor" />
          
          {/* Right Ovary (Abstract Cell/Node) */}
          <circle cx="770" cy="410" r="28" strokeDasharray="4 6" />
          <circle cx="770" cy="410" r="18" opacity="0.5" />
          <circle cx="770" cy="410" r="4" fill="currentColor" />

          {/* Scientific Orbits / Chemical Rings */}
          <ellipse cx="500" cy="300" rx="380" ry="180" strokeDasharray="2 12" opacity="0.4" transform="rotate(-15 500 300)" />
          <ellipse cx="500" cy="300" rx="180" ry="380" strokeDasharray="2 12" opacity="0.4" transform="rotate(15 500 300)" />
          
          {/* Inner details */}
          <path d="M 460 300 C 460 250, 540 250, 540 300 C 540 350, 460 350, 460 300 Z" opacity="0.3" />
          <circle cx="500" cy="300" r="6" fill="currentColor" opacity="0.5" />
        </svg>
      </motion.div>

      {/* Floating Droplets / Particles */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-gradient-to-t from-primaria/30 to-primaria/5 backdrop-blur-[2px] border border-primaria/10"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.left}%`,
            bottom: '-10%',
          }}
          animate={{
            y: ['0vh', '-120vh'],
            x: [0, p.xOffset, -p.xOffset, 0],
            scale: [1, 1.2, 0.8, 1],
            opacity: [0, 0.8, 0.8, 0],
          }}
          transition={{
            y: { duration: p.duration, repeat: Infinity, ease: "linear", delay: p.delay },
            x: { duration: p.duration * 0.7, repeat: Infinity, ease: "easeInOut", delay: p.delay },
            scale: { duration: 8, repeat: Infinity, ease: "easeInOut", delay: p.delay },
            opacity: { duration: p.duration, repeat: Infinity, ease: "linear", delay: p.delay },
          }}
        />
      ))}
    </div>
  );
}
