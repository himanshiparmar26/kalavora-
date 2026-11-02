import React from 'react';
import { Sparkles, Layers, Zap, Star, ArrowUpRight, MessageCircle, ArrowRight, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const whatsappNumber = "917877145565";

  const handleWhatsAppRedirect = () => {
    const text = "Hi Kalavora Team! I want to discuss a project with you.";
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="bg-white text-slate-900 dark:bg-[#090D16] dark:text-slate-100 min-h-screen pt-12 pb-24 relative font-sans selection:bg-[#6B21AB] selection:text-white transition-colors duration-300">

      <div className="max-w-7xl mx-auto px-6 relative z-10 space-y-20">
        
        {/* Main Hero Section */}
        <section className="grid lg:grid-cols-12 gap-12 items-center pt-8">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#6B21AB]/30 bg-gray-50 dark:bg-[#131927] text-slate-900 dark:text-white text-xs font-bold tracking-widest uppercase shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#FC5BDA] animate-pulse"></span>
              <Sparkles className="w-3.5 h-3.5 text-[#6B21AB] dark:text-[#FC5BDA]" /> Kalavora Creative Studio
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] tracking-tight text-slate-900 dark:text-white">
              Kalavora <br />
              <span className="text-3xl md:text-5xl font-normal text-slate-700 dark:text-slate-300 italic">
                A Digital Aura of <span className="text-[#6B21AB] dark:text-[#FC5BDA] not-italic font-extrabold">Creativity</span>
              </span>
            </h1>
            
            <p className="text-slate-600 dark:text-slate-300 text-base md:text-lg max-w-xl leading-relaxed font-medium">
              We fuse high-end design identity, glowing visual systems, and modern digital marketing strategy to amplify your brand's presence.
            </p>
            
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-2">
              <Link
                to="/services"
                className="group px-7 py-3.5 rounded-full bg-[#6B21AB] text-white font-semibold text-xs uppercase tracking-wider hover:bg-[#581C87] border border-transparent transition-all duration-300 flex items-center gap-2 shadow-md"
              >
                Our Services 
                <ArrowUpRight className="w-4 h-4 text-white transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              
              <button
                onClick={handleWhatsAppRedirect}
                className="px-7 py-3.5 rounded-full border border-[#6B21AB]/40 bg-white dark:bg-[#131927] text-slate-900 dark:text-white font-bold text-xs uppercase tracking-wider hover:bg-[#6B21AB]/10 transition-all duration-300 shadow-sm flex items-center gap-2 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-[#6B21AB] dark:text-[#FC5BDA]" /> Quick WhatsApp
              </button>
            </div>
          </div>

          {/* Right Column: Optimized Hero Image */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="w-full max-w-xs rounded-2xl overflow-hidden shadow-2xl border border-[#6B21AB]/30 bg-[#131927] group">
              <img 
                src="/professional-woman-at-desk.png" 
                alt="Kalavora Creative Desk" 
                className="w-full h-auto object-cover transform transition-transform duration-300 group-hover:scale-105" 
              />
            </div>
          </div>

        </section>

        {/* Top Feature Grid */}
        <section className="grid md:grid-cols-3 gap-6">
          {[
            { 
              icon: <Layers className="text-white w-5 h-5" />, 
              title: "Brand Identity", 
              desc: "Aura-focused design guidelines, custom color systems, and modern typography." 
            },
            { 
              icon: <Zap className="text-white w-5 h-5" />, 
              title: "Digital Marketing", 
              desc: "High-ROI digital campaigns tailored to scale modern agency presence." 
            },
            { 
              icon: <Star className="text-white w-5 h-5" />, 
              title: "Creative Production", 
              desc: "Premium visual assets, social media graphics, and full web builds." 
            },
          ].map((item, idx) => (
            <div 
              key={idx} 
              className="p-8 rounded-2xl bg-white dark:bg-[#131927] border border-slate-200 dark:border-[#6B21AB]/40 transition-all duration-300 hover:border-[#6B21AB] hover:shadow-lg hover:-translate-y-1 group relative shadow-sm"
            >
              <div className="absolute top-4 right-4 w-1.5 h-1.5 rounded-full bg-[#FC5BDA]/80"></div>

              <div className="p-3 rounded-xl bg-[#6B21AB] text-white w-fit mb-6 transition-all duration-300 shadow-sm group-hover:bg-[#581C87]">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 tracking-wide">{item.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed font-medium">{item.desc}</p>
            </div>
          ))}
        </section>

        {/* 3-Card Callout Grid */}
        <section className="grid md:grid-cols-3 gap-6">
          
          {/* Card 1 */}
          <div className="p-8 rounded-2xl bg-white dark:bg-[#131927] border border-slate-200 dark:border-[#6B21AB]/40 flex flex-col justify-between transition-all duration-300 hover:border-[#6B21AB] hover:shadow-lg hover:-translate-y-1 group relative shadow-sm h-full min-h-[260px]">
            <div className="space-y-2">
              <span className="text-[#6B21AB] dark:text-[#FC5BDA] text-[10px] uppercase tracking-widest font-extrabold">Request a proposal</span>
              <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug">
                Want to turn your brand into a high-ticket client magnet?
              </h3>
            </div>

            <div className="flex items-center justify-between pt-6">
              <Link
                to="/contact"
                aria-label="Contact Us"
                className="p-3 rounded-full bg-[#6B21AB] text-white hover:bg-[#581C87] transition-all duration-300 shadow-sm flex items-center gap-2 text-xs font-semibold uppercase tracking-wider"
              >
                <span>Get Proposal</span>
                <ArrowUpRight className="w-4 h-4 text-white" />
              </Link>
            </div>
          </div>

          {/* Card 2 */}
          <div className="p-8 rounded-2xl bg-white dark:bg-[#131927] border border-slate-200 dark:border-[#6B21AB]/40 flex flex-col justify-between transition-all duration-300 hover:border-[#6B21AB] hover:shadow-lg hover:-translate-y-1 group relative shadow-sm h-full min-h-[260px]">
            <div className="space-y-2">
              <span className="text-[#6B21AB] dark:text-[#FC5BDA] text-[10px] uppercase tracking-widest font-extrabold">Growth Team</span>
              <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug">
                Ready to scale your ads & ROI with modern strategy?
              </h3>
            </div>

            <div className="flex items-center justify-between pt-6">
              <button
                onClick={handleWhatsAppRedirect}
                aria-label="WhatsApp Growth Team"
                className="p-3 rounded-full bg-[#6B21AB] text-white hover:bg-[#581C87] transition-all duration-300 cursor-pointer shadow-sm flex items-center gap-2 text-xs font-semibold uppercase tracking-wider"
              >
                <span>Chat Now</span>
                <Briefcase className="w-4 h-4 text-white" />
              </button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="p-8 rounded-2xl bg-[#131927] border border-[#6B21AB]/40 flex flex-col justify-between transition-all duration-300 hover:border-[#6B21AB] hover:shadow-lg hover:-translate-y-1 group relative shadow-sm h-full min-h-[260px]">
            <div className="space-y-2">
              <span className="text-[#FC5BDA] text-[10px] uppercase tracking-widest font-extrabold">Portfolio</span>
              <h3 className="text-base font-bold text-white leading-snug">
                Want to see how we build iconic brand identities?
              </h3>
            </div>

            <div className="flex items-center justify-between pt-6">
              <Link
                to="/workplace"
                aria-label="Our Work"
                className="p-3 rounded-full bg-[#6B21AB] text-white hover:bg-[#581C87] transition-all duration-300 shadow-sm flex items-center gap-2 text-xs font-semibold uppercase tracking-wider"
              >
                <span>View Works</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </Link>
            </div>
          </div>

        </section>

        {/* Bottom CTA Banner */}
        <section>
          <div className="rounded-3xl bg-white dark:bg-[#131927] p-10 md:p-14 text-center space-y-6 relative border border-slate-200 dark:border-[#6B21AB]/40 shadow-lg text-slate-900 dark:text-white">
            
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Ready to Transform Your <br />
              <span className="text-[#6B21AB] dark:text-[#FC5BDA] italic font-normal">
                Brand Identity?
              </span>
            </h2>

            <p className="text-slate-600 dark:text-slate-400 text-sm max-w-xl mx-auto font-normal leading-relaxed">
              Let's craft custom designs and growth strategies for your business today.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <button
                onClick={handleWhatsAppRedirect}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#6B21AB] text-white font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#581C87] transition-all duration-300 cursor-pointer shadow-md hover:scale-105"
              >
                <MessageCircle className="w-4 h-4 text-white" /> Start WhatsApp Chat
              </button>

              <Link
                to="/contact"
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-slate-50 dark:bg-[#090D16] border border-[#6B21AB] text-slate-900 dark:text-white font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#6B21AB]/10 transition-all duration-300"
              >
                Send Detailed Proposal <ArrowRight className="w-4 h-4 text-slate-900 dark:text-white" />
              </Link>
            </div>

          </div>
        </section>

      </div>
    </div>
  );
}