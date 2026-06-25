'use client';

import { motion } from 'framer-motion';
import { Brain, BarChart3, Shield, Zap, Bot, MessageCircle, Target, Eye } from 'lucide-react';

const features = [
  {
    icon: MessageCircle,
    title: 'Log Trades Instantly',
    description: 'Send screenshots, voice notes, or text to Telegram. PipBud parses everything automatically using AI.',
    color: 'from-purple-500 to-purple-700',
  },
  {
    icon: Brain,
    title: 'AI Trade Coach',
    description: 'Get GO/NO-GO signals before entering trades. AI validates against your strategy and historical patterns.',
    color: 'from-blue-500 to-blue-700',
  },
  {
    icon: Eye,
    title: 'Psychology Detection',
    description: 'AI detects tilt, revenge trading, FOMO, and overtrading. Get warnings before you make emotional decisions.',
    color: 'from-red-500 to-red-700',
  },
  {
    icon: BarChart3,
    title: 'Visual Analytics',
    description: 'Beautiful charts: equity curves, heatmaps, win rates, setup distribution. See your edge clearly.',
    color: 'from-green-500 to-green-700',
  },
  {
    icon: Shield,
    title: 'Risk Management',
    description: 'Kelly Criterion position sizing, daily loss limits, drawdown alerts. Protect your capital.',
    color: 'from-yellow-500 to-yellow-700',
  },
  {
    icon: Bot,
    title: 'Auto Trade Import',
    description: 'Connect MT5, Binance, or upload broker statements. Trades auto-populate your journal.',
    color: 'from-cyan-500 to-cyan-700',
  },
];

export default function FeaturesGrid() {
  return (
    <section id="features" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-6"
          >
            <Zap className="w-4 h-4 text-purple-400" />
            <span className="text-purple-400 text-sm">Features</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 font-outfit"
          >
            Everything You Need to
            <br />
            <span className="text-gradient">Trade Smarter</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            PipBud combines AI coaching, trade journaling, and analytics 
            in one elegant Telegram bot. No downloads required.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group glass glass-hover rounded-2xl p-6"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2 font-outfit">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}