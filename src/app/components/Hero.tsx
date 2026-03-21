import { Clock, Users, Zap, ArrowRight, Sparkles } from "lucide-react";
import { motion } from "motion/react";

export function Hero() {
  return (
    <section id="inicio" className="relative pt-28 pb-20 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A1628] via-[#1a2b4a] to-[#0f1f3a]" />
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />
      
      {/* Glow effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#FF6B35] opacity-10 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#1E3A5F] opacity-20 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Hero Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Left - Text */}
          <motion.div 
            className="text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full mb-8"
              style={{
                background: 'rgba(255, 255, 255, 0.08)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                boxShadow: '0 4px 24px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
              }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Sparkles className="w-4 h-4 text-[#FF6B35]" />
              <span className="text-sm font-medium">Há mais de 20 anos no mercado</span>
            </motion.div>

            <motion.h1 
              className="text-5xl lg:text-7xl font-bold mb-6 leading-[1.1]"
              style={{ 
                letterSpacing: '-0.02em',
                textShadow: '0 2px 40px rgba(0,0,0,0.3)'
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Máquinas CNC de{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-[#FF6B35] via-[#FF8C42] to-[#FFB380] bg-clip-text text-transparent">
                  Alta Precisão
                </span>
                <motion.div 
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#FF6B35] to-[#FF8C42] rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                />
              </span>
              {" "}para Joalheria
            </motion.h1>

            <motion.p 
              className="text-xl text-white/80 mb-10 leading-relaxed max-w-xl"
              style={{ fontWeight: 400 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Equipamentos 100% nacionais com tecnologia de 5 eixos simultâneos.
              Do protótipo 3D à produção final com precisão milimétrica.
            </motion.p>

            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <a
                href="#produtos"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#produtos')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group relative px-8 py-4 bg-gradient-to-r from-[#FF6B35] to-[#FF8C42] text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_20px_50px_rgba(255,107,53,0.4)] hover:scale-105"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Conhecer Equipamentos
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF8C42] to-[#FFB380] opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a
                href="#contato"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 py-4 text-white font-semibold rounded-xl transition-all duration-300 hover:bg-white/10 hover:scale-105"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)',
                  border: '1.5px solid rgba(255, 255, 255, 0.2)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
                }}
              >
                Falar com Especialista
              </a>
            </motion.div>
          </motion.div>

          {/* Right - Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="relative">
              {/* Glow behind image */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#FF6B35]/20 to-[#FF8C42]/20 blur-3xl" />
              
              <motion.img
                src="https://images.unsplash.com/photo-1742971366169-6efb57949d56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200"
                alt="Máquina CNC"
                className="relative w-full rounded-3xl"
                style={{
                  boxShadow: '0 25px 60px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              />
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          {[
            { icon: Clock, number: "20+", text: "Anos de Experiência" },
            { icon: Zap, number: "5 Eixos", text: "Precisão Simultânea" },
            { icon: Users, number: "1000+", text: "Clientes Atendidos" },
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                className="group relative p-8 rounded-2xl text-center overflow-hidden"
                style={{
                  background: 'rgba(255, 255, 255, 0.04)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
                }}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B35]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  <Icon className="w-10 h-10 text-[#FF6B35] mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <div className="text-5xl font-bold text-white mb-2" style={{ letterSpacing: '-0.02em' }}>
                    {stat.number}
                  </div>
                  <div className="text-sm text-white/60 font-medium">{stat.text}</div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
