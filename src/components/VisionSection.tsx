import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Brain, Sparkles, Target } from 'lucide-react';

export default function VisionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-black mb-6">
            <span className="gradient-text">Vision & Philosophy</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transforming meme energy from "laughter" into economic power through a tech system built on AI, behavioral analysis, NFTs, DeFi, and gamification.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Brain,
              title: 'Advanced AI',
              description: 'AI system that predicts trends and analyzes sentiment in real-time across all social platforms',
              color: 'from-purple-500 to-pink-500',
            },
            {
              icon: Target,
              title: 'Smart Targeted Pumps',
              description: 'Collective pump engine based on data and behavioral analysis to achieve guaranteed results',
              color: 'from-blue-500 to-cyan-500',
            },
            {
              icon: Sparkles,
              title: 'Strong Community',
              description: 'Meme-to-Earn system that incentivizes community participation and creativity with instant rewards',
              color: 'from-green-500 to-emerald-500',
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass-effect p-8 rounded-2xl card-hover group"
            >
              <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform`}>
                <item.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center">{item.title}</h3>
              <p className="text-gray-300 text-center leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Quote Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 glass-effect p-12 rounded-3xl border-2 border-purple-500/30"
        >
          <blockquote className="text-center">
            <p className="text-2xl lg:text-3xl font-bold mb-4 gradient-text">
              "Memes aren't just funny images, they're a new universal language that moves markets and makes history"
            </p>
            <footer className="text-gray-400 text-lg">- Crypto Pump Meme Team</footer>
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}