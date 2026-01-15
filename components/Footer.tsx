import Link from 'next/link';
import { Music, Mail, MapPin, Youtube, Instagram, Facebook } from 'lucide-react';

const quickLinks = [
  { href: '/about', label: 'About' },
  { href: '/performances', label: 'Performances' },
  { href: '/media', label: 'Media' },
  { href: '/music', label: 'Music' },
  { href: '/contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#0f0f1e] via-[#1a1a2e] to-[#16213e] text-white relative overflow-hidden pt-16 pb-0 sm:pt-20 sm:pb-0 md:pt-24 md:pb-0 lg:pt-32 lg:pb-0">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#c9a227]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#c9a227]/10 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 md:gap-16 lg:gap-20">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 text-xl sm:text-2xl md:text-3xl font-black mb-6 sm:mb-8 hover:text-[#c9a227] transition-colors">
              <Music className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-[#c9a227]" />
              <span>Olamide Sax</span>
            </Link>
            <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8">
              UK-based Nigerian multidisciplinary music artist blending Gospel, African Contemporary, and Repertoire music.
            </p>
            <div className="flex items-center gap-4 sm:gap-5">
              <a
                href="https://youtube.com/@olamidesax"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#c9a227] transition-all hover:scale-110 shadow-lg"
                aria-label="YouTube"
              >
                <Youtube className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#c9a227] transition-all hover:scale-110 shadow-lg"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#c9a227] transition-all hover:scale-110 shadow-lg"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-black mb-6 sm:mb-8">Quick Links</h3>
            <ul className="space-y-3 sm:space-y-4">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-[#c9a227] transition-colors text-base sm:text-lg md:text-xl hover:pl-2 inline-block font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-black mb-6 sm:mb-8">Contact</h3>
            <ul className="space-y-4 sm:space-y-6">
              <li className="flex items-start gap-3 sm:gap-4">
                <Mail className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-[#c9a227] mt-1 shrink-0" />
                <a
                  href="mailto:Olaniyanolamidephillip@gmail.com"
                  className="text-gray-400 hover:text-[#c9a227] transition-colors text-sm sm:text-base md:text-lg break-all"
                >
                  Olaniyanolamidephillip@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3 sm:gap-4">
                <MapPin className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-[#c9a227] mt-1 shrink-0" />
                <span className="text-gray-400 text-sm sm:text-base md:text-lg">United Kingdom</span>
              </li>
            </ul>
          </div>

          {/* Band */}
          <div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-black mb-6 sm:mb-8">Lammy Wonder Music</h3>
            <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8">
              Professional music band delivering live performances across gospel worship, African contemporary music, and repertoire-based interpretations.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 sm:px-7 sm:py-4 bg-gradient-to-r from-[#c9a227] to-[#d4ac3a] text-[#0a0a0f] text-base sm:text-lg font-bold rounded-full hover:bg-[#e8d48b] transition-all hover:scale-105 shadow-xl hover:shadow-2xl"
            >
              Book for Events
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 relative z-10 mt-16 sm:mt-20 md:mt-24 lg:mt-32">
        <div className="container-custom py-12 sm:py-16 md:py-20 lg:py-24">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-5 text-base sm:text-lg md:text-xl text-gray-400">
            <p className="font-medium">&copy; {new Date().getFullYear()} Olamide Sax. All rights reserved.</p>
            <p className="text-center md:text-right font-medium">Founder & Lead Artist, Lammy Wonder Music</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
