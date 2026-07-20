'use client';

import { motion } from 'framer-motion';
import { MessageCircle, Camera, Brain, TrendingUp, ArrowRight, Sparkles, Clock, Zap } from 'lucide-react';
import Image from 'next/image';

const steps = [
  {
    step: '01',
    icon: MessageCircle,
    title: 'Open Telegram',
    description: 'Search @PipBudBot on Telegram. No downloads, no signup, no credit card.',
    visual: 'telegram',
    color: 'from-blue-500 to-blue-700',
    lightColor: 'from-blue-50 to-blue-100/30',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
  },
  {
    step: '02',
    icon: Camera,
    title: 'Log Your Trade',
    description: 'Send a screenshot with caption, type a message, or send a voice note.',
    visual: 'screenshot',
    color: 'from-purple-500 to-purple-700',
    lightColor: 'from-purple-50 to-purple-100/30',
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-600',
  },
  {
    step: '03',
    icon: Brain,
    title: 'AI Analyzes',
    description: 'PipBud validates your trade, checks psychology, and gives personalized coaching.',
    visual: 'analysis',
    color: 'from-amber-500 to-amber-700',
    lightColor: 'from-amber-50 to-amber-100/30',
    iconBg: 'bg-amber-100',
    iconColor: 'text-amber-600',
  },
  {
    step: '04',
    icon: TrendingUp,
    title: 'Improve & Profit',
    description: 'Track performance with beautiful charts. Watch your win rate climb.',
    visual: 'analytics',
    color: 'from-emerald-500 to-emerald-700',
    lightColor: 'from-emerald-50 to-emerald-100/30',
    iconBg: 'bg-emerald-100',
    iconColor: 'text-emerald-600',
  },
];

