import Image from 'next/image';
import Link from 'next/link';
import { Play, Headphones, Newspaper, ChevronRight, Music2, Mic, Piano } from 'lucide-react';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-[#1a1a2e] overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="container-custom relative z-10 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="text-white">
              <div className="animate-fade-in">
                <span className="inline-block px-4 py-2 bg-[#c9a227]/20 text-[#c9a227] text-sm font-medium rounded-full mb-6">
                  Founder & Lead Artist, Lammy Wonder Music
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 animate-fade-in-delay-1">
                Olamide Sax
              </h1>

              <p className="text-xl md:text-2xl text-[#c9a227] font-medium mb-6 animate-fade-in-delay-2">
                Vocalist &bull; Saxophonist &bull; Keyboardist
              </p>

              <p className="text-lg text-gray-300 leading-relaxed mb-8 max-w-xl animate-fade-in-delay-3">
                A UK-based Nigerian multidisciplinary music artist blending Gospel, African Contemporary,
                and Repertoire music through live performance, worship, and community-focused cultural events.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 animate-fade-in-delay-3">
                <Link
                  href="/media"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#c9a227] text-[#1a1a2e] font-semibold rounded-full hover:bg-[#e8d48b] transition-colors"
                >
                  <Play className="w-5 h-5" />
                  Watch Performances
                </Link>
                <Link
                  href="/music"
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-colors"
                >
                  <Headphones className="w-5 h-5" />
                  Listen to Music
                </Link>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative animate-fade-in-delay-2">
              <div className="relative aspect-[3/4] max-w-md mx-auto">
                <div className="absolute inset-0 bg-[#c9a227]/20 rounded-2xl transform rotate-3" />
                <div className="relative h-full rounded-2xl overflow-hidden border-4 border-[#c9a227]/30">
                  <Image
                    src="/images/olamide-sax-hero.jpg"
                    alt="Olamide Sax - Professional Saxophonist"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-[#c9a227] rounded-full" />
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e] mb-6">
              The Art of Musical Expression
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              <strong>Olamide Sax</strong> (Olaniyan Olamide Phillips) is a professional vocalist and instrumentalist
              whose work spans gospel worship, African contemporary music, and cross-cultural repertoire performance.
              With over a decade of artistic development, he has performed at public cultural events in the UK,
              including engagements attended by the Mayor of Doncaster and distinguished council leaders.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-[#c9a227] font-semibold hover:gap-3 transition-all"
            >
              Learn More About Olamide
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e] mb-4">
              Musical Expertise
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A multidisciplinary artist delivering excellence across multiple instruments and vocal performance
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Saxophone */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-[#c9a227]/10 rounded-xl flex items-center justify-center mb-6">
                <Music2 className="w-8 h-8 text-[#c9a227]" />
              </div>
              <h3 className="text-xl font-bold text-[#1a1a2e] mb-3">Saxophonist</h3>
              <p className="text-gray-600 leading-relaxed">
                Lead saxophonist with expressive interpretation skills, bringing soul and emotion
                to every performance through masterful saxophone artistry.
              </p>
            </div>

            {/* Vocals */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-[#c9a227]/10 rounded-xl flex items-center justify-center mb-6">
                <Mic className="w-8 h-8 text-[#c9a227]" />
              </div>
              <h3 className="text-xl font-bold text-[#1a1a2e] mb-3">Vocalist</h3>
              <p className="text-gray-600 leading-relaxed">
                Powerful vocal performances spanning gospel worship, African contemporary,
                and repertoire music with authentic emotional delivery.
              </p>
            </div>

            {/* Keyboard */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-[#c9a227]/10 rounded-xl flex items-center justify-center mb-6">
                <Piano className="w-8 h-8 text-[#c9a227]" />
              </div>
              <h3 className="text-xl font-bold text-[#1a1a2e] mb-3">Keyboardist</h3>
              <p className="text-gray-600 leading-relaxed">
                Skilled keyboard harmony creating immersive musical experiences,
                complementing vocals and saxophone for complete performances.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Performance Section */}
      <section className="section-padding bg-[#1a1a2e] text-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-2 bg-[#c9a227]/20 text-[#c9a227] text-sm font-medium rounded-full mb-6">
                Career Highlight
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Performing for the Mayor of Doncaster
              </h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Olamide Sax has had the honor of performing at Black History Month celebrations in Doncaster, UK,
                entertaining the Mayor of Doncaster and senior council leaders at a public cultural event.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#c9a227] rounded-full" />
                  <span className="text-gray-300">Black History Month Celebrations</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#c9a227] rounded-full" />
                  <span className="text-gray-300">BME United Doncaster Events</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#c9a227] rounded-full" />
                  <span className="text-gray-300">Community & Faith Centre Performances</span>
                </li>
              </ul>
              <Link
                href="/performances"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#c9a227] text-[#1a1a2e] font-semibold rounded-full hover:bg-[#e8d48b] transition-colors"
              >
                View All Performances
                <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                <Image
                  src="/images/olamide-sax-mayor.jpg"
                  alt="Olamide Sax with Mayor of Doncaster"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-6">
            {/* Watch Performances */}
            <Link
              href="/media"
              className="group p-8 bg-gray-50 rounded-xl hover:bg-[#1a1a2e] transition-colors"
            >
              <Play className="w-12 h-12 text-[#c9a227] mb-4" />
              <h3 className="text-xl font-bold text-[#1a1a2e] group-hover:text-white mb-2 transition-colors">
                Watch Performances
              </h3>
              <p className="text-gray-600 group-hover:text-gray-300 transition-colors">
                Experience live performances, music videos, and behind-the-scenes content.
              </p>
            </Link>

            {/* Listen to Music */}
            <Link
              href="/music"
              className="group p-8 bg-gray-50 rounded-xl hover:bg-[#1a1a2e] transition-colors"
            >
              <Headphones className="w-12 h-12 text-[#c9a227] mb-4" />
              <h3 className="text-xl font-bold text-[#1a1a2e] group-hover:text-white mb-2 transition-colors">
                Listen to Music
              </h3>
              <p className="text-gray-600 group-hover:text-gray-300 transition-colors">
                Stream releases on Audiomack including Gospel Medley and Vibes Groove Mixtape.
              </p>
            </Link>

            {/* Press & Publications */}
            <Link
              href="/press"
              className="group p-8 bg-gray-50 rounded-xl hover:bg-[#1a1a2e] transition-colors"
            >
              <Newspaper className="w-12 h-12 text-[#c9a227] mb-4" />
              <h3 className="text-xl font-bold text-[#1a1a2e] group-hover:text-white mb-2 transition-colors">
                Press & Publications
              </h3>
              <p className="text-gray-600 group-hover:text-gray-300 transition-colors">
                Read about Olamide Sax in community and cultural publications.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#c9a227]">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e] mb-4">
            Ready to Book Olamide Sax?
          </h2>
          <p className="text-[#1a1a2e]/80 text-lg mb-8 max-w-2xl mx-auto">
            Available for weddings, corporate events, church services, cultural celebrations,
            and private functions across the United Kingdom.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#1a1a2e] text-white font-semibold rounded-full hover:bg-[#16213e] transition-colors"
          >
            Get in Touch
            <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
