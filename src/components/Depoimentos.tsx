import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Pointer } from 'lucide-react';

const depoimentos = [
  {
    nome: "Mariana Rodrigues",
    texto: "Dra Luisa é excepcional! Super doce, gentil, competente e extremamente profissional. Me explicou todas as dúvidas e me ajudou a escolher o melhor método contraceptivo para mim! Estou muito satisfeita com a minha escolha! Recomendo a todos!",
    pos: { top: '28px', left: '60px', rotate: '-1deg' },
    mobilePos: { top: '0px', left: '0px', rotate: '-1deg' },
    destaque: false,
  },
  {
    nome: "Mariane Almeida",
    texto: "Fui atendida por ela e a consulta foi sensacional. Implantei o DIU no consultório e a Dra Luisa fez de tudo para que a minha experiência fosse a mais tranquila possível. Recomendo a todas!",
    pos: { top: '20px', left: '290px', rotate: '1.5deg' },
    mobilePos: { top: '10px', right: '0px', left: 'auto', rotate: '1.5deg' },
    destaque: true,
    zIndex: 3,
  },
  {
    nome: "Camila Andrade",
    texto: "Consulta excelente! A dra. Luísa foi extremamente atenciosa, profissional e acolhedora. Explicou tudo com muita clareza, me deixou super à vontade e tirou todas as minhas dúvidas. Me senti respeitada e bem cuidada do início ao fim. Recomendo muito!",
    pos: { top: '28px', right: '10px', left: 'auto', rotate: '0.5deg' },
    mobilePos: { top: '140px', left: '10px', rotate: '0.5deg' },
    destaque: false,
  },
  {
    nome: "Vitoria Cavenaghi Gomes",
    texto: "Ahhhh não existe médica melhor que vc, Dra Luísa!! linda, estilosa, competente, autêntica, prestativa, atenciosa, alegre e muito engraçada! Os minutos passaram voando da consulta! Obrigada por todo carinho!! Ganhei uma médica para vida toda!!!",
    pos: { top: '200px', left: '10px', rotate: '-2deg' },
    mobilePos: { top: '150px', right: '10px', left: 'auto', rotate: '-2deg' },
    destaque: false,
  },
  {
    nome: "Tainá Almeida",
    texto: "Luísa, além de extremamente competente, tem um olhar humano e delicado para suas pacientes tornando o seu atendimento único. Excelente profissional!!!",
    pos: { top: '210px', left: '250px', rotate: '1deg' },
    mobilePos: { top: '280px', left: '0px', rotate: '1deg' },
    destaque: false,
  },
  {
    nome: "Naty Zagallo",
    texto: "Consulta diferenciada de uma profissional que se preocupa com cada detalhe de suas pacientes e faz a consulta quase uma terapia.",
    pos: { top: '200px', right: '5px', left: 'auto', rotate: '-0.5deg' },
    mobilePos: { top: '290px', right: '0px', left: 'auto', rotate: '-0.5deg' },
    destaque: false,
  },
];

