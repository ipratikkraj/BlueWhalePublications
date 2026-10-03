import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FileEdit, Palette, Rocket, TrendingUp, CheckCircle, ArrowRight, Download } from 'lucide-react';
import { initScrollAnimations } from '../utils/gsapAnimations';

export default function Services() {
  useEffect(() => {
    initScrollAnimations();
  }, []);

  const services = [
    {
      icon: FileEdit,
      title: 'Professional Editing',
      description: 'Comprehensive editing services from developmental evaluation to line editing and final proofreading.',
      features: [
        'Developmental Editing & Structuring',
        'Line & Copy Editing',
        'Grammar & Punctuation Polish',
        'Proofreading & Formatting Checks',
        'Detailed Manuscript Feedback Report',
      ],
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173',
    },
    {
      icon: Palette,
      title: 'Book Cover & Interior Design',
      description: 'Stunning cover and interior layout design crafted to capture reader attention.',
      features: [
        'Custom 2D/3D Cover Art',
        'Professional Typesetting & Formatting',
        'Typography Selection & Spine Design',
        'Print-Ready PDF & eBook Formats',
        'Custom Illustrations & Graphic Assets',
      ],
      image: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d',
    },
    {
      icon: Rocket,
      title: 'Complete Publishing Package',
      description: 'End-to-end publishing handling copyright, ISBN registration, and global distribution.',
      features: [
        'ISBN Assignment & Copyright Registration',
        'Paperback, Hardcover & Digital eBook Release',
        'Worldwide Amazon & Flipkart Availability',
        'Royalty Tracking & Direct Payments',
        'Author Copies Delivered to Your Door',
      ],
      image: 'https://images.unsplash.com/photo-1508060793788-7d5f1c40c4ba',
    },
    {
      icon: TrendingUp,
      title: 'Marketing & Author Branding',
      description: 'Strategic promotion to ensure your book reaches your target audience.',
      features: [
        'Book Launch Campaign Planning',
        'Book Fair Expositions (NBT Delhi Book Fair)',
        'Social Media Promotions & Press Releases',
        'Amazon A+ Content & SEO Optimization',
        'Author Portfolio & Media Kit',
      ],
      image: 'https://images.unsplash.com/photo-1533669955142-6a73332af4db',
    },
  ];

  return (
    <div className="min-h-screen bg-[#EEF5FF] text-[#0B2E73] pt-24">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-[#0B2E73] to-[#123B8F] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#0756D9] rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center fade-in-section">
            <span className="text-[#DCE9FF] text-xs md:text-sm font-extrabold uppercase tracking-widest bg-[#0756D9]/30 px-4 py-1.5 rounded-full mb-4 inline-block">
              TAILORED PUBLISHING SOLUTIONS
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tight">
              Our Services
            </h1>
            <p className="text-lg md:text-xl text-[#DCE9FF] leading-relaxed mb-8 max-w-2xl mx-auto">
              Comprehensive publishing solutions tailored to your unique needs. From manuscript polish to worldwide distribution.
            </p>
            <a
              href="/Bluewhale-Publications-Brochure.pdf"
              download="Bluewhale-Publications-Brochure.pdf"
              className="inline-flex items-center bg-[#0756D9] text-white px-8 py-4 rounded-xl font-bold text-base md:text-lg hover:bg-white hover:text-[#0B2E73] transition-all shadow-lg group"
            >
              <Download className="mr-2.5 w-5 h-5" />
              Download Publishing Brochure
            </a>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="space-y-24">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`fade-in-section grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    isEven ? '' : 'lg:grid-flow-dense'
                  }`}
                >
                  {/* Image Section */}
                  <div className={`${isEven ? '' : 'lg:col-start-2'}`}>
                    <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#DCE9FF] group">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-80 md:h-96 object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0B2E73]/40 via-transparent to-transparent" />
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className={`${isEven ? '' : 'lg:col-start-1 lg:row-start-1'}`}>
                    <div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-[#DCE9FF]">
                      <div className="w-14 h-14 bg-[#0756D9] rounded-xl flex items-center justify-center mb-6 shadow-md shadow-[#0756D9]/30">
                        <Icon className="w-7 h-7 text-white" strokeWidth={2.2} />
                      </div>

                      <h2 className="text-2xl md:text-4xl font-extrabold text-[#0B2E73] mb-4 uppercase tracking-tight">
                        {service.title}
                      </h2>

                      <p className="text-[#123B8F]/80 text-base mb-6 leading-relaxed">
                        {service.description}
                      </p>

                      <ul className="space-y-3 mb-8">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start space-x-3">
                            <CheckCircle className="w-5 h-5 text-[#0756D9] flex-shrink-0 mt-0.5" />
                            <span className="text-[#0B2E73]/90 text-sm font-medium">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <Link
                        to="/contact"
                        className="inline-flex items-center text-[#0756D9] font-extrabold hover:text-[#123B8F] transition-colors group"
                      >
                        Enquire About This Service
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white border-t border-[#DCE9FF]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 fade-in-section">
            <span className="text-[#0756D9] text-xs font-extrabold uppercase tracking-widest bg-[#EEF5FF] px-4 py-1.5 rounded-full mb-3 inline-block">
              SIMPLE & EFFICIENT
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B2E73] mb-4 uppercase tracking-tight">
              Our 4-Step Process
            </h2>
            <p className="text-[#123B8F]/80 text-lg">Transparent collaboration from day one</p>
          </div>

          <div className="stagger-cards grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Submit', description: 'Send us your draft manuscript for review' },
              { step: '02', title: 'Review', description: 'We evaluate structure, genre, and market fit' },
              { step: '03', title: 'Collaborate', description: 'Work closely with our editorial & design team' },
              { step: '04', title: 'Publish', description: 'Launch your book globally across platforms' },
            ].map((item, index) => (
              <div
                key={index}
                className="card-item bg-[#EEF5FF] p-8 rounded-2xl text-center border border-[#DCE9FF] hover:border-[#0756D9]/50 transition-all hover:-translate-y-1"
              >
                <div className="text-5xl font-black text-[#0756D9]/20 mb-3">{item.step}</div>
                <h3 className="text-xl font-bold text-[#0B2E73] mb-2">{item.title}</h3>
                <p className="text-[#123B8F]/80 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#0B2E73] to-[#123B8F] text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 uppercase tracking-tight">
            Ready to Publish Your Book?
          </h2>
          <p className="text-[#DCE9FF] text-lg mb-8 max-w-2xl mx-auto font-medium">
            Let's discuss how we can help bring your manuscript to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-[#0756D9] text-white px-8 py-4 rounded-xl font-bold text-base md:text-lg hover:bg-white hover:text-[#0B2E73] transition-all shadow-lg"
            >
              Get In Touch Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
