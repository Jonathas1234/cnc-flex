import { motion } from "motion/react";

export function Videos() {
  const vids = [
    { title:"Fresadora Alliance em Ação", ytId:"cnc1YNbOMjM" },
    { title:"Cravação de Aliança", ytId:"Z4X95T1QAQc" },
    { title:"Máquina Artist 3D", ytId:"mHZptTFlGrk" },
  ];

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

        {/* Main video */}
        <motion.div className="mb-4 overflow-hidden bg-white border border-[#0f1419]/[0.04] rounded-sm"
          initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}}>
          <div className="relative w-full" style={{aspectRatio:"16/9"}}>
            <iframe
              src={`https://www.youtube.com/embed/${vids[0].ytId}?rel=0`}
              title={vids[0].title}
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className="p-5">
            <h3 className="text-[16px] font-semibold text-[#0f1419]/80">{vids[0].title}</h3>
          </div>
        </motion.div>

        {/* Secondary videos */}
        <div className="grid md:grid-cols-2 gap-4">
          {vids.slice(1).map((v,i)=>(
            <motion.div key={v.ytId} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.08}}
              className="overflow-hidden bg-white border border-[#0f1419]/[0.04] rounded-sm">
              <div className="relative w-full" style={{aspectRatio:"16/9"}}>
                <iframe
                  src={`https://www.youtube.com/embed/${v.ytId}?rel=0`}
                  title={v.title}
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
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
