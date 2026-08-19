import React, { useState } from 'react';
import { 
  Sparkles, 
  Calculator as CalcIcon, 
  CheckCircle2, 
  MessageCircle, 
  Layers, 
  Zap, 
  Globe, 
  Video, 
  Search, 
  BookOpen,
  ArrowRight
} from 'lucide-react';

export default function Calculator() {
  const whatsappNumber = "917877145565";

  // Service list with estimated baseline pricing (in INR)
  const availableServices = [
    {
      id: "branding",
      category: "Design",
      icon: <Layers className="w-5 h-5 text-[#FFD700]" />,
      title: "Brand Identity & Guidelines",
      desc: "Logo suite, typography, color scheme & visual brand guide.",
      price: 15000
    },
    {
      id: "web-dev",
      category: "Development",
      icon: <Globe className="w-5 h-5 text-[#FFD700]" />,
      title: "High-Speed Landing Page",
      desc: "React/Tailwind high-converting modern responsive site.",
      price: 25000
    },
    {
      id: "meta-ads",
      category: "Marketing",
      icon: <Zap className="w-5 h-5 text-[#FC5BDA]" />,
      title: "Meta Ads & Performance Setup",
      desc: "Ad setup, audience targeting, ROAS tracking & campaign mgmt.",
      price: 20000
    },
    {
      id: "reels-editing",
      category: "Media",
      icon: <Video className="w-5 h-5 text-[#FC5BDA]" />,
      title: "Motion Video & Reels Package (10 Reels)",
      desc: "High-retention editing, motion graphics, audio sync & hooks.",
      price: 18000
    },
    {
      id: "seo-growth",
      category: "SEO",
      icon: <Search className="w-5 h-5 text-[#FFD700]" />,
      title: "SEO & Local Search Optimization",
      desc: "On-page optimization, keyword strategy & Google rankings.",
      price: 12000
    },
    {
      id: "editorial-invites",
      category: "Print",
      icon: <BookOpen className="w-5 h-5 text-[#FC5BDA]" />,
      title: "Luxury Digital Invite / Editorial Spread",
      desc: "Bespoke digital animated cards or corporate catalog layout.",
      price: 10000
    }
  ];

  const [selectedServices, setSelectedServices] = useState([availableServices[0].id]);

  const toggleService = (id) => {
    if (selectedServices.includes(id)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter((s) => s !== id));
      }
    } else {
      setSelectedServices([...selectedServices, id]);
    }
  };

  // Calculate Total Estimated Investment
  const totalEstimate = availableServices
    .filter((s) => selectedServices.includes(s.id))
    .reduce((sum, item) => sum + item.price, 0);

  // Send selected breakdown directly to WhatsApp
  const handleWhatsAppSend = () => {
    const selectedItems = availableServices.filter((s) => selectedServices.includes(s.id));
    
    let message = `*Hi Kalavora Team!* 👋\n\nI used the Project Estimator on your website and selected the following package breakdown:\n\n`;
    
    selectedItems.forEach((item, index) => {
      message += `${index + 1}. *${item.title}* - ₹${item.price.toLocaleString('en-IN')}\n`;
    });

    message += `\n💰 *Total Estimated Investment:* ₹${totalEstimate.toLocaleString('en-IN')}\n\nI would like to discuss this proposal and start our project!`;

    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="bg-[#000000] text-[#FFFFFF] min-h-screen pt-28 pb-20 relative overflow-hidden font-sans">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[#6B21AB]/20 rounded-full blur-[160px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-[#FC5BDA]/15 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10 space-y-12">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#FFD700]/60 bg-[#FFD700]/10 text-[#FFD700] text-xs font-bold tracking-widest uppercase shadow-[0_0_15px_rgba(255,215,0,0.25)]">
            <CalcIcon className="w-4 h-4" /> INSTANT ESTIMATOR
          </div>
          
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-[#FFFFFF] leading-tight">
            Calculate Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] via-[#FC5BDA] to-[#FFFFFF] italic">
              Project Investment
            </span>
          </h1>
          
          <p className="text-gray-300 text-sm md:text-base font-light">
            Select the services you need to build a custom growth package for your business.
          </p>
        </div>

        {/* Main Interactive Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Services Selection Grid (8 Cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {availableServices.map((service) => {
              const isSelected = selectedServices.includes(service.id);
              return (
                <div
                  key={service.id}
                  onClick={() => toggleService(service.id)}
                  className={`p-6 rounded-3xl border transition-all duration-300 cursor-pointer flex flex-col justify-between backdrop-blur-md relative overflow-hidden ${
                    isSelected
                      ? 'bg-[#6B21AB]/30 border-[#FFD700] shadow-[0_0_25px_rgba(255,215,0,0.2)] -translate-y-1'
                      : 'bg-[#6B21AB]/10 border-[#FC5BDA]/30 hover:border-[#FC5BDA] opacity-70 hover:opacity-100'
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="p-3 rounded-2xl bg-black/70 border border-[#FC5BDA]/30">
                        {service.icon}
                      </div>
                      <div className={`w-6 h-6 rounded-full border flex items-center justify-center transition-all ${
                        isSelected ? 'bg-[#FFD700] border-[#FFD700] text-black' : 'border-gray-500'
                      }`}>
                        {isSelected && <CheckCircle2 className="w-4 h-4 text-black stroke-[3]" />}
                      </div>
                    </div>

                    <h3 className="font-bold text-base text-white font-serif">{service.title}</h3>
                    <p className="text-gray-300 text-xs font-light leading-relaxed">{service.desc}</p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between">
                    <span className="text-[11px] text-gray-400 uppercase tracking-wider font-semibold">{service.category}</span>
                    <span className="text-sm font-bold text-[#FFD700]">₹{service.price.toLocaleString('en-IN')}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Real-time Order Summary Card (5 Cols) */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="p-8 rounded-3xl bg-gradient-to-b from-[#6B21AB]/30 via-black to-[#FC5BDA]/20 border border-[#FC5BDA]/40 shadow-[0_0_40px_rgba(252,91,218,0.25)] backdrop-blur-md space-y-6">
              
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <h3 className="text-xl font-bold font-serif text-white flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-[#FFD700]" /> Selected Package
                </h3>
                <span className="text-xs text-[#FFD700] bg-[#FFD700]/10 border border-[#FFD700]/30 px-3 py-1 rounded-full font-bold">
                  {selectedServices.length} {selectedServices.length === 1 ? 'Service' : 'Services'}
                </span>
              </div>

              {/* Itemized List */}
              <div className="space-y-3 max-h-[220px] overflow-y-auto pr-2 custom-scrollbar">
                {availableServices
                  .filter((s) => selectedServices.includes(s.id))
                  .map((item) => (
                    <div key={item.id} className="flex items-center justify-between text-xs py-1.5 border-b border-white/5">
                      <span className="text-gray-200 font-medium">{item.title}</span>
                      <span className="text-[#FFD700] font-bold shrink-0 ml-2">₹{item.price.toLocaleString('en-IN')}</span>
                    </div>
                  ))}
              </div>

              {/* Total Price Display */}
              <div className="p-5 rounded-2xl bg-black/80 border border-[#FFD700]/40 space-y-1">
                <span className="text-xs text-gray-400 uppercase tracking-wider">Estimated Total</span>
                <div className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] via-[#FC5BDA] to-[#FFFFFF]">
                  ₹{totalEstimate.toLocaleString('en-IN')}
                </div>
                <span className="text-[10px] text-gray-400 block pt-1">* Final scope may vary based on exact custom requirements.</span>
              </div>

              {/* Send WhatsApp Trigger Button */}
              <button
                onClick={handleWhatsAppSend}
                className="w-full py-4 rounded-2xl bg-[#25D366] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#1ebd53] transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(37,211,102,0.4)] cursor-pointer"
              >
                <MessageCircle className="w-5 h-5" /> Lock Package On WhatsApp <ArrowRight className="w-4 h-4" />
              </button>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
}