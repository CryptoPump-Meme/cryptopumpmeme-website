import { motion } from 'framer-motion';
import { Rocket, TrendingUp, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden cyber-grid">
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="particle bg-purple-500/20"
            style={{
              width: Math.random() * 4 + 2 + 'px',
              height: Math.random() * 4 + 2 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-purple-500/20 px-4 py-2 rounded-full mb-6 glass-effect"
            >
              <Zap className="w-4 h-4 text-yellow-400" />
              <span className="text-sm font-semibold">Smart Pump Engine</span>
            </motion.div>

            <h1 className="text-5xl lg:text-7xl font-black mb-6 leading-tight">
              <span className="gradient-text neon-glow">Crypto Pump Meme</span>
            </h1>

            <p className="text-xl lg:text-2xl mb-4 text-purple-300 font-bold">
              The Meme Revolution That Thinks Before It Pumps
            </p>

            <p className="text-lg mb-8 text-gray-300 max-w-2xl mx-auto lg:mx-0">
              Not just another meme coin. CPM is the Smart Pump Engine that unifies the power of memes, AI, and blockchain to create data-driven, community-powered digital pump waves.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold text-lg px-8 py-6 animate-pulse-glow"
              >
                <Rocket className="mr-2 w-5 h-5" />
                Join The Revolution
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-purple-500 text-purple-300 hover:bg-purple-500/20 font-bold text-lg px-8 py-6"
              >
                <TrendingUp className="mr-2 w-5 h-5" />
                Whitepaper
              </Button>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="grid grid-cols-3 gap-4 mt-12"
            >
              <div className="glass-effect p-4 rounded-lg">
                <div className="text-3xl font-black gradient-text">400B</div>
                <div className="text-sm text-gray-400">Total Supply</div>
              </div>
              <div className="glass-effect p-4 rounded-lg">
                <div className="text-3xl font-black gradient-text">5</div>
                <div className="text-sm text-gray-400">Platforms</div>
              </div>
              <div className="glass-effect p-4 rounded-lg">
                <div className="text-3xl font-black gradient-text">AI</div>
                <div className="text-sm text-gray-400">Powered</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="relative z-10"
            >
              <img
                src="/assets/hero-cyber-frog-rocket.png"
                alt="Cyber Frog with Rocket"
                className="w-full max-w-lg mx-auto drop-shadow-2xl"
              />
            </motion.div>

            {/* Floating Elements */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute top-1/4 left-0 w-20 h-20 bg-purple-500/20 rounded-full blur-xl"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
              className="absolute bottom-1/4 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-xl"
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-purple-500 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-purple-500 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
}