import Link from 'next/link';
import { Mail, MapPin, Music, Youtube, Instagram, Facebook, Send, Phone } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | Olamide Sax',
  description: 'Contact Olamide Sax for bookings, collaborations, media enquiries, and performances. Based in the United Kingdom.',
};

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-[#1a1a2e] text-white">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-[#c9a227]/20 text-[#c9a227] text-sm font-medium rounded-full mb-6">
              Get in Touch
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Contact
            </h1>
            <p className="text-xl text-gray-300">
              For bookings, collaborations, media enquiries, and performances
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a2e] mb-8">
                Let&apos;s Connect
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-[#c9a227]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-7 h-7 text-[#c9a227]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1a1a2e] mb-1">Email</h3>
                    <a
                      href="mailto:Olaniyanolamidephillip@gmail.com"
                      className="text-gray-600 hover:text-[#c9a227] transition-colors break-all"
                    >
                      Olaniyanolamidephillip@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-[#c9a227]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-7 h-7 text-[#c9a227]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1a1a2e] mb-1">Location</h3>
                    <p className="text-gray-600">Based in the United Kingdom</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-[#c9a227]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Music className="w-7 h-7 text-[#c9a227]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1a1a2e] mb-1">Artist</h3>
                    <p className="text-gray-600">Olamide Sax</p>
                    <p className="text-sm text-gray-500">Founder & Lead Artist, Lammy Wonder Music</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-10">
                <h3 className="font-bold text-[#1a1a2e] mb-4">Follow on Social Media</h3>
                <div className="flex items-center gap-4">
                  <a
                    href="https://youtube.com/@olamidesax"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-[#1a1a2e] rounded-full flex items-center justify-center text-white hover:bg-[#c9a227] hover:text-[#1a1a2e] transition-colors"
                    aria-label="YouTube"
                  >
                    <Youtube className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-[#1a1a2e] rounded-full flex items-center justify-center text-white hover:bg-[#c9a227] hover:text-[#1a1a2e] transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-[#1a1a2e] rounded-full flex items-center justify-center text-white hover:bg-[#c9a227] hover:text-[#1a1a2e] transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h2 className="text-xl font-bold text-[#1a1a2e] mb-6">
                Send a Message
              </h2>

              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#c9a227] focus:ring-2 focus:ring-[#c9a227]/20 outline-none transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#c9a227] focus:ring-2 focus:ring-[#c9a227]/20 outline-none transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#c9a227] focus:ring-2 focus:ring-[#c9a227]/20 outline-none transition-colors bg-white"
                  >
                    <option value="">Select a topic</option>
                    <option value="booking">Event Booking</option>
                    <option value="collaboration">Collaboration</option>
                    <option value="media">Media Enquiry</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#c9a227] focus:ring-2 focus:ring-[#c9a227]/20 outline-none transition-colors resize-none"
                    placeholder="Tell us about your event or enquiry..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#c9a227] text-[#1a1a2e] font-semibold rounded-full hover:bg-[#e8d48b] transition-colors"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>

              <p className="text-xs text-gray-500 text-center mt-4">
                Or email directly at{' '}
                <a href="mailto:Olaniyanolamidephillip@gmail.com" className="text-[#c9a227]">
                  Olaniyanolamidephillip@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a2e] mb-8 text-center">
            Available For
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-xl text-center">
              <div className="w-12 h-12 bg-[#c9a227]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Music className="w-6 h-6 text-[#c9a227]" />
              </div>
              <h3 className="font-bold text-[#1a1a2e] mb-2">Weddings</h3>
              <p className="text-gray-600 text-sm">Ceremonies & receptions</p>
            </div>

            <div className="bg-white p-6 rounded-xl text-center">
              <div className="w-12 h-12 bg-[#c9a227]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Music className="w-6 h-6 text-[#c9a227]" />
              </div>
              <h3 className="font-bold text-[#1a1a2e] mb-2">Corporate Events</h3>
              <p className="text-gray-600 text-sm">Professional entertainment</p>
            </div>

            <div className="bg-white p-6 rounded-xl text-center">
              <div className="w-12 h-12 bg-[#c9a227]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Music className="w-6 h-6 text-[#c9a227]" />
              </div>
              <h3 className="font-bold text-[#1a1a2e] mb-2">Church Services</h3>
              <p className="text-gray-600 text-sm">Worship & special occasions</p>
            </div>

            <div className="bg-white p-6 rounded-xl text-center">
              <div className="w-12 h-12 bg-[#c9a227]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Music className="w-6 h-6 text-[#c9a227]" />
              </div>
              <h3 className="font-bold text-[#1a1a2e] mb-2">Cultural Events</h3>
              <p className="text-gray-600 text-sm">Festivals & celebrations</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#1a1a2e] text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Create Something Special?
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Whether it&apos;s an intimate gathering or a grand celebration, Olamide Sax brings
            the perfect musical atmosphere to your event.
          </p>
          <a
            href="mailto:Olaniyanolamidephillip@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#c9a227] text-[#1a1a2e] font-semibold rounded-full hover:bg-[#e8d48b] transition-colors"
          >
            <Mail className="w-5 h-5" />
            Email Now
          </a>
        </div>
      </section>
    </>
  );
}
