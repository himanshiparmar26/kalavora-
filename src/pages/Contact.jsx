import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Sparkles } from 'lucide-react';

// Mascot imports matching your exact mapping
import mascotContact from '/mascot-contact.png';
import mascotSuccess from '/mascot-success.png';

export default function Contact() {
  const whatsappNumber = "917877145565";

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Brand Identity & Design',
    budget: '₹10,000 - ₹25,000',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Auto-formatted WhatsApp Message Template
    const textMessage = 
      `*New Inquiry - Kalavora Website*\n\n` +
      `👤 *Name:* ${formData.name}\n` +
      `📞 *Phone:* ${formData.phone}\n` +
      `✉️ *Email:* ${formData.email}\n` +
      `🛠️ *Service Required:* ${formData.service}\n` +
      `💰 *Estimated Budget:* ${formData.budget}\n` +
      `📝 *Message:* ${formData.message || 'N/A'}`;

    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(textMessage)}`, '_blank');
  };

  return (
    <section className="bg-[#000000] text-[#FFFFFF] py-20 px-6 relative w-full min-h-screen">
      
      {/* Background Glow Effects */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[#6B21AB]/20 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-[#FC5BDA]/15 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto space-y-12 relative z-10">
        
        {/* Standardized Header with Coffee Cup Penguin Mascot */}
        <div className="grid md:grid-cols-12 gap-8 items-center text-center md:text-left pt-2">
          <div className="md:col-span-8 space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#FFD700]/60 bg-[#FFD700]/10 text-[#FFD700] text-xs font-bold tracking-widest uppercase shadow-[0_0_15px_rgba(255,215,0,0.25)]">
              <Sparkles className="w-3.5 h-3.5 text-[#FFD700]" /> GET IN TOUCH
            </div>
            
            <h1 className="text-4xl md:text-5xl font-extrabold font-serif text-[#FFFFFF]">
              Let's Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] via-[#FC5BDA] to-[#FFFFFF] italic">Extraordinary</span>
            </h1>
            
            <p className="text-gray-300 text-sm md:text-base max-w-xl font-light">
              Ready to elevate your brand? Fill out the form or reach out directly on WhatsApp.
            </p>
          </div>

          {/* Standardized Mascot Container */}
          <div className="md:col-span-4 flex justify-center items-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
              <div className="absolute w-48 h-48 md:w-60 md:h-60 bg-[#FC5BDA]/30 rounded-full blur-3xl pointer-events-none"></div>
              <img 
                src={mascotContact} 
                alt="Coffee Cup Penguin Client Support" 
                className="w-full h-full object-contain drop-shadow-[0_0_35px_rgba(252,91,218,0.7)] relative z-10 hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
          
          {/* Left Column: Contact Information (2 cols) */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-2xl font-bold font-serif text-[#FFFFFF] mb-4">Contact Information</h2>

            <div className="p-6 rounded-3xl bg-[#6B21AB]/10 border border-[#FC5BDA]/30 hover:border-[#FFD700] transition-colors flex items-center gap-4 backdrop-blur-md">
              <div className="p-3.5 rounded-2xl bg-black border border-[#FC5BDA]/40 text-[#FC5BDA]">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-gray-400 font-medium">Email Us</p>
                <a href="mailto:kalavoraindia@gmail.com" className="text-sm font-bold text-white hover:text-[#FFD700] transition-colors">
                  kalavoraindia@gmail.com
                </a>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-[#6B21AB]/10 border border-[#FC5BDA]/30 hover:border-[#FFD700] transition-colors flex items-center gap-4 backdrop-blur-md">
              <div className="p-3.5 rounded-2xl bg-black border border-[#FC5BDA]/40 text-[#FC5BDA]">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-gray-400 font-medium">Call / WhatsApp Us</p>
                <a href="tel:+917877145565" className="text-sm font-bold text-white hover:text-[#FFD700] transition-colors">
                  +91 78771 45565
                </a>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-[#6B21AB]/10 border border-[#FC5BDA]/30 hover:border-[#FFD700] transition-colors flex items-center gap-4 backdrop-blur-md">
              <div className="p-3.5 rounded-2xl bg-black border border-[#FC5BDA]/40 text-[#FC5BDA]">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-gray-400 font-medium">Location</p>
                <p className="text-sm font-bold text-white">Kalavora Creative Studio, India</p>
              </div>
            </div>

            {/* Direct WhatsApp Callout Card with Thumbs Up Penguin */}
            <div className="p-6 rounded-3xl bg-gradient-to-r from-[#25D366]/20 to-black border border-[#25D366]/40 text-center space-y-4">
              <div className="flex items-center justify-center gap-3">
                <img 
                  src={mascotSuccess} 
                  alt="Thumbs Up Penguin Success" 
                  className="w-14 h-14 object-contain drop-shadow-[0_0_10px_rgba(37,211,102,0.5)]"
                />
                <div className="text-left">
                  <h4 className="text-xs font-bold text-[#FFD700] uppercase tracking-wider">Fast Execution</h4>
                  <p className="text-[11px] text-gray-300 font-light">Prefer direct chat over forms?</p>
                </div>
              </div>

              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-[#25D366] text-white font-bold text-xs flex items-center justify-center gap-2 hover:bg-[#1ebd53] transition-all shadow-[0_0_15px_rgba(37,211,102,0.4)] cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" /> Quick Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Right Column: Lead Form (3 cols) */}
          <div className="lg:col-span-3 rounded-3xl bg-[#6B21AB]/10 border border-[#FC5BDA]/30 p-8 backdrop-blur-md relative">
            <h2 className="text-2xl font-bold font-serif text-[#FFFFFF] mb-6">Send a Message</h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Name & Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-300">Your Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-black/80 border border-[#FC5BDA]/30 text-white text-xs focus:outline-none focus:border-[#FFD700] transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-300">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-black/80 border border-[#FC5BDA]/30 text-white text-xs focus:outline-none focus:border-[#FFD700] transition-colors"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-300">Your Email *</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-black/80 border border-[#FC5BDA]/30 text-white text-xs focus:outline-none focus:border-[#FFD700] transition-colors"
                />
              </div>

              {/* Service Dropdown & Budget Dropdown */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-300">Service Required *</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-black/80 border border-[#FC5BDA]/30 text-white text-xs focus:outline-none focus:border-[#FFD700] transition-colors cursor-pointer"
                  >
                    <option value="Brand Identity & Design">Brand Identity & Design</option>
                    <option value="Digital Marketing & Ads">Digital Marketing & Performance Ads</option>
                    <option value="Social Media Management">Social Media Management</option>
                    <option value="Web Development">Web Development</option>
                    <option value="Video Editing & Motion Reels">Video Editing & Motion Reels</option>
                    <option value="SEO & Growth Strategy">SEO & Growth Strategy</option>
                    <option value="Luxury Invitations & Event Cards">Luxury Invitations & Event Cards</option>
                    <option value="Magazine & Editorial Layouts">Magazine & Editorial Layouts</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-300">Estimated Budget Range</label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-black/80 border border-[#FC5BDA]/30 text-white text-xs focus:outline-none focus:border-[#FFD700] transition-colors cursor-pointer"
                  >
                    <option value="₹5,000 - ₹10,000">₹5,000 - ₹10,000</option>
                    <option value="₹10,000 - ₹25,000">₹10,000 - ₹25,000</option>
                    <option value="₹25,000 - ₹50,000">₹25,000 - ₹50,000</option>
                    <option value="₹50,000+">₹50,000+</option>
                  </select>
                </div>
              </div>

              {/* Message Area */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-300">Message / Project Details</label>
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Tell us about your project or requirements..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-black/80 border border-[#FC5BDA]/30 text-white text-xs focus:outline-none focus:border-[#FFD700] transition-colors resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#FC5BDA] via-[#9333EA] to-[#FC5BDA] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:opacity-90 hover:scale-[1.01] transition-all cursor-pointer shadow-[0_0_20px_rgba(252,91,218,0.5)]"
              >
                Send Message via WhatsApp <Send className="w-4 h-4" />
              </button>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
}