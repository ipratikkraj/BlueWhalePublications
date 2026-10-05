import React, { useEffect } from 'react';
import { Users, Award, BookOpen, Target, Sparkles, CheckCircle2 } from 'lucide-react';
import { initScrollAnimations } from '../utils/gsapAnimations';
import { CountUp } from '../components/CountUp';

export default function About() {
  useEffect(() => {
    initScrollAnimations();
  }, []);

  return (
    <div className="min-h-screen bg-[#EEF5FF] text-[#0B2E73] pt-24">
      {/* Hero Section */}
      <section className="relative pt-6 pb-10 md:py-20 bg-gradient-to-b from-[#0B2E73] to-[#123B8F] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#0756D9] rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center fade-in-section">
            <span className="text-[#DCE9FF] text-xs md:text-sm font-extrabold uppercase tracking-widest bg-[#0756D9]/30 px-4 py-1.5 rounded-full mb-3 md:mb-4 inline-block">
              OUR MISSION & VISION
            </span>
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-4 sm:mb-6 uppercase leading-tight tracking-tight">
              About Bluewhale Publications
            </h1>
            <p className="text-sm sm:text-lg md:text-xl text-[#DCE9FF] leading-relaxed max-w-3xl mx-auto">
              For over 6 years, we've been transforming manuscripts into bestsellers, helping authors navigate the complex world of publishing with confidence and success.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-10 md:py-20 bg-white">
        <div className="container mx-auto px-3 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="fade-in-section">
              <span className="text-[#0756D9] text-xs font-bold uppercase tracking-widest bg-[#EEF5FF] px-3.5 py-1 rounded-md mb-3 inline-block">
                WHO WE ARE
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-[#0B2E73] mb-4 sm:mb-6 uppercase tracking-tight">
                Our Story
              </h2>
              <div className="space-y-3 sm:space-y-4 text-[#123B8F]/80 leading-relaxed text-sm sm:text-base">
                <p>
                  Bluewhale Publications began with a simple mission: to give every author a voice. What started as a dedicated independent press has grown into a full-service publishing house with a portfolio of over 500+ published titles.
                </p>
                <p>
                  We believe that great stories deserve to be told. Whether you're a first-time author or an established writer, we provide the expertise, support, and distribution resources needed to bring your vision to life.
                </p>
                <p>
                  Our team of experienced editors, cover designers, and marketing professionals work collaboratively with each author to ensure their book not only meets industry standards but exceeds reader expectations.
                </p>
              </div>
            </div>

            <div className="fade-in-section">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#DCE9FF]">
                <img
                  src="https://images.unsplash.com/photo-1544185310-0b3cf501672b"
                  alt="Publishing House Workspace"
                  className="w-full h-64 sm:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B2E73]/60 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-10 md:py-20 bg-[#EEF5FF]">
        <div className="container mx-auto px-3 sm:px-6">
          <div className="text-center mb-8 sm:mb-16 fade-in-section">
            <span className="text-[#0756D9] text-xs font-extrabold uppercase tracking-widest bg-[#DCE9FF] px-4 py-1.5 rounded-full mb-3 inline-block">
              WHAT DRIVES US
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-[#0B2E73] mb-3 sm:mb-4 uppercase tracking-tight">
              Our Core Values
            </h2>
            <p className="text-[#123B8F]/80 text-sm sm:text-lg">Principles that guide everything we do</p>
          </div>

          <div className="stagger-cards grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {[
              {
                icon: Users,
                title: 'Author First, Always',
                description: 'Every decision we make starts with the author. We respect your voice, your vision, and your ownership at every step of the journey.',
              },
              {
                icon: BookOpen,
                title: 'Quality Without Compromise',
                description: 'We are committed to delivering books that meet professional standards—through careful editing, thoughtful design, and attention to every detail.',
              },
              {
                icon: Award,
                title: 'Creativity with Purpose',
                description: 'We combine creative design and storytelling with strategic thinking—so your book doesn’t just exist, it stands out in the market.',
              },
              {
                icon: Target,
                title: 'Growth for Every Author',
                description: 'Publishing is just the beginning. We aim to support authors in building their identity, reach, and long-term writing career.',
              },
            ].map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="card-item bg-white p-3.5 sm:p-8 rounded-xl sm:rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-[#DCE9FF] hover:border-[#0756D9]/40 hover:-translate-y-1 flex flex-col justify-between h-full"
                >
                  <div>
                    <div className="w-10 h-10 sm:w-14 sm:h-14 bg-[#0756D9] rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-6 shadow-md shadow-[#0756D9]/30">
                      <Icon className="w-5 h-5 sm:w-7 sm:h-7 text-white" strokeWidth={2.2} />
                    </div>
                    <h3 className="text-xs sm:text-xl font-bold text-[#0B2E73] mb-1.5 sm:mb-3 leading-snug">{value.title}</h3>
                    <p className="text-[#123B8F]/80 text-[11px] sm:text-sm leading-relaxed">{value.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-6 md:py-20 bg-gradient-to-r from-[#0B2E73] to-[#123B8F] text-white">
        <div className="container mx-auto px-1.5 sm:px-6">
          <div className="stagger-cards grid grid-cols-4 gap-1 sm:gap-8">
            {[
              { number: 700, suffix: '+', label: 'Books Published' },
              { number: 6, suffix: '+', label: 'Years Experience' },
              { number: 500, suffix: '+', label: 'Happy Authors' },
              { number: 50, suffix: '+', label: 'Genres Covered' },
            ].map((stat, index) => (
              <div key={index} className="card-item text-center">
                <CountUp end={stat.number} suffix={stat.suffix} duration={2500} className="text-base sm:text-3xl md:text-5xl font-extrabold text-[#d9fb06] tracking-tight" />
                <div className="text-[#DCE9FF] text-[10px] sm:text-base md:text-lg mt-0.5 sm:mt-2 font-medium leading-tight">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-10 md:py-20 bg-white">
        <div className="container mx-auto px-3 sm:px-6">
          <div className="max-w-3xl mx-auto text-center fade-in-section">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-[#0B2E73] mb-4 sm:mb-6 uppercase tracking-tight">
              Our Mission
            </h2>
            <p className="text-sm sm:text-lg md:text-xl text-[#123B8F]/90 leading-relaxed mb-6 sm:mb-8 font-medium">
              To empower authors worldwide by providing world-class publishing services that transform manuscripts into impactful, professionally crafted books that inspire, educate, and entertain readers across the globe.
            </p>
            <div className="h-1.5 w-24 bg-[#0756D9] mx-auto rounded-full" />
          </div>
        </div>
      </section>
    </div>
  );
}
