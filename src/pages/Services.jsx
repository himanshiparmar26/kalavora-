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

  const ServiceCard = ({ service }) => (
    <div 
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

        <button
          type="button"
          onClick={() => handleInquire(service.title)}
          aria-label={`Inquire via WhatsApp about ${service.title}`}
          className="w-full py-3 rounded-xl bg-black border border-[#FC5BDA]/50 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 group-hover:bg-[#FC5BDA] group-hover:border-[#FC5BDA] transition-all shadow-[0_0_15px_rgba(252,91,218,0.2)] cursor-pointer"
        >
          Inquire via WhatsApp <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );

  return (
    <div className="bg-[#000000] text-[#FFFFFF] min-h-screen pt-28 pb-20 relative overflow-hidden font-sans">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[#6B21AB]/20 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-20 right-10 w-[350px] h-[350px] bg-[#FC5BDA]/15 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 space-y-16">
        
        {/* Header Section with Mascot #1 */}
        <div className="grid md:grid-cols-12 gap-8 items-center text-center md:text-left max-w-5xl mx-auto">
          <div className="md:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#FFD700]/60 bg-[#FFD700]/10 text-[#FFD700] text-xs font-bold tracking-widest uppercase shadow-[0_0_15px_rgba(255,215,0,0.25)]">
              <Sparkles className="w-4 h-4" /> OUR CAPABILITIES
            </div>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-[#FFFFFF] leading-tight">
              Services Crafted For <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] via-[#FC5BDA] to-[#FFFFFF] italic">
                Digital Excellence
              </span>
            </h1>
            <p className="text-gray-300 text-sm md:text-base font-light leading-relaxed">
              From luxury visual aesthetics to performance marketing systems, we help modern businesses build an unmistakable aura.
            </p>
          </div>

          {/* Top Hero Mascot #1 */}
          <div className="md:col-span-4 flex justify-center items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#6B21AB] to-[#FC5BDA] rounded-full blur-2xl opacity-40"></div>
              <img 
                src="/mascot-idea.png" 
                alt="Kalavora Creative Mascot" 
                className="w-44 md:w-56 h-auto object-contain drop-shadow-[0_0_25px_rgba(252,91,218,0.6)] relative z-10 hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>

        {/* Services Grid Part 1 (First 3 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.slice(0, 3).map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* Mascot Spotlight Banner #2 */}
        <div className="rounded-3xl border border-[#FFD700]/50 bg-gradient-to-r from-[#6B21AB]/30 via-black to-[#FC5BDA]/20 p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_0_40px_rgba(255,215,0,0.2)]">
          <div className="space-y-3 text-center md:text-left max-w-xl">
            <span className="text-[#FFD700] text-xs font-bold uppercase tracking-widest px-3 py-1 bg-[#FFD700]/10 border border-[#FFD700]/40 rounded-full">
              Full Stack Digital Execution
            </span>
            <h3 className="text-2xl md:text-3xl font-extrabold font-serif text-white">
              Scalable Tech Meets Aesthetic Mastery
            </h3>
            <p className="text-gray-300 text-xs md:text-sm font-light leading-relaxed">
              Every line of code and pixel we design is optimized to convert traffic into long-term brand equity.
            </p>
          </div>

          <div className="shrink-0 relative">
            <div className="absolute inset-0 bg-[#FFD700]/20 rounded-full blur-xl"></div>
            <img 
              src="/mascot-dev.png" 
              alt="Web Tech Mascot" 
              className="w-36 md:w-44 h-auto object-contain drop-shadow-[0_0_20px_rgba(255,215,0,0.5)] relative z-10 hover:scale-105 transition-transform"
            />
          </div>
        </div>

        {/* Services Grid Part 2 (Remaining 3 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.slice(3, 6).map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* CTA Bottom Banner with Mascot #3 */}
        <div className="rounded-3xl bg-gradient-to-r from-[#6B21AB]/40 via-black to-[#FC5BDA]/20 border border-[#FC5BDA]/40 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 backdrop-blur-md shadow-[0_0_50px_rgba(107,33,171,0.3)]">
          <div className="space-y-4 text-center md:text-left">
            <h2 className="text-2xl md:text-4xl font-extrabold font-serif text-white">
              Need a Custom Package For Your Brand?
            </h2>
            <p className="text-gray-300 text-xs md:text-sm max-w-lg font-light">
              We offer custom retainers and strategy packages tailored to your project goals.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#FFD700] via-[#FC5BDA] to-[#FFD700] text-black font-bold text-xs uppercase tracking-wider hover:scale-105 transition-all shadow-[0_0_25px_rgba(255,215,0,0.4)]"
            >
              Get Custom Proposal <MailCheck className="w-4 h-4" />
            </Link>
          </div>

          <img 
            src="/mascot-contact.png" 
            alt="Support Penguin Mascot" 
            className="w-36 md:w-44 h-auto object-contain drop-shadow-[0_0_20px_rgba(252,91,218,0.5)] shrink-0"
          />
        </div>

      </div>
    </div>
  );
}