import { useState } from "react";
import { ProductModal } from "./ProductModal";
import { motion } from "motion/react";

export function Equipamentos() {
  const [filter, setFilter] = useState("Todos");
  const [selected, setSelected] = useState<any>(null);
  const filters = ["Todos", "Joalheria", "Dental", "Industrial"];
  const produtos = [
    { name: "Alliance", description: "Fresadora CNC para Joalheria", image: "/alliance.jpg", badge: "FLAGSHIP", badgeColor: "#0A3C6E", category: "Joalheria",
      specs: ["5 eixos — tornear, gravar e diamantar", "Spindle 800W — 30.000 RPM", "Precisão para ouro, prata e latão"],
      fullDescription: "Ideal para quem deseja inovar no mercado joalheiro produzindo diretamente no metal. A Alliance é uma máquina completa, capaz de tornear e gravar a parte interna, externa e lateral, além de executar múltiplas formas de diamantação e pré-cravação com alta precisão, rapidez e qualidade.",
      technicalSpecs: ["Dimensões da mesa: 360 × 100mm", "Área útil: X=130mm / Y=120mm / Z=100mm", "Motor Spindle: 800W (refrigeração a água 1HP)", "Rotação: 30.000 RPM", "Velocidade de corte: 1.200 mm/min", "Barramento: Guias lineares NSK", "Eixos: Fusos de Esferas NSK", "Peso: 125 kg", "Capacidade: tornear, gravar interno/externo/lateral", "Diamantação e pré-cravação", "Produção direta em ouro, prata e latão", "Designs inovadores e exclusivos"] },
    { name: "5D Pro Profissional", description: "Fresadora 6 Eixos para Joalheria e Bijuterias", image: "/dental.jpg", badge: "6 EIXOS", badgeColor: "#F38104", category: "Joalheria",
      specs: ["6 eixos — máxima versatilidade", "Spindle 1.600W — 30.000 RPM", "Compatível com Rhinoceros e ArtCam"],
      fullDescription: "A 5D Pro-Profissional com o 6º eixo foi criada a partir de fundamentos e necessidades do setor joalheiro, de bijuterias e brindes. Permite que os profissionais deem formas criativas às suas ideias, desenvolvendo e confeccionando com clareza e precisão os seus produtos.",
      technicalSpecs: ["Dimensões da mesa: 475 × 150mm", "Área útil: X=240mm / Y=170mm / Z=210mm", "Motor Spindle: 1.600W (refrigeração a água 2HP)", "Rotação: 30.000 RPM", "Velocidade de corte: 1.200 mm/min", "Precisão: 0,002mm", "Barramento: Guias lineares NSK", "4º e 5º eixo + 6º eixo", "Peso: 50 kg", "Softwares: Rhinoceros, ArtCam, Powershape", "Compatível com SolidWorks e AutoCad", "Ideal para joalheria, bijuterias e brindes"] },
    { name: "Joalheiro 4º e 5º Eixo", description: "Usinagem Interna e Externa de Joias", image: "/joalheiro.jpg", badge: "PRO", badgeColor: "#0A3C6E", category: "Joalheria",
      specs: ["4º e 5º eixo — usinagem interna", "Precisão de 0,002mm", "Spindle 800W com refrigeração"],
      fullDescription: "A máquina fresadora foi criada para concretizar suas ideias e fornecer soluções para as diversas exigências do setor joalheiro. Com o 4º eixo, realça sua criatividade ao proporcionar um trabalho rico e preciso em termos de detalhes. O 5º eixo permite usinagem interna de anéis.",
      technicalSpecs: ["Dimensões da mesa: 360 × 100mm", "Área útil: X=130mm / Y=120mm / Z=100mm", "Motor Spindle: 800W (refrigeração a água 1HP)", "Rotação: 30.000 RPM", "Velocidade de corte: 1.200 mm/min", "Precisão: 0,002mm", "Barramento: Guias lineares", "4º eixo + 5º eixo (usinagem interna)", "Peso: 45 kg", "Softwares: Rhinoceros, ArtCam, Powershape", "Compatível com SolidWorks e AutoCad", "Sob consulta para configurações especiais"] },
    { name: "CNC Dental 5D Pró", description: "Fresadora Odontológica 5 Eixos — Fabricação Nacional", image: "/dental.jpg", badge: "DENTAL", badgeColor: "#F38104", category: "Dental",
      specs: ["5 eixos — troca automática de ferramentas", "Spindle 1.800W — 60.000 RPM", "Zircônia, PMMA, titânio, CoCr e ceras"],
      fullDescription: "Máquina fresadora CNC de fabricação nacional, com estrutura em aço utilizando guias lineares e fusos de esferas NSK (Japão). Trabalha com softwares abertos (CAD-Mill Box) possibilitando inserir, mudar e melhorar estratégias de usinagem conforme a necessidade.",
      technicalSpecs: ["Aplicação: Usinagem de próteses dentárias", "Usinagem: A seco e irrigada", "Número de eixos: 5 eixos", "Motor Spindle: 1.800W — troca automática", "Rotação: 60.000 RPM", "Guias lineares e fusos de esferas: NSK (Japão)", "Número de ferramentas: 10", "Suporte para disco de 98mm", "Blocos de cerâmicas: 8 cavidades", "Materiais: Zircônia, PMMA, compósitos, cerâmicas, titânio, CoCr e ceras", "Fresas homologadas OSG nacional", "Software CAM: CIM System - Mill Box", "Software CAD: Exocad", "Máquina: 750×670×780mm / Gabinete: 750×670×1000mm", "Peso: 150 kg"] },
    { name: "Artist 3D", description: "Corte e Prototipagem de Alta Precisão", image: "/artist3d.jpg", badge: "VERSÁTIL", badgeColor: "#0A3C6E", category: "Joalheria",
      specs: ["Mesa ampla 435×300mm", "Precisão de 0,002mm", "Corte em ouro, prata, madeira e resinas"],
      fullDescription: "A Artist 3D é indicada para corte com alta precisão de pingentes, brincos, nomes, mandalas em chapas de ouro e prata, bem como a criação de protótipos de alta precisão.",
      technicalSpecs: ["Dimensões da mesa: 435 × 300mm", "Área útil: X=320mm / Y=250mm / Z=160mm", "Motor Spindle: 800W (refrigeração a água 1HP)", "Rotação: 30.000 RPM", "Velocidade de corte: 1.200 mm/min", "Precisão: 0,002mm", "Barramento: Guias lineares NSK", "4º eixo (opcional)", "Pulverização (opcional)", "Peso: 35 kg", "Softwares: Rhinoceros, ArtCam, Powershape", "Compatível com SolidWorks e AutoCad", "Ideal para pingentes, brincos, nomes e mandalas", "Materiais: ouro, prata, madeira, plástico e resinas"] },
    { name: "Shoesmaker", description: "Fresadora CNC Multiaplicação", image: "/shoesmaker.jpg", badge: "INDUSTRIAL", badgeColor: "#0A3C6E", category: "Industrial",
      specs: ["Mesa ampla 530×400mm", "Fusos de esferas NSK", "Corte de chapas, couros e protótipos"],
      fullDescription: "Solução indicada para as mais variadas aplicações: corte de chapas de metais como ouro e prata, nos setores calçadistas, de bolsas e acessórios na confecção de maquetes de solados, corte de couros, protótipos de fivelas e afins.",
      technicalSpecs: ["Dimensões da mesa: 530 × 400mm", "Área útil: X=400mm / Y=350mm / Z=145mm", "Motor Spindle: 800W (refrigeração a água 1HP)", "Rotação: 30.000 RPM", "Velocidade de corte: 1.500 mm/min", "Barramento: Guias lineares NSK", "Eixos: Fusos de Esferas NSK", "4º eixo (opcional)", "Peso: 42 kg", "Softwares: Rhinoceros e ArtCam", "Aplicações: calçados, bolsas, acessórios, joias", "Corte de chapas de ouro, prata e couros", "Maquetes de solados e protótipos de fivelas", "Alta reprodutibilidade de detalhes"] },
  ];
  const list = filter === "Todos" ? produtos : produtos.filter((p) => p.category === filter);
  return (
    <section className="py-16 sm:py-28 bg-[#f7f8fa] overflow-hidden" id="produtos">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <motion.div className="flex items-center gap-3 mb-4" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
          <div className="w-8 h-[1px] bg-[#0A3C6E]" />
          <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#0A3C6E]">Equipamentos</span>
        </motion.div>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 sm:gap-6 mb-10 sm:mb-14">
          <motion.h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0A3C6E] leading-[1.08]" style={{ letterSpacing: "-0.04em" }} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
            Máquinas de <span className="text-[#F38104]">alta precisão</span>
          </motion.h2>
          <motion.div className="flex flex-wrap gap-1.5 sm:gap-2 p-1.5 rounded-xl bg-white/50 backdrop-blur-sm border border-white/60" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
            {filters.map((f) => (
              <button key={f} onClick={() => setFilter(f)}
                className="px-3 sm:px-5 py-2 text-[10px] sm:text-[11px] font-semibold tracking-[0.1em] sm:tracking-[0.12em] uppercase transition-all duration-300 rounded-lg"
                style={{ background: filter === f ? "#0A3C6E" : "transparent", color: filter === f ? "#fff" : "rgba(10,60,110,0.4)", boxShadow: filter === f ? "0 4px 12px rgba(10,60,110,0.2)" : "none" }}>
                {f}
              </button>
            ))}
          </motion.div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {list.map((p, i) => (
            <motion.div key={p.name + filter} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group bg-white/60 backdrop-blur-lg border border-white/70 active:bg-white/90 hover:bg-white/80 hover:shadow-[0_12px_40px_rgba(10,60,110,0.1)] overflow-hidden cursor-pointer transition-all duration-500 rounded-xl"
              style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.04), 0 1px 0 rgba(255,255,255,0.8) inset" }}
              onClick={() => setSelected(p)}>
              <div className="relative aspect-[4/3] overflow-hidden bg-white/40 p-3 sm:p-4">
                <img src={p.image} alt={p.name} className="w-full h-full object-contain" loading="lazy" />
                {p.badge && <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 px-2.5 sm:px-3 py-1 text-[8px] sm:text-[9px] font-bold tracking-[0.15em] uppercase text-white rounded-lg backdrop-blur-sm shadow-lg" style={{ background: `${p.badgeColor}dd` }}>{p.badge}</div>}
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-base sm:text-lg font-bold text-[#0A3C6E] mb-1 group-hover:text-[#F38104] transition-colors duration-500">{p.name}</h3>
                <p className="text-[12px] sm:text-[13px] text-[#0f1419]/50 mb-4 sm:mb-5">{p.description}</p>
                <div className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6">
                  {p.specs.map((s, j) => (
                    <div key={j} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: j % 2 === 0 ? "#0A3C6E" : "#F38104" }} />
                      <span className="text-[12px] sm:text-[13px] text-[#0f1419]/60">{s}</span>
                    </div>
                  ))}
                </div>
                <div className="flex gap-2">
                  <button onClick={(e) => { e.stopPropagation(); setSelected(p); }} className="flex-1 py-2.5 text-[10px] font-bold tracking-[0.12em] uppercase border border-[#0A3C6E]/15 text-[#0A3C6E] active:bg-[#0A3C6E]/10 hover:bg-[#0A3C6E]/5 rounded-lg transition-all">Detalhes</button>
                  <a href={`https://wa.me/5511938023558?text=${encodeURIComponent(`Olá! Gostaria de um orçamento para a máquina ${p.name}`)}`} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}
                    className="flex-1 py-2.5 text-[10px] font-bold tracking-[0.12em] uppercase text-center bg-[#F38104] text-white active:brightness-90 hover:brightness-110 rounded-lg transition-all shadow-[0_4px_12px_rgba(243,129,4,0.25)]">Solicitar</a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <ProductModal isOpen={!!selected} onClose={() => setSelected(null)} product={selected || produtos[0]} />
    </section>
  );
}
