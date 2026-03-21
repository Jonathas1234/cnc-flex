import { useState } from "react";
import { Zap, Ruler, Settings, ArrowUpRight } from "lucide-react";
import { ProductModal } from "./ProductModal";
import { motion } from "motion/react";

export function Equipamentos() {
  const [filter, setFilter] = useState("Todos");
  const [selected, setSelected] = useState<any>(null);
  const filters = ["Todos","Joalheria","Dental","Industrial"];
  const produtos = [
    { name:"Alliance", description:"Fresadora 5 Eixos Simultâneos", image:"/alliance.jpg",
      badge:"FLAGSHIP", badgeColor:"#2563eb", category:"Joalheria", specs:["5 eixos simultâneos","Precisão 0.01mm","Software CAD/CAM incluso"],
      fullDescription:"A Alliance é nossa máquina topo de linha, desenvolvida para atender as mais exigentes demandas do mercado de joalheria. Com tecnologia de 5 eixos simultâneos, permite usinagem complexa com precisão milimétrica.",
      technicalSpecs:["Área de trabalho: 200×150×100mm","Resolução: 0.001mm","Até 30.000 RPM","Software CAD/CAM incluído","Sistema de refrigeração integrado","Garantia estendida de 2 anos"] },
    { name:"Artist 3D", description:"Prototipagem e Usinagem 3D", image:"/artist3d.jpg",
      badge:"DESTAQUE", badgeColor:"#ea580c", category:"Prototipagem", specs:["Visualização 3D em tempo real","Prototipagem rápida","Interface com monitor integrado"],
      fullDescription:"A Artist 3D revoluciona o processo de criação, permitindo visualizar suas peças em 3D antes da usinagem. Perfeita para designers que buscam agilidade e precisão na prototipagem de joias e acessórios.",
      technicalSpecs:["Renderização em tempo real","Compatível com principais softwares 3D","500+ modelos pré-programados","Simulação de usinagem","Monitor integrado","Conexão Wi-Fi e USB"] },
    { name:"Joalheiro 4 Eixos", description:"Usinagem de Precisão para Joias", image:"/joalheiro.jpg",
      badge:"PRO", badgeColor:"#2563eb", category:"Joalheria", specs:["4 eixos de precisão","Ideal para anéis e alianças","Alta produtividade"],
      fullDescription:"Especializada em usinagem de joias, esta máquina oferece 4 eixos dedicados para trabalhos complexos que exigem acesso a múltiplas faces da peça. Perfeita para gravações e detalhes minuciosos.",
      technicalSpecs:["Sistema de fixação patenteado","Usinagem interna de 8mm a 30mm","Precisão de 0.005mm","Troca automática de ferramentas","Ideal para produção em série","Baixo índice de retrabalho"] },
    { name:"CNC Dental", description:"Fresadora Odontológica 5 Eixos", image:"/dental.jpg",
      badge:"DENTAL", badgeColor:"#ea580c", category:"Dental", specs:["5 eixos simultâneos","Precisão odontológica","Design compacto"],
      fullDescription:"Desenvolvida especificamente para o mercado odontológico, a CNC Dental oferece a precisão necessária para usinagem de próteses dentais, coroas e implantes. Compacta e com design profissional.",
      technicalSpecs:["Certificada para uso odontológico","Compatível com zircônia, PMMA e cera","Sistema de aspiração integrado","Operação silenciosa (< 60dB)","Tela touchscreen integrada","Software específico para CAD dental"] },
    { name:"Shoesmaker", description:"Fresadora CNC Industrial", image:"/shoesmaker.jpg",
      badge:"INDUSTRIAL", badgeColor:"#2563eb", category:"Industrial", specs:["Alta capacidade de usinagem","Mesa ampla de trabalho","Produção contínua"],
      fullDescription:"A Shoesmaker é nossa fresadora CNC de mesa ampla, desenvolvida para usinagem de peças maiores com alta precisão. Ideal para matrizes, moldes e produção industrial.",
      technicalSpecs:["Área de trabalho ampliada","Estrutura reforçada em alumínio","Motor de alta potência","Guias lineares de precisão","Compatível com diversos materiais","Operação contínua 24/7"] },
  ];
  const list = filter === "Todos" ? produtos : produtos.filter(p=>p.category===filter);

  return (
    <section className="py-28 bg-white" id="produtos">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div className="flex items-center gap-3 mb-4" initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}}>
          <div className="w-8 h-[1px] bg-[#ea580c]" />
          <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#ea580c]">Equipamentos</span>
        </motion.div>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <motion.h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0f1419] leading-[1.08]" style={{letterSpacing:"-0.04em"}}
            initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}}>
            Máquinas de <span className="text-[#ea580c]">alta precisão</span>
          </motion.h2>
          <motion.div className="flex flex-wrap gap-2" initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}}>
            {filters.map(f=>(
              <button key={f} onClick={()=>setFilter(f)}
                className="px-5 py-2 text-[11px] font-semibold tracking-[0.12em] uppercase transition-all duration-300 rounded-sm"
                style={{ background:filter===f?"#2563eb":"transparent", color:filter===f?"#fff":"rgba(15,20,25,0.3)",
                  border:filter===f?"1px solid transparent":"1px solid rgba(15,20,25,0.06)" }}>
                {f}
              </button>
            ))}
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {list.map((p,i)=>(
            <motion.div key={p.name+filter} initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.5,delay:i*0.06}}
              className="group bg-white border border-[#0f1419]/[0.04] hover:shadow-xl overflow-hidden cursor-pointer transition-all duration-700 rounded-sm"
              onClick={()=>setSelected(p)}>
              <div className="relative aspect-[4/3] overflow-hidden bg-white p-4">
                <img src={p.image} alt={p.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent" />
                {p.badge && <div className="absolute top-3 left-3 px-3 py-1 text-[9px] font-bold tracking-[0.15em] uppercase text-white rounded-sm" style={{background:p.badgeColor}}>{p.badge}</div>}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white/90 shadow-lg">
                    <ArrowUpRight size={18} className="text-[#2563eb]" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-[#0f1419] mb-1 group-hover:text-[#2563eb] transition-colors duration-500" style={{letterSpacing:"-0.02em"}}>{p.name}</h3>
                <p className="text-[14px] text-[#0f1419]/55 mb-5 font-light">{p.description}</p>
                <div className="space-y-2 mb-6">
                  {p.specs.map((s,j)=>(<div key={j} className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full" style={{background:j%2===0?"#2563eb":"#ea580c"}}/><span className="text-[13px] text-[#0f1419]/60 font-light">{s}</span></div>))}
                </div>
                <div className="flex gap-2">
                  <button onClick={(e)=>{e.stopPropagation();setSelected(p)}}
                    className="flex-1 py-2.5 text-[10px] font-bold tracking-[0.12em] uppercase border border-[#2563eb]/20 text-[#2563eb] hover:bg-[#2563eb]/5 rounded-sm transition-all duration-300">Detalhes</button>
                  <a href={`https://wa.me/5511938023558?text=${encodeURIComponent(`Olá! Orçamento para ${p.name}`)}`}
                    target="_blank" rel="noopener noreferrer" onClick={e=>e.stopPropagation()}
                    className="flex-1 py-2.5 text-[10px] font-bold tracking-[0.12em] uppercase text-center bg-[#2563eb] text-white hover:bg-[#1d4ed8] rounded-sm transition-all duration-300">Solicitar</a>
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
