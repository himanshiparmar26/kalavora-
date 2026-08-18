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
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <footer className="bg-[#000000] text-[#FFFFFF] border-t-2 border-[#FFD700]/30 relative overflow-hidden pt-16 pb-8 px-6">
      
      {/* Background Ambient Glows */}
      <div className="absolute bottom-0 left-1/4 w-[300px] h-[200px] bg-[#6B21AB]/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-0 right-10 w-[250px] h-[250px] bg-[#FC5BDA]/15 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto space-y-12 relative z-10">
        
        {/* Main Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Col 1: Brand Identity */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-black font-serif tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] via-[#FC5BDA] to-[#FFFFFF]">
                KALAVORA
              </span>
              <Sparkles className="w-4 h-4 text-[#FFD700]" />
            </div>

            <p className="text-gray-400 text-xs leading-relaxed font-light">
              Transforming brands through high-impact digital marketing, video production, modern web systems, and creative editorial designs.
            </p>

            {/* Quick WhatsApp Badge */}
            <button
              onClick={handleWhatsAppRedirect}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#25D366]/10 border border-[#25D366]/40 text-[#25D366] text-xs font-bold hover:bg-[#25D366] hover:text-white transition-all duration-300"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              Chat on WhatsApp
            </button>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-[#FFD700] tracking-wider uppercase font-serif">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs text-gray-300 font-light">
              <li>
                <Link to="/" className="hover:text-[#FC5BDA] transition-colors flex items-center gap-1">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#FC5BDA] transition-colors flex items-center gap-1">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#FC5BDA] transition-colors flex items-center gap-1">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/workplace" className="hover:text-[#FC5BDA] transition-colors flex items-center gap-1">
                  Our Work
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#FC5BDA] transition-colors flex items-center gap-1">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Contact Info */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-[#FFD700] tracking-wider uppercase font-serif">
              Contact Us
            </h4>
            <ul className="space-y-3 text-xs text-gray-300 font-light">
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#FC5BDA] shrink-0" />
                <a href="tel:+917877145565" className="hover:text-[#FFD700] transition-colors">
                  +91 78771 45565
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#FFD700] shrink-0" />
                <a href="mailto:contact@kalavora.com" className="hover:text-[#FFD700] transition-colors">
                  contact@kalavora.com
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#FC5BDA] shrink-0 mt-0.5" />
                <span>Kalavora Creative Studio, India</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Social Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-[#FFD700] tracking-wider uppercase font-serif">
              Connect With Us
            </h4>
            <p className="text-gray-400 text-xs font-light">
              Follow our latest brand showcases and creative designs across socials.
            </p>

            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-[#000000] border border-[#FC5BDA]/40 text-[#FC5BDA] hover:border-[#FFD700] hover:text-[#FFD700] hover:scale-110 transition-all duration-300"
                aria-label="Instagram"
              >
                <Camera className="w-4 h-4" />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-[#000000] border border-[#FC5BDA]/40 text-[#FC5BDA] hover:border-[#FFD700] hover:text-[#FFD700] hover:scale-110 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Share2 className="w-4 h-4" />
              </a>

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-[#000000] border border-[#FC5BDA]/40 text-[#FC5BDA] hover:border-[#FFD700] hover:text-[#FFD700] hover:scale-110 transition-all duration-300"
                aria-label="Website"
              >
                <Globe className="w-4 h-4" />
              </a>

              <button
                onClick={handleWhatsAppRedirect}
                className="p-2.5 rounded-xl bg-[#000000] border border-[#25D366]/50 text-[#25D366] hover:bg-[#25D366] hover:text-white hover:scale-110 transition-all duration-300"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Horizontal Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-400 font-light">
          <p>© {new Date().getFullYear()} Kalavora Creative Studio. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>

      </div>
    </footer>
  );
}