'use client';

import { motion } from 'framer-motion';
import { Star, Users, Activity, Heart } from 'lucide-react';

const stats = [
  { value: '10,000+', label: 'Trades Analyzed', icon: Activity },
  { value: '500+', label: 'Active Traders', icon: Users },
  { value: '4.9/5', label: 'User Rating', icon: Star },
  { value: 'Free', label: 'Forever', icon: Heart },
];

export default function SocialProof() {
  return (
    <section className="py-12 px-4 border-b border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <stat.icon className="w-6 h-6 text-purple-400 mx-auto mb-2" />
              <div className="text-2xl md:text-3xl font-bold text-white font-outfit">{stat.value}</div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}