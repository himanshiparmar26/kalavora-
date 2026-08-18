import React, { useState } from 'react';
import { 
  TrendingUp, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Send 
} from 'lucide-react';

export default function AgencyFeatures() {
  const [auditSubmitted, setAuditSubmitted] = useState(false);

  const processSteps = [
    {
      num: "01",
      title: "Audit & Analysis",
      desc: "Hum aapke brand presence, competitor gaps, aur regional search intent ka thorough technical audit karte hain."
    },
    {
      num: "02",
      title: "Custom Growth Blueprint",
      desc: "Hyper-local funnels, high-ROI performance marketing, aur high-converting UI/UX visual strategies design karte hain."
    },
    {
      num: "03",
      title: "Creative Execution",
      desc: "High-end content production, visual design assets, video editing, aur technical SEO infrastructure live deploy hota hai."
    },
    {
      num: "04",
      title: "Scale & Dominate",
      desc: "Continuous data tracking, campaign optimization, aur conversion rate scaling se top market rank hold karte hain."
    }
  ];

  // Real Names & Customized Text
  const caseStudies = [
    {
      client: "Tamanna Aircon Engineers",
      category: "LOCAL SEO & BRAND GUIDELINES",
      metric: "+320%",
      metricLabel: "Local Lead Growth",
      desc: "Exhaustive corporate identity system aur targeted regional geo-funnels se air conditioning search space mein dominant market position achieve ki."
    },
    {
      client: "Kalavora Digital Ecosystem",
      category: "PERFORMANCE MARKETING & WEB TECH",
      metric: "5.4x",
      metricLabel: "Average Campaign ROI",
      desc: "High-converting web infrastructure, custom UI layouts, aur data-driven Meta/Google ads funnels se business acquisition scale kiya."
    },
    {
      client: "Udaipur Hospitality & Resorts",
      category: "SOCIAL MEDIA & VISUAL ASSETS",
      metric: "1.2M+",
      metricLabel: "Organic Impressions",
      desc: "High-impact video editing, reels strategies, aur luxury visual storytelling se direct booking inquiries aur engagement double ki."
    }
  ];

  const handleAuditSubmit = (e) => {
    e.preventDefault();
    setAuditSubmitted(true);
  };

  return (
    <div className="bg-[#000000] text-[#FFFFFF] font-sans space-y-24 py-12 relative overflow-hidden">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-[#6B21AB]/20 blur-[180px] pointer-events-none rounded-full"></div>
      <div className="absolute bottom-1/4 right-10 w-[400px] h-[400px] bg-[#FC5BDA]/15 blur-[160px] pointer-events-none rounded-full"></div>

      <div className="max-w-7xl mx-auto space-y-20 relative z-10">

        {/* SECTION 1: CASE STUDIES / LIVE RESULTS */}
        <section className="space-y-10">
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#6B21AB] bg-[#000000]">
              <TrendingUp className="w-3.5 h-3.5 text-[#FFD700]" />
              <span className="text-[11px] font-bold tracking-widest uppercase text-[#FFD700]">
                PROVEN AGENCY IMPACT
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold font-serif text-[#FFFFFF]">
              Real Business <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#FC5BDA] via-[#FFD700] to-[#FC5BDA]">Growth & Results</span>
            </h2>
            <p className="text-gray-400 text-xs md:text-sm max-w-xl mx-auto font-light">
              Kalavora design systems aur data-led marketing campaigns ke real outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map((cs, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl border border-[#6B21AB]/50 bg-[#000000] hover:border-[#FC5BDA] transition-all duration-300 space-y-4 relative group hover:shadow-[0_0_25px_rgba(252,91,218,0.2)] flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <span className="text-[10px] font-extrabold tracking-wider uppercase text-[#FFD700] block">
                    {cs.category}
                  </span>
                  <h3 className="text-xl font-bold font-serif text-[#FFFFFF]">
                    {cs.client}
                  </h3>
                  <p className="text-xs text-gray-300 font-light leading-relaxed">
                    {cs.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#6B21AB]/40 flex items-center justify-between">
                  <div>
                    <span className="text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#FC5BDA] to-[#FFD700]">
                      {cs.metric}
                    </span>
                    <span className="text-[10px] text-gray-400 block font-medium">
                      {cs.metricLabel}
                    </span>
                  </div>
                  <div className="w-8 h-8 rounded-full border border-[#6B21AB] group-hover:border-[#FFD700] flex items-center justify-center transition-colors">
                    <ArrowRight className="w-4 h-4 text-[#FC5BDA] group-hover:text-[#FFD700]" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 2: 4-STEP PROCESS TIMELINE */}
        <section className="space-y-12">
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#6B21AB] bg-[#000000]">
              <Sparkles className="w-3.5 h-3.5 text-[#FFD700]" />
              <span className="text-[11px] font-bold tracking-widest uppercase text-[#FFD700]">
                HOW WE EXECUTE
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold font-serif text-[#FFFFFF]">
              Our 4-Step <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#FC5BDA] via-[#FFD700] to-[#FC5BDA]">Growth Roadmap</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl border border-[#6B21AB]/40 bg-[#000000] relative space-y-4 hover:border-[#FFD700] transition-all group"
              >
                <div className="text-4xl font-black font-serif text-transparent bg-clip-text bg-gradient-to-r from-[#FC5BDA] to-[#6B21AB] group-hover:from-[#FFD700] group-hover:to-[#FC5BDA] transition-all">
                  {step.num}
                </div>
                <h3 className="text-lg font-bold text-[#FFFFFF]">
                  {step.title}
                </h3>
                <p className="text-xs text-gray-400 font-light leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 3: FREE AUDIT BANNER WITH UPDATED TEXT */}
        <section className="p-8 md:p-12 rounded-3xl border-2 border-[#FC5BDA] bg-gradient-to-b from-[#000000] via-[#000000] to-[#6B21AB]/30 shadow-[0_0_50px_rgba(252,91,218,0.25)] relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFD700] text-[#000000] font-black text-[10px] tracking-wider uppercase">
                LIMITED FREE OFFER
              </div>
              <h2 className="text-2xl md:text-4xl font-extrabold font-serif text-[#FFFFFF]">
                Get Your Free <br />
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#FC5BDA] via-[#FFD700] to-[#FC5BDA]">
                  SEO & Brand Audit Report
                </span>
              </h2>
              <p className="text-xs md:text-sm text-gray-300 font-light leading-relaxed max-w-lg">
                Apne brand ka complete digital audit, competitive analysis, aur high-ROI growth roadmap within 24 hours receive karein.
              </p>
            </div>

            <div className="lg:col-span-5 bg-[#000000] p-6 rounded-2xl border border-[#6B21AB] shadow-xl">
              {auditSubmitted ? (
                <div className="text-center py-8 space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-[#FFD700] mx-auto" />
                  <h3 className="text-lg font-bold text-[#FFFFFF]">Audit Request Received!</h3>
                  <p className="text-xs text-gray-300">
                    Kalavora team aapki detail analyze karke 24 ghante ke andar audit report share karegi.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleAuditSubmit} className="space-y-4">
                  <div>
                    <label className="text-[10px] font-bold text-[#FFD700] tracking-wider uppercase block mb-1">
                      Business Name / Website URL
                    </label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. Kalavora / mybusiness.com" 
                      className="w-full bg-[#000000] border border-[#6B21AB] rounded-xl px-4 py-2.5 text-xs text-[#FFFFFF] placeholder-gray-500 focus:outline-none focus:border-[#FC5BDA]"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-bold text-[#FFD700] tracking-wider uppercase block mb-1">
                      WhatsApp Number / Email
                    </label>
                    <input 
                      type="text" 
                      required
                      placeholder="+91 98765 43210" 
                      className="w-full bg-[#000000] border border-[#6B21AB] rounded-xl px-4 py-2.5 text-xs text-[#FFFFFF] placeholder-gray-500 focus:outline-none focus:border-[#FC5BDA]"
                    />
                  </div>

                  <button 
                    type="submit"
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-[#FC5BDA] via-[#6B21AB] to-[#FC5BDA] text-[#FFFFFF] font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2 hover:scale-[1.02] transition-all shadow-[0_0_15px_rgba(252,91,218,0.4)] cursor-pointer"
                  >
                    <span>Claim Free Audit</span>
                    <Send className="w-3.5 h-3.5 text-[#FFD700]" />
                  </button>
                </form>
              )}
            </div>

          </div>
        </section>

      </div>
    </div>
  );
}