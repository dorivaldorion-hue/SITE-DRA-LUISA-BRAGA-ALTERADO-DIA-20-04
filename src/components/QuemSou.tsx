import { motion } from 'motion/react';
import { MapPin } from 'lucide-react';

const formacao = [
  {
    imgSrc: 'https://res.cloudinary.com/dezwlu6p2/image/upload/v1776690482/LOGO_BAHIANA_bllx0x.webp',
    instituicao: 'Escola Bahiana de Medicina e Saúde Pública',
    curso: 'Medicina',
  },
  {
    imgSrc: 'https://res.cloudinary.com/dezwlu6p2/image/upload/v1776690482/LOGO_PEROLA_BAITON_smpwgu.webp',
    instituicao: 'Hospital Pérola Byington',
    curso: 'Residência em Ginecologia e Obstetrícia',
  },
  {
    imgSrc: 'https://res.cloudinary.com/dezwlu6p2/image/upload/v1776690482/LOGO_UNIFESP_cvtt0y.webp',
    instituicao: 'Unifesp',
    curso: 'Ginecologia Endócrina, Climatério e Sexualidade',
  },
  {
    imgSrc: 'https://res.cloudinary.com/dezwlu6p2/image/upload/v1776690482/LOGO_UNIFESP_cvtt0y.webp',
    instituicao: 'Unifesp',
    curso: 'Patologia do Trato Genital Inferior e Colposcopia',
  },
];

