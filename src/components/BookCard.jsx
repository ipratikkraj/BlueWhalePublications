import React from 'react';
import { Star } from 'lucide-react';

export const BookCard = ({ book, onClick }) => {
  return (
    <div
      onClick={() => onClick && onClick(book)}
      className="card-item group cursor-pointer bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-[#DCE9FF] hover:border-[#0756D9]/40 hover:-translate-y-1 flex flex-col h-full"
    >
      <div className="relative h-44 sm:h-56 md:h-64 overflow-hidden bg-[#EEF5FF] flex-shrink-0">
        <img
          src={book.cover}
          alt={book.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#123B8F]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-2 right-2 sm:top-3 sm:right-3 bg-[#0756D9] text-white px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-[10px] sm:text-xs font-bold shadow truncate max-w-[80%]">
          {book.genre}
        </div>
      </div>
      
      <div className="p-3 sm:p-5 bg-white flex flex-col flex-1 justify-between">
        <div>
          <h3 className="text-[#0B2E73] font-bold text-sm sm:text-lg mb-1 group-hover:text-[#0756D9] transition-colors line-clamp-1 leading-tight">
            {book.title}
          </h3>
          <p className="text-[#123B8F]/70 text-xs sm:text-sm mb-1.5 sm:mb-2.5 font-medium truncate">by {book.author}</p>
          <p className="text-[#0B2E73]/70 text-xs sm:text-sm mb-3 line-clamp-2 leading-relaxed">{book.description}</p>
        </div>
        
        <div className="flex items-center justify-between pt-2 sm:pt-3 border-t border-[#DCE9FF]">
          <div className="flex items-center space-x-1">
            <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-[#0756D9] text-[#0756D9]" />
            <span className="text-[#0B2E73] font-bold text-xs sm:text-sm">{book.rating}</span>
            <span className="text-[#123B8F]/60 text-[10px] sm:text-xs">({book.reviews})</span>
          </div>
          <span className="text-[#123B8F]/60 text-[10px] sm:text-xs font-medium">{book.published}</span>
        </div>
      </div>
    </div>
  );
};
