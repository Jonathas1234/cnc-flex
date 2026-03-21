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
    <section className="py-32 relative overflow-hidden" id="diferenciais">
      {/* Elegant gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50" />
      
      {/* Decorative circles */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-[#FF6B35]/5 blur-[100px] rounded-full" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#1E3A5F]/5 blur-[100px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block px-5 py-2.5 rounded-full mb-6"
            style={{
              background: "linear-gradient(135deg, rgba(255, 107, 53, 0.1), rgba(255, 140, 66, 0.1))",
              border: '1px solid rgba(255, 107, 53, 0.2)',
            }}
          >
            <span style={{
              color: "#FF6B35",
              fontSize: "12px",
              fontWeight: 700,
              letterSpacing: "0.5px",
              textTransform: "uppercase",
            }}>
              POR QUE ESCOLHER A CNC FLEX
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              fontSize: "clamp(36px, 5vw, 56px)",
              fontWeight: 800,
              color: "#0A1628",
              lineHeight: 1.1,
              marginBottom: "20px",
              letterSpacing: '-0.03em'
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
              fontSize: "19px",
              color: "#7F8C8D",
              lineHeight: 1.7,
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
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative p-10 rounded-3xl cursor-pointer bg-white"
              style={{
                border: "1px solid rgba(0, 0, 0, 0.06)",
                boxShadow: '0 4px 24px rgba(0, 0, 0, 0.04)'
              }}
              whileHover={{ 
                y: -12,
                scale: 1.02,
                boxShadow: '0 24px 64px rgba(255, 107, 53, 0.12)',
                borderColor: 'rgba(255, 107, 53, 0.2)'
              }}
            >
              {/* Gradient Background on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B35]/5 via-[#FF8C42]/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
              
              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#FF6B35]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
              
              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <motion.div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center mb-7"
                  style={{ 
                    background: "linear-gradient(135deg, rgba(255, 107, 53, 0.1), rgba(255, 140, 66, 0.05))",
                    border: '1px solid rgba(255, 107, 53, 0.15)'
                  }}
                  whileHover={{ 
                    scale: 1.1, 
                    rotate: 5,
                    background: "linear-gradient(135deg, rgba(255, 107, 53, 0.15), rgba(255, 140, 66, 0.1))"
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <item.icon size={36} style={{ color: "#FF6B35" }} />
                </motion.div>

                {/* Title */}
                <h3
                  className="mb-5 transition-colors duration-300 group-hover:text-[#FF6B35]"
                  style={{
                    fontSize: "28px",
                    fontWeight: 700,
                    color: "#0A1628",
                    lineHeight: 1.2,
                    letterSpacing: '-0.02em'
                  }}
                >
                  {item.title}
                </h3>

                {/* Description */}
                <p
                  className="mb-7"
                  style={{
                    fontSize: "16px",
                    color: "#7F8C8D",
                    lineHeight: 1.8,
                  }}
                >
                  {item.description}
                </p>

                {/* Link */}
                <motion.a
                  href="#"
                  className="inline-flex items-center gap-2 font-semibold text-[#FF6B35]"
                  style={{
                    fontSize: "15px",
                  }}
                  whileHover={{ gap: '12px' }}
                  transition={{ duration: 0.2 }}
                >
                  {item.link}
                  <ArrowRight
                    size={18}
                    className="transition-transform"
                  />
                </motion.a>
              </div>

              {/* Animated border on hover */}
              <motion.div 
                className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FF6B35] via-[#FF8C42] to-[#FFB380] rounded-b-3xl"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.5 }}
                style={{ transformOrigin: 'left' }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
