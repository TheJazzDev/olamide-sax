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
    <footer className="bg-[#1a1a2e] text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 text-xl font-bold mb-4">
              <Music className="w-6 h-6 text-[#c9a227]" />
              <span>Olamide Sax</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              UK-based Nigerian multidisciplinary music artist blending Gospel, African Contemporary, and Repertoire music.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://youtube.com/@olamidesax"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#c9a227] transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#c9a227] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#c9a227] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-[#c9a227] transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#c9a227] mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:Olaniyanolamidephillip@gmail.com"
                  className="text-gray-400 hover:text-[#c9a227] transition-colors text-sm break-all"
                >
                  Olaniyanolamidephillip@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#c9a227] mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 text-sm">United Kingdom</span>
              </li>
            </ul>
          </div>

          {/* Band */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Lammy Wonder Music</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Professional music band delivering live performances across gospel worship, African contemporary music, and repertoire-based interpretations.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-5 py-2.5 bg-[#c9a227] text-[#1a1a2e] text-sm font-semibold rounded-full hover:bg-[#e8d48b] transition-colors"
            >
              Book for Events
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} Olamide Sax. All rights reserved.</p>
            <p>Founder & Lead Artist, Lammy Wonder Music</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
