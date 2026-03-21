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

            <motion.h2
              className="mb-6"
              style={{
                fontSize: "clamp(36px, 5vw, 56px)",
                fontWeight: 800,
                color: "white",
                lineHeight: 1.1,
                letterSpacing: '-0.03em'
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Há mais de 20 anos no mercado
            </motion.h2>

            <motion.p
              className="mb-12"
              style={{
                fontSize: "19px",
                color: "rgba(255, 255, 255, 0.75)",
                lineHeight: 1.7,
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              A CNC Flex foi criada para modernizar e trazer soluções inovadoras para o mercado
              de usinagem brasileiro. Desenvolvemos equipamentos de fresagem de alta precisão com
              tecnologia nacional e padrão internacional.
            </motion.p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-5 mb-12">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="group p-7 rounded-2xl text-center cursor-pointer"
                  style={{
                    background: "rgba(255, 255, 255, 0.06)",
                    backdropFilter: "blur(20px)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
                  }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5, type: "spring" }}
                  whileHover={{ 
                    y: -8, 
                    scale: 1.05,
                    background: "rgba(255, 107, 53, 0.12)",
                    borderColor: "rgba(255, 107, 53, 0.3)",
                    boxShadow: '0 16px 48px rgba(255, 107, 53, 0.2)'
                  }}
                >
                  <motion.div 
                    style={{ 
                      fontSize: "48px", 
                      fontWeight: 800, 
                      color: "#FF6B35",
                      letterSpacing: '-0.02em',
                      marginBottom: '8px'
                    }}
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      delay: index * 0.1 + 0.3, 
                      type: "spring", 
                      stiffness: 200,
                      damping: 15
                    }}
                  >
                    {stat.number}
                  </motion.div>
                  <div style={{ 
                    fontSize: "15px", 
                    color: "rgba(255, 255, 255, 0.7)",
                    fontWeight: 500
                  }}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.button
              className="group px-10 py-5 rounded-2xl relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #FF6B35 0%, #FF8C42 100%)",
                color: "white",
                fontSize: "16px",
                fontWeight: 600,
                boxShadow: "0 12px 32px rgba(255, 107, 53, 0.3)",
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              whileHover={{ 
                y: -4,
                boxShadow: "0 20px 48px rgba(255, 107, 53, 0.4)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10">Conheça Nossa História Completa</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF8C42] to-[#FFB380] opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
