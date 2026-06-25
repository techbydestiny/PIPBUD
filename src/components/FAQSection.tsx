'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'What is PipBud?',
    a: 'PipBud is an AI-powered trading journal and coach that lives in Telegram. You log trades via screenshots, text, or voice, and PipBud analyzes your performance, validates future trades, and gives you personalized coaching.',
  },
  {
    q: 'Is PipBud really free?',
    a: 'Yes! The Starter plan is completely free forever. You get unlimited trades, AI validation, basic analytics, and Telegram integration. A Pro plan with advanced features is coming soon.',
  },
  {
    q: 'How does the AI coaching work?',
    a: 'Before you enter a trade, send the details to PipBud. The AI checks it against your documented strategy, your historical performance, and your current psychological state. It gives you a GO/NO-GO signal with confidence score.',
  },
  {
    q: 'Does PipBud work with MT5/Binance?',
    a: 'Yes! You can connect your MT5 or Binance account and PipBud will auto-import your trades. You can also upload broker statements in CSV or PDF format.',
  },
  {
    q: 'What trading styles does PipBud support?',
    a: 'PipBud is built for SMC/ICT traders but works with any style. It recognizes setups like CHOCH, BOS, Order Blocks, FVG, Liquidity Sweeps, and more. You can customize your strategy rules.',
  },
  {
    q: 'How do I get started?',
    a: 'Just open Telegram and search for @PipBudBot. Send /start and you\'re ready to go! Set your strategy with /strategy, then send your first trade screenshot.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-bold text-white mb-4 font-outfit"
          >
            Frequently Asked
            <span className="text-gradient"> Questions</span>
          </motion.h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className="text-white font-medium pr-4">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform ${openIndex === i ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 text-gray-400 text-sm leading-relaxed">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}