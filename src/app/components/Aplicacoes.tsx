import { motion } from "motion/react";
import { Gem, Sparkles, Heart, Briefcase, Award, Gift, Tag, Cog } from "lucide-react";

export function Aplicacoes() {
  const items = [
    {icon:Heart,title:"Joalheria",desc:"Anéis e alianças com precisão milimétrica",c:"#2563eb"},
    {icon:Gem,title:"Bijuterias",desc:"Peças delicadas com acabamento premium",c:"#ea580c"},
    {icon:Sparkles,title:"Dental",desc:"Zircônia e PMMA com exatidão",c:"#2563eb"},
    {icon:Briefcase,title:"Acessórios",desc:"Componentes metálicos para luxo",c:"#ea580c"},
    {icon:Award,title:"Troféus",desc:"Reconhecimentos exclusivos",c:"#2563eb"},
    {icon:Gift,title:"Brindes",desc:"Personalização com sua marca",c:"#ea580c"},
    {icon:Tag,title:"Etiquetas",desc:"Logotipos gravados com precisão",c:"#2563eb"},
    {icon:Cog,title:"Industrial",desc:"Componentes de alta performance",c:"#ea580c"},
  ];
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-16">
          <motion.div className="flex items-center justify-center gap-3 mb-4" initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}}>
            <div className="w-8 h-[1px] bg-[#ea580c]"/><span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#ea580c]">Segmentos</span><div className="w-8 h-[1px] bg-[#ea580c]"/>
          </motion.div>
          <motion.h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0f1419] leading-[1.08]" style={{letterSpacing:"-0.04em"}}
            initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}}>
            Múltiplas <span className="text-[#2563eb]">indústrias</span>
          </motion.h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {items.map((it,i)=>{const Icon=it.icon;return(
            <motion.div key={i} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.04}}
              className="group p-6 bg-[#f7f8fa] hover:bg-white hover:shadow-lg border border-transparent hover:border-[#0f1419]/[0.04] text-center cursor-pointer transition-all duration-500 rounded-sm relative overflow-hidden">
              <div className="w-9 h-9 mx-auto mb-4 flex items-center justify-center rounded-lg" style={{background:`${it.c}08`,border:`1px solid ${it.c}12`}}>
                <Icon size={16} style={{color:it.c}}/>
              </div>
              <h3 className="text-[14px] font-bold text-[#0f1419]/80 mb-1.5 group-hover:text-[#2563eb] transition-colors">{it.title}</h3>
              <p className="text-[12px] text-[#0f1419]/50 font-light leading-relaxed">{it.desc}</p>
              <div className="absolute bottom-0 left-0 right-0 h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" style={{background:it.c}}/>
            </motion.div>
          );})}
        </div>
      </div>
    </section>
  );
}
