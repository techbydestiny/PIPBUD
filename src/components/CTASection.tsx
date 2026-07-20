'use client';

import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle, Sparkles, Zap, Users, TrendingUp, Shield } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="relative py-28 px-4 overflow-hidden bg-[#fcf9f6]">
      {/* Paper texture */}
      <div className="absolute inset-0 opacity-[0.015]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px',
        }} />
      </div>

      {/* Gradient blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-gradient-to-br from-purple-100/30 via-blue-100/10 to-transparent rounded-full blur-[150px]" />
        <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-gradient-to-tr from-purple-50/30 via-emerald-100/10 to-transparent rounded-full blur-[150px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-100/10 to-blue-100/5 rounded-full blur-[200px]" />
      </div>

      <div className="relative max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-12 sm:p-16 border border-purple-100/30 shadow-[0_8px_50px_rgba(139,92,246,0.06)] hover:shadow-[0_12px_60px_rgba(139,92,246,0.08)] transition-all duration-500"
        >
          {/* Decorative elements */}
          <div className="absolute -top-1 -left-1 w-20 h-20 border-t-2 border-l-2 border-purple-200/30 rounded-tl-3xl opacity-50" />
          <div className="absolute -bottom-1 -right-1 w-20 h-20 border-b-2 border-r-2 border-purple-200/30 rounded-br-3xl opacity-50" />
          
          {/* Floating sparkles */}
          <motion.div
            animate={{ 
              y: [0, -10, 0],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-8 right-12 text-purple-300/30 hidden sm:block"
          >
            <Sparkles className="w-8 h-8" />
          </motion.div>
          
          <motion.div
            animate={{ 
              y: [0, 10, 0],
              rotate: [0, -5, 5, 0]
            }}
            transition={{ 
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            className="absolute bottom-12 left-8 text-purple-300/20 hidden sm:block"
          >
            <Sparkles className="w-6 h-6" />
          </motion.div>

          {/* Icon with gradient background */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ 
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: 0.2
            }}
            className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-100 to-purple-200/50 flex items-center justify-center mx-auto mb-6 shadow-[0_4px_20px_rgba(139,92,246,0.08)]"
          >
            <Sparkles className="w-10 h-10 text-purple-600" strokeWidth={1.5} />
          </motion.div>
          
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 leading-[1.05] tracking-tight"
          >
            <span className="text-[#1a1410] font-serif">
              Ready to Trade
            </span>
            <br />
            <span className="relative inline-block mt-2">
              <span className="relative z-10 bg-gradient-to-r from-purple-600 via-purple-500 to-purple-700 bg-clip-text text-transparent font-serif italic">
                Smarter?
              </span>
              <svg className="absolute -bottom-3 left-0 w-full h-3" viewBox="0 0 200 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 10C40 2 80 2 120 6C160 10 180 4 198 8" stroke="url(#ctaGradient)" strokeWidth="3" strokeLinecap="round"/>
                <defs>
                  <linearGradient id="ctaGradient" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#9333EA"/>
                    <stop offset="50%" stopColor="#7C3AED"/>
                    <stop offset="100%" stopColor="#6D28D9"/>
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </motion.h2>
          
          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 mb-8 max-w-xl mx-auto font-light"
          >
            Join <span className="font-medium text-[#1a1410]">500+ traders</span> using PipBud to journal, analyze, and improve their trading. 
            Start free on Telegram today.
          </motion.p>
          
          {/* Social proof mini-stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="flex flex-wrap items-center justify-center gap-6 mb-8"
          >
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-purple-500" />
              <span className="text-sm text-gray-600 font-light">500+ Active Traders</span>
            </div>
            <div className="w-px h-4 bg-purple-200/50 hidden sm:block" />
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-emerald-500" />
              <span className="text-sm text-gray-600 font-light">67% Avg. Improvement</span>
            </div>
            <div className="w-px h-4 bg-purple-200/50 hidden sm:block" />
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-purple-500" />
              <span className="text-sm text-gray-600 font-light">100% Free Forever</span>
            </div>
          </motion.div>
          
          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <a
              href="https://t.me/PipBudBot"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 via-purple-500 to-purple-700 text-white px-12 py-5 rounded-full text-lg font-medium transition-all duration-300 shadow-[0_8px_30px_rgba(139,92,246,0.3)] hover:shadow-[0_12px_40px_rgba(139,92,246,0.4)] hover:-translate-y-1 active:translate-y-0 overflow-hidden"
            >
              {/* Animated shine */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              
              <span className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
              
              <MessageCircle className="w-6 h-6 relative z-10" />
              <span className="relative z-10">Start Free on Telegram</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300 relative z-10" />
            </a>
          </motion.div>
          
          {/* Bottom text */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-gray-500 text-sm mt-4 font-light flex items-center justify-center gap-2"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            No credit card required • Join 500+ traders
          </motion.p>
        </motion.div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#fcf9f6] via-[#fcf9f6]/80 to-transparent pointer-events-none" />
    </section>
  );
}