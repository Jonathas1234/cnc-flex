import { Facebook, Instagram, Youtube, Linkedin, MapPin, Phone, Mail } from "lucide-react";
import { motion } from "motion/react";

export function Footer() {
  const yr = new Date().getFullYear();
  return (
    <footer className="bg-[#0f1419]">
      <div className="h-[2px] bg-gradient-to-r from-[#2563eb] via-[#ea580c] to-[#2563eb]"/>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          <div>
            <div className="text-xl font-bold mb-5"><img src="/logo-cncflex.png" alt="CNC Flex" className="h-10 w-auto brightness-0 invert" /></div>
            <p className="text-[13px] text-white/45 leading-relaxed mb-6 font-light">Mais de 20 anos em usinagem de precisão com tecnologia 100% nacional.</p>
            <div className="flex gap-2">
              {[{I:Facebook,c:"#2563eb"},{I:Instagram,c:"#ea580c"},{I:Youtube,c:"#ea580c"},{I:Linkedin,c:"#2563eb"}].map(({I,c},i)=>(
                <motion.a key={i} href="#" className="w-8 h-8 flex items-center justify-center border border-white/[0.06] text-white/40 rounded-sm transition-all duration-300"
                  whileHover={{y:-2,borderColor:`${c}40`,color:c}}><I size={13}/></motion.a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-[10px] font-bold tracking-[0.15em] uppercase text-[#2563eb]/50 mb-5">Navegação</h3>
            <ul className="space-y-2.5">{["Início","Equipamentos","Tecnologia","Sobre","Contato"].map(l=>(<li key={l}><a href={`#${l.toLowerCase()}`} className="text-[13px] text-white/40 hover:text-white/60 transition-colors font-light">{l}</a></li>))}</ul>
          </div>
          <div>
            <h3 className="text-[10px] font-bold tracking-[0.15em] uppercase text-[#ea580c]/50 mb-5">Equipamentos</h3>
            <ul className="space-y-2.5">{["Alliance","Artist 3D","Joalheiro 5º Eixo","5D Pro","Compacta"].map(p=>(<li key={p}><a href="#produtos" className="text-[13px] text-white/40 hover:text-white/60 transition-colors font-light">{p}</a></li>))}</ul>
          </div>
          <div>
            <h3 className="text-[10px] font-bold tracking-[0.15em] uppercase text-[#2563eb]/50 mb-5">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5"><MapPin size={13} className="text-[#ea580c]/40 mt-0.5 shrink-0"/><span className="text-[13px] text-white/40 font-light leading-relaxed">Av. Casa Verde, 3434-C<br/>São Paulo - SP</span></li>
              <li className="flex items-center gap-2.5"><Phone size={13} className="text-[#2563eb]/40 shrink-0"/><span className="text-[13px] text-white/40 font-light">(11) 3951-0270</span></li>
              <li className="flex items-center gap-2.5"><Mail size={13} className="text-[#ea580c]/40 shrink-0"/><span className="text-[13px] text-white/40 font-light">cncflex@cncflex.com.br</span></li>
            </ul>
          </div>
        </div>
        <div className="pt-6 border-t border-white/[0.04] flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-[11px] text-white/30 font-light">© {yr} CNC Flex — Todos os direitos reservados</p>
          <div className="flex gap-5">{["Privacidade","Termos"].map(t=><a key={t} href="#" className="text-[11px] text-white/30 hover:text-white/30 transition-colors font-light">{t}</a>)}</div>
        </div>
      </div>
    </footer>
  );
}
