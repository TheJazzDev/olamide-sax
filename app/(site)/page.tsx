'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Play, Headphones, Newspaper, ChevronRight, Music2, Mic, Piano, ChevronDown } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useRef } from 'react';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 }
};

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  const [introRef, introInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [skillsRef, skillsInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [featuredRef, featuredInView] = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <>
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen flex items-center overflow-hidden bg-linear-to-br from-[#0a0a0f] via-[#1a1a2e] to-[#0f0f1e]">
        {/* Sophisticated Background Elements */}
        <div className="absolute inset-0">
          {/* Animated gradient orbs */}
          <motion.div
            className="absolute -top-40 -right-40 w-[600px] h-[600px] sm:w-[800px] sm:h-[800px] bg-[#c9a227]/8 rounded-full blur-[120px]"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.08, 0.12, 0.08],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute -bottom-40 -left-40 w-[500px] h-[500px] sm:w-[700px] sm:h-[700px] bg-[#c9a227]/5 rounded-full blur-[100px]"
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.05, 0.1, 0.05],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* Floating musical notes */}
          <motion.div
            className="absolute top-1/4 right-1/4 text-[#c9a227]/20 text-3xl sm:text-4xl"
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            ♪
          </motion.div>
          <motion.div
            className="absolute bottom-1/3 left-1/4 text-[#c9a227]/20 text-4xl sm:text-5xl"
            animate={{
              y: [0, -40, 0],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          >
            ♫
          </motion.div>

          {/* Elegant geometric patterns with rotation */}
          <motion.div
            className="absolute top-20 right-20 w-24 h-24 sm:w-32 sm:h-32 border border-[#c9a227]/10 hidden sm:block"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute bottom-32 left-20 w-20 h-20 sm:w-24 sm:h-24 border border-[#c9a227]/10 hidden sm:block"
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          />
        </div>

        <motion.div
          className="container-custom relative z-10 py-6 sm:py-8 md:py-12"
          style={{ opacity: heroOpacity, scale: heroScale }}
        >
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center h-full">
            {/* Hero Content */}
            <div className="text-white text-center lg:text-left pt-4 lg:pt-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex justify-center lg:justify-start"
              >
                <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-linear-to-r from-[#c9a227] to-[#d4ac3a] text-[#0a0a0f] text-xs sm:text-sm font-bold rounded-full mb-4 sm:mb-6 shadow-lg shadow-[#c9a227]/30 hover:shadow-xl hover:shadow-[#c9a227]/50 transition-all">
                  Founder & Lead Artist, Lammy Wonder Music
                </span>
              </motion.div>

              <motion.h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-3 sm:mb-4 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <span className="block text-white">Olamide</span>
                <motion.span
                  className="block bg-linear-to-r from-[#c9a227] via-[#e8d48b] to-[#c9a227] bg-clip-text text-transparent"
                  animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                >
                  Sax
                </motion.span>
              </motion.h1>

              <motion.p
                className="text-sm sm:text-base md:text-lg text-[#c9a227] font-bold mb-4 sm:mb-6 tracking-wide"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Vocalist &bull; Saxophonist &bull; Keyboardist
              </motion.p>

              <motion.p
                className="text-sm sm:text-base text-gray-300 leading-relaxed mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                A UK-based Nigerian multidisciplinary music artist blending Gospel, African Contemporary,
                and Repertoire music through live performance, worship, and community-focused cultural events.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <Link
                  href="/media"
                  className="group inline-flex items-center justify-center gap-2 px-6 py-3 sm:px-7 sm:py-3.5 md:px-8 md:py-4 bg-linear-to-r from-[#c9a227] to-[#d4ac3a] text-[#0a0a0f] text-sm sm:text-base font-bold rounded-full hover:shadow-2xl hover:shadow-[#c9a227]/50 transition-all hover:scale-105 shadow-xl"
                >
                  <Play className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform shrink-0" />
                  <span>Watch Performances</span>
                </Link>
                <Link
                  href="/media"
                  className="group inline-flex items-center justify-center gap-2 px-6 py-3 sm:px-7 sm:py-3.5 md:px-8 md:py-4 border-2 border-[#c9a227] text-[#c9a227] text-sm sm:text-base font-bold rounded-full hover:bg-[#c9a227] hover:text-[#0a0a0f] transition-all hover:scale-105 backdrop-blur-sm"
                >
                  <Headphones className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform shrink-0" />
                  <span>Listen to Music</span>
                </Link>
              </motion.div>
            </div>

            {/* Hero Image */}
            <motion.div
              className="relative mt-6 sm:mt-8 lg:mt-0"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative aspect-[3/4] max-w-[280px] sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto">
                {/* Multiple glowing layers for WOW effect */}
                <motion.div
                  className="absolute inset-0 bg-linear-to-br from-[#c9a227] to-[#d4ac3a] rounded-3xl blur-2xl opacity-30"
                  animate={{
                    scale: [1, 1.05, 1],
                    rotate: [0, 5, 0]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />

                {/* Main image container with enhanced border */}
                <div className="relative h-full rounded-3xl overflow-hidden border-2 sm:border-4 border-[#c9a227] shadow-[0_0_30px_rgba(201,162,39,0.5)] hover:shadow-[0_0_60px_rgba(201,162,39,0.7)] hover:scale-105 transition-all duration-500 group">
                  <Image
                    src="/images/IMG_0298.JPG"
                    alt="Olamide Sax - Professional Saxophonist"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    priority
                  />
                  {/* Overlay gradient on hover */}
                  <div className="absolute inset-0 bg-linear-to-t from-[#c9a227]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Corner accents */}
                <motion.div
                  className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 w-16 h-16 sm:w-24 sm:h-24 border-2 sm:border-4 border-[#c9a227] rounded-full opacity-50"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                  className="absolute -top-2 -left-2 sm:-top-4 sm:-left-4 w-12 h-12 sm:w-16 sm:h-16 border-2 sm:border-4 border-[#c9a227] rounded-full opacity-30"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                />
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8 text-[#c9a227]" />
        </motion.div>
      </section>

      {/* Introduction Section */}
      <section ref={introRef} className="py-12 sm:py-16 md:py-20 lg:py-24 bg-linear-to-br from-white via-gray-50 to-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-[#c9a227]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-[#c9a227]/5 rounded-full blur-3xl" />

        <motion.div
          className="container-custom relative z-10"
          variants={staggerContainer}
          initial="hidden"
          animate={introInView ? "visible" : "hidden"}
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.div className="inline-block mb-4 sm:mb-6" variants={fadeInUp}>
              <span className="text-[#c9a227] text-xs sm:text-sm font-bold uppercase tracking-wider">About the Artist</span>
              <div className="w-16 sm:w-20 h-1 bg-linear-to-r from-[#c9a227] to-[#e8d48b] mx-auto mt-2" />
            </motion.div>
            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-[#1a1a2e] mb-4 sm:mb-6 leading-tight"
              variants={fadeInUp}
            >
              The Art of Musical <span className="text-[#c9a227]">Expression</span>
            </motion.h2>
            <motion.p
              className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed mb-6 sm:mb-8"
              variants={fadeInUp}
            >
              <strong className="text-[#1a1a2e] font-bold">Olamide Sax</strong> (Olaniyan Olamide Phillips) is a professional vocalist and instrumentalist
              whose work spans gospel worship, African contemporary music, and cross-cultural repertoire performance.
              With over a decade of artistic development, he has performed at public cultural events in the UK,
              including engagements attended by the Mayor of Doncaster and distinguished council leaders.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 md:px-7 md:py-3.5 bg-linear-to-r from-[#c9a227] to-[#d4ac3a] text-[#0a0a0f] text-sm sm:text-base font-bold rounded-full hover:shadow-2xl hover:shadow-[#c9a227]/50 transition-all hover:scale-105 shadow-xl group"
              >
                Learn More About Olamide
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-2 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section ref={skillsRef} className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%231a1a2e' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          }} />
        </div>

        <motion.div
          className="container-custom relative z-10"
          variants={staggerContainer}
          initial="hidden"
          animate={skillsInView ? "visible" : "hidden"}
        >
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <motion.div className="inline-block mb-4 sm:mb-6" variants={fadeInUp}>
              <span className="text-[#c9a227] text-xs sm:text-sm font-bold uppercase tracking-wider">Expertise</span>
              <div className="w-16 sm:w-20 h-1 bg-linear-to-r from-[#c9a227] to-[#e8d48b] mx-auto mt-2" />
            </motion.div>
            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-[#1a1a2e] mb-3 sm:mb-4 leading-tight"
              variants={fadeInUp}
            >
              Musical <span className="text-[#c9a227]">Expertise</span>
            </motion.h2>
            <motion.p
              className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto"
              variants={fadeInUp}
            >
              A multidisciplinary artist delivering excellence across multiple instruments and vocal performance
            </motion.p>
          </div>

          <motion.div
            className="grid md:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
            variants={staggerContainer}
          >
            {/* Saxophone */}
            <motion.div
              className="group bg-linear-to-br from-white to-gray-50 p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-[#c9a227]/20 transition-all duration-300 border-2 border-gray-100 hover:border-[#c9a227] hover:-translate-y-3"
              variants={scaleIn}
              whileHover={{ y: -10 }}
            >
              <motion.div
                className="w-14 h-14 sm:w-16 sm:h-16 bg-linear-to-br from-[#c9a227] to-[#d4ac3a] rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg"
                whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                <Music2 className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
              </motion.div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-black text-[#1a1a2e] mb-2 sm:mb-3">Saxophonist</h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">
                Lead saxophonist with expressive interpretation skills, bringing soul and emotion
                to every performance through masterful saxophone artistry.
              </p>
            </motion.div>

            {/* Vocals */}
            <motion.div
              className="group bg-linear-to-br from-white to-gray-50 p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-[#c9a227]/20 transition-all duration-300 border-2 border-gray-100 hover:border-[#c9a227] hover:-translate-y-3"
              variants={scaleIn}
              whileHover={{ y: -10 }}
            >
              <motion.div
                className="w-14 h-14 sm:w-16 sm:h-16 bg-linear-to-br from-[#c9a227] to-[#d4ac3a] rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg"
                whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                <Mic className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
              </motion.div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-black text-[#1a1a2e] mb-2 sm:mb-3">Vocalist</h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">
                Powerful vocal performances spanning gospel worship, African contemporary,
                and repertoire music with authentic emotional delivery.
              </p>
            </motion.div>

            {/* Keyboard */}
            <motion.div
              className="group bg-linear-to-br from-white to-gray-50 p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-[#c9a227]/20 transition-all duration-300 border-2 border-gray-100 hover:border-[#c9a227] hover:-translate-y-3"
              variants={scaleIn}
              whileHover={{ y: -10 }}
            >
              <motion.div
                className="w-14 h-14 sm:w-16 sm:h-16 bg-linear-to-br from-[#c9a227] to-[#d4ac3a] rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg"
                whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                <Piano className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
              </motion.div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-black text-[#1a1a2e] mb-2 sm:mb-3">Keyboardist</h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">
                Skilled keyboard harmony creating immersive musical experiences,
                complementing vocals and saxophone for complete performances.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Featured Performance Section */}
      <section ref={featuredRef} className="py-12 sm:py-16 md:py-20 lg:py-24 bg-linear-to-br from-[#0f0f1e] via-[#1a1a2e] to-[#16213e] text-white relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-[#c9a227]/10 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-[#c9a227]/5 rounded-full blur-3xl"
            animate={{ scale: [1, 1.3, 1], opacity: [0.05, 0.1, 0.05] }}
            transition={{ duration: 10, repeat: Infinity }}
          />
        </div>

        <motion.div
          className="container-custom relative z-10"
          variants={staggerContainer}
          initial="hidden"
          animate={featuredInView ? "visible" : "hidden"}
        >
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 items-center">
            <motion.div variants={fadeInUp}>
              <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-[#c9a227]/20 text-[#c9a227] text-xs sm:text-sm font-medium rounded-full mb-4 sm:mb-6 backdrop-blur-sm border border-[#c9a227]/30">
                Career Highlight
              </span>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 bg-linear-to-r from-white to-[#c9a227] bg-clip-text text-transparent">
                Performing for the Mayor of Doncaster
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-gray-300 leading-relaxed mb-3 sm:mb-4">
                Olamide Sax has had the honor of performing at Black History Month celebrations in Doncaster, UK,
                entertaining the Mayor of Doncaster and senior council leaders at a public cultural event.
              </p>
              <ul className="space-y-2 mb-4 sm:mb-6">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#c9a227] rounded-full shrink-0" />
                  <span className="text-xs sm:text-sm text-gray-300">Black History Month Celebrations</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#c9a227] rounded-full shrink-0" />
                  <span className="text-xs sm:text-sm text-gray-300">BME United Doncaster Events</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#c9a227] rounded-full shrink-0" />
                  <span className="text-xs sm:text-sm text-gray-300">Community & Faith Centre Performances</span>
                </li>
              </ul>
              <Link
                href="/performances"
                className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 bg-[#c9a227] text-[#1a1a2e] text-xs sm:text-sm md:text-base font-semibold rounded-full hover:bg-[#e8d48b] transition-all hover:scale-105 shadow-lg"
              >
                View All Performances
                <ChevronRight className="w-4 h-4" />
              </Link>
            </motion.div>
            <motion.div
              className="relative"
              variants={scaleIn}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl shadow-[#c9a227]/10 border-2 border-[#c9a227]/20 group">
                <Image
                  src="/images/IMG_0986.jpg"
                  alt="Olamide Sax Performance"
                  fill
                  className="object-cover object-top group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#1a1a2e]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Quick Links Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-linear-to-br from-gray-50 via-white to-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
            {/* Watch Performances */}
            <motion.div whileHover={{ y: -3 }} transition={{ duration: 0.2 }}>
              <Link
                href="/media"
                className="block group p-5 sm:p-6 md:p-8 bg-linear-to-br from-white to-gray-50 rounded-xl sm:rounded-2xl transition-all duration-300 shadow-sm hover:shadow-xl border border-gray-100 hover:border-[#c9a227]/50"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-xl bg-[#c9a227]/10 group-hover:bg-[#c9a227]/20 mb-3 sm:mb-4 transition-colors">
                  <Play className="w-5 h-5 sm:w-6 sm:h-6 text-[#c9a227] group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#1a1a2e] mb-2 transition-colors">
                  Watch Performances
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 transition-colors">
                  Experience live performances, music videos, and behind-the-scenes content.
                </p>
              </Link>
            </motion.div>

            {/* Listen to Music */}
            <motion.div whileHover={{ y: -3 }} transition={{ duration: 0.2 }}>
              <Link
                href="/media"
                className="block group p-5 sm:p-6 md:p-8 bg-linear-to-br from-white to-gray-50 rounded-xl sm:rounded-2xl transition-all duration-300 shadow-sm hover:shadow-xl border border-gray-100 hover:border-[#c9a227]/50"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-xl bg-[#c9a227]/10 group-hover:bg-[#c9a227]/20 mb-3 sm:mb-4 transition-colors">
                  <Headphones className="w-5 h-5 sm:w-6 sm:h-6 text-[#c9a227] group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#1a1a2e] mb-2 transition-colors">
                  Listen to Music
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 transition-colors">
                  Stream releases on Audiomack including Gospel Medley and Vibes Groove Mixtape.
                </p>
              </Link>
            </motion.div>

            {/* Press & Publications */}
            <motion.div whileHover={{ y: -3 }} transition={{ duration: 0.2 }}>
              <Link
                href="/press"
                className="block group p-5 sm:p-6 md:p-8 bg-linear-to-br from-white to-gray-50 rounded-xl sm:rounded-2xl transition-all duration-300 shadow-sm hover:shadow-xl border border-gray-100 hover:border-[#c9a227]/50"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-xl bg-[#c9a227]/10 group-hover:bg-[#c9a227]/20 mb-3 sm:mb-4 transition-colors">
                  <Newspaper className="w-5 h-5 sm:w-6 sm:h-6 text-[#c9a227] group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#1a1a2e] mb-2 transition-colors">
                  Press & Publications
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 transition-colors">
                  Read about Olamide Sax in community and cultural publications.
                </p>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 sm:py-12 md:py-16 lg:py-20 bg-linear-to-br from-[#c9a227] via-[#d4ac3a] to-[#c9a227] relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-white/10 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-[#1a1a2e]/10 rounded-full blur-3xl"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 10, repeat: Infinity }}
          />
        </div>

        <div className="container-custom text-center relative z-10">
          <div className="inline-block mb-3 sm:mb-4">
            <span className="text-[#1a1a2e]/70 text-xs sm:text-sm font-semibold uppercase tracking-wider">Let&apos;s Work Together</span>
            <div className="w-16 sm:w-20 h-1 bg-[#1a1a2e]/30 mx-auto mt-2" />
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#1a1a2e] mb-3 sm:mb-4">
            Ready to Book Olamide Sax?
          </h2>
          <p className="text-[#1a1a2e]/80 text-xs sm:text-sm md:text-base mb-5 sm:mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed">
            Available for weddings, corporate events, church services, cultural celebrations,
            and private functions across the United Kingdom.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 md:px-7 md:py-3.5 bg-[#1a1a2e] text-white text-sm sm:text-base font-semibold rounded-full hover:bg-[#16213e] transition-all shadow-2xl hover:shadow-[#1a1a2e]/50"
            >
              Get in Touch
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
