import { Settings, CreditCard, GraduationCap, Zap, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

export function Diferenciais() {
  const go = (h: string) => document.querySelector(h)?.scrollIntoView({ behavior: "smooth" });
  const items = [
    { icon: Settings, title: "Usinagem CNC", desc: "Equipamentos 100% nacionais para confecção de alianças e jóias com precisão milimétrica.", c: "#0A3C6E", link: "Saiba mais", target: "#produtos" },
    { icon: CreditCard, title: "Financiamento BNDES", desc: "Condições especiais pelo Cartão BNDES. Invista com segurança e facilidade.", c: "#F38104", link: "Consultar", target: "#contato" },
    { icon: GraduationCap, title: "Treinamento Completo", desc: "Assistência técnica especializada, peças de reposição e suporte pós-venda dedicado.", c: "#0A3C6E", link: "Ver mais", target: "#servicos" },
    { icon: Zap, title: "Alta Tecnologia", desc: "Fresagem de alta precisão para joias, bijuterias e acessórios com padrão internacional.", c: "#F38104", link: "Nossa história", target: "#sobre" },
  ];
  return (
    <section className="relative py-16 sm:py-28 bg-gradient-to-b from-[#f0f2f5] to-[#f7f8fa] overflow-hidden" id="diferenciais">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0A3C6E] via-[#F38104] to-[#0A3C6E]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <motion.div className="flex items-center gap-3 mb-4" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
          <div className="w-8 h-[1px] bg-[#F38104]" />
          <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#F38104]">Diferenciais</span>
        </motion.div>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 sm:gap-6 mb-10 sm:mb-16">
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0A3C6E] leading-[1.08]"
            style={{ letterSpacing: "-0.04em" }}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            Por que líderes escolhem<br />a <span className="text-[#F38104]">CNC Flex</span>
          </motion.h2>
          <motion.p className="text-[14px] sm:text-[15px] text-[#0f1419]/55 max-w-sm font-light leading-relaxed" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.4 }}>
            Mais de duas décadas entregando tecnologia de ponta com suporte que faz a diferença.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {items.map((it, i) => (
            <motion.div
              key={i}
              className="group relative p-6 sm:p-8 bg-white/60 backdrop-blur-lg border border-white/70 active:bg-white/90 hover:bg-white/80 hover:shadow-[0_8px_32px_rgba(10,60,110,0.1)] transition-all duration-500 overflow-hidden rounded-xl cursor-pointer"
              style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.04), 0 1px 0 rgba(255,255,255,0.8) inset" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              onClick={() => go(it.target)}
            >
              <div className="absolute top-0 left-0 right-0 h-[3px] sm:scale-x-0 sm:group-hover:scale-x-100 transition-transform duration-700 origin-left" style={{ background: it.c }} />
              <div className="w-10 sm:w-11 h-10 sm:h-11 flex items-center justify-center mb-4 sm:mb-6 rounded-xl" style={{ background: `${it.c}12`, border: `1px solid ${it.c}25` }}>
                <it.icon size={18} style={{ color: it.c }} />
              </div>
              <h3 className="text-[15px] sm:text-[16px] font-bold text-[#0A3C6E] mb-2 sm:mb-3">{it.title}</h3>
              <p className="text-[14px] sm:text-[15px] text-[#0f1419]/55 leading-relaxed font-light mb-4 sm:mb-6">{it.desc}</p>
              <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-[0.12em] uppercase" style={{ color: it.c }}>
                {it.link} <ArrowRight size={12} />
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
