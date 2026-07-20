'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, MessageCircle, Zap, Sparkles } from 'lucide-react';

const faqs = [
  {
    q: 'What is PipBud?',
    a: 'PipBud is an AI-powered trading journal and coach that lives in Telegram. You log trades via screenshots, text, or voice, and PipBud analyzes your performance, validates future trades, and gives you personalized coaching.',
    category: 'General',
  },
  {
    q: 'Is PipBud really free?',
    a: 'Yes! The Starter plan is completely free forever. You get unlimited trades, AI validation, basic analytics, and Telegram integration. A Pro plan with advanced features is coming soon.',
    category: 'Pricing',
  },
  {
    q: 'How does the AI coaching work?',
    a: 'Before you enter a trade, send the details to PipBud. The AI checks it against your documented strategy, your historical performance, and your current psychological state. It gives you a GO/NO-GO signal with confidence score.',
    category: 'AI',
  },
  {
    q: 'Does PipBud work with MT5/Binance?',
    a: 'Yes! You can connect your MT5 or Binance account and PipBud will auto-import your trades. You can also upload broker statements in CSV or PDF format.',
    category: 'Integrations',
  },
  {
    q: 'What trading styles does PipBud support?',
    a: 'PipBud is built for SMC/ICT traders but works with any style. It recognizes setups like CHOCH, BOS, Order Blocks, FVG, Liquidity Sweeps, and more. You can customize your strategy rules.',
    category: 'Trading',
  },
  {
    q: 'How do I get started?',
    a: 'Just open Telegram and search for @PipBudBot. Send /start and you\'re ready to go! Set your strategy with /strategy, then send your first trade screenshot.',
    category: 'Getting Started',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="relative py-28 px-4 overflow-hidden bg-[#fcf9f6]">
      {/* Paper texture */}
      <div className="absolute inset-0 opacity-[0.015]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px',
        }} />
      </div>

      {/* Gradient blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-gradient-to-br from-purple-100/20 via-blue-100/10 to-transparent rounded-full blur-[150px]" />
        <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-gradient-to-tr from-purple-50/20 via-emerald-100/10 to-transparent rounded-full blur-[150px]" />
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-purple-100/50 rounded-full px-5 py-2 mb-6 shadow-[0_2px_20px_rgba(139,92,246,0.06)]"
          >
            <HelpCircle className="w-4 h-4 text-purple-500" />
            <span className="text-purple-700 text-sm font-medium tracking-wide">FAQ</span>
            <span className="w-px h-4 bg-purple-200/50" />
            <span className="flex items-center gap-1 text-gray-500 text-sm font-light">
              <MessageCircle className="w-3 h-3" />
              Got questions?
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-[1.05] tracking-tight"
          >
            <span className="text-[#1a1410] font-serif">
              Frequently Asked
            </span>
            <br />
            <span className="relative inline-block mt-2">
              <span className="relative z-10 bg-gradient-to-r from-purple-600 via-purple-500 to-purple-700 bg-clip-text text-transparent font-serif italic">
                Questions
              </span>
              <svg className="absolute -bottom-3 left-0 w-full h-3" viewBox="0 0 200 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 10C40 2 80 2 120 6C160 10 180 4 198 8" stroke="url(#faqGradient)" strokeWidth="3" strokeLinecap="round"/>
                <defs>
                  <linearGradient id="faqGradient" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#9333EA"/>
                    <stop offset="50%" stopColor="#7C3AED"/>
                    <stop offset="100%" stopColor="#6D28D9"/>
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto font-light"
          >
            Find answers to the most common questions about PipBud.
            <br className="hidden sm:block" />
            <span className="text-gray-500">Can't find what you're looking for? Reach out on Telegram.</span>
          </motion.p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              className="group relative bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-purple-100/30 hover:border-purple-200/50 transition-all duration-300 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_25px_rgba(139,92,246,0.06)]"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-purple-50/20 transition-colors duration-200"
              >
                <div className="flex items-center gap-3 pr-4">
                  {/* Category badge */}
                  <span className="hidden sm:inline-flex px-2.5 py-1 bg-purple-50/80 border border-purple-100/50 rounded-full text-[10px] font-medium text-purple-600 whitespace-nowrap">
                    {faq.category}
                  </span>
                  <span className="text-[#1a1410] font-medium text-sm sm:text-base">
                    {faq.q}
                  </span>
                </div>
                <ChevronDown 
                  className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-all duration-300 ${
                    openIndex === i ? 'rotate-180 text-purple-500' : 'group-hover:text-purple-400'
                  }`} 
                  strokeWidth={2}
                />
              </button>
              
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5 pt-0">
                      <div className="flex gap-3">
                        <div className="hidden sm:block w-0.5 bg-gradient-to-b from-purple-300 to-purple-100 rounded-full flex-shrink-0" />
                        <p className="text-gray-600 text-sm leading-relaxed font-light pl-0 sm:pl-1">
                          {faq.a}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex flex-wrap items-center justify-center gap-4 px-6 py-4 bg-white/60 backdrop-blur-sm rounded-full border border-purple-100/30">
            <span className="flex items-center gap-2 text-sm text-gray-600 font-light">
              <Sparkles className="w-4 h-4 text-purple-500" />
              Still have questions?
            </span>
            <div className="w-px h-6 bg-purple-200/50 hidden sm:block" />
            <a
              href="https://t.me/PipBudBot"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-purple-600 font-medium hover:text-purple-700 transition-colors group"
            >
              <MessageCircle className="w-4 h-4" />
              Ask us on Telegram
            </a>
          </div>
        </motion.div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#fcf9f6] via-[#fcf9f6]/80 to-transparent pointer-events-none" />
    </section>
  );
}