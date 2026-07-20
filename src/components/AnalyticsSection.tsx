'use client';

import { motion } from 'framer-motion';
import { 
  BarChart3, TrendingUp, PieChart, Activity, ArrowRight, 
  MessageCircle, Calendar, Target, DollarSign, Zap, 
  LineChart, Clock, Eye, Sparkles, Shield, Layers 
} from 'lucide-react';

interface ChartItem {
  icon: any;
  name: string;
  description: string;
  stats: string[];
  color: string;
  lightColor: string;
  iconBg: string;
  iconColor: string;
  visual: 'equity' | 'heatmap' | 'pie' | 'scatter';
}

interface AdditionalChart {
  name: string;
  description: string;
  icon: any;
}

interface ChartVisualProps {
  type: 'equity' | 'heatmap' | 'pie' | 'scatter';
}

const charts: ChartItem[] = [
  {
    icon: TrendingUp,
    name: 'Equity Curve',
    description: 'Track your account growth with professional equity curves. Visualize drawdowns, identify winning streaks, and see your real performance trajectory.',
    stats: ['Cumulative P&L', 'Max Drawdown', 'Win Streaks'],
    color: 'from-emerald-500 to-teal-500',
    lightColor: 'from-emerald-50 to-emerald-100/30',
    iconBg: 'bg-emerald-100',
    iconColor: 'text-emerald-600',
    visual: 'equity',
  },
  {
    icon: Calendar,
    name: 'Calendar Heatmap',
    description: 'Discover your optimal trading days and sessions. The heatmap reveals when you perform best so you can focus your energy where it counts.',
    stats: ['Best Day: Tuesday', 'Best Session: London', 'Worst Day: Monday'],
    color: 'from-purple-500 to-violet-500',
    lightColor: 'from-purple-50 to-purple-100/30',
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-600',
    visual: 'heatmap',
  },
  {
    icon: PieChart,
    name: 'Setup Distribution',
    description: 'Which setups actually make you money? Pie charts break down your performance by setup type, revealing your true edge in the market.',
    stats: ['Top Setup: BOS', 'Win Rate: 68%', '15 Setups Tracked'],
    color: 'from-blue-500 to-cyan-500',
    lightColor: 'from-blue-50 to-blue-100/30',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
    visual: 'pie',
  },
  {
    icon: Target,
    name: 'Risk vs Reward Analysis',
    description: 'Scatter plots map every trade by risk and reward. Instantly see if your risk management is working and where you need to improve.',
    stats: ['Avg R:R: 2.1', 'Best R:R: 4.5', 'Risk Compliance: 94%'],
    color: 'from-orange-500 to-amber-500',
    lightColor: 'from-orange-50 to-orange-100/30',
    iconBg: 'bg-orange-100',
    iconColor: 'text-orange-600',
    visual: 'scatter',
  },
];

const additionalCharts: AdditionalChart[] = [
  { name: 'Session Performance', description: 'London vs NY vs Asia breakdown', icon: Clock },
  { name: 'Monthly P&L', description: 'Month-over-month progress', icon: BarChart3 },
  { name: 'Win/Loss Streaks', description: 'Visualize momentum patterns', icon: Activity },
  { name: 'Pair Analysis', description: 'Best and worst performers', icon: Layers },
  { name: 'Timeframe Analysis', description: 'Which timeframes work best', icon: Eye },
  { name: 'Commission Impact', description: 'How fees affect bottom line', icon: Shield },
];

