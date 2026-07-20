import Link from 'next/link';
import { MessageCircle, Mail, Sparkles, Heart, Shield, Zap } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#fcf9f6] border-t border-purple-100/30 pt-16 pb-8 px-4 overflow-hidden">
      {/* Paper texture */}
      <div className="absolute inset-0 opacity-[0.015]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px',
        }} />
      </div>

      {/* Decorative gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-300/30 to-transparent" />
      
      <div className="relative max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4 group">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-400/20 to-purple-600/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <Image 
                  src="/logo.PNG" 
                  alt="PipBud Logo" 
                  width={44} 
                  height={44} 
                  className="relative z-10 rounded-xl border-2 border-purple-100/50 group-hover:border-purple-300/50 transition-colors duration-300"
                />
              </div>
              <span className="text-xl font-bold tracking-tight">
                <span className="text-[#1a1410]">Pip</span>
                <span className="text-purple-600">Bud</span>
              </span>
              <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 bg-purple-50/80 border border-purple-100/50 rounded-full text-[9px] font-medium text-purple-600">
                <Sparkles className="w-2.5 h-2.5" />
                Beta
              </span>
            </Link>
            <p className="text-gray-600 text-sm leading-relaxed max-w-sm font-light mb-4">
              AI-powered trading companion on Telegram. Journal trades, get AI coaching, and improve your performance.
            </p>
            <a
              href="https://t.me/PipBudBot"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 text-sm transition-colors group"
            >
              <MessageCircle className="w-4 h-4" />
              <span>@PipBudBot on Telegram</span>
              <span className="w-0 group-hover:w-4 h-px bg-purple-300 transition-all duration-300" />
            </a>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-[#1a1410] font-semibold mb-4 text-sm tracking-wide">Product</h4>
            <ul className="space-y-3">
              {[
                { label: 'Features', href: '#features' },
                { label: 'How It Works', href: '#how-it-works' },
                { label: 'AI Coach', href: '#ai-coach' },
                { label: 'Pricing', href: '#pricing' },
                { label: 'FAQ', href: '#faq' },
              ].map((item) => (
                <li key={item.label}>
                  <a 
                    href={item.href} 
                    className="text-gray-500 hover:text-purple-600 text-sm transition-colors duration-200 hover:pl-1"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Links */}
          <div>
            <h4 className="text-[#1a1410] font-semibold mb-4 text-sm tracking-wide">Connect</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://t.me/PipBudBot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-500 hover:text-purple-600 text-sm transition-colors duration-200 group"
                >
                  <MessageCircle className="w-4 h-4" />
                  Telegram Bot
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/pipbud_bot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-500 hover:text-purple-600 text-sm transition-colors duration-200 group"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                  Twitter / X
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@pipbud.xyz"
                  className="flex items-center gap-2 text-gray-500 hover:text-purple-600 text-sm transition-colors duration-200 group"
                >
                  <Mail className="w-4 h-4" />
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Trust / Social Proof */}
          <div>
            <h4 className="text-[#1a1410] font-semibold mb-4 text-sm tracking-wide">Trust</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-gray-600 font-light">
                <Heart className="w-4 h-4 text-rose-400" />
                <span>500+ Active Traders</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600 font-light">
                <Shield className="w-4 h-4 text-emerald-400" />
                <span>100% Free Forever</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600 font-light">
                <Zap className="w-4 h-4 text-amber-400" />
                <span>AI-Powered Analytics</span>
              </div>
              <div className="mt-4 p-3 bg-purple-50/50 rounded-xl border border-purple-100/30">
                <p className="text-xs text-gray-500 font-light leading-relaxed">
                  ✦ Built for traders, by traders
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-purple-100/30 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <p className="text-gray-500 text-sm font-light">
              &copy; {currentYear} PipBud. All rights reserved.
            </p>
            <span className="hidden sm:inline w-px h-4 bg-purple-200/50" />
          </div>
          <div className="flex items-center gap-6">
            <Link 
              href="/privacy" 
              className="text-gray-500 hover:text-purple-600 text-sm transition-colors duration-200 font-light"
            >
              Privacy Policy
            </Link>
            <span className="w-px h-4 bg-purple-200/50" />
            <Link 
              href="/terms" 
              className="text-gray-500 hover:text-purple-600 text-sm transition-colors duration-200 font-light"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}