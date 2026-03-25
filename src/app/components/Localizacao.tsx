import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { motion } from "motion/react";

export function Localizacao() {
  const mapsUrl = "https://www.google.com/maps/search/?api=1&query=Av.+Casa+Verde+3434-C+Bairro+do+Limão+São+Paulo+SP";

  const info = [
    { icon: MapPin, title: "Endereço", text: "Av. Casa Verde, 3434-C\nBairro do Limão — São Paulo, SP", c: "#0A3C6E", href: mapsUrl },
    { icon: Phone, title: "Telefones", text: "(11) 3951-0270\n(11) 93802-3558", c: "#F38104", href: "tel:+551139510270" },
    { icon: Mail, title: "E-mail", text: "cncflex@cncflex.com.br", c: "#0A3C6E", href: "mailto:cncflex@cncflex.com.br" },
    { icon: Clock, title: "Horário", text: "Seg-Sex: 8h às 18h\nSáb: 8h às 13h", c: "#F38104" },
  ];

  return (
    <section className="py-16 sm:py-28 bg-[#f7f8fa] overflow-hidden" id="contato">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-6 sm:gap-8">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
            <div className="w-full overflow-hidden border border-white/60 rounded-xl sm:rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.06)]" style={{ height: "100%", minHeight: "300px" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.0!2d-46.6753!3d-23.4937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDI5JzM3LjMiUyA0NsKwNDAnMzEuMSJX!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "300px" }}
                allowFullScreen
                loading="lazy"
                title="Localização CNC Flex"
              />
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.4 }}>
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <div className="w-8 h-[1px] bg-[#0A3C6E]" />
              <span className="text-[11px] sm:text-[12px] font-semibold tracking-[0.2em] uppercase text-[#0A3C6E]">Contato</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0A3C6E] mb-6 sm:mb-8" style={{ letterSpacing: "-0.03em" }}>
              Visite nosso <span className="text-[#F38104]">showroom</span>
            </h2>
            <div className="space-y-3 mb-6 sm:mb-8">
              {info.map((it, i) => {
                const card = (
                  <div className="flex items-start gap-3 sm:gap-3.5 p-3.5 sm:p-4 bg-white/60 backdrop-blur-lg border border-white/70 active:bg-white/90 hover:bg-white/80 hover:shadow-[0_8px_24px_rgba(10,60,110,0.08)] rounded-xl transition-all duration-500 cursor-pointer"
                    style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.03), 0 1px 0 rgba(255,255,255,0.8) inset" }}>
                    <div className="w-8 h-8 sm:w-9 sm:h-9 flex-shrink-0 flex items-center justify-center rounded-xl" style={{ background: `${it.c}10`, border: `1px solid ${it.c}20` }}>
                      <it.icon size={15} style={{ color: it.c }} />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[10px] sm:text-[11px] font-bold tracking-[0.12em] uppercase text-[#0f1419]/35 mb-0.5 sm:mb-1">{it.title}</div>
                      <div className="text-[13px] sm:text-[15px] text-[#0f1419]/65 font-light whitespace-pre-line leading-relaxed">{it.text}</div>
                    </div>
                  </div>
                );
                return it.href ? (
                  <a key={i} href={it.href} target="_blank" rel="noopener noreferrer" className="block">
                    {card}
                  </a>
                ) : (
                  <div key={i}>{card}</div>
                );
              })}
            </div>
            <a
              href="https://wa.me/5511938023558?text=Olá!%20Gostaria%20de%20falar%20com%20um%20especialista%20da%20CNC%20Flex"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 sm:py-4 flex items-center justify-center gap-2.5 text-[12px] sm:text-[13px] font-bold tracking-[0.1em] uppercase bg-[#25D366] text-white rounded-xl transition-all duration-300 active:brightness-90 hover:brightness-110 shadow-[0_4px_16px_rgba(37,211,102,0.3)]"
            >
              <MessageCircle size={18} /> Falar com Especialista via WhatsApp
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
