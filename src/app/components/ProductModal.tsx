import { X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
interface ProductModalProps {isOpen:boolean;onClose:()=>void;product:{name:string;description:string;image:string;specs:string[];fullDescription:string;technicalSpecs:string[]};}
export function ProductModal({isOpen,onClose,product}:ProductModalProps) {
  if(!isOpen) return null;
  return (<AnimatePresence>{isOpen && (<>
    <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={onClose} className="fixed inset-0 bg-[#0A3C6E]/30 backdrop-blur-xl z-50"/>
    <motion.div initial={{opacity:0,scale:0.96,y:20}} animate={{opacity:1,scale:1,y:0}} exit={{opacity:0,scale:0.96,y:20}}
      className="fixed inset-3 sm:inset-6 md:inset-10 lg:inset-16 z-50 overflow-hidden bg-white/80 backdrop-blur-2xl border border-white/50 rounded-2xl shadow-[0_24px_80px_rgba(10,60,110,0.2)]">
      <button onClick={onClose} className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center bg-white/60 backdrop-blur-sm border border-white/50 hover:border-[#F38104]/30 text-[#0f1419]/30 hover:text-[#F38104] rounded-xl transition-all z-10 shadow-sm"><X size={16}/></button>
      <div className="h-full overflow-y-auto"><div className="grid lg:grid-cols-2 min-h-full">
        <div className="relative bg-[#f7f8fa]/60 backdrop-blur-sm p-6 sm:p-10 flex items-center justify-center"><img src={product.image} alt={product.name} className="w-full h-auto max-h-[70vh] object-contain"/></div>
        <div className="p-6 sm:p-10 flex flex-col">
          <div className="inline-block px-3 py-1 text-[9px] font-bold tracking-[0.15em] uppercase mb-5 border border-[#0A3C6E]/15 text-[#0A3C6E] bg-[#0A3C6E]/5 backdrop-blur-sm rounded-lg self-start">Profissional</div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0A3C6E] mb-3" style={{letterSpacing:"-0.04em"}}>{product.name}</h2>
          <p className="text-base text-[#0f1419]/50 mb-6 font-light">{product.description}</p>
          <p className="text-[14px] text-[#0f1419]/60 leading-relaxed mb-8 font-light">{product.fullDescription}</p>
          <h3 className="text-[10px] font-bold tracking-[0.12em] uppercase text-[#F38104]/60 mb-4">Especificações</h3>
          <div className="space-y-2 mb-8">
            {product.technicalSpecs.map((s,i)=>(<div key={i} className="flex items-start gap-2.5 p-2.5 bg-white/50 backdrop-blur-sm border border-white/60 rounded-lg">
              <div className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{background:i%2===0?"#0A3C6E":"#F38104"}}/><span className="text-[13px] text-[#0f1419]/55 font-light">{s}</span>
            </div>))}
          </div>
          <div className="mt-auto flex flex-col sm:flex-row gap-2.5">
            <a href={`https://wa.me/5511938023558?text=${encodeURIComponent(`Olá! Info sobre ${product.name}`)}`} target="_blank" rel="noopener noreferrer"
              className="flex-1 py-3.5 text-center text-[11px] font-bold tracking-[0.12em] uppercase bg-[#F38104] text-white hover:brightness-110 rounded-lg transition-all shadow-[0_4px_16px_rgba(243,129,4,0.25)]">Solicitar Orçamento</a>
            <button onClick={onClose} className="px-6 py-3.5 text-[11px] font-bold tracking-[0.12em] uppercase border border-[#0f1419]/[0.08] text-[#0f1419]/40 hover:text-[#0f1419]/60 rounded-lg transition-all">Fechar</button>
          </div>
        </div>
      </div></div>
    </motion.div></>)}</AnimatePresence>);
}
