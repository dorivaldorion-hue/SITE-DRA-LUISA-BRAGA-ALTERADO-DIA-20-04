import { useEffect, useState } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, ArrowLeft, HeartPulse } from 'lucide-react';
import Navbar from '../components/Navbar';
import Encerramento from '../components/Encerramento';
import { servicesData } from '../data/servicesData';

export default function ServicePage() {
  const { slug } = useParams<{ slug: string }>();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!slug || !servicesData[slug]) {
    return <Navigate to="/" replace />;
  }

  const { title, subtitle, articleHtml, faqs } = servicesData[slug];

  return (
    <div className="min-h-screen bg-fundo font-body text-texto-escuro selection:bg-primaria/20 selection:text-texto-escuro">
      <Navbar />

      <main>
        {/* HERO SECTION */}
        <section className="relative pt-[120px] pb-[60px] md:pt-[160px] md:pb-[80px] px-[24px] md:px-[max(32px,5vw)] overflow-hidden">
          {/* Background Elements */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primaria/[0.04] rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
          <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-[#C04A37]/[0.02] rounded-full blur-[80px] -translate-x-1/2 pointer-events-none" />
          
          <div className="max-w-[800px] mx-auto relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="inline-flex items-center justify-center w-[48px] h-[48px] rounded-[16px] bg-primaria/5 border border-primaria/20 text-primaria mb-[24px]"
            >
              <HeartPulse strokeWidth={1.5} size={24} />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="font-display font-bold text-[36px] md:text-[56px] text-texto-escuro leading-[1.15] mb-[16px]"
            >
              {title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="font-body font-normal text-[17px] md:text-[20px] text-texto-medio leading-[1.6]"
            >
              {subtitle}
            </motion.p>
          </div>
        </section>

        {/* BREADCRUMBS / VOLTAR */}
        <div className="max-w-[800px] mx-auto px-[24px] md:px-[max(32px,5vw)] pb-[40px]">
           <Link 
            to="/#servicos" 
            className="inline-flex items-center gap-[8px] text-[13px] font-medium tracking-[0.05em] uppercase text-texto-suave hover:text-primaria transition-colors duration-300"
          >
            <ArrowLeft size={16} /> Voltar para Tratamentos
          </Link>
        </div>

        {/* ARTICLE SECTION */}
        <section className="max-w-[800px] mx-auto px-[24px] md:px-[max(32px,5vw)] pb-[80px] md:pb-[120px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="prose prose-lg md:prose-xl max-w-none text-texto-medio font-body leading-[1.85] marker:text-primaria
                       prose-p:mb-[24px] prose-p:text-[16px] md:prose-p:text-[18px] prose-strong:text-texto-escuro prose-strong:font-semibold"
            dangerouslySetInnerHTML={{ __html: articleHtml }}
          />
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-[48px] flex justify-center"
          >
            <a 
              href="https://wa.me/5511998908666?text=Olá%20Dra.%20Luísa%2C%20gostaria%20de%20agendar%20uma%20consulta"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-[10px] bg-cta hover:bg-cta-hover text-white rounded-full px-[36px] py-[16px] font-body font-bold text-[14px] tracking-[0.05em] uppercase transition-all duration-300 shadow-md hover:shadow-[0_8px_24px_rgba(217,132,90,0.3)] hover:-translate-y-[2px]"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
              </svg>
              Agendar Consulta
            </a>
          </motion.div>

          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-primaria/20 to-transparent my-[80px]" />
        </section>

        {/* FAQ SECTION */}
        {faqs && faqs.length > 0 && (
          <section className="bg-white py-[80px] md:py-[120px]">
            <div className="max-w-[800px] mx-auto px-[24px] md:px-[max(32px,5vw)]">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="text-center mb-[48px]"
              >
                <h2 className="font-display font-bold text-[32px] md:text-[42px] text-texto-escuro mb-[12px] leading-[1.2]">
                  Perguntas Frequentes
                </h2>
                <p className="font-body font-normal text-[16px] text-texto-suave">
                  Esclareça as principais dúvidas sobre {title.toLowerCase()}.
                </p>
              </motion.div>

              <div className="space-y-[12px]">
                {faqs.map((faq: any, i: number) => {
                  const isOpen = openFaqIndex === i;
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.4, delay: i * 0.1 }}
                      className="bg-fundo rounded-[16px] border border-[rgba(232,196,184,0.3)] overflow-hidden transition-all duration-300"
                    >
                      <button
                        onClick={() => setOpenFaqIndex(isOpen ? null : i)}
                        className="w-full text-left px-[24px] pb-[20px] pt-[20px] flex items-center justify-between gap-[16px] group"
                      >
                        <span className="font-body font-semibold text-[15px] md:text-[16px] text-texto-escuro group-hover:text-primaria transition-colors leading-[1.4]">
                          {faq.pergunta}
                        </span>
                        <div className={`w-[32px] h-[32px] rounded-full shrink-0 flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-primaria text-branco shadow-md shadow-primaria/20 rotate-180' : 'bg-white text-texto-suave border border-decorativo'}`}>
                          <ChevronDown size={18} strokeWidth={2} />
                        </div>
                      </button>

                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="px-[24px]"
                          >
                            <div className="pb-[24px] pt-[4px] font-body text-[14px] md:text-[15px] text-texto-medio leading-[1.7] border-t border-[rgba(232,196,184,0.3)]">
                              {faq.resposta}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>
        )}
        
        {/* ENCERRAMENTO (CTA Global) */}
        <Encerramento />
      </main>
    </div>
  );
}
