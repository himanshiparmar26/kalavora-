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
  ArrowUpRight,
  MessageCircle,
  Zap
} from 'lucide-react';

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
      icon: <Search className="w-5 h-5 text-[#FFFFFF]" />,
      content: "Search Visibility is the final money of Brand Credibility. Through our best SEO services, we transition your business from page-two obscurity right to the top of the search engine results page (SERP). Our performance team uses advanced SEO Solutions—like thorough technical checks, targeting the right keywords, and optimizing local listings—to Increase Website Traffic to your website and Generate More Leads."
    },
    {
      title: "Full Guide Social Media Marketing",
      tagline: "Convert Casual Scrollers into Loyal Champions",
      badge: "ENGAGEMENT",
      icon: <Share2 className="w-5 h-5 text-[#FFFFFF]" />,
      content: "Modern consumers discover, engage with, and think about brands based fully on their digital feeds. Our customized social media marketing guide converts casual scrollers into passionately loyal brand champions. Applying cultural insights and modern programmatic data, our strategic Instagram marketing campaigns unseal explosive regional engagement and huge community growth."
    },
    {
      title: "Creative Design & Storytelling",
      tagline: "High-Impact Visual Assets & Video Editing",
      badge: "CREATIVE",
      icon: <Palette className="w-5 h-5 text-[#FFFFFF]" />,
      content: "We effortlessly mix fixed performance data with creative imagination through our trusty Creative Design Services. A business without an obvious visual identity is quickly treated as a minimal commodity. Our high-end production studio creates high-impact visual advantages using advanced video editing to capture instant attention."
    },
    {
      title: "Digital Branding Systems",
      tagline: "Identity Systems, Packaging & Logos",
      badge: "IDENTITY",
      icon: <Layers className="w-5 h-5 text-[#FFFFFF]" />,
      content: "A business without a clear visual identity is quickly treated as a bare commodity. Our specialized branding design team maps out exhaustive corporate identity systems—from minimalist typography and classic logos to custom product packaging and refined visiting cards."
    },
    {
      title: "Digital Growth Strategy for Udaipur",
      tagline: "Hyper-Local Search Funnels & Geo-Targeting",
      badge: "LOCAL SEO",
      icon: <MapPin className="w-5 h-5 text-[#FFFFFF]" />,
      content: "Achieving an eco-friendly rank on Google SERP in the Udaipur location requires deep local market intelligence. You cannot win geographical search spaces with general, copy-paste strategies. At Kalavora, we produce hyper-local search funnels that position your brand right in front of regional buyers."
    },
    {
      title: "High-ROI Performance Marketing",
      tagline: "Data-Driven Google & Meta Campaigns",
      badge: "GROWTH",
      icon: <TrendingUp className="w-5 h-5 text-[#FFFFFF]" />,
      content: "Stop wasting your budget on meaningless metrics. The Insight-led performance marketing Strategies at Kalavora are Designed with one objective: your Business Growth is Maximum ROI. We Create hyper-targeted, conversion-optimized campaigns across search and social media."
    },
    {
      title: "High-Converting Website Services",
      tagline: "Fast, Secure & Mobile-Optimized Web",
      badge: "WEB TECH",
      icon: <Globe className="w-5 h-5 text-[#FFFFFF]" />,
      content: "Your website is your all-day digital premium store. At Kalavora, we design lightning-fast, secure, and mobile-optimized platforms engineered entirely around intuitive user experiences to transform visitors into returning clients."
    },
    {
      title: "Authority-Building Content",
      tagline: "Strategic Storytelling & Top SERP Signals",
      badge: "STRATEGY",
      icon: <FileText className="w-5 h-5 text-[#FFFFFF]" />,
      content: "In a noisy online marketplace, strategic content creation is the ultimate tool for earning customer loyalty. This best-storytelling feed search engine provides the premium signals required to achieve your ultimate digital marketing goals."
    }
  ];

  return (
    <div className="bg-[#FFFFFF] text-[#000000] min-h-screen pt-12 pb-24 font-sans selection:bg-[#6B21AB] selection:text-white">
      
      <div className="max-w-7xl mx-auto px-6 space-y-24">
        
        {/* Main Hero Section */}
        <section className="grid lg:grid-cols-12 gap-12 items-center pt-8">
          
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#6B21AB]/20 bg-[#FFFFFF] text-[#000000] text-xs font-bold tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-[#FC5BDA] animate-pulse"></span>
              <Sparkles className="w-3.5 h-3.5 text-[#6B21AB]" /> Best Digital Marketing Agency in Udaipur
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] tracking-tight text-[#000000]">
              Grow Your Brand <br />
              <span className="text-3xl md:text-5xl font-normal text-[#000000]/70 italic">
                With <span className="text-[#6B21AB] not-italic font-extrabold">Unconditional Market Control</span>
              </span>
            </h1>
            
            <p className="text-[#000000]/70 text-base md:text-lg max-w-xl leading-relaxed font-medium">
              In today's fast-developing business landscape, simply having a website is not enough. At <span className="text-[#000000] font-bold">kalavora.in</span>, we engineer data-driven digital solutions.
            </p>
            
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={handleWhatsAppRedirect}
                className="group px-7 py-3.5 rounded-full bg-[#6B21AB] text-[#FFFFFF] font-semibold text-xs uppercase tracking-wider hover:bg-[#581C87] transition-all duration-300 flex items-center gap-2 cursor-pointer"
              >
                Start Growth Call 
                <ArrowUpRight className="w-4 h-4 text-[#FFFFFF] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
              
              <button
                onClick={handleWhatsAppRedirect}
                className="px-7 py-3.5 rounded-full border border-[#6B21AB]/30 bg-[#FFFFFF] text-[#000000] font-bold text-xs uppercase tracking-wider hover:bg-[#6B21AB]/5 transition-all duration-300 flex items-center gap-2 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-[#6B21AB]" /> Quick WhatsApp
              </button>
            </div>
          </div>

          {/* Right Column: Clean Mascot Display (No Box & No Glow) */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <img 
              src={mascotAbout} 
              alt="Kalavora About Mascot" 
              className="w-72 md:w-80 h-auto object-contain hover:scale-105 transition-transform duration-300" 
            />
          </div>

        </section>

        {/* Feature Grid 1 (First 4 Services) - No Outer Box/Border */}
        <section className="grid md:grid-cols-4 gap-8">
          {services.slice(0, 4).map((item, idx) => (
            <div 
              key={idx} 
              className="flex flex-col justify-between group"
            >
              <div>
                <div className="p-3 rounded-xl bg-[#6B21AB] text-[#FFFFFF] w-fit mb-5">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-[#000000] mb-2 tracking-wide line-clamp-2">{item.title}</h3>
                <p className="text-[#000000]/70 text-xs leading-relaxed font-medium mb-6 line-clamp-2">{item.tagline}</p>
              </div>

              <button
                type="button"
                onClick={() => setSelectedIdx(idx)}
                className="py-2 px-4 border border-[#6B21AB]/30 bg-[#FFFFFF] text-[#6B21AB] hover:bg-[#6B21AB] hover:text-[#FFFFFF] text-[11px] font-bold uppercase tracking-wider flex items-center justify-between transition-all duration-300 cursor-pointer rounded-xl group/btn"
              >
                <span>Read Details</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#FC5BDA] group-hover/btn:text-[#FFFFFF]" />
              </button>
            </div>
          ))}
        </section>

        {/* Middle Spotlight Banner (Clean Text & Mascot) */}
        <section className="py-8 border-y border-[#6B21AB]/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-3 text-center md:text-left max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#6B21AB]/10 text-[#6B21AB] text-xs font-bold uppercase">
                <Zap className="w-3.5 h-3.5 text-[#6B21AB]" /> Kalavora Growth Engine
              </div>
              <h3 className="text-2xl md:text-4xl font-extrabold text-[#000000] tracking-tight leading-snug">
                Data-Driven Growth Meets <br />
                <span className="text-[#6B21AB] italic font-normal">Premium Visual Aura</span>
              </h3>
              <p className="text-[#000000]/70 text-sm font-medium leading-relaxed">
                We blend strategic SEO, high-converting social campaigns, and modern brand design to build dominant market leaders.
              </p>
            </div>

            <div className="shrink-0">
              <img 
                src={mascotSeo} 
                alt="Search Strategy Mascot" 
                className="w-36 md:w-44 h-auto object-contain hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </section>

        {/* Feature Grid 2 (Next 4 Services) - No Outer Box/Border */}
        <section className="grid md:grid-cols-4 gap-8">
          {services.slice(4, 8).map((item, idx) => {
            const actualIdx = idx + 4;
            return (
              <div 
                key={actualIdx} 
                className="flex flex-col justify-between group"
              >
                <div>
                  <div className="p-3 rounded-xl bg-[#6B21AB] text-[#FFFFFF] w-fit mb-5">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold text-[#000000] mb-2 tracking-wide line-clamp-2">{item.title}</h3>
                  <p className="text-[#000000]/70 text-xs leading-relaxed font-medium mb-6 line-clamp-2">{item.tagline}</p>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedIdx(actualIdx)}
                  className="py-2 px-4 border border-[#6B21AB]/30 bg-[#FFFFFF] text-[#6B21AB] hover:bg-[#6B21AB] hover:text-[#FFFFFF] text-[11px] font-bold uppercase tracking-wider flex items-center justify-between transition-all duration-300 cursor-pointer rounded-xl group/btn"
                >
                  <span>Read Details</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#FC5BDA] group-hover/btn:text-[#FFFFFF]" />
                </button>
              </div>
            );
          })}
        </section>

        {/* Bottom Callout Banner */}
        <section className="pt-8">
          <div className="text-center space-y-6 text-[#000000]">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#000000]">
              Have Questions About Our <br />
              <span className="text-[#6B21AB] italic font-normal">
                Agency Growth Model?
              </span>
            </h2>

            <p className="text-[#000000]/70 text-sm max-w-xl mx-auto font-normal leading-relaxed">
              Connect directly with our strategy team on WhatsApp for custom consultation.
            </p>

            <div className="flex justify-center pt-2">
              <button
                onClick={handleWhatsAppRedirect}
                className="px-8 py-3.5 rounded-full bg-[#6B21AB] text-[#FFFFFF] font-extrabold text-xs uppercase tracking-wider flex items-center gap-2 hover:bg-[#581C87] transition-all duration-300 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-[#FFFFFF]" /> Direct WhatsApp Chat
              </button>
            </div>
          </div>
        </section>

      </div>

      {/* Detail Modal Overlay */}
      {selectedIdx !== null && (
        <div 
          className="fixed inset-0 z-50 bg-[#000000]/40 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedIdx(null)}
        >
          <div 
            className="bg-[#FFFFFF] border border-[#6B21AB]/20 max-w-2xl w-full p-6 md:p-8 relative shadow-2xl rounded-2xl text-[#000000]"
            onClick={(e) => e.stopPropagation()}
          >
            
            <button 
              type="button"
              onClick={() => setSelectedIdx(null)}
              aria-label="Close details"
              className="absolute top-5 right-5 text-[#000000]/60 hover:text-[#000000] p-2 border border-[#6B21AB]/20 bg-[#FFFFFF] cursor-pointer rounded-full transition-colors"
            >
              <X className="w-5 h-5 text-[#6B21AB]" />
            </button>

            <div className="flex items-center gap-4 mb-6 pr-8">
              <div className="p-3 bg-[#6B21AB] text-[#FFFFFF] rounded-xl shrink-0">
                {services[selectedIdx].icon}
              </div>
              <div>
                <span className="text-[10px] font-extrabold text-[#6B21AB] tracking-widest uppercase">
                  {services[selectedIdx].badge}
                </span>
                <h4 className="text-lg md:text-2xl font-bold text-[#000000] leading-tight mt-0.5">
                  {services[selectedIdx].title}
                </h4>
              </div>
            </div>

            <div className="flex items-start gap-3 pt-5 border-t border-[#6B21AB]/15 text-xs md:text-sm text-[#000000]/80 font-medium leading-relaxed max-h-[50vh] overflow-y-auto">
              <CheckCircle2 className="w-5 h-5 text-[#FC5BDA] shrink-0 mt-0.5" />
              <p>{services[selectedIdx].content}</p>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}