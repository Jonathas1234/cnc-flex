import { X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface ProductModalProps { isOpen:boolean; onClose:()=>void; product:{name:string;description:string;image:string;specs:string[];fullDescription:string;technicalSpecs:string[]}; }

export function ProductModal({isOpen,onClose,product}:ProductModalProps) {
  if(!isOpen) return null;
  return (
    <AnimatePresence>
      {isOpen && (<>
        <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={onClose} className="fixed inset-0 bg-[#0f1419]/50 backdrop-blur-sm z-50"/>
        <motion.div initial={{opacity:0,scale:0.96,y:20}} animate={{opacity:1,scale:1,y:0}} exit={{opacity:0,scale:0.96,y:20}}
          className="fixed inset-3 sm:inset-6 md:inset-10 lg:inset-16 z-50 overflow-hidden bg-white border border-[#0f1419]/[0.06] rounded-sm shadow-2xl">
          <button onClick={onClose} className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center border border-[#0f1419]/[0.06] hover:border-[#2563eb]/30 text-[#0f1419]/30 hover:text-[#2563eb] rounded-sm transition-all z-10"><X size={16}/></button>
          <div className="h-full overflow-y-auto">
            <div className="grid lg:grid-cols-2 min-h-full">
              <div className="relative bg-[#f7f8fa] p-6 sm:p-10 flex items-center justify-center">
                <img src={product.image} alt={product.name} className="w-full h-auto max-h-[70vh] object-contain rounded-sm"/>
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#2563eb]/20 rounded-tl-sm"/>
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#ea580c]/20 rounded-br-sm"/>
              </div>
              <div className="p-6 sm:p-10 flex flex-col">
                <div className="inline-block px-3 py-1 text-[9px] font-bold tracking-[0.15em] uppercase mb-5 border border-[#2563eb]/20 text-[#2563eb] rounded-sm self-start">Profissional</div>
                <h2 className="text-3xl sm:text-4xl font-bold text-[#0f1419] mb-3" style={{letterSpacing:"-0.04em"}}>{product.name}</h2>
                <p className="text-base text-[#0f1419]/60 mb-6 font-light">{product.description}</p>
                <p className="text-[14px] text-[#0f1419]/65 leading-relaxed mb-8 font-light">{product.fullDescription}</p>
                <h3 className="text-[10px] font-bold tracking-[0.12em] uppercase text-[#ea580c]/50 mb-4">Especificações</h3>
                <div className="space-y-2 mb-8">
                  {product.technicalSpecs.map((s,i)=>(
                    <div key={i} className="flex items-start gap-2.5 p-2.5 bg-[#f7f8fa] rounded-sm">
                      <div className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{background:i%2===0?"#2563eb":"#ea580c"}}/><span className="text-[13px] text-[#0f1419]/60 font-light">{s}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-auto flex flex-col sm:flex-row gap-2.5">
                  <a href={`https://wa.me/5511938023558?text=${encodeURIComponent(`Olá! Info sobre ${product.name}`)}`} target="_blank" rel="noopener noreferrer"
                    className="flex-1 py-3.5 text-center text-[11px] font-bold tracking-[0.12em] uppercase bg-[#2563eb] text-white hover:bg-[#1d4ed8] rounded-sm transition-all">Solicitar Orçamento</a>
                  <button onClick={onClose} className="px-6 py-3.5 text-[11px] font-bold tracking-[0.12em] uppercase border border-[#0f1419]/[0.06] text-[#0f1419]/30 hover:text-[#0f1419]/50 rounded-sm transition-all">Fechar</button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </>)}
    </AnimatePresence>
  );
}
