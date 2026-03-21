import { Mail } from "lucide-react";
import { motion } from "motion/react";

export function Newsletter() {
  return (
    <section className="py-24 bg-[#f7f8fa] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-[#2563eb] opacity-[0.03] blur-[100px] rounded-full"/>
      <div className="max-w-2xl mx-auto px-5 sm:px-8 relative z-10 text-center">
        <motion.div className="flex items-center justify-center gap-3 mb-4" initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}}>
          <div className="w-8 h-[1px] bg-[#2563eb]"/><span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#2563eb]">Newsletter</span><div className="w-8 h-[1px] bg-[#2563eb]"/>
        </motion.div>
        <motion.h2 className="text-3xl sm:text-4xl font-bold text-[#0f1419] mb-4" style={{letterSpacing:"-0.04em"}} initial={{opacity:0,y:15}} whileInView={{opacity:1,y:0}} viewport={{once:true}}>
          Fique por dentro das <span className="text-[#ea580c]">novidades</span>
        </motion.h2>
        <motion.p className="text-[15px] text-[#0f1419]/50 mb-10 font-light" initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}}>Dicas, tutoriais e lançamentos no seu e-mail</motion.p>
        <motion.div className="flex flex-col sm:flex-row border border-[#0f1419]/[0.06] overflow-hidden rounded-sm" initial={{opacity:0,y:15}} whileInView={{opacity:1,y:0}} viewport={{once:true}}>
          <div className="flex-1 flex items-center gap-3 px-5 bg-white">
            <Mail size={15} className="text-[#2563eb]/40"/><input type="email" placeholder="Seu melhor e-mail" className="flex-1 py-4 bg-transparent border-none outline-none placeholder:text-[#0f1419]/15 text-[#0f1419]/60 text-[13px] font-light"/>
          </div>
          <button className="px-8 py-4 text-[11px] font-bold tracking-[0.12em] uppercase bg-[#ea580c] text-white hover:bg-[#dc4f07] transition-all shrink-0">Cadastrar</button>
        </motion.div>
        <p className="mt-3 text-[11px] text-[#0f1419]/15 font-light">Sem spam. Cancele quando quiser.</p>
      </div>
    </section>
  );
}
