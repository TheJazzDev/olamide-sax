'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Menu, X, Music } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/artistic-practice', label: 'Artistic Practice' },
  { href: '/performances', label: 'Performances' },
  { href: '/media', label: 'Media' },
  { href: '/press', label: 'Press' },
  { href: '/contact', label: 'Contact' },
];

export default function Navigation() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <nav className="container-custom">
          <div className="flex items-center justify-between h-12 md:h-16">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2 text-lg sm:text-xl font-bold text-[#1a1a2e] hover:text-[#c9a227] transition-colors relative z-[60]"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Music className="w-5 h-5 sm:w-6 sm:h-6 text-[#c9a227]" />
              <span>Olamide Sax</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    pathname === link.href
                      ? 'text-[#c9a227] bg-[#c9a227]/10'
                      : 'text-gray-700 hover:text-[#c9a227] hover:bg-gray-50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Book Now Button (Desktop) */}
            <Link
              href="/contact"
              className="hidden lg:inline-flex items-center px-5 py-2.5 bg-[#1a1a2e] text-white text-sm font-medium rounded-full hover:bg-[#c9a227] transition-colors"
            >
              Book Now
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-[#c9a227] transition-colors relative z-[60]"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Full-Screen Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-[55] animate-in fade-in duration-300">
          {/* Backdrop with blur */}
          <div
            className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e]/98 via-[#0f0f1e]/98 to-[#1a1a2e]/98 backdrop-blur-xl"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Menu Content */}
          <div className="relative h-full flex flex-col items-center justify-center px-6 animate-in slide-in-from-top duration-500">
            {/* Navigation Links */}
            <nav className="flex flex-col items-center gap-2 w-full max-w-sm">
              {navLinks.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`w-full text-center px-6 py-4 text-lg font-semibold rounded-xl transition-all duration-300 ${
                    pathname === link.href
                      ? 'text-[#1a1a2e] bg-[#c9a227] shadow-lg shadow-[#c9a227]/30'
                      : 'text-white hover:text-[#c9a227] hover:bg-white/10'
                  }`}
                  style={{
                    animationDelay: `${index * 50}ms`,
                    animation: 'slideInFromRight 0.5s ease-out forwards'
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Book Now Button */}
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-8 w-full max-w-sm inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#c9a227] to-[#d4ac3a] text-[#1a1a2e] text-lg font-bold rounded-full hover:shadow-2xl hover:shadow-[#c9a227]/50 transition-all hover:scale-105 shadow-xl"
              style={{
                animationDelay: `${navLinks.length * 50}ms`,
                animation: 'slideInFromRight 0.5s ease-out forwards'
              }}
            >
              Book Now
            </Link>

            {/* Decorative Elements */}
            <div className="absolute top-20 right-10 w-20 h-20 border-2 border-[#c9a227]/20 rounded-full animate-spin-slow" style={{ animationDuration: '20s' }} />
            <div className="absolute bottom-20 left-10 w-16 h-16 border-2 border-[#c9a227]/20 rounded-full animate-spin-slow" style={{ animationDuration: '15s', animationDirection: 'reverse' }} />
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes slideInFromRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
}
