import { Star, Quote } from "lucide-react";
import { useRef } from "react";
import Slider from "react-slick";
import { motion } from "motion/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function Depoimentos() {
  const sliderRef = useRef<any>(null);

  const depoimentos = [
    {
      text: "A Alliance revolucionou nossa produção de alianças. Precisão impecável e suporte técnico excepcional. O ROI foi atingido em menos de 8 meses.",
      author: "João Silva",
      company: "Joalheria Premium SP",
      location: "São Paulo",
      role: "Diretor de Produção",
      avatar: "https://ui-avatars.com/api/?name=Joao+Silva&background=FF6B35&color=fff&size=80&bold=true",
    },
    {
      text: "Suporte técnico excepcional e máquinas de qualidade incomparável. A tecnologia nacional finalmente atingiu padrão internacional. Melhor investimento!",
      author: "Maria Santos",
      company: "Bijoux Design RJ",
      location: "Rio de Janeiro",
      role: "CEO",
      avatar: "https://ui-avatars.com/api/?name=Maria+Santos&background=1E3A5F&color=fff&size=80&bold=true",
    },
    {
      text: "Investimento que se pagou em 6 meses. Produtividade triplicou, qualidade melhorou significativamente e nossos clientes notaram a diferença!",
      author: "Carlos Mendes",
      company: "Acessórios Finos MG",
      location: "Minas Gerais",
      role: "Gerente Industrial",
      avatar: "https://ui-avatars.com/api/?name=Carlos+Mendes&background=FF6B35&color=fff&size=80&bold=true",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="py-32 relative overflow-hidden" style={{ background: "linear-gradient(to bottom, #ffffff, #f8f9fa)" }}>
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full mb-8"
            style={{
              background: "linear-gradient(135deg, rgba(255, 107, 53, 0.1), rgba(255, 140, 66, 0.1))",
              border: '1px solid rgba(255, 107, 53, 0.2)',
            }}
          >
            <Quote className="w-4 h-4 text-[#FF6B35]" />
            <span style={{
              color: "#FF6B35",
              fontSize: "12px",
              fontWeight: 700,
              letterSpacing: "0.5px",
              textTransform: "uppercase",
            }}>
              DEPOIMENTOS
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            style={{
              fontSize: "clamp(36px, 5vw, 56px)",
              fontWeight: 800,
              color: "#0A1628",
              lineHeight: 1.1,
              letterSpacing: '-0.03em',
              marginBottom: '20px'
            }}
          >
            Experiências Reais de Clientes
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            style={{
              fontSize: "19px",
              color: "#7F8C8D",
              maxWidth: "700px",
              margin: "0 auto",
              lineHeight: 1.6
            }}
          >
            Conheça as histórias de sucesso de quem escolheu a CNC Flex
          </motion.p>
        </div>

        {/* Carousel */}
        <Slider ref={sliderRef} {...settings}>
          {depoimentos.map((depoimento, index) => (
            <div key={index} className="px-4">
              <motion.div
                className="relative p-10 rounded-3xl h-full group"
                style={{
                  background: "white",
                  border: "1px solid rgba(0, 0, 0, 0.06)",
                  boxShadow: '0 4px 24px rgba(0, 0, 0, 0.04)'
                }}
                whileHover={{
                  y: -8,
                  boxShadow: '0 24px 64px rgba(255, 107, 53, 0.12)',
                  borderColor: 'rgba(255, 107, 53, 0.2)'
                }}
              >
                {/* Quote Icon */}
                <div className="absolute top-8 right-8 w-12 h-12 rounded-xl bg-[#FF6B35]/10 flex items-center justify-center opacity-50">
                  <Quote size={24} className="text-[#FF6B35]" />
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-8">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} fill="#FFB800" style={{ color: "#FFB800" }} />
                  ))}
                </div>

                {/* Quote Text */}
                <p
                  className="mb-10 relative"
                  style={{
                    fontSize: "17px",
                    color: "#2C3E50",
                    lineHeight: 1.8,
                    fontStyle: "italic"
                  }}
                >
                  "{depoimento.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <img
                    src={depoimento.avatar}
                    alt={depoimento.author}
                    className="w-16 h-16 rounded-full"
                    style={{
                      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                      border: '3px solid white'
                    }}
                  />
                  <div>
                    <div style={{ fontSize: "16px", fontWeight: 700, color: "#0A1628", marginBottom: '4px' }}>
                      {depoimento.author}
                    </div>
                    <div style={{ fontSize: "14px", color: "#FF6B35", fontWeight: 600, marginBottom: '2px' }}>
                      {depoimento.role}
                    </div>
                    <div style={{ fontSize: "13px", color: "#7F8C8D" }}>
                      {depoimento.company} • {depoimento.location}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
