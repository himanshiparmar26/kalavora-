import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT US', path: '/about' },
    { name: 'SERVICES', path: '/services' },
    { name: 'OUR WORK', path: '/work' },
    { name: 'BLOG', path: '/blog' },
    { name: 'CONTACT US', path: '/contact' }
  ];

  return (
    <nav className="bg-[#FFFFFF]/95 backdrop-blur-md border-b border-[#6B21AB]/20 sticky top-0 z-50 px-6 py-4 transition-all duration-300 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Brand Logo - Subtle Hover Accent */}
        <Link to="/" className="relative flex items-center gap-2 group">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#6B21AB]/20 to-[#FC5BDA]/20 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition duration-300"></div>
          <img src="/logo.png" alt="Kalavora Logo" className="h-8 relative z-10 w-auto object-contain" />
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`relative text-xs font-semibold tracking-wider transition-colors duration-200 py-1 ${
                  isActive ? 'text-[#000000]' : 'text-[#000000]/70 hover:text-[#000000]'
                }`}
              >
                {link.name}
                {isActive && (
                  /* Accent Line under Active Link */
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#6B21AB] via-[#6B21AB] to-[#FC5BDA] rounded-full"></span>
                )}
              </Link>
            );
          })}
        </div>

        {/* Desktop Action Button - Indigo Bloom with Micro Cotton Bloom Arrow */}
        <div className="hidden md:block">
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#6B21AB] border border-[#6B21AB] text-[#FFFFFF] text-xs font-medium tracking-wide hover:bg-[#581C87] hover:border-[#FC5BDA]/60 transition-all duration-300 shadow-sm"
          >
            GET IN TOUCH 
            <ArrowUpRight className="w-3.5 h-3.5 text-[#FC5BDA] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-[#000000] hover:text-[#6B21AB] focus:outline-none p-2 transition-colors"
          aria-label="Toggle Navigation Menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6 text-[#6B21AB]" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#FFFFFF] border-b border-[#6B21AB]/20 px-6 py-6 space-y-4 animate-in slide-in-from-top duration-300 shadow-lg">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-xs font-semibold tracking-wider transition-colors ${
                    isActive ? 'text-[#6B21AB]' : 'text-[#000000]/80 hover:text-[#000000]'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <Link
              to="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#6B21AB] text-[#FFFFFF] text-xs font-medium tracking-wide hover:bg-[#581C87] transition-all mt-2"
            >
              GET IN TOUCH <ArrowUpRight className="w-4 h-4 text-[#FC5BDA]" />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}