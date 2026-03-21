import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { motion } from "motion/react";

export function Localizacao() {
  const info = [
    {icon:MapPin,title:"Endereço",text:"Av. Casa Verde, 3434-C\nBairro do Limão — São Paulo, SP",c:"#2563eb"},
    {icon:Phone,title:"Telefones",text:"(11) 3951-0270\n(11) 93802-3558",href:"tel:+551139510270",c:"#ea580c"},
    {icon:Mail,title:"E-mail",text:"cncflex@cncflex.com.br",href:"mailto:cncflex@cncflex.com.br",c:"#2563eb"},
    {icon:Clock,title:"Horário",text:"Seg-Sex: 8h às 18h\nSáb: 8h às 13h",c:"#ea580c"},
  ];
  return (
    <section className="py-28 bg-white" id="contato">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-[55%_45%] gap-8">
          <motion.div initial={{opacity:0,x:-30}} whileInView={{opacity:1,x:0}} viewport={{once:true}}>
            <div className="w-full overflow-hidden border border-[#0f1419]/[0.04] rounded-sm" style={{height:"100%",minHeight:"420px"}}>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.0!2d-46.6753!3d-23.4937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDI5JzM3LjMiUyA0NsKwNDAnMzEuMSJX!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                width="100%" height="100%" style={{border:0}} allowFullScreen loading="lazy"/>
            </div>
          </motion.div>
          <motion.div initial={{opacity:0,x:30}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{delay:0.15}}>
            <div className="flex items-center gap-3 mb-6"><div className="w-8 h-[1px] bg-[#ea580c]"/><span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#ea580c]">Contato</span></div>
            <h2 className="text-3xl font-bold text-[#0f1419] mb-8" style={{letterSpacing:"-0.03em"}}>Visite nosso <span className="text-[#2563eb]">showroom</span></h2>
            <div className="space-y-3 mb-8">
              {info.map((it,i)=>{
                const inner=(<div className="flex items-start gap-3.5 p-4 bg-[#f7f8fa] border border-[#0f1419]/[0.03] hover:shadow-md rounded-sm transition-all duration-500">
                  <div className="w-9 h-9 flex-shrink-0 flex items-center justify-center rounded-lg" style={{background:`${it.c}08`,border:`1px solid ${it.c}12`}}><it.icon size={16} style={{color:it.c}}/></div>
                  <div><div className="text-[11px] font-bold tracking-[0.12em] uppercase text-[#0f1419]/40 mb-1">{it.title}</div><div className="text-[14px] text-[#0f1419]/60 font-light whitespace-pre-line leading-relaxed">{it.text}</div></div>
                </div>);
                return it.href ? <a key={i} href={it.href} className="block">{inner}</a> : <div key={i}>{inner}</div>;
              })}
            </div>
            <motion.a href="https://wa.me/5511938023558?text=Olá!%20Gostaria%20de%20falar%20com%20um%20especialista" target="_blank" rel="noopener noreferrer"
              className="w-full py-3.5 flex items-center justify-center gap-2.5 text-[12px] font-bold tracking-[0.1em] uppercase bg-[#25D366] text-white rounded-sm transition-all duration-300 hover:brightness-110"
              whileHover={{y:-2}}><MessageCircle size={16}/> Falar com Especialista</motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
