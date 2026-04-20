import React from 'react';

const keywords = [
  "SAÚDE DA MULHER",
  "HPV",
  "CORRIMENTOS VAGINAIS",
  "ALTERAÇÕES MENSTRUAIS",
  "SOP",
  "TPM",
  "MENOPAUSA",
  "REPOSIÇÃO HORMONAL",
  "CONTRACEPÇÃO",
  "DIU",
  "IMPLANON"
];

const seoKeywords = [
  "Saúde da mulher",
  "HPV",
  "Corrimentos vaginais",
  "Alterações menstruais",
  "SOP",
  "TPM",
  "Menopausa",
  "Reposição hormonal",
  "Contracepção",
  "DIU",
  "Implanon"
];

export default function Ticker() {
  const renderBlock = (index: number) => (
    <div key={index} className="flex items-center whitespace-nowrap">
      {keywords.map((kw, i) => (
        <React.Fragment key={i}>
          <span>{kw}</span>
          <span className="text-[14px] text-decorativo font-normal opacity-70 mx-[12px] md:mx-[18px] align-middle">
            •
          </span>
        </React.Fragment>
      ))}
    </div>
  );

  return (
    <section 
      id="ticker" 
      aria-label="Especialidades da Dra. Luísa Braga" 
      className="relative z-10 w-full overflow-hidden bg-fundo flex items-center h-[44px] md:h-[52px] border-y border-primaria/20"
    >
      <style>{`
        .ticker-track {
          display: flex;
          align-items: center;
          white-space: nowrap;
          animation: ticker-scroll 40s linear infinite;
        }
        @media (min-width: 768px) {
          .ticker-track {
            animation-duration: 55s;
          }
        }
        .ticker-track:hover {
          animation-play-state: paused;
        }
        @keyframes ticker-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333333%); }
        }
      `}</style>
      
      <div className="w-full h-full flex items-center overflow-hidden">
        <div 
          className="ticker-track font-body font-semibold text-[10px] md:text-[11px] tracking-[0.10em] md:tracking-[0.14em] uppercase text-primaria" 
          role="marquee" 
          aria-live="off"
        >
          {renderBlock(1)}
          {renderBlock(2)}
          {renderBlock(3)}
        </div>
      </div>

      {/* SEO Hidden List */}
      <ul 
        className="seo-keywords" 
        style={{ 
          position: 'absolute', 
          width: '1px', 
          height: '1px', 
          overflow: 'hidden', 
          clip: 'rect(0,0,0,0)', 
          whiteSpace: 'nowrap' 
        }}
      >
        {seoKeywords.map((kw, i) => (
          <li key={i}>{kw}</li>
        ))}
      </ul>
    </section>
  );
}
