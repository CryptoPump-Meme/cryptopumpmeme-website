import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Palette, Megaphone, Brain } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function TeamSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const team = [
    {
      name: 'Ethan "CodeLord" Reeves',
      role: 'المؤسس التقني (CTO)',
      nationality: 'أمريكي',
      background: 'خبير بلوكشين و DeFi منذ 2016، مطوّر سابق في Chainlink',
      icon: Code,
      gradient: 'from-purple-500 to-blue-500',
    },
    {
      name: 'Maya "PumpQueen" Carter',
      role: 'المديرة الإبداعية',
      nationality: 'أمريكية',
      background: 'مصممة ميمز محترفة وناشطة في ثقافة Web3',
      icon: Palette,
      gradient: 'from-pink-500 to-purple-500',
    },
    {
      name: 'Zane "MetaWolf" Brooks',
      role: 'قائد التسويق',
      nationality: 'أمريكي',
      background: 'مختص في viral marketing، أدار حملات لعدة ميم كوينز',
      icon: Megaphone,
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      name: 'Dr. Logan "DataVortex" Hayes',
      role: 'مهندس الذكاء الاصطناعي',
      nationality: 'أمريكي',
      background: 'عالم بيانات، صمم أنظمة AI للتنبؤ بالترندات الرقمية',
      icon: Brain,
      gradient: 'from-green-500 to-emerald-500',
    },
  ];

  return (
    <section ref={ref} className="py-20 relative overflow-hidden bg-gradient-to-b from-purple-950/20 to-transparent">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-black mb-6">
            <span className="gradient-text">الفريق الأمريكي</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            فريق من النخبة يحمل خبرات عميقة في البلوكشين، الذكاء الاصطناعي، والتسويق الفيروسي
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Card className="glass-effect border-none h-full card-hover overflow-hidden">
                <div className={`h-2 bg-gradient-to-r ${member.gradient}`} />
                <CardHeader className="pb-4">
                  <div className="flex items-start gap-4">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${member.gradient} flex items-center justify-center flex-shrink-0`}>
                      <member.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl font-black mb-2 glitch">
                        {member.name}
                      </CardTitle>
                      <CardDescription className="text-lg font-semibold text-purple-400">
                        {member.role}
                      </CardDescription>
                      <div className="text-sm text-gray-400 mt-1">
                        🇺🇸 {member.nationality}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 leading-relaxed">{member.background}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Team Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 glass-effect p-8 rounded-3xl"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-black gradient-text mb-2">20+</div>
              <div className="text-sm text-gray-400">سنوات خبرة مجتمعة</div>
            </div>
            <div>
              <div className="text-4xl font-black gradient-text mb-2">50+</div>
              <div className="text-sm text-gray-400">مشاريع ناجحة</div>
            </div>
            <div>
              <div className="text-4xl font-black gradient-text mb-2">100%</div>
              <div className="text-sm text-gray-400">التزام بالشفافية</div>
            </div>
            <div>
              <div className="text-4xl font-black gradient-text mb-2">24/7</div>
              <div className="text-sm text-gray-400">دعم المجتمع</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}