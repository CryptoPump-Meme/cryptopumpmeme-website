import { motion } from 'framer-motion';
import { Twitter, Send, MessageCircle, Github } from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    { icon: Twitter, label: 'Twitter', href: '#', gradient: 'from-blue-400 to-blue-600' },
    { icon: Send, label: 'Telegram', href: '#', gradient: 'from-blue-500 to-cyan-500' },
    { icon: MessageCircle, label: 'Discord', href: '#', gradient: 'from-purple-500 to-pink-500' },
    { icon: Github, label: 'GitHub', href: '#', gradient: 'from-gray-600 to-gray-800' },
  ];

  const links = {
    product: [
      { label: 'الرؤية', href: '#vision' },
      { label: 'التكنولوجيا', href: '#technology' },
      { label: 'Tokenomics', href: '#tokenomics' },
      { label: 'خارطة الطريق', href: '#roadmap' },
    ],
    resources: [
      { label: 'الورقة البيضاء', href: '#whitepaper' },
      { label: 'الوثائق', href: '#' },
      { label: 'المدونة', href: '#' },
      { label: 'الأسئلة الشائعة', href: '#' },
    ],
    legal: [
      { label: 'الشروط والأحكام', href: '#' },
      { label: 'سياسة الخصوصية', href: '#' },
      { label: 'إخلاء المسؤولية', href: '#' },
      { label: 'اتصل بنا', href: '#' },
    ],
  };

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-transparent to-purple-950/30 border-t border-purple-500/20">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-black mb-4">
                <span className="gradient-text">CPM</span>
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                محرك الضخّ الجماعي الذكي الذي يوحّد قوة الميمز، الذكاء الاصطناعي، والبلوكشين لإنشاء موجات ضخّ رقمية مدعومة بالبيانات والمجتمع.
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.href}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-12 h-12 rounded-full bg-gradient-to-br ${social.gradient} flex items-center justify-center hover:shadow-lg transition-shadow`}
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-white" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Links Columns */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-bold text-lg mb-4 text-purple-400">المنتج</h4>
            <ul className="space-y-3">
              {links.product.map((link, i) => (
                <li key={i}>
                  <a href={link.href} className="text-gray-400 hover:text-purple-400 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-bold text-lg mb-4 text-purple-400">الموارد</h4>
            <ul className="space-y-3">
              {links.resources.map((link, i) => (
                <li key={i}>
                  <a href={link.href} className="text-gray-400 hover:text-purple-400 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="font-bold text-lg mb-4 text-purple-400">قانوني</h4>
            <ul className="space-y-3">
              {links.legal.map((link, i) => (
                <li key={i}>
                  <a href={link.href} className="text-gray-400 hover:text-purple-400 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="glass-effect p-6 rounded-xl mb-8"
        >
          <p className="text-sm text-gray-400 text-center leading-relaxed">
            <strong className="text-purple-400">إخلاء المسؤولية:</strong> الاستثمار في العملات الرقمية ينطوي على مخاطر عالية. يرجى إجراء البحث الخاص بك قبل الاستثمار. CPM ليست نصيحة مالية.
          </p>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-purple-500/20 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-gray-400 text-sm">
            © 2025 Crypto Pump Meme. جميع الحقوق محفوظة.
          </p>
          <div className="flex items-center gap-4 text-sm text-gray-400">
            <span>Built on</span>
            <span className="font-bold text-purple-400">BASE</span>
            <span>+</span>
            <span className="font-bold text-blue-400">ETH</span>
          </div>
        </motion.div>
      </div>

      {/* Background Effects */}
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
    </footer>
  );
}