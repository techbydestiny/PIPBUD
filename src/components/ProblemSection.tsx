'use client';

import { motion } from 'framer-motion';
import { XCircle, FileText, Brain, TrendingDown, AlertTriangle, Zap } from 'lucide-react';

const problems = [
  {
    icon: FileText,
    title: 'Messy Trade Journals',
    description: 'Spreadsheets and notebooks are tedious. Most traders give up journaling within weeks.',
    gradient: 'from-amber-50 to-amber-100/30',
    iconBg: 'bg-amber-100',
    iconColor: 'text-amber-600',
    borderColor: 'border-amber-200/30',
    hoverBorder: 'hover:border-amber-300/50',
  },
  {
    icon: Brain,
    title: 'No Objective Feedback',
    description: 'Trading alone means no one catches your mistakes. You repeat the same errors.',
    gradient: 'from-rose-50 to-rose-100/30',
    iconBg: 'bg-rose-100',
    iconColor: 'text-rose-600',
    borderColor: 'border-rose-200/30',
    hoverBorder: 'hover:border-rose-300/50',
  },
  {
    icon: TrendingDown,
    title: 'Emotional Trading',
    description: 'Revenge trading, FOMO, and tilt destroy accounts. You need someone to call it out.',
    gradient: 'from-orange-50 to-orange-100/30',
    iconBg: 'bg-orange-100',
    iconColor: 'text-orange-600',
    borderColor: 'border-orange-200/30',
    hoverBorder: 'hover:border-orange-300/50',
  },
  {
    icon: XCircle,
    title: 'No Performance Insights',
    description: "You don't know your real win rate, best setups, or when you trade best.",
    gradient: 'from-purple-50 to-purple-100/30',
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-600',
    borderColor: 'border-purple-200/30',
    hoverBorder: 'hover:border-purple-300/50',
  },
];

export default function ProblemSection() {
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
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-gradient-to-br from-amber-100/10 via-rose-100/5 to-transparent rounded-full blur-[150px]" />
        <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-gradient-to-tr from-purple-100/10 via-rose-100/5 to-transparent rounded-full blur-[150px]" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Header with refined typography */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-purple-100/50 rounded-full px-5 py-2 mb-6 shadow-[0_2px_20px_rgba(139,92,246,0.06)]"
          >
            <AlertTriangle className="w-4 h-4 text-amber-500" />
            <span className="text-purple-700 text-sm font-medium tracking-wide">The Problem</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-[1.05] tracking-tight"
          >
            <span className="text-[#1a1410] font-serif">
              Trading Without Data is
            </span>
            <br />
            <span className="relative inline-block mt-2">
              <span className="relative z-10 bg-gradient-to-r from-rose-500 via-amber-500 to-rose-600 bg-clip-text text-transparent font-serif italic">
                Trading Blind
              </span>
              {/* Decorative underline */}
              <svg className="absolute -bottom-3 left-0 w-full h-3" viewBox="0 0 200 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 10C40 2 80 2 120 6C160 10 180 4 198 8" stroke="url(#problemGradient)" strokeWidth="3" strokeLinecap="round"/>
                <defs>
                  <linearGradient id="problemGradient" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#F59E0B"/>
                    <stop offset="50%" stopColor="#EF4444"/>
                    <stop offset="100%" stopColor="#DC2626"/>
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
            These common pitfalls are holding you back from consistent profitability.
            <br className="hidden sm:block" />
            <span className="text-gray-500">It's time to trade with clarity.</span>
          </motion.p>
        </div>

        {/* Problem cards - refined paper design */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {problems.map((problem, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`group relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 border ${problem.borderColor} ${problem.hoverBorder} transition-all duration-500 hover:-translate-y-2 shadow-[0_2px_15px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)]`}
            >
              {/* Decorative top bar */}
              <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-gradient-to-r from-transparent via-${problem.iconColor.replace('text-', '')} to-transparent group-hover:w-20 transition-all duration-500`} />
              
              <div className="flex gap-4">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${problem.iconBg} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                  <problem.icon className={`w-5 h-5 ${problem.iconColor}`} strokeWidth={1.5} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-[#1a1410] font-semibold text-lg mb-1.5 tracking-tight">
                    {problem.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed font-light">
                    {problem.description}
                  </p>
                </div>
              </div>

              {/* Number indicator */}
              <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-white border border-gray-100/50 shadow-[0_2px_10px_rgba(0,0,0,0.04)] flex items-center justify-center text-xs font-medium text-gray-400">
                {i + 1}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/60 backdrop-blur-sm rounded-full border border-purple-100/30">
            <Zap className="w-4 h-4 text-purple-500" />
            <span className="text-sm text-gray-600 font-light">
              Ready to stop trading blind? <span className="text-purple-600 font-medium">PipBud is your solution.</span>
            </span>
          </div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#fcf9f6] via-[#fcf9f6]/80 to-transparent pointer-events-none" />
    </section>
  );
}