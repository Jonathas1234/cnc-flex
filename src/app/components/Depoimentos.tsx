import { Star } from "lucide-react";
import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function Depoimentos() {
  const sliderRef = useRef<any>(null);

  const depoimentos = [
    {
      text: "A Alliance revolucionou nossa produção de alianças. Precisão impecável e suporte técnico excepcional!",
      author: "João Silva",
      company: "Joalheria Premium SP",
      location: "São Paulo",
      avatar: "https://ui-avatars.com/api/?name=Joao+Silva&background=FF6B35&color=fff&size=60",
    },
    {
      text: "Suporte técnico excepcional e máquinas de qualidade incomparável. Melhor investimento que fizemos!",
      author: "Maria Santos",
      company: "Bijoux Design RJ",
      location: "Rio de Janeiro",
      avatar: "https://ui-avatars.com/api/?name=Maria+Santos&background=1E3A5F&color=fff&size=60",
    },
    {
      text: "Investimento que se pagou em 6 meses. Produtividade triplicou e nossos clientes notaram a diferença!",
      author: "Carlos Mendes",
      company: "Acessórios Finos MG",
      location: "Minas Gerais",
      avatar: "https://ui-avatars.com/api/?name=Carlos+Mendes&background=FF6B35&color=fff&size=60",
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
    <section className="py-24 bg-white">
      <div className="max-w-[1440px] mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div
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
            DEPOIMENTOS
          </div>
          <h2
            style={{
              fontSize: "clamp(32px, 4vw, 48px)",
              fontWeight: 700,
              color: "#0A1628",
              lineHeight: 1.2,
            }}
          >
            O Que Nossos Clientes Dizem
          </h2>
        </div>

        {/* Carousel */}
        <Slider ref={sliderRef} {...settings}>
          {depoimentos.map((depoimento, index) => (
            <div key={index} className="px-3">
              <div
                className="p-10 rounded-2xl h-full"
                style={{
                  background: "linear-gradient(180deg, #F8F9FA 0%, #FFFFFF 100%)",
                  borderLeft: "4px solid #FF6B35",
                }}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} fill="#FFB800" style={{ color: "#FFB800" }} />
                  ))}
                </div>

                {/* Quote Text */}
                <p
                  className="mb-8 relative"
                  style={{
                    fontSize: "16px",
                    color: "#2C3E50",
                    lineHeight: 1.6,
                  }}
                >
                  <span
                    className="absolute -left-2 -top-2"
                    style={{ fontSize: "48px", color: "#FF6B35", opacity: 0.2 }}
                  >
                    "
                  </span>
                  {depoimento.text}
                  <span
                    className="absolute"
                    style={{ fontSize: "48px", color: "#FF6B35", opacity: 0.2 }}
                  >
                    "
                  </span>
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-4">
                  <img
                    src={depoimento.avatar}
                    alt={depoimento.author}
                    className="rounded-full"
                    style={{ width: "60px", height: "60px" }}
                  />
                  <div>
                    <div style={{ fontSize: "16px", fontWeight: 600, color: "#0A1628" }}>
                      {depoimento.author}
                    </div>
                    <div style={{ fontSize: "14px", color: "#7F8C8D" }}>
                      {depoimento.company} - {depoimento.location}
                    </div>
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
