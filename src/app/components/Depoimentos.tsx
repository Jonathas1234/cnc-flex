import { Star, Quote } from "lucide-react";
import { useRef } from "react";
import Slider from "react-slick";
import { motion } from "motion/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function Depoimentos() {
  const ref = useRef<any>(null);
  const deps = [
    {text:"A Alliance revolucionou nossa produção. Precisão impecável e suporte excepcional. ROI em menos de 8 meses.",author:"João Silva",role:"Diretor de Produção",co:"Joalheria Premium SP",avatar:"https://ui-avatars.com/api/?name=JS&background=2563eb&color=fff&size=80&bold=true"},
    {text:"Tecnologia nacional em padrão internacional. Qualidade incomparável. Melhor investimento que fizemos.",author:"Maria Santos",role:"CEO",co:"Bijoux Design RJ",avatar:"https://ui-avatars.com/api/?name=MS&background=ea580c&color=fff&size=80&bold=true"},
    {text:"Produtividade triplicou, qualidade melhorou muito. Nossos clientes notaram a diferença imediatamente.",author:"Carlos Mendes",role:"Gerente Industrial",co:"Acessórios Finos MG",avatar:"https://ui-avatars.com/api/?name=CM&background=2563eb&color=fff&size=80&bold=true"},
  ];
  const settings = {dots:true,infinite:true,speed:600,slidesToShow:3,slidesToScroll:1,autoplay:true,autoplaySpeed:6000,
    responsive:[{breakpoint:1024,settings:{slidesToShow:2}},{breakpoint:640,settings:{slidesToShow:1}}]};
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-16">
          <motion.div className="flex items-center justify-center gap-3 mb-4" initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}}>
            <div className="w-8 h-[1px] bg-[#2563eb]"/><span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#2563eb]">Depoimentos</span><div className="w-8 h-[1px] bg-[#2563eb]"/>
          </motion.div>
          <motion.h2 className="text-3xl sm:text-4xl font-bold text-[#0f1419]" style={{letterSpacing:"-0.04em"}} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}}>
            Quem confia na <span className="text-[#ea580c]">CNC Flex</span>
          </motion.h2>
        </div>
        <Slider ref={ref} {...settings}>
          {deps.map((d,i)=>(
            <div key={i} className="px-2">
              <div className="p-8 bg-[#f7f8fa] border border-[#0f1419]/[0.03] hover:shadow-lg rounded-sm transition-all duration-500 relative">
                <Quote size={20} className="text-[#2563eb]/10 absolute top-6 right-6"/>
                <div className="flex gap-0.5 mb-6">{[...Array(5)].map((_,j)=><Star key={j} size={12} fill={j%2===0?"#2563eb":"#ea580c"} className={j%2===0?"text-[#2563eb]":"text-[#ea580c]"}/>)}</div>
                <p className="text-[15px] text-[#0f1419]/65 leading-[1.8] mb-8 font-light italic">"{d.text}"</p>
                <div className="flex items-center gap-3">
                  <img src={d.avatar} alt={d.author} className="w-10 h-10 rounded-full"/>
                  <div>
                    <div className="text-[14px] font-semibold text-[#0f1419]/80">{d.author}</div>
                    <div className="text-[12px] text-[#2563eb]/70">{d.role} • {d.co}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
