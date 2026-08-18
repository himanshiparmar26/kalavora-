import React, { useState } from 'react';
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
  ArrowRight
} from 'lucide-react';

export default function About() {
  const [selectedIdx, setSelectedIdx] = useState(null);

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
      content: "Modern consumers discover, engage with, and think about brands based fully on their digital feeds. Our customized social media marketing guide converts casual scrollers into passionately loyal brand champions. Applying cultural insights and modern programmatic data, our strategic Instagram marketing campaigns unseal explosive regional engagement and huge community growth. Scaling a brand requires absolute solidity. With our premium social media management, we handle your entire profile habitat, Careing your digital platforms fueled with smooth, high-performing content while you focus on handling your operations."
    },
    {
      title: "Creative Design & Premium Visual Storytelling",
      tagline: "High-Impact Visual Assets & Video Editing",
      badge: "CREATIVE",
      icon: <Palette className="w-5 h-5 text-[#FFD700]" />,
      content: "We effortlessly mix fixed performance data with creative imagination through our trusty Creative Design Services. A business without an obvious visual identity is quickly treated as a minimal commodity. Our high-end production studio creates high-impact visual advantages using advanced video editing to capture instant attention across fast-moving reels, shorts, and ads. To support your digital story, our best graphic design team translates complex corporate visions into visible marketing security. We specialize in clean, complex layouts and soft, light green color palettes that instantly project trust, premium quality, and best market status."
    },
    {
      title: "Connected Identity & Digital Branding Systems",
      tagline: "Identity Systems, Packaging & Logos",
      badge: "IDENTITY",
      icon: <Layers className="w-5 h-5 text-[#FFD700]" />,
      content: "A business without a clear visual identity is quickly treated as a bare commodity. Our specialized branding design team maps out exhaustive corporate identity systems—from minimalist typography and classic logos to custom product packaging and refined visiting cards. We build a bulletproof blueprint for your digital branding, confirming your unique brand voice remains completely mixed across every physical package and digital screen."
    },
    {
      title: "Design a Powerful Digital Growth Strategy for Udaipur",
      tagline: "Hyper-Local Search Funnels & Geo-Targeting",
      badge: "LOCAL SEO",
      icon: <MapPin className="w-5 h-5 text-[#FFD700]" />,
      content: "Achieving an eco-friendly rank on Google SERP in the Udaipur location requires deep local market intelligence. You cannot win geographical search spaces with general, copy-paste strategies. The Udaipur commercial landscape demands exact geo-targeting, highly precise regional map optimization, and culturally deep local funnels that speak directly to the regional audience. At Kalavora, we produce hyper-local search funnels that position your brand right in front of Udaipur's highest-intent buyers exactly when they search for your services."
    },
    {
      title: "High-ROI Performance Marketing",
      tagline: "Data-Driven Google & Meta Campaigns",
      badge: "GROWTH",
      icon: <TrendingUp className="w-5 h-5 text-[#FFD700]" />,
      content: "Stop wasting your budget on meaningless metrics. The Insight-led performance marketing Strategies at Kalavora are Designed with one objective: your Business Growth is Maximum ROI. We Create hyper-targeted, conversion-optimized campaigns across search and social media platforms to put your offers in front of high-intent users ready to Convert right now. This makes us the final choice for the best digital marketing in Udaipur. From dominating content search terms around Lake City to scaling campaigns that win the whole India search market, we optimize every single rupee to increase your return on investment."
    },
    {
      title: "High-Converting Website Services",
      tagline: "Fast, Secure & Mobile-Optimized Web",
      badge: "WEB TECH",
      icon: <Globe className="w-5 h-5 text-[#FFD700]" />,
      content: "Your website is your all-day digital premium store. At Kalavora, we design lightning-fast, secure, and mobile-optimized platforms engineered entirely around intuitive user experiences. Applying our Strategic, Engaging Layouts and minimalist structures, we Transform Website Visitors into Returning Customers. This dedication to digital excellence is our reputation as the best company in Udaipur for businesses looking to scale. Whether you need to capture your immediate regional market or rank for highly competitive Whole India search terms, we build the premium web infrastructure your brand needs to grow."
    },
    {
      title: "Authority-Building Content Creation",
      tagline: "Strategic Storytelling & Top SERP Signals",
      badge: "STRATEGY",
      icon: <FileText className="w-5 h-5 text-[#FFD700]" />,
      content: "In a noisy online marketplace, strategic content creation is the ultimate tool for earning customer loyalty. This best-storytelling feed search engine provides the premium signals required to achieve your ultimate digital marketing goals and secure your spot on Google’s first page. By customizing your message for local aims and high-volume national search channels, we ensure your brand ranks at the absolute top across the entire country."
    }
  ];

  return (
    <section className="bg-[#000000] text-[#FFFFFF] pt-24 pb-20 px-4 md:px-8 relative overflow-hidden min-h-screen font-sans">
      
      {/* Ambient Background Glows */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#6B21AB]/25 blur-[180px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-[#FC5BDA]/10 blur-[180px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto space-y-10 relative z-10">
        
        {/* Header Section */}
        <div className="text-center space-y-5">
          <div className="inline-block p-[1px] bg-gradient-to-r from-[#FFD700] via-[#FC5BDA] to-[#6B21AB]">
            <div className="bg-[#000000] px-5 py-2 flex items-center justify-center gap-2 border border-[#6B21AB]/50">
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
          
          <p className="text-gray-400 text-xs md:text-sm max-w-2xl mx-auto font-light leading-relaxed">
            In today's fast-developing business landscape, simply having a website is not enough. At <span className="text-[#FFFFFF] font-medium">kalavora.in</span>, we engineer data-driven digital solutions.
          </p>
        </div>

        {/* 1 Line me 4 Square Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
          {services.map((item, idx) => (
            <div 
              key={idx}
              className="relative p-5 flex flex-col justify-between aspect-square border border-[#6B21AB]/40 bg-[#000000] hover:border-[#FFD700] transition-all duration-300 group"
            >
              {/* Corner Badge in Gold (#FFD700) */}
              <div className="absolute top-0 right-0 bg-[#FFD700] text-[#000000] text-[9px] font-black px-2.5 py-0.5 tracking-wider uppercase font-sans">
                {item.badge}
              </div>

              {/* Square Icon Container */}
              <div className="w-10 h-10 flex items-center justify-center border border-[#6B21AB] bg-[#000000] group-hover:border-[#FFD700] transition-colors">
                {item.icon}
              </div>

              {/* Topic & Subheading */}
              <div className="space-y-1 my-auto">
                <h3 className="text-sm md:text-base font-bold text-[#FFFFFF] font-serif leading-snug line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-[11px] text-gray-400 font-light line-clamp-2">
                  {item.tagline}
                </p>
              </div>

              {/* Read Details Button */}
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

      </div>

      {/* Floating Modal Overlay */}
      {selectedIdx !== null && (
        <div className="fixed inset-0 z-50 bg-[#000000]/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#000000] border-2 border-[#FC5BDA] max-w-2xl w-full p-6 md:p-8 relative shadow-[0_0_40px_rgba(252,91,218,0.25)]">
            
            {/* Close Button */}
            <button 
              type="button"
              onClick={() => setSelectedIdx(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-[#FFFFFF] p-1.5 border border-[#6B21AB] bg-[#000000] cursor-pointer"
            >
              <X className="w-5 h-5 text-[#FC5BDA]" />
            </button>

            {/* Header Info */}
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

            {/* Content Body */}
            <div className="flex items-start gap-3 pt-4 border-t border-[#6B21AB]/40 text-xs md:text-sm text-gray-200 font-light leading-relaxed max-h-[60vh] overflow-y-auto">
              <CheckCircle2 className="w-5 h-5 text-[#FFD700] shrink-0 mt-0.5" />
              <p>{services[selectedIdx].content}</p>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}