// Visual Mockup Components
const VisualMockup = ({ type }) => {
  if (type === 'telegram') {
    return (
      <div className="relative w-full aspect-[4/3] bg-gradient-to-br from-blue-50/80 to-blue-100/30 rounded-xl overflow-hidden">
        <div className="absolute inset-0 p-4">
          {/* Telegram chat mockup */}
          <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
                <span className="text-white text-xs font-bold">P</span>
              </div>
              <div className="flex-1">
                <div className="text-xs font-semibold text-[#1a1410]">PipBudBot</div>
                <div className="text-[10px] text-gray-400">Online</div>
              </div>
              <div className="w-2 h-2 rounded-full bg-green-400" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-start">
                <div className="bg-gray-100 rounded-lg px-3 py-2 max-w-[80%]">
                  <p className="text-xs text-gray-700">Start trading smarter! 📈</p>
                </div>
              </div>
              <div className="flex justify-end">
                <div className="bg-blue-500 rounded-lg px-3 py-2 max-w-[80%]">
                  <p className="text-xs text-white">/start</p>
                </div>
              </div>
              <div className="flex justify-start">
                <div className="bg-gray-100 rounded-lg px-3 py-2 max-w-[80%]">
                  <div className="flex items-center gap-1 text-xs text-gray-700">
                    <span>👋 Welcome! I'm PipBud...</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-3 left-4 right-4">
            <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1.5 border border-gray-100 shadow-sm">
              <div className="flex-1 text-xs text-gray-400">Type a message...</div>
              <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center">
                <ArrowRight className="w-3 h-3 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'screenshot') {
    return (
      <div className="relative w-full aspect-[4/3] bg-gradient-to-br from-purple-50/80 to-purple-100/30 rounded-xl overflow-hidden">
        <div className="absolute inset-0 p-4">
          {/* Screenshot mockup */}
          <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 rounded-lg bg-purple-100 flex items-center justify-center">
                <Camera className="w-3 h-3 text-purple-600" />
              </div>
              <div className="flex-1">
                <div className="text-xs font-medium text-[#1a1410]">Trade Screenshot</div>
                <div className="text-[10px] text-gray-400">Uploaded</div>
              </div>
              <div className="px-2 py-0.5 bg-green-100 text-green-600 text-[10px] font-medium rounded-full">
                Processing
              </div>
            </div>
            {/* Chart mockup */}
            <div className="bg-gray-50 rounded-lg p-2 mb-2">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] font-medium text-gray-600">EUR/USD</span>
                <span className="text-[10px] text-green-600">+0.85%</span>
              </div>
              <div className="relative h-12">
                <svg className="w-full h-full" viewBox="0 0 100 40">
                  <path d="M0 35 L10 30 L20 25 L30 28 L40 20 L50 22 L60 15 L70 18 L80 10 L90 12 L100 8" 
                    stroke="#7C3AED" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                </svg>
              </div>
              <div className="flex justify-between text-[8px] text-gray-400">
                <span>1H</span>
                <span>4H</span>
                <span>1D</span>
                <span>1W</span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-[10px] text-gray-500">
              <span>📊 Detected: Long Entry</span>
              <span className="w-px h-3 bg-gray-200" />
              <span>💵 Risk: 1.5%</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'analysis') {
    return (
      <div className="relative w-full aspect-[4/3] bg-gradient-to-br from-amber-50/80 to-amber-100/30 rounded-xl overflow-hidden">
        <div className="absolute inset-0 p-4">
          {/* AI Analysis mockup */}
          <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 rounded-lg bg-amber-100 flex items-center justify-center">
                <Brain className="w-3 h-3 text-amber-600" />
              </div>
              <div className="flex-1">
                <div className="text-xs font-medium text-[#1a1410]">AI Analysis</div>
                <div className="text-[10px] text-gray-400">Real-time coaching</div>
              </div>
              <div className="flex gap-0.5">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                <div className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" style={{ animationDelay: '0.2s' }} />
                <div className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" style={{ animationDelay: '0.4s' }} />
              </div>
            </div>
            <div className="space-y-2">
              <div className="bg-green-50 border border-green-200/30 rounded-lg p-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-400" />
                  <span className="text-xs font-medium text-green-700">GO Signal</span>
                  <span className="text-[10px] text-gray-500 ml-auto">87% confidence</span>
                </div>
              </div>
              <div className="bg-amber-50 border border-amber-200/30 rounded-lg p-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-amber-400" />
                  <span className="text-xs font-medium text-amber-700">Psychology Check</span>
                  <span className="text-[10px] text-gray-500 ml-auto">Emotions stable</span>
                </div>
              </div>
              <div className="text-[10px] text-gray-500 font-light px-1">
                ✅ Risk aligned with your strategy
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'analytics') {
    return (
      <div className="relative w-full aspect-[4/3] bg-gradient-to-br from-emerald-50/80 to-emerald-100/30 rounded-xl overflow-hidden">
        <div className="absolute inset-0 p-4">
          {/* Analytics mockup */}
          <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 rounded-lg bg-emerald-100 flex items-center justify-center">
                <TrendingUp className="w-3 h-3 text-emerald-600" />
              </div>
              <div className="flex-1">
                <div className="text-xs font-medium text-[#1a1410]">Performance</div>
                <div className="text-[10px] text-gray-400">Last 30 days</div>
              </div>
              <div className="text-xs font-bold text-emerald-600">+18.4%</div>
            </div>
            <div className="grid grid-cols-2 gap-2 mb-2">
              <div className="bg-gray-50 rounded-lg p-2">
                <div className="text-[10px] text-gray-400 font-light">Win Rate</div>
                <div className="text-sm font-bold text-[#1a1410]">62%</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-2">
                <div className="text-[10px] text-gray-400 font-light">Total P&L</div>
                <div className="text-sm font-bold text-emerald-600">+$3,240</div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-2">
              <div className="flex justify-between text-[10px] text-gray-400 mb-1">
                <span>Best Setup</span>
                <span className="font-medium text-gray-600">Breakout</span>
              </div>
              <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
                <div className="w-3/4 h-full bg-emerald-400 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full aspect-[4/3] bg-gradient-to-br from-gray-50/80 to-gray-100/30 rounded-xl overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-gray-100 flex items-center justify-center">
            <Sparkles className="w-6 h-6 text-gray-400" />
          </div>
          <div className="text-sm text-gray-400">Preview</div>
        </div>
      </div>
    </div>
  );
};

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-28 px-4 overflow-hidden bg-[#fcf9f6]">
      {/* Paper texture */}
      <div className="absolute inset-0 opacity-[0.015]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px',
        }} />
      </div>

      {/* Gradient blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-gradient-to-br from-blue-100/20 via-purple-100/10 to-transparent rounded-full blur-[150px]" />
        <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-gradient-to-tr from-emerald-100/20 via-amber-100/10 to-transparent rounded-full blur-[150px]" />
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
            <Zap className="w-4 h-4 text-purple-500" />
            <span className="text-purple-700 text-sm font-medium tracking-wide">Getting Started</span>
            <span className="w-px h-4 bg-purple-200/50" />
            <span className="flex items-center gap-1 text-gray-500 text-sm font-light">
              <Clock className="w-3 h-3" />
              30 seconds
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-[1.05] tracking-tight"
          >
            <span className="text-[#1a1410] font-serif">
              How It Works
            </span>
            <br />
            <span className="relative inline-block mt-2">
              <span className="relative z-10 bg-gradient-to-r from-purple-600 via-purple-500 to-purple-700 bg-clip-text text-transparent font-serif italic">
                In 4 Simple Steps
              </span>
              <svg className="absolute -bottom-3 left-0 w-full h-3" viewBox="0 0 200 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 10C40 2 80 2 120 6C160 10 180 4 198 8" stroke="url(#howGradient)" strokeWidth="3" strokeLinecap="round"/>
                <defs>
                  <linearGradient id="howGradient" x1="0" y1="0" x2="1" y2="0">
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
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto font-light"
          >
            Get started in 30 seconds. No complex setup, no downloads, no credit card.
          </motion.p>
        </div>

        {/* Steps with Visuals */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="group relative"
            >
              <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-purple-100/30 hover:border-purple-200/50 transition-all duration-500 hover:-translate-y-2 shadow-[0_2px_15px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgba(139,92,246,0.08)]">
                {/* Decorative top bar */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-gradient-to-r from-transparent via-purple-300 to-transparent group-hover:w-20 transition-all duration-500 z-10" />
                
                {/* Step number */}
                <div className="absolute top-3 right-3 text-4xl font-bold text-purple-100/30 font-serif group-hover:text-purple-200/40 transition-colors duration-300">
                  {step.step}
                </div>

                {/* Visual Mockup */}
                <div className="p-3 pb-0">
                  <VisualMockup type={step.visual} />
                </div>

                {/* Content */}
                <div className="p-5 pt-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${step.lightColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <step.icon className={`w-5 h-5 ${step.iconColor}`} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="text-[#1a1410] font-semibold text-base tracking-tight">
                        {step.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed font-light">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-purple-200 to-transparent">
                  <div className="absolute -right-1 -top-1 w-2 h-2 rounded-full bg-purple-300/50" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-wrap items-center justify-center gap-4 px-8 py-5 bg-white/60 backdrop-blur-sm rounded-full border border-purple-100/30">
            <span className="flex items-center gap-2 text-sm text-gray-600 font-light">
              <Sparkles className="w-4 h-4 text-purple-500" />
              Ready to start your journey?
            </span>
            <div className="w-px h-6 bg-purple-200/50 hidden sm:block" />
            <a
              href="https://t.me/PipBudBot"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-purple-600 font-medium hover:text-purple-700 transition-colors group"
            >
              Try PipBud Now
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#fcf9f6] via-[#fcf9f6]/80 to-transparent pointer-events-none" />
    </section>
  );
}