import { ArrowRight, ChevronDown } from "lucide-react";
import { motion } from "motion/react";

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1742971366169-6efb57949d56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
          alt="CNC Machine" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-white/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/30 to-white/50" />
      </div>
      <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 text-center pt-24 pb-32">
        <motion.div className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-10 border border-[#2563eb]/15 bg-[#2563eb]/5"
          initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.8,delay:0.3}}>
          <div className="w-1.5 h-1.5 rounded-full bg-[#ea580c] animate-pulse" />
          <span className="text-[11px] font-semibold tracking-[0.15em] uppercase text-[#2563eb]">Desde 2003 • Tecnologia 100% Nacional</span>
        </motion.div>

        <motion.h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-[#0f1419] leading-[0.95] mb-8" style={{letterSpacing:"-0.045em"}}
          initial={{opacity:0,y:40}} animate={{opacity:1,y:0}} transition={{duration:1,delay:0.5,ease:[0.16,1,0.3,1]}}>
          Precisão que{" "}<span className="text-[#2563eb]">transforma</span><br className="hidden sm:block"/>{" "}metal em <span className="text-[#ea580c]">arte</span>
        </motion.h1>

        <motion.p className="text-lg sm:text-xl text-[#0f1419]/70 leading-relaxed max-w-2xl mx-auto mb-12 font-light"
          initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.8,delay:0.7}}>
          Máquinas CNC de 5 eixos simultâneos para joalheria. Do protótipo 3D à peça final com precisão milimétrica.
        </motion.p>

        <motion.div className="flex flex-wrap justify-center gap-4 mb-20"
          initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.8,delay:0.9}}>
          <a href="#produtos" onClick={(e)=>{e.preventDefault();document.querySelector("#produtos")?.scrollIntoView({behavior:"smooth"})}}
            className="group inline-flex items-center gap-2 px-8 py-4 text-[12px] font-bold tracking-[0.12em] uppercase bg-[#2563eb] text-white hover:bg-[#1d4ed8] rounded-sm transition-all duration-300">
            Ver Equipamentos <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#contato" onClick={(e)=>{e.preventDefault();document.querySelector("#contato")?.scrollIntoView({behavior:"smooth"})}}
            className="inline-flex items-center gap-2 px-8 py-4 text-[12px] font-bold tracking-[0.12em] uppercase text-[#0f1419]/50 border border-[#0f1419]/10 hover:border-[#ea580c]/40 hover:text-[#ea580c] rounded-sm transition-all duration-300">
            Falar com Especialista
          </a>
        </motion.div>

        <motion.div className="flex flex-wrap justify-center gap-x-10 gap-y-4"
          initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1,delay:1.2}}>
          {[{n:"20+",l:"Anos",c:"#2563eb"},{n:"5 Eixos",l:"Simultâneos",c:"#ea580c"},{n:"1000+",l:"Clientes",c:"#2563eb"},{n:"0.01mm",l:"Precisão",c:"#ea580c"}].map((s,i)=>(
            <div key={i} className="flex items-baseline gap-2">
              <span className="text-2xl sm:text-3xl font-bold" style={{color:s.c,letterSpacing:"-0.03em"}}>{s.n}</span>
              <span className="text-[12px] font-medium tracking-[0.12em] uppercase text-[#0f1419]/50">{s.l}</span>
            </div>
          ))}
        </motion.div>
      </div>
      <motion.div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10" animate={{y:[0,6,0]}} transition={{duration:2,repeat:Infinity}}>
        <ChevronDown className="w-5 h-5 text-[#0f1419]/15" />
      </motion.div>
    </section>
  );
}
