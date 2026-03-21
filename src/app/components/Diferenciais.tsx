import { Settings, CreditCard, GraduationCap, Zap, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

export function Diferenciais() {
  const items = [
    { icon:Settings, title:"Usinagem CNC", desc:"Equipamentos 100% nacionais para confecção de alianças e jóias com precisão milimétrica.", c:"#2563eb" },
    { icon:CreditCard, title:"Financiamento BNDES", desc:"Condições especiais pelo Cartão BNDES. Invista com segurança e facilidade.", c:"#ea580c" },
    { icon:GraduationCap, title:"Treinamento Completo", desc:"Assistência técnica especializada, peças de reposição e suporte pós-venda dedicado.", c:"#2563eb" },
    { icon:Zap, title:"Alta Tecnologia", desc:"Fresagem de alta precisão para joias, bijuterias e acessórios com padrão internacional.", c:"#ea580c" },
  ];

  return (
    <section className="relative py-28 bg-[#f7f8fa]" id="diferenciais">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div className="flex items-center gap-3 mb-4" initial={{opacity:0,x:-20}} whileInView={{opacity:1,x:0}} viewport={{once:true}}>
          <div className="w-8 h-[1px] bg-[#2563eb]" />
          <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#2563eb]">Diferenciais</span>
        </motion.div>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <motion.h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0f1419] leading-[1.08]" style={{letterSpacing:"-0.04em"}}
            initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}}>
            Por que líderes escolhem<br/><span className="text-[#2563eb]">a CNC Flex</span>
          </motion.h2>
          <motion.p className="text-[15px] text-[#0f1419]/55 max-w-sm font-light leading-relaxed"
            initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} transition={{delay:0.2}}>
            Mais de duas décadas entregando tecnologia de ponta com suporte que faz a diferença.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((it,i)=>(
            <motion.div key={i} className="group relative p-8 bg-white border border-[#0f1419]/[0.04] hover:shadow-lg transition-all duration-700 overflow-hidden"
              initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.08}}>
              <div className="absolute top-0 left-0 right-0 h-[3px] scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" style={{background:it.c}} />
              <div className="w-10 h-10 flex items-center justify-center mb-6 rounded-lg" style={{background:`${it.c}08`,border:`1px solid ${it.c}15`}}>
                <it.icon size={18} style={{color:it.c}} />
              </div>
              <h3 className="text-[18px] font-bold text-[#0f1419] mb-3 group-hover:text-[#2563eb] transition-colors duration-500">{it.title}</h3>
              <p className="text-[15px] text-[#0f1419]/60 leading-relaxed font-light mb-6">{it.desc}</p>
              <a href="#" className="inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-[0.12em] uppercase transition-all duration-500 group-hover:gap-2.5" style={{color:it.c}}>
                Saiba mais <ArrowRight size={12} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
