import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FileText, Download, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function WhitepaperSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const sections = [
    { title: 'Introduction & Vision', pages: 'Page 1', description: 'Philosophy of memes as economic and cultural power' },
    { title: 'Technology & AI', pages: 'Page 2', description: 'Explanation of Smart Pump Engine and how it works' },
    { title: 'Tokenomics', pages: 'Page 3', description: 'Detailed numbers and incentive system' },
    { title: 'Utilities', pages: 'Page 4', description: 'Detailed explanation of the five platforms' },
    { title: 'Roadmap', pages: 'Page 5', description: 'Timeline from Q1 to Q4' },
    { title: 'Team & Future Vision', pages: 'Page 6', description: 'Team details and future partnerships' },
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
            <span className="gradient-text">Whitepaper</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Comprehensive document explaining all details of Crypto Pump Meme project with complete transparency
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold text-lg px-8 py-6"
            >
              <Download className="mr-2 w-5 h-5" />
              Download Whitepaper (PDF)
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-purple-500 text-purple-300 hover:bg-purple-500/20 font-bold text-lg px-8 py-6"
            >
              <Eye className="mr-2 w-5 h-5" />
              Quick Preview
            </Button>
          </div>
        </motion.div>

        {/* Whitepaper Preview */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-effect p-8 rounded-3xl mb-12"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
              <FileText className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-black">Whitepaper Contents</h3>
              <p className="text-gray-400">6 pages of detailed information</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card className="glass-effect border-purple-500/30 h-full card-hover">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0 font-black text-white">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-lg mb-1">{section.title}</h4>
                        <p className="text-sm text-purple-400 mb-2">{section.pages}</p>
                        <p className="text-sm text-gray-400">{section.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Key Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid md:grid-cols-3 gap-6"
        >
          {[
            {
              title: 'Full Transparency',
              description: 'All technical and financial details clearly documented',
              gradient: 'from-purple-500 to-pink-500',
            },
            {
              title: 'Expert Audited',
              description: 'Reviewed by blockchain and AI specialists',
              gradient: 'from-blue-500 to-cyan-500',
            },
            {
              title: 'Regular Updates',
              description: 'Whitepaper updated as project evolves',
              gradient: 'from-green-500 to-emerald-500',
            },
          ].map((highlight, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
              className="glass-effect p-6 rounded-xl text-center"
            >
              <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${highlight.gradient} mx-auto mb-4`} />
              <h4 className="text-lg font-bold mb-2">{highlight.title}</h4>
              <p className="text-sm text-gray-400">{highlight.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}