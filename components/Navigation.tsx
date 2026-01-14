'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X, Music } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/artistic-practice', label: 'Artistic Practice' },
  { href: '/performances', label: 'Performances' },
  { href: '/media', label: 'Media' },
  { href: '/press', label: 'Press' },
  { href: '/music', label: 'Music' },
  { href: '/contact', label: 'Contact' },
];

export default function Navigation() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <nav className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 text-xl font-bold text-[#1a1a2e] hover:text-[#c9a227] transition-colors"
          >
            <Music className="w-6 h-6 text-[#c9a227]" />
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
            className="lg:hidden p-2 text-gray-700 hover:text-[#c9a227] transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-100 py-4">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 text-base font-medium rounded-md transition-colors ${
                    pathname === link.href
                      ? 'text-[#c9a227] bg-[#c9a227]/10'
                      : 'text-gray-700 hover:text-[#c9a227] hover:bg-gray-50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mx-4 mt-4 inline-flex items-center justify-center px-5 py-3 bg-[#1a1a2e] text-white text-base font-medium rounded-full hover:bg-[#c9a227] transition-colors"
              >
                Book Now
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
