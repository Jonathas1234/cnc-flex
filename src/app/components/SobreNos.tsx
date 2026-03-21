import { motion } from "motion/react";
export function SobreNos() {
  const stats = [{n:"20+",l:"Anos de mercado"},{n:"1000+",l:"Clientes atendidos"},{n:"100%",l:"Tecnologia nacional"},{n:"24/7",l:"Suporte técnico"}];
  return (
    <section id="sobre" className="py-28 relative overflow-hidden" style={{background:"linear-gradient(135deg, #F38104 0%, #e06f00 40%, #c85f00 100%)"}}>
      <div className="absolute inset-0 opacity-[0.04]" style={{backgroundImage:"radial-gradient(circle at 1px 1px, white 1px, transparent 0)",backgroundSize:"32px 32px"}} />
      <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center relative z-10">
        <motion.div className="flex items-center justify-center gap-3 mb-6" initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}}>
          <div className="w-8 h-[1px] bg-white/50"/><span className="text-[12px] font-semibold tracking-[0.2em] uppercase text-white/80">Nossa história</span><div className="w-8 h-[1px] bg-white/50"/>
        </motion.div>
        <motion.h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.08] mb-10" style={{letterSpacing:"-0.04em"}} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}}>
          Duas décadas de <span className="text-[#0A3C6E]">inovação</span>
        </motion.h2>
        <motion.p className="text-[17px] text-white leading-relaxed mb-5 font-light max-w-2xl mx-auto" initial={{opacity:0,y:15}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:0.1}}>
          A CNC Flex nasceu para modernizar o mercado brasileiro de usinagem. Há mais de 20 anos, desenvolvemos equipamentos de fresagem de alta precisão com tecnologia 100% nacional e padrão internacional.
        </motion.p>
        <motion.p className="text-[16px] text-white/80 leading-relaxed mb-16 font-light max-w-2xl mx-auto" initial={{opacity:0,y:15}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:0.2}}>
          Nossa missão é entregar soluções completas — desde a máquina até o treinamento e assistência técnica. Financiamento pelo BNDES e suporte em todo o Brasil.
        </motion.p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {stats.map((s,i)=>(<motion.div key={i} className="p-8 bg-white/20 backdrop-blur-sm border border-white/15 rounded-sm hover:bg-white/30 transition-all duration-500"
            initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.08}}>
            <div className="text-3xl sm:text-4xl font-bold text-white mb-2" style={{letterSpacing:"-0.03em"}}>{s.n}</div>
            <div className="text-[12px] font-semibold tracking-[0.1em] uppercase text-white/70">{s.l}</div>
          </motion.div>))}
        </div>
        <motion.div className="mt-12" initial={{opacity:0,y:15}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:0.4}}>
          <a href="#contato" onClick={(e)=>{e.preventDefault();document.querySelector("#contato")?.scrollIntoView({behavior:"smooth"})}}
            className="inline-flex px-10 py-4 text-[12px] font-bold tracking-[0.12em] uppercase bg-[#0A3C6E] text-white hover:brightness-125 rounded-sm transition-all duration-300 shadow-lg">
            Fale com a gente
          </a>
        </motion.div>
      </div>
    </section>
  );
}
