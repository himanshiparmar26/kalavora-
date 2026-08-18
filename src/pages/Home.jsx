import React from 'react';
import { Sparkles, Layers, Zap, Star, ArrowUpRight, MessageCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const whatsappNumber = "917877145565";

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

          {/* Right Column: Floating Mascot Showcase */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-3xl p-6 flex flex-col items-center justify-center">
              
              {/* Soft Backlight Glow */}
              <div className="absolute w-60 h-60 bg-gradient-to-tr from-[#6B21AB] via-[#FC5BDA] to-[#FFD700] rounded-full blur-3xl opacity-40"></div>

              {/* Mascot Image */}
              <img 
                src="/mascot.png" 
                alt="Kalavora Mascot" 
                className="w-64 md:w-80 h-auto object-contain mix-blend-screen drop-shadow-[0_0_40px_rgba(252,91,218,0.8)] relative z-10" 
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

        {/* HIGH CONVERTING BOTTOM BANNER */}
        <section className="pt-8">
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