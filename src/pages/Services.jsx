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
      description: 'Comprehensive editing services from developmental to copyediting',
      features: [
        'Developmental Editing',
        'Line Editing',
        'Copy Editing',
        'Proofreading',
        'Manuscript Critique',
      ],
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173',
    },
    {
      icon: Palette,
      title: 'Book Design',
      description: 'Award-winning design that makes your book stand out',
      features: [
        'Custom Cover Design',
        'Interior Layout',
        'Typography Selection',
        'Print & Digital Formatting',
        'Illustrations',
      ],
      image: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d',
    },
    {
      icon: Rocket,
      title: 'Publishing Services',
      description: 'End-to-end publishing from manuscript to market',
      features: [
        'ISBN Assignment',
        'Copyright Registration',
        'Print & eBook Publishing',
        'Distribution Setup',
        'Royalty Management',
      ],
      image: 'https://images.unsplash.com/photo-1508060793788-7d5f1c40c4ba',
    },
    {
      icon: TrendingUp,
      title: 'Marketing & Distribution',
      description: 'Get your book into the hands of readers worldwide',
      features: [
        'Marketing Strategy',
        'Social Media Campaigns',
        'Amazon Optimization',
        'Book Launch Planning',
        'Author Website Setup',
      ],
      image: 'https://images.unsplash.com/photo-1533669955142-6a73332af4db',
    },
  ];

  return (
    <div className="min-h-screen bg-[#1a1c1b] pt-24">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#d9fb06] rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#3f4816] rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center fade-in-section">
            <h1 className="text-5xl md:text-7xl font-black text-[#d9fb06] mb-6 uppercase">
              Our Services
            </h1>
            <p className="text-xl text-white/80 leading-relaxed mb-8">
              Comprehensive publishing solutions tailored to your unique needs. 
              From manuscript to bestseller, we've got you covered.
            </p>
            <a
              href="/Bluewhale-Publications-Brochure.pdf"
              download="Bluewhale-Publications-Brochure.pdf"
              className="inline-flex items-center bg-[#d9fb06] text-[#1a1c1b] px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all group"
            >
              <Download className="mr-2 w-5 h-5" />
              Download Brochure
            </a>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="space-y-32">
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
                    <div className="relative group">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-96 object-cover rounded-lg shadow-2xl transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1a1c1b] via-transparent to-transparent rounded-lg" />
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className={`${isEven ? '' : 'lg:col-start-1 lg:row-start-1'}`}>
                    <div className="bg-[#302f2c] p-8 md:p-12 rounded-lg border border-[#3f4816]/30 hover:border-[#d9fb06]/50 transition-all">
                      <div className="w-16 h-16 bg-[#d9fb06] rounded-lg flex items-center justify-center mb-6">
                        <Icon className="w-8 h-8 text-[#1a1c1b]" strokeWidth={2.5} />
                      </div>
                      
                      <h2 className="text-3xl md:text-4xl font-black text-[#d9fb06] mb-4 uppercase">
                        {service.title}
                      </h2>
                      
                      <p className="text-white/80 text-lg mb-6 leading-relaxed">
                        {service.description}
                      </p>
                      
                      <ul className="space-y-3 mb-8">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start space-x-3">
                            <CheckCircle className="w-5 h-5 text-[#d9fb06] flex-shrink-0 mt-0.5" />
                            <span className="text-white/70">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <Link
                        to="/submit"
                        className="inline-flex items-center text-[#d9fb06] font-semibold hover:text-white transition-colors group"
                      >
                        Get Started
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
      <section className="py-20 bg-[#302f2c]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 fade-in-section">
            <h2 className="text-4xl md:text-6xl font-black text-[#d9fb06] mb-4 uppercase">
              Our Process
            </h2>
            <p className="text-white/70 text-lg">Simple, transparent, and effective</p>
          </div>

          <div className="stagger-cards grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Submit', description: 'Send us your manuscript' },
              { step: '02', title: 'Review', description: 'We evaluate your work' },
              { step: '03', title: 'Collaborate', description: 'Work with our team' },
              { step: '04', title: 'Publish', description: 'Launch your book' },
            ].map((item, index) => (
              <div
                key={index}
                className="card-item bg-[#1a1c1b] p-8 rounded-lg text-center hover:scale-105 transition-all duration-300 border border-[#3f4816]/30 hover:border-[#d9fb06]/50"
              >
                <div className="text-6xl font-black text-[#d9fb06]/20 mb-4">{item.step}</div>
                <h3 className="text-2xl font-bold text-[#d9fb06] mb-3">{item.title}</h3>
                <p className="text-white/70">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#3f4816] to-[#1a1c1b]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-[#d9fb06] mb-6 uppercase">
            Ready to Get Started?
          </h2>
          <p className="text-white/80 text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help bring your book to life
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/submit"
              className="inline-flex items-center bg-[#d9fb06] text-[#1a1c1b] px-10 py-5 rounded-full font-bold text-lg hover:scale-105 transition-all group"
            >
              Submit Manuscript
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center border-2 border-[#d9fb06] text-[#d9fb06] px-10 py-5 rounded-full font-bold text-lg hover:bg-[#d9fb06] hover:text-[#1a1c1b] transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
