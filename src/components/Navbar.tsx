'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, MessageCircle, Sparkles, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const navLinks = [
  { name: 'Features', href: '#features' },
  { name: 'How It Works', href: '#how-it-works' },
  { name: 'AI Coach', href: '#ai-coach' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'FAQ', href: '#faq' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/90 backdrop-blur-xl border-b border-purple-100/30 shadow-[0_4px_30px_rgba(0,0,0,0.04)]' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo - refined */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-400/20 to-purple-600/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Image 
                src="/logo.PNG" 
                alt="PipBud Logo" 
                width={44} 
                height={44}
                className="relative z-10 rounded-full border-2 border-purple-100/50 group-hover:border-purple-300/50 transition-colors duration-300"
              />
            </div>
            <span className="text-xl font-bold tracking-tight">
              <span className={`transition-colors duration-300 ${scrolled ? 'text-[#1a1410]' : 'text-white'}`}>
                Pip
              </span>
              <span className={`transition-colors duration-300 ${scrolled ? 'text-purple-600' : 'text-purple-400'}`}>
                Bud
              </span>
            </span>
            <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 bg-purple-50/80 backdrop-blur-sm border border-purple-100/50 rounded-full text-[10px] font-medium text-purple-600 tracking-wider uppercase">
              <Sparkles className="w-3 h-3" />
              Beta
            </span>
          </Link>

          {/* Desktop Nav - refined */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full ${
                  scrolled 
                    ? 'text-gray-600 hover:text-purple-600 hover:bg-purple-50/50' 
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.name}
                <span className="absolute inset-x-4 -bottom-0.5 h-0.5 bg-purple-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </a>
            ))}
          </div>

          {/* CTA - refined */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://t.me/PipBudBot"
              target="_blank"
              rel="noopener noreferrer"
              className={`group inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                scrolled
                  ? 'bg-gradient-to-r from-purple-600 to-purple-700 text-white shadow-[0_4px_20px_rgba(139,92,246,0.25)] hover:shadow-[0_8px_30px_rgba(139,92,246,0.35)] hover:-translate-y-0.5'
                  : 'bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/20 hover:border-white/30'
              }`}
            >
              <MessageCircle className="w-4 h-4" />
              <span>Try Free on Telegram</span>
              <ChevronDown className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>

          {/* Mobile menu button - refined */}
          <button
            className={`lg:hidden p-2 rounded-full transition-all duration-300 ${
              scrolled 
                ? 'text-gray-600 hover:bg-purple-50/50 hover:text-purple-600' 
                : 'text-white hover:bg-white/10'
            }`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu - refined paper design */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden bg-white/95 backdrop-blur-xl border-b border-purple-100/30 shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
          >
            <div className="px-4 py-6 space-y-1">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 text-gray-700 hover:text-purple-600 hover:bg-purple-50/50 rounded-xl transition-all duration-200 font-medium"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  {link.name}
                </motion.a>
              ))}
              
              <div className="pt-4 mt-2 border-t border-purple-100/30">
                <a
                  href="https://t.me/PipBudBot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 py-3.5 rounded-xl text-sm font-medium w-full transition-all duration-300 hover:shadow-[0_8px_30px_rgba(139,92,246,0.3)] hover:-translate-y-0.5"
                >
                  <MessageCircle className="w-4 h-4" />
                  Try Free on Telegram
                </a>
                <p className="text-center text-xs text-gray-400 mt-3 font-light">
                  ✦ Join 500+ traders already using PipBud ✦
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}