import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, Music2, Award, Users, Heart } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | Olamide Sax',
  description: 'Learn about Olaniyan Olamide Phillips (Olamide Sax), a Nigerian-born vocalist, saxophonist, and keyboardist with over 10 years of professional music experience.',
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-[#1a1a2e] text-white">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-[#c9a227]/20 text-[#c9a227] text-sm font-medium rounded-full mb-6">
              About the Artist
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Olaniyan Olamide Phillips
            </h1>
            <p className="text-xl text-gray-300">
              Professionally known as <span className="text-[#c9a227] font-semibold">Olamide Sax</span>
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Image */}
            <div className="relative">
              <div className="sticky top-32">
                <div className="relative aspect-[3/4] rounded-xl overflow-hidden">
                  <Image
                    src="/images/IMG_0923.jpeg"
                    alt="Olamide Sax Portrait"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="mt-6 p-6 bg-gray-50 rounded-xl">
                  <h3 className="font-bold text-[#1a1a2e] mb-2">Lammy Wonder Music</h3>
                  <p className="text-gray-600 text-sm">
                    Founder and Lead Artist of a professional music band delivering live performances
                    across gospel worship, African contemporary music, and repertoire-based interpretations.
                  </p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div>
              <h2 className="text-3xl font-bold text-[#1a1a2e] mb-6">
                A Journey of Musical Excellence
              </h2>

              <div className="prose prose-lg max-w-none">
                <p className="text-gray-600 leading-relaxed mb-6">
                  Olaniyan Olamide Phillips, professionally known as <strong>Olamide Sax</strong>, is a
                  Nigerian-born vocalist, saxophonist, and keyboardist with over <strong>10 years of
                  professional music experience</strong>.
                </p>

                <p className="text-gray-600 leading-relaxed mb-6">
                  He began his musical journey as a percussionist, gradually developing formal and
                  practical skills across multiple instruments, leading to his emergence as a lead
                  saxophonist and vocal performer. His artistic growth reflects a commitment to
                  excellence, versatility, and cultural expression.
                </p>

                <p className="text-gray-600 leading-relaxed mb-8">
                  Olamide is the <strong>Founder and Lead Artist of Lammy Wonder Music</strong>, a
                  professional music band that delivers live performances across gospel worship,
                  African contemporary music, and repertoire-based interpretations of global musical works.
                </p>
              </div>

              {/* Artistic Identity Section */}
              <div className="bg-[#1a1a2e] text-white p-8 rounded-xl mb-8">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                  <Heart className="w-6 h-6 text-[#c9a227]" />
                  Artistic Identity
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Olamide&apos;s work is rooted in faith-inspired gospel music while embracing African
                  musical heritage and contemporary performance techniques. His performances often
                  combine vocals, keyboard harmony, and expressive saxophone interpretation, creating
                  immersive musical experiences for diverse audiences.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center p-6 bg-gray-50 rounded-xl">
                  <div className="text-4xl font-bold text-[#c9a227] mb-2">10+</div>
                  <div className="text-gray-600 text-sm">Years of Experience</div>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-xl">
                  <div className="text-4xl font-bold text-[#c9a227] mb-2">3</div>
                  <div className="text-gray-600 text-sm">Instruments Mastered</div>
                </div>
              </div>

              {/* Key Qualities */}
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                  <div className="w-12 h-12 bg-[#c9a227]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Music2 className="w-6 h-6 text-[#c9a227]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1a1a2e] mb-1">Versatility</h4>
                    <p className="text-gray-600 text-sm">
                      Proficient across saxophone, vocals, and keyboard, enabling complete musical performances.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                  <div className="w-12 h-12 bg-[#c9a227]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-[#c9a227]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1a1a2e] mb-1">Excellence</h4>
                    <p className="text-gray-600 text-sm">
                      Committed to delivering high-quality performances at every engagement.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                  <div className="w-12 h-12 bg-[#c9a227]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-[#c9a227]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1a1a2e] mb-1">Cultural Expression</h4>
                    <p className="text-gray-600 text-sm">
                      Bridging African heritage with contemporary performance across diverse audiences.
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-10">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#c9a227] text-[#1a1a2e] font-semibold rounded-full hover:bg-[#e8d48b] transition-colors"
                >
                  Book Olamide Sax
                  <ChevronRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e] mb-4">
              Musical Journey
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From percussionist to lead saxophonist and vocal performer
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-[#c9a227]/30 transform md:-translate-x-1/2" />

              {/* Timeline Items */}
              <div className="space-y-12">
                <div className="relative flex items-start gap-8 md:gap-0">
                  <div className="md:w-1/2 md:pr-12 md:text-right">
                    <div className="bg-white p-6 rounded-xl shadow-sm">
                      <span className="text-[#c9a227] font-semibold">Early Years</span>
                      <h3 className="font-bold text-[#1a1a2e] mt-1">The Beginning</h3>
                      <p className="text-gray-600 text-sm mt-2">
                        Started musical journey as a percussionist, developing foundational rhythm and timing skills.
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-[#c9a227] rounded-full transform -translate-x-1/2 mt-8" />
                </div>

                <div className="relative flex items-start gap-8 md:gap-0 md:flex-row-reverse">
                  <div className="md:w-1/2 md:pl-12">
                    <div className="bg-white p-6 rounded-xl shadow-sm">
                      <span className="text-[#c9a227] font-semibold">Development</span>
                      <h3 className="font-bold text-[#1a1a2e] mt-1">Multi-Instrument Training</h3>
                      <p className="text-gray-600 text-sm mt-2">
                        Expanded skills to include saxophone and keyboard, becoming a versatile performer.
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-[#c9a227] rounded-full transform -translate-x-1/2 mt-8" />
                </div>

                <div className="relative flex items-start gap-8 md:gap-0">
                  <div className="md:w-1/2 md:pr-12 md:text-right">
                    <div className="bg-white p-6 rounded-xl shadow-sm">
                      <span className="text-[#c9a227] font-semibold">Professional Era</span>
                      <h3 className="font-bold text-[#1a1a2e] mt-1">Lead Performer</h3>
                      <p className="text-gray-600 text-sm mt-2">
                        Emerged as a lead saxophonist and vocal performer, establishing professional career.
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-[#c9a227] rounded-full transform -translate-x-1/2 mt-8" />
                </div>

                <div className="relative flex items-start gap-8 md:gap-0 md:flex-row-reverse">
                  <div className="md:w-1/2 md:pl-12">
                    <div className="bg-white p-6 rounded-xl shadow-sm">
                      <span className="text-[#c9a227] font-semibold">Present</span>
                      <h3 className="font-bold text-[#1a1a2e] mt-1">Lammy Wonder Music</h3>
                      <p className="text-gray-600 text-sm mt-2">
                        Founded Lammy Wonder Music and now performs at prestigious events across the UK.
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-[#c9a227] rounded-full transform -translate-x-1/2 mt-8" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
