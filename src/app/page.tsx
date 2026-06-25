'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import {
  ArrowRight, Bot, BarChart3, Brain, MessageCircle,
  Shield, Zap, Star, CheckCircle2, ChevronRight,
  TrendingUp, Eye, Target, Clock, Sparkles,
  Menu, X, Send, Users, LineChart, Activity,
  DollarSign, Heart, Trophy, Rocket
} from 'lucide-react';

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <main ref={containerRef} className="bg-black min-h-screen overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <SocialProof />
      <ProblemSection />
      <SolutionSection />
      <FeaturesGrid />
      <HowItWorks />
      <AICoachSection />
      <AnalyticsSection />
      <Testimonials />
      <PricingSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  );
}