'use client';

import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle, Sparkles } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[128px]" />
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-12 sm:p-16 border-purple-500/20"
        >
          <Sparkles className="w-12 h-12 text-purple-400 mx-auto mb-6" />
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 font-outfit">
            Ready to Trade Smarter?
          </h2>
          
          <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
            Join hundreds of traders using PipBud to journal, analyze, and improve their trading. 
            Start free on Telegram today.
          </p>
          
          <a
            href="https://t.me/PipBudBot"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 bg-purple-600 hover:bg-purple-700 text-white px-10 py-5 rounded-full text-lg font-semibold transition-all hover:scale-105 glow-hover"
          >
            <MessageCircle className="w-6 h-6" />
            Start Free on Telegram
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </a>
          
          <p className="text-gray-500 text-sm mt-4">No credit card required • Free forever</p>
        </motion.div>
      </div>
    </section>
  );
}