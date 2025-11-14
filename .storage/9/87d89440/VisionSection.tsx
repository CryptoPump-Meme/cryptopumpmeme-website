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
            <span className="gradient-text">الرؤية والفلسفة</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            تحويل طاقة الميمز من "ضحك" إلى قوة اقتصادية من خلال نظام تكنولوجي مبني على الذكاء الاصطناعي
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Brain,
              title: 'ذكاء اصطناعي متقدم',
              description: 'نظام AI يتوقع الترندات ويحلل المشاعر في الوقت الفعلي عبر جميع المنصات الاجتماعية',
              color: 'from-purple-500 to-pink-500',
            },
            {
              icon: Target,
              title: 'ضخّ ذكي مستهدف',
              description: 'محرك ضخّ جماعي يعتمد على البيانات والتحليل السلوكي لتحقيق نتائج مضمونة',
              color: 'from-blue-500 to-cyan-500',
            },
            {
              icon: Sparkles,
              title: 'مجتمع قوي',
              description: 'نظام Meme-to-Earn يحفّز المجتمع على المشاركة والإبداع مع مكافآت فورية',
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
              "الميمز ليست مجرد صور مضحكة، إنها لغة عالمية جديدة تحرك الأسواق وتصنع التاريخ"
            </p>
            <footer className="text-gray-400 text-lg">- فريق Crypto Pump Meme</footer>
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}