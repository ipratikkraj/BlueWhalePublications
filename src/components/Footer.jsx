import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0B2E73] text-white border-t border-[#0756D9]/30 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div>
            <Link to="/" className="flex items-center space-x-3 mb-4 group">
              <img
                src="/logo.svg"
                alt="Bluewhale Publications Logo"
                className="h-8 w-auto transition-transform group-hover:scale-105"
              />
              <span className="text-xl font-extrabold text-white">
                <span className="text-[#0756D9]">Bluewhale</span> Publications
              </span>
            </Link>
            <p className="text-[#DCE9FF]/80 text-sm leading-relaxed mb-6">
              Transforming ideas into published masterpieces. Your story. Our expertise. A brighter tomorrow.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://www.facebook.com/share/18ScYqbWYX/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#123B8F] flex items-center justify-center text-[#DCE9FF] hover:bg-[#0756D9] hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/bluewhale_publications?igsh=MWpjNWdkZ3BvcmxnZw=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#123B8F] flex items-center justify-center text-[#DCE9FF] hover:bg-[#0756D9] hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-[#123B8F] flex items-center justify-center text-[#DCE9FF] hover:bg-[#0756D9] hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4 tracking-wide border-b border-[#0756D9]/40 pb-2 inline-block">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-[#DCE9FF]/80 hover:text-white text-sm transition-colors flex items-center">
                  <span className="text-[#0756D9] mr-2">›</span> About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-[#DCE9FF]/80 hover:text-white text-sm transition-colors flex items-center">
                  <span className="text-[#0756D9] mr-2">›</span> Our Services
                </Link>
              </li>
              <li>
                <Link to="/authors" className="text-[#DCE9FF]/80 hover:text-white text-sm transition-colors flex items-center">
                  <span className="text-[#0756D9] mr-2">›</span> Authors & Books
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-[#DCE9FF]/80 hover:text-white text-sm transition-colors flex items-center">
                  <span className="text-[#0756D9] mr-2">›</span> Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4 tracking-wide border-b border-[#0756D9]/40 pb-2 inline-block">Services</h3>
            <ul className="space-y-3">
              <li className="text-[#DCE9FF]/80 text-sm flex items-center"><span className="text-[#0756D9] mr-2">•</span> Book Publishing</li>
              <li className="text-[#DCE9FF]/80 text-sm flex items-center"><span className="text-[#0756D9] mr-2">•</span> Professional Editing</li>
              <li className="text-[#DCE9FF]/80 text-sm flex items-center"><span className="text-[#0756D9] mr-2">•</span> Cover & Layout Design</li>
              <li className="text-[#DCE9FF]/80 text-sm flex items-center"><span className="text-[#0756D9] mr-2">•</span> Marketing & Distribution</li>
              <li className="text-[#DCE9FF]/80 text-sm flex items-center"><span className="text-[#0756D9] mr-2">•</span> Author Branding</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4 tracking-wide border-b border-[#0756D9]/40 pb-2 inline-block">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-[#DCE9FF]/80 text-sm">
                <MapPin className="w-5 h-5 flex-shrink-0 text-[#0756D9] mt-0.5" />
                <span>U Block, Sector 24, Gurugram, Haryana 122002, India</span>
              </li>
              <li className="flex items-center space-x-3 text-[#DCE9FF]/80 text-sm">
                <Phone className="w-5 h-5 flex-shrink-0 text-[#0756D9]" />
                <span>+91 8252395376</span>
              </li>
              <li className="flex items-center space-x-3 text-[#DCE9FF]/80 text-sm">
                <Mail className="w-5 h-5 flex-shrink-0 text-[#0756D9]" />
                <span className="break-all">publicationsbluewhale@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#0756D9]/30 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-[#DCE9FF]/70 text-sm">
            © {currentYear} Bluewhale Publications. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="text-[#DCE9FF]/70 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-[#DCE9FF]/70 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
