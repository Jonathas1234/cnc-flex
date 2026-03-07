import { motion } from "motion/react";

export function Aplicacoes() {
  const aplicacoes = [
    { emoji: "💍", title: "Joalheria e Alianças" },
    { emoji: "💎", title: "Bijuterias Finas" },
    { emoji: "🦷", title: "Próteses Dentais" },
    { emoji: "👜", title: "Acessórios de Luxo" },
    { emoji: "🏆", title: "Troféus e Medalhas" },
    { emoji: "🎁", title: "Brindes Corporativos" },
    { emoji: "👗", title: "Etiquetas de Roupas" },
    { emoji: "🔧", title: "Peças Industriais" },
  ];

  return (
    <section className="py-28 relative overflow-hidden" style={{ background: "linear-gradient(180deg, #0A1628 0%, #1E3A5F 100%)" }}>
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-2 rounded-full mb-6"
            style={{
              background: "rgba(255, 107, 53, 0.15)",
              color: "#FF8C42",
              fontSize: "12px",
              fontWeight: 700,
              letterSpacing: "0.5px",
              textTransform: "uppercase",
            }}
          >
            APLICAÇÕES
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Indústrias que Confiam na CNC Flex
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-white/70 max-w-2xl mx-auto"
          >
            Soluções versáteis para diversos segmentos industriais
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {aplicacoes.map((app, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -8 }}
              className="relative group"
            >
              <div
                className="p-8 md:p-10 rounded-3xl text-center transition-all duration-500 cursor-pointer overflow-hidden"
                style={{
                  background: "rgba(255, 255, 255, 0.08)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                }}
              >
                {/* Hover Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B35]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Content */}
                <div className="relative z-10">
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                    className="text-5xl md:text-6xl mb-4"
                  >
                    {app.emoji}
                  </motion.div>
                  <h3 className="text-base md:text-lg font-semibold text-white group-hover:text-[#FF8C42] transition-colors duration-300">
                    {app.title}
                  </h3>
                </div>

                {/* Bottom Border Accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FF6B35] to-[#FF8C42] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
