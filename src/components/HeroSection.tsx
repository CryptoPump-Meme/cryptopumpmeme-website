import { motion } from 'framer-motion';
import { Rocket, TrendingUp, Zap, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

export default function HeroSection() {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden cyber-grid">
      {/* Enhanced Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="particle absolute rounded-full"
            style={{
              width: Math.random() * 6 + 2 + 'px',
              height: Math.random() * 6 + 2 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              background: i % 3 === 0 ? '#a855f7' : i % 3 === 1 ? '#3b82f6' : '#ec4899',
              boxShadow: `0 0 ${Math.random() * 20 + 10}px currentColor`,
            }}
            animate={{
              y: [0, Math.random() * -100 - 50, 0],
              x: [0, Math.random() * 60 - 30, 0],
              opacity: [0.2, 1, 0.2],
              scale: [1, Math.random() + 1.5, 1],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Glowing Orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.6, 0.3, 0.6],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="container mx-auto px-4 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-purple-500/20 px-4 py-2 rounded-full mb-6 glass-effect"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              >
                <Zap className="w-4 h-4 text-yellow-400" />
              </motion.div>
              <span className="text-sm font-semibold">Smart Pump Engine</span>
            </motion.div>

            <motion.h1 
              className="text-5xl lg:text-7xl font-black mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <span className="gradient-text neon-glow">Crypto Pump Meme</span>
            </motion.h1>

            <motion.p 
              className="text-xl lg:text-2xl mb-4 text-purple-300 font-bold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              The Meme Revolution That Thinks Before It Pumps
            </motion.p>

            <motion.p 
              className="text-lg mb-8 text-gray-300 max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Not just another meme coin. CPM is the Smart Pump Engine that unifies the power of memes, AI, and blockchain to create data-driven, community-powered digital pump waves.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold text-lg px-8 py-6 shadow-2xl shadow-purple-500/50"
                >
                  <Rocket className="mr-2 w-5 h-5" />
                  Join The Revolution
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-purple-500 text-purple-300 hover:bg-purple-500/20 font-bold text-lg px-8 py-6"
                  onClick={() => navigate('/whitepaper')}
                >
                  <TrendingUp className="mr-2 w-5 h-5" />
                  Whitepaper
                </Button>
              </motion.div>
            </motion.div>

            {/* Enhanced Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="grid grid-cols-3 gap-4 mt-12"
            >
              {[
                { value: '400B', label: 'Total Supply', icon: Sparkles },
                { value: '5', label: 'Platforms', icon: Zap },
                { value: 'AI', label: 'Powered', icon: TrendingUp },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  className="glass-effect p-4 rounded-lg hover:scale-110 transition-transform cursor-pointer"
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + i * 0.1, duration: 0.5 }}
                >
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                  >
                    <stat.icon className="w-6 h-6 text-purple-400 mx-auto mb-2" />
                  </motion.div>
                  <div className="text-3xl font-black gradient-text">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Hero Image with Enhanced Animations */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative"
          >
            <motion.div
              animate={{ 
                y: [0, -30, 0],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                ease: 'easeInOut' 
              }}
              className="relative z-10"
            >
              <motion.img
                src="/assets/hero-cyber-frog-rocket.png"
                alt="Cyber Frog with Rocket"
                className="w-full max-w-lg mx-auto drop-shadow-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>

            {/* Enhanced Floating Elements */}
            <motion.div
              animate={{ 
                rotate: 360,
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
                scale: { duration: 3, repeat: Infinity, ease: 'easeInOut' }
              }}
              className="absolute top-1/4 left-0 w-24 h-24 bg-purple-500/30 rounded-full blur-2xl"
            />
            <motion.div
              animate={{ 
                rotate: -360,
                scale: [1.2, 1, 1.2]
              }}
              transition={{ 
                rotate: { duration: 15, repeat: Infinity, ease: 'linear' },
                scale: { duration: 4, repeat: Infinity, ease: 'easeInOut' }
              }}
              className="absolute bottom-1/4 right-0 w-32 h-32 bg-blue-500/30 rounded-full blur-2xl"
            />
            <motion.div
              animate={{ 
                rotate: 360,
                scale: [1, 1.5, 1]
              }}
              transition={{ 
                rotate: { duration: 25, repeat: Infinity, ease: 'linear' },
                scale: { duration: 5, repeat: Infinity, ease: 'easeInOut' }
              }}
              className="absolute top-1/2 right-1/4 w-20 h-20 bg-pink-500/30 rounded-full blur-2xl"
            />
          </motion.div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block"
      >
        <div className="w-6 h-10 border-2 border-purple-500 rounded-full flex justify-center relative overflow-hidden">
          <motion.div
            animate={{ y: [0, 20, 0], opacity: [1, 0, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-purple-500 rounded-full mt-2 shadow-lg shadow-purple-500/50"
          />
        </div>
      </motion.div>
    </section>
  );
}
