import { motion } from 'framer-motion';
import { Twitter, Send, Github, TrendingUp } from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    { icon: Twitter, label: 'Twitter', href: 'https://twitter.com/cryptopumpmeme', gradient: 'from-blue-400 to-blue-600' },
    { icon: Send, label: 'Telegram', href: 'https://t.me/cryptopumpmemeofficial', gradient: 'from-blue-500 to-cyan-500' },
    { icon: Github, label: 'GitHub', href: 'https://github.com/CryptoPump-Meme', gradient: 'from-gray-600 to-gray-800' },
    { icon: TrendingUp, label: 'CoinMarketCap', href: 'https://coinmarketcap.com', gradient: 'from-green-500 to-emerald-600' },
  ];

  const links = {
    product: [
      { label: 'Vision', href: '#vision' },
      { label: 'Technology', href: '#technology' },
      { label: 'Tokenomics', href: '#tokenomics' },
      { label: 'Roadmap', href: '#roadmap' },
    ],
    resources: [
      { label: 'Whitepaper', href: 'https://www.cryptopump-meme.com/whitepaper' },
      { label: 'Documentation', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'FAQ', href: '#' },
    ],
    legal: [
      { label: 'Terms & Conditions', href: '#' },
      { label: 'Privacy Policy', href: '#' },
      { label: 'Disclaimer', href: '#' },
      { label: 'Contact Us', href: '#' },
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
                The Smart Pump Engine that unifies the power of memes, AI, and blockchain to create data-driven, community-powered digital pump waves.
              </p>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-12 h-12 rounded-full bg-gradient-to-br ${social.gradient} flex items-center justify-center hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300`}
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
            <h4 className="font-bold text-lg mb-4 text-purple-400">Product</h4>
            <ul className="space-y-3">
              {links.product.map((link, i) => (
                <li key={i}>
                  <a href={link.href} className="text-gray-400 hover:text-purple-400 transition-colors hover:translate-x-1 inline-block">
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
            <h4 className="font-bold text-lg mb-4 text-purple-400">Resources</h4>
            <ul className="space-y-3">
              {links.resources.map((link, i) => (
                <li key={i}>
                  <a href={link.href} className="text-gray-400 hover:text-purple-400 transition-colors hover:translate-x-1 inline-block">
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
            <h4 className="font-bold text-lg mb-4 text-purple-400">Legal</h4>
            <ul className="space-y-3">
              {links.legal.map((link, i) => (
                <li key={i}>
                  <a href={link.href} className="text-gray-400 hover:text-purple-400 transition-colors hover:translate-x-1 inline-block">
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
            <strong className="text-purple-400">Disclaimer:</strong> Investing in cryptocurrencies involves high risk. Please do your own research before investing. CPM is not financial advice.
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
            © 2025 Crypto Pump Meme. All rights reserved.
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
