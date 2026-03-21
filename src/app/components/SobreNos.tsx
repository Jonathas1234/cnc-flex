import { motion } from "motion/react";

export function SobreNos() {
  const stats = [
    { n:"20+", l:"Anos de mercado", c:"#2563eb" },
    { n:"1000+", l:"Clientes atendidos", c:"#ea580c" },
    { n:"100%", l:"Tecnologia nacional", c:"#2563eb" },
    { n:"24/7", l:"Suporte técnico", c:"#ea580c" },
  ];

  return (
    <section id="sobre" className="py-28 bg-[#f7f8fa]">
      <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center">
        <motion.div className="flex items-center justify-center gap-3 mb-6"
          initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}}>
          <div className="w-8 h-[1px] bg-[#ea580c]"/>
          <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#ea580c]">Nossa história</span>
          <div className="w-8 h-[1px] bg-[#ea580c]"/>
        </motion.div>

        <motion.h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0f1419] leading-[1.08] mb-8" style={{letterSpacing:"-0.04em"}}
          initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}}>
          Duas décadas de <span className="text-[#2563eb]">inovação</span>
        </motion.h2>

        <motion.p className="text-[16px] text-[#0f1419]/55 leading-relaxed mb-6 font-light max-w-2xl mx-auto"
          initial={{opacity:0,y:15}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:0.1}}>
          A CNC Flex nasceu para modernizar o mercado brasileiro de usinagem. Há mais de 20 anos, desenvolvemos equipamentos de fresagem de alta precisão com tecnologia 100% nacional e padrão internacional, atendendo produtores de joias, bijuterias, acessórios e próteses dentais.
        </motion.p>

        <motion.p className="text-[15px] text-[#0f1419]/45 leading-relaxed mb-16 font-light max-w-2xl mx-auto"
          initial={{opacity:0,y:15}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:0.2}}>
          Nossa missão é entregar soluções completas — desde a máquina até o treinamento e assistência técnica — para que nossos clientes tenham os melhores resultados em usinagem de precisão. Contamos com financiamento facilitado pelo BNDES e suporte pós-venda dedicado em todo o Brasil.
        </motion.p>

        {/* Stats - horizontal row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <motion.div key={i} className="p-8 bg-white border border-[#0f1419]/[0.04] hover:shadow-lg rounded-sm transition-all duration-500"
              initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay:i*0.08}}>
              <div className="text-3xl sm:text-4xl font-bold mb-2" style={{color:s.c, letterSpacing:"-0.03em"}}>{s.n}</div>
              <div className="text-[11px] font-medium tracking-[0.12em] uppercase text-[#0f1419]/35">{s.l}</div>
            </motion.div>
          ))}
        </div>

        <motion.div className="mt-12"
          initial={{opacity:0,y:15}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:0.4}}>
          <a href="#contato" onClick={(e)=>{e.preventDefault();document.querySelector("#contato")?.scrollIntoView({behavior:"smooth"})}}
            className="inline-flex px-8 py-3.5 text-[11px] font-bold tracking-[0.12em] uppercase bg-[#2563eb] text-white hover:bg-[#1d4ed8] rounded-sm transition-all duration-300">
            Fale com a gente
          </a>
        </motion.div>
      </div>
    </section>
  );
}
