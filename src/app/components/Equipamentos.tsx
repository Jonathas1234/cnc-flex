import { useState } from "react";
import { ProductModal } from "./ProductModal";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Play, Video } from "lucide-react";

export function Equipamentos() {
  const [filter, setFilter] = useState("Todos");
  const [selected, setSelected] = useState<any>(null);
  const [hovered, setHovered] = useState<any>(null);
  const filters = ["Todos","Joalheria","Dental","Industrial"];
  const produtos = [
    {name:"Alliance",description:"Fresadora CNC para Joalheria",image:"/alliance.jpg",badge:"FLAGSHIP",badgeColor:"#0A3C6E",category:"Joalheria",ytId:"cnc1YNbOMjM",
      specs:["5 eixos — tornear, gravar e diamantar","Spindle 800W — 30.000 RPM","Precisão para ouro, prata e latão"],
      fullDescription:"Ideal para quem deseja inovar no mercado joalheiro produzindo diretamente no metal. A Alliance é uma máquina completa, capaz de tornear e gravar a parte interna, externa e lateral, além de executar múltiplas formas de diamantação e pré-cravação com alta precisão, rapidez e qualidade.",
      technicalSpecs:["Dimensões da mesa: 360 × 100mm","Área útil: X=130mm / Y=120mm / Z=100mm","Motor Spindle: 800W (refrigeração a água 1HP)","Rotação: 30.000 RPM","Velocidade de corte: 1.200 mm/min","Barramento: Guias lineares NSK","Eixos: Fusos de Esferas NSK","Peso: 125 kg","Capacidade: tornear, gravar interno/externo/lateral","Diamantação e pré-cravação","Produção direta em ouro, prata e latão","Designs inovadores e exclusivos"]},
    {name:"5D Pro Profissional",description:"Fresadora 6 Eixos para Joalheria e Bijuterias",image:"/dental.jpg",badge:"6 EIXOS",badgeColor:"#F38104",category:"Joalheria",
      specs:["6 eixos — máxima versatilidade","Spindle 1.600W — 30.000 RPM","Compatível com Rhinoceros e ArtCam"],
      fullDescription:"A 5D Pro-Profissional com o 6º eixo foi criada a partir de fundamentos e necessidades do setor joalheiro, de bijuterias e brindes. Permite que os profissionais deem formas criativas às suas ideias, desenvolvendo e confeccionando com clareza e precisão os seus produtos.",
      technicalSpecs:["Dimensões da mesa: 475 × 150mm","Área útil: X=240mm / Y=170mm / Z=210mm","Motor Spindle: 1.600W (refrigeração a água 2HP)","Rotação: 30.000 RPM","Velocidade de corte: 1.200 mm/min","Precisão: 0,002mm","Barramento: Guias lineares NSK","4º e 5º eixo + 6º eixo","Peso: 50 kg","Softwares: Rhinoceros, ArtCam, Powershape","Compatível com SolidWorks e AutoCad","Ideal para joalheria, bijuterias e brindes"]},
    {name:"Joalheiro 4º e 5º Eixo",description:"Usinagem Interna e Externa de Joias",image:"/joalheiro.jpg",badge:"PRO",badgeColor:"#0A3C6E",category:"Joalheria",ytId:"Z4X95T1QAQc",
      specs:["4º e 5º eixo — usinagem interna","Precisão de 0,002mm","Spindle 800W com refrigeração"],
      fullDescription:"A máquina fresadora foi criada para concretizar suas ideias e fornecer soluções para as diversas exigências do setor joalheiro. Com o 4º eixo, realça sua criatividade ao proporcionar um trabalho rico e preciso em termos de detalhes. O 5º eixo permite usinagem interna de anéis.",
      technicalSpecs:["Dimensões da mesa: 360 × 100mm","Área útil: X=130mm / Y=120mm / Z=100mm","Motor Spindle: 800W (refrigeração a água 1HP)","Rotação: 30.000 RPM","Velocidade de corte: 1.200 mm/min","Precisão: 0,002mm","Barramento: Guias lineares","4º eixo + 5º eixo (usinagem interna)","Peso: 45 kg","Softwares: Rhinoceros, ArtCam, Powershape","Compatível com SolidWorks e AutoCad","Sob consulta para configurações especiais"]},
    {name:"CNC Dental 5D Pró",description:"Fresadora Odontológica 5 Eixos — Fabricação Nacional",image:"/dental.jpg",badge:"DENTAL",badgeColor:"#F38104",category:"Dental",
      specs:["5 eixos — troca automática de ferramentas","Spindle 1.800W — 60.000 RPM","Zircônia, PMMA, titânio, CoCr e ceras"],
      fullDescription:"Máquina fresadora CNC de fabricação nacional, com estrutura em aço utilizando guias lineares e fusos de esferas NSK (Japão). Trabalha com softwares abertos (CAD-Mill Box) possibilitando inserir, mudar e melhorar estratégias de usinagem conforme a necessidade. Conte com suporte, assistência técnica, treinamento e peças de reposição no Brasil.",
      technicalSpecs:["Aplicação: Usinagem de próteses dentárias","Usinagem: A seco e irrigada","Número de eixos: 5 eixos","Motor Spindle: 1.800W — troca automática","Rotação: 60.000 RPM","Guias lineares e fusos de esferas: NSK (Japão)","Número de ferramentas: 10","Suporte para disco de 98mm","Blocos de cerâmicas: 8 cavidades","Materiais: Zircônia, PMMA, compósitos, cerâmicas, titânio, CoCr e ceras","Fresas homologadas OSG nacional","Software CAM: CIM System - Mill Box","Software CAD: Exocad","Máquina: 750×670×780mm / Gabinete: 750×670×1000mm","Peso: 150 kg"]},
    {name:"Artist 3D",description:"Corte e Prototipagem de Alta Precisão",image:"/artist3d.jpg",badge:"VERSÁTIL",badgeColor:"#0A3C6E",category:"Joalheria",ytId:"mHZptTFlGrk",
      specs:["Mesa ampla 435×300mm","Precisão de 0,002mm","Corte em ouro, prata, madeira e resinas"],
      fullDescription:"A Artist 3D é indicada para corte com alta precisão de pingentes, brincos, nomes, mandalas em chapas de ouro e prata, bem como a criação de protótipos de alta precisão. Proporciona rapidez e qualidade para usinagem em materiais como madeira, plástico e resinas.",
      technicalSpecs:["Dimensões da mesa: 435 × 300mm","Área útil: X=320mm / Y=250mm / Z=160mm","Motor Spindle: 800W (refrigeração a água 1HP)","Rotação: 30.000 RPM","Velocidade de corte: 1.200 mm/min","Precisão: 0,002mm","Barramento: Guias lineares NSK","4º eixo (opcional)","Pulverização (opcional)","Peso: 35 kg","Softwares: Rhinoceros, ArtCam, Powershape","Compatível com SolidWorks e AutoCad","Ideal para pingentes, brincos, nomes e mandalas","Materiais: ouro, prata, madeira, plástico e resinas"]},
    {name:"Shoesmaker",description:"Fresadora CNC Multiaplicação",image:"/shoesmaker.jpg",badge:"INDUSTRIAL",badgeColor:"#0A3C6E",category:"Industrial",
      specs:["Mesa ampla 530×400mm","Fusos de esferas NSK","Corte de chapas, couros e protótipos"],
      fullDescription:"Solução indicada para as mais variadas aplicações: corte de chapas de metais como ouro e prata, nos setores calçadistas, de bolsas e acessórios na confecção de maquetes de solados, corte de couros, protótipos de fivelas e afins. Perfeita para trabalhos que exigem minuciosa precisão e alta reprodutibilidade.",
      technicalSpecs:["Dimensões da mesa: 530 × 400mm","Área útil: X=400mm / Y=350mm / Z=145mm","Motor Spindle: 800W (refrigeração a água 1HP)","Rotação: 30.000 RPM","Velocidade de corte: 1.500 mm/min","Barramento: Guias lineares NSK","Eixos: Fusos de Esferas NSK","4º eixo (opcional)","Peso: 42 kg","Softwares: Rhinoceros e ArtCam","Aplicações: calçados, bolsas, acessórios, joias","Corte de chapas de ouro, prata e couros","Maquetes de solados e protótipos de fivelas","Alta reprodutibilidade de detalhes"]},
  ];

  const list = filter==="Todos"?produtos:produtos.filter(p=>p.category===filter);
  const preview = hovered ?? list[0];

  return (
    <section className="py-28 bg-[#f7f8fa] overflow-hidden" id="produtos">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        {/* Label */}
        <motion.div className="flex items-center gap-3 mb-4" initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}}>
          <div className="w-8 h-[1px] bg-[#0A3C6E]"/>
          <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#0A3C6E]">Equipamentos</span>
        </motion.div>

        {/* Header row */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0A3C6E] leading-[1.08]"
            style={{letterSpacing:"-0.04em"}}
            initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}}>
            Máquinas de <span className="text-[#F38104]">alta precisão</span>
          </motion.h2>

          <motion.div className="flex flex-wrap items-center gap-3" initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}}>
            {/* Filter buttons */}
            <div className="flex flex-wrap gap-2 p-1.5 rounded-xl bg-white/50 backdrop-blur-sm border border-white/60">
              {filters.map(f=>(
                <button key={f} onClick={()=>setFilter(f)}
                  className="px-4 sm:px-5 py-2 text-[10px] sm:text-[11px] font-semibold tracking-[0.12em] uppercase transition-all duration-300 rounded-lg"
                  style={{background:filter===f?"#0A3C6E":"transparent",color:filter===f?"#fff":"rgba(10,60,110,0.65)",boxShadow:filter===f?"0 4px 12px rgba(10,60,110,0.2)":"none"}}>
                  {f}
                </button>
              ))}
            </div>
            {/* Ver Vídeos button */}
            <a href="#videos"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#F38104] text-white text-[10px] sm:text-[11px] font-bold tracking-[0.12em] uppercase shadow-[0_4px_14px_rgba(243,129,4,0.3)] hover:brightness-110 active:brightness-90 transition-all">
              <Video size={13}/> Ver Vídeos
            </a>
          </motion.div>
        </div>

        {/* Main content: filelist + preview */}
        <div className="grid lg:grid-cols-[1fr_360px] gap-10 items-start">

          {/* Product filelist */}
          <div className="divide-y divide-[#0A3C6E]/10">
            {list.map((p, i) => (
              <motion.div
                key={p.name + filter}
                initial={{opacity:0,x:-16}} whileInView={{opacity:1,x:0}} viewport={{once:true}}
                transition={{duration:0.4, delay:i*0.05}}
                className="group flex items-center justify-between py-5 cursor-pointer"
                onMouseEnter={()=>setHovered(p)}
                onMouseLeave={()=>setHovered(null)}
                onClick={()=>setSelected(p)}>
                <div className="flex items-center gap-5">
                  <span className="text-[11px] font-mono font-medium text-[#0A3C6E]/40 w-6 shrink-0 group-hover:text-[#F38104]/60 transition-colors duration-300">
                    {String(i+1).padStart(2,"0")}
                  </span>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-xl sm:text-2xl font-bold text-[#0A3C6E] group-hover:text-[#F38104] transition-colors duration-300 translate-x-0 group-hover:translate-x-2 inline-block transition-transform">
                      {p.name}
                    </span>
                    <span className="text-[12px] text-[#0f1419]/55 group-hover:text-[#0f1419]/75 transition-colors duration-300">
                      {p.description}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-3 shrink-0 ml-4">
                  {(p as any).ytId && (
                    <span className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 text-[9px] font-bold tracking-[0.1em] uppercase text-[#F38104] border border-[#F38104]/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Play size={7} className="fill-[#F38104]"/>Vídeo
                    </span>
                  )}
                  <ArrowRight
                    size={18}
                    className="text-[#0A3C6E]/30 group-hover:text-[#F38104] group-hover:translate-x-1 transition-all duration-300"/>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Preview panel — desktop only */}
          <div className="hidden lg:block sticky top-24">
            <AnimatePresence mode="wait">
              <motion.div
                key={preview?.name}
                initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-8}}
                transition={{duration:0.25}}
                className="bg-white/65 backdrop-blur-xl border border-white/70 rounded-2xl overflow-hidden shadow-[0_8px_40px_rgba(10,60,110,0.1)]">

                {/* Image */}
                <div className="relative bg-white/40 p-6 aspect-[4/3] flex items-center justify-center">
                  <img
                    src={preview?.image}
                    alt={preview?.name}
                    className="w-full h-full object-contain"
                    loading="lazy"/>
                  {preview?.badge && (
                    <div className="absolute top-3 left-3 px-3 py-1 text-[9px] font-bold tracking-[0.15em] uppercase text-white rounded-lg"
                      style={{background:`${preview.badgeColor}dd`}}>
                      {preview.badge}
                    </div>
                  )}
                </div>

                {/* Video thumbnail (if available) */}
                {(preview as any)?.ytId && (
                  <a href="#videos"
                    className="block relative overflow-hidden cursor-pointer group/vid border-t border-white/60">
                    <img
                      src={`https://img.youtube.com/vi/${(preview as any).ytId}/mqdefault.jpg`}
                      alt="Vídeo"
                      className="w-full h-[110px] object-cover group-hover/vid:scale-105 transition-transform duration-500"/>
                    <div className="absolute inset-0 bg-[#0A3C6E]/50 flex items-center justify-center gap-2 group-hover/vid:bg-[#0A3C6E]/40 transition-colors">
                      <div className="w-10 h-10 rounded-full bg-[#F38104] flex items-center justify-center shadow-xl group-hover/vid:scale-110 transition-transform">
                        <Play size={14} className="text-white ml-0.5 fill-white"/>
                      </div>
                      <span className="text-white text-[11px] font-bold tracking-wider uppercase">Assistir vídeo</span>
                    </div>
                  </a>
                )}

                {/* Info */}
                <div className="p-5">
                  <h3 className="text-lg font-bold text-[#0A3C6E] mb-1">{preview?.name}</h3>
                  <p className="text-[13px] text-[#0f1419]/70 mb-4">{preview?.description}</p>
                  <div className="flex gap-2">
                    <button
                      onClick={()=>setSelected(preview)}
                      className="flex-1 py-2.5 text-[10px] font-bold tracking-[0.12em] uppercase bg-[#0A3C6E] text-white rounded-lg hover:brightness-110 active:brightness-90 transition-all shadow-[0_4px_12px_rgba(10,60,110,0.2)]">
                      Ver Detalhes
                    </button>
                    <a href={`https://wa.me/5511938023558?text=${encodeURIComponent(`Olá! Gostaria de um orçamento para a máquina ${preview?.name}`)}`}
                      target="_blank" rel="noopener noreferrer"
                      className="flex-1 py-2.5 text-[10px] font-bold tracking-[0.12em] uppercase text-center bg-[#F38104] text-white rounded-lg hover:brightness-110 active:brightness-90 transition-all shadow-[0_4px_12px_rgba(243,129,4,0.2)]">
                      Solicitar
                    </a>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      <ProductModal isOpen={!!selected} onClose={()=>setSelected(null)} product={selected||produtos[0]}/>
    </section>
  );
}
