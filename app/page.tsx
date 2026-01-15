import Image from 'next/image';
import Link from 'next/link';
import { Play, Headphones, Newspaper, ChevronRight, Music2, Mic, Piano } from 'lucide-react';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[95vh] flex items-center overflow-hidden bg-gradient-to-br from-[#0a0a0f] via-[#1a1a2e] to-[#0f0f1e]">
        {/* Sophisticated Background Elements */}
        <div className="absolute inset-0">
          {/* Large sophisticated gradient orbs */}
          <div className="absolute -top-40 -right-40 w-[800px] h-[800px] bg-[#c9a227]/8 rounded-full blur-[120px]" />
          <div className="absolute -bottom-40 -left-40 w-[700px] h-[700px] bg-[#c9a227]/5 rounded-full blur-[100px]" />

          {/* Elegant geometric patterns */}
          <div className="absolute top-20 right-20 w-32 h-32 border border-[#c9a227]/10 rotate-45" />
          <div className="absolute bottom-32 left-20 w-24 h-24 border border-[#c9a227]/10 rotate-12" />

          {/* Subtle moving gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#c9a227]/3 to-transparent" />
        </div>

        <div className="container-custom relative z-10 py-16 sm:py-20 md:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="text-white">
              <div className="animate-fade-in">
                <span className="inline-block px-4 py-2 sm:px-5 sm:py-2.5 bg-gradient-to-r from-[#c9a227] to-[#d4ac3a] text-[#0a0a0f] text-sm sm:text-base font-bold rounded-full mb-6 sm:mb-8 shadow-lg shadow-[#c9a227]/30 hover:shadow-xl hover:shadow-[#c9a227]/50 transition-all">
                  Founder & Lead Artist, Lammy Wonder Music
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-4 sm:mb-6 animate-fade-in-delay-1 leading-tight">
                <span className="block text-white">Olamide</span>
                <span className="block bg-gradient-to-r from-[#c9a227] via-[#e8d48b] to-[#c9a227] bg-clip-text text-transparent">Sax</span>
              </h1>

              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#c9a227] font-bold mb-6 sm:mb-8 animate-fade-in-delay-2 tracking-wide">
                Vocalist &bull; Saxophonist &bull; Keyboardist
              </p>

              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed mb-8 sm:mb-10 max-w-2xl animate-fade-in-delay-3 font-light">
                A UK-based Nigerian multidisciplinary music artist blending Gospel, African Contemporary,
                and Repertoire music through live performance, worship, and community-focused cultural events.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 sm:gap-5 animate-fade-in-delay-3">
                <Link
                  href="/media"
                  className="inline-flex items-center gap-2 px-6 py-3 sm:px-7 sm:py-4 md:px-8 md:py-5 bg-gradient-to-r from-[#c9a227] to-[#d4ac3a] text-[#0a0a0f] text-base sm:text-lg md:text-xl font-bold rounded-full hover:shadow-2xl hover:shadow-[#c9a227]/50 transition-all hover:scale-110 shadow-xl"
                >
                  <Play className="w-5 h-5 sm:w-6 sm:h-6" />
                  Watch Performances
                </Link>
                <Link
                  href="/music"
                  className="inline-flex items-center gap-2 px-6 py-3 sm:px-7 sm:py-4 md:px-8 md:py-5 border-2 border-[#c9a227] text-[#c9a227] text-base sm:text-lg md:text-xl font-bold rounded-full hover:bg-[#c9a227] hover:text-[#0a0a0f] transition-all hover:scale-110 backdrop-blur-sm"
                >
                  <Headphones className="w-5 h-5 sm:w-6 sm:h-6" />
                  Listen to Music
                </Link>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative animate-fade-in-delay-2 mt-12 lg:mt-0">
              <div className="relative aspect-[3/4] max-w-lg mx-auto">
                {/* Multiple glowing layers for WOW effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#c9a227] to-[#d4ac3a] rounded-3xl transform rotate-6 blur-2xl opacity-30 animate-pulse" />
                <div className="absolute inset-0 bg-gradient-to-tl from-[#c9a227] to-transparent rounded-3xl transform -rotate-3 blur-xl opacity-20" />

                {/* Main image container with enhanced border */}
                <div className="relative h-full rounded-3xl overflow-hidden border-4 border-[#c9a227] shadow-[0_0_50px_rgba(201,162,39,0.5)] hover:shadow-[0_0_80px_rgba(201,162,39,0.7)] hover:scale-105 transition-all duration-500 group">
                  <Image
                    src="/images/IMG_0298.JPG"
                    alt="Olamide Sax - Professional Saxophonist"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    priority
                  />
                  {/* Overlay gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#c9a227]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Corner accent */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 border-4 border-[#c9a227] rounded-full opacity-50" />
                <div className="absolute -top-4 -left-4 w-16 h-16 border-4 border-[#c9a227] rounded-full opacity-30" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="section-padding bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#c9a227]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#c9a227]/5 rounded-full blur-3xl" />

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6 sm:mb-8">
              <span className="text-[#c9a227] text-sm sm:text-base md:text-lg font-bold uppercase tracking-wider">About the Artist</span>
              <div className="w-20 sm:w-24 md:w-32 h-1.5 bg-gradient-to-r from-[#c9a227] to-[#e8d48b] mx-auto mt-3" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-[#1a1a2e] mb-6 sm:mb-8 leading-tight">
              The Art of Musical <span className="text-[#c9a227]">Expression</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed mb-8 sm:mb-10">
              <strong className="text-[#1a1a2e] font-bold">Olamide Sax</strong> (Olaniyan Olamide Phillips) is a professional vocalist and instrumentalist
              whose work spans gospel worship, African contemporary music, and cross-cultural repertoire performance.
              With over a decade of artistic development, he has performed at public cultural events in the UK,
              including engagements attended by the Mayor of Doncaster and distinguished council leaders.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#c9a227] to-[#d4ac3a] text-[#0a0a0f] text-base sm:text-lg md:text-xl font-bold rounded-full hover:shadow-2xl hover:shadow-[#c9a227]/50 transition-all hover:scale-110 shadow-xl group"
            >
              Learn More About Olamide
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section-padding bg-white relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%231a1a2e' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="container-custom relative z-10">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <div className="inline-block mb-6 sm:mb-8">
              <span className="text-[#c9a227] text-sm sm:text-base md:text-lg font-bold uppercase tracking-wider">Expertise</span>
              <div className="w-20 sm:w-24 md:w-32 h-1.5 bg-gradient-to-r from-[#c9a227] to-[#e8d48b] mx-auto mt-3" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-[#1a1a2e] mb-4 sm:mb-6 leading-tight">
              Musical <span className="text-[#c9a227]">Expertise</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto">
              A multidisciplinary artist delivering excellence across multiple instruments and vocal performance
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
            {/* Saxophone */}
            <div className="group bg-gradient-to-br from-white to-gray-50 p-8 sm:p-10 rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl hover:shadow-[#c9a227]/20 transition-all duration-300 border-2 border-gray-100 hover:border-[#c9a227] hover:-translate-y-3">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[#c9a227] to-[#d4ac3a] rounded-2xl flex items-center justify-center mb-6 sm:mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all shadow-lg">
                <Music2 className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-[#1a1a2e] mb-3 sm:mb-4">Saxophonist</h3>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
                Lead saxophonist with expressive interpretation skills, bringing soul and emotion
                to every performance through masterful saxophone artistry.
              </p>
            </div>

            {/* Vocals */}
            <div className="group bg-gradient-to-br from-white to-gray-50 p-8 sm:p-10 rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl hover:shadow-[#c9a227]/20 transition-all duration-300 border-2 border-gray-100 hover:border-[#c9a227] hover:-translate-y-3">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[#c9a227] to-[#d4ac3a] rounded-2xl flex items-center justify-center mb-6 sm:mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all shadow-lg">
                <Mic className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-[#1a1a2e] mb-3 sm:mb-4">Vocalist</h3>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
                Powerful vocal performances spanning gospel worship, African contemporary,
                and repertoire music with authentic emotional delivery.
              </p>
            </div>

            {/* Keyboard */}
            <div className="group bg-gradient-to-br from-white to-gray-50 p-8 sm:p-10 rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl hover:shadow-[#c9a227]/20 transition-all duration-300 border-2 border-gray-100 hover:border-[#c9a227] hover:-translate-y-3">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[#c9a227] to-[#d4ac3a] rounded-2xl flex items-center justify-center mb-6 sm:mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all shadow-lg">
                <Piano className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-[#1a1a2e] mb-3 sm:mb-4">Keyboardist</h3>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
                Skilled keyboard harmony creating immersive musical experiences,
                complementing vocals and saxophone for complete performances.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Performance Section */}
      <section className="section-padding bg-gradient-to-br from-[#0f0f1e] via-[#1a1a2e] to-[#16213e] text-white relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#c9a227]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#c9a227]/5 rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
            <div>
              <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-[#c9a227]/20 text-[#c9a227] text-xs sm:text-sm font-medium rounded-full mb-4 sm:mb-6 backdrop-blur-sm border border-[#c9a227]/30">
                Career Highlight
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white to-[#c9a227] bg-clip-text text-transparent">
                Performing for the Mayor of Doncaster
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed mb-4 sm:mb-6">
                Olamide Sax has had the honor of performing at Black History Month celebrations in Doncaster, UK,
                entertaining the Mayor of Doncaster and senior council leaders at a public cultural event.
              </p>
              <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                <li className="flex items-center gap-2 sm:gap-3">
                  <div className="w-2 h-2 bg-[#c9a227] rounded-full shrink-0" />
                  <span className="text-xs sm:text-sm md:text-base text-gray-300">Black History Month Celebrations</span>
                </li>
                <li className="flex items-center gap-2 sm:gap-3">
                  <div className="w-2 h-2 bg-[#c9a227] rounded-full shrink-0" />
                  <span className="text-xs sm:text-sm md:text-base text-gray-300">BME United Doncaster Events</span>
                </li>
                <li className="flex items-center gap-2 sm:gap-3">
                  <div className="w-2 h-2 bg-[#c9a227] rounded-full shrink-0" />
                  <span className="text-xs sm:text-sm md:text-base text-gray-300">Community & Faith Centre Performances</span>
                </li>
              </ul>
              <Link
                href="/performances"
                className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 bg-[#c9a227] text-[#1a1a2e] text-sm sm:text-base font-semibold rounded-full hover:bg-[#e8d48b] transition-all hover:scale-105 shadow-lg"
              >
                View All Performances
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
            </div>
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl shadow-[#c9a227]/10 hover:scale-105 transition-transform duration-500 border-2 border-[#c9a227]/20">
                <Image
                  src="/images/IMG_0986.jpg"
                  alt="Olamide Sax Performance"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a2e]/50 to-transparent opacity-0 hover:opacity-100 transition-opacity" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
            {/* Watch Performances */}
            <Link
              href="/media"
              className="group p-6 sm:p-8 bg-gradient-to-br from-white to-gray-50 rounded-xl sm:rounded-2xl hover:from-[#1a1a2e] hover:to-[#16213e] transition-all duration-300 shadow-sm hover:shadow-xl border border-gray-100 hover:border-[#c9a227]/30 hover:-translate-y-2"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-xl bg-[#c9a227]/10 group-hover:bg-[#c9a227]/20 mb-3 sm:mb-4 transition-colors">
                <Play className="w-5 h-5 sm:w-6 sm:h-6 text-[#c9a227] group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#1a1a2e] group-hover:text-white mb-2 transition-colors">
                Watch Performances
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-600 group-hover:text-gray-300 transition-colors">
                Experience live performances, music videos, and behind-the-scenes content.
              </p>
            </Link>

            {/* Listen to Music */}
            <Link
              href="/music"
              className="group p-6 sm:p-8 bg-gradient-to-br from-white to-gray-50 rounded-xl sm:rounded-2xl hover:from-[#1a1a2e] hover:to-[#16213e] transition-all duration-300 shadow-sm hover:shadow-xl border border-gray-100 hover:border-[#c9a227]/30 hover:-translate-y-2"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-xl bg-[#c9a227]/10 group-hover:bg-[#c9a227]/20 mb-3 sm:mb-4 transition-colors">
                <Headphones className="w-5 h-5 sm:w-6 sm:h-6 text-[#c9a227] group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#1a1a2e] group-hover:text-white mb-2 transition-colors">
                Listen to Music
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-600 group-hover:text-gray-300 transition-colors">
                Stream releases on Audiomack including Gospel Medley and Vibes Groove Mixtape.
              </p>
            </Link>

            {/* Press & Publications */}
            <Link
              href="/press"
              className="group p-6 sm:p-8 bg-gradient-to-br from-white to-gray-50 rounded-xl sm:rounded-2xl hover:from-[#1a1a2e] hover:to-[#16213e] transition-all duration-300 shadow-sm hover:shadow-xl border border-gray-100 hover:border-[#c9a227]/30 hover:-translate-y-2"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-xl bg-[#c9a227]/10 group-hover:bg-[#c9a227]/20 mb-3 sm:mb-4 transition-colors">
                <Newspaper className="w-5 h-5 sm:w-6 sm:h-6 text-[#c9a227] group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#1a1a2e] group-hover:text-white mb-2 transition-colors">
                Press & Publications
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-600 group-hover:text-gray-300 transition-colors">
                Read about Olamide Sax in community and cultural publications.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-[#c9a227] via-[#d4ac3a] to-[#c9a227] relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#1a1a2e]/10 rounded-full blur-3xl" />
        </div>

        <div className="container-custom text-center relative z-10">
          <div className="inline-block mb-3 sm:mb-4">
            <span className="text-[#1a1a2e]/70 text-xs sm:text-sm font-semibold uppercase tracking-wider">Let's Work Together</span>
            <div className="w-16 sm:w-20 md:w-24 h-1 bg-[#1a1a2e]/30 mx-auto mt-2" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a1a2e] mb-3 sm:mb-4">
            Ready to Book Olamide Sax?
          </h2>
          <p className="text-[#1a1a2e]/80 text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
            Available for weddings, corporate events, church services, cultural celebrations,
            and private functions across the United Kingdom.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-2.5 sm:px-7 sm:py-3 md:px-8 md:py-4 bg-[#1a1a2e] text-white text-sm sm:text-base md:text-lg font-semibold rounded-full hover:bg-[#16213e] transition-all hover:scale-105 shadow-2xl hover:shadow-[#1a1a2e]/50"
          >
            Get in Touch
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
