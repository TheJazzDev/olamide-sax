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
      <section className="relative py-8 sm:py-10 md:py-14 lg:py-20 bg-[#1a1a2e] text-white">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-[#c9a227]/20 text-[#c9a227] text-xs sm:text-sm font-medium rounded-full mb-4 sm:mb-6">
              About the Artist
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 md:mb-6">
              Olaniyan Olamide Phillips
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-300">
              Professionally known as <span className="text-[#c9a227] font-semibold">Olamide Sax</span>
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-start">
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
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1a1a2e] mb-4 sm:mb-6">
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

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
                <div className="text-center p-4 sm:p-6 bg-gray-50 rounded-xl">
                  <div className="text-3xl sm:text-4xl font-bold text-[#c9a227] mb-2">10+</div>
                  <div className="text-gray-600 text-xs sm:text-sm">Years of Experience</div>
                </div>
                <div className="text-center p-4 sm:p-6 bg-gray-50 rounded-xl">
                  <div className="text-3xl sm:text-4xl font-bold text-[#c9a227] mb-2">3</div>
                  <div className="text-gray-600 text-xs sm:text-sm">Instruments Mastered</div>
                </div>
              </div>

              {/* Key Qualities */}
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                  <div className="w-12 h-12 bg-[#c9a227]/10 rounded-lg flex items-center justify-center shrink-0">
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
                  <div className="w-12 h-12 bg-[#c9a227]/10 rounded-lg flex items-center justify-center shrink-0">
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
                  <div className="w-12 h-12 bg-[#c9a227]/10 rounded-lg flex items-center justify-center shrink-0">
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

          {/* Artistic Identity Section - full width */}
          <div className="mt-12 sm:mt-16 md:mt-20 bg-[#1a1a2e] text-white p-5 sm:p-8 md:p-10 lg:p-12 rounded-xl">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-6 flex items-center gap-3">
              <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-[#c9a227]" />
              Artistic Identity
            </h3>
            <div className="text-gray-300 text-sm sm:text-base leading-relaxed space-y-3 sm:space-y-4 md:columns-2 md:gap-8 lg:gap-12">
              <p className="break-inside-avoid">
                Olamide Phillips Olaniyan, professionally known as Olamide Sax, is a Nigerian-born
                multidisciplinary musician, performer, and participatory artist based in the United
                Kingdom. His artistic journey began in 2010 through traditional Yoruba percussion,
                developing first with indigenous instruments such as the Cord/Omele before expanding
                into djembe, omele bàtá, and talking drum. Rooted deeply in African musical heritage,
                these formative experiences shaped his rhythmic understanding, improvisational
                instinct, and connection to storytelling through sound.
              </p>
              <p className="break-inside-avoid">
                Over the years, his practice evolved into a broader Afro-fusion expression spanning
                saxophone, vocals, keyboard, and live improvisational performance. Drawing inspiration
                from Yoruba musical traditions alongside contemporary African and global sounds,
                Olamide creates work that blends rhythm, spirituality, theatre, and cultural expression.
              </p>
              <p className="break-inside-avoid">
                Since relocating to the UK, Olamide has continued to build an expanding creative
                presence across live music, theatre, and community arts. He has performed at cultural
                and multidisciplinary events including ÀTÙPÀ at CAST, where he delivered the opening
                saxophone performance and appeared as the theatrical character Adigun, demonstrating
                his versatility across both music and stage performance. He has also collaborated with
                artists and bands at ArtBomb, performing alongside The Skintone UK in immersive live
                music settings that fused reggae, funk, ska, folk, and improvisational sound.
              </p>
              <p className="break-inside-avoid">
                His performance work further includes appearances at Black History Month and Black
                &amp; Minority Ethnic cultural events in Doncaster, where he presented African musical
                works through saxophone, vocals, and keyboard performance before community leaders
                and distinguished public figures. Alongside live performance, he has participated in
                open mic and theatre-based collaborations with creatives connected to Utopia Theatre
                and other independent arts spaces across South Yorkshire.
              </p>
              <p className="break-inside-avoid">
                Alongside his performance practice, Olamide is currently developing within
                participatory arts and creative health through a traineeship with darts in partnership
                with Maya Productions. Through this work, he engages with community-centred creative
                practice, exploring how music, movement, and collective participation can support
                wellbeing, connection, and cultural exchange across diverse groups and settings.
              </p>
              <p className="break-inside-avoid">
                As both a performer and facilitator, Olamide&apos;s work is driven by improvisation,
                collaboration, and the desire to create meaningful artistic experiences that bridge
                cultures, generations, and communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1a1a2e] mb-3 sm:mb-4">
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
