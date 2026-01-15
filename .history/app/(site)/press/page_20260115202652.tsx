import Link from 'next/link';
import { ChevronRight, Newspaper, ExternalLink, Quote } from 'lucide-react';
import { Metadata } from 'next';
import { prisma } from '@/lib/prisma-db';

export const metadata: Metadata = {
  title: 'Press & Publications | Olamide Sax',
  description: 'Read about Olamide Sax in community and cultural publications, highlighting his contribution to music and cultural engagement in the UK.',
};

async function getPressItems() {
  try {
    const press = await prisma.press.findMany({
      orderBy: { publishedAt: 'desc' },
    });
    return press;
  } catch (error) {
    console.error('Error fetching press:', error);
    return [];
  }
}

export default async function PressPage() {
  const pressItems = await getPressItems();

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-10 lg:py-20 bg-[#1a1a2e] text-white">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-[#c9a227]/20 text-[#c9a227] text-sm font-medium rounded-full mb-6">
              In the News
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Press & Publications
            </h1>
            <p className="text-xl text-gray-300">
              Media coverage and features highlighting Olamide Sax&apos;s contribution to music and cultural engagement
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-16 h-16 bg-[#c9a227]/10 rounded-xl flex items-center justify-center mx-auto mb-6">
              <Newspaper className="w-8 h-8 text-[#c9a227]" />
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
              Olamide Sax&apos;s work has been featured in community and cultural platforms, highlighting
              his contribution to music, cultural engagement, and live performance in the UK.
            </p>
          </div>
        </div>
      </section>

      {/* Press Coverage */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a2e] mb-10 text-center">
            Featured Coverage
          </h2>

          <div className="max-w-3xl mx-auto space-y-6">
            {pressItems.length > 0 ? (
              pressItems.map((item) => (
                <article
                  key={item.id}
                  className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#c9a227]/10 rounded-lg flex items-center justify-center shrink-0">
                      <Newspaper className="w-6 h-6 text-[#c9a227]" />
                    </div>
                    <div className="flex-1">
                      <span className="text-sm font-medium text-[#c9a227]">{item.source}</span>
                      <h3 className="text-xl font-bold text-[#1a1a2e] mt-1 mb-3">{item.title}</h3>
                      {item.excerpt && (
                        <p className="text-gray-600 leading-relaxed mb-4">{item.excerpt}</p>
                      )}
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">{String(item.createdAt)}</span>
                        {item.url && item.url !== '#' && (
                          <a
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-sm font-medium text-[#c9a227] hover:underline"
                          >
                            Read Article
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </article>
              ))
            ) : (
              <div className="bg-white p-8 rounded-xl border-2 border-dashed border-gray-200 text-center">
                <Quote className="w-10 h-10 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500">
                  No press coverage available yet. Check back soon!
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Notable Mentions */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a2e] mb-10 text-center">
            Notable Mentions
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="p-6 bg-gray-50 rounded-xl">
              <h3 className="font-bold text-[#1a1a2e] mb-2">Black History Month</h3>
              <p className="text-gray-600 text-sm">
                Featured performer at Doncaster&apos;s Black History Month celebrations.
              </p>
            </div>

            <div className="p-6 bg-gray-50 rounded-xl">
              <h3 className="font-bold text-[#1a1a2e] mb-2">BME United Doncaster</h3>
              <p className="text-gray-600 text-sm">
                Regular performer at community cultural events promoting diversity and inclusion.
              </p>
            </div>

            <div className="p-6 bg-gray-50 rounded-xl">
              <h3 className="font-bold text-[#1a1a2e] mb-2">Civic Events</h3>
              <p className="text-gray-600 text-sm">
                Performed for the Mayor of Doncaster and senior council leaders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="section-padding bg-[#1a1a2e] text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <Quote className="w-12 h-12 text-[#c9a227] mx-auto mb-6" />
            <blockquote className="text-2xl md:text-3xl font-light leading-relaxed mb-6 italic">
              &ldquo;Music is a universal language that transcends borders and brings people together.
              Through my performances, I aim to share the rich heritage of African music while
              creating meaningful connections with audiences.&rdquo;
            </blockquote>
            <cite className="text-[#c9a227] font-semibold not-italic">— Olamide Sax</cite>
          </div>
        </div>
      </section>

      {/* Media Contact */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a2e] mb-6">
              Media Enquiries
            </h2>
            <p className="text-gray-600 mb-8">
              For press enquiries, interviews, or media features, please get in touch.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#c9a227] text-[#1a1a2e] font-semibold rounded-full hover:bg-[#e8d48b] transition-colors"
            >
              Contact for Media
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#c9a227]">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e] mb-4">
            Experience the Music
          </h2>
          <p className="text-[#1a1a2e]/80 text-lg mb-8 max-w-2xl mx-auto">
            Watch performances and listen to music releases from Olamide Sax.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/media"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#1a1a2e] text-white font-semibold rounded-full hover:bg-[#16213e] transition-colors"
            >
              View Media
              <ChevronRight className="w-5 h-5" />
            </Link>
            <Link
              href="/music"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#1a1a2e] font-semibold rounded-full hover:bg-gray-100 transition-colors"
            >
              Listen to Music
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
