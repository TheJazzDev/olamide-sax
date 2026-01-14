import Link from 'next/link';
import { ChevronRight, Music, ExternalLink, Play, Disc } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Music | Olamide Sax',
  description: 'Stream and listen to music releases from Olamide Sax including Gospel Medley, Vibes Groove Mixtape, and Gbedu Vibes.',
};

const releases = [
  {
    title: 'Gospel Medley',
    platform: 'Audiomack',
    year: '2026',
    description: 'A powerful collection of gospel favorites, featuring soulful saxophone interpretations and heartfelt vocal performances.',
    url: '#',
    featured: true,
  },
  {
    title: 'Vibes Groove Mixtape Vol. 1',
    platform: 'Audiomack',
    year: '2024',
    description: 'An eclectic mix of African contemporary vibes featuring saxophone solos, keyboard harmonies, and vocal tracks.',
    url: '#',
    featured: true,
  },
  {
    title: 'Gbedu Vibes',
    platform: 'YouTube',
    year: '2025',
    description: 'High-energy African groove showcasing the vibrant sounds of contemporary African music.',
    url: 'https://youtube.com/@olamidesax',
    featured: false,
  },
];

export default function MusicPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-[#1a1a2e] text-white">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-[#c9a227]/20 text-[#c9a227] text-sm font-medium rounded-full mb-6">
              Streaming Now
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Music
            </h1>
            <p className="text-xl text-gray-300">
              Stream and enjoy music releases from Olamide Sax across platforms
            </p>
          </div>
        </div>
      </section>

      {/* Featured Releases */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e] mb-4">
              Selected Releases
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore the musical catalog featuring Gospel, African Contemporary, and Repertoire performances
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {releases.filter(r => r.featured).map((release, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-48 h-48 bg-[#1a1a2e] flex items-center justify-center flex-shrink-0">
                    <Disc className="w-20 h-20 text-[#c9a227]" />
                  </div>
                  <div className="flex-1 p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-semibold text-[#c9a227] uppercase tracking-wide">
                        {release.platform}
                      </span>
                      <span className="text-xs text-gray-400">•</span>
                      <span className="text-xs text-gray-500">{release.year}</span>
                    </div>
                    <h3 className="text-xl font-bold text-[#1a1a2e] mb-3">{release.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {release.description}
                    </p>
                    <a
                      href={release.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#c9a227] text-[#1a1a2e] text-sm font-semibold rounded-full hover:bg-[#e8d48b] transition-colors"
                    >
                      <Play className="w-4 h-4" />
                      Stream Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Releases */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a2e] mb-8">
            All Releases
          </h2>

          <div className="space-y-4">
            {releases.map((release, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl flex flex-col sm:flex-row items-start sm:items-center gap-4"
              >
                <div className="w-16 h-16 bg-[#1a1a2e] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Music className="w-8 h-8 text-[#c9a227]" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-[#1a1a2e]">{release.title}</h3>
                  <p className="text-sm text-gray-500">
                    {release.platform} • {release.year}
                  </p>
                </div>
                <a
                  href={release.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-[#c9a227] hover:text-[#b8931f]"
                >
                  Listen
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Streaming Platforms */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a2e] mb-4">
              Find Olamide Sax
            </h2>
            <p className="text-gray-600">
              Stream music on your favorite platforms
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <a
              href="https://youtube.com/@olamidesax"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 bg-gray-50 rounded-xl hover:bg-[#c9a227]/10 transition-colors group"
            >
              <div className="w-14 h-14 bg-red-500 rounded-xl flex items-center justify-center">
                <Play className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-[#1a1a2e]">YouTube</h3>
                <p className="text-sm text-gray-500">@olamidesax</p>
              </div>
              <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-[#c9a227] ml-auto" />
            </a>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 bg-gray-50 rounded-xl hover:bg-[#c9a227]/10 transition-colors group"
            >
              <div className="w-14 h-14 bg-orange-500 rounded-xl flex items-center justify-center">
                <Music className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-[#1a1a2e]">Audiomack</h3>
                <p className="text-sm text-gray-500">Olamide Sax</p>
              </div>
              <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-[#c9a227] ml-auto" />
            </a>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 bg-gray-50 rounded-xl hover:bg-[#c9a227]/10 transition-colors group sm:col-span-2 lg:col-span-1"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                <Music className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-[#1a1a2e]">Instagram</h3>
                <p className="text-sm text-gray-500">@olamidesax</p>
              </div>
              <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-[#c9a227] ml-auto" />
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#c9a227]">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e] mb-4">
            Book for Your Event
          </h2>
          <p className="text-[#1a1a2e]/80 text-lg mb-8 max-w-2xl mx-auto">
            Experience live performances of these tracks and more at your next event.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#1a1a2e] text-white font-semibold rounded-full hover:bg-[#16213e] transition-colors"
          >
            Book Now
            <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
