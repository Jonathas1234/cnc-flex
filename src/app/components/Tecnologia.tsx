import { Check, Play, Layers, Cpu, Sparkles } from "lucide-react";
import { useState } from "react";
import { motion } from "motion/react";

export function Tecnologia() {
  const [playing, setPlaying] = useState(false);
  const features = ["Visualização 3D antes da produção", "Precisão de 0.01mm", "5 eixos simultâneos", "Software CAD/CAM incluído", "Biblioteca de designs", "Suporte especializado"];
  return (
    <section id="servicos" className="py-16 sm:py-28 bg-[#0A3C6E] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-16 items-center">
          <motion.div className="relative order-2 lg:order-1" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <div className="relative overflow-hidden rounded-xl sm:rounded-2xl border border-white/[0.12] shadow-[0_8px_40px_rgba(0,0,0,0.3)]" style={{ aspectRatio: "16/9", background: "rgba(255,255,255,0.05)" }}>
              <div className="absolute inset-[1px] rounded-xl sm:rounded-2xl overflow-hidden">
                {playing ? (
                  <iframe src="https://www.youtube.com/embed/cnc1YNbOMjM?autoplay=1&rel=0" title="Alliance" className="w-full h-full absolute inset-0" allow="autoplay; encrypted-media" allowFullScreen />
                ) : (
                  <>
                    <img src="https://img.youtube.com/vi/cnc1YNbOMjM/hqdefault.jpg" alt="Alliance CNC" className="w-full h-full object-cover" loading="lazy" />
                    <div className="absolute inset-0 flex items-center justify-center cursor-pointer group" onClick={() => setPlaying(true)}>
                      <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-full bg-[#F38104] shadow-[0_8px_32px_rgba(243,129,4,0.4)] active:scale-95 group-hover:scale-110 transition-transform duration-300">
                        <Play size={24} className="text-white ml-1" />
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </motion.div>

          <motion.div className="order-1 lg:order-2" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <div className="w-8 h-[1px] bg-[#F38104]" />
              <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#F38104]">Tecnologia</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.08] mb-4 sm:mb-6" style={{ letterSpacing: "-0.04em" }}>
              Do protótipo 3D à <span className="text-[#F38104]">peça final</span>
            </h2>
            <p className="text-[14px] sm:text-[16px] text-white/70 leading-relaxed mb-8 sm:mb-10 font-light max-w-lg">
              Até cinco eixos simultâneos de fresagem e sexto eixo para usinagem interna. Visualização digital em 3D sem protótipo físico.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 mb-8 sm:mb-10">
              {features.map((f, i) => (
                <div key={i} className="flex items-center gap-3 p-2.5 sm:p-3 rounded-xl bg-white/[0.05] border border-white/[0.08]">
                  <div className="w-5 sm:w-6 h-5 sm:h-6 flex items-center justify-center rounded-lg flex-shrink-0" style={{ background: i % 2 === 0 ? "rgba(243,129,4,0.2)" : "rgba(255,255,255,0.1)" }}>
                    <Check size={11} style={{ color: i % 2 === 0 ? "#F38104" : "#fff" }} strokeWidth={3} />
                  </div>
                  <span className="text-[13px] sm:text-[15px] text-white/80 font-light">{f}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              {[{ icon: Layers, t: "5 Eixos" }, { icon: Cpu, t: "CAD/CAM" }, { icon: Sparkles, t: "Precisão" }].map((b, i) => (
                <div key={i} className="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl border border-white/[0.12] bg-white/[0.06] backdrop-blur-md">
                  <b.icon size={13} className="text-[#F38104]" />
                  <span className="text-[9px] sm:text-[10px] font-bold tracking-[0.12em] uppercase text-white/50">{b.t}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
