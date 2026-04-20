import { motion } from 'motion/react';
import { Instagram } from 'lucide-react';

export default function Encerramento() {
  return (
    <section id="encerramento" className="relative overflow-hidden flex items-center justify-center min-h-[480px] md:h-[560px] py-[80px] md:py-0">
      
      {/* CAMADA 1 — FOTO DE FUNDO */}
      <img 
        src="https://res.cloudinary.com/dezwlu6p2/image/upload/v1776693405/essa_imagem_16_9_202604201056_ui1ipk.webp" 
        alt="Dra. Luísa Braga" 
        className="absolute inset-0 w-full h-full object-cover object-top z-0"
      />

      {/* CAMADA 2 — OVERLAY COLORIDO */}
      {/* Layer A: Cor da paleta */}
      <div className="absolute inset-0 bg-[#C04A37] opacity-[0.72] z-[1] pointer-events-none" />
      {/* Layer B: Gradiente escurecedor na base */}
      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(44,24,16,0.55)] to-transparent to-[55%] z-[2] pointer-events-none" />

      {/* CAMADA 3 — SVG DECORATIVO ANATÔMICO */}
      <div className="absolute left-[-10px] md:left-[-20px] top-1/2 -translate-y-1/2 w-[180px] md:w-[320px] z-[3] pointer-events-none opacity-[0.12] md:opacity-[0.18]">
        <svg viewBox="0 0 320 400" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          {/* Útero */}
          <path d="M160 280 C110 280 80 190 80 120 C80 70 120 40 160 40 C200 40 240 70 240 120 C240 190 210 280 160 280 Z" fill="none" stroke="#FFFFFF" strokeWidth="1.2" />
          {/* Linhas internas (endométrio) */}
          <path d="M160 260 C130 260 110 190 110 120 C110 90 130 70 160 70 C190 70 210 90 210 120 C210 190 190 260 160 260 Z" fill="none" stroke="#FFFFFF" strokeWidth="0.4" opacity="0.6" />
          <path d="M160 240 C140 240 130 190 130 120 C130 100 140 90 160 90 C180 90 190 100 190 120 C190 190 180 240 160 240 Z" fill="none" stroke="#FFFFFF" strokeWidth="0.4" opacity="0.4" />
          
          {/* Trompas */}
          <path d="M85 100 C50 80 30 110 20 140" fill="none" stroke="#FFFFFF" strokeWidth="0.8" />
          <path d="M235 100 C270 80 290 110 300 140" fill="none" stroke="#FFFFFF" strokeWidth="0.8" />
          
          {/* Ovários */}
          <circle cx="20" cy="160" r="18" fill="none" stroke="#FFFFFF" strokeWidth="0.8" />
          <circle cx="300" cy="160" r="18" fill="none" stroke="#FFFFFF" strokeWidth="0.8" />
          
          {/* Círculos concêntricos ovário esquerdo */}
          <circle cx="20" cy="160" r="28" fill="none" stroke="#FFFFFF" strokeWidth="0.5" opacity="0.6" />
          <circle cx="20" cy="160" r="40" fill="none" stroke="#FFFFFF" strokeWidth="0.5" opacity="0.3" />
          <circle cx="20" cy="160" r="55" fill="none" stroke="#FFFFFF" strokeWidth="0.5" opacity="0.15" />
          
          {/* Círculos concêntricos ovário direito */}
          <circle cx="300" cy="160" r="28" fill="none" stroke="#FFFFFF" strokeWidth="0.5" opacity="0.6" />
          <circle cx="300" cy="160" r="40" fill="none" stroke="#FFFFFF" strokeWidth="0.5" opacity="0.3" />
          <circle cx="300" cy="160" r="55" fill="none" stroke="#FFFFFF" strokeWidth="0.5" opacity="0.15" />

          {/* Constelação médica (pontos) */}
          <circle cx="160" cy="20" r="2" fill="#FFFFFF" opacity="0.3" />
          <circle cx="60" cy="220" r="2" fill="#FFFFFF" opacity="0.3" />
          <circle cx="260" cy="220" r="2" fill="#FFFFFF" opacity="0.3" />
          <circle cx="100" cy="320" r="2" fill="#FFFFFF" opacity="0.3" />
          <circle cx="220" cy="320" r="2" fill="#FFFFFF" opacity="0.3" />
          <circle cx="160" cy="360" r="2" fill="#FFFFFF" opacity="0.3" />
        </svg>
      </div>

      {/* CAMADA 4 — CONTEÚDO CENTRAL */}
      <div className="relative z-[4] flex flex-col items-center text-center px-[24px] md:px-[max(32px,8vw)] max-w-[700px] mx-auto w-full">
        
        {/* Linha decorativa */}
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-[40px] h-[2px] bg-branco/50 rounded-[2px] mb-[28px] origin-center"
        />

        {/* Título H2 */}
        <h2 className="mb-[24px] drop-shadow-[0_2px_20px_rgba(0,0,0,0.25)]">
          <motion.span 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="block font-display font-bold text-[36px] md:text-[58px] text-branco leading-[1.1]"
          >
            Cuide da sua saúde
          </motion.span>
          <motion.span 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.28, ease: "easeOut" }}
            className="block font-display font-normal italic text-[36px] md:text-[58px] text-branco/92 leading-[1.1]"
          >
            com leveza e confiança.
          </motion.span>
        </h2>

        {/* Subtítulo */}
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.42, ease: "easeOut" }}
          className="font-body font-normal text-[15px] md:text-[17px] text-branco/80 leading-[1.7] mb-[40px]"
        >
          Agende sua consulta com a Dra. Luísa Braga.
        </motion.p>

        {/* Botões */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.54, ease: "easeOut" }}
          className="flex flex-col md:flex-row gap-[16px] w-full md:w-auto max-w-[300px] md:max-w-none justify-center"
        >
          {/* Botão 1 — Sólido */}
          <a 
            href="https://wa.me/5511998908666?text=Olá%20Dra.%20Luísa%2C%20gostaria%20de%20agendar%20uma%20consulta"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-[8px] bg-branco/95 hover:bg-branco text-[#C04A37] rounded-full px-[32px] py-[15px] font-body font-bold text-[13px] tracking-[0.1em] uppercase transition-all duration-250 hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(0,0,0,0.2)]"
          >
            <span className="w-[6px] h-[6px] rounded-full bg-[#C04A37] shrink-0" />
            Agendar pelo WhatsApp
          </a>

          {/* Botão 2 — Outline */}
          <a 
            href="https://instagram.com/luisaginecologia"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-[10px] bg-transparent border-[1.5px] border-branco/70 hover:border-branco hover:bg-branco/12 text-branco rounded-full px-[32px] py-[15px] font-body font-semibold text-[13px] tracking-[0.1em] uppercase transition-all duration-250 hover:-translate-y-[2px]"
          >
            <Instagram size={18} className="text-branco" />
            Siga no Instagram
          </a>
        </motion.div>

      </div>
    </section>
  );
}
