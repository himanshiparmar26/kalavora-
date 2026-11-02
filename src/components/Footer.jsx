import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  Camera, 
  Globe, 
  Share2,
  Sparkles,
  ExternalLink,
  Send
} from 'lucide-react';

export default function Footer() {
  const whatsappNumber = "917877145565";
  // Aapka exact Google Maps link yahan set kar diya gaya hai
  const gmbMapLink = "https://www.google.com/maps/dir//kalavora,+E+5,+near+St.+Xavier+School+Road,+Haridas+Ji+Ki+Magri,+Shavri+Colony,+Udaipur,+Rajasthan+313004/@28.3672576,79.4099712,8z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3967e5c9cecef833:0xea12b3f2dc101de8!2m2!1d73.6681876!2d24.5825256?hl=en&authuser=0&entry=ttu";

  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleWhatsAppRedirect = () => {
    const text = "Hi Kalavora Team! I want to discuss a project with you.";
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    
    window.location.href = `mailto:kalavoraindia@gmail.com?subject=New Newsletter Subscriber&body=User Email: ${email}`;
    setSubmitted(true);
    setEmail('');
  };

  return (
    <footer className="bg-[#05030A] text-[#FFFFFF] border-t border-[#6B21AB]/40 relative overflow-hidden pt-12 pb-8 px-6 font-sans">
      
      {/* Glow Effects */}
      <div className="absolute bottom-0 left-1/3 w-[300px] h-[200px] bg-[#6B21AB]/20 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute top-0 right-10 w-[250px] h-[250px] bg-[#6B21AB]/15 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto space-y-10 relative z-10">
        
        {/* Top Subscribe Section */}
        <div className="pb-8 border-b border-[#6B21AB]/30 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-lg font-bold text-white tracking-wide">Stay Updated With Kalavora</h3>
            <p className="text-gray-300 text-xs">
              Transforming brands through high-impact digital marketing, video production, and modern web systems.
            </p>
          </div>
          <form onSubmit={handleSubscribe} className="flex w-full md:w-auto gap-2 items-center">
            <input 
              type="email" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address" 
              className="px-4 py-2 rounded-lg bg-[#120B24] border border-[#6B21AB]/50 text-xs text-white placeholder-gray-400 focus:outline-none focus:border-[#6B21AB] w-full md:w-72"
            />
            <button 
              type="submit"
              className="px-5 py-2 bg-[#6B21AB] text-white text-xs font-bold rounded-lg hover:bg-purple-700 transition-all cursor-pointer shadow-md flex items-center gap-2 shrink-0"
            >
              <span>Connect</span>
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
          {submitted && (
            <p className="text-green-400 text-xs">Thank you! Email sent.</p>
          )}
        </div>

        {/* Compact Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
          
          {/* Col 1: Brand Info & Socials */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-black tracking-wider text-white">
                KALAVORA
              </span>
              <Sparkles className="w-4 h-4 text-[#6B21AB]" />
            </div>
            <p className="text-[#FC5BDA] text-xs font-semibold tracking-wide">
              Transform Your Brand Vision Into Reality
            </p>
            <p className="text-gray-300 text-xs leading-relaxed">
              Transforming brands through high-impact digital marketing, video production, modern web systems, and creative visual guidelines.
            </p>
            
            {/* Social Icons */}
            <div className="flex items-center gap-2.5 pt-2">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" title="Instagram" className="w-8 h-8 rounded-lg bg-[#6B21AB]/30 border border-[#6B21AB]/60 text-white flex items-center justify-center hover:bg-[#6B21AB] transition-all">
                <Camera className="w-4 h-4" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" title="LinkedIn" className="w-8 h-8 rounded-lg bg-[#6B21AB]/30 border border-[#6B21AB]/60 text-white flex items-center justify-center hover:bg-[#6B21AB] transition-all">
                <Share2 className="w-4 h-4" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" title="Website" className="w-8 h-8 rounded-lg bg-[#6B21AB]/30 border border-[#6B21AB]/60 text-white flex items-center justify-center hover:bg-[#6B21AB] transition-all">
                <Globe className="w-4 h-4" />
              </a>
              <button onClick={handleWhatsAppRedirect} title="WhatsApp" className="w-8 h-8 rounded-lg bg-green-600/40 border border-green-500/60 text-white flex items-center justify-center hover:bg-green-600 transition-all cursor-pointer">
                <MessageCircle className="w-4 h-4 text-green-400 hover:text-white" />
              </button>
            </div>
          </div>

          {/* Col 2: Menu Links */}
          <div className="space-y-3 md:pl-6">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-[#FC5BDA]">
              Menu
            </h4>
            <ul className="space-y-2 text-xs text-gray-200 font-medium">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Our Services</Link></li>
              <li><Link to="/work" className="hover:text-white transition-colors">Our Work</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Col 3: Contact Details */}
          <div className="space-y-3">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-[#FC5BDA]">
              Contact Us
            </h4>
            <div className="space-y-2 text-xs text-gray-200">
              <div>
                <p className="font-semibold text-white">Call:</p>
                <a href="tel:+917877145565" className="hover:text-white text-gray-300 transition-colors">+91 78771 45565</a>
              </div>
              <div>
                <p className="font-semibold text-white">Email:</p>
                <a href="mailto:kalavoraindia@gmail.com" className="hover:text-white text-gray-300 transition-colors">kalavoraindia@gmail.com</a>
              </div>
              <div>
                <p className="font-semibold text-white">Location:</p>
                <span className="text-gray-300">Udaipur, Rajasthan, India</span>
              </div>
            </div>
          </div>

          {/* Col 4: Compact Clickable Map Box */}
          <div className="space-y-2">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-[#FC5BDA] mb-2">
              Our Studio
            </h4>
            <a 
              href={gmbMapLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block bg-[#120B24] border border-[#6B21AB]/50 rounded-xl p-2.5 hover:border-[#FC5BDA] transition-all group shadow-md"
            >
              <div className="h-24 w-full bg-[#0D071B] rounded-lg flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#6B21AB_1px,transparent_1px)] [background-size:10px_10px]"></div>
                <div className="relative z-10 flex flex-col items-center text-center p-1">
                  <MapPin className="w-6 h-6 text-red-500 animate-bounce drop-shadow" />
                  <span className="text-[11px] font-bold text-white mt-1">Kalavora Studio</span>
                  <span className="text-[9px] text-gray-300">Udaipur, Rajasthan</span>
                </div>
              </div>
              <div className="mt-2 flex items-center justify-between text-[11px] font-semibold text-gray-200 group-hover:text-white">
                <span>View on Google Map</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#FC5BDA]" />
              </div>
            </a>
          </div>

        </div>

        {/* Banner Box */}
        <div className="py-3 px-4 border border-[#6B21AB]/40 rounded-lg text-center bg-[#120B24]">
          <p className="text-xs font-medium text-gray-200">
            Thank You For Choosing Kalavora Creative Studio Landing Page
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="pt-4 border-t border-[#6B21AB]/30 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-300">
          <div className="flex items-center gap-4">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span>|</span>
            <Link to="/history" className="hover:text-white transition-colors">Our History</Link>
            <span>|</span>
            <Link to="/work" className="hover:text-white transition-colors">What We Do</Link>
          </div>
          <p>© 2026 Kalavora Creative Studio. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}