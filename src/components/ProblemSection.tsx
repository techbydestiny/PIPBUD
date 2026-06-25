'use client';

import { motion } from 'framer-motion';
import { XCircle, FileText, Brain, TrendingDown } from 'lucide-react';

const problems = [
  {
    icon: FileText,
    title: 'Messy Trade Journals',
    description: 'Spreadsheets and notebooks are tedious. Most traders give up journaling within weeks.',
  },
  {
    icon: Brain,
    title: 'No Objective Feedback',
    description: 'Trading alone means no one catches your mistakes. You repeat the same errors.',
  },
  {
    icon: TrendingDown,
    title: 'Emotional Trading',
    description: 'Revenge trading, FOMO, and tilt destroy accounts. You need someone to call it out.',
  },
  {
    icon: XCircle,
    title: 'No Performance Insights',
    description: 'You don\'t know your real win rate, best setups, or when you trade best.',
  },
];

export default function ProblemSection() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-purple-400 font-medium mb-4"
          >
            The Problem
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-bold text-white mb-4 font-outfit"
          >
            Trading Without Data is
            <br />
            <span className="text-red-400">Trading Blind</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {problems.map((problem, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-6 flex gap-4"
            >
              <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center flex-shrink-0">
                <problem.icon className="w-5 h-5 text-red-400" />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">{problem.title}</h3>
                <p className="text-gray-400 text-sm">{problem.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}