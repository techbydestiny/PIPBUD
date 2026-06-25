'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Alex T.',
    handle: '@alextradesfx',
    text: 'PipBud caught my revenge trading pattern. My win rate went from 45% to 67% in 2 months. The AI coach is incredible.',
    rating: 5,
  },
  {
    name: 'Sarah M.',
    handle: '@sarahfxtrader',
    text: 'Finally a journal I actually use. Sending screenshots to Telegram is so easy. The analytics showed me my best setup is BOS on EU.',
    rating: 5,
  },
  {
    name: 'Marcus D.',
    handle: '@propfirm_marcus',
    text: 'Used PipBud to pass my prop firm challenge. The risk management alerts saved me from breaking rules multiple times.',
    rating: 5,
  },
  {
    name: 'James K.',
    handle: '@jk_trading',
    text: 'The GO/NO-GO signal before entries is a game changer. It stopped me from taking so many bad trades.',
    rating: 5,
  },
  {
    name: 'Elena R.',
    handle: '@elenafxtrades',
    text: 'Voice notes feature is amazing. I just speak my trade and PipBud logs everything. Saves so much time.',
    rating: 5,
  },
  {
    name: 'David L.',
    handle: '@davidfx_',
    text: 'Connected my MT5 and all trades auto-import. The weekly reports are like having a professional coach.',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-bold text-white mb-4 font-outfit"
          >
            Loved by
            <span className="text-gradient"> Traders</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gray-400 text-lg"
          >
            Join hundreds of traders improving with PipBud
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass rounded-2xl p-6"
            >
              <div className="flex gap-1 mb-3">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                ))}
              </div>
              <p className="text-gray-300 text-sm mb-4 leading-relaxed">"{t.text}"</p>
              <div>
                <div className="text-white font-semibold text-sm">{t.name}</div>
                <div className="text-gray-500 text-xs">{t.handle}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}