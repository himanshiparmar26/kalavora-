import React, { useState, useEffect } from 'react';
import { Sparkles, Layers, Zap, Star, ArrowUpRight, MessageCircle, ArrowRight, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

// Public folder ki select ki hui 3 images
const heroMascots = [
  '/mascot.png',
  '/mascot-marketing.png',
  '/mascot-work.png'
];

export default function Home() {
  const whatsappNumber = "917877145565";

  // Auto Mascot Switch State
  const [currentMascotIndex, setCurrentMascotIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);

      setTimeout(() => {
        setCurrentMascotIndex((prevIndex) => (prevIndex + 1) % heroMascots.length);
        setFade(true);
      }, 300); // 300ms fade transition delay

    }, 3000); // Har 3 sec me change hoga

    return () => clearInterval(interval);
  }, []);

  const handleWhatsAppRedirect = () => {
    const text = "Hi Kalavora Team! I want to discuss a project with you.";
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="bg-[#000000] text-[#FFFFFF] min-h-screen pt-28 pb-20 relative overflow-hidden">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[#6B21AB]/20 rounded-full blur-[160px] pointer-events-none"></div>
      <div className="absolute top-10 right-10 w-[300px] h-[300px] bg-[#FC5BDA]/15 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 space-y-20">
        
        {/* Main Hero Section */}
        <section className="grid lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#FFD700]/60 bg-[#FFD700]/10 text-[#FFD700] text-xs font-bold tracking-widest uppercase shadow-[0_0_15px_rgba(255,215,0,0.3)]">
              <Sparkles className="w-4 h-4 text-[#FFD700]" /> Kalavora Creative Studio
            </div>
            
            <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight">
              Kalavora <br />
              <span className="text-3xl md:text-5xl font-sans font-light text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] via-[#FC5BDA] to-[#FFFFFF] italic">
                A Digital Aura of Creativity
              </span>
            </h1>
            
            <p className="text-gray-300 text-base md:text-lg max-w-xl font-sans leading-relaxed">
              We fuse high-end design identity, glowing visual systems, and modern digital marketing strategy to amplify your brand's presence.
            </p>
            
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
              <Link
                to="/services"
                className="px-8 py-4 rounded-full bg-gradient-to-r from-[#6B21AB] via-[#FC5BDA] to-[#FFD700] text-[#000000] font-bold shadow-[0_0_30px_rgba(252,91,218,0.5)] hover:scale-105 transition-all flex items-center gap-2"
              >
                Our Services <ArrowUpRight className="w-5 h-5 text-[#000000]" />
              </Link>
              
              <button
                onClick={handleWhatsAppRedirect}
                className="px-8 py-4 rounded-full border border-[#25D366]/70 text-[#25D366] font-semibold hover:bg-[#25D366] hover:text-white transition-all backdrop-blur-md shadow-[0_0_15px_rgba(37,211,102,0.3)] flex items-center gap-2"
              >
                <MessageCircle className="w-5 h-5" /> Quick WhatsApp
              </button>
            </div>
          </div>

          {/* Right Column: Standardized Dynamic 3 Mascot Loop */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
              <div className="absolute w-48 h-48 md:w-60 md:h-60 bg-gradient-to-tr from-[#6B21AB] via-[#FC5BDA] to-[#FFD700] rounded-full blur-3xl opacity-40 pointer-events-none"></div>
              
              <img 
                src={heroMascots[currentMascotIndex]} 
                alt="Kalavora Mascot Dynamic" 
                className={`w-full h-full object-contain drop-shadow-[0_0_35px_rgba(252,91,218,0.7)] relative z-10 transition-all duration-300 transform ${
                  fade ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`} 
              />
            </div>
          </div>

        </section>

        {/* Feature Grid */}
        <section className="grid md:grid-cols-3 gap-8">
          {[
            { 
              icon: <Layers className="text-[#FFD700] w-8 h-8" />, 
              title: "Brand Identity", 
              desc: "Aura-focused design guidelines, custom color systems, and modern typography." 
            },
            { 
              icon: <Zap className="text-[#FC5BDA] w-8 h-8" />, 
              title: "Digital Marketing", 
              desc: "High-ROI digital campaigns tailored to scale modern agency presence." 
            },
            { 
              icon: <Star className="text-[#FFD700] w-8 h-8" />, 
              title: "Creative Production", 
              desc: "Premium visual assets, social media graphics, and full web builds." 
            },
          ].map((item, idx) => (
            <div 
              key={idx} 
              className="p-8 rounded-3xl bg-[#6B21AB]/10 border border-[#FC5BDA]/30 transition-all duration-500 hover:-translate-y-2 hover:border-[#FFD700]/70 group shadow-lg backdrop-blur-md"
            >
              <div className="p-4 rounded-2xl bg-[#000000]/80 border border-[#FC5BDA]/40 w-fit mb-6 shadow-[0_0_20px_rgba(252,91,218,0.3)] group-hover:scale-110 group-hover:border-[#FFD700] transition-all">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold text-[#FFFFFF] mb-3 font-sans tracking-wide">{item.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </section>

        {/* 3-CARD CALLOUT BANNER */}
        <section className="pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            
            {/* Card 1: Request Proposal */}
            <div className="relative rounded-3xl bg-gradient-to-b from-[#6B21AB]/40 via-black to-[#3B0764] p-8 border border-[#FC5BDA]/40 flex flex-col justify-between overflow-hidden group hover:scale-[1.02] transition-all shadow-[0_10px_30px_rgba(107,33,171,0.3)] min-h-[400px]">
              <div className="space-y-4 z-10">
                <h3 className="text-2xl md:text-3xl font-extrabold font-serif text-white leading-snug">
                  Want to turn your brand into a high-ticket client magnet?
                </h3>
                <p className="text-[#FFD700] text-xs uppercase tracking-widest font-bold">Request a proposal</p>
              </div>

              <div className="relative z-10 flex justify-between items-end pt-6">
                <Link
                  to="/contact"
                  className="p-4 rounded-full bg-[#FFD700] text-black hover:bg-white transition-colors shadow-lg font-bold"
                >
                  <ArrowUpRight className="w-6 h-6" />
                </Link>

                <img 
                  src="/mascot-marketing.png" 
                  alt="Marketing Mascot" 
                  className="w-32 h-32 object-contain drop-shadow-[0_10px_20px_rgba(252,91,218,0.5)] group-hover:scale-110 transition-transform duration-500" 
                />
              </div>
            </div>

            {/* Card 2: Growth Team */}
            <div className="relative rounded-3xl bg-gradient-to-b from-[#FC5BDA]/30 via-black to-[#6B21AB]/50 p-8 border border-[#FC5BDA]/40 flex flex-col justify-between overflow-hidden group hover:scale-[1.02] transition-all shadow-[0_10px_30px_rgba(252,91,218,0.3)] min-h-[400px]">
              <div className="space-y-4 z-10">
                <h3 className="text-2xl md:text-3xl font-extrabold font-serif text-white leading-snug">
                  Ready to scale your ads & ROI with modern strategy?
                </h3>
                <p className="text-[#FC5BDA] text-xs uppercase tracking-widest font-bold">Talk to our growth team</p>
              </div>

              <div className="relative z-10 flex justify-between items-end pt-6">
                <a
                  href={`https://wa.me/${whatsappNumber}?text=Hi%20Kalavora!%20I%20want%20to%20scale%20my%20digital%20marketing.`}
                  target="_blank"
                  rel="noreferrer"
                  className="p-4 rounded-full bg-[#FC5BDA] text-white hover:bg-[#FFD700] hover:text-black transition-colors shadow-lg font-bold"
                >
                  <Briefcase className="w-6 h-6" />
                </a>

                <img 
                  src="/mascot.png" 
                  alt="Dev Mascot" 
                  className="w-32 h-32 object-contain drop-shadow-[0_10px_20px_rgba(107,33,171,0.5)] group-hover:scale-110 transition-transform duration-500" 
                />
              </div>
            </div>

            {/* Card 3: Portfolio Showcase */}
            <div className="relative rounded-3xl bg-gradient-to-b from-[#18181B] via-black to-[#6B21AB]/40 p-8 border border-[#FFD700]/40 flex flex-col justify-between overflow-hidden group hover:scale-[1.02] transition-all shadow-[0_10px_30px_rgba(255,215,0,0.2)] min-h-[400px]">
              <div className="space-y-4 z-10">
                <h3 className="text-2xl md:text-3xl font-extrabold font-serif text-white leading-snug">
                  Want to see how we build iconic brand identities?
                </h3>
                <p className="text-[#FFD700] text-xs uppercase tracking-widest font-bold">Explore our recent work</p>
              </div>

              <div className="relative z-10 flex justify-between items-end pt-6">
                <Link
                  to="/our-work"
                  className="p-4 rounded-full bg-white text-black hover:bg-[#FC5BDA] hover:text-white transition-colors shadow-lg font-bold"
                >
                  <ArrowRight className="w-6 h-6" />
                </Link>

                <img 
                  src="/mascot-work.png" 
                  alt="Work Mascot" 
                  className="w-32 h-32 object-contain drop-shadow-[0_10px_20px_rgba(255,215,0,0.5)] group-hover:scale-110 transition-transform duration-500" 
                />
              </div>
            </div>

          </div>
        </section>

        {/* HIGH CONVERTING BOTTOM BANNER */}
        <section className="pt-4">
          <div className="rounded-3xl bg-gradient-to-r from-[#6B21AB]/40 via-black to-[#FC5BDA]/20 border border-[#FC5BDA]/40 p-10 md:p-14 text-center space-y-6 relative overflow-hidden backdrop-blur-md shadow-[0_0_50px_rgba(107,33,171,0.3)]">
            
            <h2 className="text-3xl md:text-5xl font-extrabold font-serif text-white">
              Ready to Transform Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-[#FC5BDA] italic">
                Brand Identity?
              </span>
            </h2>

            <p className="text-gray-300 text-xs md:text-sm max-w-xl mx-auto font-light leading-relaxed">
              Let's craft custom designs and growth strategies for your business today.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <button
                onClick={handleWhatsAppRedirect}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#25D366] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#1ebd53] hover:scale-105 transition-all shadow-[0_0_20px_rgba(37,211,102,0.4)]"
              >
                <MessageCircle className="w-4 h-4" /> Start WhatsApp Chat
              </button>

              <Link
                to="/contact"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-black border border-[#FFD700]/50 text-[#FFD700] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#FFD700] hover:text-black transition-all"
              >
                Send Detailed Proposal <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>
        </section>

      </div>
    </div>
  );
}