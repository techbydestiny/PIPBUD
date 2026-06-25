'use client';

import { motion } from 'framer-motion';
import { 
  BarChart3, TrendingUp, PieChart, Activity, ArrowRight, 
  MessageCircle, Calendar, Target, DollarSign, Zap 
} from 'lucide-react';

const charts = [
  {
    icon: TrendingUp,
    name: 'Equity Curve',
    description: 'Track your account growth with professional equity curves. Visualize drawdowns, identify winning streaks, and see your real performance trajectory.',
    stats: ['Cumulative P&L', 'Max Drawdown', 'Win Streaks'],
    color: 'from-emerald-500 to-teal-500',
    bgColor: 'bg-emerald-500/5',
    iconBg: 'bg-emerald-500/10',
    iconColor: 'text-emerald-400',
  },
  {
    icon: Calendar,
    name: 'Calendar Heatmap',
    description: 'Discover your optimal trading days and sessions. The heatmap reveals when you perform best so you can focus your energy where it counts.',
    stats: ['Best Day: Tuesday', 'Best Session: London', 'Worst Day: Monday'],
    color: 'from-purple-500 to-violet-500',
    bgColor: 'bg-purple-500/5',
    iconBg: 'bg-purple-500/10',
    iconColor: 'text-purple-400',
  },
  {
    icon: PieChart,
    name: 'Setup Distribution',
    description: 'Which setups actually make you money? Pie charts break down your performance by setup type, revealing your true edge in the market.',
    stats: ['Top Setup: BOS', 'Win Rate: 68%', '15 Setups Tracked'],
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-500/5',
    iconBg: 'bg-blue-500/10',
    iconColor: 'text-blue-400',
  },
  {
    icon: Target,
    name: 'Risk vs Reward Analysis',
    description: 'Scatter plots map every trade by risk and reward. Instantly see if your risk management is working and where you need to improve.',
    stats: ['Avg R:R: 2.1', 'Best R:R: 4.5', 'Risk Compliance: 94%'],
    color: 'from-orange-500 to-amber-500',
    bgColor: 'bg-orange-500/5',
    iconBg: 'bg-orange-500/10',
    iconColor: 'text-orange-400',
  },
];

const additionalCharts = [
  { name: 'Session Performance', description: 'London vs NY vs Asia breakdown' },
  { name: 'Monthly P&L', description: 'Month-over-month progress tracking' },
  { name: 'Win/Loss Streaks', description: 'Visualize your momentum patterns' },
  { name: 'Pair Analysis', description: 'Best and worst performing pairs' },
  { name: 'Timeframe Analysis', description: 'Which timeframes work best for you' },
  { name: 'Commission Impact', description: 'See how fees affect your bottom line' },
];

export default function AnalyticsSection() {
  return (
    <section className="py-32 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-600/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[150px]" />
      </div>
      
      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-8"
          >
            <BarChart3 className="w-4 h-4 text-green-400" />
            <span className="text-green-400 text-sm font-medium tracking-wide uppercase">Performance Analytics</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 font-outfit leading-[1.1] tracking-tight"
          >
            Beautiful Charts That
            <br />
            <span className="text-gradient">Reveal Your Edge</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed"
          >
            Stop guessing and start knowing. Professional-grade analytics transform your 
            trade data into actionable insights that drive real improvement.
          </motion.p>
        </div>

        {/* Main Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
          {charts.map((chart, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1 }}
              className="group glass glass-hover rounded-3xl p-8 relative overflow-hidden"
            >
              {/* Background glow */}
              <div className={`absolute inset-0 ${chart.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl ${chart.iconBg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <chart.icon className={`w-7 h-7 ${chart.iconColor}`} />
                </div>
                
                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-3 font-outfit">{chart.name}</h3>
                
                {/* Description */}
                <p className="text-gray-400 leading-relaxed mb-6">{chart.description}</p>
                
                {/* Stats */}
                <div className="flex flex-wrap gap-2">
                  {chart.stats.map((stat, j) => (
                    <span key={j} className="inline-flex items-center gap-1.5 bg-white/5 rounded-full px-3 py-1.5 text-xs text-gray-300">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${chart.color}`} />
                      {stat}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* More Charts Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl font-bold text-white mb-8 font-outfit">
            And Everything Else You Need
          </h3>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-16">
          {additionalCharts.map((chart, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass glass-hover rounded-2xl p-4 text-center group"
            >
              <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center mx-auto mb-3 group-hover:bg-purple-600/20 transition-colors">
                <Activity className="w-4 h-4 text-gray-400 group-hover:text-purple-400 transition-colors" />
              </div>
              <h4 className="text-white text-sm font-semibold mb-1">{chart.name}</h4>
              <p className="text-gray-500 text-xs leading-relaxed">{chart.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-flex flex-col items-center gap-4">
            <a
              href="https://t.me/PipBudBot"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full text-base font-semibold transition-all hover:scale-105 hover:shadow-lg hover:shadow-purple-600/25"
            >
              <BarChart3 className="w-5 h-5" />
              See Your Analytics
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <p className="text-gray-600 text-sm">Start tracking your performance in 30 seconds</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}