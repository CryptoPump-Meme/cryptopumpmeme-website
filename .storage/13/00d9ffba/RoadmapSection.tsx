import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Rocket, Zap, Brain, Globe } from 'lucide-react';

export default function RoadmapSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const roadmap = [
    {
      quarter: 'Q1 2025',
      title: 'الإطلاق والبنية التحتية',
      icon: Rocket,
      items: [
        'إطلاق العقد الذكي على BASE و ETH',
        'إطلاق الموقع الرسمي والمنصات',
        'بناء المجتمع الأولي',
        'إطلاق حملة التسويق الأولى',
      ],
      gradient: 'from-purple-500 to-pink-500',
      status: 'active',
    },
    {
      quarter: 'Q2 2025',
      title: 'التوسع والـ Airdrop',
      icon: Zap,
      items: [
        'إطلاق Airdrop عالمي ضخم',
        'دخول أول Pump Event جماعي',
        'إطلاق منصة Meme-to-Earn',
        'شراكات مع منصات التواصل الاجتماعي',
      ],
      gradient: 'from-blue-500 to-cyan-500',
      status: 'upcoming',
    },
    {
      quarter: 'Q3 2025',
      title: 'الذكاء الاصطناعي والـ NFT',
      icon: Brain,
      items: [
        'إطلاق CPM AI Pump Engine',
        'إطلاق NFT Meme Arsenal',
        'إطلاق DeFi Pump Hub',
        'تدقيق CertiK للعقود الذكية',
      ],
      gradient: 'from-green-500 to-emerald-500',
      status: 'upcoming',
    },
    {
      quarter: 'Q4 2025',
      title: 'الميتافيرس والتوسع العالمي',
      icon: Globe,
      items: [
        'إطلاق CPM VR World',
        'فعاليات ضخ افتراضية في الميتافيرس',
        'التوسع إلى بورصات عالمية',
        'شراكات استراتيجية مع شركات Web3',
      ],
      gradient: 'from-orange-500 to-red-500',
      status: 'upcoming',
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
            <span className="gradient-text">خارطة الطريق</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            رحلة طموحة نحو بناء أول نظام Meme Pump ذكي عالمي
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute right-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 via-blue-500 to-green-500" />

          <div className="space-y-12">
            {roadmap.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative grid lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 0 ? '' : 'lg:grid-flow-dense'
                }`}
              >
                {/* Timeline Dot */}
                <div className="hidden lg:block absolute right-1/2 top-1/2 transform translate-x-1/2 -translate-y-1/2">
                  <motion.div
                    animate={phase.status === 'active' ? { scale: [1, 1.2, 1] } : {}}
                    transition={{ duration: 2, repeat: Infinity }}
                    className={`w-6 h-6 rounded-full bg-gradient-to-br ${phase.gradient} border-4 border-background`}
                  />
                </div>

                {/* Content */}
                <div className={index % 2 === 0 ? 'lg:text-left' : 'lg:text-right lg:col-start-2'}>
                  <div className="glass-effect p-8 rounded-3xl card-hover">
                    <div className={`inline-flex items-center gap-3 mb-4 ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}>
                      <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${phase.gradient} flex items-center justify-center`}>
                        <phase.icon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-400">{phase.quarter}</div>
                        <h3 className="text-2xl font-black">{phase.title}</h3>
                      </div>
                    </div>

                    <ul className={`space-y-3 ${index % 2 === 0 ? '' : 'lg:text-right'}`}>
                      {phase.items.map((item, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.4, delay: index * 0.2 + i * 0.1 }}
                          className="flex items-start gap-3"
                        >
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-br ${phase.gradient} mt-2 flex-shrink-0`} />
                          <span className="text-gray-300">{item}</span>
                        </motion.li>
                      ))}
                    </ul>

                    {phase.status === 'active' && (
                      <div className="mt-4">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/20 text-green-400 text-sm font-semibold">
                          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                          قيد التنفيذ
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Future Vision */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 glass-effect p-12 rounded-3xl text-center border-2 border-purple-500/30"
        >
          <h3 className="text-3xl font-black mb-4 gradient-text">الرؤية المستقبلية</h3>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            نسعى لجعل CPM المعيار العالمي للميمز الذكية، حيث تلتقي التكنولوجيا بالثقافة الشعبية لخلق اقتصاد رقمي جديد يعتمد على الإبداع والمجتمع
          </p>
        </motion.div>
      </div>
    </section>
  );
}