export default function Depoimentos() {
  const [activeBg, setActiveBg] = useState(0);
  const [selectedDepo, setSelectedDepo] = useState<number | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveBg((prev) => (prev === 0 ? 1 : 0));
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (selectedDepo !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedDepo]);

  return (
    <section id="depoimentos" className="relative overflow-hidden h-auto md:min-h-[600px] bg-fundo pt-[64px] pb-[80px] md:py-[80px]">
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        @keyframes float-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
      `}</style>
      
      {/* CAMADA 1 — IMAGENS DE FUNDO (CROSSFADE) */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0 bg-fundo">
        <img 
          src="https://res.cloudinary.com/dezwlu6p2/image/upload/v1775742763/Uterus_background_for_202604091051_zsgqjw.webp" 
          alt="" 
          className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-[2000ms] ease-in-out ${activeBg === 0 ? 'opacity-100' : 'opacity-0'}`}
        />
        <img 
          src="https://res.cloudinary.com/dezwlu6p2/image/upload/v1775761527/Minimalist_background_for_202604091605_in4unb.jpg" 
          alt="" 
          className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-[2000ms] ease-in-out ${activeBg === 1 ? 'opacity-100' : 'opacity-0'}`}
        />
      </div>

      {/* CAMADA 2 — OVERLAY ESCURO GRADIENTE PARA CONTRASTE */}
      <div 
        className="absolute inset-0 w-full h-full z-[1] pointer-events-none"
        style={{ background: 'linear-gradient(to right, rgba(44,24,16,0.92) 0%, rgba(44,24,16,0.85) 35%, rgba(44,24,16,0.40) 65%, rgba(44,24,16,0.10) 100%)' }}
      />

      {/* CAMADA 3 — CONTEÚDO */}
      <div className="relative z-[2] w-full h-full max-w-[1440px] mx-auto px-[24px] md:px-[max(48px,6vw)] grid grid-cols-1 md:grid-cols-[420px_1fr] items-center">
        
        {/* LADO ESQUERDO */}
        <div className="flex flex-col justify-center h-full pb-[40px] md:pb-0">
          <span className="font-body font-medium text-[10px] tracking-[0.18em] uppercase text-primaria mb-[24px]">
            Depoimentos · Dra. Luísa Braga
          </span>
          
          <h2 className="font-display font-bold text-[44px] md:text-[64px] leading-[1.05] text-branco mb-[28px]">
            O que dizem<br />sobre mim
          </h2>
          
          <div className="flex items-center gap-[16px]">
            <span className="font-display font-bold text-[22px] text-branco">5.0</span>
            <span className="text-[18px] text-primaria tracking-[2px]">★★★★★</span>
            <span className="text-[16px] text-branco/30">|</span>
            <span className="font-body font-normal text-[14px] text-branco/60">6 depoimentos</span>
          </div>
        </div>

        {/* LADO DIREITO (CARDS) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[16px] md:gap-[20px] w-full mt-[40px] md:mt-0">
          {depoimentos.map((depo, index) => (
            <div
              key={index}
              style={{ animation: `float-subtle 6s ease-in-out infinite ${index * 0.4}s` }}
              className="h-full will-change-transform"
            >
              <div
                onClick={() => setSelectedDepo(index)}
                className={`relative rounded-[14px] p-[20px] w-full h-full cursor-pointer transition-all duration-250 ease-out hover:-translate-y-[6px] hover:scale-[1.03] flex flex-col ${
                  depo.destaque 
                    ? 'bg-primaria/90 backdrop-blur-[12px] border border-white/20 shadow-[0_12px_40px_rgba(212,145,122,0.4)] hover:shadow-[0_16px_48px_rgba(212,145,122,0.5)]' 
                    : 'bg-white/80 backdrop-blur-[12px] border border-white/50 shadow-[0_8px_32px_rgba(0,0,0,0.15)] hover:shadow-[0_16px_48px_rgba(0,0,0,0.25)]'
                }`}
              >
                <div className="flex items-center gap-[10px] mb-[12px]">
                  <div className={`w-[36px] h-[36px] rounded-full flex items-center justify-center shrink-0 font-body font-bold text-[14px] ${
                    depo.destaque ? 'bg-branco/25 text-branco' : 'bg-decorativo text-cta'
                  }`}>
                    {depo.nome.charAt(0)}
                  </div>
                  <div className="flex flex-col">
                    <span className={`font-body font-semibold text-[13px] leading-tight ${
                      depo.destaque ? 'text-branco' : 'text-texto-escuro'
                    }`}>
                      {depo.nome.split(' ')[0]}
                    </span>
                    <span className={`font-body font-normal text-[11px] leading-tight ${
                      depo.destaque ? 'text-branco/80' : 'text-texto-suave'
                    }`}>
                      São Paulo
                    </span>
                  </div>
                </div>
                
                <div className={`text-[12px] mb-[8px] tracking-[1px] ${
                  depo.destaque ? 'text-branco' : 'text-primaria'
                }`}>
                  ★★★★★
                </div>
                
                <p className={`font-body font-normal text-[12px] leading-[1.6] line-clamp-4 ${
                  depo.destaque ? 'text-branco/95' : 'text-texto-medio'
                }`}>
                  {depo.texto}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* INSTRUÇÃO NA BASE */}
        <div className="absolute bottom-[20px] left-1/2 -translate-x-1/2 hidden md:flex items-center gap-[8px] opacity-80 w-full justify-center px-4 text-center">
          <Pointer size={14} className="text-branco/60 shrink-0" />
          <span className="font-body font-normal text-[12px] text-branco/60 tracking-[0.04em]">
            Clique em um card para ler o depoimento completo
          </span>
        </div>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selectedDepo !== null && (
          <div className="fixed inset-0 z-[9000] flex items-center justify-center p-[16px]">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 bg-black/55 backdrop-blur-[8px]"
              onClick={() => setSelectedDepo(null)}
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative bg-fundo rounded-[20px] p-[28px] md:p-[40px] w-full max-w-[560px] z-[9001] shadow-[0_24px_80px_rgba(0,0,0,0.4)]"
            >
              <button
                onClick={() => setSelectedDepo(null)}
                className="absolute top-[16px] right-[16px] w-[32px] h-[32px] rounded-full border-[1.5px] border-texto-escuro/15 flex items-center justify-center text-texto-suave hover:bg-decorativo hover:text-texto-escuro transition-colors"
              >
                ✕
              </button>

              <div className="flex items-center gap-[14px] mb-[16px]">
                <div className="w-[48px] h-[48px] rounded-full bg-decorativo flex items-center justify-center font-body font-bold text-[18px] text-cta shrink-0">
                  {depoimentos[selectedDepo].nome.charAt(0)}
                </div>
                <div>
                  <span className="block font-body font-bold text-[17px] text-texto-escuro leading-tight mb-[2px]">
                    {depoimentos[selectedDepo].nome}
                  </span>
                  <span className="block font-body font-normal text-[13px] text-texto-suave leading-tight">
                    São Paulo
                  </span>
                </div>
              </div>

              <div className="text-[20px] text-primaria tracking-[2px] mb-[16px]">
                ★★★★★
              </div>

              <p className="font-body font-normal text-[15px] text-texto-medio leading-[1.85]">
                "{depoimentos[selectedDepo].texto}"
              </p>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
