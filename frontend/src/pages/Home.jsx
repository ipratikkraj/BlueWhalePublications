import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { initScrollAnimations, heroParallax } from '../utils/gsapAnimations';
import { ScrollStorySection } from '../components/ScrollStorySection';
import { BookCard } from '../components/BookCard';
import { featuredBooks } from '../data/mockBooks';
import { featuredPosts } from '../data/mockBlog';

export default function Home() {
  useEffect(() => {
    initScrollAnimations();
    heroParallax();
  }, []);

  return (
    <div className="min-h-screen bg-[#1a1c1b]">
      {/* Hero Section */}
      <section className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="hero-background absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d"
            alt="Books"
            className="hero-image w-full h-full object-cover"
          />
          <div className="hero-overlay absolute inset-0 bg-gradient-to-r from-[#1a1c1b]/95 via-[#1a1c1b]/80 to-transparent" />
        </div>

        <div className="container mx-auto px-6 relative z-10 pt-20">
          <div className="max-w-3xl">
            <div className="flex items-center space-x-2 mb-6 fade-in-section">
              <Sparkles className="w-6 h-6 text-[#d9fb06]" />
              <span className="text-[#d9fb06] text-sm font-semibold tracking-wider uppercase">
                Premium Publishing Services
              </span>
            </div>
            
            <h1 className="hero-title text-6xl md:text-8xl font-black text-[#d9fb06] mb-6 leading-tight uppercase">
              Stories That Make Waves.
            </h1>
            
            <p className="body-large text-white/80 mb-8 leading-relaxed max-w-2xl">
              "At Bluewhale Publications, every voice has the power to create waves.
              From debut authors to seasoned writers,
              We provide a platform that nurtures creativity and delivers quality publishing."
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/submit"
                className="btn-primary group inline-flex items-center justify-center bg-[#d9fb06] text-[#1a1c1b] px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all"
              >
                Publish Your Story
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/services"
                className="btn-secondary group inline-flex items-center justify-center border-2 border-[#d9fb06] text-[#d9fb06] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#d9fb06] hover:text-[#1a1c1b] transition-all"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-[#d9fb06] rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-[#d9fb06] rounded-full" />
          </div>
        </div>
      </section>

      {/* Scroll Story Section */}
      <ScrollStorySection />

      {/* Featured Books Section */}
      <section className="py-20 bg-gradient-to-b from-[#1a1c1b] to-[#302f2c]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 fade-in-section">
            <h2 className="text-4xl md:text-6xl font-black text-[#d9fb06] mb-4 uppercase">
              Featured Publications
            </h2>
            <p className="text-white/70 text-lg">
              Discover our latest bestselling authors and their incredible stories
            </p>
          </div>

          <div className="stagger-cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredBooks.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/authors"
              className="inline-flex items-center text-[#d9fb06] hover:text-white font-semibold transition-colors group"
            >
              View All Books
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-[#302f2c]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 fade-in-section">
            <h2 className="text-4xl md:text-6xl font-black text-[#d9fb06] mb-4 uppercase">
              Why Choose Bluewhale?
            </h2>
          </div>

          <div className="stagger-cards grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Expert Editorial Team',
                description: 'Professional editors with decades of experience in diverse genres',
              },
              {
                title: 'Premium Design',
                description: 'Award-winning designers create stunning covers that sell',
              },
              {
                title: 'Global Distribution',
                description: 'Your book reaches readers worldwide through major retailers',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="card-item bg-[#1a1c1b] p-8 rounded-lg hover:scale-105 transition-all duration-300 border border-[#3f4816]/30 hover:border-[#d9fb06]/50"
              >
                <div className="w-12 h-12 bg-[#d9fb06] rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl font-black text-[#1a1c1b]">{index + 1}</span>
                </div>
                <h3 className="text-2xl font-bold text-[#d9fb06] mb-3">{feature.title}</h3>
                <p className="text-white/70 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="py-20 bg-[#1a1c1b]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 fade-in-section">
            <h2 className="text-4xl md:text-6xl font-black text-[#d9fb06] mb-4 uppercase">
              Insights & Resources
            </h2>
            <p className="text-white/70 text-lg">Expert tips for aspiring authors</p>
          </div>

          <div className="stagger-cards grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredPosts.map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.id}`}
                className="card-item group bg-[#302f2c] rounded-lg overflow-hidden hover:scale-105 transition-all duration-300"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[#d9fb06] text-xs font-bold uppercase tracking-wider">
                      {post.category}
                    </span>
                    <span className="text-[#888680] text-xs">{post.readTime}</span>
                  </div>
                  <h3 className="text-white font-bold text-xl mb-2 group-hover:text-[#d9fb06] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-[#888680] text-sm">{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/blog"
              className="inline-flex items-center text-[#d9fb06] hover:text-white font-semibold transition-colors group"
            >
              Read More Articles
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#3f4816] to-[#1a1c1b] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#d9fb06] rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#d9fb06] rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-black text-[#d9fb06] mb-6 uppercase">
            Start Your Author Journey Today
          </h2>
          <p className="text-white/80 text-xl mb-8 max-w-2xl mx-auto">
            Join hundreds of successful authors who trusted us with their stories
          </p>
          <Link
            to="/submit"
            className="inline-flex items-center bg-[#d9fb06] text-[#1a1c1b] px-10 py-5 rounded-full font-bold text-lg hover:scale-105 transition-all group"
          >
            Submit Your Manuscript
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}
