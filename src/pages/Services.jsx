import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  Layers, 
  Zap, 
  Globe, 
  Video, 
  Search, 
  BookOpen, 
  MailCheck, 
  ArrowUpRight, 
  MessageCircle 
} from 'lucide-react';

export default function Services() {
  const whatsappNumber = "917877145565";

  const servicesList = [
    {
      id: "brand-identity",
      icon: <Layers className="w-8 h-8 text-[#FFD700]" />,
      title: "Brand Identity & Design Systems",
      desc: "Complete visual identities including logo suites, aura-focused brand guidelines, typography systems, and color palettes that position your business at the top.",
      tags: ["Logo Design", "Brand Guidelines", "Typography", "Visual Identity"]
    },
    {
      id: "digital-marketing",
      icon: <Zap className="w-8 h-8 text-[#FC5BDA]" />,
      title: "Digital Marketing & Performance Ads",
      desc: "Data-backed performance marketing on Meta (Instagram/Facebook) and Google Ads tailored to maximize ROAS and generate verified high-ticket leads.",
      tags: ["Meta Ads", "Google PPC", "Lead Generation", "ROAS Optimization"]
    },
    {
      id: "web-development",
      icon: <Globe className="w-8 h-8 text-[#FFD700]" />,
      title: "Web Development & Landing Pages",
      desc: "High-speed, conversion-focused websites built with modern frameworks (React, Tailwind CSS) optimized for mobile experience and seamless user journeys.",
      tags: ["React / Next.js", "Landing Pages", "UI/UX", "High Speed"]
    },
    {
      id: "motion-video",
      icon: <Video className="w-8 h-8 text-[#FC5BDA]" />,
      title: "Video Editing & Motion Reels",
      desc: "Eye-catching short-form content, Instagram Reels, promotional ads, and motion graphics designed to hold attention and boost social reach.",
      tags: ["Instagram Reels", "Ad Creatives", "Motion Graphics", "Video Editing"]
    },
    {
      id: "seo-growth",
      icon: <Search className="w-8 h-8 text-[#FFD700]" />,
      title: "SEO & Brand Growth Strategy",
      desc: "Search engine optimization strategies that place your agency on the first page of search results, driving long-term organic traffic.",
      tags: ["On-Page SEO", "Technical SEO", "Organic Growth", "Keyword Strategy"]
    },
    {
      id: "luxury-editorial",
      icon: <BookOpen className="w-8 h-8 text-[#FC5BDA]" />,
      title: "Luxury Editorial & Event Invitations",
      desc: "Bespoke digital invitation cards, magazine layouts, corporate catalogs, and high-end print-ready marketing materials.",
      tags: ["Luxury Invitations", "Editorial Layouts", "Print Design", "Corporate Cards"]
    }
  ];

  const handleInquire = (serviceTitle) => {
    const text = `Hi Kalavora Team! I am interested in knowing more about your service: *${serviceTitle}*.`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="bg-[#000000] text-[#FFFFFF] min-h-screen pt-28 pb-20 relative overflow-hidden">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[#6B21AB]/20 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-20 right-10 w-[350px] h-[350px] bg-[#FC5BDA]/15 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 space-y-16">
        
        {/* Header Section */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#FFD700]/60 bg-[#FFD700]/10 text-[#FFD700] text-xs font-bold tracking-widest uppercase shadow-[0_0_15px_rgba(255,215,0,0.25)]">
            <Sparkles className="w-4 h-4" /> OUR CAPABILITIES
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-[#FFFFFF]">
            Services Crafted For <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] via-[#FC5BDA] to-[#FFFFFF] italic">
              Digital Excellence
            </span>
          </h1>
          <p className="text-gray-300 text-sm md:text-base font-light leading-relaxed">
            From luxury visual aesthetics to performance marketing systems, we help modern businesses build an unmistakable aura.
          </p>
        </div>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service) => (
            <div 
              key={service.id}
              className="p-8 rounded-3xl bg-[#6B21AB]/10 border border-[#FC5BDA]/30 flex flex-col justify-between transition-all duration-500 hover:-translate-y-2 hover:border-[#FFD700] group shadow-xl backdrop-blur-md relative"
            >
              <div>
                <div className="p-4 rounded-2xl bg-[#000000]/80 border border-[#FC5BDA]/40 w-fit mb-6 shadow-[0_0_20px_rgba(252,91,218,0.3)] group-hover:scale-110 group-hover:border-[#FFD700] transition-all">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-[#FFFFFF] mb-3 font-serif leading-snug">
                  {service.title}
                </h3>
                <p className="text-gray-300 text-xs md:text-sm leading-relaxed mb-6 font-light">
                  {service.desc}
                </p>
              </div>

              <div className="space-y-6 pt-4 border-t border-white/10">
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag, idx) => (
                    <span 
                      key={idx}
                      className="px-2.5 py-1 rounded-md bg-black/60 border border-[#FC5BDA]/20 text-[10px] text-gray-300 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Inquiry Button */}
                <button
                  onClick={() => handleInquire(service.title)}
                  className="w-full py-3 rounded-xl bg-black border border-[#FC5BDA]/50 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 group-hover:bg-[#FC5BDA] group-hover:border-[#FC5BDA] transition-all shadow-[0_0_15px_rgba(252,91,218,0.2)]"
                >
                  Inquire via WhatsApp <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Bottom Banner */}
        <div className="rounded-3xl bg-gradient-to-r from-[#6B21AB]/40 via-black to-[#FC5BDA]/20 border border-[#FC5BDA]/40 p-10 md:p-14 text-center space-y-6 backdrop-blur-md shadow-[0_0_50px_rgba(107,33,171,0.3)]">
          <h2 className="text-2xl md:text-4xl font-extrabold font-serif text-white">
            Need a Custom Package For Your Brand?
          </h2>
          <p className="text-gray-300 text-xs md:text-sm max-w-lg mx-auto font-light">
            We offer custom retainers and strategy packages tailored to your project goals.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#FFD700] via-[#FC5BDA] to-[#FFD700] text-black font-bold text-xs uppercase tracking-wider hover:scale-105 transition-all shadow-[0_0_25px_rgba(255,215,0,0.4)]"
          >
            Get Custom Proposal <MailCheck className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}