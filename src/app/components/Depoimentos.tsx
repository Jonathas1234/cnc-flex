import { Star, Quote } from "lucide-react";
import { motion } from "motion/react";

export function Depoimentos() {
  const deps = [
    { text: "A Alliance revolucionou nossa produção. Precisão impecável e suporte excepcional. ROI em menos de 8 meses.", author: "João Silva", role: "Diretor de Produção", co: "Joalheria Premium SP", avatar: "https://ui-avatars.com/api/?name=JS&background=0A3C6E&color=fff&size=80&bold=true" },
    { text: "Tecnologia nacional em padrão internacional. Qualidade incomparável. Melhor investimento que fizemos.", author: "Maria Santos", role: "CEO", co: "Bijoux Design RJ", avatar: "https://ui-avatars.com/api/?name=MS&background=F38104&color=fff&size=80&bold=true" },
    { text: "Produtividade triplicou, qualidade melhorou muito. Nossos clientes notaram a diferença imediatamente.", author: "Carlos Mendes", role: "Gerente Industrial", co: "Acessórios Finos MG", avatar: "https://ui-avatars.com/api/?name=CM&background=0A3C6E&color=fff&size=80&bold=true" },
  ];
  return (
    <section className="py-16 sm:py-28 bg-gradient-to-b from-white to-[#f0f2f5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center mb-10 sm:mb-16">
          <motion.div className="flex items-center justify-center gap-3 mb-4" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
            <div className="w-8 h-[1px] bg-[#0A3C6E]" />
            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#0A3C6E]">Depoimentos</span>
            <div className="w-8 h-[1px] bg-[#0A3C6E]" />
          </motion.div>
          <motion.h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0A3C6E]" style={{ letterSpacing: "-0.04em" }} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
            Quem confia na <span className="text-[#F38104]">CNC Flex</span>
          </motion.h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          {deps.map((d, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="p-6 sm:p-8 bg-white/60 backdrop-blur-lg border border-white/70 rounded-xl transition-all duration-500 relative flex flex-col"
              style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.04), 0 1px 0 rgba(255,255,255,0.8) inset" }}
            >
              <Quote size={20} className="text-[#0A3C6E]/10 absolute top-4 sm:top-6 right-4 sm:right-6" />
              <div className="flex gap-0.5 mb-4 sm:mb-5">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={12} fill="#F38104" className="text-[#F38104]" />
                ))}
              </div>
              <p className="text-[14px] sm:text-[16px] text-[#0f1419]/65 leading-[1.7] mb-6 sm:mb-8 font-light italic flex-1">
                "{d.text}"
              </p>
              <div className="flex items-center gap-3 mt-auto">
                <img src={d.avatar} alt={d.author} className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex-shrink-0 ring-2 ring-white/50" loading="lazy" />
                <div className="min-w-0">
                  <div className="text-[14px] sm:text-[15px] font-semibold text-[#0A3C6E]">{d.author}</div>
                  <div className="text-[11px] sm:text-[12px] text-[#F38104]/70 truncate">{d.role} • {d.co}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
