import { X, Play, ImageIcon } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: {
    name: string;
    description: string;
    image: string;
    specs: string[];
    fullDescription: string;
    technicalSpecs: string[];
    ytId?: string;
  };
}

export function ProductModal({isOpen,onClose,product}:ProductModalProps) {
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  // Reset to image view when a different product opens
  useEffect(() => { setShowVideo(false); }, [product.name]);

  if(!isOpen) return null;
  return (<AnimatePresence>{isOpen && (<>
    <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:0.2}}
      onClick={onClose} className="fixed inset-0 bg-[#0A3C6E]/30 backdrop-blur-xl z-50"/>
    <motion.div initial={{opacity:0,scale:0.96,y:20}} animate={{opacity:1,scale:1,y:0}} exit={{opacity:0,scale:0.96,y:20}} transition={{duration:0.3}}
      className="fixed inset-0 sm:inset-6 md:inset-10 lg:inset-16 z-50 overflow-hidden bg-white/90 sm:bg-white/80 backdrop-blur-2xl sm:border sm:border-white/50 sm:rounded-2xl shadow-[0_24px_80px_rgba(10,60,110,0.2)]">
      <button onClick={onClose} className="absolute top-3 right-3 sm:top-4 sm:right-4 w-9 h-9 flex items-center justify-center bg-white/60 backdrop-blur-sm border border-white/50 active:bg-white/90 hover:border-[#F38104]/30 text-[#0f1419]/30 hover:text-[#F38104] rounded-xl transition-all z-10 shadow-sm"><X size={16}/></button>

      <div className="h-full overflow-y-auto overscroll-contain">
        <div className="grid lg:grid-cols-2 min-h-full">

          {/* Left panel — image or video */}
          <div className="relative bg-[#f7f8fa]/60 backdrop-blur-sm flex flex-col">

            {/* Toggle tabs (only when ytId exists) */}
            {product.ytId && (
              <div className="absolute top-4 left-4 z-10 flex gap-1 p-1 bg-white/70 backdrop-blur-sm border border-white/60 rounded-xl shadow-sm">
                <button
                  onClick={()=>setShowVideo(false)}
                  className={"flex items-center gap-1.5 px-3 py-1.5 text-[10px] font-bold tracking-[0.1em] uppercase rounded-lg transition-all duration-200 "
                    + (!showVideo ? "bg-[#0A3C6E] text-white shadow" : "text-[#0A3C6E]/50 hover:text-[#0A3C6E]")}>
                  <ImageIcon size={10}/> Foto
                </button>
                <button
                  onClick={()=>setShowVideo(true)}
                  className={"flex items-center gap-1.5 px-3 py-1.5 text-[10px] font-bold tracking-[0.1em] uppercase rounded-lg transition-all duration-200 "
                    + (showVideo ? "bg-[#F38104] text-white shadow" : "text-[#0A3C6E]/50 hover:text-[#F38104]")}>
                  <Play size={10} className={showVideo?"fill-white":""}/> Vídeo
                </button>
              </div>
            )}

            <div className="flex-1 p-6 sm:p-10 flex items-center justify-center min-h-[280px]">
              <AnimatePresence mode="wait">
                {showVideo && product.ytId ? (
                  <motion.div key="video" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:0.2}}
                    className="w-full rounded-xl overflow-hidden shadow-lg" style={{aspectRatio:"16/9"}}>
                    <iframe
                      src={`https://www.youtube.com/embed/${product.ytId}?autoplay=1&rel=0`}
                      title={product.name}
                      className="w-full h-full"
                      allow="autoplay; encrypted-media"
                      allowFullScreen/>
                  </motion.div>
                ) : (
                  <motion.div key="image" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:0.2}}
                    className="relative w-full flex items-center justify-center">
                    <img src={product.image} alt={product.name} className="w-full h-auto max-h-[40vh] sm:max-h-[60vh] object-contain" loading="lazy"/>
                    {/* Play overlay button if video available and not showing video */}
                    {product.ytId && (
                      <button onClick={()=>setShowVideo(true)}
                        className="absolute bottom-4 right-4 flex items-center gap-2 px-4 py-2.5 bg-[#F38104] text-white text-[10px] font-bold tracking-[0.1em] uppercase rounded-xl shadow-lg hover:brightness-110 active:brightness-90 transition-all">
                        <Play size={11} className="fill-white"/> Ver em Ação
                      </button>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Right panel — details */}
          <div className="p-5 sm:p-10 flex flex-col">
            <div className="inline-block px-3 py-1 text-[9px] font-bold tracking-[0.15em] uppercase mb-5 border border-[#0A3C6E]/15 text-[#0A3C6E] bg-[#0A3C6E]/5 backdrop-blur-sm rounded-lg self-start">Profissional</div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0A3C6E] mb-3" style={{letterSpacing:"-0.04em"}}>{product.name}</h2>
            <p className="text-base text-[#0f1419]/75 mb-6 font-light">{product.description}</p>
            <p className="text-[14px] text-[#0f1419]/70 leading-relaxed mb-8 font-light">{product.fullDescription}</p>
            <h3 className="text-[10px] font-bold tracking-[0.12em] uppercase text-[#F38104] mb-4">Especificações</h3>
            <div className="space-y-2 mb-8">
              {product.technicalSpecs.map((s,i)=>(<div key={i} className="flex items-start gap-2.5 p-2.5 bg-white/50 backdrop-blur-sm border border-white/60 rounded-lg">
                <div className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{background:i%2===0?"#0A3C6E":"#F38104"}}/><span className="text-[13px] text-[#0f1419]/75 font-light">{s}</span>
              </div>))}
            </div>
            <div className="mt-auto flex flex-col sm:flex-row gap-2.5 pb-6 sm:pb-0">
              <a href={`https://wa.me/5511938023558?text=${encodeURIComponent(`Olá! Info sobre ${product.name}`)}`} target="_blank" rel="noopener noreferrer"
                className="flex-1 py-3.5 text-center text-[11px] font-bold tracking-[0.12em] uppercase bg-[#F38104] text-white active:brightness-90 hover:brightness-110 rounded-lg transition-all shadow-[0_4px_16px_rgba(243,129,4,0.25)]">Solicitar Orçamento</a>
              <button onClick={onClose} className="px-6 py-3.5 text-[11px] font-bold tracking-[0.12em] uppercase border border-[#0f1419]/[0.08] text-[#0f1419]/40 active:bg-black/5 hover:text-[#0f1419]/60 rounded-lg transition-all">Fechar</button>
            </div>
          </div>

        </div>
      </div>
    </motion.div></>)}</AnimatePresence>);
}
