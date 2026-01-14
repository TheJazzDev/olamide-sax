import Image from 'next/image';
import Link from 'next/link';
import { Play, Music, Camera, ChevronRight, ExternalLink } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Media | Olamide Sax',
  description: 'Watch performances, listen to music, and view photos of Olamide Sax - UK-based Nigerian saxophonist, vocalist, and keyboardist.',
};

const videos = [
  {
    title: 'Vibes Grooves Mixtape Vol. 1',
    platform: 'YouTube',
    description: 'A collection of soulful saxophone and vocal performances.',
    embedId: 'dQw4w9WgXcQ', // Placeholder - replace with actual video ID
    url: 'https://youtube.com/@olamidesax',
  },
  {
    title: 'Gbedu Vibes',
    platform: 'YouTube',
    description: 'African contemporary music performance.',
    embedId: 'dQw4w9WgXcQ', // Placeholder - replace with actual video ID
    url: 'https://youtube.com/@olamidesax',
  },
  {
    title: 'Live Performance - BME United Doncaster',
    platform: 'YouTube',
    description: 'Cultural celebration performance featuring gospel and African music.',
    embedId: 'dQw4w9WgXcQ', // Placeholder - replace with actual video ID
    url: 'https://youtube.com/@olamidesax',
  },
];

const photos = [
  {
    src: '/images/olamide-sax-hero.jpg',
    alt: 'Olamide Sax performing with saxophone',
    category: 'Performance',
  },
  {
    src: '/images/olamide-sax-mayor.jpg',
    alt: 'Olamide Sax with dignitary',
    category: 'Event',
  },
  {
    src: '/images/olamide-sax-portrait.jpg',
    alt: 'Olamide Sax portrait',
    category: 'Portrait',
  },
];

export default function MediaPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-[#1a1a2e] text-white">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-[#c9a227]/20 text-[#c9a227] text-sm font-medium rounded-full mb-6">
              Gallery
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Media
            </h1>
            <p className="text-xl text-gray-300">
              Watch performances, listen to music, and explore the visual journey of Olamide Sax
            </p>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-12 bg-[#c9a227]/10 rounded-xl flex items-center justify-center">
              <Play className="w-6 h-6 text-[#c9a227]" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a2e]">Videos</h2>
              <p className="text-gray-600">Live performances and music videos</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {videos.map((video, index) => (
              <div key={index} className="bg-gray-50 rounded-xl overflow-hidden">
                <div className="relative aspect-video bg-gray-200">
                  <div className="absolute inset-0 flex items-center justify-center bg-[#1a1a2e]/90">
                    <div className="text-center text-white p-4">
                      <Play className="w-12 h-12 mx-auto mb-2 text-[#c9a227]" />
                      <p className="text-sm">Video available on YouTube</p>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <span className="text-xs font-medium text-[#c9a227] uppercase tracking-wide">
                    {video.platform}
                  </span>
                  <h3 className="font-bold text-[#1a1a2e] mt-1 mb-2">{video.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{video.description}</p>
                  <a
                    href={video.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-[#c9a227] hover:text-[#b8931f]"
                  >
                    Watch on YouTube
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="https://youtube.com/@olamidesax"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#1a1a2e] text-white font-semibold rounded-full hover:bg-[#16213e] transition-colors"
            >
              View All Videos on YouTube
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Audio Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-12 bg-[#c9a227]/10 rounded-xl flex items-center justify-center">
              <Music className="w-6 h-6 text-[#c9a227]" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a2e]">Audio</h2>
              <p className="text-gray-600">Stream music on Audiomack</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl">
              <div className="flex items-start gap-4">
                <div className="w-20 h-20 bg-[#1a1a2e] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Music className="w-10 h-10 text-[#c9a227]" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-[#1a1a2e] text-lg">Gospel Medley</h3>
                  <p className="text-gray-500 text-sm mb-2">Audiomack • 2026</p>
                  <p className="text-gray-600 text-sm mb-4">
                    A powerful collection of gospel favorites delivered with soul and passion.
                  </p>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-[#c9a227] hover:text-[#b8931f]"
                  >
                    Listen on Audiomack
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl">
              <div className="flex items-start gap-4">
                <div className="w-20 h-20 bg-[#1a1a2e] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Music className="w-10 h-10 text-[#c9a227]" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-[#1a1a2e] text-lg">Vibes Groove Mixtape Vol. 1</h3>
                  <p className="text-gray-500 text-sm mb-2">Audiomack • 2024</p>
                  <p className="text-gray-600 text-sm mb-4">
                    A mixtape featuring African contemporary vibes and groove.
                  </p>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-[#c9a227] hover:text-[#b8931f]"
                  >
                    Listen on Audiomack
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-12 bg-[#c9a227]/10 rounded-xl flex items-center justify-center">
              <Camera className="w-6 h-6 text-[#c9a227]" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a2e]">Photos</h2>
              <p className="text-gray-600">Performance shots and portraits</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {photos.map((photo, index) => (
              <div
                key={index}
                className="group relative aspect-[3/4] rounded-xl overflow-hidden cursor-pointer"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <span className="text-xs font-medium text-[#c9a227] uppercase tracking-wide">
                      {photo.category}
                    </span>
                    <p className="text-white text-sm mt-1">{photo.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#c9a227]">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e] mb-4">
            Want to See More?
          </h2>
          <p className="text-[#1a1a2e]/80 text-lg mb-8 max-w-2xl mx-auto">
            Subscribe to the YouTube channel for the latest performances and music releases.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://youtube.com/@olamidesax"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#1a1a2e] text-white font-semibold rounded-full hover:bg-[#16213e] transition-colors"
            >
              Subscribe on YouTube
              <ExternalLink className="w-5 h-5" />
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#1a1a2e] font-semibold rounded-full hover:bg-gray-100 transition-colors"
            >
              Book a Performance
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