// Chart Visual Components
const ChartVisual = ({ type }: ChartVisualProps) => {
  if (type === 'equity') {
    return (
      <div className="relative w-full h-32 bg-gradient-to-br from-emerald-50/80 to-emerald-100/30 rounded-xl overflow-hidden p-3">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-medium text-emerald-700">Equity Curve</span>
          <span className="text-xs font-bold text-emerald-600">+24.7%</span>
        </div>
        <div className="relative h-16">
          <svg className="w-full h-full" viewBox="0 0 200 60">
            <path d="M0 50 L15 45 L30 38 L45 42 L60 30 L75 35 L90 20 L105 25 L120 12 L135 18 L150 8 L165 14 L180 4 L195 10 L200 6" 
              stroke="#10B981" strokeWidth="2.5" fill="none" strokeLinecap="round" />
            <path d="M0 50 L15 45 L30 38 L45 42 L60 30 L75 35 L90 20 L105 25 L120 12 L135 18 L150 8 L165 14 L180 4 L195 10 L200 6" 
              stroke="url(#equityGrad)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
            <defs>
              <linearGradient id="equityGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#10B981" stopOpacity="0.3"/>
                <stop offset="100%" stopColor="#10B981" stopOpacity="0"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="flex justify-between text-[8px] text-gray-400 mt-1">
          <span>Jan</span>
          <span>Feb</span>
          <span>Mar</span>
          <span>Apr</span>
          <span>May</span>
          <span>Jun</span>
        </div>
      </div>
    );
  }

  if (type === 'heatmap') {
    return (
      <div className="relative w-full h-32 bg-gradient-to-br from-purple-50/80 to-purple-100/30 rounded-xl overflow-hidden p-3">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-medium text-purple-700">Trading Heatmap</span>
          <span className="text-xs text-purple-600 font-medium">Best: Tuesday</span>
        </div>
        <div className="grid grid-cols-7 gap-1 h-12">
          {[85, 45, 65, 92, 78, 55, 35].map((value, i) => (
            <div key={i} className="rounded flex flex-col items-center justify-end">
              <div 
                className="w-full rounded-sm transition-all" 
                style={{ 
                  height: `${value * 0.8}%`,
                  background: `rgba(139, 92, 246, ${value / 100})`,
                  minHeight: '8px'
                }} 
              />
            </div>
          ))}
        </div>
        <div className="flex justify-between text-[8px] text-gray-400 mt-1">
          <span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span><span>S</span>
        </div>
      </div>
    );
  }

  if (type === 'pie') {
    return (
      <div className="relative w-full h-32 bg-gradient-to-br from-blue-50/80 to-blue-100/30 rounded-xl overflow-hidden p-3">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-medium text-blue-700">Setup Distribution</span>
          <span className="text-xs text-blue-600 font-medium">15 Setups</span>
        </div>
        <div className="flex items-center gap-4 h-14">
          <div className="relative w-14 h-14">
            <svg className="w-full h-full" viewBox="0 0 36 36">
              <circle cx="18" cy="18" r="16" fill="none" stroke="#E5E7EB" strokeWidth="4" />
              <circle cx="18" cy="18" r="16" fill="none" stroke="#7C3AED" strokeWidth="4" 
                strokeDasharray="40 60" strokeLinecap="round" />
              <circle cx="18" cy="18" r="16" fill="none" stroke="#3B82F6" strokeWidth="4" 
                strokeDasharray="25 75" strokeDashoffset="-40" strokeLinecap="round" />
              <circle cx="18" cy="18" r="16" fill="none" stroke="#10B981" strokeWidth="4" 
                strokeDasharray="20 80" strokeDashoffset="-65" strokeLinecap="round" />
            </svg>
          </div>
          <div className="flex-1 grid grid-cols-2 gap-1">
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-purple-500" />
              <span className="text-[8px] text-gray-600">BOS 40%</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-blue-500" />
              <span className="text-[8px] text-gray-600">Breakout 25%</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-emerald-500" />
              <span className="text-[8px] text-gray-600">Reversal 20%</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-gray-300" />
              <span className="text-[8px] text-gray-600">Other 15%</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'scatter') {
    return (
      <div className="relative w-full h-32 bg-gradient-to-br from-orange-50/80 to-orange-100/30 rounded-xl overflow-hidden p-3">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-medium text-orange-700">Risk vs Reward</span>
          <span className="text-xs text-orange-600 font-medium">Avg R:R 2.1</span>
        </div>
        <div className="relative h-14">
          <svg className="w-full h-full" viewBox="0 0 200 50">
            {/* Grid lines */}
            <line x1="0" y1="40" x2="200" y2="40" stroke="#E5E7EB" strokeWidth="0.5" />
            <line x1="0" y1="25" x2="200" y2="25" stroke="#E5E7EB" strokeWidth="0.5" />
            <line x1="0" y1="10" x2="200" y2="10" stroke="#E5E7EB" strokeWidth="0.5" />
            
            {/* Data points */}
            {[[20,35],[40,28],[60,20],[80,32],[100,15],[120,25],[140,12],[160,18],[180,8]].map((pos, i) => (
              <circle key={i} cx={pos[0]} cy={pos[1]} r="3" fill="#F59E0B" opacity="0.7" />
            ))}
            {[[30,38],[70,22],[110,18],[150,14]].map((pos, i) => (
              <circle key={i} cx={pos[0]} cy={pos[1]} r="3" fill="#10B981" opacity="0.7" />
            ))}
            {[[50,42],[90,45],[130,40]].map((pos, i) => (
              <circle key={i} cx={pos[0]} cy={pos[1]} r="3" fill="#EF4444" opacity="0.7" />
            ))}
            
            {/* Trend line */}
            <line x1="0" y1="45" x2="200" y2="5" stroke="#F59E0B" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.5" />
          </svg>
        </div>
        <div className="flex justify-between text-[8px] text-gray-400 mt-1">
          <span>Low Risk</span>
          <span>High Risk</span>
        </div>
      </div>
    );
  }

  return null;
};

export default function AnalyticsSection() {
  return (
    <section className="relative py-28 px-4 overflow-hidden bg-[#fcf9f6]">
      {/* Paper texture */}
      <div className="absolute inset-0 opacity-[0.015]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px',
        }} />
      </div>

      {/* Gradient blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-gradient-to-br from-emerald-100/20 via-blue-100/10 to-transparent rounded-full blur-[150px]" />
        <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-gradient-to-tr from-purple-100/20 via-orange-100/10 to-transparent rounded-full blur-[150px]" />
      </div>
      
      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-purple-100/50 rounded-full px-5 py-2 mb-6 shadow-[0_2px_20px_rgba(139,92,246,0.06)]"
          >
            <BarChart3 className="w-4 h-4 text-emerald-500" />
            <span className="text-purple-700 text-sm font-medium tracking-wide">Performance Analytics</span>
            <span className="w-px h-4 bg-purple-200/50" />
            <span className="flex items-center gap-1 text-gray-500 text-sm font-light">
              <Sparkles className="w-3 h-3" />
              Professional Grade
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-[1.05] tracking-tight"
          >
            <span className="text-[#1a1410] font-serif">
              Beautiful Charts That
            </span>
            <br />
            <span className="relative inline-block mt-2">
              <span className="relative z-10 bg-gradient-to-r from-purple-600 via-purple-500 to-purple-700 bg-clip-text text-transparent font-serif italic">
                Reveal Your Edge
              </span>
              <svg className="absolute -bottom-3 left-0 w-full h-3" viewBox="0 0 200 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 10C40 2 80 2 120 6C160 10 180 4 198 8" stroke="url(#analyticsGradient)" strokeWidth="3" strokeLinecap="round"/>
                <defs>
                  <linearGradient id="analyticsGradient" x1="0" y1="0" x2="1" y2="0">
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
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed font-light"
          >
            Stop guessing and start knowing. Professional-grade analytics transform your 
            trade data into actionable insights that drive real improvement.
          </motion.p>
        </div>

        {/* Main Charts Grid - With Visuals */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
          {charts.map((chart, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group relative bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-purple-100/30 hover:border-purple-200/50 transition-all duration-500 hover:-translate-y-2 shadow-[0_2px_15px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgba(139,92,246,0.08)]"
            >
              {/* Decorative top bar */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-gradient-to-r from-transparent via-purple-300 to-transparent group-hover:w-20 transition-all duration-500 z-10" />
              
              {/* Chart Visual */}
              <div className="p-4 pb-0">
                <ChartVisual type={chart.visual} />
              </div>
              
              <div className="p-6 pt-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${chart.lightColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <chart.icon className={`w-5 h-5 ${chart.iconColor}`} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-[#1a1410] font-semibold text-lg tracking-tight">{chart.name}</h3>
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm leading-relaxed font-light mb-4">{chart.description}</p>
                
                {/* Stats */}
                <div className="flex flex-wrap gap-2">
                  {chart.stats.map((stat, j) => (
                    <span key={j} className="inline-flex items-center gap-1.5 bg-gray-50/80 rounded-full px-3 py-1.5 text-xs text-gray-600 font-light border border-gray-100/50">
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
          <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm rounded-full px-6 py-2 border border-purple-100/30">
            <Layers className="w-4 h-4 text-purple-500" />
            <span className="text-sm text-gray-600 font-light">Plus</span>
            <span className="text-sm font-semibold text-[#1a1410]">6 More Analytics</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          {additionalCharts.map((chart, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              className="group bg-white/60 backdrop-blur-sm rounded-xl p-4 text-center border border-purple-100/30 hover:border-purple-200/50 transition-all duration-300 hover:-translate-y-1 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_25px_rgba(139,92,246,0.06)]"
            >
              <div className={`w-8 h-8 rounded-lg bg-gradient-to-br from-purple-50 to-purple-100/30 flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform duration-300`}>
                <chart.icon className="w-4 h-4 text-purple-600" strokeWidth={1.5} />
              </div>
              <h4 className="text-[#1a1410] text-xs font-semibold mb-0.5">{chart.name}</h4>
              <p className="text-gray-400 text-[10px] leading-relaxed font-light">{chart.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex flex-col items-center gap-4">
            <a
              href="https://t.me/PipBudBot"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 via-purple-500 to-purple-700 text-white px-10 py-4.5 rounded-full text-base font-medium transition-all duration-300 shadow-[0_8px_30px_rgba(139,92,246,0.3)] hover:shadow-[0_12px_40px_rgba(139,92,246,0.4)] hover:-translate-y-1 active:translate-y-0 overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <BarChart3 className="w-5 h-5 relative z-10" />
              <span className="relative z-10">See Your Analytics</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300 relative z-10" />
            </a>
            <div className="flex items-center gap-2 text-sm text-gray-500 font-light">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              Start tracking your performance in 30 seconds
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#fcf9f6] via-[#fcf9f6]/80 to-transparent pointer-events-none" />
    </section>
  );
}