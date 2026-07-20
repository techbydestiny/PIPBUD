'use client';

import { motion } from 'framer-motion';
import { Brain, Shield, Eye, Zap, CheckCircle2, ArrowRight, MessageCircle, Sparkles, TrendingUp, Target, Clock, BarChart3, AlertCircle } from 'lucide-react';

export default function AICoachSection() {
  return (
    <section id="ai-coach" className="relative py-28 px-4 overflow-hidden bg-[#fcf9f6]">
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
        <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-gradient-to-tr from-purple-50/20 via-amber-100/10 to-transparent rounded-full blur-[150px]" />
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-100/10 to-blue-100/10 rounded-full blur-[200px]" />
      </div>
      
      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            {/* Label */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-purple-100/50 rounded-full px-5 py-2 mb-6 shadow-[0_2px_20px_rgba(139,92,246,0.06)]"
            >
              <Brain className="w-4 h-4 text-purple-500" />
              <span className="text-purple-700 text-sm font-medium tracking-wide">AI Trading Coach</span>
              <span className="w-px h-4 bg-purple-200/50" />
              <span className="flex items-center gap-1 text-gray-500 text-sm font-light">
                <Clock className="w-3 h-3" />
                24/7 Available
              </span>
            </motion.div>
            
            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 leading-[1.05] tracking-tight"
            >
              <span className="text-[#1a1410] font-serif">
                Your Personal
              </span>
              <br />
              <span className="relative inline-block mt-2">
                <span className="relative z-10 bg-gradient-to-r from-purple-600 via-purple-500 to-purple-700 bg-clip-text text-transparent font-serif italic">
                  AI Trading Coach
                </span>
                <svg className="absolute -bottom-3 left-0 w-full h-3" viewBox="0 0 200 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 10C40 2 80 2 120 6C160 10 180 4 198 8" stroke="url(#coachGradient)" strokeWidth="3" strokeLinecap="round"/>
                  <defs>
                    <linearGradient id="coachGradient" x1="0" y1="0" x2="1" y2="0">
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
              className="text-lg text-gray-600 mb-10 leading-relaxed font-light"
            >
              Before you risk capital, PipBud validates every trade against your documented 
              strategy, analyzes your psychological state, and delivers a clear, data-backed 
              GO or NO-GO signal with confidence scoring.
            </motion.p>
            
            {/* Feature List - Refined */}
            <div className="space-y-4 mb-10">
              {[
                {
                  icon: Target,
                  title: 'Real-Time Trade Validation',
                  description: 'Confidence-scored signals based on your historical performance and strategy rules.',
                  color: 'from-purple-50 to-purple-100/30',
                  iconBg: 'bg-purple-100',
                  iconColor: 'text-purple-600',
                },
                {
                  icon: Shield,
                  title: 'Strategy Compliance Checking',
                  description: 'Every trade checked against your documented edge. No more impulsive entries.',
                  color: 'from-blue-50 to-blue-100/30',
                  iconBg: 'bg-blue-100',
                  iconColor: 'text-blue-600',
                },
                {
                  icon: Eye,
                  title: 'Psychological State Detection',
                  description: 'Identifies tilt, revenge trading, FOMO, and overtrading before they cost you.',
                  color: 'from-rose-50 to-rose-100/30',
                  iconBg: 'bg-rose-100',
                  iconColor: 'text-rose-600',
                },
                {
                  icon: TrendingUp,
                  title: 'Kelly Criterion Position Sizing',
                  description: 'Mathematically optimal position sizes based on your win rate and edge.',
                  color: 'from-emerald-50 to-emerald-100/30',
                  iconBg: 'bg-emerald-100',
                  iconColor: 'text-emerald-600',
                },
                {
                  icon: Sparkles,
                  title: 'Post-Trade Analysis & Grading',
                  description: 'Every closed trade receives an A-F grade with actionable improvement notes.',
                  color: 'from-amber-50 to-amber-100/30',
                  iconBg: 'bg-amber-100',
                  iconColor: 'text-amber-600',
                },
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-4 group"
                >
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className={`w-5 h-5 ${feature.iconColor}`} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="text-[#1a1410] font-semibold mb-1 tracking-tight">{feature.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed font-light">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <a
                href="https://t.me/PipBudBot"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 via-purple-500 to-purple-700 text-white px-10 py-4.5 rounded-full text-base font-medium transition-all duration-300 shadow-[0_8px_30px_rgba(139,92,246,0.3)] hover:shadow-[0_12px_40px_rgba(139,92,246,0.4)] hover:-translate-y-1 active:translate-y-0 overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <MessageCircle className="w-5 h-5 relative z-10" />
                <span className="relative z-10">Try AI Coach Free</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300 relative z-10" />
              </a>
              <p className="text-gray-500 text-sm mt-3 ml-2 font-light">No credit card required. Free forever.</p>
            </motion.div>
          </motion.div>
          
          {/* Right Column - Enhanced Chat Preview */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative lg:sticky lg:top-24"
          >
            {/* Decorative glow */}
            <div className="absolute -inset-4 bg-gradient-to-br from-purple-100/20 to-blue-100/10 rounded-[2.5rem] blur-2xl" />
            
            {/* Chat container - Enhanced */}
            <div className="relative bg-white/90 backdrop-blur-sm border border-purple-100/30 rounded-3xl p-5 shadow-[0_8px_40px_rgba(0,0,0,0.06)]">
              
              {/* Chat header */}
              <div className="flex items-center gap-3 pb-4 border-b border-purple-100/30">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-purple-700 flex items-center justify-center shadow-[0_4px_15px_rgba(139,92,246,0.25)]">
                    <Brain className="w-5 h-5 text-white" />
                  </div>
                  <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-green-400 border-2 border-white" />
                </div>
                <div className="flex-1">
                  <div className="text-[#1a1410] text-sm font-semibold">PipBud Coach</div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-500 text-xs font-medium">● Online</span>
                    <span className="w-px h-3 bg-gray-200" />
                    <span className="text-gray-400 text-xs font-light">Responds in &lt; 2s</span>
                  </div>
                </div>
                <div className="flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-purple-200" />
                  <div className="w-2 h-2 rounded-full bg-purple-300" />
                  <div className="w-2 h-2 rounded-full bg-purple-400" />
                </div>
              </div>
              
              {/* Chat messages - Enhanced */}
              <div className="space-y-3 py-4 max-h-[440px] overflow-y-auto">
                {/* Timestamp */}
                <div className="text-center text-xs text-gray-400 font-light">Today, 2:35 PM</div>
                
                {/* User message 1 */}
                <div className="flex justify-end">
                  <div className="max-w-[85%] rounded-2xl rounded-br-md bg-purple-50/80 border border-purple-100/30 px-4 py-2.5 shadow-sm">
                    <p className="text-xs text-purple-600 font-mono font-medium">/coach validate</p>
                  </div>
                </div>
                
                {/* User message 2 */}
                <div className="flex justify-end">
                  <div className="max-w-[85%] rounded-2xl rounded-br-md bg-purple-50/80 border border-purple-100/30 px-4 py-2.5 shadow-sm">
                    <p className="text-sm text-[#1a1410]">Should I enter EUR/USD long at 1.0850?</p>
                  </div>
                </div>
                
                {/* Bot response - Analyzing */}
                <div className="flex justify-start">
                  <div className="max-w-[85%] rounded-2xl rounded-bl-md bg-gray-50/80 border border-gray-100/50 px-4 py-2.5">
                    <div className="flex items-center gap-2">
                      <div className="flex gap-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
                        <div className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" style={{ animationDelay: '0.2s' }} />
                        <div className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" style={{ animationDelay: '0.4s' }} />
                      </div>
                      <span className="text-sm text-gray-500 font-light">Analyzing your trade...</span>
                    </div>
                  </div>
                </div>
                
                {/* Bot response - Main analysis */}
                <div className="flex justify-start">
                  <div className="max-w-[85%] rounded-2xl rounded-bl-md bg-white border border-purple-100/30 px-4 py-3 shadow-sm">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-emerald-400" />
                          <p className="text-sm font-semibold text-emerald-600">GO Signal</p>
                          <span className="text-xs bg-purple-50 text-purple-600 font-medium px-2 py-0.5 rounded-full">78% Confidence</span>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-2">
                        <div className="bg-purple-50/50 rounded-lg p-2">
                          <div className="text-[10px] text-gray-400 font-light">Win Rate (EU)</div>
                          <div className="text-sm font-bold text-[#1a1410]">62%</div>
                        </div>
                        <div className="bg-emerald-50/50 rounded-lg p-2">
                          <div className="text-[10px] text-gray-400 font-light">Psychology</div>
                          <div className="text-sm font-bold text-emerald-600">NEUTRAL</div>
                        </div>
                        <div className="bg-emerald-50/50 rounded-lg p-2">
                          <div className="text-[10px] text-gray-400 font-light">Risk Level</div>
                          <div className="text-sm font-bold text-emerald-600">LOW</div>
                        </div>
                        <div className="bg-purple-50/50 rounded-lg p-2">
                          <div className="text-[10px] text-gray-400 font-light">Strategy Match</div>
                          <div className="text-sm font-bold text-[#1a1410]">85%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Bot response - Advice */}
                <div className="flex justify-start">
                  <div className="max-w-[85%] rounded-2xl rounded-bl-md bg-gradient-to-br from-purple-50/80 to-blue-50/80 border border-purple-100/30 px-4 py-3">
                    <p className="text-sm text-gray-700 leading-relaxed font-light">
                      Your win rate on EUR/USD is strong at 62%. This setup aligns with your 
                      documented strategy rules. The entry price offers a solid 2.5:1 risk-to-reward ratio.
                    </p>
                  </div>
                </div>

                {/* Quick action buttons */}
                <div className="flex gap-2 pt-2">
                  <button className="flex-1 text-xs bg-gray-50 border border-gray-100 rounded-full px-3 py-1.5 text-gray-600 font-medium hover:bg-purple-50 hover:border-purple-200 transition-colors">
                    📊 Details
                  </button>
                  <button className="flex-1 text-xs bg-gray-50 border border-gray-100 rounded-full px-3 py-1.5 text-gray-600 font-medium hover:bg-purple-50 hover:border-purple-200 transition-colors">
                    📝 Journal
                  </button>
                  <button className="flex-1 text-xs bg-gray-50 border border-gray-100 rounded-full px-3 py-1.5 text-gray-600 font-medium hover:bg-purple-50 hover:border-purple-200 transition-colors">
                    📈 Analytics
                  </button>
                </div>
              </div>
              
              {/* Chat input */}
              <div className="flex items-center gap-2 pt-3 border-t border-purple-100/30">
                <div className="flex-1 bg-gray-50/50 rounded-full px-4 py-2 border border-gray-100">
                  <input 
                    type="text" 
                    placeholder="Ask your AI coach..." 
                    className="w-full bg-transparent text-sm text-gray-600 placeholder-gray-400 outline-none"
                  />
                </div>
                <button className="w-9 h-9 rounded-full bg-gradient-to-r from-purple-600 to-purple-700 text-white flex items-center justify-center hover:scale-105 transition-transform shadow-[0_4px_15px_rgba(139,92,246,0.2)]">
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
            
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#fcf9f6] via-[#fcf9f6]/80 to-transparent pointer-events-none" />
    </section>
  );
}