import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowLeft, Sparkles, Brain, Rocket, TrendingUp, Users, Globe, Shield, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';

interface Feature {
  icon: string;
  title: string;
  desc: string;
}

interface Utility {
  title: string;
  desc: string;
}

interface TokenomicsItem {
  category: string;
  percentage: number;
  amount: string;
  desc: string;
}

interface TeamMember {
  name: string;
  role: string;
  nationality: string;
  bio: string;
}

interface RoadmapItem {
  quarter: string;
  milestone: string;
}

interface Section {
  id: number;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  gradient: string;
  content?: string[];
  features?: Feature[];
  utilities?: Utility[];
  tokenomics?: TokenomicsItem[];
  team?: TeamMember[];
  roadmap?: RoadmapItem[];
}

export default function Whitepaper() {
  const navigate = useNavigate();

  const sections: Section[] = [
    {
      id: 1,
      icon: Sparkles,
      title: 'Introduction: The Rise of the Meme Revolution',
      gradient: 'from-purple-500 to-pink-500',
      content: [
        'Welcome to Crypto Pump Meme (CPM) – where the chaos of meme culture meets the precision of artificial intelligence and the transparency of blockchain technology.',
        'CPM is not just another meme token. It is a movement powered by AI-driven pump intelligence, social engagement, and decentralized fun. Our mission is to transform the power of viral communities into a smart, data-fueled ecosystem that rewards creativity, participation, and collective energy.',
        'The meme era has shown us one truth: communities are stronger than institutions. CPM channels that strength into an intelligent "Pump Engine" — predicting, fueling, and amplifying the next big wave in crypto culture.',
      ],
    },
    {
      id: 2,
      icon: Brain,
      title: 'Vision and Philosophy',
      gradient: 'from-blue-500 to-cyan-500',
      content: [
        'Vision: To build the world\'s first AI-Driven Meme Ecosystem that transforms internet culture into a measurable economic force — a revolution of humor, technology, and profit.',
        'Philosophy: CPM believes that memes are not jokes — they are cultural data packets, expressions of digital emotion. Our blockchain-backed AI analyzes global meme trends, identifies upcoming surges ("pump zones"), and rewards early participants with smart incentives.',
        '"The Meme That Thinks Before It Pumps."',
      ],
    },
    {
      id: 3,
      icon: Zap,
      title: 'The Technology: CPM Smart Pump Engine',
      gradient: 'from-green-500 to-emerald-500',
      content: [
        'The CPM Pump Engine is an advanced AI system that integrates social sentiment analysis, data analytics, and predictive algorithms to detect early viral momentum across the internet.',
      ],
      features: [
        { icon: '🤖', title: 'AI Trend Detector', desc: 'Scans Twitter/X, Discord, Telegram, and Reddit for meme trend signals.' },
        { icon: '📈', title: 'Smart Pump Index (SPI)', desc: 'A real-time indicator showing potential "pump readiness" based on sentiment and activity data.' },
        { icon: '🔗', title: 'Blockchain Integration', desc: 'Smart contracts automatically reward users who engage during optimal pump periods.' },
        { icon: '⚙️', title: 'Base + Ethereum Dual Chain', desc: 'High speed on Base, global liquidity on Ethereum.' },
      ],
    },
    {
      id: 4,
      icon: Rocket,
      title: 'Utilities & Ecosystem',
      gradient: 'from-orange-500 to-red-500',
      utilities: [
        { title: 'Meme-to-Earn Platform', desc: 'Users can create and submit memes. Viral memes earn CPM tokens based on engagement metrics like shares, votes, and reach. → Creativity = Currency.' },
        { title: 'CPM AI Pump Signals', desc: 'A subscription-based analytics tool powered by the CPM Pump Engine. It provides early alerts for trending meme tokens and cultural waves before they explode.' },
        { title: 'NFT Meme Arsenal', desc: 'Every high-impact meme can be minted as an NFT on the Base chain, stored in our Meme Arsenal marketplace, and traded by collectors and fans.' },
        { title: 'DeFi Pump Hub', desc: 'A staking and farming system where holders earn Pump Rewards for locking their CPM tokens and participating in coordinated pump events.' },
        { title: 'CPM VR World', desc: 'A gamified metaverse where users can join virtual pump events, interact with other meme creators, and witness live token surges inside a 3D digital environment.' },
      ],
    },
    {
      id: 5,
      icon: TrendingUp,
      title: 'Tokenomics',
      gradient: 'from-purple-500 to-blue-500',
      tokenomics: [
        { category: 'Development', percentage: 40, amount: '160B', desc: 'Funding for technology, AI infrastructure, contracts, and long-term ecosystem growth.' },
        { category: 'Community Rewards', percentage: 25, amount: '100B', desc: 'Incentives, competitions, and Meme-to-Earn rewards.' },
        { category: 'Airdrop', percentage: 30, amount: '120B', desc: 'Distribution to expand the global CPM community.' },
        { category: 'Team', percentage: 5, amount: '20B', desc: 'Reserved for the core team with vesting schedules for transparency.' },
      ],
    },
    {
      id: 6,
      icon: Users,
      title: 'The Team Behind the Revolution',
      gradient: 'from-pink-500 to-purple-500',
      team: [
        { name: 'Ethan "CodeLord" Reeves', role: 'CTO / Founder', nationality: 'USA', bio: 'Blockchain developer since 2016, former Chainlink contributor, AI systems architect.' },
        { name: 'Maya "PumpQueen" Carter', role: 'Creative Director', nationality: 'USA', bio: 'Meme culture strategist and digital artist shaping the CPM identity.' },
        { name: 'Zane "MetaWolf" Brooks', role: 'Marketing Lead', nationality: 'USA', bio: 'Viral growth expert, known for orchestrating global meme campaigns.' },
        { name: 'Dr. Logan "DataVortex" Hayes', role: 'Head of AI Systems', nationality: 'USA', bio: 'Data scientist specializing in sentiment analysis and predictive modeling.' },
      ],
    },
    {
      id: 7,
      icon: Globe,
      title: 'Roadmap',
      gradient: 'from-blue-500 to-purple-500',
      roadmap: [
        { quarter: 'Q1 2025', milestone: 'Token launch on Ethereum + Base, Website v1 release' },
        { quarter: 'Q2 2025', milestone: 'Global Airdrop, Community Launchpad, First Pump Event' },
        { quarter: 'Q3 2025', milestone: 'AI Pump Engine Beta, Meme-to-Earn Live' },
        { quarter: 'Q4 2025', milestone: 'NFT Meme Arsenal + DeFi Pump Hub release' },
        { quarter: 'Q1 2026', milestone: 'CPM VR World Launch + Major Exchange Listings' },
      ],
    },
    {
      id: 8,
      icon: Shield,
      title: 'Future Vision & Disclaimer',
      gradient: 'from-green-500 to-blue-500',
      content: [
        'CPM aims to become more than a token — it\'s a cultural protocol powered by people, humor, and code. Through partnerships with Web3 analytics firms, AI research labs, and major exchanges, CPM will evolve into the first decentralized Meme Intelligence Network — turning the voice of the internet into blockchain reality.',
        'Disclaimer: Crypto Pump Meme (CPM) is a community-driven experimental project. Participation involves risk and should not be considered financial advice. Always DYOR (Do Your Own Research).',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-purple-950/20 to-gray-950">
      {/* Header */}
      <header className="sticky top-0 z-50 glass-effect border-b border-purple-500/20 backdrop-blur-xl">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              onClick={() => navigate('/')}
              className="text-purple-400 hover:text-purple-300 hover:scale-105 transition-all"
            >
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to Home
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-30" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div 
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-purple-500/20 px-4 py-2 rounded-full mb-6 glass-effect"
            >
              <Sparkles className="w-4 h-4 text-yellow-400" />
              <span className="text-sm font-semibold">Version 1.0 | 2025</span>
            </motion.div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black mb-6">
              <span className="gradient-text neon-glow">CPM Whitepaper</span>
            </h1>
            <p className="text-xl sm:text-2xl text-purple-300 mb-8 font-bold">
              The Meme That Thinks Before It Pumps
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
              {[
                { label: 'Token', value: 'CPM' },
                { label: 'Supply', value: '400B' },
                { label: 'Networks', value: 'ETH+BASE' },
                { label: 'Sections', value: '8' },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="glass-effect p-3 sm:p-4 rounded-lg hover:scale-105 transition-transform"
                >
                  <div className="text-xs sm:text-sm text-gray-400 mb-1">{stat.label}</div>
                  <div className="text-lg sm:text-xl font-black gradient-text">{stat.value}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contract Address */}
      <section className="py-6 sm:py-8">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="glass-effect p-4 sm:p-6 rounded-2xl border-2 border-purple-500/30"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="w-full md:w-auto text-center md:text-left">
                <div className="text-xs sm:text-sm text-gray-400 mb-1">Contract Address (ETH + BASE)</div>
                <div className="text-sm sm:text-lg font-mono text-purple-300 break-all">0x0b873b3214c76bb29fc4ce164497b88a5b6e67f6</div>
              </div>
              <Button variant="outline" className="border-purple-500 text-purple-300 hover:scale-105 transition-transform w-full md:w-auto">
                Copy Address
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-8 sm:py-12">
        <div className="container mx-auto px-4 max-w-5xl">
          {sections.map((section, index) => (
            <WhitepaperSection key={section.id} section={section} index={index} />
          ))}
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-12 sm:py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-effect p-8 sm:p-12 rounded-3xl text-center border-2 border-purple-500/30"
          >
            <h3 className="text-3xl sm:text-4xl font-black mb-4 gradient-text">Ready to Join the Revolution?</h3>
            <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Think Smart. Pump Hard. Meme Forever.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 hover:scale-105 transition-transform w-full sm:w-auto"
              onClick={() => navigate('/')}
            >
              <Rocket className="mr-2 w-5 h-5" />
              Back to Home
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

function WhitepaperSection({ section, index }: { section: Section; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.05 }}
      className="mb-12 sm:mb-16"
    >
      <Card className="glass-effect border-none overflow-hidden hover:scale-[1.02] transition-transform duration-300">
        <motion.div 
          className={`h-2 bg-gradient-to-r ${section.gradient}`}
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: index * 0.05 + 0.2 }}
        />
        <CardHeader className="p-4 sm:p-6">
          <div className="flex items-start gap-3 sm:gap-4">
            <motion.div 
              className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br ${section.gradient} flex items-center justify-center flex-shrink-0`}
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6 }}
            >
              <section.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </motion.div>
            <div className="flex-1">
              <div className="text-xs sm:text-sm text-purple-400 mb-2">Section {section.id}</div>
              <CardTitle className="text-xl sm:text-2xl lg:text-3xl font-black mb-4">{section.title}</CardTitle>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6 p-4 sm:p-6">
          {section.content?.map((paragraph: string, i: number) => (
            <motion.p 
              key={i} 
              className="text-gray-300 leading-relaxed text-base sm:text-lg"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {paragraph}
            </motion.p>
          ))}

          {section.features && (
            <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 mt-6">
              {section.features.map((feature: Feature, i: number) => (
                <motion.div 
                  key={i} 
                  className="glass-effect p-4 rounded-lg hover:scale-105 transition-transform"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <div className="text-2xl mb-2">{feature.icon}</div>
                  <h4 className="font-bold mb-2 text-sm sm:text-base">{feature.title}</h4>
                  <p className="text-xs sm:text-sm text-gray-400">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          )}

          {section.utilities && (
            <div className="space-y-3 sm:space-y-4 mt-6">
              {section.utilities.map((utility: Utility, i: number) => (
                <motion.div 
                  key={i} 
                  className="glass-effect p-4 sm:p-6 rounded-lg hover:scale-[1.02] transition-transform"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <h4 className="text-lg sm:text-xl font-bold mb-2 text-purple-300">{i + 1}. {utility.title}</h4>
                  <p className="text-gray-300 leading-relaxed text-sm sm:text-base">{utility.desc}</p>
                </motion.div>
              ))}
            </div>
          )}

          {section.tokenomics && (
            <div className="space-y-3 sm:space-y-4 mt-6">
              <div className="glass-effect p-4 rounded-lg mb-4">
                <div className="grid grid-cols-3 gap-3 sm:gap-4 text-center">
                  {[
                    { label: 'Token Symbol', value: 'CPM' },
                    { label: 'Network', value: 'ETH & BASE' },
                    { label: 'Total Supply', value: '400B' },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.4, delay: i * 0.1 }}
                    >
                      <div className="text-xs sm:text-sm text-gray-400 mb-1">{item.label}</div>
                      <div className="text-base sm:text-xl font-black gradient-text">{item.value}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
              {section.tokenomics.map((item: TokenomicsItem, i: number) => (
                <motion.div 
                  key={i} 
                  className="glass-effect p-4 sm:p-6 rounded-lg hover:scale-[1.02] transition-transform"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-3 gap-2">
                    <h4 className="text-lg sm:text-xl font-bold text-purple-300">{item.category}</h4>
                    <div className="text-left sm:text-right">
                      <div className="text-2xl sm:text-3xl font-black gradient-text">{item.percentage}%</div>
                      <div className="text-xs sm:text-sm text-gray-400">{item.amount} CPM</div>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm sm:text-base mb-3">{item.desc}</p>
                  <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${item.percentage}%` } : {}}
                      transition={{ duration: 1, delay: i * 0.1 + 0.3 }}
                      className="h-full bg-gradient-to-r from-purple-500 to-blue-500"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {section.team && (
            <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 mt-6">
              {section.team.map((member: TeamMember, i: number) => (
                <motion.div 
                  key={i} 
                  className="glass-effect p-4 sm:p-6 rounded-lg hover:scale-105 transition-transform"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <h4 className="text-lg sm:text-xl font-bold mb-2">{member.name}</h4>
                  <div className="text-purple-400 font-semibold mb-1 text-sm sm:text-base">{member.role}</div>
                  <div className="text-xs sm:text-sm text-gray-400 mb-3">🇺🇸 {member.nationality}</div>
                  <p className="text-xs sm:text-sm text-gray-300">{member.bio}</p>
                </motion.div>
              ))}
            </div>
          )}

          {section.roadmap && (
            <div className="space-y-3 sm:space-y-4 mt-6">
              {section.roadmap.map((item: RoadmapItem, i: number) => (
                <motion.div 
                  key={i} 
                  className="glass-effect p-4 sm:p-6 rounded-lg flex items-start gap-3 sm:gap-4 hover:scale-[1.02] transition-transform"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <motion.div 
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center flex-shrink-0 font-black text-white text-sm sm:text-base"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    Q{i + 1}
                  </motion.div>
                  <div className="flex-1">
                    <h4 className="text-base sm:text-lg font-bold text-purple-300 mb-2">{item.quarter}</h4>
                    <p className="text-gray-300 text-sm sm:text-base">{item.milestone}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}
