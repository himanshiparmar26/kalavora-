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
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
  };

  const ProjectCard = ({ project }) => (
    <div className="p-4 rounded-3xl bg-[#000000]/[0.02] border border-[#000000]/10 hover:border-[#6B21AB]/40 hover:shadow-lg hover:shadow-[#000000]/5 transition-all duration-300 flex flex-col justify-between group min-h-[340px]">
      <div>
        <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-[#F3F4F6] mb-4">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100" 
          />
          
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors flex items-center justify-center">
            {project.type === 'video' ? (
              <button 
                onClick={() => setSelectedMedia(project)}
                aria-label={`Play video for ${project.title}`}
                className="p-3.5 rounded-full bg-[#FC5BDA] text-white hover:scale-110 transition-transform cursor-pointer shadow-md"
              >
                <Play className="w-5 h-5 fill-current" />
              </button>
            ) : (
              <button 
                onClick={() => setSelectedMedia(project)}
                aria-label={`View ${project.title}`}
                className="p-3.5 rounded-full bg-white text-[#6B21AB] border border-[#6B21AB]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:scale-110 cursor-pointer shadow-md"
              >
                <Eye className="w-5 h-5" />
              </button>
            )}
          </div>

          <span className="absolute top-3 left-3 text-[10px] font-bold px-3 py-1 rounded-xl bg-[#FFFFFF] border border-[#6B21AB]/30 text-[#6B21AB] shadow-sm">
            {project.category}
          </span>
        </div>

        <div className="px-2 space-y-2">
          <h3 className="text-lg font-bold text-[#000000] group-hover:text-[#6B21AB] transition-colors leading-snug">
            {project.title}
          </h3>
          <p className="text-[#000000]/70 text-xs font-medium leading-relaxed mb-3">
            {project.description}
          </p>

          <div className="flex items-center gap-1.5 flex-wrap">
            {project.tags.map((tag, idx) => (
              <span key={idx} className="text-[10px] text-[#6B21AB] bg-[#6B21AB]/10 px-2.5 py-0.5 rounded-md font-bold">
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="p-2 pt-4">
        <button
          onClick={() => handleWhatsAppInquiry(project.title)}
          className="w-full py-2.5 px-4 rounded-xl bg-[#FFFFFF] border border-[#6B21AB]/30 hover:border-[#25D366] hover:bg-[#25D366]/10 text-xs font-bold text-[#000000] hover:text-[#25D366] flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer shadow-sm"
        >
          <MessageCircle className="w-4 h-4 text-[#25D366]" />
          Order Similar Design
        </button>
      </div>
    </div>
  );

  return (
    <section className="bg-[#FFFFFF] text-[#000000] pt-12 pb-24 px-6 relative w-full min-h-screen font-sans">
      
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Header Section */}
        <div className="grid md:grid-cols-12 gap-8 items-center text-center md:text-left pt-4">
          <div className="md:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#000000]/10 bg-[#000000]/[0.03] text-[#000000] text-xs font-bold tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-[#FC5BDA] animate-pulse"></span>
              <Sparkles className="w-3.5 h-3.5 text-[#6B21AB]" /> Selected Projects
            </div>
            
            <h1 className="text-4xl md:text-6xl font-extrabold text-[#000000] leading-tight tracking-tight">
              Our Featured <span className="text-[#6B21AB] italic font-normal">Work</span>
            </h1>
            
            <p className="text-[#000000]/70 text-sm md:text-base max-w-xl font-medium leading-relaxed">
              Explore our creative design, video editing, digital cards, and editorial layouts crafted for maximum impact.
            </p>
          </div>

          <div className="md:col-span-4 flex justify-center items-center">
            <img 
              src="/mascot-work.png" 
              alt="Kalavora Creative Mascot" 
              className="w-48 md:w-56 h-auto object-contain hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-center gap-2 md:gap-3 flex-wrap pb-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold tracking-wide transition-all duration-300 cursor-pointer ${
                activeTab === category
                  ? 'bg-[#6B21AB] text-[#FFFFFF] shadow-sm'
                  : 'bg-[#000000]/[0.02] text-[#000000]/70 border border-[#000000]/10 hover:border-[#6B21AB]/40 hover:text-[#000000]'
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
        <div className="p-8 md:p-10 rounded-3xl bg-[#000000]/[0.015] border border-[#000000]/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-3 text-center md:text-left max-w-xl">
            <span className="text-[#6B21AB] text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 bg-[#6B21AB]/10 rounded-full inline-flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-[#6B21AB]" /> High-Performance Visuals
            </span>
            <h3 className="text-2xl md:text-3xl font-extrabold text-[#000000] tracking-tight">
              Want Custom Visual Assets for Your Next Campaign?
            </h3>
            <p className="text-[#000000]/70 text-xs md:text-sm font-medium leading-relaxed">
              We design brand identities, reel graphics, and ads engineered to hook attention and drive real lead conversions.
            </p>
          </div>

          <div className="shrink-0">
            <img 
              src="/mascot-marketing.png" 
              alt="Quality Design Mascot" 
              className="w-36 md:w-44 h-auto object-contain hover:scale-105 transition-transform duration-300"
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

        {/* Bottom CTA Banner */}
        <div className="pt-8">
          <div className="text-center space-y-6 text-[#000000]">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#000000]">
              Ready to Upgrade Your <br />
              <span className="text-[#6B21AB] italic font-normal">
                Brand Assets?
              </span>
            </h2>

            <p className="text-[#000000]/70 text-sm max-w-lg mx-auto font-medium leading-relaxed">
              Chat directly with our design team to discuss your custom project deliverables.
            </p>

            <div className="flex justify-center pt-2">
              <button
                onClick={() => handleWhatsAppInquiry("New Custom Design Project")}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#25D366] text-[#FFFFFF] font-extrabold text-xs uppercase tracking-wider hover:bg-[#1ebd53] transition-all duration-300 shadow-md cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-[#FFFFFF] fill-current" /> Start Discussion on WhatsApp
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* Lightbox / Video Modal */}
      {selectedMedia && (
        <div 
          className="fixed inset-0 z-50 bg-[#000000]/40 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedMedia(null)}
        >
          <div 
            className="relative w-full max-w-3xl bg-[#FFFFFF] border border-[#000000]/10 rounded-3xl overflow-hidden p-6 space-y-4 shadow-2xl text-[#000000]"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setSelectedMedia(null)}
              aria-label="Close modal"
              className="absolute top-4 right-4 p-2 rounded-full bg-[#FFFFFF] text-[#000000]/60 border border-[#000000]/10 hover:text-[#000000] transition-colors cursor-pointer z-10"
            >
              <X className="w-5 h-5 text-[#6B21AB]" />
            </button>

            <h3 className="text-xl font-bold text-[#6B21AB] pr-8">{selectedMedia.title}</h3>

            {selectedMedia.type === 'video' ? (
              <video controls autoPlay className="w-full aspect-video rounded-2xl bg-[#000000]">
                <source src={selectedMedia.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <img src={selectedMedia.image} alt={selectedMedia.title} className="w-full max-h-[70vh] object-contain rounded-2xl border border-[#000000]/10" />
            )}

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
              <p className="text-xs text-[#000000]/70 font-medium">{selectedMedia.description}</p>
              <button
                onClick={() => {
                  const title = selectedMedia.title;
                  setSelectedMedia(null);
                  handleWhatsAppInquiry(title);
                }}
                className="py-2.5 px-5 rounded-xl bg-[#25D366] text-[#FFFFFF] font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#1ebd53] transition-colors shrink-0 cursor-pointer shadow-md"
              >
                <MessageCircle className="w-4 h-4 text-[#FFFFFF] fill-current" /> Inquiry on WhatsApp
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}