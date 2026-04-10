import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const links = [{label:"Início",href:"#inicio"},{label:"Equipamentos",href:"#produtos"},{label:"Tecnologia",href:"#servicos"},{label:"Sobre",href:"#sobre"},{label:"Contato",href:"#contato"}];
  const go = (h: string) => { document.querySelector(h)?.scrollIntoView({ behavior: "smooth" }); setOpen(false); };

  return (
    <motion.header className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled
          ? "rgba(255,255,255,0.88)"
          : "linear-gradient(180deg, rgba(10,30,60,0.72) 0%, rgba(10,30,60,0.0) 100%)",
        backdropFilter: scrolled ? "saturate(180%) blur(20px)" : "none",
        WebkitBackdropFilter: scrolled ? "saturate(180%) blur(20px)" : "none",
        boxShadow: scrolled ? "0 4px 24px rgba(10,60,110,0.10)" : "none",
      }}
      initial={{y:-80}} animate={{y:0}} transition={{duration:0.7,ease:[0.16,1,0.3,1]}}>

      {/* Orange top accent line */}
      <div className="absolute top-0 left-0 right-0 h-[3px]"
        style={{background:"linear-gradient(90deg, #F38104 0%, #ffb347 50%, #F38104 100%)"}}/>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 h-[64px] sm:h-[72px] flex items-center justify-between">
        <a href="#inicio" onClick={(e)=>{e.preventDefault();go("#inicio")}} className="select-none flex items-center gap-3">
          <img src="/logo-cncflex.png" alt="CNC Flex" className={"h-11 sm:h-14 w-auto transition-all duration-500 " + (scrolled ? "" : "brightness-0 invert")} />
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map(l=>(
            <a key={l.label} href={l.href} onClick={(e)=>{e.preventDefault();go(l.href)}}
              className={"group relative text-[12px] font-semibold tracking-[0.15em] uppercase transition-colors duration-300 "
                + (scrolled ? "text-[#0A3C6E] hover:text-[#F38104]" : "text-white hover:text-[#F38104]")}>
              {l.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#F38104] group-hover:w-full transition-all duration-300 rounded-full"/>
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a href="https://wa.me/5511938023558" target="_blank" rel="noopener noreferrer"
            className="hidden lg:inline-flex px-6 py-2.5 text-[11px] font-bold tracking-[0.15em] uppercase bg-[#F38104] text-white hover:brightness-110 transition-all duration-300 rounded-sm shadow-[0_4px_16px_rgba(243,129,4,0.35)]">
            Orçamento
          </a>
          <button onClick={()=>setOpen(!open)} className={"lg:hidden p-1 transition-colors " + (scrolled ? "text-[#0A3C6E]" : "text-white")} aria-label="Menu">
            <Menu size={22}/>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div className="lg:hidden fixed inset-0 z-50 bg-[#0A3C6E] flex flex-col"
            initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:0.25}}>
            <div className="absolute top-0 left-0 right-0 h-[3px]" style={{background:"linear-gradient(90deg, #F38104 0%, #ffb347 50%, #F38104 100%)"}}/>
            <div className="flex items-center justify-between px-5 h-[64px]">
              <img src="/logo-cncflex.png" alt="CNC Flex" className="h-11 w-auto brightness-0 invert" />
              <button onClick={()=>setOpen(false)} className="text-white/70 p-1" aria-label="Fechar"><X size={22}/></button>
            </div>
            <nav className="flex flex-col px-5 mt-4 gap-1">
              {links.map((l,i)=>(<motion.a key={l.label} href={l.href} onClick={(e)=>{e.preventDefault();go(l.href)}}
                className="py-4 text-[14px] font-semibold tracking-[0.1em] uppercase text-white/80 active:text-[#F38104] border-b border-white/10 transition-colors"
                initial={{opacity:0,x:-20}} animate={{opacity:1,x:0}} transition={{delay:i*0.05,duration:0.3}}>
                {l.label}
              </motion.a>))}
              <a href="https://wa.me/5511938023558" target="_blank" rel="noopener noreferrer"
                className="mt-6 py-4 text-center text-[12px] font-bold tracking-[0.15em] uppercase bg-[#F38104] text-white rounded-sm">Solicitar Orçamento</a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
