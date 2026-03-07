import { motion, useMotionValue, useSpring } from "motion/react";
import { MouseEvent } from "react";

export function SobreNos() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left - rect.width / 2) * 0.05);
    mouseY.set((e.clientY - rect.top - rect.height / 2) * 0.05);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const stats = [
    { number: "20+", label: "Anos" },
    { number: "1000+", label: "Clientes" },
    { number: "100%", label: "Nacional" },
    { number: "24/7", label: "Suporte" },
  ];

  return (
    <section
      id="sobre"
      className="py-24 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #1E3A5F 0%, #0A1628 100%)",
      }}
    >
      <div className="max-w-[1440px] mx-auto px-8">
        <div className="grid lg:grid-cols-[40%_60%] gap-16 items-center">
          {/* Left Column - Images */}
          <motion.div 
            className="relative"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ x, y }}
          >
            {/* Main Image */}
            <motion.div 
              className="rounded-3xl overflow-hidden" 
              style={{ aspectRatio: "4/5" }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            >
              <img
                src="https://images.unsplash.com/photo-1764114909312-c27b89ec7223?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwdGVhbSUyMGZhY3RvcnklMjB3b3JrZXJzfGVufDF8fHx8MTc3Mjc0NjM0MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Equipe CNC Flex"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Floating Badges */}
            <motion.div
              className="absolute top-8 right-8 px-6 py-4 rounded-2xl bg-white"
              style={{ boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.15)" }}
              initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <div style={{ fontSize: "24px", fontWeight: 700, color: "#FF6B35" }}>20+</div>
              <div style={{ fontSize: "12px", color: "#7F8C8D" }}>anos</div>
            </motion.div>

            <motion.div
              className="absolute bottom-8 left-8 px-6 py-4 rounded-2xl bg-white"
              style={{ boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.15)" }}
              initial={{ opacity: 0, scale: 0.5, rotate: 10 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
              whileHover={{ scale: 1.1, rotate: -5 }}
            >
              <div style={{ fontSize: "14px", fontWeight: 700, color: "#0A1628" }}>
                🇧🇷 100% nacional
              </div>
            </motion.div>

            <motion.div
              className="absolute top-1/2 -right-4 px-6 py-4 rounded-2xl bg-white"
              style={{ boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.15)" }}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, type: "spring", stiffness: 200 }}
              whileHover={{ scale: 1.1 }}
            >
              <div style={{ fontSize: "14px", fontWeight: 700, color: "#27AE60" }}>
                ✓ ISO 9001
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Content */}
          <div>
            <div
              className="inline-block px-4 py-2 rounded-full mb-6"
              style={{
                background: "rgba(255, 107, 53, 0.2)",
                color: "#FF8C42",
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "0.5px",
                textTransform: "uppercase",
              }}
            >
              NOSSA HISTÓRIA
            </div>

            <h2
              className="mb-6"
              style={{
                fontSize: "clamp(32px, 4vw, 48px)",
                fontWeight: 700,
                color: "white",
                lineHeight: 1.2,
              }}
            >
              Há mais de 20 anos no mercado
            </h2>

            <p
              className="mb-10"
              style={{
                fontSize: "18px",
                color: "rgba(255, 255, 255, 0.8)",
                lineHeight: 1.6,
              }}
            >
              A CNC Flex foi criada para modernizar e trazer soluções inovadoras para o mercado
              de usinagem brasileiro. Desenvolvemos equipamentos de fresagem de alta precisão com
              tecnologia nacional e padrão internacional.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 mb-10">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="p-6 rounded-2xl text-center"
                  style={{
                    background: "rgba(255, 255, 255, 0.1)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                  }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ 
                    y: -5, 
                    background: "rgba(255, 107, 53, 0.15)",
                    borderColor: "rgba(255, 107, 53, 0.3)",
                    transition: { duration: 0.2 }
                  }}
                >
                  <motion.div 
                    style={{ fontSize: "36px", fontWeight: 700, color: "#FF6B35" }}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      delay: index * 0.1 + 0.3, 
                      type: "spring", 
                      stiffness: 200 
                    }}
                  >
                    {stat.number}
                  </motion.div>
                  <div style={{ fontSize: "14px", color: "rgba(255, 255, 255, 0.8)" }}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <button
              className="px-8 py-4 rounded-xl transition-all duration-300 hover:-translate-y-1"
              style={{
                background: "linear-gradient(135deg, #FF6B35 0%, #FF8C42 100%)",
                color: "white",
                fontSize: "16px",
                fontWeight: 600,
                boxShadow: "0px 8px 20px rgba(255, 107, 53, 0.3)",
              }}
            >
              Conheça Nossa História Completa
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
