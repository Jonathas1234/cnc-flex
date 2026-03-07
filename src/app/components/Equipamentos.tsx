import { useState } from "react";
import { Zap, Ruler, Settings } from "lucide-react";
import { ProductModal } from "./ProductModal";
import { motion } from "motion/react";

export function Equipamentos() {
  const [activeFilter, setActiveFilter] = useState("Todos");
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  const filters = ["Todos", "Joalheria", "Dental", "Industrial", "Prototipagem"];

  const produtos = [
    {
      name: "ALLIANCE",
      description: "Máquina 5 Eixos Profissional",
      image: "https://images.unsplash.com/photo-1742971366169-6efb57949d56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDTkMlMjBtYWNoaW5lJTIwcHJlY2lzaW9uJTIwbWFudWZhY3R1cmluZ3xlbnwxfHx8fDE3NzI3MjcyOTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      badge: "DESTAQUE",
      badgeColor: "#FF6B35",
      category: "Joalheria",
      specs: ["5 eixos simultâneos", "Precisão 0.01mm", "Software incluso"],
      fullDescription: "A Alliance é nossa máquina topo de linha, desenvolvida para atender as mais exigentes demandas do mercado de joalheria. Com tecnologia de 5 eixos simultâneos, permite usinagem complexa com precisão milimétrica, ideal para produção de alianças, anéis e peças detalhadas.",
      technicalSpecs: [
        "Área de trabalho: 200mm x 150mm x 100mm",
        "Resolução: 0.001mm",
        "Velocidade de usinagem: até 30.000 RPM",
        "Software CAD/CAM incluído com biblioteca de designs",
        "Sistema de refrigeração integrado",
        "Garantia estendida de 2 anos"
      ]
    },
    {
      name: "ARTIST 3D",
      description: "Prototipagem 3D",
      image: "https://images.unsplash.com/photo-1768796372343-99ed316eb5ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBpbmR1c3RyaWFsJTIwbWFjaGluZXJ5JTIwZmFjdG9yeXxlbnwxfHx8fDE3NzI3MzA1NjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      badge: "NOVO",
      badgeColor: "#27AE60",
      category: "Prototipagem",
      specs: ["Visualização 3D", "Prototipagem rápida", "Interface intuitiva"],
      fullDescription: "A Artist 3D revoluciona o processo de criação, permitindo visualizar suas peças em 3D antes da usinagem. Perfeita para designers que buscam agilidade e precisão na prototipagem de joias e acessórios.",
      technicalSpecs: [
        "Renderização em tempo real",
        "Compatível com principais softwares de modelagem 3D",
        "Biblioteca com mais de 500 modelos pré-programados",
        "Simulação de usinagem antes da produção",
        "Interface touchscreen 10 polegadas",
        "Conexão Wi-Fi e USB"
      ]
    },
    {
      name: "JOALHEIRO 4º e 5º EIXO",
      description: "Usinagem interna de anéis",
      image: "https://images.unsplash.com/photo-1759621165667-da064b86fdd0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVjaXNpb24lMjBlbmdpbmVlcmluZyUyMG1ldGFsd29ya3xlbnwxfHx8fDE3NzI3MjczMDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      badge: "DESTAQUE",
      badgeColor: "#FF6B35",
      category: "Joalheria",
      specs: ["4º e 5º eixo", "Ideal para anéis", "Alta produtividade"],
      fullDescription: "Especializada em usinagem interna de anéis, esta máquina oferece o 5º eixo dedicado para trabalhos complexos que exigem acesso a todas as faces da peça. Perfeita para gravações internas e detalhes minuciosos.",
      technicalSpecs: [
        "Sistema de fixação patenteado para anéis",
        "Usinagem interna de 8mm a 30mm de diâmetro",
        "Precisão de 0.005mm",
        "Troca automática de ferramentas (12 posições)",
        "Ideal para produção em série",
        "Baixo índice de retrabalho"
      ]
    },
    {
      name: "MODELO 5D PRÓ",
      description: "Fresadora CNC dental",
      image: "https://images.unsplash.com/photo-1766524555120-9c2e886c72f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqZXdlbHJ5JTIwbWFraW5nJTIwcHJlY2lzaW9uJTIwdG9vbHN8ZW58MXx8fHwxNzcyNzQ2MzQwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      badge: "NOVO",
      badgeColor: "#27AE60",
      category: "Dental",
      specs: ["5 eixos", "Precisão dental", "Compacta"],
      fullDescription: "Desenvolvida especificamente para o mercado odontológico, a 5D Pro oferece a precisão necessária para usinagem de próteses dentais, coroas e implantes. Compacta e silenciosa, ideal para laboratórios.",
      technicalSpecs: [
        "Certificada para uso odontológico",
        "Compatível com zircônia, PMMA e cera",
        "Sistema de aspiração de pó integrado",
        "Operação silenciosa (< 60dB)",
        "Dimensões compactas: 600mm x 500mm x 600mm",
        "Software específico para CAD dental"
      ]
    },
    {
      name: "COMPACTA",
      description: "Versão compacta para pequenos espaços",
      image: "https://images.unsplash.com/photo-1742971366169-6efb57949d56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDTkMlMjBtYWNoaW5lJTIwcHJlY2lzaW9uJTIwbWFudWZhY3R1cmluZ3xlbnwxfHx8fDE3NzI3MjcyOTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "Joalheria",
      specs: ["Design compacto", "Fácil instalação", "Custo-benefício"],
      fullDescription: "A solução perfeita para quem está começando ou tem espaço limitado. Mantém a qualidade CNC Flex em dimensões reduzidas, sem comprometer a precisão e qualidade de usinagem.",
      technicalSpecs: [
        "Ocupa apenas 0.5m² de área",
        "Instalação plug and play",
        "3 eixos simultâneos",
        "Ideal para pequenas produções",
        "Consumo energético reduzido (110V/220V)",
        "Treinamento básico incluso"
      ]
    },
    {
      name: "INDUSTRIAL",
      description: "Modelo para produção em escala",
      image: "https://images.unsplash.com/photo-1768796372343-99ed316eb5ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBmYWN0b3J5JTIwZXF1aXBtZW50fGVufDF8fHx8MTc3MjY4NDUxM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "Industrial",
      specs: ["Alta capacidade", "Produção contínua", "Robusto"],
      fullDescription: "Nossa máquina mais robusta, desenvolvida para operação contínua em ambientes industriais. Capacidade de produção em larga escala mantendo os padrões de qualidade CNC Flex.",
      technicalSpecs: [
        "Estrutura reforçada em ferro fundido",
        "Operação 24/7 sem perda de performance",
        "Sistema de troca automática de peças",
        "Área de trabalho: 400mm x 300mm x 200mm",
        "Integração com sistemas ERP",
        "Manutenção preventiva programável"
      ]
    },
  ];

  const filteredProdutos =
    activeFilter === "Todos"
      ? produtos
      : produtos.filter((p) => p.category === activeFilter);

  return (
    <section
      className="py-28"
      id="produtos"
      style={{
        background: "linear-gradient(180deg, #F8F9FA 0%, #FFFFFF 50%, #F8F9FA 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div
            className="inline-block px-4 py-2 rounded-full mb-4"
            style={{
              background: "rgba(255, 107, 53, 0.1)",
              color: "#FF6B35",
              fontSize: "12px",
              fontWeight: 700,
              letterSpacing: "0.5px",
              textTransform: "uppercase",
            }}
          >
            NOSSOS PRODUTOS
          </div>
          <h2
            className="mb-4"
            style={{
              fontSize: "clamp(32px, 4vw, 48px)",
              fontWeight: 700,
              color: "#0A1628",
              lineHeight: 1.2,
            }}
          >
            Máquinas de Alta Precisão
          </h2>
          <p style={{ fontSize: "18px", color: "#7F8C8D" }}>
            Equipamentos para todas as necessidades de usinagem
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className="px-6 py-3 rounded-full transition-all duration-300"
              style={{
                background:
                  activeFilter === filter
                    ? "linear-gradient(135deg, #FF6B35 0%, #FF8C42 100%)"
                    : "white",
                color: activeFilter === filter ? "white" : "#2C3E50",
                border: activeFilter === filter ? "none" : "1px solid #E8EAED",
                fontSize: "14px",
                fontWeight: 600,
              }}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProdutos.map((produto, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl group"
              style={{
                boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.06)",
                border: "1px solid rgba(255, 107, 53, 0.08)",
              }}
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-gray-100 to-gray-50">
                <img
                  src={produto.image}
                  alt={produto.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/80 via-[#0A1628]/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                
                {/* Quick View Button */}
                <button className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="px-6 py-3 bg-white/95 backdrop-blur-sm rounded-xl font-semibold text-[#0A1628] hover:bg-white transition-all duration-300">
                    Visualização Rápida
                  </span>
                </button>
                
                {/* Badge */}
                {produto.badge && (
                  <div
                    className="absolute top-4 right-4 px-4 py-2 rounded-xl backdrop-blur-md font-bold text-[11px] uppercase tracking-wide shadow-lg"
                    style={{
                      background: produto.badgeColor,
                      color: "white",
                    }}
                  >
                    {produto.badge}
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-8">
                <h3
                  className="mb-3 transition-colors duration-300 group-hover:text-[#FF6B35]"
                  style={{
                    fontSize: "26px",
                    fontWeight: 700,
                    color: "#0A1628",
                  }}
                >
                  {produto.name}
                </h3>
                <p
                  className="mb-6"
                  style={{
                    fontSize: "15px",
                    color: "#7F8C8D",
                    lineHeight: 1.6,
                  }}
                >
                  {produto.description}
                </p>

                {/* Specs */}
                <div className="space-y-3 mb-8">
                  {produto.specs.map((spec, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#FF6B35]/10 flex items-center justify-center flex-shrink-0">
                        {i === 0 && <Zap size={16} style={{ color: "#FF6B35" }} />}
                        {i === 1 && <Ruler size={16} style={{ color: "#FF6B35" }} />}
                        {i === 2 && <Settings size={16} style={{ color: "#FF6B35" }} />}
                      </div>
                      <span style={{ fontSize: "14px", color: "#2C3E50", fontWeight: 500 }}>{spec}</span>
                    </div>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3">
                  <button
                    onClick={() => setSelectedProduct(produto)}
                    className="flex-1 py-3.5 rounded-xl border-2 transition-all duration-300 font-semibold group/btn"
                    style={{
                      borderColor: "#FF6B35",
                      color: "#FF6B35",
                      fontSize: "14px",
                      backgroundColor: "transparent",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#FF6B35";
                      e.currentTarget.style.color = "white";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "transparent";
                      e.currentTarget.style.color = "#FF6B35";
                    }}
                  >
                    Ver Detalhes
                  </button>
                  <a
                    href={`https://wa.me/5511938023558?text=${encodeURIComponent(`Olá! Gostaria de solicitar um orçamento para a máquina ${produto.name}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3.5 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl text-center font-semibold"
                    style={{
                      background: "linear-gradient(135deg, #FF6B35 0%, #FF8C42 100%)",
                      color: "white",
                      fontSize: "14px",
                      boxShadow: "0px 4px 12px rgba(255, 107, 53, 0.3)",
                    }}
                  >
                    Solicitar
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Product Modal */}
      <ProductModal
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
        product={selectedProduct || produtos[0]}
      />
    </section>
  );
}
