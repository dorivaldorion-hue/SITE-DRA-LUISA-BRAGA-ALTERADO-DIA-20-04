import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    pergunta: "Você atende quais tipos de queixa?",
    resposta: "Atendimento voltado para saúde feminina de forma integral, com enfoque em alterações hormonais e menstruais, síndrome dos ovários policísticos, climatério/menopausa, anticoncepção, corrimentos vaginais, climatério/menopausa e infecções pelo HPV."
  },
  {
    pergunta: "Quais os diferenciais do meu atendimento?",
    resposta: "Cuidar de uma paciente exige muito mais do que prescrever um remédio e agendar uma próxima consulta em 15 minutos. O tratamento começa com uma consulta de 1h-1h30, pensada para quem não aceita mais diagnósticos rasos ou explicações genéricas. Nesse tempo, há espaço para escutar sua história com profundidade, revisar tratamentos anteriores e, junto com você, traçar um plano terapêutico realmente individualizado. Mais do que uma boa consulta, o diferencial está no que acontece entre elas. As pacientes contam com acompanhamento próximo via e-mail ou WhatsApp, orientações personalizadas e ajustes quando necessário. Esse modelo de atendimento não é para todas. É para quem valoriza qualidade, continuidade e quer ser tratado por um profissional que leva a sério cada dificuldade que a paciente enfrenta no dia a dia."
  },
  {
    pergunta: "Quanto custa a consulta?",
    resposta: "A consulta tem o valor de R$650 e inclui retorno preferencialmente on-line em até 30 dias, para avaliação de exames ou ajuste de conduta."
  },
  {
    pergunta: "Atende plano de saúde?",
    resposta: "Para conseguir manter essa qualidade de atendimento, com o tempo e atenção necessários para cada paciente, não fazemos atendimento por plano de saúde. Realizamos sempre emissão de nota após o atendimento, para fins de reembolso médico, caso se aplique nas regras do seu convênio."
  },
  {
    pergunta: "Onde fica o consultório?",
    resposta: "O consultório está localizado na Vila Mariana, em São Paulo, próximo ao Metrô Santa Cruz, com fácil acesso e estrutura pensada para conforto e discrição. Temos estacionamento pago no local."
  },
  {
    pergunta: "Como funciona a primeira consulta?",
    resposta: "A primeira consulta é detalhada (por isso a duração mais prolongada – 60 a 90 minutos) e acolhedora, com escuta ativa, avaliação clínica completa e plano de tratamento individualizado, respeitando sua fase de vida e suas queixas."
  },
  {
    pergunta: "Quais exames são realizados na consulta?",
    resposta: "Além do exame físico, há possibilidade de coleta de Papanicolau, HPV e painel de infecções sexualmente transmissíveis em consulta. O valor destes exames não está incluso na consulta, mas podemos fazer através do plano de saúde ou particular."
  },
  {
    pergunta: "Preciso levar exames?",
    resposta: "Se tiver exames anteriores, especialmente do último ano, é interessante levar. Mas caso não tenha, não se preocupe — a avaliação será conduzida a partir da sua história clínica."
  },
  {
    pergunta: "Há retorno incluso?",
    resposta: "Sim. O retorno em até 30 dias está incluso, para acompanhamento, avaliação de exames ou ajustes no tratamento"
  },
  {
    pergunta: "Como faço para agendar?",
    resposta: "O agendamento pode ser feito de forma prática pelo WhatsApp. Nossa equipe terá prazer em te orientar. Só clicar no link."
  },
  {
    pergunta: "Você atende gestantes?",
    resposta: "Sim, com acompanhamento individualizado e baseado nas melhores práticas de cuidado materno em casos de baixo risco."
  }
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-branco py-[64px] md:py-[100px]">
      <div className="max-w-[1100px] mx-auto px-[max(32px,5vw)] grid grid-cols-1 md:grid-cols-[380px_1fr] gap-[40px] md:gap-[80px] items-start">
        
        {/* COLUNA ESQUERDA (Sticky) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="md:sticky md:top-[100px]"
        >
          <span className="block font-body font-medium text-[10px] tracking-[0.18em] uppercase text-primaria mb-[12px]">
            Perguntas frequentes
          </span>
          
          <h2 className="font-display font-bold text-[36px] text-texto-escuro mb-[18px] leading-[1.2]">
            Perguntas frequentes
          </h2>
          
          <p className="font-body font-normal text-[15px] text-texto-medio leading-[1.8] mb-[28px]">
            Separei as dúvidas mais comuns das minhas pacientes. Se a sua não estiver aqui, me mande uma mensagem.
          </p>

          <a
            href="https://wa.me/5511998908666?text=Olá%20Dra.%20Luísa%2C%20gostaria%20de%20tirar%20uma%20dúvida"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-cta hover:bg-cta-hover text-branco rounded-full px-[32px] py-[14px] font-body font-semibold text-[14px] transition-all duration-250 hover:-translate-y-[1px] hover:shadow-[0_4px_14px_rgba(217,132,90,0.3)]"
          >
            Fale Comigo →
          </a>
        </motion.div>

        {/* COLUNA DIREITA (Acordeão) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col"
        >
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={index} className="border-b border-decorativo">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex justify-between items-center py-[20px] text-left group"
                  aria-expanded={isOpen}
                >
                  <span className={`font-body font-medium text-[16px] pr-[20px] transition-colors duration-200 ${isOpen ? 'text-primaria' : 'text-texto-escuro group-hover:text-primaria'}`}>
                    {faq.pergunta}
                  </span>
                  <div className={`w-[24px] h-[24px] rounded-full border-[1.5px] flex items-center justify-center shrink-0 transition-all duration-300 ${
                    isOpen ? 'border-primaria bg-primaria text-branco rotate-180' : 'border-primaria text-primaria bg-transparent rotate-0'
                  }`}>
                    {isOpen ? <Minus size={14} strokeWidth={2.5} /> : <Plus size={14} strokeWidth={2.5} />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="pb-[20px] font-body font-normal text-[15px] text-texto-medio leading-[1.8]">
                        {faq.resposta}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
          
          {/* CTA at the end of FAQs */}
          <div className="mt-[40px] p-[32px] bg-fundo rounded-[16px] border border-decorativo/50 text-center">
            <h3 className="font-body font-semibold text-[16px] md:text-[18px] text-texto-escuro mb-[12px]">
              Não encontrou resposta? Fale conosco via WhatsApp
            </h3>
            <a
              href="https://wa.me/5511998908666?text=Olá%20Dra.%20Luísa%2C%20gostaria%20de%20tirar%20uma%20dúvida"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-[8px] bg-cta hover:bg-cta-hover text-branco rounded-full px-[28px] py-[12px] font-body font-semibold text-[14px] transition-all duration-250 shadow-md hover:shadow-lg hover:-translate-y-[2px]"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
              </svg>
              Falar com Equipe
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
