import React from 'react';
import { Star } from 'lucide-react';

export const BookCard = ({ book, onClick }) => {
  return (
    <div
      onClick={() => onClick && onClick(book)}
      className="card-item group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-[#DCE9FF] hover:border-[#0756D9]/40 hover:-translate-y-1"
    >
      <div className="relative h-64 overflow-hidden bg-[#EEF5FF]">
        <img
          src={book.cover}
          alt={book.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#123B8F]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-3 right-3 bg-[#0756D9] text-white px-3 py-1 rounded-full text-xs font-bold shadow">
          {book.genre}
        </div>
      </div>
      
      <div className="p-5 bg-white">
        <h3 className="text-[#0B2E73] font-bold text-lg mb-1.5 group-hover:text-[#0756D9] transition-colors line-clamp-1">
          {book.title}
        </h3>
        <p className="text-[#123B8F]/70 text-sm mb-2.5 font-medium">by {book.author}</p>
        <p className="text-[#0B2E73]/70 text-sm mb-4 line-clamp-2 leading-relaxed">{book.description}</p>
        
        <div className="flex items-center justify-between pt-3 border-t border-[#DCE9FF]">
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 fill-[#0756D9] text-[#0756D9]" />
            <span className="text-[#0B2E73] font-bold text-sm">{book.rating}</span>
            <span className="text-[#123B8F]/60 text-xs">({book.reviews})</span>
          </div>
          <span className="text-[#123B8F]/60 text-xs font-medium">{book.published}</span>
        </div>
      </div>
    </div>
  );
};
