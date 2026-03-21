import { Mail, Sparkles } from "lucide-react";
import { motion } from "motion/react";

export function Newsletter() {
  return (
    <section
      className="py-28 relative overflow-hidden"
    >
      {/* Premium gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B35] via-[#FF8C42] to-[#FFB380]" />
      
      {/* Animated patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white blur-[100px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#FF6B35] blur-[100px] rounded-full" />
      </div>

      <div className="max-w-4xl mx-auto px-8 relative z-10">
        <div className="text-center">
          <motion.div
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full mb-6"
            style={{
              background: 'rgba(255, 255, 255, 0.2)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.3)'
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Sparkles className="w-4 h-4 text-white" />
            <span className="text-white text-sm font-semibold">Newsletter Exclusiva</span>
          </motion.div>

          <motion.h2
            className="mb-5"
            style={{
              fontSize: "clamp(32px, 4vw, 48px)",
              fontWeight: 800,
              color: "white",
              lineHeight: 1.1,
              letterSpacing: '-0.02em'
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Fique Por Dentro das Novidades
          </motion.h2>
          <motion.p
            className="mb-12"
            style={{
              fontSize: "19px",
              color: "rgba(255, 255, 255, 0.9)",
              lineHeight: 1.6,
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Receba dicas, tutoriais e lançamentos diretamente no seu e-mail
          </motion.p>

          {/* Email Form */}
          <motion.div 
            className="max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div
              className="flex flex-col sm:flex-row gap-3 p-2 rounded-2xl"
              style={{
                background: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(20px)',
                boxShadow: "0 24px 64px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.3)",
              }}
            >
              <div className="flex-1 flex items-center gap-3 px-5">
                <Mail size={20} style={{ color: "#FF6B35" }} />
                <input
                  type="email"
                  placeholder="Seu melhor e-mail"
                  className="flex-1 py-4 bg-transparent border-none outline-none placeholder:text-gray-400"
                  style={{
                    fontSize: "16px",
                    color: "#2C3E50",
                  }}
                />
              </div>
              <button
                className="group px-10 py-4 rounded-xl transition-all duration-300 hover:scale-105 relative overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, #0A1628, #1a2b4a)",
                  color: "white",
                  fontSize: "16px",
                  fontWeight: 600,
                  boxShadow: '0 8px 24px rgba(10, 22, 40, 0.3)'
                }}
              >
                <span className="relative z-10">Cadastrar</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#1a2b4a] to-[#0A1628] opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            </div>

            <p
              className="mt-5"
              style={{
                fontSize: "14px",
                color: "rgba(255, 255, 255, 0.85)",
              }}
            >
              🔒 Sem spam. Cancele quando quiser.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
