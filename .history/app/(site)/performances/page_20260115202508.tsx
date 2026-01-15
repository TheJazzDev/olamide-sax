import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, MapPin, Calendar, Star, Award, Users, Music } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Performances & Career Highlights | Olamide Sax',
  description: 'Explore the career highlights and notable performances of Olamide Sax, including appearances at Black History Month celebrations and performances for the Mayor of Doncaster.',
};

const highlights = [
  {
    title: 'Black History Month Celebrations',
    location: 'Doncaster, UK',
    description: 'Performed at the official Black History Month celebrations, showcasing African contemporary and gospel music to a diverse audience.',
    icon: Calendar,
  },
  {
    title: 'Performance for the Mayor of Doncaster',
    location: 'Doncaster, UK',
    description: 'Entertained the Mayor of Doncaster and senior council leaders at a prestigious public cultural event.',
    icon: Award,
  },
  {
    title: 'BME United Doncaster Events',
    location: 'Doncaster, UK',
    description: 'Lead performer at Black and Minority Ethnic (BME) United Doncaster community events, promoting cultural unity through music.',
    icon: Users,
  },
  {
    title: 'Gospel & Worship Performances',
    location: 'Various Venues, UK',
    description: 'Regular live gospel and worship performances at community centres, churches, and faith-based gatherings.',
    icon: Music,
  },
];

export default function PerformancesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-10 lg:py-20 bg-[#1a1a2e] text-white">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-[#c9a227]/20 text-[#c9a227] text-sm font-medium rounded-full mb-6">
              Live Performances
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Performances & Career Highlights
            </h1>
            <p className="text-xl text-gray-300">
              A decade of memorable performances across the United Kingdom
            </p>
          </div>
        </div>
      </section>

      {/* Featured Performance */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                <Image
                  src="/images/olamide-sax-mayor.jpg"
                  alt="Olamide Sax performing for the Mayor of Doncaster"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-[#c9a227] text-[#1a1a2e] p-4 rounded-xl shadow-lg">
                <Star className="w-8 h-8" />
              </div>
            </div>

            <div>
              <span className="inline-block px-4 py-2 bg-[#c9a227]/10 text-[#c9a227] text-sm font-medium rounded-full mb-6">
                Featured Highlight
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e] mb-6">
                Performing for Distinguished Leaders
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                One of Olamide Sax&apos;s most prestigious engagements was performing at a public cultural
                event attended by the <strong>Mayor of Doncaster</strong> and distinguished council leaders.
                This performance showcased his ability to captivate high-profile audiences with his unique
                blend of African contemporary and gospel music.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                The event highlighted his contribution to cultural engagement in the UK and demonstrated
                his professionalism and artistic excellence on a significant public stage.
              </p>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#c9a227]" />
                  <span>Doncaster, UK</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Highlights */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e] mb-4">
              Career Highlights
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Notable performances and achievements throughout Olamide Sax&apos;s musical career
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-[#c9a227]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <highlight.icon className="w-7 h-7 text-[#c9a227]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1a1a2e] mb-2">{highlight.title}</h3>
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                      <MapPin className="w-4 h-4" />
                      <span>{highlight.location}</span>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{highlight.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lammy Wonder Music */}
      <section className="section-padding bg-[#1a1a2e] text-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-2 bg-[#c9a227]/20 text-[#c9a227] text-sm font-medium rounded-full mb-6">
                The Band
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Lammy Wonder Music
              </h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                As the <strong className="text-white">Founder and Lead Artist</strong> of Lammy Wonder Music,
                Olamide Sax leads a professional music band that delivers exceptional live performances
                across multiple genres and venues.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#c9a227]/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-[#c9a227] rounded-full" />
                  </div>
                  <span className="text-gray-300">Gospel worship performances</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#c9a227]/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-[#c9a227] rounded-full" />
                  </div>
                  <span className="text-gray-300">African contemporary music</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#c9a227]/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-[#c9a227] rounded-full" />
                  </div>
                  <span className="text-gray-300">Repertoire-based interpretations of global musical works</span>
                </li>
              </ul>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#c9a227] text-[#1a1a2e] font-semibold rounded-full hover:bg-[#e8d48b] transition-colors"
              >
                Book the Band
                <ChevronRight className="w-5 h-5" />
              </Link>
            </div>

            <div className="relative">
              <div className="bg-[#c9a227]/10 p-8 rounded-2xl border border-[#c9a227]/30">
                <h3 className="text-2xl font-bold mb-6">Services Offered</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-white/5 rounded-lg">
                    <Music className="w-6 h-6 text-[#c9a227]" />
                    <div>
                      <h4 className="font-semibold">Live Band Performances</h4>
                      <p className="text-gray-400 text-sm">Full band setup for events</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-white/5 rounded-lg">
                    <Users className="w-6 h-6 text-[#c9a227]" />
                    <div>
                      <h4 className="font-semibold">Wedding Entertainment</h4>
                      <p className="text-gray-400 text-sm">Ceremonies and receptions</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-white/5 rounded-lg">
                    <Award className="w-6 h-6 text-[#c9a227]" />
                    <div>
                      <h4 className="font-semibold">Corporate Events</h4>
                      <p className="text-gray-400 text-sm">Professional entertainment</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Placeholder */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-6xl text-[#c9a227] mb-6">&ldquo;</div>
            <p className="text-2xl text-gray-700 leading-relaxed mb-8 italic">
              Olamide Sax brings an incredible energy to every performance. His ability to
              connect with audiences through his music is truly remarkable.
            </p>
            <p className="text-gray-500">— Event Organizer, BME United Doncaster</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#c9a227]">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e] mb-4">
            Book Your Next Event
          </h2>
          <p className="text-[#1a1a2e]/80 text-lg mb-8 max-w-2xl mx-auto">
            Whether it&apos;s a wedding, corporate event, church service, or cultural celebration,
            Olamide Sax delivers unforgettable musical experiences.
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
