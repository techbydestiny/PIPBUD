'use client';

import { motion } from 'framer-motion';
import { 
  Sparkles, ArrowRight, MessageCircle, Bot, Brain, 
  BarChart3, Shield, Zap, ChevronRight, Camera, LineChart, Clock 
} from 'lucide-react';

const capabilities = [
  {
    icon: Bot,
    title: 'Trade Journaling',
    description: 'Log trades via screenshots, text, or voice in seconds.',
    gradient: 'from-purple-50 to-purple-100/30',
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-600',
    borderColor: 'border-purple-200/30',
  },
  {
    icon: Brain,
    title: 'AI Validation',
    description: 'Get GO/NO-GO signals before risking capital.',
    gradient: 'from-blue-50 to-blue-100/30',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
    borderColor: 'border-blue-200/30',
  },
  {
    icon: Shield,
    title: 'Psychology Detection',
    description: 'Identify tilt, FOMO, and revenge trading patterns.',
    gradient: 'from-amber-50 to-amber-100/30',
    iconBg: 'bg-amber-100',
    iconColor: 'text-amber-600',
    borderColor: 'border-amber-200/30',
  },
  {
    icon: BarChart3,
    title: 'Performance Analytics',
    description: 'Professional charts that reveal your true edge.',
    gradient: 'from-emerald-50 to-emerald-100/30',
    iconBg: 'bg-emerald-100',
    iconColor: 'text-emerald-600',
    borderColor: 'border-emerald-200/30',
  },
];

const features = [
  { icon: Camera, label: 'Screenshot Analysis' },
  { icon: LineChart, label: 'Professional Charts' },
  { icon: Clock, label: 'Real-time Feedback' },
];

export default function SolutionSection() {
  return (
    <section className="relative py-28 px-4 overflow-hidden bg-[#fcf9f6]">
      {/* Paper texture overlay */}
      <div className="absolute inset-0 opacity-[0.015]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px',
        }} />
      </div>

      {/* Decorative gradient blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-gradient-to-br from-purple-100/20 via-blue-100/10 to-transparent rounded-full blur-[150px]" />
        <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-gradient-to-tr from-purple-50/20 via-emerald-100/10 to-transparent rounded-full blur-[150px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-100/5 to-blue-100/5 rounded-full blur-[200px]" />
      </div>
      
      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-purple-100/50 rounded-full px-5 py-2 mb-6 shadow-[0_2px_20px_rgba(139,92,246,0.06)]"
          >
            <Sparkles className="w-4 h-4 text-purple-500" />
            <span className="text-purple-700 text-sm font-medium tracking-wide">The Solution</span>
          </motion.div>
          
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-[1.05] tracking-tight"
          >
            <span className="text-[#1a1410] font-serif">
              Meet PipBud
            </span>
            <br />
            <span className="relative inline-block mt-2">
              <span className="relative z-10 bg-gradient-to-r from-purple-600 via-purple-500 to-purple-700 bg-clip-text text-transparent font-serif italic">
                Your AI Trading Companion
              </span>
              {/* Decorative underline */}
              <svg className="absolute -bottom-3 left-0 w-full h-3" viewBox="0 0 200 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 10C40 2 80 2 120 6C160 10 180 4 198 8" stroke="url(#solutionGradient)" strokeWidth="3" strokeLinecap="round"/>
                <defs>
                  <linearGradient id="solutionGradient" x1="0" y1="0" x2="1" y2="0">
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
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed font-light"
          >
            A powerful Telegram bot that transforms how you trade. Journal effortlessly, 
            get AI-powered trade validation, detect psychological patterns, and access 
            professional-grade analytics — all without leaving your chat app.
          </motion.p>
        </div>

        {/* Capability Cards - Refined */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {capabilities.map((cap, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center border border-purple-100/30 hover:border-purple-200/50 transition-all duration-500 hover:-translate-y-2 shadow-[0_2px_15px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgba(139,92,246,0.08)]"
            >
              {/* Decorative top bar */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-gradient-to-r from-transparent via-purple-300 to-transparent group-hover:w-20 transition-all duration-500" />
              
              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${cap.iconBg} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <cap.icon className={`w-7 h-7 ${cap.iconColor}`} strokeWidth={1.5} />
              </div>
              
              {/* Title */}
              <h3 className="text-[#1a1410] font-semibold text-lg mb-2 tracking-tight">{cap.title}</h3>
              
              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed font-light">{cap.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Features Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-16"
        >
          {features.map((feature, i) => (
            <span 
              key={i}
              className="flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-purple-100/30 text-sm text-gray-600 font-light"
            >
              <feature.icon className="w-3.5 h-3.5 text-purple-500" />
              {feature.label}
            </span>
          ))}
        </motion.div>

        {/* Stats - Refined Paper Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16"
        >
          {[
            { 
              value: '30s', 
              label: 'To get started', 
              description: 'No downloads, no signup forms.',
              icon: Clock,
              gradient: 'from-purple-50 to-purple-100/30'
            },
            { 
              value: '100%', 
              label: 'Free forever', 
              description: 'All core features included.',
              icon: Sparkles,
              gradient: 'from-blue-50 to-blue-100/30'
            },
            { 
              value: '24/7', 
              label: 'AI coach available', 
              description: 'Always ready when you trade.',
              icon: Brain,
              gradient: 'from-emerald-50 to-emerald-100/30'
            },
          ].map((stat, i) => (
            <motion.div
              key={i}
              className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center border border-purple-100/30 hover:border-purple-200/50 transition-all duration-500 hover:-translate-y-1 shadow-[0_2px_15px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(139,92,246,0.06)]"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br ${stat.gradient} mb-3 group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className="w-5 h-5 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-[#1a1410] tracking-tight font-serif">{stat.value}</div>
              <div className="text-sm font-medium text-gray-700 mt-1">{stat.label}</div>
              <div className="text-xs text-gray-400 mt-0.5 font-light">{stat.description}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA - Refined */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="flex flex-col items-center gap-4"
        >
          <a
            href="https://t.me/PipBudBot"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 via-purple-500 to-purple-700 text-white px-12 py-5 rounded-full text-lg font-medium transition-all duration-300 shadow-[0_8px_30px_rgba(139,92,246,0.3)] hover:shadow-[0_12px_40px_rgba(139,92,246,0.4)] hover:-translate-y-1 active:translate-y-0 overflow-hidden"
          >
            {/* Animated shine */}
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            <MessageCircle className="w-6 h-6 relative z-10" />
            <span className="relative z-10">Try PipBud on Telegram</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300 relative z-10" />
          </a>
          <div className="flex items-center gap-2 text-sm text-gray-500 font-light">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
            No credit card required. Free forever.
          </div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#fcf9f6] via-[#fcf9f6]/80 to-transparent pointer-events-none" />
    </section>
  );
}