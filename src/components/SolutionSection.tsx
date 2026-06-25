'use client';

import { motion } from 'framer-motion';
import { 
  Sparkles, ArrowRight, MessageCircle, Bot, Brain, 
  BarChart3, Shield, Zap, ChevronRight 
} from 'lucide-react';

const capabilities = [
  {
    icon: Bot,
    title: 'Trade Journaling',
    description: 'Log trades via screenshots, text, or voice in seconds.',
  },
  {
    icon: Brain,
    title: 'AI Validation',
    description: 'Get GO/NO-GO signals before risking capital.',
  },
  {
    icon: Shield,
    title: 'Psychology Detection',
    description: 'Identify tilt, FOMO, and revenge trading patterns.',
  },
  {
    icon: BarChart3,
    title: 'Performance Analytics',
    description: 'Professional charts that reveal your true edge.',
  },
];

export default function SolutionSection() {
  return (
    <section className="py-32 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-600/5 via-transparent to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/3 rounded-full blur-[200px]" />
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-[100px]" />
      </div>
      
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-20">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-8"
          >
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-purple-400 text-sm font-medium tracking-wide uppercase">The Solution</span>
          </motion.div>
          
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 font-outfit leading-[1.1] tracking-tight"
          >
            Meet PipBud
            <br />
            <span className="text-gradient">Your AI Trading Companion</span>
          </motion.h2>
          
          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            A powerful Telegram bot that transforms how you trade. Journal effortlessly, 
            get AI-powered trade validation, detect psychological patterns, and access 
            professional-grade analytics — all without leaving your chat app.
          </motion.p>
        </div>

        {/* Capability Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {capabilities.map((cap, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1 }}
              className="group glass glass-hover rounded-2xl p-6 text-center relative overflow-hidden"
            >
              {/* Hover background */}
              <div className="absolute inset-0 bg-gradient-to-b from-purple-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-purple-600/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-600/20 group-hover:scale-110 transition-all duration-300">
                  <cap.icon className="w-7 h-7 text-purple-400" />
                </div>
                
                {/* Title */}
                <h3 className="text-white font-semibold mb-2">{cap.title}</h3>
                
                {/* Description */}
                <p className="text-gray-500 text-sm leading-relaxed">{cap.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* How It's Different */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-10 mb-16 max-w-4xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-white mb-2 font-outfit">30s</div>
              <div className="text-gray-500 text-sm">To get started. No downloads, no signup forms.</div>
            </div>
            <div className="border-l border-r border-white/5">
              <div className="text-3xl font-bold text-white mb-2 font-outfit">100%</div>
              <div className="text-gray-500 text-sm">Free forever. All core features included.</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2 font-outfit">24/7</div>
              <div className="text-gray-500 text-sm">AI coach availability. Always ready when you trade.</div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-4"
        >
          <a
            href="https://t.me/PipBudBot"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 bg-purple-600 hover:bg-purple-700 text-white px-10 py-5 rounded-full text-lg font-semibold transition-all hover:scale-105 hover:shadow-lg hover:shadow-purple-600/25"
          >
            <MessageCircle className="w-6 h-6" />
            Try PipBud on Telegram
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </a>
          <p className="text-gray-600 text-sm">No credit card required. Free forever.</p>
        </motion.div>
      </div>
    </section>
  );
}