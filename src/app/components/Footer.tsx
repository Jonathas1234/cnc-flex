import { Facebook, Instagram, Youtube, Linkedin, MapPin, Phone, Mail } from "lucide-react";
import { motion } from "motion/react";
export function Footer() {
  const yr = new Date().getFullYear();
  const go = (h:string) => { document.querySelector(h)?.scrollIntoView({behavior:"smooth"}); };
  const navLinks = [{label:"Início",href:"#inicio"},{label:"Equipamentos",href:"#produtos"},{label:"Tecnologia",href:"#servicos"},{label:"Sobre",href:"#sobre"},{label:"Contato",href:"#contato"}];
  const equipLinks = [{label:"Alliance",href:"#produtos"},{label:"5D Pro Profissional",href:"#produtos"},{label:"Joalheiro 4º/5º Eixo",href:"#produtos"},{label:"CNC Dental 5D Pró",href:"#produtos"},{label:"Artist 3D",href:"#produtos"},{label:"Shoesmaker",href:"#produtos"}];
  return (
    <footer style={{background:"linear-gradient(180deg, #0A3C6E 0%, #072d52 60%, #051e38 100%)"}} className="overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          <div>
            <div className="mb-6"><img src="/logo-cncflex.png" alt="CNC Flex" className="h-12 w-auto brightness-0 invert" /></div>
            <p className="text-[14px] text-white/70 leading-relaxed mb-6">Mais de 20 anos em usinagem de precisão com tecnologia 100% nacional.</p>
            <div className="flex gap-2">
              {[
                {I:Facebook,url:"https://www.facebook.com/cncflex"},
                {I:Instagram,url:"https://www.instagram.com/cncflexoficial_/"},
                {I:Youtube,url:"https://www.youtube.com/@cncflex"},
                {I:Linkedin,url:"https://www.linkedin.com/company/cncflex"},
              ].map(({I,url},i)=>(
                <motion.a key={i} href={url} target="_blank" rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center border border-white/20 text-white/60 rounded-sm transition-all duration-300 active:border-[#F38104] active:text-[#F38104]"
                  whileHover={{y:-2,borderColor:"rgba(243,129,4,0.6)",color:"#F38104"}}><I size={14}/></motion.a>))}
            </div>
          </div>
          <div>
            <h3 className="text-[12px] font-bold tracking-[0.15em] uppercase text-[#F38104] mb-6">Navegação</h3>
            <ul className="space-y-3">{navLinks.map(l=>(
              <li key={l.label}><a href={l.href} onClick={(e)=>{e.preventDefault();go(l.href)}}
                className="text-[14px] text-white/70 active:text-white hover:text-white transition-colors cursor-pointer">{l.label}</a></li>
            ))}</ul>
          </div>
          <div>
            <h3 className="text-[12px] font-bold tracking-[0.15em] uppercase text-[#F38104] mb-6">Equipamentos</h3>
            <ul className="space-y-3">{equipLinks.map(l=>(
              <li key={l.label}><a href={l.href} onClick={(e)=>{e.preventDefault();go(l.href)}}
                className="text-[14px] text-white/70 active:text-white hover:text-white transition-colors cursor-pointer">{l.label}</a></li>
            ))}</ul>
          </div>
          <div>
            <h3 className="text-[12px] font-bold tracking-[0.15em] uppercase text-[#F38104] mb-6">Contato</h3>
            <ul className="space-y-4">
              <li><a href="https://www.google.com/maps/search/?api=1&query=CNC+Flex+Av+Casa+Verde+3434+São+Paulo+SP" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 group">
                <MapPin size={14} className="text-[#F38104] mt-0.5 shrink-0"/><span className="text-[14px] text-white/70 leading-relaxed group-active:text-white group-hover:text-white transition-colors">Av. Casa Verde, 3434-C<br/>São Paulo - SP</span>
              </a></li>
              <li><a href="tel:+551139510270" className="flex items-center gap-3 group">
                <Phone size={14} className="text-[#F38104] shrink-0"/><span className="text-[14px] text-white/70 group-active:text-white group-hover:text-white transition-colors">(11) 3951-0270</span>
              </a></li>
              <li><a href="mailto:cncflex@cncflex.com.br" className="flex items-center gap-3 group">
                <Mail size={14} className="text-[#F38104] shrink-0"/><span className="text-[14px] text-white/70 group-active:text-white group-hover:text-white transition-colors break-all">cncflex@cncflex.com.br</span>
              </a></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-white/[0.1] flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-[12px] text-white/50">© {yr} CNC Flex — Todos os direitos reservados</p>
          <div className="flex gap-5">
            <a href="#" className="text-[12px] text-white/50 active:text-white/70 hover:text-white/70 transition-colors">Privacidade</a>
            <a href="#" className="text-[12px] text-white/50 active:text-white/70 hover:text-white/70 transition-colors">Termos</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
