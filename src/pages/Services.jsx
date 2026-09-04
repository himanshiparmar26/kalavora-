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
  ArrowUpRight 
} from 'lucide-react';

export default function Services() {
  const whatsappNumber = "917877145565";

  const servicesList = [
    {
      id: "brand-identity",
      icon: <Layers className="w-5 h-5 text-[#FFFFFF]" />,
      title: "Brand Identity & Design Systems",
      desc: "Complete visual identities including logo suites, aura-focused brand guidelines, typography systems, and color palettes that position your business at the top.",
      tags: ["Logo Design", "Brand Guidelines", "Typography", "Visual Identity"]
    },
    {
      id: "digital-marketing",
      icon: <Zap className="w-5 h-5 text-[#FFFFFF]" />,
      title: "Digital Marketing & Performance Ads",
      desc: "Data-backed performance marketing on Meta (Instagram/Facebook) and Google Ads tailored to maximize ROAS and generate verified high-ticket leads.",
      tags: ["Meta Ads", "Google PPC", "Lead Generation", "ROAS Optimization"]
    },
    {
      id: "web-development",
      icon: <Globe className="w-5 h-5 text-[#FFFFFF]" />,
      title: "Web Development & Landing Pages",
      desc: "High-speed, conversion-focused websites built with modern frameworks (React, Tailwind CSS) optimized for mobile experience and seamless user journeys.",
      tags: ["React / Next.js", "Landing Pages", "UI/UX", "High Speed"]
    },
    {
      id: "motion-video",
      icon: <Video className="w-5 h-5 text-[#FFFFFF]" />,
      title: "Video Editing & Motion Reels",
      desc: "Eye-catching short-form content, Instagram Reels, promotional ads, and motion graphics designed to hold attention and boost social reach.",
      tags: ["Instagram Reels", "Ad Creatives", "Motion Graphics", "Video Editing"]
    },
    {
      id: "seo-growth",
      icon: <Search className="w-5 h-5 text-[#FFFFFF]" />,
      title: "SEO & Brand Growth Strategy",
      desc: "Search engine optimization strategies that place your agency on the first page of search results, driving long-term organic traffic.",
      tags: ["On-Page SEO", "Technical SEO", "Organic Growth", "Keyword Strategy"]
    },
    {
      id: "luxury-editorial",
      icon: <BookOpen className="w-5 h-5 text-[#FFFFFF]" />,
      title: "Luxury Editorial & Event Invitations",
      desc: "Bespoke digital invitation cards, magazine layouts, corporate catalogs, and high-end print-ready marketing materials.",
      tags: ["Luxury Invitations", "Editorial Layouts", "Print Design", "Corporate Cards"]
    }
  ];

  const handleInquire = (serviceTitle) => {
    const text = `Hi Kalavora Team! I am interested in knowing more about your service: *${serviceTitle}*.`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
  };

  const ServiceCard = ({ service }) => (
    <div className="p-6 md:p-7 rounded-2xl bg-[#000000]/[0.02] dark:bg-[#131927] border border-[#000000]/10 dark:border-[#6B21AB]/30 hover:border-[#6B21AB]/40 dark:hover:border-[#FC5BDA]/60 hover:shadow-lg dark:hover:shadow-[#6B21AB]/10 transition-all duration-300 flex flex-col justify-between group">
      <div>
        <div className="p-3.5 rounded-xl bg-[#6B21AB] text-[#FFFFFF] w-fit mb-5 shadow-sm">
          {service.icon}
        </div>
        
        <h3 className="text-xl font-bold text-[#000000] dark:text-[#FFFFFF] mb-2 leading-snug group-hover:text-[#6B21AB] dark:group-hover:text-[#FC5BDA] transition-colors">
          {service.title}
        </h3>
        
        <p className="text-[#000000]/70 dark:text-[#FFFFFF]/70 text-xs md:text-sm leading-relaxed mb-6 font-medium">
          {service.desc}
        </p>
      </div>

      <div className="space-y-5 pt-4 border-t border-[#000000]/10 dark:border-[#6B21AB]/20">
        <div className="flex flex-wrap gap-2">
          {service.tags.map((tag, idx) => (
            <span 
              key={idx}
              className="px-2.5 py-1 rounded-md bg-[#6B21AB]/10 dark:bg-[#6B21AB]/25 text-[10px] text-[#6B21AB] dark:text-[#FC5BDA] font-bold"
            >
              #{tag}
            </span>
          ))}
        </div>

        <button
          type="button"
          onClick={() => handleInquire(service.title)}
          aria-label={`Inquire via WhatsApp about ${service.title}`}
          className="w-full py-2.5 px-4 border border-[#6B21AB]/30 dark:border-[#6B21AB]/50 bg-[#FFFFFF] dark:bg-[#090D16] text-[#6B21AB] dark:text-[#FC5BDA] font-bold text-xs uppercase tracking-wider flex items-center justify-between hover:bg-[#6B21AB] dark:hover:bg-[#6B21AB] hover:text-[#FFFFFF] dark:hover:text-[#FFFFFF] transition-all duration-300 cursor-pointer rounded-xl group/btn shadow-sm"
        >
          <span>Inquire via WhatsApp</span>
          <ArrowUpRight className="w-4 h-4 text-[#FC5BDA] group-hover/btn:text-[#FFFFFF] transition-colors" />
        </button>
      </div>
    </div>
  );

  return (
    <div className="bg-[#FFFFFF] dark:bg-[#090D16] text-[#000000] dark:text-[#FFFFFF] min-h-screen pt-12 pb-24 font-sans selection:bg-[#6B21AB] selection:text-white transition-colors duration-300">
      
      <div className="max-w-7xl mx-auto px-6 space-y-16">
        
        {/* Header Section */}
        <div className="grid md:grid-cols-12 gap-8 items-center text-center md:text-left max-w-5xl mx-auto pt-4">
          <div className="md:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#000000]/10 dark:border-[#6B21AB]/40 bg-[#000000]/[0.03] dark:bg-[#131927] text-[#000000] dark:text-[#FFFFFF] text-xs font-bold tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-[#FC5BDA] animate-pulse"></span>
              <Sparkles className="w-3.5 h-3.5 text-[#6B21AB] dark:text-[#FC5BDA]" /> Our Capabilities
            </div>
            
            <h1 className="text-4xl md:text-6xl font-extrabold text-[#000000] dark:text-[#FFFFFF] leading-tight tracking-tight">
              Services Crafted For <br />
              <span className="text-[#6B21AB] dark:text-[#FC5BDA] italic font-normal">Digital Excellence</span>
            </h1>
            
            <p className="text-[#000000]/70 dark:text-[#FFFFFF]/70 text-sm md:text-base font-medium leading-relaxed max-w-xl">
              From high-impact visual design to performance marketing systems, we help modern businesses build an unmistakable market presence.
            </p>
          </div>

          {/* Top Hero Mascot */}
          <div className="md:col-span-4 flex justify-center items-center">
            <img 
              src="/mascot-idea.png" 
              alt="Kalavora Creative Mascot" 
              className="w-52 md:w-60 h-auto object-contain hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        {/* Services Grid Part 1 (First 3 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.slice(0, 3).map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* Middle Spotlight Banner */}
        <div className="p-8 md:p-10 rounded-3xl bg-[#000000]/[0.015] dark:bg-[#131927] border border-[#000000]/10 dark:border-[#6B21AB]/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-3 text-center md:text-left max-w-xl">
            <span className="text-[#6B21AB] dark:text-[#FC5BDA] text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 bg-[#6B21AB]/10 dark:bg-[#6B21AB]/30 rounded-full inline-block">
              Full Stack Digital Execution
            </span>
            <h3 className="text-2xl md:text-3xl font-extrabold text-[#000000] dark:text-[#FFFFFF] tracking-tight">
              Scalable Tech Meets <br />
              <span className="text-[#6B21AB] dark:text-[#FC5BDA] italic font-normal">Aesthetic Mastery</span>
            </h3>
            <p className="text-[#000000]/70 dark:text-[#FFFFFF]/70 text-xs md:text-sm font-medium leading-relaxed">
              Every line of code and pixel we design is optimized to convert traffic into long-term brand equity.
            </p>
          </div>

          <div className="shrink-0">
            <img 
              src="/mascot-dev.png" 
              alt="Web Tech Mascot" 
              className="w-36 md:w-44 h-auto object-contain hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        {/* Services Grid Part 2 (Remaining 3 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.slice(3, 6).map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* Bottom Callout Section */}
        <div className="pt-8">
          <div className="text-center space-y-6 text-[#000000] dark:text-[#FFFFFF]">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#000000] dark:text-[#FFFFFF]">
              Need a Custom Package <br />
              <span className="text-[#6B21AB] dark:text-[#FC5BDA] italic font-normal">
                For Your Brand?
              </span>
            </h2>

            <p className="text-[#000000]/70 dark:text-[#FFFFFF]/70 text-sm max-w-lg mx-auto font-medium leading-relaxed">
              We offer custom retainers and strategy packages tailored to your project goals.
            </p>

            <div className="flex justify-center pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#6B21AB] text-[#FFFFFF] font-extrabold text-xs uppercase tracking-wider hover:bg-[#581C87] transition-all duration-300 shadow-md"
              >
                Get Custom Proposal <MailCheck className="w-4 h-4 text-[#FFFFFF]" />
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}