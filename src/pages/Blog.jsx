import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { mockBlogPosts } from '../data/mockBlog';
import { initScrollAnimations } from '../utils/gsapAnimations';
import { Search, Calendar, Clock, ArrowRight, X } from 'lucide-react';

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredPosts, setFilteredPosts] = useState(mockBlogPosts);

  useEffect(() => {
    initScrollAnimations();
  }, []);

  useEffect(() => {
    let filtered = mockBlogPosts;

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter((post) => post.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(
        (post) =>
          post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredPosts(filtered);
  }, [selectedCategory, searchQuery]);

  const categories = ['All', ...new Set(mockBlogPosts.map((post) => post.category))];

  return (
    <div className="min-h-screen bg-[#1a1c1b] pt-24">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#d9fb06] rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center fade-in-section">
            <h1 className="text-5xl md:text-7xl font-black text-[#d9fb06] mb-6 uppercase">
              Blog & Resources
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Expert insights, tips, and guides for aspiring and established authors
            </p>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          {/* Search and Filters */}
          <div className="mb-12 space-y-6">
            {/* Search */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#888680]" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#302f2c] text-white pl-12 pr-12 py-4 rounded-full border border-[#3f4816]/30 focus:border-[#d9fb06] focus:outline-none transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#888680] hover:text-[#d9fb06]"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-3 flex-wrap justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                    selectedCategory === category
                      ? 'bg-[#d9fb06] text-[#1a1c1b]'
                      : 'bg-[#302f2c] text-white/80 hover:text-[#d9fb06] border border-[#3f4816]/30'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Featured Post */}
          {filteredPosts.length > 0 && (
            <Link
              to={`/blog/${filteredPosts[0].id}`}
              className="fade-in-section block mb-12 group"
            >
              <div className="bg-[#302f2c] rounded-lg overflow-hidden grid grid-cols-1 lg:grid-cols-2 hover:scale-[1.02] transition-all duration-300">
                <div className="h-96 lg:h-auto overflow-hidden">
                  <img
                    src={filteredPosts[0].image}
                    alt={filteredPosts[0].title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="bg-[#d9fb06] text-[#1a1c1b] px-3 py-1 rounded-full text-xs font-bold uppercase">
                      Featured
                    </span>
                    <span className="text-[#888680] text-sm uppercase tracking-wider">
                      {filteredPosts[0].category}
                    </span>
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-black text-[#d9fb06] mb-4 group-hover:text-white transition-colors">
                    {filteredPosts[0].title}
                  </h2>
                  <p className="text-white/70 text-lg mb-6 line-clamp-3">
                    {filteredPosts[0].excerpt}
                  </p>
                  <div className="flex items-center space-x-6 text-[#888680] text-sm mb-6">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{filteredPosts[0].date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>{filteredPosts[0].readTime}</span>
                    </div>
                  </div>
                  <div className="flex items-center text-[#d9fb06] font-semibold group-hover:text-white transition-colors">
                    Read Article
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          )}

          {/* Blog Grid */}
          {filteredPosts.length > 1 ? (
            <div className="stagger-cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.slice(1).map((post) => (
                <Link
                  key={post.id}
                  to={`/blog/${post.id}`}
                  className="card-item group bg-[#302f2c] rounded-lg overflow-hidden hover:scale-105 transition-all duration-300"
                >
                  <div className="h-56 overflow-hidden">
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
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#d9fb06] transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-[#888680] text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-[#888680]">{post.date}</span>
                      <ArrowRight className="w-5 h-5 text-[#d9fb06] group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : filteredPosts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-white/70 text-lg">No articles found matching your criteria</p>
            </div>
          ) : null}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-[#3f4816] to-[#1a1c1b]">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-black text-[#d9fb06] mb-4 uppercase">
              Stay Updated
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Subscribe to our newsletter for publishing tips, industry insights, and exclusive offers
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-white/10 backdrop-blur-sm text-white px-6 py-4 rounded-full border border-white/20 focus:border-[#d9fb06] focus:outline-none transition-colors"
              />
              <button
                type="submit"
                className="bg-[#d9fb06] text-[#1a1c1b] px-8 py-4 rounded-full font-bold hover:scale-105 transition-all"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
