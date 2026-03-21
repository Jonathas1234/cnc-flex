import { Check, Play, Sparkles, Cpu, Layers } from "lucide-react";
import { useState } from "react";
import { motion } from "motion/react";

export function Tecnologia() {
  const [isPlaying, setIsPlaying] = useState(false);

  const features = [
    "Visualização 3D antes da produção",
    "Precisão de 0.01mm",
    "5 eixos simultâneos",
    "Software CAD/CAM incluído",
    "Biblioteca de designs pré-programados",
    "Suporte técnico especializado",
  ];

  return (
    <section
      id="servicos"
      className="py-32 relative overflow-hidden"
    >
      {/* Premium gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A1628] via-[#1a2b4a] to-[#0f1f3a]" />

      {/* Animated grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Glow effects */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#FF6B35] opacity-10 blur-[120px] rounded-full" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#1E3A5F] opacity-15 blur-[120px] rounded-full" />

      {/* Floating tech elements */}
      <motion.div
        className="absolute top-20 right-20 opacity-10"
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <Cpu size={120} color="#FF6B35" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full mb-8"
              style={{
                background: "rgba(255, 107, 53, 0.15)",
                border: '1px solid rgba(255, 107, 53, 0.3)',
                backdropFilter: 'blur(10px)'
              }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <Sparkles className="w-4 h-4 text-[#FF8C42]" />
              <span style={{
                color: "#FF8C42",
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "0.5px",
                textTransform: "uppercase",
              }}>
                NOSSA TECNOLOGIA
              </span>
            </motion.div>

            <motion.h2
              className="mb-6"
              style={{
                fontSize: "clamp(36px, 5vw, 56px)",
                fontWeight: 800,
                color: "white",
                lineHeight: 1.1,
                letterSpacing: '-0.03em'
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Do Protótipo 3D à Peça Final
            </motion.h2>

            <motion.p
              className="mb-12"
              style={{
                fontSize: "19px",
                color: "rgba(255, 255, 255, 0.75)",
                lineHeight: 1.7,
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Nossos equipamentos possuem até cinco eixos simultâneos de fresagem e sexto eixo
              para usinagem interna de anéis. Permite trabalho preciso mesmo em peças de pequeno
              porte, com visualização digital do produto em 3D sem necessidade de criação do
              protótipo físico.
            </motion.p>

            {/* Features List */}
            <div className="space-y-5">
              {features.map((feature, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-start gap-4 group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <div
                    className="flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center mt-0.5 group-hover:scale-110 transition-transform"
                    style={{ 
                      background: "linear-gradient(135deg, #27AE60, #2ECC71)",
                      boxShadow: '0 4px 12px rgba(39, 174, 96, 0.3)'
                    }}
                  >
                    <Check size={15} style={{ color: "white", strokeWidth: 3 }} />
                  </div>
                  <span
                    style={{
                      fontSize: "17px",
                      color: "rgba(255, 255, 255, 0.9)",
                      lineHeight: 1.6,
                      fontWeight: 500
                    }}
                  >
                    {feature}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Tech badges */}
            <motion.div 
              className="flex flex-wrap gap-4 mt-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
            >
              {[
                { icon: Layers, text: "5 Eixos" },
                { icon: Cpu, text: "CAD/CAM" },
                { icon: Sparkles, text: "Precisão" }
              ].map((badge, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 px-5 py-3 rounded-xl"
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)'
                  }}
                >
                  <badge.icon size={18} className="text-[#FF6B35]" />
                  <span className="text-white text-sm font-semibold">{badge.text}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Video/Image */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              {/* Glow behind video */}
              <div className="absolute -inset-6 bg-gradient-to-tr from-[#FF6B35]/20 to-[#FF8C42]/20 blur-3xl rounded-3xl" />

              <div 
                className="relative rounded-3xl overflow-hidden" 
                style={{ 
                  aspectRatio: "16/9",
                  boxShadow: '0 25px 60px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1742971366169-6efb57949d56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDTkMlMjBtYWNoaW5lJTIwcHJlY2lzaW9uJTIwbWFudWZhY3R1cmluZ3xlbnwxfHx8fDE3NzI3MjcyOTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Máquina CNC em funcionamento"
                  className="w-full h-full object-cover"
                />

                {/* Overlay with play button */}
                {!isPlaying && (
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center cursor-pointer"
                    style={{ 
                      background: "linear-gradient(to bottom, rgba(10, 22, 40, 0.3), rgba(10, 22, 40, 0.6))",
                      backdropFilter: 'blur(2px)'
                    }}
                    whileHover={{ backdropFilter: 'blur(0px)' }}
                  >
                    <motion.button
                      onClick={() => setIsPlaying(true)}
                      className="relative w-24 h-24 rounded-full flex items-center justify-center group"
                      style={{ 
                        background: 'rgba(255, 255, 255, 0.95)',
                        boxShadow: "0 20px 60px rgba(0, 0, 0, 0.4)" 
                      }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#FF6B35] to-[#FF8C42] opacity-0 group-hover:opacity-20 transition-opacity" />
                      <Play size={36} style={{ color: "#FF6B35", marginLeft: "4px" }} />
                    </motion.button>
                  </motion.div>
                )}
              </div>

              {/* Decorative floating elements */}
              <motion.div
                className="absolute -top-8 -right-8 w-32 h-32 rounded-2xl"
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 107, 53, 0.1), rgba(255, 140, 66, 0.1))',
                  border: '1px solid rgba(255, 107, 53, 0.2)',
                  backdropFilter: 'blur(10px)'
                }}
                animate={{ rotate: [0, 10, 0], y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
