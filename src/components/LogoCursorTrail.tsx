import { useEffect, useRef, useState } from 'react';

const LOGO_URL = "https://res.cloudinary.com/dezwlu6p2/image/upload/v1775757394/LOGO_SEM_FUNDO_LUISA_jgz7e8.svg";
const TRAIL_LENGTH = 4; // Reduced for a much subtler, cleaner effect

export default function LogoCursorTrail() {
  const [isActive, setIsActive] = useState(false);
  const mouse = useRef({ x: -100, y: -100 });
  const trail = useRef(Array.from({ length: TRAIL_LENGTH }, () => ({ x: -100, y: -100 })));
  const requestRef = useRef<number>(-1);
  const trailRefs = useRef<(HTMLImageElement | null)[]>([]);

  useEffect(() => {
    // Only activate on devices with a fine pointer (mouse/trackpad)
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const section = document.getElementById('servicos');
    if (!section) return;

    const handleMouseEnter = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      // Snap all trail points to the entry point to avoid flying in from the corner
      trail.current.forEach(p => { p.x = e.clientX; p.y = e.clientY; });
      setIsActive(true);
    };

    const handleMouseLeave = () => {
      setIsActive(false);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };

    section.addEventListener('mouseenter', handleMouseEnter);
    section.addEventListener('mouseleave', handleMouseLeave);
    section.addEventListener('mousemove', handleMouseMove);

    return () => {
      section.removeEventListener('mouseenter', handleMouseEnter);
      section.removeEventListener('mouseleave', handleMouseLeave);
      section.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const updateTrail = () => {
      if (isActive) {
        trail.current.forEach((point, index) => {
          const nextPoint = index === 0 ? mouse.current : trail.current[index - 1];
          
          const dx = nextPoint.x - point.x;
          const dy = nextPoint.y - point.y;
          
          // Faster interpolation for a tighter, cleaner follow
          point.x += dx * 0.6;
          point.y += dy * 0.6;

          const el = trailRefs.current[index];
          if (el) {
            // Scale down and fade out sharply for a very subtle, almost imperceptible trace
            const scale = 1 - (index / TRAIL_LENGTH) * 0.3;
            // Head is visible, tail fades out exponentially
            const opacity = index === 0 ? 0.85 : 0.15 * Math.pow(0.4, index - 1);
            
            // Center the 24px image (offset by 12px)
            el.style.transform = `translate3d(${point.x - 12}px, ${point.y - 12}px, 0) scale(${scale})`;
            el.style.opacity = opacity.toString();
          }
        });
      }
      requestRef.current = requestAnimationFrame(updateTrail);
    };

    requestRef.current = requestAnimationFrame(updateTrail);
    return () => cancelAnimationFrame(requestRef.current!);
  }, [isActive]);

  return (
    <>
      {isActive && (
        <style>{`
          #servicos, #servicos * {
            cursor: none !important;
          }
        `}</style>
      )}
      <div 
        className="fixed inset-0 pointer-events-none z-[9999]"
        style={{ opacity: isActive ? 1 : 0, transition: 'opacity 0.3s ease' }}
      >
        {trail.current.map((_, index) => (
          <img
            key={index}
            ref={el => { trailRefs.current[index] = el; }}
            src={LOGO_URL}
            alt=""
            className="absolute top-0 left-0 w-[24px] h-[24px] object-contain pointer-events-none"
            style={{
              willChange: 'transform, opacity'
            }}
          />
        ))}
      </div>
    </>
  );
}
