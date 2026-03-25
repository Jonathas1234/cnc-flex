import { Mail, Check } from "lucide-react";
import { useState } from "react";
import { motion } from "motion/react";
export function Newsletter() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const handleSubmit = () => {
    if (email && email.includes("@") && email.includes(".")) {
      setSent(true);
      setTimeout(() => setSent(false), 4000);
      setEmail("");
    }
  };
  return (
    <section className="py-24 relative overflow-hidden" style={{background:"linear-gradient(135deg, #F38104 0%, #e06f00 40%, #c85f00 100%)"}}>
      <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage:"radial-gradient(circle at 1px 1px, white 1px, transparent 0)",backgroundSize:"32px 32px"}} />
      <div className="max-w-2xl mx-auto px-5 sm:px-8 relative z-10 text-center">
        <motion.div className="flex items-center justify-center gap-3 mb-4" initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}}>
          <div className="w-8 h-[1px] bg-white/50"/><span className="text-[12px] font-semibold tracking-[0.2em] uppercase text-white/80">Newsletter</span><div className="w-8 h-[1px] bg-white/50"/>
        </motion.div>
        <motion.h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5" style={{letterSpacing:"-0.04em"}} initial={{opacity:0,y:15}} whileInView={{opacity:1,y:0}} viewport={{once:true}}>
          Fique por dentro das novidades
        </motion.h2>
        <motion.p className="text-[16px] text-white/80 mb-10 font-light" initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}}>Dicas, tutoriais e lançamentos no seu e-mail</motion.p>
        {sent ? (
          <motion.div className="flex items-center justify-center gap-3 py-5 bg-white/[0.15] backdrop-blur-xl border border-white/[0.25] rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.1)]"
            initial={{opacity:0,scale:0.95}} animate={{opacity:1,scale:1}}>
            <Check size={20} className="text-white" />
            <span className="text-[15px] font-semibold text-white">E-mail cadastrado com sucesso!</span>
          </motion.div>
        ) : (
          <motion.div className="flex flex-col sm:flex-row overflow-hidden rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.15)] border border-white/[0.2] bg-white/[0.1] backdrop-blur-xl" initial={{opacity:0,y:15}} whileInView={{opacity:1,y:0}} viewport={{once:true}}>
            <div className="flex-1 flex items-center gap-3 px-5 bg-white/90 backdrop-blur-sm">
              <Mail size={16} className="text-[#0A3C6E]/40"/>
              <input type="email" placeholder="Seu melhor e-mail" value={email} onChange={(e)=>setEmail(e.target.value)}
                onKeyDown={(e)=>{if(e.key==="Enter") handleSubmit()}}
                className="flex-1 py-4 bg-transparent border-none outline-none placeholder:text-[#0f1419]/30 text-[#0f1419] text-[15px] font-light"/>
            </div>
            <button onClick={handleSubmit} className="px-8 py-4 text-[12px] font-bold tracking-[0.12em] uppercase bg-[#0A3C6E] text-white hover:brightness-125 transition-all shrink-0 cursor-pointer">Cadastrar</button>
          </motion.div>
        )}
        <p className="mt-4 text-[12px] text-white/60 font-light">Sem spam. Cancele quando quiser.</p>
      </div>
    </section>
  );
}
