'use client';

import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle, Sparkles, Zap, Activity, Users, Heart, TrendingUp, Brain, BarChart3, Camera, Bot, LineChart } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 pt-20 overflow-hidden bg-[#fcf9f6]">
      {/* Paper texture - more refined */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px',
        }} />
      </div>

      {/* Elegant purple gradients - more dimensional */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[800px] h-[800px] bg-gradient-to-br from-purple-100/20 via-purple-200/10 to-transparent rounded-full blur-[150px]" />
        <div className="absolute -bottom-40 -left-40 w-[700px] h-[700px] bg-gradient-to-tr from-purple-50/30 via-purple-100/20 to-transparent rounded-full blur-[150px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-r from-purple-100/5 to-purple-300/5 rounded-full blur-[200px]" />
      </div>

      <div className="relative max-w-6xl mx-auto text-center z-10">
        {/* Premium badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-3 bg-white/90 backdrop-blur-sm border border-purple-100/50 rounded-full px-5 py-2.5 mb-12 shadow-[0_2px_20px_rgba(139,92,246,0.06)]"
        >
          <div className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-purple-500"></span>
          </div>
          <span className="text-purple-700 text-sm font-medium tracking-wide">AI-Powered Trading Journal</span>
          <span className="w-px h-5 bg-gradient-to-b from-transparent via-purple-200 to-transparent" />
          <span className="text-gray-500 text-sm font-light">Free on Telegram</span>
          <span className="px-2.5 py-0.5 bg-gradient-to-r from-purple-50 to-purple-100/50 text-purple-600 text-xs font-medium rounded-full border border-purple-200/30">
            Beta
          </span>
        </motion.div>

        {/* Main heading - sophisticated typography */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.7 }}
        >
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold mb-8 leading-[0.95] tracking-tight">
            <span className="text-[#1a1410] font-serif">
              Trade Smarter
            </span>
            <br />
            <span className="relative inline-block mt-2">
              <span className="relative z-10 bg-gradient-to-r from-purple-600 via-purple-500 to-purple-700 bg-clip-text text-transparent font-serif italic">
                with AI
              </span>
              {/* Decorative underline */}
              <svg className="absolute -bottom-3 left-0 w-full h-3" viewBox="0 0 200 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 10C40 2 80 2 120 6C160 10 180 4 198 8" stroke="url(#purpleGradient)" strokeWidth="3" strokeLinecap="round"/>
                <defs>
                  <linearGradient id="purpleGradient" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#9333EA"/>
                    <stop offset="50%" stopColor="#7C3AED"/>
                    <stop offset="100%" stopColor="#6D28D9"/>
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h1>
        </motion.div>

        {/* Subtitle - elegant */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto mb-14 leading-relaxed font-light tracking-wide"
        >
          PipBud is your AI-powered trading companion on Telegram.
          <br className="hidden sm:block" />
          <span className="text-gray-500">Log trades via screenshots, get real-time AI coaching,</span>
          <br className="hidden sm:block" />
          <span className="text-gray-500">and watch your performance soar with beautiful analytics.</span>
        </motion.p>

        {/* CTA Buttons - premium */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5"
        >
          <a
            href="https://t.me/PipBudBot"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 via-purple-500 to-purple-700 text-white px-10 py-4.5 rounded-full text-lg font-medium transition-all duration-300 shadow-[0_8px_30px_rgba(139,92,246,0.3)] hover:shadow-[0_12px_40px_rgba(139,92,246,0.4)] hover:-translate-y-1 active:translate-y-0 overflow-hidden"
          >
            {/* Animated shine */}
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            <MessageCircle className="w-5 h-5 relative z-10" />
            <span className="relative z-10">Start Free on Telegram</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300 relative z-10" />
          </a>
          <a
            href="#features"
            className="group inline-flex items-center gap-2 px-10 py-4.5 rounded-full text-lg font-medium text-gray-700 bg-white/80 backdrop-blur-sm border border-gray-200/50 hover:border-purple-200 hover:bg-purple-50/30 transition-all duration-300 hover:-translate-y-1 shadow-[0_2px_15px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_25px_rgba(139,92,246,0.08)]"
          >
            <span>Explore Features</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300 opacity-60 group-hover:opacity-100" />
          </a>
        </motion.div>

        {/* Stats - premium card design */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-24 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          {[
            { 
              value: '10K+', 
              label: 'Trades Analyzed', 
              icon: Activity,
              description: 'And counting',
              gradient: 'from-purple-50 to-purple-100/30',
              iconBg: 'bg-purple-100'
            },
            { 
              value: '500+', 
              label: 'Active Traders', 
              icon: Users,
              description: 'Growing daily',
              gradient: 'from-purple-50/50 to-purple-100/20',
              iconBg: 'bg-purple-100/80'
            },
            { 
              value: '100%', 
              label: 'Free Forever', 
              icon: Heart,
              description: 'No hidden fees',
              gradient: 'from-purple-50 to-purple-100/40',
              iconBg: 'bg-purple-100/60'
            },
          ].map((stat, i) => (
            <motion.div 
              key={i} 
              className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 text-center border border-purple-100/30 hover:border-purple-200/50 transition-all duration-500 hover:-translate-y-2 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgba(139,92,246,0.08)]"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {/* Decorative top bar */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-gradient-to-r from-transparent via-purple-300 to-transparent group-hover:w-20 transition-all duration-500" />
              
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${stat.iconBg} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className="w-6 h-6 text-purple-600" strokeWidth={1.5} />
              </div>
              <div className="text-4xl font-bold text-[#1a1410] tracking-tight font-serif">{stat.value}</div>
              <div className="text-sm font-medium text-gray-700 mt-1.5">{stat.label}</div>
              <div className="text-xs text-gray-400 mt-1 font-light">{stat.description}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Feature pills - refined */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-3"
        >
          {[
            { icon: Bot, label: 'Real-time AI coaching' },
            { icon: Camera, label: 'Screenshot analysis' },
            { icon: LineChart, label: 'Performance analytics' },
          ].map((feature, i) => (
            <span 
              key={i}
              className="flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-purple-100/30 text-sm text-gray-600 font-light"
            >
              <feature.icon className="w-3.5 h-3.5 text-purple-500" />
              {feature.label}
            </span>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 1 }}
          className="absolute -bottom-24 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400"
        >
          <span className="text-xs font-light tracking-widest uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-purple-300 to-transparent" />
        </motion.div>
      </div>

      {/* Decorative corner elements */}
      <div className="absolute top-20 right-20 w-32 h-32 border border-purple-100/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-40 h-40 border border-purple-100/10 rounded-full blur-3xl" />

      {/* Bottom gradient fade - paper edge effect */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#fcf9f6] via-[#fcf9f6]/80 to-transparent pointer-events-none" />
    </section>
  );
}