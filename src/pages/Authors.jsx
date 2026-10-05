import React, { useEffect, useState } from 'react';
import { BookCard } from '../components/BookCard';
import { mockBooks } from '../data/mockBooks';
import { mockAuthors } from '../data/mockAuthors';
import { initScrollAnimations } from '../utils/gsapAnimations';
import { Search, Filter, X, BookOpen } from 'lucide-react';

export default function Authors() {
  const [selectedGenre, setSelectedGenre] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredBooks, setFilteredBooks] = useState(mockBooks);

  useEffect(() => {
    initScrollAnimations();
  }, []);

  useEffect(() => {
    let filtered = mockBooks;

    if (selectedGenre !== 'All') {
      filtered = filtered.filter((book) => book.genre === selectedGenre);
    }

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
    <div className="min-h-screen bg-[#EEF5FF] text-[#0B2E73] pt-24">
      {/* Hero Section */}
      <section className="relative pt-6 pb-10 md:py-20 bg-gradient-to-b from-[#0B2E73] to-[#123B8F] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#0756D9] rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center fade-in-section">
            <span className="text-[#DCE9FF] text-xs md:text-sm font-extrabold uppercase tracking-widest bg-[#0756D9]/30 px-4 py-1.5 rounded-full mb-3 md:mb-4 inline-block">
              AUTHORS & CATALOG
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-black text-white mb-3 md:mb-6 uppercase tracking-tight">
              Our Authors & Books
            </h1>
            <p className="text-sm sm:text-lg md:text-xl text-[#DCE9FF] leading-relaxed max-w-2xl mx-auto">
              Discover talented authors and their incredible stories published through Bluewhale Publications.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Authors Section */}
      <section className="py-10 md:py-20 bg-white">
        <div className="container mx-auto px-3 sm:px-6">
          <div className="text-center mb-6 sm:mb-16 fade-in-section">
            <span className="text-[#0756D9] text-[10px] sm:text-xs font-extrabold uppercase tracking-widest bg-[#EEF5FF] px-3 py-1 sm:px-4 sm:py-1.5 rounded-full mb-2 sm:mb-3 inline-block">
              FEATURED WRITERS
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-[#0B2E73] mb-2 sm:mb-4 uppercase tracking-tight">
              Meet Our Authors
            </h2>
          </div>

          <div className="stagger-cards grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-8">
            {mockAuthors.map((author) => (
              <div
                key={author.id}
                className="card-item group bg-[#EEF5FF] rounded-xl sm:rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 border border-[#DCE9FF] hover:border-[#0756D9]/40 hover:-translate-y-1 flex flex-col h-full"
              >
                <div className="relative h-44 sm:h-56 md:h-64 overflow-hidden bg-[#DCE9FF] flex-shrink-0">
                  <img
                    src={author.image}
                    alt={author.name}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    style={{ objectPosition: 'center 20%' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B2E73]/60 via-transparent to-transparent" />
                </div>

                <div className="p-3 sm:p-6 bg-white flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="text-sm sm:text-2xl font-bold text-[#0B2E73] mb-0.5 sm:mb-1 group-hover:text-[#0756D9] transition-colors line-clamp-1">
                      {author.name}
                    </h3>
                    <p className="text-[#0756D9] text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-1.5 sm:mb-3 truncate">
                      {author.genre} Author
                    </p>
                    <p className="text-[#123B8F]/80 text-xs sm:text-sm mb-2.5 sm:mb-4 line-clamp-2 sm:line-clamp-3 leading-relaxed">{author.bio}</p>
                  </div>
                  <div className="text-[#0B2E73] text-[10px] sm:text-xs font-bold flex items-center pt-2 sm:pt-3 border-t border-[#DCE9FF]">
                    <BookOpen className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1 sm:mr-1.5 text-[#0756D9]" />
                    {author.books} Published Books
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Books Section */}
      <section className="py-10 md:py-24 bg-[#EEF5FF]">
        <div className="container mx-auto px-3 sm:px-6">
          <div className="text-center mb-6 md:mb-12 fade-in-section">
            <span className="text-[#0756D9] text-[10px] sm:text-xs font-extrabold uppercase tracking-widest bg-[#DCE9FF] px-3 py-1 sm:px-4 sm:py-1.5 rounded-full mb-2 sm:mb-3 inline-block">
              COMPLETE COLLECTION
            </span>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-[#0B2E73] mb-2 sm:mb-4 uppercase tracking-tight">
              Published Books
            </h2>
            <p className="text-[#123B8F]/80 text-sm sm:text-lg">Browse our collection of published works</p>
          </div>

          {/* Filters */}
          <div className="mb-6 md:mb-12 flex flex-col md:flex-row gap-3 sm:gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#123B8F]/60" />
              <input
                type="text"
                placeholder="Search books or authors..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white text-[#0B2E73] pl-12 pr-12 py-3.5 rounded-xl border border-[#DCE9FF] focus:border-[#0756D9] focus:outline-none transition-colors shadow-sm text-sm"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#123B8F]/60 hover:text-[#0756D9]"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>

            {/* Genre Filter */}
            <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap justify-center md:justify-end">
              <Filter className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#123B8F]/60 mr-0.5" />
              {genres.map((genre) => (
                <button
                  key={genre}
                  onClick={() => setSelectedGenre(genre)}
                  className={`px-2.5 py-1 sm:px-4 sm:py-2 rounded-lg sm:rounded-xl text-[10px] sm:text-xs font-bold transition-all ${
                    selectedGenre === genre
                      ? 'bg-[#0756D9] text-white shadow-md'
                      : 'bg-white text-[#0B2E73] hover:bg-[#DCE9FF] border border-[#DCE9FF]'
                  }`}
                >
                  {genre}
                </button>
              ))}
            </div>
          </div>

          {/* Books Grid */}
          {filteredBooks.length > 0 ? (
            <div className="stagger-cards grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6">
              {filteredBooks.map((book) => (
                <BookCard key={book.id} book={book} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white rounded-2xl border border-[#DCE9FF]">
              <p className="text-[#123B8F]/80 text-lg font-medium">No books found matching your criteria</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
