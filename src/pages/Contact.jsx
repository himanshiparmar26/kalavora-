import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Sparkles } from 'lucide-react';

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
    
    const textMessage = 
      `*New Inquiry - Kalavora Website*\n\n` +
      `👤 *Name:* ${formData.name}\n` +
      `📞 *Phone:* ${formData.phone}\n` +
      `✉️ *Email:* ${formData.email}\n` +
      `🛠️ *Service Required:* ${formData.service}\n` +
      `💰 *Estimated Budget:* ${formData.budget}\n` +
      `📝 *Message:* ${formData.message || 'N/A'}`;

    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(textMessage)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="bg-[#FFFFFF] text-[#000000] py-20 px-6 relative w-full min-h-screen overflow-hidden font-sans">
      
      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        
        {/* Header with Mascot */}
        <div className="grid md:grid-cols-12 gap-8 items-center text-center md:text-left pt-2">
          <div className="md:col-span-8 space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#000000]/10 bg-[#000000]/[0.03] text-[#000000] text-xs font-bold tracking-widest uppercase">
              <Sparkles className="w-3.5 h-3.5 text-[#6B21AB]" /> GET IN TOUCH
            </div>
            
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#000000] leading-tight tracking-tight">
              Let's Build Something <span className="text-[#6B21AB] italic font-normal">Extraordinary</span>
            </h1>
            
            <p className="text-[#000000]/70 text-sm md:text-base max-w-xl font-medium leading-relaxed">
              Ready to elevate your brand? Fill out the form or reach out directly on WhatsApp.
            </p>
          </div>

          <div className="md:col-span-4 flex justify-center items-center">
            <div className="relative w-56 h-56 md:w-72 md:h-72 flex items-center justify-center">
              <img 
                src={mascotContact} 
                alt="Kalavora Support Mascot" 
                className="w-full h-full object-contain relative z-10 hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
          
          {/* Left Column: Contact Details */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-2xl font-bold text-[#000000] mb-4">Contact Information</h2>

            <div className="p-6 rounded-3xl bg-[#000000]/[0.02] border border-[#000000]/10 hover:border-[#6B21AB]/40 transition-colors flex items-center gap-4">
              <div className="p-3.5 rounded-2xl bg-[#FFFFFF] border border-[#000000]/10 text-[#6B21AB] shadow-sm">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-[#000000]/60 font-medium">Email Us</p>
                <a href="mailto:kalavoraindia@gmail.com" className="text-sm font-bold text-[#000000] hover:text-[#6B21AB] transition-colors">
                  kalavoraindia@gmail.com
                </a>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-[#000000]/[0.02] border border-[#000000]/10 hover:border-[#6B21AB]/40 transition-colors flex items-center gap-4">
              <div className="p-3.5 rounded-2xl bg-[#FFFFFF] border border-[#000000]/10 text-[#6B21AB] shadow-sm">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-[#000000]/60 font-medium">Call / WhatsApp Us</p>
                <a href="tel:+917877145565" className="text-sm font-bold text-[#000000] hover:text-[#6B21AB] transition-colors">
                  +91 78771 45565
                </a>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-[#000000]/[0.02] border border-[#000000]/10 hover:border-[#6B21AB]/40 transition-colors flex items-center gap-4">
              <div className="p-3.5 rounded-2xl bg-[#FFFFFF] border border-[#000000]/10 text-[#6B21AB] shadow-sm">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-[#000000]/60 font-medium">Location</p>
                <p className="text-sm font-bold text-[#000000]">Kalavora Creative Studio, India</p>
              </div>
            </div>

            {/* Direct WhatsApp Box */}
            <div className="p-6 rounded-3xl bg-[#000000]/[0.02] border border-[#000000]/10 text-center space-y-4">
              <div className="flex items-center justify-center gap-3">
                <img 
                  src={mascotSuccess} 
                  alt="Kalavora Success Mascot" 
                  className="w-14 h-14 object-contain"
                />
                <div className="text-left">
                  <h4 className="text-xs font-bold text-[#6B21AB] uppercase tracking-wider">Fast Execution</h4>
                  <p className="text-[11px] text-[#000000]/70 font-medium">Prefer direct chat over forms?</p>
                </div>
              </div>

              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-[#25D366] text-[#FFFFFF] font-bold text-xs flex items-center justify-center gap-2 hover:bg-[#1ebd53] transition-all cursor-pointer shadow-sm"
              >
                <MessageCircle className="w-4 h-4 fill-current" /> Quick Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Right Column: Lead Form */}
          <div className="lg:col-span-3 rounded-3xl bg-[#000000]/[0.02] border border-[#000000]/10 p-8 relative">
            <h2 className="text-2xl font-bold text-[#000000] mb-6">Send a Message</h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-[#000000]/80">Your Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-[#FFFFFF] border border-[#000000]/10 text-[#000000] text-xs focus:outline-none focus:border-[#6B21AB] transition-colors shadow-sm"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-[#000000]/80">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-[#FFFFFF] border border-[#000000]/10 text-[#000000] text-xs focus:outline-none focus:border-[#6B21AB] transition-colors shadow-sm"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-[#000000]/80">Your Email *</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-[#FFFFFF] border border-[#000000]/10 text-[#000000] text-xs focus:outline-none focus:border-[#6B21AB] transition-colors shadow-sm"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-[#000000]/80">Service Required *</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-[#FFFFFF] border border-[#000000]/10 text-[#000000] text-xs focus:outline-none focus:border-[#6B21AB] transition-colors cursor-pointer shadow-sm"
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
                  <label className="text-xs font-bold text-[#000000]/80">Estimated Budget Range</label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-[#FFFFFF] border border-[#000000]/10 text-[#000000] text-xs focus:outline-none focus:border-[#6B21AB] transition-colors cursor-pointer shadow-sm"
                  >
                    <option value="₹5,000 - ₹10,000">₹5,000 - ₹10,000</option>
                    <option value="₹10,000 - ₹25,000">₹10,000 - ₹25,000</option>
                    <option value="₹25,000 - ₹50,000">₹25,000 - ₹50,000</option>
                    <option value="₹50,000+">₹50,000+</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-[#000000]/80">Message / Project Details</label>
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Tell us about your project or requirements..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-[#FFFFFF] border border-[#000000]/10 text-[#000000] text-xs focus:outline-none focus:border-[#6B21AB] transition-colors resize-none shadow-sm"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-xl bg-[#6B21AB] hover:bg-[#FC5BDA] text-[#FFFFFF] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer shadow-sm"
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