import { ArrowRight, ChevronDown } from "lucide-react";
import { motion } from "motion/react";

export function Hero() {
  const aMobile = { duration: 0.6 };
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1742971366169-6efb57949d56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
          alt="CNC"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-[#0A3C6E]/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A3C6E] via-transparent to-[#0A3C6E]/30" />
      </div>
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-8 text-center pt-20 sm:pt-24 pb-24 sm:pb-32">
        <motion.div
          className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full mb-8 sm:mb-10 border border-white/20 bg-white/[0.08] backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.12)]"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...aMobile, delay: 0.2 }}
        >
          <div className="w-1.5 h-1.5 rounded-full bg-[#F38104] animate-pulse" />
          <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.12em] sm:tracking-[0.15em] uppercase text-white/90">
            Desde 2003 • Tecnologia Nacional
          </span>
        </motion.div>

        <motion.h1
          className="text-[2rem] leading-[1] sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white sm:leading-[0.95] mb-6 sm:mb-8"
          style={{ letterSpacing: "-0.04em" }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...aMobile, delay: 0.35 }}
        >
          Precisão que{" "}
          <span className="text-[#F38104]">transforma</span>
          <br className="hidden sm:block" />{" "}
          ideias em <span className="text-[#F38104]">realidade</span>
        </motion.h1>

        <motion.p
          className="text-sm sm:text-base md:text-lg text-white/60 leading-relaxed max-w-2xl mx-auto mb-8 sm:mb-12 font-light px-2"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...aMobile, delay: 0.5 }}
        >
          Máquinas CNC de 5 eixos simultâneos para joalheria, odontologia e indústria. Do protótipo 3D à peça final com precisão milimétrica.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-14 sm:mb-20 px-2"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...aMobile, delay: 0.6 }}
        >
          <a
            href="#produtos"
            onClick={(e) => { e.preventDefault(); document.querySelector("#produtos")?.scrollIntoView({ behavior: "smooth" }); }}
            className="group inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 text-[11px] sm:text-[12px] font-bold tracking-[0.12em] uppercase bg-[#F38104] text-white active:brightness-90 hover:brightness-110 rounded-sm transition-all duration-300 shadow-[0_4px_20px_rgba(243,129,4,0.3)]"
          >
            Ver Equipamentos <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="https://wa.me/5511938023558?text=Olá!%20Gostaria%20de%20falar%20com%20um%20especialista"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 text-[11px] sm:text-[12px] font-bold tracking-[0.12em] uppercase text-white/80 border border-white/20 bg-white/[0.05] backdrop-blur-sm active:bg-white/15 hover:bg-white/10 hover:text-white rounded-sm transition-all duration-300"
          >
            Falar com Especialista
          </a>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 sm:inline-flex sm:flex-wrap sm:justify-center gap-2 sm:gap-3 p-3 sm:p-5 rounded-2xl border border-white/[0.12] bg-white/[0.06] backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.15)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ...aMobile, delay: 0.8 }}
        >
          {[
            { n: "20+", l: "Anos", c: "#fff" },
            { n: "5 Eixos", l: "Simultâneos", c: "#F38104" },
            { n: "1000+", l: "Clientes", c: "#fff" },
            { n: "0.01mm", l: "Precisão", c: "#F38104" },
          ].map((s, i) => (
            <div key={i} className="flex items-baseline justify-center gap-1.5 sm:gap-2 px-2 sm:px-5 py-2 rounded-xl bg-white/[0.06] border border-white/[0.08]">
              <span className="text-lg sm:text-2xl md:text-3xl font-bold" style={{ color: s.c, letterSpacing: "-0.03em" }}>
                {s.n}
              </span>
              <span className="text-[9px] sm:text-[11px] font-medium tracking-[0.1em] uppercase text-white/40">
                {s.l}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
      <motion.div
        className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-5 h-5 text-white/20" />
      </motion.div>
    </section>
  );
}
