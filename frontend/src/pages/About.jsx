import React, { useEffect } from 'react';
import { Users, Award, BookOpen, Target } from 'lucide-react';
import { initScrollAnimations } from '../utils/gsapAnimations';

export default function About() {
  useEffect(() => {
    initScrollAnimations();
  }, []);

  return (
    <div className="min-h-screen bg-[#1a1c1b] pt-24">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#d9fb06] rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center fade-in-section">
            <h1 className="text-5xl md:text-7xl font-black text-[#d9fb06] mb-6 uppercase">
              About Bluewhale Publications
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              For over 6 years, we've been transforming manuscripts into bestsellers, 
              helping authors navigate the complex world of publishing with confidence and success.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-[#302f2c]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in-section">
              <h2 className="text-4xl md:text-5xl font-black text-[#d9fb06] mb-6 uppercase">
                Our Story
              </h2>
              <div className="space-y-4 text-white/80 leading-relaxed">
                <p>
                  Bluewhale Publications began with a simple mission: to give 
                  every author a voice. What started as a small independent press has grown into 
                  a full-service publishing house with a portfolio of over 135 titles.
                </p>
                <p>
                  We believe that great stories deserve to be told. Whether you're a first-time 
                  author or an established writer, we provide the expertise, support, and resources 
                  needed to bring your vision to life.
                </p>
                <p>
                  Our team of experienced editors, designers, and marketing professionals work 
                  collaboratively with each author to ensure their book not only meets industry 
                  standards but exceeds reader expectations.
                </p>
              </div>
            </div>
            
            <div className="fade-in-section">
              <img
                src="https://images.unsplash.com/photo-1544185310-0b3cf501672b"
                alt="Publishing House"
                className="w-full h-96 object-cover rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-[#1a1c1b]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 fade-in-section">
            <h2 className="text-4xl md:text-6xl font-black text-[#d9fb06] mb-4 uppercase">
              Our Values
            </h2>
            <p className="text-white/70 text-lg">Principles that guide everything we do</p>
          </div>

          <div className="stagger-cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                description: 'We combine creative design and storytelling with strategic thinking—so your book doesn’t just exist, it stands out.',
              },
              {
                icon: Target,
                title: 'Growth for Every Author',
                description: 'Publishing is just the beginning. We aim to support authors in building their identity, reach, and long-term success.',
              },
            ].map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="card-item bg-[#302f2c] p-8 rounded-lg hover:scale-105 transition-all duration-300 border border-[#3f4816]/30 hover:border-[#d9fb06]/50"
                >
                  <div className="w-16 h-16 bg-[#d9fb06] rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-8 h-8 text-[#1a1c1b]" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-2xl font-bold text-[#d9fb06] mb-3">{value.title}</h3>
                  <p className="text-white/70 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-[#3f4816] to-[#1a1c1b]">
        <div className="container mx-auto px-6">
          <div className="stagger-cards grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '135+', label: 'Books Published' },
              { number: '6+', label: 'Years Experience' },
              { number: '105+', label: 'Happy Authors' },
              { number: '6+', label: 'Awards Won' },
            ].map((stat, index) => (
              <div key={index} className="card-item text-center">
                <div className="text-5xl md:text-6xl font-black text-[#d9fb06] mb-2">
                  {stat.number}
                </div>
                <div className="text-white/80 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-[#302f2c]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center fade-in-section">
            <h2 className="text-4xl md:text-5xl font-black text-[#d9fb06] mb-6 uppercase">
              Our Mission
            </h2>
            <p className="text-xl text-white/80 leading-relaxed mb-8">
              To empower authors worldwide by providing world-class publishing services that 
              transform manuscripts into impactful, professionally crafted books that inspire, 
              educate, and entertain readers across the globe.
            </p>
            <div className="h-1 w-32 bg-[#d9fb06] mx-auto" />
          </div>
        </div>
      </section>
    </div>
  );
}
