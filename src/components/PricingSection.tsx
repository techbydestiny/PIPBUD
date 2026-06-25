'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, Sparkles } from 'lucide-react';

export default function PricingSection() {
  return (
    <section id="pricing" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-bold text-white mb-4 font-outfit"
          >
            Simple,
            <span className="text-gradient"> Transparent</span> Pricing
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {/* Free */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-8"
          >
            <div className="text-purple-400 font-semibold mb-2">Starter</div>
            <div className="text-5xl font-bold text-white mb-1 font-outfit">Free</div>
            <div className="text-gray-500 mb-6">Forever</div>
            
            <ul className="space-y-3 mb-8">
              {['Unlimited trades', 'AI trade validation', 'Basic analytics', 'Telegram integration', 'Voice notes'].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-gray-300 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            
            <a
              href="https://t.me/PipBudBot"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center border border-purple-500/30 text-purple-400 py-3 rounded-full font-medium hover:bg-purple-500/10 transition-all"
            >
              Get Started Free
            </a>
          </motion.div>

          {/* Pro */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass rounded-3xl p-8 border-purple-500/30 relative"
          >
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-purple-600 text-white px-4 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
              <Sparkles className="w-3 h-3" /> Coming Soon
            </div>
            
            <div className="text-purple-400 font-semibold mb-2">Pro</div>
            <div className="text-5xl font-bold text-white mb-1 font-outfit">$19</div>
            <div className="text-gray-500 mb-6">/month</div>
            
            <ul className="space-y-3 mb-8">
              {['Everything in Starter', 'Advanced analytics', 'Visual charts & reports', 'MT5/Binance sync', 'Email summaries'].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-gray-300 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-purple-400 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            
            <button className="block text-center bg-purple-600/50 text-white py-3 rounded-full font-medium cursor-not-allowed w-full">
              Coming Soon
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}