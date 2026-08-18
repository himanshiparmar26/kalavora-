import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home, 
  User, 
  Briefcase, 
  FolderKanban, 
  BookOpen, 
  Mail 
} from 'lucide-react';

export default function Navbar() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'HOME', path: '/', icon: <Home className="w-4 h-4 text-[#FFD700]" /> },
    { name: 'ABOUT US', path: '/about', icon: <User className="w-4 h-4 text-[#FC5BDA]" /> },
    { name: 'SERVICES', path: '/services', icon: <Briefcase className="w-4 h-4 text-[#FFD700]" /> },
    { name: 'OUR WORK', path: '/workplace', icon: <FolderKanban className="w-4 h-4 text-[#FC5BDA]" /> },
    { name: 'BLOG', path: '/blog', icon: <BookOpen className="w-4 h-4 text-[#FFD700]" /> },
    { name: 'CONTACT US', path: '/contact', icon: <Mail className="w-4 h-4 text-[#FC5BDA]" /> },
  ];

  return (
    <nav 
      className={`w-full bg-[#000000]/95 backdrop-blur-md border-b-2 border-[#FFD700] sticky top-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled ? 'pt-7 pb-2 shadow-[0_10px_25px_rgba(0,0,0,0.9)]' : 'pt-9 pb-3 shadow-[0_5px_20px_rgba(0,0,0,0.7)]'
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-center px-4">
        
        {/* Navigation Items */}
        <div className="flex items-center justify-center gap-6 md:gap-10 flex-wrap">
          {navItems.map((item, index) => {
            const isHovered = hoveredIndex === index;
            const isActive = location.pathname === item.path;

            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="relative flex flex-col items-center group cursor-pointer pt-2"
              >
                {/* Floating Icon (No Cutting Bug Fix) */}
                <div 
                  className={`absolute -top-6 transition-all duration-300 ease-out transform ${
                    isHovered 
                      ? 'opacity-100 -translate-y-1 scale-110' 
                      : 'opacity-0 translate-y-2 scale-75 pointer-events-none'
                  }`}
                >
                  <div className="flex items-center justify-center p-1.5 rounded-full bg-[#000000] border border-[#FC5BDA] shadow-[0_0_12px_rgba(252,91,218,0.8)]">
                    {item.icon}
                  </div>
                </div>

                {/* Nav Text */}
                <Link
                  to={item.path}
                  className={`font-extrabold tracking-wider transition-all duration-300 ${
                    isScrolled ? 'text-xs' : 'text-xs md:text-sm'
                  } ${
                    isHovered || isActive
                      ? 'text-[#FFD700] scale-105'
                      : 'text-[#FFFFFF] group-hover:text-[#FC5BDA]'
                  }`}
                >
                  {item.name}
                </Link>

                {/* Bottom Active Glow Line */}
                <div 
                  className={`h-[3px] rounded-full bg-gradient-to-r from-[#FC5BDA] to-[#FFD700] transition-all duration-300 ${
                    isHovered || isActive ? 'w-full shadow-[0_0_10px_rgba(255,215,0,0.9)] mt-1.5' : 'w-0 mt-1.5'
                  }`}
                />
              </div>
            );
          })}
        </div>

      </div>
    </nav>
  );
}