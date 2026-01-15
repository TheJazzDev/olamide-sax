import Link from 'next/link';
import { ChevronRight, Music, Church, Globe, Users } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Artistic Practice | Olamide Sax',
  description:
    'Explore the artistic practice and musical genres of Olamide Sax - Gospel, African Contemporary, and Repertoire Music.',
};

export default function ArtisticPracticePage() {
  return (
    <>
      {/* Hero Section */}
      <section className='relative py-8 sm:py-10 md:py-14 lg:py-20 bg-[#1a1a2e] text-white'>
        <div className='container-custom'>
          <div className='max-w-3xl'>
            <span className='inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-[#c9a227]/20 text-[#c9a227] text-xs sm:text-sm font-medium rounded-full mb-4 sm:mb-6'>
              Musical Identity
            </span>
            <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 md:mb-6'>
              Artistic Practice & Genre
            </h1>
            <p className='text-base sm:text-lg md:text-xl text-gray-300'>
              A multidisciplinary approach to music that bridges faith, culture,
              and community
            </p>
          </div>
        </div>
      </section>

      {/* Genre Overview */}
      <section className='section-padding bg-white'>
        <div className='container-custom'>
          <div className='max-w-4xl mx-auto'>
            <div className='text-center mb-12'>
              <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-[#1a1a2e] mb-6'>
                Musical Expression
              </h2>
              <p className='text-lg text-gray-600 leading-relaxed'>
                Olamide Sax is a multidisciplinary vocalist and instrumentalist
                whose work spans
                <span className='text-[#c9a227] font-semibold'> Gospel</span>,
                <span className='text-[#c9a227] font-semibold'>
                  {' '}
                  African Contemporary
                </span>
                , and
                <span className='text-[#c9a227] font-semibold'>
                  {' '}
                  Hip-Hop–influenced repertoire performance
                </span>
                , delivered through vocals, saxophone, and keyboard.
              </p>
            </div>

            <div className='bg-gray-50 p-8 md:p-12 rounded-2xl mb-12'>
              <p className='text-lg sm:text-xl text-gray-700 leading-relaxed text-center italic'>
                &ldquo;His music engages audiences across faith, culture, and
                community, often performed in churches, cultural celebrations,
                and civic events.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Primary Genre */}
      <section className='section-padding bg-[#1a1a2e] text-white'>
        <div className='container-custom'>
          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            <div>
              <span className='inline-block px-4 py-2 bg-[#c9a227]/20 text-[#c9a227] text-sm font-medium rounded-full mb-6'>
                Primary Genre
              </span>
              <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold mb-6'>
                African Contemporary
              </h2>
              <p className='text-gray-300 leading-relaxed mb-6'>
                At the core of Olamide Sax&apos;s musical identity is African
                Contemporary music—a vibrant fusion of traditional African
                rhythms, modern instrumentation, and contemporary production
                techniques that create a unique sonic experience.
              </p>
              <p className='text-gray-300 leading-relaxed mb-8'>
                This genre allows him to honor his Nigerian heritage while
                creating music that resonates with global audiences, bridging
                cultural divides through the universal language of music.
              </p>
              <div className='flex flex-wrap gap-3'>
                <span className='px-4 py-2 bg-white/10 rounded-full text-sm'>
                  Afrobeats Influence
                </span>
                <span className='px-4 py-2 bg-white/10 rounded-full text-sm'>
                  Highlife Elements
                </span>
                <span className='px-4 py-2 bg-white/10 rounded-full text-sm'>
                  Contemporary Production
                </span>
              </div>
            </div>

            <div className='relative'>
              <div className='bg-[#c9a227]/10 p-8 rounded-2xl border border-[#c9a227]/30'>
                <Music className='w-16 h-16 text-[#c9a227] mb-6' />
                <h3 className='text-xl sm:text-2xl font-bold mb-4'>The Sound</h3>
                <ul className='space-y-3'>
                  <li className='flex items-center gap-3'>
                    <div className='w-2 h-2 bg-[#c9a227] rounded-full' />
                    <span className='text-gray-300'>
                      Rich saxophone melodies
                    </span>
                  </li>
                  <li className='flex items-center gap-3'>
                    <div className='w-2 h-2 bg-[#c9a227] rounded-full' />
                    <span className='text-gray-300'>
                      Soulful vocal performances
                    </span>
                  </li>
                  <li className='flex items-center gap-3'>
                    <div className='w-2 h-2 bg-[#c9a227] rounded-full' />
                    <span className='text-gray-300'>
                      Dynamic keyboard harmonies
                    </span>
                  </li>
                  <li className='flex items-center gap-3'>
                    <div className='w-2 h-2 bg-[#c9a227] rounded-full' />
                    <span className='text-gray-300'>
                      Authentic African rhythms
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Secondary Styles */}
      <section className='section-padding bg-white'>
        <div className='container-custom'>
          <div className='text-center mb-12'>
            <span className='inline-block px-4 py-2 bg-[#c9a227]/10 text-[#c9a227] text-sm font-medium rounded-full mb-6'>
              Secondary Styles
            </span>
            <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-[#1a1a2e] mb-4'>
              Musical Versatility
            </h2>
          </div>

          <div className='grid md:grid-cols-2 gap-8 max-w-4xl mx-auto'>
            {/* Gospel / Instrumental Worship */}
            <div className='bg-gray-50 p-8 rounded-xl'>
              <div className='w-14 h-14 bg-[#c9a227]/10 rounded-xl flex items-center justify-center mb-6'>
                <Church className='w-7 h-7 text-[#c9a227]' />
              </div>
              <h3 className='text-lg sm:text-xl font-bold text-[#1a1a2e] mb-4'>
                Gospel & Instrumental Worship
              </h3>
              <p className='text-gray-600 leading-relaxed mb-6'>
                Rooted in faith-inspired music, Olamide delivers powerful
                worship experiences that touch hearts and inspire spiritual
                connection. His gospel performances combine heartfelt vocals
                with expressive instrumental accompaniment.
              </p>
              <ul className='space-y-2'>
                <li className='flex items-center gap-2 text-gray-600 text-sm'>
                  <div className='w-1.5 h-1.5 bg-[#c9a227] rounded-full' />
                  Church services and worship events
                </li>
                <li className='flex items-center gap-2 text-gray-600 text-sm'>
                  <div className='w-1.5 h-1.5 bg-[#c9a227] rounded-full' />
                  Gospel medleys and arrangements
                </li>
                <li className='flex items-center gap-2 text-gray-600 text-sm'>
                  <div className='w-1.5 h-1.5 bg-[#c9a227] rounded-full' />
                  Faith community celebrations
                </li>
              </ul>
            </div>

            {/* Repertoire Music */}
            <div className='bg-gray-50 p-8 rounded-xl'>
              <div className='w-14 h-14 bg-[#c9a227]/10 rounded-xl flex items-center justify-center mb-6'>
                <Globe className='w-7 h-7 text-[#c9a227]' />
              </div>
              <h3 className='text-lg sm:text-xl font-bold text-[#1a1a2e] mb-4'>
                Repertoire Music
              </h3>
              <p className='text-gray-600 leading-relaxed mb-6'>
                Skilled in interpreting a diverse collection of musical works,
                Olamide brings his unique artistic perspective to established
                pieces while maintaining respect for their original character
                and emotional intent.
              </p>
              <ul className='space-y-2'>
                <li className='flex items-center gap-2 text-gray-600 text-sm'>
                  <div className='w-1.5 h-1.5 bg-[#c9a227] rounded-full' />
                  Cross-cultural musical interpretations
                </li>
                <li className='flex items-center gap-2 text-gray-600 text-sm'>
                  <div className='w-1.5 h-1.5 bg-[#c9a227] rounded-full' />
                  Classic and contemporary covers
                </li>
                <li className='flex items-center gap-2 text-gray-600 text-sm'>
                  <div className='w-1.5 h-1.5 bg-[#c9a227] rounded-full' />
                  Event-appropriate set lists
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Contexts */}
      <section className='section-padding bg-gray-50'>
        <div className='container-custom'>
          <div className='text-center mb-12'>
            <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-[#1a1a2e] mb-4'>
              Performance Contexts
            </h2>
            <p className='text-gray-600 max-w-2xl mx-auto'>
              Olamide Sax&apos;s music finds its home across diverse settings
              and occasions
            </p>
          </div>

          <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-6'>
            <div className='bg-white p-6 rounded-xl text-center'>
              <div className='w-14 h-14 bg-[#c9a227]/10 rounded-xl flex items-center justify-center mx-auto mb-4'>
                <Church className='w-7 h-7 text-[#c9a227]' />
              </div>
              <h3 className='font-bold text-[#1a1a2e] mb-2'>Churches</h3>
              <p className='text-gray-600 text-sm'>
                Worship services and special occasions
              </p>
            </div>

            <div className='bg-white p-6 rounded-xl text-center'>
              <div className='w-14 h-14 bg-[#c9a227]/10 rounded-xl flex items-center justify-center mx-auto mb-4'>
                <Users className='w-7 h-7 text-[#c9a227]' />
              </div>
              <h3 className='font-bold text-[#1a1a2e] mb-2'>Cultural Events</h3>
              <p className='text-gray-600 text-sm'>
                Community celebrations and festivals
              </p>
            </div>

            <div className='bg-white p-6 rounded-xl text-center'>
              <div className='w-14 h-14 bg-[#c9a227]/10 rounded-xl flex items-center justify-center mx-auto mb-4'>
                <Globe className='w-7 h-7 text-[#c9a227]' />
              </div>
              <h3 className='font-bold text-[#1a1a2e] mb-2'>Civic Events</h3>
              <p className='text-gray-600 text-sm'>
                Public ceremonies and official gatherings
              </p>
            </div>

            <div className='bg-white p-6 rounded-xl text-center'>
              <div className='w-14 h-14 bg-[#c9a227]/10 rounded-xl flex items-center justify-center mx-auto mb-4'>
                <Music className='w-7 h-7 text-[#c9a227]' />
              </div>
              <h3 className='font-bold text-[#1a1a2e] mb-2'>
                Private Functions
              </h3>
              <p className='text-gray-600 text-sm'>
                Weddings, parties, and corporate events
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-20 bg-[#c9a227]'>
        <div className='container-custom text-center'>
          <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-[#1a1a2e] mb-4'>
            Experience the Music
          </h2>
          <p className='text-[#1a1a2e]/80 text-lg mb-8 max-w-2xl mx-auto'>
            Listen to Olamide Sax&apos;s releases and experience the unique
            blend of Gospel, African Contemporary, and Repertoire music.
          </p>
          <div className='flex flex-wrap justify-center gap-4'>
            <Link
              href='/media'
              className='inline-flex items-center gap-2 px-8 py-4 bg-[#1a1a2e] text-white font-semibold rounded-full hover:bg-[#16213e] transition-colors'>
              Listen to Music
              <ChevronRight className='w-5 h-5' />
            </Link>
            <Link
              href='/media'
              className='inline-flex items-center gap-2 px-8 py-4 bg-white text-[#1a1a2e] font-semibold rounded-full hover:bg-gray-100 transition-colors'>
              Watch Performances
              <ChevronRight className='w-5 h-5' />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
