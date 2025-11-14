import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { PieChart, TrendingUp, Users, Rocket } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function TokenomicsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const tokenomics = [
    {
      title: 'تطوير المشروع',
      percentage: 40,
      amount: '160,000,000,000',
      description: 'تمويل التكنولوجيا، السيرفرات، الذكاء الاصطناعي، العقود الذكية',
      color: 'from-purple-500 to-pink-500',
      icon: Rocket,
    },
    {
      title: 'هدايا المجتمع',
      percentage: 25,
      amount: '100,000,000,000',
      description: 'مسابقات، تحديات، Rewards داخل Meme-to-Earn',
      color: 'from-blue-500 to-cyan-500',
      icon: Users,
    },
    {
      title: 'Airdrop',
      percentage: 30,
      amount: '120,000,000,000',
      description: 'توسيع القاعدة الجماهيرية العالمية',
      color: 'from-green-500 to-emerald-500',
      icon: TrendingUp,
    },
    {
      title: 'الفريق',
      percentage: 5,
      amount: '20,000,000,000',
      description: 'رواتب وتحفيزات الفريق الأمريكي',
      color: 'from-orange-500 to-red-500',
      icon: PieChart,
    },
  ];

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
            <span className="gradient-text">الاقتصاد (Tokenomics)</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            توزيع شفاف وعادل لـ 400 مليار CPM عبر Smart Contracts مدققة
          </p>
          <div className="inline-flex items-center gap-4 glass-effect px-6 py-3 rounded-full">
            <span className="text-sm text-gray-400">الرمز:</span>
            <span className="text-2xl font-black gradient-text">CPM</span>
            <span className="text-sm text-gray-400">|</span>
            <span className="text-sm text-gray-400">الإجمالي:</span>
            <span className="text-xl font-bold text-purple-400">400,000,000,000</span>
          </div>
        </motion.div>

        {/* Tokenomics Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {tokenomics.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="glass-effect border-none h-full card-hover">
                <CardContent className="p-6">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 mx-auto`}>
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-center mb-2">{item.title}</h3>
                  <div className="text-center mb-4">
                    <div className={`text-4xl font-black bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                      {item.percentage}%
                    </div>
                    <div className="text-sm text-gray-400 mt-1">{item.amount} CPM</div>
                  </div>
                  <p className="text-sm text-gray-300 text-center leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Visual Distribution */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="glass-effect p-8 rounded-3xl"
        >
          <h3 className="text-2xl font-bold text-center mb-8">التوزيع البصري</h3>
          <div className="flex flex-col gap-4">
            {tokenomics.map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-semibold">{item.title}</span>
                  <span className="text-gray-400">{item.percentage}%</span>
                </div>
                <div className="h-4 bg-gray-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${item.percentage}%` } : {}}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className={`h-full bg-gradient-to-r ${item.color} rounded-full`}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 grid md:grid-cols-3 gap-6"
        >
          {[
            { title: 'شفافية كاملة', description: 'جميع المعاملات على البلوكشين' },
            { title: 'تدقيق CertiK', description: 'عقود ذكية مدققة من أفضل الشركات' },
            { title: 'توزيع عادل', description: 'لا توجد تخصيصات خفية أو احتيالية' },
          ].map((feature, i) => (
            <div key={i} className="glass-effect p-6 rounded-xl text-center">
              <h4 className="text-lg font-bold mb-2 gradient-text">{feature.title}</h4>
              <p className="text-sm text-gray-400">{feature.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}