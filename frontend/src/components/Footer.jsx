import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1a1c1b] border-t border-[#3f4816]/50 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4 group">
              <BookOpen className="w-8 h-8 text-[#d9fb06]" />
              <span className="text-xl font-bold text-[#d9fb06]">
                Bluewhale<span className="text-white/80 text-sm"> Publications</span>
              </span>
            </Link>
            <p className="text-[#888680] text-sm leading-relaxed mb-4">
              Transforming ideas into published masterpieces. We help authors bring their stories to life.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-[#888680] hover:text-[#d9fb06] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-[#888680] hover:text-[#d9fb06] transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-[#888680] hover:text-[#d9fb06] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-[#888680] hover:text-[#d9fb06] transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-[#888680] hover:text-[#d9fb06] text-sm transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-[#888680] hover:text-[#d9fb06] text-sm transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/authors" className="text-[#888680] hover:text-[#d9fb06] text-sm transition-colors">
                  Our Authors
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-[#888680] hover:text-[#d9fb06] text-sm transition-colors">
                  Blog & Resources
                </Link>
              </li>
              <li>
                <Link to="/submit" className="text-[#888680] hover:text-[#d9fb06] text-sm transition-colors">
                  Submit Manuscript
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-3">
              <li className="text-[#888680] text-sm">Book Publishing</li>
              <li className="text-[#888680] text-sm">Professional Editing</li>
              <li className="text-[#888680] text-sm">Cover Design</li>
              <li className="text-[#888680] text-sm">Marketing & Distribution</li>
              <li className="text-[#888680] text-sm">Author Support</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-[#888680] text-sm">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>123 Publishing Lane, New York, NY 10001</span>
              </li>
              <li className="flex items-center space-x-3 text-[#888680] text-sm">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3 text-[#888680] text-sm">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span>info@bluewhalepublications.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#3f4816]/50 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-[#888680] text-sm">
            © {currentYear} Bluewhale Publications. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="text-[#888680] hover:text-[#d9fb06] text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-[#888680] hover:text-[#d9fb06] text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