export default function QuemSou() {
  return (
    <section id="quem-sou" className="bg-branco py-[64px] md:py-[100px]">
      <div className="max-w-[1140px] mx-auto px-[24px] md:px-[max(32px,5vw)] grid grid-cols-1 md:grid-cols-[440px_1fr] gap-[40px] md:gap-[80px] items-start">
        
        {/* COLUNA ESQUERDA */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="w-full md:sticky md:top-[96px] md:self-start"
        >
          {/* Card da Foto */}
          <div className="relative rounded-[16px] md:rounded-[20px] overflow-hidden aspect-[4/5] md:aspect-[3/4] w-full max-w-full bg-transparent">
            <img
              src="https://res.cloudinary.com/dezwlu6p2/image/upload/v1776689179/FOTO_DRA_dxthug.webp"
              alt="Dra. Luísa Braga"
              className="w-full h-full object-cover object-[center_top] block"
            />
            {/* Overlay */}
            <div 
              className="absolute bottom-0 left-0 right-0 pt-[48px] px-[28px] pb-[28px] z-[2]"
              style={{ background: 'linear-gradient(to top, rgba(44,24,16,0.88) 0%, rgba(44,24,16,0.45) 50%, transparent 100%)' }}
            >
              <span className="font-display font-semibold text-[22px] text-[#FFFFFF] block mb-[5px]">
                Dra. Luísa Braga
              </span>
              <span className="font-body font-medium text-[9px] tracking-[0.20em] text-[rgba(255,255,255,0.70)] uppercase block">
                Ginecologista & Obstetra
              </span>
            </div>
          </div>

          {/* Card de Info */}
          <div className="relative -mt-[32px] mx-[16px] md:mx-[24px] z-10 bg-white/60 backdrop-blur-[16px] border border-white/60 shadow-[0_8px_32px_rgba(44,24,16,0.08)] rounded-[16px] p-[20px] flex items-start gap-[14px] transition-all duration-400 hover:-translate-y-[6px] hover:shadow-[0_16px_40px_rgba(44,24,16,0.12)] hover:bg-white/70 group cursor-default">
            <div className="w-[40px] h-[40px] rounded-full bg-primaria/10 flex items-center justify-center shrink-0 transition-transform duration-400 group-hover:scale-110 group-hover:bg-primaria/15">
              <MapPin size={18} strokeWidth={1.5} className="text-primaria" />
            </div>
            <div>
              <h3 className="font-body font-semibold text-[14px] text-texto-escuro mb-[4px] transition-colors duration-300 group-hover:text-primaria">
                SP & Online
              </h3>
              <p className="font-body font-normal text-[13px] text-texto-medio leading-[1.5]">
                Atendimento presencial em São Paulo e telemedicina para todo o Brasil
              </p>
            </div>
          </div>
        </motion.div>

        {/* COLUNA DIREITA */}
        <div className="w-full">
          <motion.span
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.65, delay: 0.12 }}
            className="block font-body font-medium text-[10px] tracking-[0.20em] uppercase text-primaria mb-[14px]"
          >
            Quem Sou
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.65, delay: 0.12 }}
            className="font-display font-bold text-[30px] md:text-[46px] text-texto-escuro leading-[1.1] mb-[32px]"
          >
            Prazer, sou a Luísa.
          </motion.h2>

          <div className="space-y-[22px]">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.20 }}
              className="font-body font-normal text-[15px] md:text-[17px] text-texto-medio leading-[1.85]"
            >
              Sou ginecologista e obstetra formada pela Escola Bahiana de Medicina e Saúde Pública, com residência no Hospital Pérola Byington, o maior centro de saúde da mulher da América Latina. Me especializei em Ginecologia Endócrina, Climatério e Sexualidade na UNIFESP, e em Patologia do Trato Genital Inferior e Colposcopia, pela mesma instituição. Aliado a isso, me aprofundei nos estudos da microscopia do conteúdo vaginal com o grupo GinecoAcademy, sediado na UNESP. Tenho títulos de especialista pela Federação Brasileira de Ginecologia e Obstetrícia e pela Associação Brasileira de Patologia do Trato Genital Inferior.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.28 }}
              className="font-body font-normal text-[15px] md:text-[17px] text-texto-medio leading-[1.85]"
            >
              Minha função é oferecer um atendimento que vai além da consulta padrão: prezo pela escuta calma e atenciosa, com acolhimento e explicações claras, com evidência científica, sobre sua saúde ginecológica. Acredito que cada mulher merece entender o próprio corpo e tomar decisões sobre sua saúde com segurança e autonomia.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.36 }}
              className="font-body font-normal text-[15px] md:text-[17px] text-texto-medio leading-[1.85]"
            >
              Atuo em São Paulo de forma presencial e por telemedicina para todo o Brasil, com foco em saúde hormonal feminina, climatério e reposição hormonal, contracepção e doenças do colo e vagina causadas pelo HPV.
            </motion.p>
          </div>

          <motion.blockquote
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.38 }}
            className="mt-[32px] mb-[40px] border-l-[3px] border-primaria py-[4px] pl-[22px] font-display italic font-normal text-[18px] text-primaria leading-[1.7]"
          >
            "Ciência e leveza no cuidado da mulher, cada consulta é um espaço para entender, com clareza, o que o seu corpo está te dizendo."
          </motion.blockquote>

          <div className="border-t border-decorativo mb-[32px]"></div>

          <div>
            {formacao.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.42 + index * 0.07 }}
                className={`flex items-center gap-[16px] py-[16px] group ${index !== formacao.length - 1 ? 'border-b border-[rgba(232,196,184,0.5)]' : ''}`}
              >
                <div className="w-[44px] h-[44px] rounded-[12px] shrink-0 bg-fundo border border-decorativo flex items-center justify-center transition-all duration-300 group-hover:bg-primaria/5 group-hover:border-primaria/30 group-hover:scale-105 p-[4px] overflow-hidden bg-white">
                  <img src={item.imgSrc} alt={item.instituicao} className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110 mix-blend-multiply" />
                </div>
                <div>
                  <h4 className="font-body font-semibold text-[14px] text-texto-escuro block mb-[2px] transition-colors duration-300 group-hover:text-primaria">
                    {item.instituicao}
                  </h4>
                  <p className="font-body font-normal text-[13px] text-texto-suave">
                    {item.curso}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="mt-[36px]"
          >
            <a
              href="https://wa.me/5511998908666?text=Olá%20Dra.%20Luísa%2C%20gostaria%20de%20agendar%20uma%20consulta"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-cta hover:bg-cta-hover text-[#FFFFFF] rounded-[50px] px-[32px] py-[14px] font-body font-semibold text-[14px] tracking-[0.02em] transition-all duration-250 hover:-translate-y-[2px] hover:shadow-[0_6px_20px_rgba(217,132,90,0.30)]"
            >
              Agendar Minha Consulta →
            </a>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
