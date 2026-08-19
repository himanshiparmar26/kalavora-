import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  Search, 
  Share2, 
  Palette, 
  Layers, 
  MapPin, 
  TrendingUp, 
  Globe, 
  FileText,
  CheckCircle2,
  X,
  ArrowRight,
  MessageCircle,
  Zap
} from 'lucide-react';

// Mascot imports for explicit loading
import mascotAbout from '/mascot-about.png';
import mascotSeo from '/mascot-seo.png';
import mascotContact from '/mascot-contact.png';

export default function About() {
  const [selectedIdx, setSelectedIdx] = useState(null);

  const whatsappNumber = "917877145565";

  const handleWhatsAppRedirect = () => {
    const text = "Hi Kalavora Team! I want to discuss a project with you.";
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
  };

  // Close modal on Escape key press & lock scroll when active
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedIdx(null);
    };

    if (selectedIdx !== null) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedIdx]);

  const services = [
    {
      title: "Results-Driven SEO Services",
      tagline: "Search Visibility & Brand Credibility",
      badge: "RANKING",
      icon: <Search className="w-5 h-5 text-[#FFD700]" />,
      content: "Search Visibility is the final money of Brand Credibility. Through our best SEO services, we transition your business from page-two obscurity right to the top of the search engine results page (SERP). Our performance team uses advanced SEO Solutions—like thorough technical checks, targeting the right keywords, and optimizing local listings—to Increase Website Traffic to your website and Generate More Leads."
    },
    {
      title: "Full Guide Social Media Marketing & Management",
      tagline: "Convert Casual Scrollers into Loyal Champions",
      badge: "ENGAGEMENT",
      icon: <Share2 className="w-5 h-5 text-[#FFD700]" />,
      content: "Modern consumers discover, engage with, and think about brands based fully on their digital feeds. Our customized social media marketing guide converts casual scrollers into passionately loyal brand champions. Applying cultural insights and modern programmatic data, our strategic Instagram marketing campaigns unseal explosive regional engagement and huge community growth."
    },
    {
      title: "Creative Design & Premium Visual Storytelling",
      tagline: "High-Impact Visual Assets & Video Editing",
      badge: "CREATIVE",
      icon: <Palette className="w-5 h-5 text-[#FFD700]" />,
      content: "We effortlessly mix fixed performance data with creative imagination through our trusty Creative Design Services. A business without an obvious visual identity is quickly treated as a minimal commodity. Our high-end production studio creates high-impact visual advantages using advanced video editing to capture instant attention."
    },
    {
      title: "Connected Identity & Digital Branding Systems",
      tagline: "Identity Systems, Packaging & Logos",
      badge: "IDENTITY",
      icon: <Layers className="w-5 h-5 text-[#FFD700]" />,
      content: "A business without a clear visual identity is quickly treated as a bare commodity. Our specialized branding design team maps out exhaustive corporate identity systems—from minimalist typography and classic logos to custom product packaging and refined visiting cards."
    },
    {
      title: "Design a Powerful Digital Growth Strategy for Udaipur",
      tagline: "Hyper-Local Search Funnels & Geo-Targeting",
      badge: "LOCAL SEO",
      icon: <MapPin className="w-5 h-5 text-[#FFD700]" />,
      content: "Achieving an eco-friendly rank on Google SERP in the Udaipur location requires deep local market intelligence. You cannot win geographical search spaces with general, copy-paste strategies. At Kalavora, we produce hyper-local search funnels that position your brand right in front of regional buyers."
    },
    {
      title: "High-ROI Performance Marketing",
      tagline: "Data-Driven Google & Meta Campaigns",
      badge: "GROWTH",
      icon: <TrendingUp className="w-5 h-5 text-[#FFD700]" />,
      content: "Stop wasting your budget on meaningless metrics. The Insight-led performance marketing Strategies at Kalavora are Designed with one objective: your Business Growth is Maximum ROI. We Create hyper-targeted, conversion-optimized campaigns across search and social media."
    },
    {
      title: "High-Converting Website Services",
      tagline: "Fast, Secure & Mobile-Optimized Web",
      badge: "WEB TECH",
      icon: <Globe className="w-5 h-5 text-[#FFD700]" />,
      content: "Your website is your all-day digital premium store. At Kalavora, we design lightning-fast, secure, and mobile-optimized platforms engineered entirely around intuitive user experiences to transform visitors into returning clients."
    },
    {
      title: "Authority-Building Content Creation",
      tagline: "Strategic Storytelling & Top SERP Signals",
      badge: "STRATEGY",
      icon: <FileText className="w-5 h-5 text-[#FFD700]" />,
      content: "In a noisy online marketplace, strategic content creation is the ultimate tool for earning customer loyalty. This best-storytelling feed search engine provides the premium signals required to achieve your ultimate digital marketing goals."
    }
  ];

  return (
    <section className="bg-[#000000] text-[#FFFFFF] pt-24 pb-20 px-4 md:px-8 relative overflow-hidden min-h-screen font-sans">
      
      {/* Background Glow Effects */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#6B21AB]/25 blur-[180px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-[#FC5BDA]/10 blur-[180px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto space-y-12 relative z-10">
        
        {/* 1. Header Section */}
        <div className="grid md:grid-cols-12 gap-8 items-center text-center md:text-left">
          <div className="md:col-span-8 space-y-5">
            <div className="inline-block p-[1px] bg-gradient-to-r from-[#FFD700] via-[#FC5BDA] to-[#6B21AB]">
              <div className="bg-[#000000] px-5 py-2 flex items-center justify-center md:justify-start gap-2 border border-[#6B21AB]/50">
                <Sparkles className="w-4 h-4 text-[#FFD700]" />
                <span className="text-xs md:text-sm font-extrabold tracking-widest uppercase text-[#FFD700]">
                  BEST DIGITAL MARKETING AGENCY IN UDAIPUR
                </span>
              </div>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-extrabold font-serif leading-tight text-[#FFFFFF]">
              Grow Your Brand with <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FC5BDA] via-[#FFD700] to-[#FC5BDA] italic">
                Unconditional Market Control
              </span>
            </h1>
            
            <p className="text-gray-400 text-xs md:text-sm max-w-2xl font-light leading-relaxed">
              In today's fast-developing business landscape, simply having a website is not enough. At <span className="text-[#FFFFFF] font-medium">kalavora.in</span>, we engineer data-driven digital solutions.
            </p>
          </div>

          {/* Top Hero Mascot */}
          <div className="md:col-span-4 flex justify-center items-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
              <div className="absolute w-48 h-48 md:w-60 md:h-60 bg-[#FC5BDA]/30 rounded-full blur-3xl pointer-events-none"></div>
              <img 
                src={mascotAbout} 
                alt="Kalavora Mascot" 
                className="w-full h-full object-contain drop-shadow-[0_0_35px_rgba(252,91,218,0.7)] relative z-10 hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>

        {/* Row 1: First 4 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.slice(0, 4).map((item, idx) => (
            <div 
              key={idx}
              className="relative p-5 flex flex-col justify-between aspect-square border border-[#6B21AB]/40 bg-[#000000] hover:border-[#FFD700] transition-all duration-300 group"
            >
              <div className="absolute top-0 right-0 bg-[#FFD700] text-[#000000] text-[9px] font-black px-2.5 py-0.5 tracking-wider uppercase">
                {item.badge}
              </div>

              <div className="w-10 h-10 flex items-center justify-center border border-[#6B21AB] bg-[#000000] group-hover:border-[#FFD700] transition-colors">
                {item.icon}
              </div>

              <div className="space-y-1 my-auto">
                <h3 className="text-sm md:text-base font-bold text-[#FFFFFF] font-serif leading-snug line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-[11px] text-gray-400 font-light line-clamp-2">
                  {item.tagline}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setSelectedIdx(idx)}
                className="w-full py-2 px-3 border border-[#6B21AB]/60 bg-[#000000] text-gray-300 hover:bg-[#6B21AB] hover:text-[#FFFFFF] hover:border-[#FFD700] text-[11px] font-bold uppercase tracking-wider flex items-center justify-between transition-all cursor-pointer"
              >
                <span>Read Details</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#FFD700] group-hover:text-[#FFFFFF]" />
              </button>
            </div>
          ))}
        </div>

        {/* 2. Middle Mascot Spotlight Banner */}
        <div className="rounded-2xl border-2 border-[#FC5BDA]/60 bg-gradient-to-r from-[#6B21AB]/40 via-black to-[#FC5BDA]/20 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_0_30px_rgba(252,91,218,0.3)]">
          <div className="space-y-3 text-center md:text-left max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFD700]/10 border border-[#FFD700]/50 text-[#FFD700] text-xs font-bold uppercase">
              <Zap className="w-3.5 h-3.5" /> Kalavora Growth Engine
            </div>
            <h3 className="text-2xl md:text-3xl font-extrabold font-serif text-white">
              Data-Driven Growth Meets Premium Visual Aura
            </h3>
            <p className="text-gray-300 text-xs md:text-sm font-light leading-relaxed">
              We blend strategic SEO, high-converting social campaigns, and modern brand design to build dominant market leaders.
            </p>
          </div>

          <div className="shrink-0 relative">
            <div className="absolute inset-0 bg-[#FFD700]/20 rounded-full blur-xl"></div>
            <img 
              src={mascotSeo} 
              alt="Search Strategy Mascot" 
              className="w-36 md:w-44 h-auto object-contain drop-shadow-[0_0_20px_rgba(255,215,0,0.5)] relative z-10 hover:rotate-3 transition-transform duration-300"
            />
          </div>
        </div>

        {/* Row 2: Next 4 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.slice(4, 8).map((item, idx) => {
            const actualIdx = idx + 4;
            return (
              <div 
                key={actualIdx}
                className="relative p-5 flex flex-col justify-between aspect-square border border-[#6B21AB]/40 bg-[#000000] hover:border-[#FFD700] transition-all duration-300 group"
              >
                <div className="absolute top-0 right-0 bg-[#FFD700] text-[#000000] text-[9px] font-black px-2.5 py-0.5 tracking-wider uppercase">
                  {item.badge}
                </div>

                <div className="w-10 h-10 flex items-center justify-center border border-[#6B21AB] bg-[#000000] group-hover:border-[#FFD700] transition-colors">
                  {item.icon}
                </div>

                <div className="space-y-1 my-auto">
                  <h3 className="text-sm md:text-base font-bold text-[#FFFFFF] font-serif leading-snug line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-gray-400 font-light line-clamp-2">
                    {item.tagline}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedIdx(actualIdx)}
                  className="w-full py-2 px-3 border border-[#6B21AB]/60 bg-[#000000] text-gray-300 hover:bg-[#6B21AB] hover:text-[#FFFFFF] hover:border-[#FFD700] text-[11px] font-bold uppercase tracking-wider flex items-center justify-between transition-all cursor-pointer"
                >
                  <span>Read Details</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#FFD700] group-hover:text-[#FFFFFF]" />
                </button>
              </div>
            );
          })}
        </div>

        {/* 3. Bottom Banner with Mascot */}
        <div className="rounded-3xl border border-[#6B21AB]/50 bg-gradient-to-r from-[#6B21AB]/20 via-black to-[#FC5BDA]/20 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_0_30px_rgba(107,33,171,0.3)]">
          <div className="space-y-3 text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold font-serif text-white">
              Have Questions About Our Agency Growth Model?
            </h3>
            <p className="text-gray-300 text-xs md:text-sm max-w-xl font-light">
              Connect directly with our team on WhatsApp for custom consultation.
            </p>
            <button
              type="button"
              onClick={handleWhatsAppRedirect}
              className="px-6 py-3 rounded-full bg-[#25D366] text-white font-bold text-xs uppercase tracking-wider inline-flex items-center gap-2 hover:bg-[#1ebd53] transition-all shadow-[0_0_20px_rgba(37,211,102,0.4)] cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" /> Direct WhatsApp Chat
            </button>
          </div>

          <img 
            src={mascotContact} 
            alt="Support Mascot" 
            className="w-36 md:w-44 h-auto object-contain drop-shadow-[0_0_20px_rgba(252,91,218,0.5)]"
          />
        </div>

      </div>

      {/* Detail Modal Overlay */}
      {selectedIdx !== null && (
        <div 
          className="fixed inset-0 z-50 bg-[#000000]/85 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedIdx(null)}
        >
          <div 
            className="bg-[#000000] border-2 border-[#FC5BDA] max-w-2xl w-full p-6 md:p-8 relative shadow-[0_0_40px_rgba(252,91,218,0.25)] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            
            <button 
              type="button"
              onClick={() => setSelectedIdx(null)}
              aria-label="Close details"
              className="absolute top-4 right-4 text-gray-400 hover:text-[#FFFFFF] p-1.5 border border-[#6B21AB] bg-[#000000] cursor-pointer z-20"
            >
              <X className="w-5 h-5 text-[#FC5BDA]" />
            </button>

            <div className="flex items-center gap-3.5 mb-5 pr-8">
              <div className="p-3 border border-[#6B21AB] bg-[#000000] shrink-0">
                {services[selectedIdx].icon}
              </div>
              <div>
                <span className="text-[10px] font-extrabold text-[#FFD700] tracking-widest uppercase">
                  {services[selectedIdx].badge}
                </span>
                <h4 className="text-lg md:text-2xl font-bold text-[#FFFFFF] font-serif leading-tight">
                  {services[selectedIdx].title}
                </h4>
              </div>
            </div>

            <div className="flex items-start gap-3 pt-4 border-t border-[#6B21AB]/40 text-xs md:text-sm text-gray-200 font-light leading-relaxed max-h-[50vh] overflow-y-auto">
              <CheckCircle2 className="w-5 h-5 text-[#FFD700] shrink-0 mt-0.5" />
              <p>{services[selectedIdx].content}</p>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}