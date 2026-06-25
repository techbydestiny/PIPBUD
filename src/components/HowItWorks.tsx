'use client';

import { motion } from 'framer-motion';
import { MessageCircle, Camera, Brain, TrendingUp } from 'lucide-react';

const steps = [
  {
    step: '01',
    icon: MessageCircle,
    title: 'Open Telegram',
    description: 'Search @PipBudBot on Telegram. No downloads, no signup, no credit card.',
  },
  {
    step: '02',
    icon: Camera,
    title: 'Log Your Trade',
    description: 'Send a screenshot with caption, type a message, or send a voice note.',
  },
  {
    step: '03',
    icon: Brain,
    title: 'AI Analyzes',
    description: 'PipBud validates your trade, checks psychology, and gives personalized coaching.',
  },
  {
    step: '04',
    icon: TrendingUp,
    title: 'Improve & Profit',
    description: 'Track performance with beautiful charts. Watch your win rate climb.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-bold text-white mb-4 font-outfit"
          >
            How It Works
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg"
          >
            Get started in 30 seconds. No complex setup.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-purple-600/10 flex items-center justify-center mx-auto mb-4">
                <step.icon className="w-8 h-8 text-purple-400" />
              </div>
              <div className="text-3xl font-bold text-purple-600/20 mb-2 font-outfit">{step.step}</div>
              <h3 className="text-white font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-400 text-sm">{step.description}</p>
              
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 -right-4 w-8 h-0.5 bg-purple-500/20" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}