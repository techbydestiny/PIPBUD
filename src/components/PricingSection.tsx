'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, Sparkles, Zap, Crown, ArrowRight, Clock, Star, Shield, Layers } from 'lucide-react';

export default function PricingSection() {
  return (
    <section id="pricing" className="relative py-28 px-4 overflow-hidden bg-[#fcf9f6]">
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

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-purple-100/50 rounded-full px-5 py-2 mb-6 shadow-[0_2px_20px_rgba(139,92,246,0.06)]"
          >
            <Crown className="w-4 h-4 text-purple-500" />
            <span className="text-purple-700 text-sm font-medium tracking-wide">Pricing</span>
            <span className="w-px h-4 bg-purple-200/50" />
            <span className="flex items-center gap-1 text-gray-500 text-sm font-light">
              <Sparkles className="w-3 h-3" />
              Free to start
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
              Simple,
            </span>
            <br />
            <span className="relative inline-block mt-2">
              <span className="relative z-10 bg-gradient-to-r from-purple-600 via-purple-500 to-purple-700 bg-clip-text text-transparent font-serif italic">
                Transparent Pricing
              </span>
              <svg className="absolute -bottom-3 left-0 w-full h-3" viewBox="0 0 200 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 10C40 2 80 2 120 6C160 10 180 4 198 8" stroke="url(#pricingGradient)" strokeWidth="3" strokeLinecap="round"/>
                <defs>
                  <linearGradient id="pricingGradient" x1="0" y1="0" x2="1" y2="0">
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
            Start for free and upgrade when you need more. No hidden fees, no credit card required.
          </motion.p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          {/* Free Plan */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group relative bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-purple-100/30 hover:border-purple-200/50 transition-all duration-500 hover:-translate-y-2 shadow-[0_2px_15px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgba(139,92,246,0.08)]"
          >
            {/* Decorative top bar */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-gradient-to-r from-transparent via-purple-300 to-transparent group-hover:w-20 transition-all duration-500" />
            
            <div className="p-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50/80 border border-emerald-200/30 rounded-full text-xs font-medium text-emerald-700 mb-4">
                <Zap className="w-3 h-3" />
                Best for Starters
              </div>
              
              <div className="text-purple-600 font-semibold text-sm tracking-wide mb-1">Starter</div>
              <div className="flex items-end gap-2 mb-1">
                <span className="text-5xl font-bold text-[#1a1410] font-serif">Free</span>
                <span className="text-gray-400 text-sm font-light mb-1">forever</span>
              </div>
              <p className="text-gray-500 text-sm font-light mb-6">Everything you need to start trading smarter</p>
              
              <ul className="space-y-3 mb-8">
                {[
                  'Unlimited trade journaling',
                  'AI trade validation',
                  'Basic analytics dashboard',
                  'Telegram integration',
                  'Voice notes & screenshots',
                  'Psychology detection',
                ].map((item, i) => (
                  <motion.li 
                    key={i} 
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-center gap-3 text-gray-700 text-sm font-light"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" strokeWidth={2} />
                    {item}
                  </motion.li>
                ))}
              </ul>
              
              <a
                href="https://t.me/PipBudBot"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-2 w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 py-3.5 rounded-full text-sm font-medium transition-all duration-300 shadow-[0_4px_20px_rgba(139,92,246,0.2)] hover:shadow-[0_8px_30px_rgba(139,92,246,0.3)] hover:-translate-y-0.5 overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <span className="relative z-10">Get Started Free</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform relative z-10" />
              </a>
            </div>
          </motion.div>

          {/* Pro Plan */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="group relative bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden border-2 border-purple-300/50 hover:border-purple-400/70 transition-all duration-500 hover:-translate-y-2 shadow-[0_4px_25px_rgba(139,92,246,0.08)] hover:shadow-[0_16px_50px_rgba(139,92,246,0.12)]"
          >
            {/* Decorative top bar */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-0.5 bg-gradient-to-r from-transparent via-purple-500 to-transparent group-hover:w-24 transition-all duration-500" />
            
            {/* Coming Soon Badge */}
            <div className="absolute -top-3 right-6 bg-gradient-to-r from-purple-600 to-purple-700 text-white px-4 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 shadow-[0_4px_15px_rgba(139,92,246,0.3)]">
              <Sparkles className="w-3 h-3" />
              Coming Soon
            </div>
            
            <div className="p-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-purple-50/80 border border-purple-200/30 rounded-full text-xs font-medium text-purple-700 mb-4">
                <Crown className="w-3 h-3" />
                Best for Professionals
              </div>
              
              <div className="text-purple-600 font-semibold text-sm tracking-wide mb-1">Pro</div>
              <div className="flex items-end gap-2 mb-1">
                <span className="text-5xl font-bold text-[#1a1410] font-serif">$19</span>
                <span className="text-gray-400 text-sm font-light mb-1">/month</span>
              </div>
              <p className="text-gray-500 text-sm font-light mb-6">Advanced features for serious traders</p>
              
              <ul className="space-y-3 mb-8">
                {[
                  'Everything in Starter',
                  'Advanced analytics & charts',
                  'Interactive dashboards',
                  'MT5 & Binance sync',
                  'Email performance summaries',
                  'Priority support',
                ].map((item, i) => (
                  <motion.li 
                    key={i} 
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 + 0.1 }}
                    className="flex items-center gap-3 text-gray-700 text-sm font-light"
                  >
                    <CheckCircle2 className="w-4 h-4 text-purple-500 flex-shrink-0" strokeWidth={2} />
                    {item}
                  </motion.li>
                ))}
              </ul>
              
              <button 
                disabled
                className="w-full bg-gray-100/80 text-gray-400 px-6 py-3.5 rounded-full text-sm font-medium cursor-not-allowed border border-gray-200/50"
              >
                <span className="flex items-center justify-center gap-2">
                  <Clock className="w-4 h-4" />
                  Coming Soon
                </span>
              </button>
            </div>
          </motion.div>
        </div>

        {/* Feature Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-wrap items-center justify-center gap-6 px-8 py-4 bg-white/60 backdrop-blur-sm rounded-full border border-purple-100/30">
            <span className="flex items-center gap-2 text-sm text-gray-600 font-light">
              <Shield className="w-4 h-4 text-purple-500" />
              No credit card required
            </span>
            <span className="w-px h-6 bg-purple-200/50 hidden sm:block" />
            <span className="flex items-center gap-2 text-sm text-gray-600 font-light">
              <Layers className="w-4 h-4 text-purple-500" />
              Cancel anytime
            </span>
            <span className="w-px h-6 bg-purple-200/50 hidden sm:block" />
            <span className="flex items-center gap-2 text-sm text-gray-600 font-light">
              <Star className="w-4 h-4 text-purple-500" />
              Free forever plan included
            </span>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-500 text-sm font-light">
            Start your journey to better trading today. ✦ Join 500+ traders already using PipBud
          </p>
        </motion.div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#fcf9f6] via-[#fcf9f6]/80 to-transparent pointer-events-none" />
    </section>
  );
}