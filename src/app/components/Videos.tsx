import { Play, Clock } from "lucide-react";

export function Videos() {
  const videos = [
    {
      title: "Máquina Alliance - Demonstração Completa",
      duration: "2:34",
      thumbnail: "https://images.unsplash.com/photo-1742971366169-6efb57949d56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDTkMlMjBtYWNoaW5lJTIwcHJlY2lzaW9uJTIwbWFudWZhY3R1cmluZ3xlbnwxfHx8fDE3NzI3MjcyOTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "Artist 3D - Prototipagem Rápida",
      duration: "3:12",
      thumbnail: "https://images.unsplash.com/photo-1768796372343-99ed316eb5ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBpbmR1c3RyaWFsJTIwbWFjaGluZXJ5JTIwZmFjdG9yeXxlbnwxfHx8fDE3NzI3MzA1NjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "Usinagem de Alianças - Processo Completo",
      duration: "4:45",
      thumbnail: "https://images.unsplash.com/photo-1766524555120-9c2e886c72f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqZXdlbHJ5JTIwbWFraW5nJTIwcHJlY2lzaW9uJTIwdG9vbHN8ZW58MXx8fHwxNzcyNzQ2MzQwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "Software CAD/CAM - Tutorial",
      duration: "5:20",
      thumbnail: "https://images.unsplash.com/photo-1759621165667-da064b86fdd0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVjaXNpb24lMjBlbmdpbmVlcmluZyUyMG1ldGFsd29ya3xlbnwxfHx8fDE3NzI3MjczMDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "Manutenção Preventiva",
      duration: "3:48",
      thumbnail: "https://images.unsplash.com/photo-1742971366169-6efb57949d56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDTkMlMjBtYWNoaW5lJTIwcHJlY2lzaW9uJTIwbWFudWZhY3R1cmluZ3xlbnwxfHx8fDE3NzI3MjcyOTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "Cases de Clientes",
      duration: "6:15",
      thumbnail: "https://images.unsplash.com/photo-1764114909312-c27b89ec7223?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwdGVhbSUyMGZhY3RvcnklMjB3b3JrZXJzfGVufDF8fHx8MTc3Mjc0NjM0MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  return (
    <section className="py-24" style={{ background: "#F8F9FA" }} id="videos">
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
            VEJA EM AÇÃO
          </div>
          <h2
            className="mb-4"
            style={{
              fontSize: "clamp(32px, 4vw, 48px)",
              fontWeight: 700,
              color: "#0A1628",
              lineHeight: 1.2,
            }}
          >
            Nossas Máquinas em Funcionamento
          </h2>
          <p style={{ fontSize: "18px", color: "#7F8C8D" }}>
            Assista demonstrações e casos reais de uso
          </p>
        </div>

        {/* Videos Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 group cursor-pointer"
              style={{
                boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.08)",
              }}
            >
              {/* Thumbnail */}
              <div className="relative overflow-hidden" style={{ aspectRatio: "16/9" }}>
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay */}
                <div
                  className="absolute inset-0 flex items-center justify-center"
                  style={{ background: "rgba(0, 0, 0, 0.3)" }}
                >
                  <div
                    className="w-20 h-20 rounded-full bg-white flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                    style={{ boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.2)" }}
                  >
                    <Play size={28} style={{ color: "#FF6B35", marginLeft: "3px" }} />
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="p-5">
                <h3
                  className="mb-2"
                  style={{
                    fontSize: "16px",
                    fontWeight: 600,
                    color: "#0A1628",
                    lineHeight: 1.4,
                  }}
                >
                  {video.title}
                </h3>
                <div className="flex items-center gap-2">
                  <Clock size={14} style={{ color: "#7F8C8D" }} />
                  <span style={{ fontSize: "14px", color: "#7F8C8D" }}>{video.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
