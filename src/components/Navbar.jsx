import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight, Sun, Moon } from 'lucide-react';

export default function Navbar() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Initialize theme state correctly from localStorage/system preference
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        return savedTheme === 'dark';
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  // Handle HTML root class & localStorage updates on state change
  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT US', path: '/about' },
    { name: 'SERVICES', path: '/services' },
    { name: 'OUR WORK', path: '/work' },
    { name: 'BLOG', path: '/blog' },
    { name: 'CONTACT US', path: '/contact' }
  ];

  return (
    <nav className="bg-[#FFFFFF]/95 dark:bg-[#090D16]/95 backdrop-blur-md border-b border-[#6B21AB]/20 dark:border-[#6B21AB]/40 sticky top-0 z-50 px-6 py-4 transition-all duration-300 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link to="/" className="relative flex items-center gap-2 group">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#6B21AB]/20 to-[#FC5BDA]/20 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition duration-300"></div>
          <img src="/logo.png" alt="Kalavora Logo" className="h-8 relative z-10 w-auto object-contain dark:brightness-200" />
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
                  isActive 
                    ? 'text-[#000000] dark:text-[#FFFFFF]' 
                    : 'text-[#000000]/70 dark:text-[#FFFFFF]/70 hover:text-[#000000] dark:hover:text-[#FFFFFF]'
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#6B21AB] via-[#6B21AB] to-[#FC5BDA] rounded-full"></span>
                )}
              </Link>
            );
          })}
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          
          {/* THEME TOGGLE BUTTON (UPDATED ICON LOGIC) */}
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-full border border-gray-200 dark:border-[#6B21AB]/40 bg-gray-100 dark:bg-[#131927] text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-[#1F293D] transition-all duration-300 focus:outline-none cursor-pointer"
            aria-label="Toggle Dark Mode"
            title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {isDarkMode ? (
              /* Dark Mode Active -> Show Moon Icon */
              <Moon className="w-4 h-4 text-[#FC5BDA] transition-transform hover:-rotate-12" />
            ) : (
              /* Light Mode Active -> Show Sun Icon */
              <Sun className="w-4 h-4 text-amber-500 transition-transform hover:rotate-45" />
            )}
          </button>

          {/* GET IN TOUCH Button */}
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#6B21AB] border border-[#6B21AB] text-[#FFFFFF] text-xs font-medium tracking-wide hover:bg-[#581C87] hover:border-[#FC5BDA]/60 transition-all duration-300 shadow-sm"
          >
            GET IN TOUCH 
            <ArrowUpRight className="w-3.5 h-3.5 text-[#FC5BDA] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Mobile View: Theme Toggle + Hamburger Menu */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full border border-gray-200 dark:border-[#6B21AB]/40 bg-gray-100 dark:bg-[#131927] text-gray-800 dark:text-gray-200 focus:outline-none cursor-pointer"
            aria-label="Toggle Dark Mode"
          >
            {isDarkMode ? (
              <Moon className="w-4 h-4 text-[#FC5BDA]" />
            ) : (
              <Sun className="w-4 h-4 text-amber-500" />
            )}
          </button>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-[#000000] dark:text-[#FFFFFF] hover:text-[#6B21AB] focus:outline-none p-2 transition-colors cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6 text-[#6B21AB]" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#FFFFFF] dark:bg-[#090D16] border-b border-[#6B21AB]/20 dark:border-[#6B21AB]/40 px-6 py-6 space-y-4 animate-in slide-in-from-top duration-300 shadow-lg">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-xs font-semibold tracking-wider transition-colors ${
                    isActive 
                      ? 'text-[#6B21AB]' 
                      : 'text-[#000000]/80 dark:text-[#FFFFFF]/80 hover:text-[#000000] dark:hover:text-[#FFFFFF]'
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