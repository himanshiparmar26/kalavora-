import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  Play, 
  X, 
  MessageCircle,
  Eye,
  Award
} from 'lucide-react';

export default function OurWork() {
  const whatsappNumber = "917877145565";
  const [activeTab, setActiveTab] = useState('All');
  const [selectedMedia, setSelectedMedia] = useState(null);

  const categories = [
    'All',
    'Branding',
    'Video & Reels',
    'Invitations',
    'Magazines & Print'
  ];

  const portfolioProjects = [
    {
      id: 1,
      title: "Kalavora Brand Visual Identity System",
      category: "Branding",
      image: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&q=80&w=800",
      description: "Complete visual guidelines, modern logo typography, and high-converting marketing assets.",
      tags: ["Logo", "Brand Guide", "Identity"],
      type: "image"
    },
    {
      id: 2,
      title: "3D Motion Promo Reel",
      category: "Video & Reels",
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=800",
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
      description: "High-converting Instagram Reel featuring 3D product motion graphics.",
      tags: ["Reels", "Motion Graphics", "3D"],
      type: "video"
    },
    {
      id: 3,
      title: "Royal Animated Wedding Invite",
      category: "Invitations",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800",
      description: "Interactive digital WhatsApp invitation video with custom RSVP music.",
      tags: ["Digital Card", "Wedding", "Animation"],
      type: "image"
    },
    {
      id: 4,
      title: "Luxury Fashion Magazine Spread",
      category: "Magazines & Print",
      image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=800",
      description: "Modern editorial layout design with high-end print typography.",
      tags: ["Magazine", "Catalog", "Editorial"],
      type: "image"
    },
    {
      id: 5,
      title: "Kalavora Identity Bento Grid",
      category: "Branding",
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=800",
      description: "Modern neon-dark studio branding and social media templates.",
      tags: ["Identity", "Typography", "Bento"],
      type: "image"
    },
    {
      id: 6,
      title: "Cinematic Event Teaser Video",
      category: "Video & Reels",
      image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&q=80&w=800",
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
      description: "Fast-paced event highlight edit with color grading and sound design.",
      tags: ["Video Editing", "Color Grading", "Teaser"],
      type: "video"
    }
  ];

  // Modal accessibility hooks
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedMedia(null);
    };
    if (selectedMedia) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedMedia]);

  const filteredProjects = activeTab === 'All' 
    ? portfolioProjects 
    : portfolioProjects.filter(p => p.category === activeTab);

  const topProjects = filteredProjects.slice(0, 3);
  const remainingProjects = filteredProjects.slice(3);

  const handleWhatsAppInquiry = (projectTitle) => {
    const text = `Hi Kalavora Team! I saw your project "${projectTitle}" in your portfolio. I want something similar for my business.`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  const ProjectCard = ({ project }) => (
    <div 
      className="rounded-3xl bg-[#6B21AB]/10 border border-[#FC5BDA]/30 hover:border-[#FFD700] overflow-hidden group transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(255,215,0,0.2)] backdrop-blur-md flex flex-col justify-between"
    >
      <div className="relative aspect-video w-full overflow-hidden bg-black/50">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-85 group-hover:opacity-100" 
        />
        
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors flex items-center justify-center">
          {project.type === 'video' ? (
            <button 
              onClick={() => setSelectedMedia(project)}
              aria-label={`Play video for ${project.title}`}
              className="p-4 rounded-full bg-[#FC5BDA]/90 text-white shadow-[0_0_20px_rgba(252,91,218,0.8)] hover:scale-110 transition-transform cursor-pointer"
            >
              <Play className="w-6 h-6 fill-current" />
            </button>
          ) : (
            <button 
              onClick={() => setSelectedMedia(project)}
              aria-label={`View ${project.title}`}
              className="p-3.5 rounded-full bg-black/60 text-[#FFD700] border border-[#FFD700]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:scale-110 cursor-pointer"
            >
              <Eye className="w-5 h-5" />
            </button>
          )}
        </div>

        <span className="absolute top-3 left-3 text-[10px] font-bold px-3 py-1 rounded-xl bg-[#000000]/80 border border-[#FC5BDA]/40 text-[#FFD700]">
          {project.category}
        </span>
      </div>

      <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-bold text-[#FFFFFF] group-hover:text-[#FFD700] transition-colors font-serif mb-2">
            {project.title}
          </h3>
          <p className="text-gray-300 text-xs font-light leading-relaxed mb-4">
            {project.description}
          </p>

          <div className="flex items-center gap-2 flex-wrap">
            {project.tags.map((tag, idx) => (
              <span key={idx} className="text-[10px] text-gray-400 bg-white/5 px-2.5 py-1 rounded-md border border-white/10">
                #{tag}
              </span>
            ))}
          </div>
        </div>

        <button
          onClick={() => handleWhatsAppInquiry(project.title)}
          className="w-full mt-4 py-2.5 px-4 rounded-xl bg-[#000000]/80 border border-[#FC5BDA]/40 hover:border-[#25D366] hover:bg-[#25D366]/10 text-xs font-bold text-[#FFFFFF] hover:text-[#25D366] flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer"
        >
          <MessageCircle className="w-4 h-4 text-[#25D366]" />
          Order Similar Design
        </button>
      </div>
    </div>
  );

  return (
    <section className="bg-[#000000] text-[#FFFFFF] py-20 px-6 relative w-full min-h-screen font-sans">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[#6B21AB]/20 rounded-full blur-[160px] pointer-events-none"></div>
      <div className="absolute bottom-20 right-10 w-[400px] h-[400px] bg-[#FC5BDA]/15 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto space-y-12 relative z-10">
        
        {/* Header with Mascot #1 */}
        <div className="grid md:grid-cols-12 gap-8 items-center text-center md:text-left pt-2">
          <div className="md:col-span-8 space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#FFD700]/60 bg-[#FFD700]/10 text-[#FFD700] text-xs font-bold tracking-widest uppercase shadow-[0_0_15px_rgba(255,215,0,0.25)]">
              <Sparkles className="w-3.5 h-3.5 text-[#FFD700]" /> SELECTED PROJECTS
            </div>
            
            <h1 className="text-4xl md:text-5xl font-extrabold font-serif text-[#FFFFFF]">
              Our Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] via-[#FC5BDA] to-[#FFFFFF] italic">Work</span>
            </h1>
            
            <p className="text-gray-300 text-sm md:text-base max-w-xl font-light">
              Explore our creative design, video editing, digital cards, and editorial layouts crafted for maximum impact.
            </p>
          </div>

          <div className="md:col-span-4 flex justify-center items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#6B21AB] to-[#FC5BDA] rounded-full blur-2xl opacity-40"></div>
              <img 
                src="/mascot-work.png" 
                alt="Kalavora Creative Mascot" 
                className="w-40 md:w-52 h-auto object-contain drop-shadow-[0_0_25px_rgba(252,91,218,0.6)] relative z-10 hover:scale-105 transition-transform"
              />
            </div>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-center gap-2 md:gap-4 flex-wrap pb-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`px-5 py-2 rounded-full text-xs font-bold tracking-wide transition-all duration-300 cursor-pointer ${
                activeTab === category
                  ? 'bg-gradient-to-r from-[#FFD700] to-[#FC5BDA] text-[#000000] shadow-[0_0_15px_rgba(255,215,0,0.4)] scale-105'
                  : 'bg-[#000000]/80 text-gray-300 border border-[#FC5BDA]/30 hover:border-[#FFD700] hover:text-[#FFFFFF]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* First 3 Portfolio Items */}
        {topProjects.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {topProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}

        {/* Mascot Spotlight Banner #2 */}
        <div className="rounded-3xl border border-[#FC5BDA]/50 bg-gradient-to-r from-[#6B21AB]/30 via-black to-[#FC5BDA]/20 p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_0_40px_rgba(252,91,218,0.2)]">
          <div className="space-y-3 text-center md:text-left max-w-xl">
            <span className="text-[#FFD700] text-xs font-bold uppercase tracking-widest px-3 py-1 bg-[#FFD700]/10 border border-[#FFD700]/40 rounded-full inline-flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5" /> High-Performance Visuals
            </span>
            <h3 className="text-2xl md:text-3xl font-extrabold font-serif text-white">
              Want Custom Visual Assets for Your Next Campaign?
            </h3>
            <p className="text-gray-300 text-xs md:text-sm font-light leading-relaxed">
              We design brand identities, reel graphics, and ads engineered to hook attention and drive real lead conversions.
            </p>
          </div>

          <div className="shrink-0 relative">
            <div className="absolute inset-0 bg-[#FFD700]/20 rounded-full blur-xl"></div>
            <img 
              src="/mascot-marketing.png" 
              alt="Quality Design Mascot" 
              className="w-36 md:w-44 h-auto object-contain drop-shadow-[0_0_20px_rgba(255,215,0,0.5)] relative z-10 hover:scale-105 transition-transform"
            />
          </div>
        </div>

        {/* Remaining Portfolio Items */}
        {remainingProjects.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {remainingProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}

        {/* Bottom CTA Banner with Mascot #3 */}
        <div className="rounded-3xl bg-gradient-to-r from-[#6B21AB]/40 via-black to-[#FC5BDA]/20 border border-[#FC5BDA]/40 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 backdrop-blur-md shadow-[0_0_50px_rgba(107,33,171,0.3)]">
          <div className="space-y-4 text-center md:text-left">
            <h2 className="text-2xl md:text-4xl font-extrabold font-serif text-white">
              Ready to Upgrade Your Brand Assets?
            </h2>
            <p className="text-gray-300 text-xs md:text-sm max-w-lg font-light">
              Chat directly with our design team to discuss your custom project deliverables.
            </p>
            <button
              onClick={() => handleWhatsAppInquiry("New Custom Design Project")}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#25D366] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#1ebd53] transition-all shadow-[0_0_25px_rgba(37,211,102,0.4)] cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" /> Start Discussion on WhatsApp
            </button>
          </div>

          <img 
            src="/mascot.png" 
            alt="Support Penguin Mascot" 
            className="w-36 md:w-44 h-auto object-contain drop-shadow-[0_0_20px_rgba(252,91,218,0.5)] shrink-0"
          />
        </div>

      </div>

      {/* Lightbox / Video Modal */}
      {selectedMedia && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative w-full max-w-3xl bg-[#111111] border border-[#FC5BDA]/50 rounded-3xl overflow-hidden p-6 space-y-4 shadow-[0_0_40px_rgba(252,91,218,0.3)]">
            
            <button 
              onClick={() => setSelectedMedia(null)}
              aria-label="Close modal"
              className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white hover:text-[#FFD700] transition-colors cursor-pointer z-10"
            >
              <X className="w-6 h-6" />
            </button>

            <h3 className="text-xl font-bold text-[#FFD700] font-serif pr-8">{selectedMedia.title}</h3>

            {selectedMedia.type === 'video' ? (
              <video controls autoPlay className="w-full aspect-video rounded-2xl bg-black">
                <source src={selectedMedia.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <img src={selectedMedia.image} alt={selectedMedia.title} className="w-full max-h-[70vh] object-contain rounded-2xl" />
            )}

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
              <p className="text-xs text-gray-300">{selectedMedia.description}</p>
              <button
                onClick={() => {
                  const title = selectedMedia.title;
                  setSelectedMedia(null);
                  handleWhatsAppInquiry(title);
                }}
                className="py-2 px-4 rounded-xl bg-[#25D366] text-white font-bold text-xs flex items-center justify-center gap-2 hover:bg-[#1ebd53] transition-colors shrink-0 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" /> Inquiry on WhatsApp
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}