import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section id="inicio" className="relative w-full min-h-[100dvh] md:h-[100dvh] md:min-h-[600px] flex flex-col md:grid md:grid-cols-2 overflow-hidden bg-fundo pt-[60px] md:pt-[80px]">
      
      {/* DESKTOP GLOBAL BACKGROUND */}
      <div className="hidden md:block absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.img 
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          src="https://res.cloudinary.com/dezwlu6p2/image/upload/v1776693599/essa_foto_sem_202604201059_wzrvuz.webp" 
          alt="" 
          className="w-full h-full object-cover object-[75%_35%] scale-[1.0] origin-center"
        />
        {/* Gradient overlay to ensure text readability on the left while keeping the right side clear */}
        <div className="absolute inset-0 bg-gradient-to-r from-fundo from-[25%] via-fundo/70 to-transparent" />
      </div>

      {/* MOBILE IMAGE (Top) */}
      <div className="md:hidden relative w-full h-[38dvh] shrink-0 z-[1] flex justify-center items-end overflow-hidden">
        <motion.img
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          src="https://res.cloudinary.com/dezwlu6p2/image/upload/v1776693599/essa_foto_sem_202604201059_wzrvuz.webp"
          alt="Saúde Feminina"
          className="absolute inset-0 w-full h-full object-cover object-[75%_35%] scale-[1.02] origin-center"
        />
        {/* Leve fade na parte superior da imagem para integração */}
        <div className="absolute top-0 left-0 w-full h-[25%] bg-gradient-to-b from-fundo to-transparent pointer-events-none z-20" />
        {/* Strong fade at bottom blending into background color */}
        <div className="absolute bottom-0 left-0 w-full h-[40%] bg-gradient-to-b from-transparent via-fundo/80 to-fundo pointer-events-none z-20" />
      </div>

      {/* LEFT SIDE (Desktop) / BOTTOM SIDE (Mobile) */}
      <div className="relative z-[2] flex-grow flex flex-col justify-center px-6 pb-6 pt-0 -mt-6 md:mt-0 md:px-[max(48px,6vw)] md:py-0">
        <div className="max-w-[540px] w-full mx-auto md:mx-0">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0 }}
            className="block font-body font-medium text-[11px] tracking-[0.18em] uppercase text-primaria mb-2 md:mb-4"
          >
            Ginecologista em São Paulo
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="font-display font-bold text-[28px] sm:text-[34px] md:text-[48px] leading-[1.1] md:leading-[1.15] text-texto-escuro mb-2 md:mb-5 md:max-w-[480px]"
          >
            Saúde Hormonal Feminina e Tratamento de HPV | Dra. Luísa Braga, SP & Telemedicina
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="font-body font-normal text-[14px] md:text-[16px] leading-[1.4] md:leading-[1.75] text-texto-medio mb-4 md:mb-8 md:max-w-[440px]"
          >
            Atendimento personalizado, baseado em ciência, escuta e precisão, para mulheres que desejam mais do que uma consulta: desejam clareza, segurança e protagonismo sobre o próprio corpo
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <a 
              href="https://wa.me/5511998908666?text=Olá%20Dra.%20Luísa%2C%20gostaria%20de%20agendar%20uma%20consulta"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full md:w-auto text-center bg-cta text-branco rounded-full px-6 md:px-8 py-[14px] md:py-[14px] font-body font-semibold text-[14px] md:text-[14px] tracking-[0.03em] transition-all duration-250 hover:-translate-y-[2px] animate-subtle-glow"
            >
              Agendar Minha Consulta →
            </a>
          </motion.div>

          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="block font-body font-normal text-[10px] md:text-[11px] text-texto-suave mt-3 md:mt-6"
          >
            CRM/SP 211588 | RQE 124920
          </motion.span>
        </div>
      </div>

      {/* RIGHT SIDE (Desktop) */}
      <div className="hidden md:flex relative h-full items-end justify-end pr-[2vw] z-[1]" />

    </section>
  );
}

