import { Check, Play, Layers, Cpu, Sparkles } from "lucide-react";
import { useState } from "react";
import { motion } from "motion/react";

export function Tecnologia() {
  const [playing, setPlaying] = useState(false);
  const features = ["Visualização 3D antes da produção","Precisão de 0.01mm","5 eixos simultâneos","Software CAD/CAM incluído","Biblioteca de designs","Suporte especializado"];
  return (
    <section id="servicos" className="py-28 bg-[#f7f8fa]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* VIDEO - LEFT */}
          <motion.div className="relative order-2 lg:order-1" initial={{opacity:0,x:-40}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:0.8}}>
            <div className="relative overflow-hidden rounded-sm" style={{aspectRatio:"16/9"}}>
              {playing ? (
                <iframe src="https://www.youtube.com/embed/cnc1YNbOMjM?autoplay=1&rel=0" title="Alliance em funcionamento"
                  className="w-full h-full absolute inset-0" allow="autoplay; encrypted-media" allowFullScreen />
              ) : (
                <>
                  <img src="https://img.youtube.com/vi/cnc1YNbOMjM/maxresdefault.jpg" alt="Alliance CNC" className="w-full h-full object-cover"/>
                  <div className="absolute inset-0 bg-[#0f1419]/15 flex items-center justify-center cursor-pointer group" onClick={()=>setPlaying(true)}>
                    <div className="w-20 h-20 flex items-center justify-center rounded-full bg-white/95 shadow-2xl group-hover:scale-110 transition-transform duration-300">
                      <Play size={28} className="text-[#2563eb] ml-1"/>
                    </div>
                  </div>
                </>
              )}
              <div className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-[#2563eb]/30 rounded-tl-sm pointer-events-none"/>
              <div className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-[#ea580c]/30 rounded-br-sm pointer-events-none"/>
            </div>
          </motion.div>
          {/* TEXT - RIGHT */}
          <motion.div className="order-1 lg:order-2" initial={{opacity:0,x:40}} whileInView={{opacity:1,x:0}} viewport={{once:true}}>
            <div className="flex items-center gap-3 mb-6"><div className="w-8 h-[1px] bg-[#2563eb]"/><span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#2563eb]">Tecnologia</span></div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0f1419] leading-[1.08] mb-6" style={{letterSpacing:"-0.04em"}}>
              Do protótipo 3D à <span className="text-[#ea580c]">peça final</span>
            </h2>
            <p className="text-[15px] text-[#0f1419]/60 leading-relaxed mb-10 font-light max-w-lg">
              Até cinco eixos simultâneos de fresagem e sexto eixo para usinagem interna. Visualização digital em 3D sem protótipo físico.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
              {features.map((f,i)=>(
                <motion.div key={i} className="flex items-center gap-3" initial={{opacity:0,x:-10}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{delay:i*0.05}}>
                  <div className="w-5 h-5 flex items-center justify-center rounded" style={{background:i%2===0?"rgba(37,99,235,0.08)":"rgba(234,88,12,0.08)"}}>
                    <Check size={11} style={{color:i%2===0?"#2563eb":"#ea580c"}} strokeWidth={3}/>
                  </div>
                  <span className="text-[14px] text-[#0f1419]/65 font-light">{f}</span>
                </motion.div>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              {[{icon:Layers,t:"5 Eixos",c:"#2563eb"},{icon:Cpu,t:"CAD/CAM",c:"#ea580c"},{icon:Sparkles,t:"Precisão",c:"#2563eb"}].map((b,i)=>(
                <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-sm" style={{background:`${b.c}06`,border:`1px solid ${b.c}15`}}>
                  <b.icon size={13} style={{color:b.c}}/><span className="text-[10px] font-bold tracking-[0.12em] uppercase" style={{color:b.c}}>{b.t}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
