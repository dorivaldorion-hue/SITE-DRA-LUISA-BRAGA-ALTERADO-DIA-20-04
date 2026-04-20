import { motion } from 'motion/react';
import { MapPin, MessageCircle, Mail, Instagram, ExternalLink } from 'lucide-react';

export default function Consultorio() {
  return (
    <section id="consultorio" className="relative bg-branco py-[64px] md:py-[100px] overflow-hidden">
      
      {/* ELEMENTO DECORATIVO DE FUNDO */}
      <div 
        className="absolute top-[-120px] right-[-120px] w-[380px] h-[380px] rounded-full z-0 pointer-events-none opacity-25"
        style={{ background: 'radial-gradient(circle, var(--color-decorativo) 0%, transparent 70%)' }}
      />

      {/* CONTAINER PRINCIPAL */}
      <div className="relative z-[1] max-w-[1140px] mx-auto px-[max(32px,5vw)]">
        
        {/* CABEÇALHO DA SEÇÃO */}
        <motion.div 
          className="mb-[64px] text-center md:text-left"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="block font-body font-medium text-[10px] tracking-[0.20em] uppercase text-primaria mb-[16px]">
            CONSULTÓRIO
          </span>
          <h2 className="font-display font-bold text-[36px] md:text-[48px] text-texto-escuro leading-[1.1] mb-[16px]">
            Atendimento e localização
          </h2>
          <p className="font-body font-normal text-[16px] md:text-[18px] text-texto-medio max-w-[600px] mx-auto md:mx-0">
            Atendimento com hora marcada, em ambiente reservado e acolhedor.
          </p>
        </motion.div>

        {/* BLOCO 1 — FOTOS DO CONSULTÓRIO */}
        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-[16px] mb-[64px] h-auto md:h-[420px]">
          
          {/* FOTO PRINCIPAL */}
          <motion.div 
            className="relative h-[280px] md:h-full rounded-[20px] overflow-hidden group"
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <img 
              src="https://res.cloudinary.com/dezwlu6p2/image/upload/v1775763854/CONSULTORIO_RECEP%C3%87%C3%83O_gyivvb.webp" 
              alt="Recepção do consultório da Dra. Luísa Braga em São Paulo"
              className="w-full h-full object-cover object-center block transition-all duration-400 group-hover:brightness-105"
              referrerPolicy="no-referrer"
            />
            
            {/* TAG FLUTUANTE */}
            <motion.div 
              className="absolute bottom-[20px] left-[20px] bg-white/95 backdrop-blur-[8px] rounded-[12px] p-[12px_18px] shadow-[0_4px_20px_rgba(44,24,16,0.12)] flex items-center gap-[10px]"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="w-[32px] h-[32px] rounded-full bg-decorativo text-primaria flex items-center justify-center shrink-0">
                <MapPin size={14} />
              </div>
              <div>
                <span className="block font-body font-semibold text-[13px] text-texto-escuro leading-tight">
                  Livance Vila Mariana
                </span>
                <span className="block font-body font-normal text-[11px] text-texto-suave">
                  SÃO PAULO, SP
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* FOTO SECUNDÁRIA */}
          <motion.div 
            className="h-[200px] md:h-full rounded-[20px] overflow-hidden group"
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <img 
              src="https://res.cloudinary.com/dezwlu6p2/image/upload/v1775763855/CONSULTORIO_PREDIO_k7zdlw.webp" 
              alt="Fachada do consultório da Dra. Luísa Braga"
              className="w-full h-full object-cover object-top block transition-all duration-400 group-hover:brightness-105"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>

        {/* BLOCO 2 — GRID DE INFORMAÇÕES + MAPA */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-[40px] lg:gap-[64px] items-stretch">
          
          {/* COLUNA ESQUERDA: Informações */}
          <div className="flex flex-col gap-[24px]">
            
            {/* Cards de Contato */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[16px]">
              {/* Endereço */}
              <motion.div 
                className="bg-fundo/60 backdrop-blur-md border border-decorativo/80 rounded-[16px] p-[24px] shadow-[0_4px_24px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_32px_rgba(212,145,122,0.12)] hover:-translate-y-[4px] transition-all duration-300 flex flex-col"
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
              >
                <MapPin size={24} strokeWidth={1.2} className="text-primaria mb-[20px]" />
                <span className="font-body font-medium text-[10px] tracking-[0.15em] uppercase text-primaria/80 mb-[8px]">Endereço</span>
                <span className="font-body font-semibold text-[15px] text-texto-escuro mb-[4px] leading-tight">Edifício Art Work, Coworking Livance</span>
                <span className="font-body font-normal text-[13px] text-texto-suave leading-tight">R. Domingos de Morais, 2781, 14 Andar, Vila Mariana, São Paulo, SP, 04035-001</span>
              </motion.div>

              {/* WhatsApp */}
              <motion.a 
                href="https://wa.me/5511998908666"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-fundo/60 backdrop-blur-md border border-decorativo/80 rounded-[16px] p-[24px] shadow-[0_4px_24px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_32px_rgba(212,145,122,0.12)] hover:-translate-y-[4px] transition-all duration-300 flex flex-col group"
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
              >
                <MessageCircle size={24} strokeWidth={1.2} className="text-primaria mb-[20px] group-hover:text-cta transition-colors" />
                <span className="font-body font-medium text-[10px] tracking-[0.15em] uppercase text-primaria/80 mb-[8px]">WhatsApp</span>
                <span className="font-body font-semibold text-[15px] text-texto-escuro mb-[4px] leading-tight group-hover:text-cta transition-colors">(11) 99890-8666</span>
                <span className="font-body font-normal text-[13px] text-texto-suave leading-tight">Clique para enviar mensagem</span>
              </motion.a>

              {/* E-mail */}
              <motion.a 
                href="mailto:draluisabraga@gmail.com"
                className="bg-fundo/60 backdrop-blur-md border border-decorativo/80 rounded-[16px] p-[24px] shadow-[0_4px_24px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_32px_rgba(212,145,122,0.12)] hover:-translate-y-[4px] transition-all duration-300 flex flex-col group"
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Mail size={24} strokeWidth={1.2} className="text-primaria mb-[20px] group-hover:text-cta transition-colors" />
                <span className="font-body font-medium text-[10px] tracking-[0.15em] uppercase text-primaria/80 mb-[8px]">E-mail</span>
                <span className="font-body font-semibold text-[15px] text-texto-escuro mb-[4px] leading-tight group-hover:text-cta transition-colors">draluisabraga@gmail.com</span>
                <span className="font-body font-normal text-[13px] text-texto-suave leading-tight">Resposta em até 24h</span>
              </motion.a>

              {/* Instagram */}
              <motion.a 
                href="https://instagram.com/luisaginecologia"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-fundo/60 backdrop-blur-md border border-decorativo/80 rounded-[16px] p-[24px] shadow-[0_4px_24px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_32px_rgba(212,145,122,0.12)] hover:-translate-y-[4px] transition-all duration-300 flex flex-col group"
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Instagram size={24} strokeWidth={1.2} className="text-primaria mb-[20px] group-hover:text-cta transition-colors" />
                <span className="font-body font-medium text-[10px] tracking-[0.15em] uppercase text-primaria/80 mb-[8px]">Instagram</span>
                <span className="font-body font-semibold text-[15px] text-texto-escuro mb-[4px] leading-tight group-hover:text-cta transition-colors">@luisaginecologia</span>
                <span className="font-body font-normal text-[13px] text-texto-suave leading-tight">Siga para conteúdo sobre saúde feminina</span>
              </motion.a>
            </div>

            {/* Modalidades de Atendimento */}
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 gap-[16px] mt-[8px]"
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="bg-gradient-to-br from-primaria/10 to-transparent rounded-[16px] p-[24px] border border-primaria/20 flex flex-col justify-center">
                <span className="block font-display font-semibold text-[18px] text-primaria mb-[8px]">Presencial</span>
                <span className="block font-body font-normal text-[13px] text-texto-medio leading-[1.6]">Consultas em ambiente reservado e acolhedor</span>
              </div>
              <div className="bg-gradient-to-br from-cta/10 to-transparent rounded-[16px] p-[24px] border border-cta/20 flex flex-col justify-center">
                <span className="block font-display font-semibold text-[18px] text-cta mb-[8px]">Telemedicina</span>
                <span className="block font-body font-normal text-[13px] text-texto-medio leading-[1.6]">Atendimento online com acompanhamento individualizado</span>
              </div>
            </motion.div>

            {/* CTA Final */}
            <motion.div 
              className="mt-[16px]"
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.6 }}
            >
              <a 
                href="https://wa.me/5511998908666?text=Olá%20Dra.%20Luísa%2C%20gostaria%20de%20agendar%20uma%20consulta"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-[12px] bg-cta text-branco rounded-full px-[40px] py-[18px] font-body font-semibold text-[15px] overflow-hidden shadow-[0_8px_24px_rgba(212,145,122,0.3)] hover:shadow-[0_12px_32px_rgba(212,145,122,0.4)] hover:-translate-y-[2px] transition-all duration-300 w-full sm:w-auto"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                <span className="relative z-10 flex items-center gap-[10px]">
                  Agendar consulta
                  <MessageCircle size={18} className="text-branco animate-pulse" />
                </span>
              </a>
            </motion.div>

          </div>

          {/* COLUNA DIREITA: Mapa */}
          <div className="flex flex-col h-full mt-[16px] lg:mt-0">
            <motion.div 
              className="relative rounded-[24px] overflow-hidden shadow-[0_12px_48px_rgba(44,24,16,0.12)] h-[360px] lg:h-full min-h-[400px] border border-decorativo/50 group"
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.3!2d-46.6388!3d-23.5976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zUi4gRG9taW5nb3MgZGUgTW9yYWlzLCAyNzgxIC0gVmlsYSBNYXJpYW5hLCBTw6NvIFBhdWxvIC0gU1AsIDA0MDM1LTAwMQ!5e0!3m2!1spt-BR!2sbr!4v1"
                width="100%" 
                height="100%"
                style={{ border: 0, display: 'block' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização do consultório da Dra. Luísa Braga"
                className="absolute inset-0 w-full h-full"
              />
              <div className="absolute inset-0 pointer-events-none border border-black/5 rounded-[24px] z-10" />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-[24px] flex justify-center lg:justify-start"
            >
              <a 
                href="https://maps.google.com/?q=R.+Domingos+de+Morais,+2781+-+14+Andar+-+Vila+Mariana,+São+Paulo+-+SP,+04035-001" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-[10px] font-body font-medium text-[14px] text-primaria hover:text-cta transition-colors group"
              >
                <div className="w-[36px] h-[36px] rounded-full bg-fundo border border-decorativo flex items-center justify-center group-hover:border-cta group-hover:bg-cta/5 transition-colors">
                  <MapPin size={16} strokeWidth={1.5} className="text-primaria group-hover:text-cta transition-colors" />
                </div>
                <span className="group-hover:underline underline-offset-4">Abrir no Google Maps</span>
              </a>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
