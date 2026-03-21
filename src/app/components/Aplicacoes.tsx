import { motion } from "motion/react";
import { 
  Gem, 
  Sparkles, 
  Heart, 
  Briefcase, 
  Award, 
  Gift, 
  Tag, 
  Cog 
} from "lucide-react";

export function Aplicacoes() {
  const aplicacoes = [
    { 
      icon: Heart, 
      title: "Joalheria e Alianças",
      description: "Anéis, alianças e peças complexas com precisão milimétrica",
      gradient: "from-[#FFD700]/20 to-[#FFA500]/20"
    },
    { 
      icon: Gem, 
      title: "Bijuterias Finas",
      description: "Peças delicadas com acabamento premium",
      gradient: "from-[#00CED1]/20 to-[#1E90FF]/20"
    },
    { 
      icon: Sparkles, 
      title: "Próteses Dentais",
      description: "Precisão odontológica em zircônia e PMMA",
      gradient: "from-[#FFFFFF]/20 to-[#E8E8E8]/20"
    },
    { 
      icon: Briefcase, 
      title: "Acessórios de Luxo",
      description: "Componentes metálicos para produtos premium",
      gradient: "from-[#8B4513]/20 to-[#A0522D]/20"
    },
    { 
      icon: Award, 
      title: "Troféus e Medalhas",
      description: "Reconhecimentos personalizados e exclusivos",
      gradient: "from-[#FFD700]/20 to-[#DAA520]/20"
    },
    { 
      icon: Gift, 
      title: "Brindes Corporativos",
      description: "Itens personalizados para sua marca",
      gradient: "from-[#FF6B35]/20 to-[#FF8C42]/20"
    },
    { 
      icon: Tag, 
      title: "Etiquetas Metálicas",
      description: "Placas de identificação e logotipos gravados",
      gradient: "from-[#708090]/20 to-[#2F4F4F]/20"
    },
    { 
      icon: Cog, 
      title: "Peças Industriais",
      description: "Componentes técnicos de alta performance",
      gradient: "from-[#4169E1]/20 to-[#0000CD]/20"
    },
  ];

  return (
    <section className="py-32 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0A1628 0%, #1a2b4a 50%, #0f1f3a 100%)" }}>
      {/* Subtle animated grid */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#FF6B35] opacity-5 blur-[120px] rounded-full" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#1E3A5F] opacity-10 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full mb-8"
            style={{
              background: "rgba(255, 107, 53, 0.12)",
              border: '1px solid rgba(255, 107, 53, 0.25)',
              backdropFilter: 'blur(10px)'
            }}
          >
            <Sparkles className="w-4 h-4 text-[#FF8C42]" />
            <span style={{
              color: "#FF8C42",
              fontSize: "12px",
              fontWeight: 700,
              letterSpacing: "0.5px",
              textTransform: "uppercase",
            }}>
              SEGMENTOS DE ATUAÇÃO
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              fontSize: "clamp(36px, 5vw, 56px)",
              fontWeight: 800,
              color: "white",
              lineHeight: 1.1,
              letterSpacing: '-0.03em',
              marginBottom: '20px'
            }}
          >
            Soluções para Múltiplas Indústrias
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              fontSize: "19px",
              color: "rgba(255, 255, 255, 0.7)",
              lineHeight: 1.6,
              maxWidth: "700px",
              margin: "0 auto"
            }}
          >
            Tecnologia de precisão aplicada aos mais diversos setores do mercado
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {aplicacoes.map((app, index) => {
            const Icon = app.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="relative group"
              >
                <motion.div
                  className="h-full p-8 rounded-2xl text-center cursor-pointer relative overflow-hidden"
                  style={{
                    background: "rgba(255, 255, 255, 0.03)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                    boxShadow: '0 4px 24px rgba(0, 0, 0, 0.1)'
                  }}
                  whileHover={{ 
                    y: -8,
                    borderColor: "rgba(255, 107, 53, 0.3)",
                    boxShadow: '0 16px 48px rgba(255, 107, 53, 0.15)'
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${app.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon container */}
                    <motion.div
                      className="w-16 h-16 mx-auto mb-6 rounded-xl flex items-center justify-center"
                      style={{
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.1)'
                      }}
                      whileHover={{ 
                        scale: 1.1,
                        background: 'rgba(255, 107, 53, 0.15)',
                        borderColor: 'rgba(255, 107, 53, 0.3)'
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <Icon size={32} className="text-[#FF8C42] group-hover:text-[#FF6B35] transition-colors" />
                    </motion.div>

                    {/* Title */}
                    <h3 
                      className="text-lg font-bold text-white mb-3 group-hover:text-[#FF8C42] transition-colors duration-300"
                      style={{ letterSpacing: '-0.01em' }}
                    >
                      {app.title}
                    </h3>

                    {/* Description */}
                    <p 
                      className="text-sm text-white/60 leading-relaxed"
                      style={{ fontSize: '14px' }}
                    >
                      {app.description}
                    </p>
                  </div>

                  {/* Bottom accent line */}
                  <motion.div 
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#FF6B35] via-[#FF8C42] to-[#FFB380]"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.5 }}
                    style={{ transformOrigin: 'left' }}
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
