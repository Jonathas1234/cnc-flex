import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => { const fn = () => setScrolled(window.scrollY > 50); window.addEventListener("scroll", fn); return () => window.removeEventListener("scroll", fn); }, []);
  const links = [{ label:"Início",href:"#inicio" },{ label:"Equipamentos",href:"#produtos" },{ label:"Tecnologia",href:"#servicos" },{ label:"Sobre",href:"#sobre" },{ label:"Contato",href:"#contato" }];
  const go = (h:string) => { document.querySelector(h)?.scrollIntoView({behavior:"smooth"}); setOpen(false); };

  return (
    <motion.header className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{ background: scrolled ? "rgba(255,255,255,0.88)" : "transparent", backdropFilter: scrolled ? "saturate(180%) blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(0,0,0,0.05)" : "none" }}
      initial={{y:-80}} animate={{y:0}} transition={{duration:0.7,ease:[0.16,1,0.3,1]}}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 h-[72px] flex items-center justify-between">
        <a href="#inicio" onClick={(e)=>{e.preventDefault();go("#inicio")}} className="text-xl sm:text-2xl font-bold tracking-tight select-none">
          <img src="/logo-cncflex.png" alt="CNC Flex" className="h-12 w-auto" />
        </a>
        <nav className="hidden lg:flex items-center gap-8">
          {links.map(l=>(
            <a key={l.label} href={l.href} onClick={(e)=>{e.preventDefault();go(l.href)}}
              className="text-[12px] font-medium tracking-[0.15em] uppercase text-[#0f1419]/40 hover:text-[#2563eb] transition-colors duration-300">{l.label}</a>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <a href="https://wa.me/5511938023558" target="_blank" rel="noopener noreferrer"
            className="hidden lg:inline-flex px-6 py-2.5 text-[11px] font-bold tracking-[0.15em] uppercase bg-[#2563eb] text-white hover:bg-[#1d4ed8] transition-all duration-300 rounded-sm">
            Orçamento
          </a>
          <button onClick={()=>setOpen(!open)} className="lg:hidden text-[#0f1419]/60 hover:text-[#2563eb] transition-colors"><Menu size={22}/></button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div className="lg:hidden fixed inset-0 z-50 bg-white flex flex-col" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
            <div className="flex items-center justify-between px-5 h-[72px]">
              <span className="text-xl font-bold"><img src="/logo-cncflex.png" alt="CNC Flex" className="h-12 w-auto" /></span>
              <button onClick={()=>setOpen(false)} className="text-[#0f1419]/60"><X size={22}/></button>
            </div>
            <nav className="flex flex-col px-5 mt-4 gap-1">
              {links.map(l=>(<a key={l.label} href={l.href} onClick={(e)=>{e.preventDefault();go(l.href)}}
                className="py-4 text-[14px] font-medium tracking-[0.1em] uppercase text-[#0f1419]/40 hover:text-[#2563eb] border-b border-[#0f1419]/5 transition-colors">{l.label}</a>))}
              <a href="https://wa.me/5511938023558" target="_blank" rel="noopener noreferrer"
                className="mt-6 py-4 text-center text-[12px] font-bold tracking-[0.15em] uppercase bg-[#2563eb] text-white rounded-sm">Solicitar Orçamento</a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
