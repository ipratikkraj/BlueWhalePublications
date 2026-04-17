import React, { useEffect, useState } from 'react';
import { BookCard } from '../components/BookCard';
import { mockBooks } from '../data/mockBooks';
import { mockAuthors } from '../data/mockAuthors';
import { initScrollAnimations } from '../utils/gsapAnimations';
import { Search, Filter, X } from 'lucide-react';

export default function Authors() {
  const [selectedGenre, setSelectedGenre] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredBooks, setFilteredBooks] = useState(mockBooks);

  useEffect(() => {
    initScrollAnimations();
  }, []);

  useEffect(() => {
    let filtered = mockBooks;

    // Filter by genre
    if (selectedGenre !== 'All') {
      filtered = filtered.filter((book) => book.genre === selectedGenre);
    }

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(
        (book) =>
          book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          book.author.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredBooks(filtered);
  }, [selectedGenre, searchQuery]);

  const genres = ['All', ...new Set(mockBooks.map((book) => book.genre))];

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
              Our Authors & Books
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Discover talented authors and their incredible stories published through Bluewhale
            </p>
          </div>
        </div>
      </section>

      {/* Featured Authors Section */}
      <section className="py-20 bg-[#302f2c]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 fade-in-section">
            <h2 className="text-4xl md:text-6xl font-black text-[#d9fb06] mb-4 uppercase">
              Meet Our Authors
            </h2>
          </div>

          <div className="stagger-cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockAuthors.slice(0, 6).map((author) => (
              <div
                key={author.id}
                className="card-item group bg-[#1a1c1b] rounded-lg overflow-hidden hover:scale-105 transition-all duration-300 border border-[#3f4816]/30 hover:border-[#d9fb06]/50"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={author.image}
                    alt={author.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1c1b] via-transparent to-transparent" />
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[#d9fb06] mb-2 group-hover:text-white transition-colors">
                    {author.name}
                  </h3>
                  <p className="text-[#888680] text-sm mb-3 uppercase tracking-wider">
                    {author.genre} Author
                  </p>
                  <p className="text-white/70 text-sm mb-4 line-clamp-3">{author.bio}</p>
                  <div className="text-[#d9fb06] text-sm font-semibold">
                    {author.books} Published Books
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Books Section */}
      <section className="py-20 bg-[#1a1c1b]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 fade-in-section">
            <h2 className="text-4xl md:text-6xl font-black text-[#d9fb06] mb-4 uppercase">
              Published Books
            </h2>
            <p className="text-white/70 text-lg">Browse our collection of published works</p>
          </div>

          {/* Filters */}
          <div className="mb-12 flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#888680]" />
              <input
                type="text"
                placeholder="Search books or authors..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#302f2c] text-white pl-12 pr-12 py-3 rounded-full border border-[#3f4816]/30 focus:border-[#d9fb06] focus:outline-none transition-colors"
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

            {/* Genre Filter */}
            <div className="flex items-center gap-2 flex-wrap justify-center">
              <Filter className="w-5 h-5 text-[#888680]" />
              {genres.map((genre) => (
                <button
                  key={genre}
                  onClick={() => setSelectedGenre(genre)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                    selectedGenre === genre
                      ? 'bg-[#d9fb06] text-[#1a1c1b]'
                      : 'bg-[#302f2c] text-white/80 hover:text-[#d9fb06] border border-[#3f4816]/30'
                  }`}
                >
                  {genre}
                </button>
              ))}
            </div>
          </div>

          {/* Books Grid */}
          {filteredBooks.length > 0 ? (
            <div className="stagger-cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredBooks.map((book) => (
                <BookCard key={book.id} book={book} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-white/70 text-lg">No books found matching your criteria</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
