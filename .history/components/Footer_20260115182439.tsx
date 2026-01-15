import Link from 'next/link';
import { Music, Mail, MapPin, Youtube, Instagram, Facebook } from 'lucide-react';

const quickLinks = [
  { href: '/about', label: 'About' },
  { href: '/performances', label: 'Performances' },
  { href: '/media', label: 'Media' },
  { href: '/press', label: 'Press' },
  { href: '/contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#0f0f1e] via-[#1a1a2e] to-[#16213e] text-white relative overflow-hidden py-10 pb-0 sm:pt-12 sm:pb-0 md:pt-14 md:pb-0 lg:pt-16 lg:pb-0">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-[#c9a227]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-[#c9a227]/10 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 text-base sm:text-lg md:text-xl font-black mb-4 sm:mb-5 hover:text-[#c9a227] transition-colors">
              <Music className="w-5 h-5 sm:w-6 sm:h-6 text-[#c9a227]" />
              <span>Olamide Sax</span>
            </Link>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-5">
              UK-based Nigerian multidisciplinary music artist blending Gospel, African Contemporary, and Repertoire music.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://youtube.com/@olamidesax"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#c9a227] transition-all hover:scale-110 shadow-lg"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#c9a227] transition-all hover:scale-110 shadow-lg"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#c9a227] transition-all hover:scale-110 shadow-lg"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm sm:text-base md:text-lg font-black mb-3 sm:mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-[#c9a227] transition-colors text-xs sm:text-sm hover:pl-2 inline-block font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm sm:text-base md:text-lg font-black mb-3 sm:mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 sm:gap-3">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-[#c9a227] mt-0.5 shrink-0" />
                <a
                  href="mailto:Olaniyanolamidephillip@gmail.com"
                  className="text-gray-400 hover:text-[#c9a227] transition-colors text-xs sm:text-sm break-all"
                >
                  Olaniyanolamidephillip@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[#c9a227] mt-0.5 shrink-0" />
                <span className="text-gray-400 text-xs sm:text-sm">United Kingdom</span>
              </li>
            </ul>
          </div>

          {/* Band */}
          <div>
            <h3 className="text-sm sm:text-base md:text-lg font-black mb-3 sm:mb-4">Lammy Wonder Music</h3>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-5">
              Professional music band delivering live performances across gospel worship, African contemporary music, and repertoire-based interpretations.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-4 py-2 sm:px-5 sm:py-2.5 bg-gradient-to-r from-[#c9a227] to-[#d4ac3a] text-[#0a0a0f] text-xs sm:text-sm font-bold rounded-full hover:bg-[#e8d48b] transition-all hover:scale-105 shadow-xl hover:shadow-2xl"
            >
              Book for Events
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 relative z-10 mt-10 sm:mt-12 md:mt-14 lg:mt-16">
        <div className="container-custom py-6 sm:py-8 pb-8 sm:pb-10 md:pb-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-2 sm:gap-3 text-xs sm:text-sm text-gray-400">
            <p className="font-medium">&copy; {new Date().getFullYear()} Olamide Sax. All rights reserved.</p>
            <p className="text-center md:text-right font-medium">Founder & Lead Artist, Lammy Wonder Music</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
