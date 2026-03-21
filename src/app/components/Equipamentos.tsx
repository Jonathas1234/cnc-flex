import { useState } from "react";
import { Zap, Ruler, Settings, ArrowUpRight } from "lucide-react";
import { ProductModal } from "./ProductModal";
import { motion } from "motion/react";

export function Equipamentos() {
  const [filter, setFilter] = useState("Todos");
  const [selected, setSelected] = useState<any>(null);
  const filters = ["Todos","Joalheria","Dental","Industrial"];
  const produtos = [
    {name:"Alliance",description:"Fresadora 5 Eixos Simultâneos",image:"/alliance.jpg",badge:"FLAGSHIP",badgeColor:"#0A3C6E",category:"Joalheria",specs:["5 eixos simultâneos","Precisão 0.01mm","Software CAD/CAM incluso"],fullDescription:"A Alliance é nossa máquina topo de linha para joalheria. 5 eixos simultâneos com precisão milimétrica.",technicalSpecs:["Área: 200×150×100mm","Resolução: 0.001mm","Até 30.000 RPM","CAD/CAM incluído","Refrigeração integrada","Garantia 2 anos"]},
    {name:"Artist 3D",description:"Prototipagem e Usinagem 3D",image:"/artist3d.jpg",badge:"DESTAQUE",badgeColor:"#F38104",category:"Joalheria",specs:["Visualização 3D em tempo real","Prototipagem rápida","Monitor integrado"],fullDescription:"Revoluciona o processo de criação com visualização 3D antes da usinagem.",technicalSpecs:["Renderização real-time","500+ modelos","Simulação de usinagem","Monitor integrado","Wi-Fi e USB","STL/OBJ"]},
    {name:"Joalheiro 4 Eixos",description:"Usinagem de Precisão para Joias",image:"/joalheiro.jpg",badge:"PRO",badgeColor:"#0A3C6E",category:"Joalheria",specs:["4 eixos de precisão","Ideal para anéis","Alta produtividade"],fullDescription:"Especializada em usinagem de joias com 4 eixos dedicados.",technicalSpecs:["Fixação patenteada","8-30mm diâmetro","Precisão 0.005mm","Troca automática","Produção em série","Baixo retrabalho"]},
    {name:"CNC Dental",description:"Fresadora Odontológica 5 Eixos",image:"/dental.jpg",badge:"DENTAL",badgeColor:"#F38104",category:"Dental",specs:["5 eixos simultâneos","Precisão odontológica","Design compacto"],fullDescription:"Para o mercado odontológico com precisão para próteses e implantes.",technicalSpecs:["Certificada odontológica","Zircônia/PMMA/cera","Aspiração integrada","< 60dB","Touchscreen","CAD dental"]},
    {name:"Shoesmaker",description:"Fresadora CNC Industrial",image:"/shoesmaker.jpg",badge:"INDUSTRIAL",badgeColor:"#0A3C6E",category:"Industrial",specs:["Alta capacidade","Mesa ampla","Produção contínua"],fullDescription:"Fresadora de mesa ampla para usinagem de peças maiores.",technicalSpecs:["Área ampliada","Alumínio reforçado","Alta potência","Guias lineares","Multi-material","24/7"]},
  ];
  const list = filter==="Todos"?produtos:produtos.filter(p=>p.category===filter);

  return (
    <section className="py-28 bg-[#f7f8fa]" id="produtos">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div className="flex items-center gap-3 mb-4" initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}}>
          <div className="w-8 h-[1px] bg-[#0A3C6E]" /><span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#0A3C6E]">Equipamentos</span>
        </motion.div>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <motion.h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0A3C6E] leading-[1.08]" style={{letterSpacing:"-0.04em"}}
            initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}}>
            Máquinas de <span className="text-[#F38104]">alta precisão</span>
          </motion.h2>
          <motion.div className="flex flex-wrap gap-2" initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}}>
            {filters.map(f=>(<button key={f} onClick={()=>setFilter(f)}
              className="px-5 py-2 text-[11px] font-semibold tracking-[0.12em] uppercase transition-all duration-300 rounded-sm"
              style={{background:filter===f?"#0A3C6E":"transparent",color:filter===f?"#fff":"rgba(10,60,110,0.4)",border:filter===f?"1px solid transparent":"1px solid rgba(10,60,110,0.1)"}}>{f}</button>))}
          </motion.div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {list.map((p,i)=>(
            <motion.div key={p.name+filter} initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.5,delay:i*0.06}}
              className="group bg-white border border-[#0f1419]/[0.04] hover:shadow-xl overflow-hidden cursor-pointer transition-all duration-700 rounded-sm" onClick={()=>setSelected(p)}>
              <div className="relative aspect-[4/3] overflow-hidden bg-white p-4">
                <img src={p.image} alt={p.name} className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105" />
                {p.badge && <div className="absolute top-3 left-3 px-3 py-1 text-[9px] font-bold tracking-[0.15em] uppercase text-white rounded-sm" style={{background:p.badgeColor}}>{p.badge}</div>}
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-[#0A3C6E] mb-1 group-hover:text-[#F38104] transition-colors duration-500">{p.name}</h3>
                <p className="text-[14px] text-[#0f1419]/50 mb-5 font-light">{p.description}</p>
                <div className="space-y-2 mb-6">
                  {p.specs.map((s,j)=>(<div key={j} className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full" style={{background:j%2===0?"#0A3C6E":"#F38104"}}/><span className="text-[13px] text-[#0f1419]/60 font-light">{s}</span></div>))}
                </div>
                <div className="flex gap-2">
                  <button onClick={(e)=>{e.stopPropagation();setSelected(p)}} className="flex-1 py-2.5 text-[10px] font-bold tracking-[0.12em] uppercase border border-[#0A3C6E]/20 text-[#0A3C6E] hover:bg-[#0A3C6E]/5 rounded-sm transition-all">Detalhes</button>
                  <a href={`https://wa.me/5511938023558?text=${encodeURIComponent(`Olá! Orçamento para ${p.name}`)}`} target="_blank" rel="noopener noreferrer" onClick={e=>e.stopPropagation()}
                    className="flex-1 py-2.5 text-[10px] font-bold tracking-[0.12em] uppercase text-center bg-[#F38104] text-white hover:brightness-110 rounded-sm transition-all">Solicitar</a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <ProductModal isOpen={!!selected} onClose={()=>setSelected(null)} product={selected||produtos[0]} />
    </section>
  );
}
