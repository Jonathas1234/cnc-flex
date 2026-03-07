import { Settings, CreditCard, GraduationCap, Zap, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

export function Diferenciais() {
  const diferenciais = [
    {
      icon: Settings,
      title: "Usinagem com CNC",
      description:
        "Soluções, Equipamentos e Serviços ideais para Confecções de Alianças e Jóias. Equipamento 100% nacional.",
      link: "Saiba mais",
    },
    {
      icon: CreditCard,
      title: "Financiamento Facilitado",
      description:
        "Através do Cartão do BNDES. Garantia e qualidade asseguradas com condições especiais.",
      link: "Consultar",
    },
    {
      icon: GraduationCap,
      title: "Treinamentos e Assistência Técnica",
      description:
        "Garantia de ter peças de reposição, assistência técnica e atendimento pós-venda especializado.",
      link: "Ver cursos",
    },
    {
      icon: Zap,
      title: "Qualidade e Tecnologia",
      description:
        "Desenvolvimento de equipamentos de fresagem de alta precisão para produtores de joias, bijuterias e acessórios.",
      link: "Nossa história",
    },
  ];

  return (
    <section className="py-28 bg-gradient-to-b from-white to-gray-50" id="diferenciais">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-2 rounded-full mb-4"
            style={{
              background: "rgba(255, 107, 53, 0.1)",
              color: "#FF6B35",
              fontSize: "12px",
              fontWeight: 700,
              letterSpacing: "0.5px",
              textTransform: "uppercase",
            }}
          >
            POR QUE ESCOLHER A CNC FLEX
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              fontSize: "clamp(32px, 4vw, 48px)",
              fontWeight: 700,
              color: "#0A1628",
              lineHeight: 1.2,
              marginBottom: "16px",
            }}
          >
            Tecnologia Nacional com Padrão Internacional
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              fontSize: "18px",
              color: "#7F8C8D",
              lineHeight: 1.6,
              maxWidth: "700px",
              margin: "0 auto",
            }}
          >
            Soluções completas em usinagem de precisão com suporte especializado
          </motion.p>
        </div>

        {/* Grid of Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {diferenciais.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative p-10 rounded-3xl transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl group cursor-pointer bg-white overflow-hidden"
              style={{
                border: "1px solid rgba(255, 107, 53, 0.1)",
              }}
            >
              {/* Gradient Background on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B35]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
                  style={{ 
                    background: "linear-gradient(135deg, rgba(255, 107, 53, 0.15) 0%, rgba(255, 140, 66, 0.1) 100%)",
                  }}
                >
                  <item.icon size={40} style={{ color: "#FF6B35" }} />
                </div>

                {/* Title */}
                <h3
                  className="mb-4 transition-colors duration-300 group-hover:text-[#FF6B35]"
                  style={{
                    fontSize: "26px",
                    fontWeight: 700,
                    color: "#0A1628",
                    lineHeight: 1.3,
                  }}
                >
                  {item.title}
                </h3>

                {/* Description */}
                <p
                  className="mb-6"
                  style={{
                    fontSize: "16px",
                    color: "#7F8C8D",
                    lineHeight: 1.7,
                  }}
                >
                  {item.description}
                </p>

                {/* Link */}
                <a
                  href="#"
                  className="inline-flex items-center gap-2 group/link font-semibold text-[#FF6B35] hover:gap-3 transition-all duration-300"
                  style={{
                    fontSize: "15px",
                  }}
                >
                  {item.link}
                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover/link:translate-x-1"
                  />
                </a>
              </div>

              {/* Border Accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FF6B35] to-[#FF8C42] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
