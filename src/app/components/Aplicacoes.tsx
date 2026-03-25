import { motion } from "motion/react";
import { Gem, Sparkles, Heart, Briefcase, Award, Gift, Tag, Cog } from "lucide-react";
export function Aplicacoes() {
  const items = [
    {icon:Heart,title:"Joalheria",desc:"Anéis e alianças com precisão milimétrica"},
    {icon:Gem,title:"Bijuterias",desc:"Peças delicadas com acabamento premium"},
    {icon:Sparkles,title:"Dental",desc:"Zircônia e PMMA com exatidão"},
    {icon:Briefcase,title:"Acessórios",desc:"Componentes metálicos para luxo"},
    {icon:Award,title:"Troféus",desc:"Reconhecimentos exclusivos"},
    {icon:Gift,title:"Brindes",desc:"Personalização com sua marca"},
    {icon:Tag,title:"Etiquetas",desc:"Logotipos gravados com precisão"},
    {icon:Cog,title:"Industrial",desc:"Componentes de alta performance"},
  ];
  return (
    <section className="py-28 bg-gradient-to-b from-white to-[#f0f2f5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-16">
          <motion.div className="flex items-center justify-center gap-3 mb-4" initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}}>
            <div className="w-8 h-[1px] bg-[#0A3C6E]"/><span className="text-[12px] font-semibold tracking-[0.2em] uppercase text-[#0A3C6E]">Segmentos</span><div className="w-8 h-[1px] bg-[#0A3C6E]"/>
          </motion.div>
          <motion.h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0A3C6E] leading-[1.08]" style={{letterSpacing:"-0.04em"}} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}}>
            Múltiplas <span className="text-[#F38104]">indústrias</span>
          </motion.h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {items.map((it,i)=>{const Icon=it.icon;return(
            <motion.div key={i} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.04}}
              onClick={()=>document.querySelector("#contato")?.scrollIntoView({behavior:"smooth"})} className="group p-4 sm:p-8 bg-white/60 backdrop-blur-lg hover:bg-[#0A3C6E] active:bg-[#0A3C6E] border border-white/70 hover:border-[#0A3C6E] active:border-[#0A3C6E] text-center cursor-pointer transition-all duration-500 rounded-xl relative overflow-hidden"
              style={{boxShadow:"0 4px 24px rgba(0,0,0,0.04), 0 1px 0 rgba(255,255,255,0.8) inset"}}>
              <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-5 flex items-center justify-center rounded-xl bg-[#0A3C6E]/8 group-hover:bg-white/15 group-active:bg-white/15 border border-[#0A3C6E]/10 group-hover:border-white/20 group-active:border-white/20 transition-all duration-500">
                <Icon size={20} className="text-[#0A3C6E] group-hover:text-white group-active:text-white transition-colors duration-500"/>
              </div>
              <h3 className="text-[14px] sm:text-[16px] font-bold text-[#0A3C6E] group-hover:text-white group-active:text-white mb-1 sm:mb-2 transition-colors duration-500">{it.title}</h3>
              <p className="text-[12px] sm:text-[14px] text-[#0f1419]/55 group-hover:text-white/70 group-active:text-white/70 font-light leading-relaxed transition-colors duration-500">{it.desc}</p>
              <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#F38104] scale-x-0 group-hover:scale-x-100 group-active:scale-x-100 transition-transform duration-500 origin-left"/>
            </motion.div>
          );})}
        </div>
      </div>
    </section>
  );
}
