import { Play } from "lucide-react";
import { useState } from "react";
import { motion } from "motion/react";

export function Videos() {
  const vids = [
    { title:"Fresadora Alliance em Ação", ytId:"cnc1YNbOMjM", thumb:"https://img.youtube.com/vi/cnc1YNbOMjM/maxresdefault.jpg" },
    { title:"Cravação de Aliança", ytId:"Z4X95T1QAQc", thumb:"https://img.youtube.com/vi/Z4X95T1QAQc/maxresdefault.jpg" },
    { title:"Máquina Artist 3D", ytId:"mHZptTFlGrk", thumb:"https://img.youtube.com/vi/mHZptTFlGrk/maxresdefault.jpg" },
  ];

  const [playing, setPlaying] = useState<string|null>(null);

  return (
    <section className="py-28 bg-[#f7f8fa]" id="videos">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div className="flex items-center gap-3 mb-4" initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}}>
          <div className="w-8 h-[1px] bg-[#2563eb]"/><span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#2563eb]">Veja em ação</span>
        </motion.div>
        <motion.h2 className="text-3xl sm:text-4xl font-bold text-[#0f1419] leading-[1.08] mb-14" style={{letterSpacing:"-0.04em"}}
          initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}}>
          Máquinas em <span className="text-[#ea580c]">funcionamento</span>
        </motion.h2>

        {/* Main featured video */}
        <motion.div className="mb-4 overflow-hidden bg-white border border-[#0f1419]/[0.04] hover:shadow-xl rounded-sm transition-all duration-700"
          initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}}>
          <div className="relative" style={{aspectRatio:"16/9"}}>
            {playing === vids[0].ytId ? (
              <iframe src={`https://www.youtube.com/embed/${vids[0].ytId}?autoplay=1&rel=0`} title={vids[0].title}
                className="w-full h-full" allow="autoplay; encrypted-media" allowFullScreen />
            ) : (
              <>
                <img src={vids[0].thumb} alt={vids[0].title} className="w-full h-full object-cover"/>
                <div className="absolute inset-0 bg-[#0f1419]/20 flex items-center justify-center cursor-pointer group" onClick={()=>setPlaying(vids[0].ytId)}>
                  <div className="w-20 h-20 flex items-center justify-center rounded-full bg-white/95 shadow-2xl group-hover:scale-110 transition-transform duration-300">
                    <Play size={28} className="text-[#2563eb] ml-1"/>
                  </div>
                </div>
              </>
            )}
          </div>
          <div className="p-5">
            <h3 className="text-[16px] font-semibold text-[#0f1419]/80">{vids[0].title}</h3>
          </div>
        </motion.div>

        {/* Secondary videos */}
        <div className="grid md:grid-cols-2 gap-4">
          {vids.slice(1).map((v,i)=>(
            <motion.div key={v.ytId} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.08}}
              className="overflow-hidden bg-white border border-[#0f1419]/[0.04] hover:shadow-xl rounded-sm transition-all duration-700">
              <div className="relative" style={{aspectRatio:"16/9"}}>
                {playing === v.ytId ? (
                  <iframe src={`https://www.youtube.com/embed/${v.ytId}?autoplay=1&rel=0`} title={v.title}
                    className="w-full h-full" allow="autoplay; encrypted-media" allowFullScreen />
                ) : (
                  <>
                    <img src={v.thumb} alt={v.title} className="w-full h-full object-cover"/>
                    <div className="absolute inset-0 bg-[#0f1419]/15 flex items-center justify-center cursor-pointer group" onClick={()=>setPlaying(v.ytId)}>
                      <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white/95 shadow-xl group-hover:scale-110 transition-transform duration-300">
                        <Play size={22} className="text-[#ea580c] ml-0.5"/>
                      </div>
                    </div>
                  </>
                )}
              </div>
              <div className="p-5">
                <h3 className="text-[15px] font-semibold text-[#0f1419]/75">{v.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
