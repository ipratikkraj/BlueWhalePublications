import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Lightbulb, FileText, Edit3, Globe, TrendingUp } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const storyStages = [
  {
    id: 1,
    title: 'AUTHOR REGISTRATION',
    description: 'Sign up on our platform to begin your publishing journey.',
    icon: Lightbulb,
    color: '#d9fb06',
  },
  {
    id: 2,
    title: 'MANUSCRIPT SUBMISSION',
    description: 'Submit your manuscript for professional evaluation.',
    icon: FileText,
    color: '#d9fb06',
  },
  {
    id: 3,
    title: 'EDITING & PROOFREADING',
    description: 'We refine your work to ensure clarity, quality, and impact.',
    icon: Edit3,
    color: '#d9fb06',
  },
  {
    id: 4,
    title: 'COVER & BOOK DESIGN',
    description: 'We create a compelling cover along with professional layout, spine, and back design.',
    icon: Globe,
    color: '#3f4816',
  },
  {
    id: 5,
    title: 'PRINTING & PRODUCTION',
    description: 'Your book is prepared and sent for high-quality printing.',
    icon: TrendingUp,
    color: '#d9fb06',
  },
  {
    id: 6,
    title: 'PUBLICATION & DELIVERY',
    description: 'Your book is officially published and delivered to you—ready to reach readers.',
    icon: TrendingUp,
    color: '#d9fb06',
  },
];

export const ScrollStorySection = () => {
  const containerRef = useRef(null);
  const stagesRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      stagesRef.current.forEach((stage, index) => {
        gsap.fromTo(
          stage,
          {
            opacity: 0,
            y: 100,
            scale: 0.8,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: stage,
              start: 'top 80%',
              end: 'top 30%',
              scrub: 1,
            },
          }
        );

        // Icon rotation animation
        const icon = stage.querySelector('.stage-icon');
        if (icon) {
          gsap.to(icon, {
            rotate: 360,
            duration: 2,
            ease: 'power2.inOut',
            scrollTrigger: {
              trigger: stage,
              start: 'top 60%',
              end: 'top 40%',
              scrub: 1,
            },
          });
        }
      });

      // Book spine animation
      gsap.to('.book-spine', {
        scaleX: 1.2,
        duration: 0.3,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top center',
          end: 'bottom center',
          scrub: 1,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="scroll-story-container relative py-20 bg-[#1a1c1b] overflow-hidden"
    >
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#d9fb06] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#3f4816] rounded-full blur-3xl" />
      </div>

      {/* Book spine visual element */}
      <div className="book-spine absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#d9fb06]/20 via-[#3f4816]/40 to-[#d9fb06]/20 transform -translate-x-1/2 hidden md:block" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 fade-in-section">
          <h2 className="text-5xl md:text-7xl font-black text-[#d9fb06] mb-6 uppercase tracking-tight">
            Our Publishing Process
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            From thought to bestseller, we guide you at every step.
          </p>
        </div>

        <div className="space-y-32">
          {storyStages.map((stage, index) => {
            const Icon = stage.icon;
            const isEven = index % 2 === 0;

            return (
              <div
                key={stage.id}
                ref={(el) => (stagesRef.current[index] = el)}
                className={`flex flex-col ${
                  isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                } items-center gap-12 md:gap-20`}
              >
                {/* Icon Section */}
                <div className="flex-1 flex justify-center">
                  <div className="relative">
                    <div
                      className="stage-icon w-32 h-32 rounded-full flex items-center justify-center relative z-10"
                      style={{ backgroundColor: stage.color }}
                    >
                      <Icon className="w-16 h-16 text-[#1a1c1b]" strokeWidth={2.5} />
                    </div>
                    <div
                      className="absolute inset-0 rounded-full blur-2xl "
                      style={{ backgroundColor: stage.color }}
                    />
                  </div>
                </div>

                {/* Content Section */}
                <div className="flex-1 text-center md:text-left">
                  <div className="inline-block mb-3">
                    <span className="text-[#888680] text-sm font-bold tracking-wider">
                      STAGE {stage.id}
                    </span>
                  </div>
                  <h3
                    className="text-4xl md:text-5xl font-black mb-4 uppercase tracking-tight"
                    style={{ color: stage.color }}
                  >
                    {stage.title}
                  </h3>
                  <p className="text-white/80 text-lg leading-relaxed max-w-md">
                    {stage.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
