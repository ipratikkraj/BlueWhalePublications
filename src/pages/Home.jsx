import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Edit3, Megaphone, Users, Mouse } from 'lucide-react';
import { initScrollAnimations, heroParallax } from '../utils/gsapAnimations';
import { ScrollStorySection } from '../components/ScrollStorySection';
import { BookCard } from '../components/BookCard';
import { featuredBooks } from '../data/mockBooks';

export default function Home() {
  useEffect(() => {
    initScrollAnimations();
    heroParallax();
  }, []);

  return (
    <div className="min-h-screen bg-white text-[#1a1d20]">
      {/* Hero Section */}
      <section className="hero-section relative min-h-screen flex flex-col justify-between overflow-hidden bg-[#0d0f12]">
        {/* Cover Photo Background - Natural colors with dark gradient overlay for text readability */}
        <div className="hero-background absolute inset-0">
          <img
            src="/cover-image.png"
            alt="Bluewhale Publications Workspace"
            className="hero-image w-full h-full object-cover object-center"
          />
          {/* Subtle dark gradient overlay so natural skin tones & books show, while text on left is sharp */}
          <div className="hero-overlay absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/30 md:to-transparent" />
        </div>

        {/* Hero Main Content */}
        <div className="container mx-auto px-6 relative z-10 pt-32 pb-12 my-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-8">
              {/* Tagline */}
              <div className="flex items-center space-x-3 mb-6 fade-in-section">
                <span className="text-white/70 text-xs font-semibold tracking-widest uppercase">
                  PREMIUM PUBLISHING SERVICES
                </span>
                <div className="h-px w-16 bg-white/40" />
              </div>

              {/* Hero Title matching reference image */}
              <h1 className="hero-title text-5xl sm:text-7xl lg:text-8xl font-black text-white mb-4 leading-none tracking-tight uppercase">
                <span className="text-[#0756D9]">BLUE</span>WHALE
                <br />
                PUBLICATIONS
              </h1>

              {/* Subtitle */}
              <p className="text-xs sm:text-sm font-bold tracking-widest text-white/90 uppercase mb-4">
                YOUR STORY. OUR EXPERTISE. A BRIGHTER TOMORROW.
              </p>

              {/* Description paragraph */}
              <p className="body-large text-white/80 text-sm md:text-base mb-8 leading-relaxed max-w-xl">
                From first-time authors to seasoned writers, we help turn your manuscript into a beautifully published book that reaches the world.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link
                  to="/contact"
                  className="btn-primary group inline-flex items-center justify-center bg-[#0756D9] text-white px-7 py-3.5 rounded-xl font-bold text-sm md:text-base hover:bg-[#0648b8] shadow-lg hover:shadow-[#0756D9]/40 hover:scale-105 transition-all"
                >
                  Start Your Publishing Journey
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/services"
                  className="btn-secondary group inline-flex items-center justify-center bg-[#1c1d21]/70 backdrop-blur-md border border-white/30 text-white px-7 py-3.5 rounded-xl font-bold text-sm md:text-base hover:bg-white hover:text-black transition-all"
                >
                  Explore Services
                  <span className="ml-2 text-xs">◆</span>
                </Link>
              </div>

              {/* Stats Bar (Bottom Left of Hero) */}
              <div className="pt-6 border-t border-white/15 max-w-2xl">
                <p className="text-white/60 text-xs font-medium mb-4">
                  Trusted by authors across India and beyond
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-white">
                  <div className="pr-4 border-r border-white/15 last:border-r-0">
                    <div className="text-2xl md:text-3xl font-bold text-white">700+</div>
                    <div className="text-xs text-white/70 font-medium mt-0.5">Books Published</div>
                  </div>
                  <div className="pr-4 border-r border-white/15 last:border-r-0 pl-2">
                    <div className="text-2xl md:text-3xl font-bold text-white">500+</div>
                    <div className="text-xs text-white/70 font-medium mt-0.5">Happy Authors</div>
                  </div>
                  <div className="pr-4 border-r border-white/15 last:border-r-0 pl-2">
                    <div className="text-2xl md:text-3xl font-bold text-white">50+</div>
                    <div className="text-xs text-white/70 font-medium mt-0.5">Genres</div>
                  </div>
                  <div className="pl-2">
                    <div className="text-2xl md:text-3xl font-bold text-white">Global</div>
                    <div className="text-xs text-white/70 font-medium mt-0.5">Presence</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side Decorative Elements */}
            <div className="lg:col-span-4 hidden lg:flex flex-col justify-between h-full items-end text-right self-stretch py-4">
              {/* Top Right Tag */}
              <div className="border-r-2 border-white/50 pr-4 py-1">
                <span className="text-xs font-bold tracking-widest text-white/80 uppercase block">
                  A PLATFORM
                </span>
                <span className="text-xs font-bold tracking-widest text-white/80 uppercase block">
                  FOR EVERY
                </span>
                <span className="text-xs font-bold tracking-widest text-white uppercase block">
                  STORYTELLER
                </span>
              </div>

              {/* Bottom Right Calligraphy Overlay */}
              <div className="mt-auto pt-32 pr-2 text-right">
                <p className="font-serif italic text-3xl md:text-4xl text-white font-light tracking-wide leading-snug drop-shadow-md">
                  Good
                  <br />
                  Stories
                  <br />
                  <span className="relative inline-block">
                    Change Lives.
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0756D9]" />
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Bar (Below Hero - White background with blue outline icons) */}
      <section className="bg-white border-b border-gray-200 py-8 relative z-20 shadow-sm">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 p-2 sm:p-0 border-b sm:border-b-0 border-r sm:border-r border-gray-100 pb-3 sm:pb-0">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#EEF5FF] flex items-center justify-center text-[#0756D9] flex-shrink-0">
                <Edit3 className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <h4 className="font-bold text-[#1a1d20] text-xs sm:text-sm leading-tight">Manuscript Support</h4>
                <p className="text-[10px] sm:text-xs text-gray-500 mt-0.5">From idea to final draft</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 p-2 sm:p-0 border-b sm:border-b-0 lg:border-r border-gray-100 pb-3 sm:pb-0">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#EEF5FF] flex items-center justify-center text-[#0756D9] flex-shrink-0">
                <BookOpen className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <h4 className="font-bold text-[#1a1d20] text-xs sm:text-sm leading-tight">Professional Publishing</h4>
                <p className="text-[10px] sm:text-xs text-gray-500 mt-0.5">World-class quality</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 p-2 sm:p-0 border-r sm:border-r border-gray-100 pt-2 sm:pt-0">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#EEF5FF] flex items-center justify-center text-[#0756D9] flex-shrink-0">
                <Megaphone className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <h4 className="font-bold text-[#1a1d20] text-xs sm:text-sm leading-tight">Marketing & Distribution</h4>
                <p className="text-[10px] sm:text-xs text-gray-500 mt-0.5">Online & Offline</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 p-2 sm:p-0 pt-2 sm:pt-0">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#EEF5FF] flex items-center justify-center text-[#0756D9] flex-shrink-0">
                <Users className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <h4 className="font-bold text-[#1a1d20] text-xs sm:text-sm leading-tight">Author Branding</h4>
                <p className="text-[10px] sm:text-xs text-gray-500 mt-0.5">Because your story matters</p>
              </div>
            </div>
          </div>

          {/* Mouse Scroll Indicator */}
          <div className="flex flex-col items-center justify-center pt-8 text-center">
            <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex items-start justify-center p-1.5 animate-bounce mb-1">
              <div className="w-1 h-2 bg-[#0756D9] rounded-full" />
            </div>
            <span className="text-[10px] font-bold tracking-widest text-gray-500 uppercase">
              SCROLL TO EXPLORE
            </span>
          </div>
        </div>
      </section>

      {/* Book Fair Highlight Section */}
      <section className="py-8 md:py-20 bg-[#f8fafc] border-b border-gray-200">
        <div className="container mx-auto px-3 sm:px-6">
          <div className="max-w-5xl mx-auto bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-gray-200 overflow-hidden grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-5 bg-gradient-to-br from-[#123B8F] to-[#0B2E73] p-5 sm:p-8 md:p-12 text-white flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#0756D9]/30 rounded-full blur-2xl" />
              <div className="relative z-10">
                <div className="text-[10px] sm:text-xs font-bold tracking-widest text-[#DCE9FF] uppercase mb-2 sm:mb-4">
                  SPECIAL EVENT ANNOUNCEMENT
                </div>
                <div className="inline-block bg-white/10 backdrop-blur-md px-3 py-1 sm:px-4 sm:py-2 rounded-full text-[10px] sm:text-xs font-semibold mb-3 sm:mb-6">
                  JANUARY 10, 2027
                </div>
                <h3 className="text-xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight uppercase mb-2 sm:mb-4">
                  Delhi International Book Fair
                </h3>
                <p className="text-[#DCE9FF] text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">
                  Launch your book at NBT's premier literature showcase and connect with readers worldwide.
                </p>
              </div>

              <div className="relative z-10 pt-3 sm:pt-6 border-t border-white/20">
                <p className="font-serif italic text-xs sm:text-sm text-[#DCE9FF]">
                  #BLUEWHALEPUBLICATIONS
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 p-5 sm:p-8 md:p-12 flex flex-col justify-between bg-white">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-1.5 text-[10px] sm:text-xs font-semibold text-gray-500 tracking-widest uppercase mb-3 sm:mb-6 pb-2 sm:pb-4 border-b border-gray-100">
                  <span>@BLUEWHALE_PUBLICATIONS</span>
                  <span>WWW.BLUEWHALEPUBLICATIONS.COM</span>
                </div>

                <h2 className="text-lg sm:text-3xl md:text-5xl font-extrabold text-[#0B2E73] leading-tight mb-3 sm:mb-4 tracking-tight">
                  Launch Your Book At{' '}
                  <span className="text-[#0756D9]">NBT's Delhi International Book Fair</span>
                </h2>

                <div className="my-3 sm:my-6 p-3.5 sm:p-6 bg-[#EEF5FF] rounded-xl sm:rounded-2xl border-l-4 border-[#0756D9]">
                  <p className="font-serif italic text-[#0B2E73] text-xs sm:text-base md:text-lg leading-relaxed">
                    "Your story deserves more than a page. It deserves a place in the world & every great book begins with one brave decision: to begin."
                  </p>
                </div>

                <p className="text-[#123B8F] text-xs sm:text-sm md:text-base font-semibold mb-3 sm:mb-6">
                  Let your words flow and make the world more poetic!
                </p>
              </div>

              <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-center gap-2.5 sm:gap-4">
                <Link
                  to="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center bg-[#0756D9] text-white px-5 py-2.5 sm:px-8 sm:py-4 rounded-lg sm:rounded-xl text-xs sm:text-base font-bold hover:bg-[#0648b8] transition-all shadow-md"
                >
                  Publish With Us Now
                  <ArrowRight className="ml-1.5 w-4 h-4 sm:w-5 sm:h-5" />
                </Link>
                <Link
                  to="/services"
                  className="w-full sm:w-auto inline-flex items-center justify-center border border-[#0756D9] text-[#0756D9] px-5 py-2.5 sm:px-6 sm:py-4 rounded-lg sm:rounded-xl text-xs sm:text-base font-bold hover:bg-[#EEF5FF] transition-all"
                >
                  View Packages
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scroll Story Section */}
      <ScrollStorySection />

      {/* Featured Books Section */}
      <section className="py-10 md:py-24 bg-white">
        <div className="container mx-auto px-3 sm:px-6">
          <div className="text-center mb-8 sm:mb-16 fade-in-section">
            <span className="text-[#0756D9] text-xs font-extrabold uppercase tracking-widest bg-[#EEF5FF] px-4 py-1.5 rounded-full mb-3 inline-block">
              OUR CATALOG
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-[#0B2E73] mb-3 sm:mb-4 uppercase tracking-tight">
              Featured Publications
            </h2>
            <p className="text-gray-600 text-sm sm:text-lg max-w-2xl mx-auto">
              Discover our latest bestselling authors and their incredible stories published across genres
            </p>
          </div>

          <div className="stagger-cards grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {featuredBooks.slice(0, 4).map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <Link
              to="/authors"
              className="inline-flex items-center justify-center bg-[#EEF5FF] text-[#0756D9] hover:bg-[#0756D9] hover:text-white font-bold px-6 py-3 sm:px-8 sm:py-4 rounded-xl transition-all duration-300 border border-[#DCE9FF] text-xs sm:text-base group"
            >
              View All Books & Authors
              <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us / Bluewhale Advantage */}
      <section className="py-10 md:py-24 bg-[#f8fafc]">
        <div className="container mx-auto px-3 sm:px-6">
          <div className="text-center mb-8 sm:mb-16 fade-in-section">
            <span className="text-[#0756D9] text-xs font-extrabold uppercase tracking-widest bg-[#DCE9FF] px-4 py-1.5 rounded-full mb-3 inline-block">
              WHY CHOOSE US
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-[#0B2E73] mb-3 sm:mb-4 uppercase tracking-tight">
              The Bluewhale Advantage
            </h2>
          </div>

          <div className="stagger-cards grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {[
              {
                title: 'Publication-Ready Writing',
                description: 'We shape your manuscript into its strongest form through professional editing & proofreading—ensuring your book meets industry standards & resonates with readers.',
              },
              {
                title: 'Designed to Stand Out',
                description: 'From striking covers to polished interior layouts, we create books that not only read well but look exceptional on shelf and screen.',
              },
              {
                title: 'You Stay in Control',
                description: 'Your vision leads the process. We collaborate with you at every step, keeping everything transparent and preserving your creative control.',
              },
              {
                title: 'From Manuscript to Market',
                description: 'We handle the complete journey—from submission to distribution—so you can focus on being an author while we bring your book to life.',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="card-item bg-white p-3.5 sm:p-8 rounded-xl sm:rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 hover:border-[#0756D9]/50 hover:-translate-y-1 flex flex-col justify-between h-full"
              >
                <div>
                  <div className="w-8 h-8 sm:w-12 sm:h-12 bg-[#0756D9] rounded-lg sm:rounded-xl flex items-center justify-center mb-2.5 sm:mb-6 shadow-md shadow-[#0756D9]/30">
                    <span className="text-base sm:text-2xl font-black text-white">{index + 1}</span>
                  </div>
                  <h3 className="text-xs sm:text-xl font-bold text-[#0B2E73] mb-1 sm:mb-3 leading-snug">{feature.title}</h3>
                  <p className="text-gray-600 text-[11px] sm:text-sm leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-24 bg-gradient-to-r from-[#0B2E73] via-[#123B8F] to-[#0B2E73] text-white relative overflow-hidden">
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tight">
            Start Your Journey Today
          </h2>
          <p className="text-[#DCE9FF] text-lg md:text-xl mb-10 max-w-2xl mx-auto font-medium">
            Join hundreds of successful authors who trusted us with their stories. Your book deserves to be published.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center bg-[#0756D9] text-white px-10 py-5 rounded-xl font-extrabold text-lg hover:bg-white hover:text-[#0B2E73] transition-all shadow-xl hover:scale-105 group"
          >
            Contact Us Now
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}
