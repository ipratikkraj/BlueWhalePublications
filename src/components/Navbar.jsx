import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, BookOpen, ArrowRight } from 'lucide-react';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/authors', label: 'Our Books' },
    { path: '/authors', label: 'Authors' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0d0f12]/95 backdrop-blur-md shadow-lg border-b border-white/10 py-3.5'
          : 'bg-gradient-to-b from-black/70 via-black/30 to-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <img
              src="/logo.svg"
              alt="Bluewhale Publications Logo"
              className="h-8 md:h-10 w-auto transition-transform group-hover:scale-105 filter drop-shadow"
            />
            <span className="text-2xl font-black tracking-tight text-white">
              <span className="text-[#0756D9]">Bluewhale</span> Publications
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link, idx) => (
              <Link
                key={link.path + idx}
                to={link.path}
                className={`nav-link relative text-sm font-semibold tracking-wide transition-colors ${
                  location.pathname === link.path
                    ? 'text-white font-bold'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                {link.label}
                {location.pathname === link.path && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#0756D9] rounded-full" />
                )}
              </Link>
            ))}
          </div>

          {/* Get Started Button (pill outline button) */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-transparent hover:bg-[#0756D9] text-white border-2 border-[#0756D9] px-6 py-2 rounded-full font-bold text-sm transition-all duration-300 shadow-sm hover:shadow-md"
            >
              Get Started
              <ArrowRight className="ml-1.5 w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white p-2 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 space-y-3 border-t border-white/15 pt-4 bg-[#0d0f12] px-4 rounded-xl shadow-2xl">
            {navLinks.map((link, idx) => (
              <Link
                key={link.path + idx}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block text-sm font-semibold py-2 transition-colors ${
                  location.pathname === link.path
                    ? 'text-[#0756D9] font-bold'
                    : 'text-white/90 hover:text-[#0756D9]'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-3 w-full flex items-center justify-center bg-[#0756D9] text-white py-2.5 rounded-full font-bold text-sm"
            >
              Get Started
              <ArrowRight className="ml-1.5 w-4 h-4" />
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};
