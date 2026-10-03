import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FileText, Edit3, Globe, UserRoundCheck, BookText, Printer } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const storyStages = [
  {
    id: 1,
    title: 'AUTHOR REGISTRATION',
    description: 'Sign up on our platform to begin your publishing journey.',
    icon: UserRoundCheck,
    color: '#0756D9',
  },
  {
    id: 2,
    title: 'MANUSCRIPT SUBMISSION',
    description: 'Submit your manuscript for professional evaluation.',
    icon: FileText,
    color: '#0756D9',
  },
  {
    id: 3,
    title: 'EDITING & PROOFREADING',
    description: 'We refine your work to ensure clarity, quality, and impact.',
    icon: Edit3,
    color: '#0756D9',
  },
  {
    id: 4,
    title: 'COVER & BOOK DESIGN',
    description: 'We create a compelling cover along with professional layout, spine, and back design.',
    icon: BookText,
    color: '#0756D9',
  },
  {
    id: 5,
    title: 'PRINTING & PRODUCTION',
    description: 'Your book is prepared and sent for high-quality printing.',
    icon: Printer,
    color: '#0756D9',
  },
  {
    id: 6,
    title: 'PUBLICATION & DELIVERY',
    description: 'Your book is officially published and delivered to you—ready to reach readers.',
    icon: Globe,
    color: '#0756D9',
  },
];

export const ScrollStorySection = () => {
  const containerRef = useRef(null);
  const stagesRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      stagesRef.current.forEach((stage) => {
        if (!stage) return;
        gsap.fromTo(
          stage,
          {
            opacity: 0,
            y: 80,
            scale: 0.9,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: stage,
              start: 'top 85%',
              end: 'top 35%',
              scrub: 1,
            },
          }
        );

        const icon = stage.querySelector('.stage-icon');
        if (icon) {
          gsap.to(icon, {
            rotate: 360,
            duration: 2,
            ease: 'power2.inOut',
            scrollTrigger: {
              trigger: stage,
              start: 'top 65%',
              end: 'top 40%',
              scrub: 1,
            },
          });
        }
      });

      gsap.to('.book-spine', {
        scaleY: 1.1,
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
      className="scroll-story-container relative py-24 bg-gradient-to-b from-[#EEF5FF] via-white to-[#EEF5FF] overflow-hidden"
    >
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-10 left-10 w-96 h-96 bg-[#DCE9FF] rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#0756D9]/10 rounded-full blur-3xl" />
      </div>

      {/* Book spine visual element */}
      <div className="book-spine absolute left-1/2 top-32 bottom-32 w-1 bg-gradient-to-b from-[#0756D9]/20 via-[#0756D9] to-[#123B8F]/20 transform -translate-x-1/2 hidden md:block rounded-full" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 fade-in-section">
          <span className="inline-block text-[#0756D9] text-sm font-bold uppercase tracking-widest bg-[#DCE9FF] px-4 py-1.5 rounded-full mb-4">
            Step by Step Journey
          </span>
          <h2 className="text-4xl md:text-6xl font-extrabold text-[#0B2E73] mb-6 tracking-tight uppercase">
            Our Publishing Process
          </h2>
          <p className="text-lg md:text-xl text-[#123B8F]/80 max-w-2xl mx-auto font-medium">
            From thought to bestseller, we guide you at every step with complete care and transparency.
          </p>
        </div>

        <div className="space-y-24">
          {storyStages.map((stage, index) => {
            const Icon = stage.icon;
            const isEven = index % 2 === 0;

            return (
              <div
                key={stage.id}
                ref={(el) => (stagesRef.current[index] = el)}
                className={`flex flex-col ${
                  isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                } items-center gap-8 md:gap-16`}
              >
                {/* Icon Section */}
                <div className="flex-1 flex justify-center">
                  <div className="relative">
                    <div
                      className="stage-icon w-28 h-28 md:w-32 md:h-32 rounded-3xl flex items-center justify-center relative z-10 shadow-xl"
                      style={{ backgroundColor: stage.color }}
                    >
                      <Icon className="w-14 h-14 text-white" strokeWidth={2.2} />
                    </div>
                    <div
                      className="absolute inset-0 rounded-3xl blur-xl opacity-40"
                      style={{ backgroundColor: stage.color }}
                    />
                  </div>
                </div>

                {/* Content Section */}
                <div className="flex-1 text-center md:text-left bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-[#DCE9FF] max-w-lg">
                  <div className="inline-block mb-2">
                    <span className="text-[#0756D9] text-xs font-extrabold tracking-widest uppercase bg-[#EEF5FF] px-3 py-1 rounded-md">
                      STAGE 0{stage.id}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-[#0B2E73] mb-3 uppercase tracking-tight">
                    {stage.title}
                  </h3>
                  <p className="text-[#123B8F]/80 text-base leading-relaxed">
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
