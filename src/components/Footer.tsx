import { Instagram, Linkedin, MapPin, Mail, Phone } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#2E201B] text-white pt-[64px] md:pt-[100px] pb-[32px] border-t-4 border-cta">
      <div className="max-w-7xl mx-auto px-6 md:px-[max(40px,5vw)]">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[40px] md:gap-[60px] pb-[60px] border-b border-white/10">
          
          {/* Brand & Microcopy */}
          <div className="flex flex-col">
            <img 
              src="https://res.cloudinary.com/dezwlu6p2/image/upload/v1776688937/Prancheta_23_c%C3%B3pia_8_amwcsn.webp" 
              alt="Dra. Luísa Braga Logo" 
              className="h-[48px] w-auto object-contain mb-[24px] filter invert brightness-0 opacity-90 self-start"
            />
            <h3 className="font-display font-semibold text-[20px] tracking-wide mb-[12px] opacity-90">
              Dra. Luísa Braga
            </h3>
            <p className="font-body text-[14px] leading-[1.8] text-white/70">
              Atendimento particular — Privacidade e respeito à sua saúde.
            </p>
          </div>

          {/* Links Rápidos */}
          <div className="flex flex-col">
            <h4 className="font-display font-semibold text-[16px] tracking-widest uppercase mb-[24px] opacity-90">
              Navegação
            </h4>
            <ul className="space-y-[12px]">
              {[
                { name: 'Início', href: '/#inicio' },
                { name: 'Quem Sou', href: '/#quem-sou' },
                { name: 'Serviços', href: '/#servicos' },
                { name: 'Depoimentos', href: '/#depoimentos' },
                { name: 'Consultório', href: '/#consultorio' },
                { name: 'Perguntas frequentes', href: '/#faq' }
              ].map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="font-body text-[14px] text-white/70 hover:text-cta transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato & Horários */}
          <div className="flex flex-col">
            <h4 className="font-display font-semibold text-[16px] tracking-widest uppercase mb-[24px] opacity-90">
              Contato & Horário
            </h4>
            <ul className="space-y-[16px] font-body text-[14px] text-white/70">
              <li className="flex items-start gap-[12px]">
                <Phone size={18} className="text-cta mt-[2px] shrink-0" />
                <div>
                  <a href="https://wa.me/5511998908666" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors block">
                    +55 11 99890-8666
                  </a>
                  <span className="text-[12px] opacity-70">Seg-Sex: 08h às 19h</span>
                </div>
              </li>
              <li className="flex items-center gap-[12px]">
                <Mail size={18} className="text-cta shrink-0" />
                <a href="mailto:draluisabraga@gmail.com" className="hover:text-white transition-colors">
                  draluisabraga@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Endereço */}
          <div className="flex flex-col">
            <h4 className="font-display font-semibold text-[16px] tracking-widest uppercase mb-[24px] opacity-90">
              Endereço
            </h4>
            <div className="flex items-start gap-[12px] font-body text-[14px] text-white/70 leading-[1.6]">
              <MapPin size={18} className="text-cta mt-[2px] shrink-0" />
              <p>
                Vila Mariana
                <br />Próximo ao Metrô Santa Cruz
                <br />São Paulo - SP
              </p>
            </div>
            
            {/* Socials */}
            <div className="flex items-center gap-[16px] mt-[32px]">
              <a href="#" className="w-[36px] h-[36px] rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:bg-cta hover:text-white hover:border-cta transition-all">
                <Instagram size={16} />
              </a>
              <a href="#" className="w-[36px] h-[36px] rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:bg-cta hover:text-white hover:border-cta transition-all">
                <Linkedin size={16} />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-[32px] flex flex-col md:flex-row items-center justify-between gap-[20px]">
          <p className="font-body text-[13px] text-white/50 text-center md:text-left">
            &copy; {new Date().getFullYear()} Dra. Luísa Braga. Todos os direitos reservados.
          </p>
          
          <div className="flex items-center gap-[24px] font-body text-[13px] text-white/50">
            <Link to="#" className="hover:text-cta transition-colors">Política de Privacidade</Link>
            <span className="w-[4px] h-[4px] rounded-full bg-white/20" />
            <Link to="#" className="hover:text-cta transition-colors">Termos Gerais</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
