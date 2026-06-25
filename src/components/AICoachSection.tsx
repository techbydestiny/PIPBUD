'use client';

import { motion } from 'framer-motion';
import { Brain, Shield, Eye, Zap, CheckCircle2, ArrowRight, MessageCircle, Sparkles, TrendingUp, Target } from 'lucide-react';

export default function AICoachSection() {
  return (
    <section id="ai-coach" className="py-32 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 to-blue-600/5" />
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[128px]" />
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-blue-600/10 rounded-full blur-[128px]" />
      </div>
      
      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            {/* Label */}
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-8">
              <Brain className="w-4 h-4 text-purple-400" />
              <span className="text-purple-400 text-sm font-medium tracking-wide uppercase">AI Trading Coach</span>
            </div>
            
            {/* Heading */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 font-outfit leading-[1.1] tracking-tight">
              Your Personal
              <br />
              <span className="text-gradient">AI Trading Coach</span>
            </h2>
            
            {/* Description */}
            <p className="text-lg text-gray-400 mb-10 leading-relaxed max-w-lg">
              Before you risk capital, PipBud validates every trade against your documented 
              strategy, analyzes your psychological state, and delivers a clear, data-backed 
              GO or NO-GO signal with confidence scoring.
            </p>
            
            {/* Feature List */}
            <div className="space-y-5 mb-10">
              {[
                {
                  icon: Target,
                  title: 'Real-Time Trade Validation',
                  description: 'Confidence-scored signals based on your historical performance and strategy rules.',
                },
                {
                  icon: Shield,
                  title: 'Strategy Compliance Checking',
                  description: 'Every trade checked against your documented edge. No more impulsive entries.',
                },
                {
                  icon: Eye,
                  title: 'Psychological State Detection',
                  description: 'Identifies tilt, revenge trading, FOMO, and overtrading before they cost you.',
                },
                {
                  icon: TrendingUp,
                  title: 'Kelly Criterion Position Sizing',
                  description: 'Mathematically optimal position sizes based on your win rate and edge.',
                },
                {
                  icon: Sparkles,
                  title: 'Post-Trade Analysis & Grading',
                  description: 'Every closed trade receives an A-F grade with actionable improvement notes.',
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
                  <div className="w-10 h-10 rounded-xl bg-purple-600/10 flex items-center justify-center flex-shrink-0 group-hover:bg-purple-600/20 transition-colors">
                    <feature.icon className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">{feature.title}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
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
                className="group inline-flex items-center gap-3 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full text-base font-semibold transition-all hover:scale-105 hover:shadow-lg hover:shadow-purple-600/25"
              >
                <MessageCircle className="w-5 h-5" />
                Try AI Coach Free
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <p className="text-gray-600 text-sm mt-3 ml-2">No credit card required. Free forever.</p>
            </motion.div>
          </motion.div>
          
          {/* Right Column - Chat Preview */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Decorative glow */}
            <div className="absolute -inset-4 bg-purple-600/5 rounded-[2.5rem] blur-2xl" />
            
            {/* Chat container */}
            <div className="relative glass border-white/10 rounded-3xl p-6 space-y-4 shadow-2xl">
              
              {/* Chat header */}
              <div className="flex items-center gap-3 pb-4 border-b border-white/5">
                <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center">
                  <Brain className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="text-white text-sm font-semibold">PipBud Coach</div>
                  <div className="text-green-400 text-xs">online</div>
                </div>
              </div>
              
              {/* Chat messages */}
              <div className="space-y-3">
                {/* User message 1 */}
                <div className="flex justify-end">
                  <div className="max-w-[85%] rounded-2xl rounded-br-md bg-purple-600/20 border border-purple-500/20 px-4 py-3">
                    <p className="text-sm text-blue-400 font-mono">/coach validate</p>
                  </div>
                </div>
                
                {/* User message 2 */}
                <div className="flex justify-end">
                  <div className="max-w-[85%] rounded-2xl rounded-br-md bg-purple-600/20 border border-purple-500/20 px-4 py-3">
                    <p className="text-sm text-white">Should I enter EUR/USD long at 1.0850?</p>
                  </div>
                </div>
                
                {/* Bot response 1 */}
                <div className="flex justify-start">
                  <div className="max-w-[85%] rounded-2xl rounded-bl-md bg-white/5 border border-white/5 px-4 py-3">
                    <p className="text-sm text-purple-400 font-medium">Analyzing your trade...</p>
                  </div>
                </div>
                
                {/* Bot response 2 - Main analysis */}
                <div className="flex justify-start">
                  <div className="max-w-[85%] rounded-2xl rounded-bl-md bg-white/5 border border-white/5 px-5 py-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-400" />
                        <p className="text-sm text-white font-semibold">Signal: GO</p>
                        <span className="text-xs text-gray-500">Confidence: 78%</span>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div className="bg-white/5 rounded-lg p-2">
                          <div className="text-gray-500">Win Rate on EU</div>
                          <div className="text-white font-semibold">62%</div>
                        </div>
                        <div className="bg-white/5 rounded-lg p-2">
                          <div className="text-gray-500">Psychology</div>
                          <div className="text-green-400 font-semibold">NEUTRAL</div>
                        </div>
                        <div className="bg-white/5 rounded-lg p-2">
                          <div className="text-gray-500">Risk Level</div>
                          <div className="text-green-400 font-semibold">LOW</div>
                        </div>
                        <div className="bg-white/5 rounded-lg p-2">
                          <div className="text-gray-500">Strategy Match</div>
                          <div className="text-white font-semibold">85%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Bot response 3 - Advice */}
                <div className="flex justify-start">
                  <div className="max-w-[85%] rounded-2xl rounded-bl-md bg-white/5 border border-white/5 px-4 py-3">
                    <p className="text-sm text-gray-300 leading-relaxed">
                      Your win rate on EUR/USD is strong at 62%. This setup aligns with your 
                      documented strategy rules. The entry price offers a solid 2.5:1 risk-to-reward ratio.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating stat card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="absolute -bottom-6 -right-6 glass rounded-2xl p-4 shadow-xl"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <div className="text-white font-bold text-lg">+67%</div>
                  <div className="text-gray-500 text-xs">Avg. Win Rate Improvement</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}