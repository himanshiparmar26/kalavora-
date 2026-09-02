import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  Camera, 
  Globe, 
  Share2,
  Sparkles
} from 'lucide-react';

export default function Footer() {
  const whatsappNumber = "917877145565";

  const handleWhatsAppRedirect = () => {
    const text = "Hi Kalavora Team! I want to discuss a project with you.";
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <footer className="bg-[#000000] text-[#FFFFFF] border-t border-[#6B21AB]/30 relative overflow-hidden pt-16 pb-8 px-6 font-sans">
      
      {/* Subtle Background Lighting */}
      <div className="absolute bottom-0 left-1/4 w-[350px] h-[200px] bg-[#6B21AB]/15 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute top-0 right-10 w-[250px] h-[250px] bg-[#FC5BDA]/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Col 1: Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#FC5BDA] via-[#FFFFFF] to-[#6B21AB]">
                KALAVORA
              </span>
              <Sparkles className="w-4 h-4 text-[#FC5BDA]" />
            </div>

            <p className="text-gray-400 text-xs leading-relaxed font-normal">
              Transforming brands through high-impact digital marketing, video production, modern web systems, and creative visual guidelines.
            </p>

            <button
              onClick={handleWhatsAppRedirect}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#6B21AB]/20 border border-[#6B21AB]/50 text-[#FC5BDA] text-xs font-bold hover:bg-[#6B21AB] hover:text-white transition-all duration-300 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-[#FC5BDA]" />
              Chat on WhatsApp
            </button>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-[#FC5BDA]">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-400 font-normal">
              <li>
                <Link to="/" className="hover:text-[#FFFFFF] transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#FFFFFF] transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#FFFFFF] transition-colors">Our Services</Link>
              </li>
              <li>
                <Link to="/work" className="hover:text-[#FFFFFF] transition-colors">Our Work</Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-[#FFFFFF] transition-colors">Blog</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#FFFFFF] transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Contact Info */}
          <div className="space-y-4">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-[#FC5BDA]">
              Contact Us
            </h4>
            <ul className="space-y-3 text-xs text-gray-400 font-normal">
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#FC5BDA] shrink-0" />
                <a href="tel:+917877145565" className="hover:text-[#FFFFFF] transition-colors">
                  +91 78771 45565
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#FC5BDA] shrink-0" />
                <a href="mailto:kalavoraindia@gmail.com" className="hover:text-[#FFFFFF] transition-colors">
                  kalavoraindia@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#FC5BDA] shrink-0 mt-0.5" />
                <span>Kalavora Creative Studio, India</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Social Connections */}
          <div className="space-y-4">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-[#FC5BDA]">
              Connect With Us
            </h4>
            <p className="text-gray-400 text-xs font-normal">
              Follow our latest brand showcases and creative designs across socials.
            </p>

            <div className="flex items-center gap-3 pt-1">
              {[
                { icon: <Camera className="w-4 h-4" />, link: "https://instagram.com", label: "Instagram" },
                { icon: <Share2 className="w-4 h-4" />, link: "https://linkedin.com", label: "LinkedIn" },
                { icon: <Globe className="w-4 h-4" />, link: "https://facebook.com", label: "Website" }
              ].map((item, idx) => (
                <a
                  key={idx}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="p-2.5 rounded-xl bg-[#6B21AB]/10 border border-[#6B21AB]/30 text-[#FC5BDA] hover:bg-[#6B21AB] hover:text-[#FFFFFF] transition-all duration-300"
                >
                  {item.icon}
                </a>
              ))}
              <button
                onClick={handleWhatsAppRedirect}
                aria-label="WhatsApp Direct"
                className="p-2.5 rounded-xl bg-[#6B21AB]/10 border border-[#6B21AB]/30 text-[#FC5BDA] hover:bg-[#6B21AB] hover:text-[#FFFFFF] transition-all duration-300 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Horizontal Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500 font-normal">
          <p>© {new Date().getFullYear()} Kalavora Creative Studio. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-gray-300 transition-colors">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}