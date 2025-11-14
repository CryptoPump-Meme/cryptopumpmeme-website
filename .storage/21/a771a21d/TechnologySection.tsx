import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Bot, Coins, Image, DollarSign, Globe } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function TechnologySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const utilities = [
    {
      icon: Bot,
      title: 'CPM AI Pump Engine',
      description: 'AI platform that predicts the next trend in the meme market and launches "Pump Signals" alerts',
      image: '/assets/ai-pump-engine-tech.png',
      features: ['Sentiment Analysis', 'Trend Prediction', 'Instant Alerts'],
      gradient: 'from-purple-600 to-blue-600',
    },
    {
      icon: Coins,
      title: 'Meme-to-Earn Platform',
      description: 'Every user designs a meme about CPM and gets rewarded if it goes viral or receives high votes',
      image: '/assets/nft-meme-arsenal_variant_2.png',
      features: ['Instant Rewards', 'Voting System', 'Social Media Integration'],
      gradient: 'from-pink-600 to-purple-600',
    },
    {
      icon: Image,
      title: 'NFT Meme Arsenal',
      description: 'Every meme is converted to NFT on BASE chain and traded in a dedicated marketplace',
      image: '/assets/nft-meme-arsenal_variant_3.png',
      features: ['Mint on BASE', 'NFT Marketplace', 'True Ownership'],
      gradient: 'from-blue-600 to-cyan-600',
    },
    {
      icon: DollarSign,
      title: 'DeFi Pump Hub',
      description: 'Staking + Farming system with "Pump Rewards" prizes for participants',
      image: '/assets/defi-pump-hub.png',
      features: ['Staking', 'Farming', 'Multiplied Returns'],
      gradient: 'from-green-600 to-emerald-600',
    },
    {
      icon: Globe,
      title: 'CPM VR World',
      description: 'Virtual world for memes where users can attend virtual pump events',
      image: '/assets/vr-metaverse-world.png',
      features: ['Metaverse', 'Live Events', '3D Interaction'],
      gradient: 'from-indigo-600 to-purple-600',
    },
  ];

  return (
    <section ref={ref} className="py-20 relative overflow-hidden bg-gradient-to-b from-transparent to-purple-950/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-black mb-6">
            <span className="gradient-text">Technology & Platforms</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Five integrated platforms working together to create a complete ecosystem for memes and smart pumping
          </p>
        </motion.div>

        <div className="space-y-12">
          {utilities.map((utility, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Card className={`glass-effect border-none overflow-hidden card-hover ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}>
                <div className={`grid lg:grid-cols-2 gap-8 items-center ${index % 2 === 0 ? '' : 'lg:grid-flow-dense'}`}>
                  <CardContent className="p-8">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${utility.gradient} flex items-center justify-center mb-6`}>
                      <utility.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardHeader className="p-0 mb-4">
                      <CardTitle className="text-3xl font-black mb-2">{utility.title}</CardTitle>
                      <CardDescription className="text-gray-300 text-lg">
                        {utility.description}
                      </CardDescription>
                    </CardHeader>
                    <div className="flex flex-wrap gap-2 mt-6">
                      {utility.features.map((feature, i) => (
                        <span
                          key={i}
                          className={`px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r ${utility.gradient} text-white`}
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                  <div className="relative h-64 lg:h-96 overflow-hidden rounded-lg">
                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                      src={utility.image}
                      alt={utility.title}
                      className="w-full h-full object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${utility.gradient} opacity-20`} />
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-20 glass-effect p-8 rounded-3xl"
        >
          <h3 className="text-3xl font-black text-center mb-8 gradient-text">Technology Stack</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['Base Chain', 'Ethereum', 'AI/ML', 'Web3 Social', 'NFT Protocol', 'DeFi', 'Metaverse', 'Smart Contracts'].map((tech, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="glass-effect p-4 rounded-xl text-center font-semibold"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}