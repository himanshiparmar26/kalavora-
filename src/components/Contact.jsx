import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function ContactSection() {
  return (
    <section className="bg-black text-white py-20 px-6 relative overflow-hidden">
      
      {/* Background Ambient Neon Glows */}
      <div className="absolute top-1/2 left-10 -translate-y-1/2 w-[350px] h-[350px] bg-[#6B21AB]/20 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-[#FC5BDA]/15 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto space-y-12 relative z-10">
        
        {/* Header Subtitle */}
        <div className="text-center space-y-3">
          <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto font-light">
            Ready to elevate your brand? Let's build something extraordinary together.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Contact Details */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-2xl font-bold font-serif mb-6 text-white">
              Contact Information
            </h3>

            {/* Email Card */}
            <a 
              href="mailto:kalavoraindia@gmail.com" 
              className="flex items-center gap-4 p-5 rounded-2xl bg-zinc-950/80 border border-zinc-800/80 hover:border-[#FC5BDA] transition-all duration-300 hover:shadow-[0_0_20px_rgba(252,91,218,0.2)] group backdrop-blur-md block"
            >
              <div className="p-3.5 rounded-xl bg-black border border-zinc-800 group-hover:border-[#FC5BDA]/50 transition-colors">
                <Mail className="w-5 h-5 text-[#FC5BDA]" />
              </div>
              <div>
                <span className="block text-xs text-gray-400 font-medium">Email Us</span>
                <span className="text-sm md:text-base font-semibold text-white group-hover:text-[#FC5BDA] transition-colors">
                  kalavoraindia@gmail.com
                </span>
              </div>
            </a>

            {/* Phone Card */}
            <a 
              href="tel:+919983794014" 
              className="flex items-center gap-4 p-5 rounded-2xl bg-zinc-950/80 border border-zinc-800/80 hover:border-[#FC5BDA] transition-all duration-300 hover:shadow-[0_0_20px_rgba(252,91,218,0.2)] group backdrop-blur-md block"
            >
              <div className="p-3.5 rounded-xl bg-black border border-zinc-800 group-hover:border-[#FC5BDA]/50 transition-colors">
                <Phone className="w-5 h-5 text-[#FC5BDA]" />
              </div>
              <div>
                <span className="block text-xs text-gray-400 font-medium">Call Us</span>
                <span className="text-sm md:text-base font-semibold text-white group-hover:text-[#FC5BDA] transition-colors">
                  +91 9983794014
                </span>
              </div>
            </a>

            {/* Location Card */}
            <div className="flex items-center gap-4 p-5 rounded-2xl bg-zinc-950/80 border border-zinc-800/80 hover:border-[#FC5BDA] transition-all duration-300 hover:shadow-[0_0_20px_rgba(252,91,218,0.2)] group backdrop-blur-md">
              <div className="p-3.5 rounded-xl bg-black border border-zinc-800 group-hover:border-[#FC5BDA]/50 transition-colors">
                <MapPin className="w-5 h-5 text-[#FC5BDA]" />
              </div>
              <div>
                <span className="block text-xs text-gray-400 font-medium">Location</span>
                <span className="text-sm md:text-base font-semibold text-white">
                  Creative Agency Studio, India
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 rounded-3xl bg-zinc-950/90 border border-zinc-800/80 p-8 space-y-6 backdrop-blur-md shadow-2xl relative">
            <h3 className="text-2xl font-bold font-serif text-white">
              Send a Message
            </h3>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="text-xs font-semibold text-gray-300">Your Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe" 
                  className="w-full px-4 py-3 rounded-xl bg-black border border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:border-[#FC5BDA] focus:ring-1 focus:ring-[#FC5BDA] transition-all text-sm"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold text-gray-300">Your Email</label>
                <input 
                  type="email" 
                  placeholder="john@example.com" 
                  className="w-full px-4 py-3 rounded-xl bg-black border border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:border-[#FC5BDA] focus:ring-1 focus:ring-[#FC5BDA] transition-all text-sm"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold text-gray-300">Message</label>
                <textarea 
                  rows={4}
                  placeholder="Tell us about your project..." 
                  className="w-full px-4 py-3 rounded-xl bg-black border border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:border-[#FC5BDA] focus:ring-1 focus:ring-[#FC5BDA] transition-all text-sm resize-none"
                ></textarea>
              </div>

              <div className="pt-2 flex justify-end">
                <button 
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#FC5BDA] to-purple-600 text-white text-sm font-bold shadow-[0_0_20px_rgba(252,91,218,0.4)] hover:shadow-[0_0_30px_rgba(252,91,218,0.6)] hover:scale-[1.02] active:scale-95 transition-all"
                >
                  Send Message <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}