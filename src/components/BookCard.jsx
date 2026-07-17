import React from 'react';
import { Star } from 'lucide-react';

export const BookCard = ({ book, onClick }) => {
  return (
    <div
      onClick={() => onClick && onClick(book)}
      className="card-item group cursor-pointer bg-[#302f2c] rounded-lg overflow-hidden hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-[#d9fb06]/20"
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={book.cover}
          alt={book.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1c1b] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-3 right-3 bg-[#d9fb06] text-[#1a1c1b] px-3 py-1 rounded-full text-xs font-bold">
          {book.genre}
        </div>
      </div>
      
      <div className="p-5">
        <h3 className="text-[#d9fb06] font-bold text-xl mb-2 group-hover:text-white transition-colors line-clamp-1">
          {book.title}
        </h3>
        <p className="text-[#888680] text-sm mb-3">by {book.author}</p>
        <p className="text-white/70 text-sm mb-4 line-clamp-2">{book.description}</p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 fill-[#d9fb06] text-[#d9fb06]" />
            <span className="text-[#d9fb06] font-semibold text-sm">{book.rating}</span>
            <span className="text-[#888680] text-xs">({book.reviews})</span>
          </div>
          <span className="text-[#888680] text-xs">{book.published}</span>
        </div>
      </div>
    </div>
  );
};
